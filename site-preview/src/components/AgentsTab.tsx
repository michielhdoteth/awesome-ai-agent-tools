import { useState } from "react";
import { 
  Users, 
  Search, 
  Download, 
  Copy, 
  Check, 
  Terminal, 
  Code, 
  User, 
  ChevronRight, 
  FileCode,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { AGENTS_DIRECTORY, AgentItem } from "../data";

interface AgentsTabProps {
  searchQuery?: string;
  setSearchQuery?: (val: string) => void;
}

export default function AgentsTab({ searchQuery = "", setSearchQuery }: AgentsTabProps) {
  const [localSearch, setLocalSearch] = useState("");
  const currentSearch = setSearchQuery ? searchQuery : localSearch;
  const setCurrentSearch = setSearchQuery || setLocalSearch;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeAgentId, setActiveAgentId] = useState<string | null>(AGENTS_DIRECTORY[0]?.id || null);

  const categories = ["All", "Engineering", "Operations", "Marketing", "Writing", "Data"];

  // Filter logic
  const filteredAgents = AGENTS_DIRECTORY.filter((agent) => {
    const matchesSearch = 
      agent.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      agent.role.toLowerCase().includes(currentSearch.toLowerCase()) ||
      agent.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      agent.skillsRequired.some(s => s.toLowerCase().includes(currentSearch.toLowerCase())) ||
      agent.mcpRequired.some(m => m.toLowerCase().includes(currentSearch.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = (id: string, configText: string) => {
    navigator.clipboard.writeText(configText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (name: string, configText: string) => {
    const blob = new Blob([configText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.toLowerCase().replace(/\s+/g, "-")}-config.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const activeAgent = AGENTS_DIRECTORY.find(a => a.id === activeAgentId) || AGENTS_DIRECTORY[0];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Intro Header */}
      <div className="bg-[#1a1a1a] text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-between min-h-[180px]">
        <div className="absolute right-0 top-0 opacity-10 -mr-12 -mt-12">
          <Users className="h-64 w-64 text-emerald-400 animate-pulse" />
        </div>
        <div className="max-w-3xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-[#1a1a1a] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
              Agents Directory
            </span>
            <span className="text-xs font-mono text-neutral-400">Pre-Configured Assistants</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
            Autonomous Agent Blueprints
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Explore ready-to-use, specialized agent configurations. Instantly search, review required 
            skills, verify MCP server requirements, and download their configuration JSON for Claude Desktop, Cursor, or Aider with a single click.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar Row (Bento Style) */}
      <div className="bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[24px] p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
          <input
            id="agent-search-input"
            type="text"
            placeholder="Search agents, skills, or MCPs..."
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-200 text-neutral-800 pl-9 pr-4 py-2 rounded-xl text-xs font-bold focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
          />
        </div>

        {/* Categories Scroller */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`cat-btn-${cat}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Interactive Agent Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredAgents.length === 0 ? (
            <div className="bg-[#fdfdfd] border-2 border-dashed border-neutral-300 rounded-[24px] p-12 text-center">
              <Users className="h-10 w-10 text-neutral-300 mx-auto mb-3" />
              <p className="text-xs font-bold text-neutral-500">No agents found matching your query.</p>
            </div>
          ) : (
            filteredAgents.map((agent) => {
              const isActive = agent.id === activeAgentId;
              return (
                <div
                  key={agent.id}
                  id={`agent-card-${agent.id}`}
                  onClick={() => setActiveAgentId(agent.id)}
                  className={`border-2 rounded-[24px] p-5 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? "bg-black text-white border-black shadow-lg translate-x-1"
                      : "bg-[#fdfdfd] border-neutral-200 hover:border-neutral-400 text-[#1a1a1a] hover:bg-neutral-50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-0.5 text-[8px] font-mono font-bold uppercase rounded ${
                        isActive ? "bg-neutral-800 text-neutral-200" : "bg-neutral-100 text-neutral-600"
                      }`}>
                        {agent.category}
                      </span>
                      <span className={`text-[9px] font-bold ${isActive ? "text-neutral-400" : "text-neutral-400"}`}>
                        {agent.role}
                      </span>
                    </div>

                    <h3 className="font-black text-sm uppercase tracking-tight mb-1">{agent.name}</h3>
                    <p className={`text-xs line-clamp-2 leading-relaxed mb-4 ${
                      isActive ? "text-neutral-300" : "text-neutral-500 font-semibold"
                    }`}>
                      {agent.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t pt-3 border-neutral-200/20">
                    <div className="flex gap-1.5">
                      <span className="text-[9px] font-mono opacity-80 flex items-center gap-0.5">
                        <Code className="h-3 w-3 shrink-0" /> {agent.skillsRequired.length} Skills
                      </span>
                      <span className="text-[9px] font-mono opacity-80 flex items-center gap-0.5">
                        <Terminal className="h-3 w-3 shrink-0" /> {agent.mcpRequired.length} MCPs
                      </span>
                    </div>
                    <span className="text-xs flex items-center font-bold uppercase tracking-wider text-[10px] gap-1">
                      Setup <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Side: Configuration & System Prompt Detail Inspector (7 cols) */}
        <div className="lg:col-span-7">
          {activeAgent ? (
            <div className="bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[32px] p-6 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div>
                  <h3 className="font-black text-xl text-[#1a1a1a] uppercase tracking-tight">{activeAgent.name}</h3>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider font-mono mt-0.5">
                    Role: {activeAgent.role} • Category: {activeAgent.category}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    id={`btn-copy-agent-${activeAgent.id}`}
                    onClick={() => handleCopy(activeAgent.id, activeAgent.configFile)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-[10px] font-black uppercase tracking-wider cursor-pointer transition-all border border-neutral-200"
                  >
                    {copiedId === activeAgent.id ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy Config</span>
                      </>
                    )}
                  </button>
                  <button
                    id={`btn-download-agent-${activeAgent.id}`}
                    onClick={() => handleDownload(activeAgent.name, activeAgent.configFile)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-black hover:bg-neutral-800 text-white rounded-xl text-[10px] font-black uppercase tracking-wider cursor-pointer transition-all shadow-sm"
                  >
                    <Download className="h-3 w-3" />
                    <span>Download Config</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-extrabold uppercase text-neutral-400 block tracking-wider">Mission Statement</span>
                <p className="text-sm text-neutral-800 leading-relaxed font-semibold">
                  {activeAgent.description}
                </p>
              </div>

              {/* Requirement boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f5f5f4] p-4 rounded-2xl border border-neutral-200 space-y-2">
                  <div className="flex items-center space-x-1.5 text-neutral-800">
                    <Code className="h-4 w-4" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wide">Required Skills (.claude)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeAgent.skillsRequired.map((skill, i) => (
                      <span key={i} className="bg-white text-neutral-800 border border-neutral-300 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#f5f5f4] p-4 rounded-2xl border border-neutral-200 space-y-2">
                  <div className="flex items-center space-x-1.5 text-neutral-800">
                    <Terminal className="h-4 w-4" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wide">Connected MCP Servers</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeAgent.mcpRequired.map((mcp, i) => (
                      <span key={i} className="bg-white text-neutral-800 border border-neutral-300 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                        {mcp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* System Prompt block */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-extrabold uppercase text-neutral-400 block tracking-wider">System Instructions Prompt</span>
                  <button
                    onClick={() => handleCopy(`${activeAgent.id}-prompt`, activeAgent.systemPrompt)}
                    className="text-[10px] font-bold text-neutral-500 hover:text-black flex items-center space-x-1"
                  >
                    {copiedId === `${activeAgent.id}-prompt` ? (
                      <>
                        <Check className="h-2.5 w-2.5 text-emerald-600" />
                        <span>Copied Prompt</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-2.5 w-2.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 text-xs font-mono font-medium text-neutral-700 max-h-[160px] overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                  {activeAgent.systemPrompt}
                </div>
              </div>

              {/* Config file schema */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-extrabold uppercase text-neutral-400 block tracking-wider">Config File (`claude_desktop_config.json` fragment)</span>
                <pre className="bg-[#1a1a1a] text-white p-4 rounded-2xl text-[11px] font-mono overflow-x-auto max-h-[180px] shadow-inner select-all leading-normal">
                  {activeAgent.configFile}
                </pre>
              </div>

              {/* Fast download card */}
              <div className="bg-[#ebf5ff] border border-blue-200 p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <FileCode className="h-4.5 w-4.5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-900">One-click Installation</h4>
                    <p className="text-[10px] text-blue-700 font-semibold">Load this config blueprint instantly into your workspace.</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(activeAgent.name, activeAgent.configFile)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl shrink-0 cursor-pointer flex items-center gap-1 transition-colors"
                >
                  Download Blueprint <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#fdfdfd] border-2 border-dashed border-neutral-300 rounded-[32px] p-20 text-center text-neutral-400">
              <Users className="h-12 w-12 mx-auto mb-4 text-neutral-200" />
              <h4 className="text-sm font-black uppercase tracking-wide text-neutral-500">No Agent Selected</h4>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed mt-1 font-medium">
                Click on any agent blueprint on the left panel to review its configuration, prompts, and credentials.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
