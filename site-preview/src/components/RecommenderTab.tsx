import { useState } from "react";
import { Compass, HelpCircle, Loader2, Sparkles, ExternalLink, RefreshCw } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

export default function RecommenderTab() {
  const [projectDescription, setProjectDescription] = useState(
    "A full-stack Node.js SaaS app with a database and Stripe subscription payments where developers can deploy cron-jobs."
  );
  const [techStack, setTechStack] = useState("React, Express, Tailwind CSS, PostgreSQL");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["E2E testing", "Database sync", "Git automation"]);
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");
  const [groundingChunks, setGroundingChunks] = useState<any[]>([]);
  const [error, setError] = useState("");

  const interestsList = [
    "E2E testing",
    "Database sync",
    "Git automation",
    "Copywriting",
    "SEO & Marketing",
    "Code analysis",
    "Continuous reviews",
    "Agent Memory",
    "Docker deploys"
  ];

  const handleToggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleRecommend = async () => {
    setLoading(true);
    setRecommendation("");
    setGroundingChunks([]);
    setError("");

    try {
      const response = await fetch("/api/gemini/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectDescription,
          techStack,
          selectedInterests,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setRecommendation(data.recommendation);
        setGroundingChunks(data.groundingChunks || []);
      } else {
        setError(data.error || "Gemini was unable to complete the request.");
      }
    } catch (err: any) {
      setError(err.message || "Network error. Make sure your server is online.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner (Core Frameworks Bento Style) */}
      <div className="bg-[#1a1a1a] text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-between min-h-[180px]">
        <div className="absolute right-0 top-0 opacity-10 -mr-12 -mt-12">
          <Compass className="h-64 w-64 text-indigo-400 animate-spin-slow" />
        </div>
        <div className="max-w-3xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-[#1a1a1a] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
              AI Architect
            </span>
            <span className="text-xs font-mono text-neutral-400">Search Grounding Engine</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
            Gemini AI Agent Architect
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Provide your project context, and our Gemini model (integrated with live Google Search grounding) 
            will design your agent workspace configuration and recommend standard MCP servers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Input Form Column (5 cols) */}
        <div className="lg:col-span-5 bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[32px] p-6 space-y-4 shadow-xl h-fit">
          <div className="flex items-center space-x-2 pb-3 border-b border-neutral-200">
            <Sparkles className="h-4.5 w-4.5 text-neutral-800" />
            <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wider">Workspace Requirements</h3>
          </div>

          {/* Project description */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-neutral-500 font-extrabold uppercase">Project Description</label>
            <textarea
              id="desc-input"
              rows={4}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] p-3 rounded-xl text-xs w-full font-semibold focus:outline-none focus:border-[#1a1a1a] transition-all leading-relaxed"
              placeholder="What are you building?"
            />
          </div>

          {/* Tech stack */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-neutral-500 font-extrabold uppercase">Tech Stack / Frameworks</label>
            <input
              id="stack-input"
              type="text"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              className="bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] px-3 py-1.5 rounded-xl text-xs w-full font-semibold focus:outline-none focus:border-[#1a1a1a] transition-all"
              placeholder="e.g. React, Python, Postgres, FastAPI"
            />
          </div>

          {/* Interests */}
          <div className="space-y-2">
            <label className="text-[10px] text-neutral-500 font-extrabold uppercase block">Primary Agent Responsibilities</label>
            <div className="grid grid-cols-2 gap-2">
              {interestsList.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    id={`interest-btn-${interest.replace(/\s+/g, "-")}`}
                    onClick={() => handleToggleInterest(interest)}
                    className={`flex items-center justify-between p-2 rounded-xl text-[10px] font-extrabold uppercase border-2 text-left cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#ebf5ff] border-[#1a1a1a] text-[#1a1a1a] shadow-sm"
                        : "bg-[#f5f5f4] border-transparent text-neutral-600 hover:border-neutral-400"
                    }`}
                  >
                    <span>{interest}</span>
                    {isSelected && <span className="text-black font-black ml-1">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <button
            id="btn-recommend"
            onClick={handleRecommend}
            disabled={loading}
            className="w-full bg-black hover:bg-neutral-800 text-white font-extrabold py-3 rounded-2xl text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-md shadow-black/10"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-white" />
                <span>Designing Environment...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 fill-current" />
                <span>Analyze & Recommend Tools</span>
              </>
            )}
          </button>
        </div>

        {/* Right Output Recommendations Column (7 cols) */}
        <div className="lg:col-span-7 bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[32px] p-6 min-h-[400px] flex flex-col justify-between shadow-xl">
          {loading ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-center space-y-4">
              <RefreshCw className="h-10 w-10 text-black animate-spin" />
              <h4 className="text-sm font-black uppercase tracking-tight text-[#1a1a1a]">Synthesizing recommendations...</h4>
              <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
                Gemini is inspecting our curated database of skills, loop schemas, and search grounding to write custom config files...
              </p>
            </div>
          ) : error ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-rose-500/10 border border-rose-500 flex items-center justify-center text-rose-600 font-extrabold text-lg">
                ✕
              </div>
              <h4 className="text-sm font-black uppercase tracking-wide text-[#1a1a1a]">Architect Generation Failed</h4>
              <p className="text-xs text-rose-600 max-w-md leading-relaxed font-bold">
                {error}
              </p>
              <button
                id="btn-retry"
                onClick={handleRecommend}
                className="mt-4 bg-black hover:bg-neutral-800 text-white font-extrabold py-2 px-5 rounded-xl text-xs uppercase tracking-wider cursor-pointer transition-all"
              >
                Retry Generation
              </button>
            </div>
          ) : recommendation ? (
            <div className="flex-1 flex flex-col justify-between">
              <div className="prose max-w-none text-neutral-800 leading-relaxed font-semibold text-xs space-y-3">
                <MarkdownRenderer content={recommendation} />
              </div>

              {/* Grounding references if any */}
              {groundingChunks.length > 0 && (
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <h4 className="text-[10px] font-mono font-extrabold text-neutral-500 mb-2 uppercase">Google Search Grounding:</h4>
                  <div className="flex flex-wrap gap-2">
                    {groundingChunks.map((chunk, idx) => {
                      if (!chunk.web?.uri) return null;
                      return (
                        <a
                          key={idx}
                          href={chunk.web.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#f5f5f4] hover:bg-neutral-100 border border-neutral-300 text-[9px] font-mono text-neutral-800 px-2.5 py-1 rounded-full flex items-center space-x-1 transition-colors font-bold uppercase"
                        >
                          <span>{chunk.web.title || "Search Reference"}</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-center space-y-3">
              <Compass className="h-12 w-12 text-neutral-300" />
              <h4 className="text-sm font-black uppercase tracking-wide text-neutral-400">Design Canvas Idle</h4>
              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-medium">
                Click the "Analyze & Recommend Tools" button on the left to activate Gemini and receive bespoke AI Agent configurations.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
