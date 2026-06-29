import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Ensure the Gemini client is initialized lazily and gracefully handles missing keys
let aiClient: GoogleGenAI | null = null;

function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please add it to your secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Import data catalogs (using relative path)
import { SKILLS_CATALOG, MCP_SERVERS, AGENT_LOOPS } from "./src/data";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Fetch static catalogs
  app.get("/api/catalog", (req, res) => {
    res.json({
      skills: SKILLS_CATALOG,
      mcps: MCP_SERVERS,
      loops: AGENT_LOOPS,
    });
  });

  // API Route: AI-powered recommender with Google Search grounding
  app.post("/api/gemini/recommend", async (req, res) => {
    try {
      const { projectDescription, techStack, selectedInterests } = req.body;
      const ai = getGemini();

      const prompt = `You are an expert AI Agent Architect. The user wants recommendations for building their AI agent workspace.
Project Context:
- Description: ${projectDescription || "General agent development"}
- Tech Stack: ${techStack || "TypeScript / Python"}
- Areas of Interest: ${(selectedInterests || []).join(", ") || "General automation"}

We have an internal catalog of tools:
1. CURATED SKILLS: ${SKILLS_CATALOG.map(s => `${s.name} (${s.category})`).join(", ")}
2. MCP SERVERS: ${MCP_SERVERS.map(m => `${m.name} (${m.category})`).join(", ")}
3. AGENT LOOPS: ${AGENT_LOOPS.map(l => `${l.name} (${l.category})`).join(", ")}

Please recommend:
1. The top 2-3 specific Curated Skills the user should copy/install.
2. The top 2-3 Model Context Protocol (MCP) servers they should connect, explaining how they integrate with their stack.
3. The most relevant Agent Loop pattern they should implement (or a custom hybrid loop).

Provide the output in a clear, beautiful, structured Markdown format. Be direct, professional, and practical. Under each recommendation, provide the setup/install instructions and a brief code/config snippet of how it works. Additionally, perform google searches if needed to suggest the absolute latest external tools, NPM packages, or GitHub links related to their request.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      // Extract text content and search grounding chunks
      const text = response.text || "";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

      res.json({
        success: true,
        recommendation: text,
        groundingChunks,
      });
    } catch (error: any) {
      console.error("Gemini Recommender Error:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate recommendations with Gemini.",
      });
    }
  });

  // API Route: Generate standard compliant SKILL.md
  app.post("/api/gemini/generate-skill", async (req, res) => {
    try {
      const { name, description, category, instructions, userApiKey } = req.body;
      
      let ai;
      if (userApiKey && userApiKey.trim() !== "") {
        ai = new GoogleGenAI({
          apiKey: userApiKey.trim(),
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build",
            },
          },
        });
      } else {
        ai = getGemini();
      }

      const prompt = `Generate a fully functional, standard-compliant 'SKILL.md' file for an AI agent skill.
Details:
- Skill Name: ${name}
- Category: ${category}
- General Purpose: ${description}
- Custom Instructions/Steps: ${instructions || "Automate general task flow"}

Guidelines for the file structure:
- It must start with standard frontmatter metadata in YAML.
- Use clean, modern Markdown formatting.
- Section 1: Intent & Boundaries. Define when the skill is active, what is forbidden, and how it handles inputs.
- Section 2: Step-by-Step workflow. Write actionable instructions for the AI assistant.
- Section 3: Verification & Validation checklist before the agent completes the task.

Output only the raw Markdown of the SKILL.md file inside markdown blocks, do not write other conversational text.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      res.json({
        success: true,
        skillContent: response.text || "",
      });
    } catch (error: any) {
      console.error("Gemini Skill Generator Error:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate SKILL.md.",
      });
    }
  });

  // API Route: Generate MCP Desktop / Cursor Configuration JSON
  app.post("/api/gemini/generate-mcp-config", async (req, res) => {
    try {
      const { selectedMcps, selectedServers } = req.body; // Selected MCP items with optional parameters
      const serversToUse = selectedMcps || selectedServers;
      const ai = getGemini();

      const prompt = `Write a Claude Desktop configuration JSON (\`claude_desktop_config.json\`) containing the following selected MCP servers.
Selected Servers details:
${JSON.stringify(serversToUse, null, 2)}

Provide a single JSON file that can be copied directly into the user's Claude Desktop config. Make sure the 'command' and 'args' of 'npx' are correctly defined based on official specifications. For example, for filesystem, use 'npx' as the command and ['-y', '@modelcontextprotocol/server-filesystem', ...] as arguments. Return only the raw JSON inside code blocks, plus a very brief explanation of where to paste this file (e.g., %APPDATA% on Windows, or Library on macOS).`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      res.json({
        success: true,
        configContent: response.text || "",
      });
    } catch (error: any) {
      console.error("Gemini MCP Config Generator Error:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate MCP Configuration.",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
