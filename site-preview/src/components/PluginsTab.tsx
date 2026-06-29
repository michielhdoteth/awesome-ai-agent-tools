import { useState } from "react";
import { PluginItem } from "../data";
import { Search, Puzzle, Copy, Check, ExternalLink, HelpCircle, Star, Download } from "lucide-react";

interface PluginsTabProps {
  plugins: PluginItem[];
  searchQuery?: string;
  setSearchQuery?: (val: string) => void;
}

export default function PluginsTab({ plugins, searchQuery = "", setSearchQuery }: PluginsTabProps) {
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

  const categories = ["all", "Claude Code", "OpenCode", "Cursor", "Copilot", "Windsurf", "Aider", "VS Code AI", "JetBrains", "Cross-Tool"];

  const filteredPlugins = plugins.filter((plugin) => {
    const matchesSearch =
      plugin.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      plugin.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      plugin.platform.toLowerCase().includes(currentSearch.toLowerCase());
    const matchesCategory = selectedCategory === "all" || plugin.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryColors: Record<string, string> = {
    "Claude Code": "bg-orange-600/10 text-orange-700",
    "OpenCode": "bg-violet-600/10 text-violet-700",
    "Cursor": "bg-blue-600/10 text-blue-700",
    "Copilot": "bg-green-600/10 text-green-700",
    "Windsurf": "bg-cyan-600/10 text-cyan-700",
    "Aider": "bg-amber-600/10 text-amber-800",
    "VS Code AI": "bg-sky-600/10 text-sky-700",
    "JetBrains": "bg-red-600/10 text-red-700",
    "Cross-Tool": "bg-neutral-600/10 text-neutral-700",
  };

  return (
    <div className="space-y-6">
      {/* Introduction Banner */}
      <div className="bg-[#1a1a1a] text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-between min-h-[180px]">
        <div className="absolute right-0 top-0 opacity-10 -mr-12 -mt-12">
          <Puzzle className="h-64 w-64 text-violet-400 animate-spin-slow" />
        </div>
        <div className="max-w-3xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-[#1a1a1a] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
              Extensions & Addons
            </span>
            <span className="text-xs font-mono text-neutral-400">Enhance your AI coding tools</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
            Plugins Directory
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Extensions, plugins, and addons for AI coding assistants. From rule managers to memory systems,
            these tools enhance your workflow across Claude Code, Cursor, Copilot, and more.
          </p>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#f5f5f4] border-2 border-[#1a1a1a] p-4 rounded-2xl">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
          <input
            id="search-plugins"
            type="text"
            placeholder="Search plugins..."
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
            className="w-full bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] pl-10 pr-4 py-1.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#1a1a1a] transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-end">
          <select
            id="filter-category-plugins"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[#fdfdfd] border-2 border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-xl text-xs font-bold focus:outline-none focus:border-[#1a1a1a]"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Platforms" : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bento Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlugins.map((plugin) => (
          <div
            key={plugin.id}
            id={`plugin-card-${plugin.id}`}
            className="group bg-[#faf5ff] border-2 border-[#1a1a1a] rounded-[32px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded ${categoryColors[plugin.category] || "bg-neutral-100 text-neutral-600"}`}>
                  {plugin.category}
                </span>
                <div className="flex items-center gap-2">
                  {plugin.stars && (
                    <span className="flex items-center gap-0.5 text-[9px] font-mono font-bold text-amber-700">
                      <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                      {plugin.stars}
                    </span>
                  )}
                  {plugin.installs && (
                    <span className="flex items-center gap-0.5 text-[9px] font-mono font-bold text-emerald-700">
                      <Download className="h-2.5 w-2.5" />
                      {plugin.installs}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-black uppercase text-[#1a1a1a] mb-2 tracking-tight group-hover:underline transition-all">
                {plugin.name}
              </h3>

              <p className="text-[10px] font-mono font-bold text-neutral-500 uppercase mb-2">
                {plugin.platform}
              </p>

              <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                {plugin.description}
              </p>
            </div>

            <div className="space-y-3 mt-4 border-t border-black/10 pt-4">
              {plugin.installCommand && (
                <div className="flex items-center justify-between bg-[#fdfdfd] border border-neutral-300/80 px-3 py-1.5 rounded-xl">
                  <span className="text-[10px] font-mono text-neutral-800 select-all truncate max-w-[180px]">
                    {plugin.installCommand}
                  </span>
                  <button
                    id={`btn-copy-plugin-${plugin.id}`}
                    onClick={() => handleCopy(plugin.id, plugin.installCommand!)}
                    className="p-1 text-neutral-500 hover:text-black rounded transition-colors cursor-pointer"
                    title="Copy command"
                  >
                    {copiedId === plugin.id ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between gap-2">
                {plugin.githubUrl && (
                  <a
                    href={plugin.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white bg-black hover:bg-neutral-800 px-3 py-2 rounded-xl font-bold uppercase tracking-wider flex-1 text-center cursor-pointer transition-colors"
                  >
                    View Source
                  </a>
                )}
                {plugin.websiteUrl && (
                  <a
                    href={plugin.websiteUrl}
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

        {filteredPlugins.length === 0 && (
          <div className="col-span-full py-16 text-center text-neutral-500 border-2 border-dashed border-neutral-300 rounded-[32px] bg-[#f5f5f4]/30">
            <HelpCircle className="h-8 w-8 mx-auto text-neutral-400 mb-2" />
            <p className="text-sm font-bold uppercase tracking-wide">No matching plugins found</p>
          </div>
        )}
      </div>
    </div>
  );
}
