import { useState } from "react";
import { SubagentItem } from "../data";
import { Search, Users, Copy, Check, ExternalLink, HelpCircle, Star, Terminal } from "lucide-react";

interface SubagentsTabProps {
  subagents: SubagentItem[];
  searchQuery?: string;
  setSearchQuery?: (val: string) => void;
}

export default function SubagentsTab({ subagents, searchQuery = "", setSearchQuery }: SubagentsTabProps) {
  const [localSearch, setLocalSearch] = useState("");
  const currentSearch = setSearchQuery ? searchQuery : localSearch;
  const setCurrentSearch = setSearchQuery || setLocalSearch;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = ["all", "Development", "Security", "Productivity", "Content", "Data", "DevOps", "Research", "Design", "Orchestration"];

  const filteredSubagents = subagents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      agent.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      (agent.tags && agent.tags.some(t => t.toLowerCase().includes(currentSearch.toLowerCase())));
    const matchesCategory = selectedCategory === "all" || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryColors: Record<string, string> = {
    Development: "bg-blue-600/10 text-blue-700",
    Security: "bg-red-600/10 text-red-700",
    Productivity: "bg-emerald-600/10 text-emerald-700",
    Content: "bg-purple-600/10 text-purple-700",
    Data: "bg-amber-600/10 text-amber-800",
    DevOps: "bg-orange-600/10 text-orange-700",
    Research: "bg-cyan-600/10 text-cyan-700",
    Design: "bg-pink-600/10 text-pink-700",
    Orchestration: "bg-indigo-600/10 text-indigo-700",
  };

  return (
    <div className="space-y-6">
      {/* Introduction Banner */}
      <div className="bg-[#1a1a1a] text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-between min-h-[180px]">
        <div className="absolute right-0 top-0 opacity-10 -mr-12 -mt-12">
          <Users className="h-64 w-64 text-emerald-400 animate-spin-slow" />
        </div>
        <div className="max-w-3xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-[#1a1a1a] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
              Subagent Collection
            </span>
            <span className="text-xs font-mono text-neutral-400">Specialized AI workers</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
            Subagents Directory
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Specialized subagent configurations for delegating focused tasks. Each subagent has its own system prompt,
            tool access, and model selection optimized for its specific role in the development workflow.
          </p>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#f5f5f4] border-2 border-[#1a1a1a] p-4 rounded-2xl">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
          <input
            id="search-subagents"
            type="text"
            placeholder="Search subagents..."
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
            className="w-full bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] pl-10 pr-4 py-1.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#1a1a1a] transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-end">
          <select
            id="filter-category-subagents"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[#fdfdfd] border-2 border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-xl text-xs font-bold focus:outline-none focus:border-[#1a1a1a]"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bento Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubagents.map((agent) => (
          <div
            key={agent.id}
            id={`subagent-card-${agent.id}`}
            className="group bg-[#f0fdf4] border-2 border-[#1a1a1a] rounded-[32px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded ${categoryColors[agent.category] || "bg-neutral-100 text-neutral-600"}`}>
                  {agent.category}
                </span>
                {agent.model && (
                  <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-[#1a1a1a]/10 text-neutral-800">
                    {agent.model}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-black uppercase text-[#1a1a1a] mb-2 tracking-tight group-hover:underline transition-all">
                {agent.name}
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                {agent.description}
              </p>

              {agent.tags && agent.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {agent.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-neutral-200/60 text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {agent.tools && (
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-500 mb-2">
                  <Terminal className="h-3 w-3" />
                  <span>{agent.tools.join(" / ")}</span>
                </div>
              )}
            </div>

            <div className="space-y-3 mt-4 border-t border-black/10 pt-4">
              {agent.installCommand && (
                <div className="flex items-center justify-between bg-[#fdfdfd] border border-neutral-300/80 px-3 py-1.5 rounded-xl">
                  <span className="text-[10px] font-mono text-neutral-800 select-all truncate max-w-[180px]">
                    {agent.installCommand}
                  </span>
                  <button
                    id={`btn-copy-subagent-${agent.id}`}
                    onClick={() => handleCopy(agent.id, agent.installCommand!)}
                    className="p-1 text-neutral-500 hover:text-black rounded transition-colors cursor-pointer"
                    title="Copy command"
                  >
                    {copiedId === agent.id ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between gap-2">
                {agent.githubUrl && (
                  <a
                    href={agent.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white bg-black hover:bg-neutral-800 px-3 py-2 rounded-xl font-bold uppercase tracking-wider flex-1 text-center cursor-pointer transition-colors"
                  >
                    View Source
                  </a>
                )}
                {agent.websiteUrl && (
                  <a
                    href={agent.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-700 hover:text-black hover:bg-[#fdfdfd] bg-transparent rounded-xl border border-neutral-300 transition-colors"
                    title="Website"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredSubagents.length === 0 && (
          <div className="col-span-full py-16 text-center text-neutral-500 border-2 border-dashed border-neutral-300 rounded-[32px] bg-[#f5f5f4]/30">
            <HelpCircle className="h-8 w-8 mx-auto text-neutral-400 mb-2" />
            <p className="text-sm font-bold uppercase tracking-wide">No matching subagents found</p>
          </div>
        )}
      </div>
    </div>
  );
}
