import { useState, useEffect } from "react";
import { AgentLoopItem } from "../data";
import { RefreshCw, Play, CheckCircle2, Terminal, AlertCircle, Cpu, Circle, ArrowRight } from "lucide-react";

interface LoopsTabProps {
  loops: AgentLoopItem[];
  searchQuery?: string;
}

export default function LoopsTab({ loops, searchQuery = "" }: LoopsTabProps) {
  const [selectedLoop, setSelectedLoop] = useState<AgentLoopItem>(loops[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [logs, setLogs] = useState<string[]>([]);
  const [simulationStatus, setSimulationStatus] = useState<"idle" | "running" | "success" | "failed">("idle");

  const filteredLoops = loops.filter((loop) => {
    return (
      loop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loop.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setCurrentStepIndex(0);
    setSimulationStatus("running");
    setLogs([`[INIT] Booting simulation for loop: "${selectedLoop.name}"...`, `[SYS] Spin-up container sandbox... OK`]);
  };

  useEffect(() => {
    if (!isSimulating || currentStepIndex < 0) return;

    if (currentStepIndex >= selectedLoop.visualFlow.length) {
      setSimulationStatus("success");
      setLogs((prev) => [...prev, `[SUCCESS] Simulation completed successfully! All constraints cleared.`]);
      setIsSimulating(false);
      return;
    }

    const timer = setTimeout(() => {
      const stepDescription = selectedLoop.visualFlow[currentStepIndex];
      setLogs((prev) => [
        ...prev,
        `[STEP ${currentStepIndex + 1}/${selectedLoop.visualFlow.length}] ${stepDescription}...`,
        `[STATUS] Node verification OK. Proceeding...`,
      ]);
      setCurrentStepIndex((prev) => prev + 1);
    }, 1800); // Step every 1.8 seconds for a readable and realistic pace

    return () => clearTimeout(timer);
  }, [isSimulating, currentStepIndex, selectedLoop]);

  return (
    <div className="space-y-6">
      {/* Intro Banner (Core Frameworks Bento Style) */}
      <div className="bg-[#1a1a1a] text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-between min-h-[180px]">
        <div className="absolute right-0 top-0 opacity-10 -mr-12 -mt-12">
          <RefreshCw className="h-64 w-64 text-emerald-400 animate-spin-slow" />
        </div>
        <div className="max-w-3xl z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white text-[#1a1a1a] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-tighter rounded">
              Operational Pattern
            </span>
            <span className="text-xs font-mono text-neutral-400">Multi-agent pipelines</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
            Interactive Agent Loops Explorer
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Agent loops are recurring orchestration structures where agent output is compiled, linted, evaluated, 
            and self-refactored in a feedback pipeline until all quality and semantic constraints are satisfied.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: List selector & Detail (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 px-1 font-mono">Curated Loops</h3>
          <div className="space-y-3">
            {filteredLoops.map((loop) => {
              const isSelected = selectedLoop.id === loop.id;
              const cardClass = isSelected
                ? "bg-[#ebf5ff] border-2 border-[#1a1a1a] shadow-md shadow-blue-500/5"
                : "bg-[#f5f5f4] border-2 border-transparent hover:border-[#1a1a1a]";

              return (
                <button
                  key={loop.id}
                  id={`loop-btn-${loop.id}`}
                  onClick={() => {
                    setSelectedLoop(loop);
                    setIsSimulating(false);
                    setCurrentStepIndex(-1);
                    setLogs([]);
                    setSimulationStatus("idle");
                  }}
                  className={`w-full text-left p-5 rounded-[28px] transition-all duration-300 cursor-pointer ${cardClass}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-[#1a1a1a]/10 text-neutral-800">
                      {loop.category} Loop
                    </span>
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-[#1a1a1a]">{loop.name}</h4>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed line-clamp-2">
                    {loop.description}
                  </p>
                </button>
              );
            })}

            {filteredLoops.length === 0 && (
              <div className="py-12 text-center text-neutral-500 border-2 border-dashed border-neutral-300 rounded-[28px] bg-[#f5f5f4]/30">
                <AlertCircle className="h-8 w-8 mx-auto text-neutral-400 mb-2" />
                <p className="text-sm font-bold uppercase tracking-wide">No agent loops found</p>
              </div>
            )}
          </div>

          {/* Loop Details Card */}
          <div className="bg-[#fdfdfd] border-2 border-[#1a1a1a] p-6 rounded-[32px] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a] font-mono border-b border-neutral-100 pb-2">Expected Operational Steps</h4>
            <ul className="space-y-3.5">
              {selectedLoop.steps.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs text-neutral-700">
                  <div className="h-6 w-6 rounded-full bg-[#1a1a1a] flex items-center justify-center font-mono text-[10px] text-white font-black shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="leading-relaxed font-semibold">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Flow chart & Interactive Terminal Simulator (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {/* Active Flow Visualizer Card */}
          <div className="bg-[#fdfdfd] border-2 border-[#1a1a1a] rounded-[32px] p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center space-x-2">
                  <Cpu className="h-4.5 w-4.5 text-neutral-800" />
                  <h3 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wider">Pipeline Execution Map</h3>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-neutral-500">
                  Status: <span className="text-emerald-600 font-extrabold">{simulationStatus.toUpperCase()}</span>
                </span>
              </div>

              {/* Steps Flowchart */}
              <div className="mt-8 space-y-4 px-2 max-w-md mx-auto">
                {selectedLoop.visualFlow.map((flowStep, idx) => {
                  const isCurrent = currentStepIndex === idx;
                  const isCompleted = currentStepIndex > idx || simulationStatus === "success";
                  return (
                    <div key={idx} className="flex items-center">
                      <div className="relative flex flex-col items-center">
                        {/* Dot indicator */}
                        <div
                          className={`h-7 w-7 rounded-full flex items-center justify-center border-2 font-mono text-[10px] font-black z-10 transition-all duration-300 ${
                            isCurrent
                              ? "bg-black text-white border-black ring-4 ring-black/10 scale-110 shadow-md"
                              : isCompleted
                              ? "bg-[#ebf5ff] text-blue-700 border-[#1a1a1a]"
                              : "bg-[#f5f5f4] text-neutral-400 border-neutral-300"
                          }`}
                        >
                          {isCompleted ? "✓" : idx + 1}
                        </div>
                        {/* Vertical line connector */}
                        {idx < selectedLoop.visualFlow.length - 1 && (
                          <div
                            className={`w-[2px] h-12 transition-all duration-300 ${
                              isCompleted ? "bg-[#1a1a1a]" : "bg-neutral-200"
                            }`}
                          />
                        )}
                      </div>

                      {/* Step Text details */}
                      <div className="ml-4 flex-1">
                        <div
                          className={`text-xs uppercase tracking-wide font-black transition-all duration-300 ${
                            isCurrent ? "text-black" : isCompleted ? "text-neutral-800" : "text-neutral-400"
                          }`}
                        >
                          {flowStep}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Run Button bar */}
            <div className="mt-8 pt-4 border-t border-neutral-100 flex justify-between items-center">
              <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase">
                Interactive simulator
              </span>
              <button
                id="btn-simulate-loop"
                onClick={runSimulation}
                disabled={isSimulating}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-colors ${
                  isSimulating
                    ? "bg-[#f5f5f4] text-neutral-400 border border-neutral-300 cursor-not-allowed"
                    : "bg-black text-white hover:bg-[#1a1a1a] shadow-md shadow-black/10"
                }`}
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{isSimulating ? "Active..." : "Run Simulator"}</span>
              </button>
            </div>
          </div>

          {/* Terminal Logs Output */}
          <div className="bg-[#1a1a1a] rounded-[24px] p-5 border border-black font-mono text-[11px] min-h-[160px] max-h-[160px] overflow-y-auto flex flex-col justify-start shadow-inner text-white">
            <div className="flex items-center space-x-2 text-neutral-500 border-b border-neutral-800 pb-1.5 mb-2 shrink-0 font-bold">
              <Terminal className="h-3.5 w-3.5" />
              <span>LOGS CONSOLE</span>
            </div>
            <div className="space-y-1 select-all flex-1">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`${
                    log.includes("[SUCCESS]")
                      ? "text-emerald-400 font-bold"
                      : log.includes("[STEP")
                      ? "text-white font-bold"
                      : "text-neutral-400"
                  }`}
                >
                  {log}
                </div>
              ))}
              {logs.length === 0 && (
                <div className="text-neutral-600 italic">Console idle. Hit "Run Simulator" above to begin.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
