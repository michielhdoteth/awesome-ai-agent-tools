import { useState } from "react";
import { Cpu, HelpCircle, Loader2, Play, Check, Copy, Download, Code, Key } from "lucide-react";

export default function CreatorTab() {
  const [name, setName] = useState("pr-summarizer");
  const [category, setCategory] = useState("Development");
  const [description, setDescription] = useState(
    "Summarizes pull request files, identifies changes to exported function signatures, and formats a bullet-point changelog."
  );
  const [instructions, setInstructions] = useState(
    "1. Read diff of all files.\n2. Locate modified classes and function parameters.\n3. Draft standard markdown list mapping previous exports to updated signatures.\n4. Write a 1-sentence executive summary."
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSkill, setGeneratedSkill] = useState("");
  const [copied, setCopied] = useState(false);
  const [userApiKey, setUserApiKey] = useState("");

  const categories = ["Development", "Content", "Design", "DevOps", "Data", "Security", "Testing"];

  const generateSkill = async () => {
    setIsGenerating(true);
    setGeneratedSkill("");
    setCopied(false);

    try {
      const response = await fetch("/api/gemini/generate-skill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          category,
          description,
          instructions,
          userApiKey,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedSkill(data.skillContent);
      } else {
        setGeneratedSkill(`<!-- Error generating skill: ${data.error} -->`);
      }
    } catch (err: any) {
      setGeneratedSkill(`<!-- Network error: ${err.message || err} -->`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedSkill);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedSkill], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "SKILL.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner (Core Frameworks Bento Style) */}
      <div className="bg-[#1a1a1a] text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-between min-h-[180px]">
        <div className="absolute right-0 top-0 opacity-10 -mr-12 -mt-12">
          <Cpu className="h-64 w-64 text-blue-400 animate-spin-slow" />
        </div>
        <div className="max-w-3xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-[#1a1a1a] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
              Standard Orchestration
            </span>
            <span className="text-xs font-mono text-neutral-400">Blueprint Creator</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
            Interactive SKILL.md Generator
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Specify standard operational boundaries, behaviors, and sequential instructions. Gemini will compile 
            a standardized, markdown-compliant, production-ready `SKILL.md` specification for Claude Desktop, cursor, or aider.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Form Panel (5 cols) */}
        <div className="lg:col-span-5 bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[32px] p-6 space-y-4 shadow-xl h-fit">
          <div className="flex items-center space-x-2 pb-3 border-b border-neutral-200">
            <Code className="h-4.5 w-4.5 text-neutral-800" />
            <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wider">Skill Parameters</h3>
          </div>

          {/* Bring Your Own Key */}
          <div className="space-y-1 bg-amber-50/50 p-3 rounded-2xl border border-amber-200/60">
            <div className="flex items-center space-x-1.5">
              <Key className="h-3.5 w-3.5 text-amber-600" />
              <label className="text-[10px] text-amber-800 font-black uppercase tracking-wider">Custom Gemini API Key (BYOK)</label>
            </div>
            <input
              id="skill-key-input"
              type="password"
              value={userApiKey}
              onChange={(e) => setUserApiKey(e.target.value)}
              className="bg-[#fdfdfd] border-2 border-amber-200/80 text-[#1a1a1a] px-3 py-1.5 rounded-xl text-xs w-full font-semibold focus:outline-none focus:border-amber-500 transition-all font-mono"
              placeholder="AI Studio API Key (Optional fallback to server)"
            />
            <p className="text-[9px] text-amber-600 font-bold leading-normal mt-1">
              Leave blank to use the server's default shared API key.
            </p>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <label className="text-[10px] text-neutral-500 font-extrabold uppercase">Skill Identifier (Name)</label>
            <input
              id="skill-name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] px-3 py-1.5 rounded-xl text-xs w-full font-semibold focus:outline-none focus:border-[#1a1a1a] transition-all"
              placeholder="e.g. pr-summarizer"
            />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="text-[10px] text-neutral-500 font-extrabold uppercase">Skill Category</label>
            <select
              id="skill-category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#fdfdfd] border-2 border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-xl text-xs w-full font-bold focus:outline-none focus:border-[#1a1a1a]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="text-[10px] text-neutral-500 font-extrabold uppercase">Short Description</label>
            <textarea
              id="skill-desc-input"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] p-3 rounded-xl text-xs w-full font-semibold focus:outline-none focus:border-[#1a1a1a] transition-all leading-relaxed"
              placeholder="Briefly summarize what this skill accomplishes..."
            />
          </div>

          {/* Instructions */}
          <div className="space-y-1">
            <label className="text-[10px] text-neutral-500 font-extrabold uppercase">Custom Instructions / Steps</label>
            <textarea
              id="skill-steps-input"
              rows={4}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="bg-[#fdfdfd] border-2 border-neutral-200 text-[#1a1a1a] p-3 rounded-xl text-xs w-full focus:outline-none focus:border-[#1a1a1a] transition-all font-mono leading-relaxed"
              placeholder="1. First task step...&#10;2. Second task step..."
            />
          </div>

          {/* Run Button */}
          <button
            id="btn-create-skill"
            onClick={generateSkill}
            disabled={isGenerating}
            className="w-full bg-black hover:bg-neutral-800 text-white font-extrabold py-3 rounded-2xl text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-md shadow-black/10"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Generating Spec...</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Generate SKILL.md Spec</span>
              </>
            )}
          </button>
        </div>

        {/* Output Specification Panel (7 cols) */}
        <div className="lg:col-span-7 bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[32px] p-6 min-h-[400px] flex flex-col justify-between shadow-xl">
          {isGenerating ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-center space-y-4">
              <Loader2 className="h-10 w-10 text-black animate-spin" />
              <h4 className="text-sm font-black uppercase tracking-tight text-[#1a1a1a]">Compiling YAML Standard...</h4>
              <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
                Gemini is assembling standard YAML frontmatter headers, security boundary constraints, and step checkers...
              </p>
            </div>
          ) : generatedSkill ? (
            <div className="flex-1 flex flex-col justify-between h-full space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-500 font-mono font-bold border-b border-neutral-200 pb-3">
                <span>SKILL.md Blueprint Spec</span>
                <div className="flex space-x-2">
                  <button
                    id="btn-copy-created"
                    onClick={handleCopy}
                    className="text-[10px] font-bold text-neutral-700 hover:text-black hover:bg-white flex items-center space-x-1 px-2.5 py-1.5 bg-[#fdfdfd] rounded-lg border border-neutral-300 cursor-pointer"
                  >
                    {copied ? (
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
                    id="btn-download-created"
                    onClick={handleDownload}
                    className="text-[10px] font-bold text-neutral-700 hover:text-black hover:bg-white flex items-center space-x-1 px-2.5 py-1.5 bg-[#fdfdfd] rounded-lg border border-neutral-300 cursor-pointer"
                  >
                    <Download className="h-3 w-3" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <div className="relative group/code flex-1 flex flex-col min-h-0">
                <pre className="bg-[#1a1a1a] p-5 pr-12 border border-black rounded-2xl text-xs font-mono text-white max-h-[450px] overflow-y-auto whitespace-pre-wrap select-all flex-1 shadow-inner leading-relaxed">
                  {generatedSkill}
                </pre>
                <button
                  id="btn-copy-overlay"
                  onClick={handleCopy}
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
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-center space-y-3">
              <Cpu className="h-12 w-12 text-neutral-300" />
              <h4 className="text-sm font-black uppercase tracking-wide text-neutral-400">Spec Output Idle</h4>
              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-medium">
                Configure your custom agent skill details on the left, then click generate to review and copy the full file schema.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
