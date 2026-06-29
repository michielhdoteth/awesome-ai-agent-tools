import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedText(code);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Simple, robust lines parser to render headings, bullet points, and code blocks elegantly
  const lines = content.split("\n");
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  const renderedElements: React.JSX.Element[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        // End code block
        const fullCode = codeBuffer.join("\n");
        const blockId = `code-block-${i}`;
        renderedElements.push(
          <div key={blockId} className="bg-slate-950 border border-slate-900 rounded-lg my-3 overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between px-4 py-1.5 bg-slate-900 text-slate-400 border-b border-slate-950">
              <span className="text-[10px]">Code Snippet</span>
              <button
                onClick={() => handleCopyCode(fullCode)}
                className="text-[10px] text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
              >
                {copiedText === fullCode ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <span>Copy</span>
                )}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-slate-300 whitespace-pre-wrap select-all">
              <code>{fullCode}</code>
            </pre>
          </div>
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Headers
    if (line.startsWith("### ")) {
      renderedElements.push(
        <h4 key={i} className="text-sm font-bold text-white mt-4 mb-2 tracking-tight">
          {parseInlineFormatting(line.substring(4))}
        </h4>
      );
    } else if (line.startsWith("## ")) {
      renderedElements.push(
        <h3 key={i} className="text-base font-bold text-white mt-5 mb-2.5 tracking-tight border-b border-slate-900 pb-1">
          {parseInlineFormatting(line.substring(3))}
        </h3>
      );
    } else if (line.startsWith("# ")) {
      renderedElements.push(
        <h2 key={i} className="text-lg font-bold text-white mt-6 mb-3 tracking-tight">
          {parseInlineFormatting(line.substring(2))}
        </h2>
      );
    }
    // Bullet points
    else if (line.startsWith("- ") || line.startsWith("* ")) {
      renderedElements.push(
        <li key={i} className="ml-4 list-disc text-xs text-slate-300 leading-relaxed mb-1.5">
          {parseInlineFormatting(line.substring(2))}
        </li>
      );
    }
    // Number lists
    else if (/^\d+\.\s/.test(line)) {
      const match = line.match(/^(\d+)\.\s(.*)/);
      const num = match ? match[1] : "1";
      const rest = match ? match[2] : "";
      renderedElements.push(
        <li key={i} className="ml-4 list-decimal text-xs text-slate-300 leading-relaxed mb-1.5">
          {parseInlineFormatting(rest)}
        </li>
      );
    }
    // Empty lines
    else if (line.trim() === "") {
      renderedElements.push(<div key={i} className="h-2" />);
    }
    // General paragraph
    else {
      renderedElements.push(
        <p key={i} className="text-xs text-slate-300 leading-relaxed mb-2.5">
          {parseInlineFormatting(line)}
        </p>
      );
    }
  }

  return <div className="space-y-1">{renderedElements}</div>;
}

// Simple inline formatting parser (bold, code highlights)
function parseInlineFormatting(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    const boldIdx = remaining.indexOf("**");
    const codeIdx = remaining.indexOf("`");

    if (boldIdx === -1 && codeIdx === -1) {
      parts.push(<span key={keyIdx++}>{remaining}</span>);
      break;
    }

    const firstIdx =
      boldIdx !== -1 && (codeIdx === -1 || boldIdx < codeIdx) ? "bold" : "code";

    if (firstIdx === "bold") {
      if (boldIdx > 0) {
        parts.push(<span key={keyIdx++}>{remaining.substring(0, boldIdx)}</span>);
      }
      const rest = remaining.substring(boldIdx + 2);
      const nextBold = rest.indexOf("**");
      if (nextBold !== -1) {
        parts.push(
          <strong key={keyIdx++} className="font-semibold text-white">
            {rest.substring(0, nextBold)}
          </strong>
        );
        remaining = rest.substring(nextBold + 2);
      } else {
        parts.push(<span key={keyIdx++}>**{rest}</span>);
        break;
      }
    } else {
      if (codeIdx > 0) {
        parts.push(<span key={keyIdx++}>{remaining.substring(0, codeIdx)}</span>);
      }
      const rest = remaining.substring(codeIdx + 1);
      const nextCode = rest.indexOf("`");
      if (nextCode !== -1) {
        parts.push(
          <code key={keyIdx++} className="bg-slate-900 border border-slate-800 text-[10px] px-1.5 py-0.5 rounded text-indigo-300 font-mono">
            {rest.substring(0, nextCode)}
          </code>
        );
        remaining = rest.substring(nextCode + 1);
      } else {
        parts.push(<span key={keyIdx++}>`{rest}</span>);
        break;
      }
    }
  }

  return parts;
}
