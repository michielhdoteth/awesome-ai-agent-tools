import { useState } from "react";
import { McpServerItem } from "../data";
import { Search, Terminal, Plus, Minus, HelpCircle, Check, Copy, Settings, Play, RefreshCw } from "lucide-react";

interface McpsTabProps {
  servers: McpServerItem[];
  searchQuery?: string;
  setSearchQuery?: (val: string) => void;
}

export default function McpsTab({ servers, searchQuery = "", setSearchQuery }: McpsTabProps) {
  const [localSearch, setLocalSearch] = useState("");
  const currentSearch = setSearchQuery ? searchQuery : localSearch;
  const setCurrentSearch = setSearchQuery || setLocalSearch;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedServers, setSelectedServers] = useState<McpServerItem[]>([]);
  const [configs, setConfigs] = useState<Record<string, Record<string, string>>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [mcpConfigJson, setMcpConfigJson] = useState("");
  const [copied, setCopied] = useState(false);
  const [copiedCommandId, setCopiedCommandId] = useState<string | null>(null);

  const handleCopyCommand = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommandId(id);
    setTimeout(() => setCopiedCommandId(null), 2000);
  };

  // Group servers by categories
  const categories = ["all", ...Array.from(new Set(servers.map((s) => s.category)))];

  const filteredServers = servers.filter((server) => {
    const matchesSearch =
      server.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      server.description.toLowerCase().includes(currentSearch.toLowerCase());
    const matchesCategory = selectedCategory === "all" || server.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSelectServer = (server: McpServerItem) => {
    const isSelected = selectedServers.some((s) => s.id === server.id);
    if (isSelected) {
      setSelectedServers(selectedServers.filter((s) => s.id !== server.id));
    } else {
      setSelectedServers([...selectedServers, server]);
      // Initialize configurations for specific MCPs that need arguments
      if (server.id === "filesystem") {
        setConfigs((prev) => ({
          ...prev,
          [server.id]: { path: "/Users/username/project-root" },
        }));
      } else if (server.id === "github") {
        setConfigs((prev) => ({
          ...prev,
          [server.id]: { GITHUB_PERSONAL_ACCESS_TOKEN: "your_token_here" },
        }));
      }
    }
  };

  const handleConfigParamChange = (serverId: string, paramKey: string, value: string) => {
    setConfigs((prev) => ({
      ...prev,
      [serverId]: {
        ...(prev[serverId] || {}),
        [paramKey]: value,
      },
    }));
  };

  const generateMcpConfig = async () => {
    if (selectedServers.length === 0) return;
    setIsGenerating(true);
    setMcpConfigJson("");

    const payload = selectedServers.map((server) => ({
      id: server.id,
      name: server.name,
      installCommand: server.installCommand,
      customParameters: configs[server.id] || {},
    }));

    try {
      const response = await fetch("/api/gemini/generate-mcp-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedServers: payload }),
      });
      const data = await response.json();
      if (data.success) {
        setMcpConfigJson(data.configContent);
      } else {
        setMcpConfigJson(`// Error generating config: ${data.error}`);
      }
    } catch (err: any) {
      setMcpConfigJson(`// Network error: ${err.message || err}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(mcpConfigJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner (Core Frameworks Bento Style) */}
      <div className="bg-[#1a1a1a] text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-between min-h-[180px]">
        <div className="absolute right-0 top-0 opacity-10 -mr-12 -mt-12">
          <Terminal className="h-64 w-64 text-indigo-400 animate-spin-slow" />
        </div>
        <div className="max-w-3xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-[#1a1a1a] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
              Desktop Integration
            </span>
            <span className="text-xs font-mono text-neutral-400">Model Context Protocol</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
            Model Context Protocol Directory
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            MCP is an open integration protocol that lets LLM systems (Claude Desktop, Cursor, windsurf) connect seamlessly 
            to your local environment: filesystem utilities, postgres/redis databases, and github repositories.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Servers Left Directory Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Controls Bar - Bento-Style */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#f5f5f4] border-2 border-[#1a1a1a] p-4 rounded-2xl">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
              <input
                id="search-mcps"
                type="text"
                placeholder="Search MCP servers..."
                value={currentSearch}
                onChange={(e) => setCurrentSearch(e.target.value)}
                className="w-full bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] pl-10 pr-4 py-1.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#1a1a1a] transition-all"
              />
            </div>

            <select
              id="filter-mcp-category"
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

          {/* Server Cards Directory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredServers.map((server) => {
              const isSelected = selectedServers.some((s) => s.id === server.id);
              const cardClass = isSelected
                ? "bg-[#ebf5ff] border-2 border-[#1a1a1a] shadow-md shadow-blue-500/5"
                : "bg-[#f5f5f4] border-2 border-transparent hover:border-[#1a1a1a]";

              return (
                <div
                  key={server.id}
                  id={`mcp-card-${server.id}`}
                  className={`rounded-[28px] p-5 flex flex-col justify-between transition-all duration-300 ${cardClass}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-[#1a1a1a]/10 text-neutral-800">
                        {server.category}
                      </span>
                      {server.stars && (
                        <span className="text-[10px] font-mono text-amber-600 font-extrabold">
                          ★ {server.stars}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-black uppercase text-[#1a1a1a] tracking-tight">{server.name}</h3>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed line-clamp-3">
                      {server.description}
                    </p>

                    {/* Capabilities Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {server.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-extrabold uppercase bg-white/60 border border-neutral-200 text-neutral-700 px-1.5 py-0.5 rounded"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    {/* Install command block with Copy button */}
                    {server.installCommand && (
                      <div className="mt-4 flex items-center justify-between bg-white border border-neutral-300/60 px-2.5 py-1.5 rounded-xl font-mono text-[10px]">
                        <span className="text-neutral-800 truncate select-all font-medium max-w-[170px]">
                          {server.installCommand}
                        </span>
                        <button
                          id={`btn-copy-cmd-${server.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyCommand(server.id, server.installCommand);
                          }}
                          className="p-1 text-neutral-400 hover:text-black rounded transition-colors cursor-pointer shrink-0"
                          title="Copy install command"
                        >
                          {copiedCommandId === server.id ? (
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Add button */}
                  <div className="mt-4 pt-3 border-t border-black/5 flex justify-between items-center">
                    <span className="text-[9px] font-mono text-neutral-400 font-bold uppercase">
                      {server.installCommand ? "CLI Binary" : "Docker Context"}
                    </span>
                    <button
                      id={`btn-select-${server.id}`}
                      onClick={() => toggleSelectServer(server)}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-black text-white hover:bg-neutral-800"
                          : "bg-white border border-neutral-300 text-neutral-800 hover:text-black hover:bg-neutral-50"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Minus className="h-3.5 w-3.5" />
                          <span>Deselect</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" />
                          <span>Select Server</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredServers.length === 0 && (
              <div className="col-span-full py-16 text-center text-neutral-500 border-2 border-dashed border-neutral-300 rounded-[32px] bg-[#f5f5f4]/30">
                <HelpCircle className="h-8 w-8 mx-auto text-neutral-400 mb-2" />
                <p className="text-sm font-bold uppercase tracking-wide">No MCP servers match the search</p>
              </div>
            )}
          </div>
        </div>

        {/* Configuration Right Column Panel */}
        <div className="bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[32px] p-6 h-fit space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 pb-3 border-b border-neutral-200">
            <Settings className="h-4.5 w-4.5 text-neutral-800" />
            <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wider">Config Builder</h3>
          </div>

          {selectedServers.length === 0 ? (
            <div className="py-12 text-center text-neutral-400 space-y-2">
              <Terminal className="h-10 w-10 text-neutral-300 mx-auto" />
              <p className="text-xs font-bold uppercase tracking-wide">Builder Idle</p>
              <p className="text-[11px] text-neutral-400 max-w-[200px] mx-auto leading-relaxed">
                Add servers on the left to automatically construct your desktop setup config JSON file.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Selected List with inputs */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-neutral-600 uppercase tracking-widest">Active Stack ({selectedServers.length})</h4>
                {selectedServers.map((server) => (
                  <div key={server.id} className="bg-[#f5f5f4] p-4 rounded-2xl border border-neutral-300/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#1a1a1a]">{server.name}</span>
                      <button
                        id={`btn-remove-selected-${server.id}`}
                        onClick={() => toggleSelectServer(server)}
                        className="text-neutral-500 hover:text-rose-600 text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>

                    {/* Inputs based on server id */}
                    {server.id === "filesystem" && (
                      <div className="space-y-1">
                        <label className="text-[9px] text-neutral-500 font-bold uppercase">Permitted Folder Path</label>
                        <input
                          id="input-param-filesystem-path"
                          type="text"
                          value={configs[server.id]?.path || ""}
                          onChange={(e) => handleConfigParamChange(server.id, "path", e.target.value)}
                          className="bg-[#fdfdfd] border border-neutral-300 text-neutral-800 px-3 py-1.5 text-xs rounded-xl w-full font-semibold focus:outline-none focus:border-black"
                          placeholder="/path/to/project"
                        />
                      </div>
                    )}

                    {server.id === "github" && (
                      <div className="space-y-1">
                        <label className="text-[9px] text-neutral-500 font-bold uppercase">GITHUB_TOKEN Secret</label>
                        <input
                          id="input-param-github-token"
                          type="password"
                          value={configs[server.id]?.GITHUB_PERSONAL_ACCESS_TOKEN || ""}
                          onChange={(e) => handleConfigParamChange(server.id, "GITHUB_PERSONAL_ACCESS_TOKEN", e.target.value)}
                          className="bg-[#fdfdfd] border border-neutral-300 text-neutral-800 px-3 py-1.5 text-xs rounded-xl w-full font-semibold focus:outline-none focus:border-black"
                          placeholder="ghp_xxxxxxxxxxxxxxxx"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between bg-white/60 border border-neutral-300/40 px-2.5 py-1.5 rounded-xl font-mono text-[10px] mt-1">
                      <span className="text-neutral-700 truncate select-all font-medium max-w-[180px]">
                        {server.installCommand}
                      </span>
                      <button
                        id={`btn-copy-stack-cmd-${server.id}`}
                        onClick={() => handleCopyCommand(`stack-${server.id}`, server.installCommand)}
                        className="p-1 text-neutral-400 hover:text-black rounded transition-colors cursor-pointer shrink-0"
                        title="Copy command"
                      >
                        {copiedCommandId === `stack-${server.id}` ? (
                          <Check className="h-3 w-3 text-emerald-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Build Button */}
              <button
                id="btn-generate-mcp-config"
                onClick={generateMcpConfig}
                disabled={isGenerating}
                className="w-full bg-black hover:bg-neutral-800 text-white font-extrabold py-3 rounded-2xl text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-md shadow-black/10"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    <span>Analyzing configs...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Generate Claude Config</span>
                  </>
                )}
              </button>

              {/* Output block */}
              {mcpConfigJson && (
                <div className="space-y-2 mt-4 pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono font-bold">
                    <span>claude_desktop_config.json</span>
                    <button
                      id="btn-copy-config"
                      onClick={copyConfig}
                      className="text-xs text-neutral-700 hover:text-black hover:underline flex items-center space-x-1 cursor-pointer font-bold"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="relative group/code">
                    <pre className="bg-[#1a1a1a] p-4 pr-12 text-white rounded-2xl text-[10px] font-mono max-h-[250px] overflow-y-auto whitespace-pre-wrap select-all shadow-inner">
                      {mcpConfigJson}
                    </pre>
                    <button
                      id="btn-copy-mcp-overlay"
                      onClick={copyConfig}
                      className="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 p-1.5 rounded-lg text-white cursor-pointer"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-neutral-300" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
