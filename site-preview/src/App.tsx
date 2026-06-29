import { useState, useEffect } from "react";
import Header from "./components/Header";
import SkillsTab from "./components/SkillsTab";
import McpsTab from "./components/McpsTab";
import LoopsTab from "./components/LoopsTab";
import AgentsTab from "./components/AgentsTab";
import CreatorTab from "./components/CreatorTab";
import SubagentsTab from "./components/SubagentsTab";
import PluginsTab from "./components/PluginsTab";

// Local imports as fallbacks/initial state
import { SKILLS_CATALOG, MCP_SERVERS, AGENT_LOOPS, AGENTS_DIRECTORY, SUBAGENTS_CATALOG, PLUGINS_CATALOG, SkillItem, McpServerItem, AgentLoopItem, SubagentItem, PluginItem } from "./data";
import { Github, Code } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("skills");
  const [skills, setSkills] = useState<SkillItem[]>(SKILLS_CATALOG);
  const [mcps, setMcps] = useState<McpServerItem[]>(MCP_SERVERS);
  const [loops, setLoops] = useState<AgentLoopItem[]>(AGENT_LOOPS);
  const [subagents, setSubagents] = useState<SubagentItem[]>(SUBAGENTS_CATALOG);
  const [plugins, setPlugins] = useState<PluginItem[]>(PLUGINS_CATALOG);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Dynamic fetch of curated catalog data from our server API, fallback to local state
    async function fetchCatalog() {
      try {
        const response = await fetch("/api/catalog");
        if (response.ok) {
          const data = await response.json();
          if (data.skills) setSkills(data.skills);
          if (data.mcps) setMcps(data.mcps);
          if (data.loops) setLoops(data.loops);
        }
      } catch (err) {
        console.warn("Failed to load catalog from server API, using local fallback state", err);
      }
    }

    fetchCatalog();
  }, []);

  const stats = {
    skillsCount: skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
    ).length,
    mcpsCount: mcps.filter(m => 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.description.toLowerCase().includes(searchQuery.toLowerCase())
    ).length,
    loopsCount: loops.filter(l => 
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      l.description.toLowerCase().includes(searchQuery.toLowerCase())
    ).length,
    agentsCount: AGENTS_DIRECTORY.filter(agent => 
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      agent.mcpRequired.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()))
    ).length,
    subagentsCount: subagents.filter(a => 
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (a.tags && a.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))
    ).length,
    pluginsCount: plugins.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.platform.toLowerCase().includes(searchQuery.toLowerCase())
    ).length,
  };

  return (
    <div className="bg-[#fdfdfd] text-[#1a1a1a] min-h-screen font-sans flex flex-col justify-between selection:bg-[#1a1a1a] selection:text-white">
      {/* Top Header & Navigation bar */}
      <div>
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          stats={stats} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
 
        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="transition-all duration-300">
            {activeTab === "skills" && <SkillsTab skills={skills} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            {activeTab === "mcps" && <McpsTab servers={mcps} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            {activeTab === "loops" && <LoopsTab loops={loops} searchQuery={searchQuery} />}
            {activeTab === "agents" && <AgentsTab searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            {activeTab === "subagents" && <SubagentsTab subagents={subagents} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            {activeTab === "plugins" && <PluginsTab plugins={plugins} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            {activeTab === "creator" && <CreatorTab />}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-[#fdfdfd] py-10 mt-12 text-center text-xs text-neutral-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center space-x-1.5 font-medium">
            <Code className="h-4 w-4 text-neutral-400" />
            <span>AI Agent Tools Directory & Simulator. Open source under MIT.</span>
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/michielhdoteth/awesome-ai-agent-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:underline flex items-center space-x-1 transition-colors font-semibold text-neutral-700"
            >
              <span>GitHub Repository</span>
              <Github className="h-3.5 w-3.5" />
            </a>
            <span className="text-neutral-300">|</span>
            <span className="font-medium text-neutral-500">Created with Google AI Studio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
