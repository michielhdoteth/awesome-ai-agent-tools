import { useState } from "react";
import { SkillItem } from "../data";
import { Search, Code, Copy, Check, ExternalLink, HelpCircle, FileText, Download, Sparkles } from "lucide-react";

interface SkillsTabProps {
  skills: SkillItem[];
  searchQuery?: string;
  setSearchQuery?: (val: string) => void;
}

export default function SkillsTab({ skills, searchQuery = "", setSearchQuery }: SkillsTabProps) {
  const [localSearch, setLocalSearch] = useState("");
  const currentSearch = setSearchQuery ? searchQuery : localSearch;
  const setCurrentSearch = setSearchQuery || setLocalSearch;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeModalSkill, setActiveModalSkill] = useState<SkillItem | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = ["all", "Development", "Content", "Design", "DevOps", "Data", "Security", "Testing"];

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch =
      skill.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      skill.description.toLowerCase().includes(currentSearch.toLowerCase());
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
    const matchesType = selectedType === "all" || skill.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getMockSkillFile = (skill: SkillItem) => {
    return `---
name: "${skill.name}"
description: "${skill.description}"
category: "${skill.category}"
type: "${skill.type}"
---

# Intent & Boundaries
This skill teaches the AI agent how to perform high-quality "${skill.name}" tasks.
It is active whenever the user prompts for tasks related to ${skill.category.toLowerCase()}.

## Forbidden Behaviors
- NEVER use fake data or placeholders.
- DO NOT truncate output or leave unfinished code comments.
- AVOID hardcoding paths or absolute system coordinates.

# Workflow Instructions
1. **Analyze Context**: Inspect existing code files and locate dependencies.
2. **Formulate Execution Plan**: Create a markdown plan outlining the intended changes.
3. **Execute Task**: Perform targeted edits in small, verifiable steps.
4. **Self-Review**: Compare the modified code blocks with standard guidelines.

# Verification Checklist
- [ ] Code compiles successfully (npm run build).
- [ ] No trailing whitespaces or stray console logs.
- [ ] Responsive UI verified across mobile and desktop widths.
`;
  };

  const handleDownloadSkill = (skill: SkillItem) => {
    const fileContent = getMockSkillFile(skill);
    const blob = new Blob([fileContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${skill.id}.skill.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Introduction Banner (Core Frameworks Bento Style) */}
      <div className="bg-[#1a1a1a] text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-between min-h-[180px]">
        <div className="absolute right-0 top-0 opacity-10 -mr-12 -mt-12">
          <Code className="h-64 w-64 text-blue-400 animate-spin-slow" />
        </div>
        <div className="max-w-3xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-[#1a1a1a] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
              Specification Standard
            </span>
            <span className="text-xs font-mono text-neutral-400">SKILL.md open specification</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
            Standardized Agent Skills Catalog
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Agent Skills are modular, declarative markdown instruction sheets following the open SKILL.md template. 
            They explicitly restrict agent behavior, prevent over-engineering, and define deterministic operational workflows for coders (e.g., Aider, Claude, Gemini-agent).
          </p>
        </div>
      </div>

      {/* Filters Toolbar - Bento-Style */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#f5f5f4] border-2 border-[#1a1a1a] p-4 rounded-2xl">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
          <input
            id="search-skills"
            type="text"
            placeholder="Search skills..."
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
            className="w-full bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] pl-10 pr-4 py-1.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#1a1a1a] transition-all"
          />
        </div>

        {/* Category & Type Selectors */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-end">
          <select
            id="filter-category"
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

          <select
            id="filter-type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-[#fdfdfd] border-2 border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-xl text-xs font-bold focus:outline-none focus:border-[#1a1a1a]"
          >
            <option value="all">All Sources</option>
            <option value="local">Local Repo</option>
            <option value="external">External</option>
          </select>
        </div>
      </div>

      {/* Bento Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => {
          // Beautiful contrasting bento backgrounds based on type/category
          const bgClass =
            skill.type === "local"
              ? "bg-[#ebf5ff] border-2 border-[#1a1a1a]" // Soft Blue bento style
              : "bg-[#fffbeb] border-2 border-amber-200"; // Soft Amber bento style

          return (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className={`group rounded-[32px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${bgClass}`}
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-[#1a1a1a]/10 text-neutral-800">
                    {skill.category}
                  </span>
                  <span
                    className={`text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded ${
                      skill.type === "local"
                        ? "bg-blue-600/10 text-blue-700"
                        : "bg-amber-600/10 text-amber-800"
                    }`}
                  >
                    {skill.type === "local" ? "Repository" : "Spec"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black uppercase text-[#1a1a1a] mb-2 tracking-tight group-hover:underline transition-all">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                  {skill.description}
                </p>
              </div>

              {/* Actions Block */}
              <div className="space-y-3 mt-4 border-t border-black/10 pt-4">
                {skill.installCommand && (
                  <div className="flex items-center justify-between bg-[#fdfdfd] border border-neutral-300/80 px-3 py-1.5 rounded-xl">
                    <span className="text-[10px] font-mono text-neutral-800 select-all truncate max-w-[180px]">
                      {skill.installCommand}
                    </span>
                    <button
                      id={`btn-copy-${skill.id}`}
                      onClick={() => handleCopy(skill.id, skill.installCommand!)}
                      className="p-1 text-neutral-500 hover:text-black rounded transition-colors cursor-pointer"
                      title="Copy command"
                    >
                      {copiedId === skill.id ? (
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between gap-2">
                  <button
                    id={`btn-details-${skill.id}`}
                    onClick={() => setActiveModalSkill(skill)}
                    className="text-xs text-white bg-black hover:bg-neutral-800 px-3 py-2 rounded-xl font-bold uppercase tracking-wider flex-1 text-center cursor-pointer transition-colors"
                  >
                    View SKILL.md Spec
                  </button>
                  {skill.link && (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-700 hover:text-black hover:bg-[#fdfdfd] bg-transparent rounded-xl border border-neutral-300 transition-colors"
                      title="External Resource"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {filteredSkills.length === 0 && (
          <div className="col-span-full py-16 text-center text-neutral-500 border-2 border-dashed border-neutral-300 rounded-[32px] bg-[#f5f5f4]/30">
            <HelpCircle className="h-8 w-8 mx-auto text-neutral-400 mb-2" />
            <p className="text-sm font-bold uppercase tracking-wide">No matching agent skills found</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activeModalSkill && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[32px] w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
              <div>
                <span className="text-[9px] font-mono font-extrabold px-2.5 py-1 rounded bg-[#1a1a1a] text-white uppercase">
                  {activeModalSkill.category} SPECIFICATION
                </span>
                <h3 className="text-xl font-black uppercase text-[#1a1a1a] mt-1 tracking-tight">{activeModalSkill.name}</h3>
              </div>
              <button
                id="btn-close-modal"
                onClick={() => setActiveModalSkill(null)}
                className="text-neutral-500 hover:text-black p-1.5 rounded-lg hover:bg-neutral-100 cursor-pointer text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto font-mono text-xs text-neutral-800 bg-[#f5f5f4] leading-relaxed space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-300 pb-2 mb-2">
                <span className="text-neutral-500 font-bold">// Standardized SKILL.md blueprint file</span>
                <div className="flex space-x-2">
                  <button
                    id="btn-modal-copy"
                    onClick={() => handleCopy("modal", getMockSkillFile(activeModalSkill))}
                    className="text-[10px] font-bold text-neutral-700 hover:text-black hover:bg-white flex items-center space-x-1 px-2.5 py-1.5 bg-[#fdfdfd] rounded-lg border border-neutral-300 cursor-pointer"
                  >
                    {copiedId === "modal" ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy Spec</span>
                      </>
                    )}
                  </button>
                  <button
                    id="btn-modal-download"
                    onClick={() => handleDownloadSkill(activeModalSkill)}
                    className="text-[10px] font-bold text-neutral-700 hover:text-black hover:bg-white flex items-center space-x-1 px-2.5 py-1.5 bg-[#fdfdfd] rounded-lg border border-neutral-300 cursor-pointer"
                    title="Download skill file"
                  >
                    <Download className="h-3 w-3" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <pre className="whitespace-pre-wrap select-all font-mono">
                {getMockSkillFile(activeModalSkill)}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-5 border-t border-neutral-200 bg-[#fdfdfd] flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-xs text-neutral-500 font-medium">
                To activate, load into <strong>.claude/skills/{activeModalSkill.id}/SKILL.md</strong>
              </span>
              <button
                id="btn-modal-done"
                onClick={() => setActiveModalSkill(null)}
                className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
