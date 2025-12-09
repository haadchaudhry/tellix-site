"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AgentCanvasStep } from "./agentCanvasTypes";
import { AgentCanvasSteps } from "./AgentCanvasSteps";
import { AgentCanvasPreview } from "./AgentCanvasPreview";

const steps: { id: AgentCanvasStep; title: string; subtitle: string }[] = [
  { id: "create", title: "Create the agent", subtitle: "Ground agents in your brand standards and workflows." },
  { id: "policies", title: "Define policies", subtitle: "Guardrails, permissions, and on-brand responses." },
  { id: "logic", title: "Design the logic", subtitle: "Map flows, branches, and escalation paths." },
  { id: "test", title: "Test and launch", subtitle: "Run simulations, catch edge cases, ship safely." },
  { id: "monitor", title: "Monitor and improve", subtitle: "Replay calls, track sentiment, and iterate." },
];

export default function AgentCanvasSection() {
  const [activeStep, setActiveStep] = useState<AgentCanvasStep>("create");

  return (
    <section className="w-full bg-[#050509] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.7fr] gap-10 items-start">
        {/* Left column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <img src="/logo.svg" alt="Tellix logo" className="w-8 h-8 object-contain" />
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
            </div>
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 text-sm text-white/90">
            Agent Canvas
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            The fastest way to build, govern, and scale AI agents.
          </h2>
          <p className="text-gray-400 max-w-xl">
            Drag-and-drop your policies, logic, and testing into one canvas. Keep every channel on-brand with smart defaults and safe
            automations.
          </p>
          <AgentCanvasSteps steps={steps} activeStep={activeStep} onStepChange={setActiveStep} />
        </div>

        {/* Right column */}
        <motion.div
          className="relative min-h-[520px]"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <AgentCanvasPreview activeStep={activeStep} />
        </motion.div>
      </div>
    </section>
  );
}





