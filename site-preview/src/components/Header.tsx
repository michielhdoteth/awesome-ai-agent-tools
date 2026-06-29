import { Terminal, Github, Code, RefreshCw, Cpu, Users, Search, Puzzle, Blocks } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  stats: {
    skillsCount: number;
    mcpsCount: number;
    loopsCount: number;
    agentsCount: number;
    subagentsCount: number;
    pluginsCount: number;
  };
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function Header({ activeTab, setActiveTab, stats, searchQuery, setSearchQuery }: HeaderProps) {
  const tabs = [
    { id: "skills", label: "Agent Skills", icon: Code, count: stats.skillsCount },
    { id: "mcps", label: "MCP Servers", icon: Terminal, count: stats.mcpsCount },
    { id: "loops", label: "Agent Loops", icon: RefreshCw, count: stats.loopsCount },
    { id: "subagents", label: "Subagents", icon: Blocks, count: stats.subagentsCount },
    { id: "plugins", label: "Plugins", icon: Puzzle, count: stats.pluginsCount },
    { id: "agents", label: "Agents Directory", icon: Users, count: stats.agentsCount },
    { id: "creator", label: "Skill Creator", icon: Cpu },
  ];

  return (
    <header className="border-b border-neutral-200 bg-[#fdfdfd] sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Top Bento Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-black text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
                GitHub
              </span>
              <span className="text-xs font-mono text-neutral-500 font-medium">
                michielhdoteth / awesome-ai-agent-tools
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-[#1a1a1a]">
              AI Agent<br/>Intelligence
            </h1>
          </div>

          {/* Large Stats block resembling Bento design */}
          <div className="flex gap-6 md:gap-8 text-left md:text-right flex-wrap">
            <div>
              <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-1 font-mono">Skills</p>
              <p className="text-2xl font-mono font-black leading-none text-[#1a1a1a]">{stats.skillsCount}</p>
            </div>
            <div className="w-[1px] h-8 bg-neutral-200 self-center hidden md:block" />
            <div>
              <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-1 font-mono">MCPs</p>
              <p className="text-2xl font-mono font-black leading-none text-[#1a1a1a]">{stats.mcpsCount}</p>
            </div>
            <div className="w-[1px] h-8 bg-neutral-200 self-center hidden md:block" />
            <div>
              <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-1 font-mono">Loops</p>
              <p className="text-2xl font-mono font-black leading-none text-[#1a1a1a]">{stats.loopsCount}</p>
            </div>
            <div className="w-[1px] h-8 bg-neutral-200 self-center hidden md:block" />
            <div>
              <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-1 font-mono">Subagents</p>
              <p className="text-2xl font-mono font-black leading-none text-[#1a1a1a]">{stats.subagentsCount}</p>
            </div>
            <div className="w-[1px] h-8 bg-neutral-200 self-center hidden md:block" />
            <div>
              <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-1 font-mono">Plugins</p>
              <p className="text-2xl font-mono font-black leading-none text-[#1a1a1a]">{stats.pluginsCount}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Bento Capsule Design) & Global Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-t border-neutral-100 pt-4 gap-4">
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 scrollbar-none max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-btn-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#1a1a1a] text-white shadow-sm ring-2 ring-[#1a1a1a]/5"
                      : "text-neutral-500 hover:text-black hover:bg-neutral-100"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`ml-1 px-1.5 py-0.5 text-[9px] rounded-full font-mono font-bold ${
                      isActive ? "bg-neutral-800 text-white" : "bg-neutral-100 text-neutral-600"
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Global Search Bar */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-neutral-400" />
            <input
              id="global-search-input"
              type="text"
              placeholder="Search directory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f5f5f4] border-2 border-transparent text-[#1a1a1a] pl-10 pr-8 py-1.5 rounded-full text-xs font-bold focus:outline-none focus:bg-white focus:border-black transition-all placeholder-neutral-400"
            />
            {searchQuery && (
              <button
                id="btn-clear-global-search"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-2 text-neutral-400 hover:text-black font-extrabold text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
