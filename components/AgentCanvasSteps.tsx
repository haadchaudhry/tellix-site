"use client";

import { AgentCanvasStep } from "./agentCanvasTypes";
import { motion } from "framer-motion";

type StepMeta = {
  id: AgentCanvasStep;
  title: string;
  subtitle: string;
};

type Props = {
  steps: StepMeta[];
  activeStep: AgentCanvasStep;
  onStepChange: (id: AgentCanvasStep) => void;
};

const indicatorGradient = "bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400";

export function AgentCanvasSteps({ steps, activeStep, onStepChange }: Props) {
  return (
    <div className="space-y-4">
      {steps.map((step) => {
        const isActive = step.id === activeStep;
        return (
          <motion.button
            key={step.id}
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.995 }}
            onClick={() => onStepChange(step.id)}
            className={`w-full text-left rounded-2xl border transition-all duration-300 px-4 py-3 ${
              isActive
                ? "border-white/20 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                : "border-white/5 bg-white/[0.02] hover:border-white/15"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="pt-1">
                <div
                  className={`h-8 w-1 rounded-full ${
                    isActive ? indicatorGradient : "bg-white/10"
                  }`}
                />
              </div>
              <div className="space-y-1">
                <div
                  className={`text-base font-semibold ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-sm text-gray-500">{step.subtitle}</div>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}







