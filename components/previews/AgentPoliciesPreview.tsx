"use client";

import { motion } from "framer-motion";

const badge = (text: string, color = "bg-white/10 text-gray-200") => (
  <span className={`px-2 py-1 rounded-lg text-xs border border-white/10 ${color}`}>{text}</span>
);

export function AgentPoliciesPreview() {
  return (
    <motion.div
      key="policies"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 shadow-lg" />
            <div>
              <div className="text-sm font-semibold text-white">Tellix AI support agent</div>
              <div className="text-xs text-gray-400">Multi-modal</div>
            </div>
            {badge("Draft")}
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-xs">✎</span>
            <span className="text-xs">⋮</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-0">
          {/* Left nav */}
          <div className="col-span-1 border-r border-white/5 bg-white/[0.03] p-3 space-y-3">
            <div className="relative">
              <input
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 text-xs">⌕</span>
            </div>
            <div className="space-y-2 text-sm">
              {[
                { label: "Policies", active: true },
                { label: "Data sources", active: false },
                { label: "Personalization", active: false },
                { label: "Evaluation", active: false },
                { label: "Advanced", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    item.active ? "bg-white/10 text-white border border-white/10" : "text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <span className="text-xs">•</span>
                  {item.label}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-gray-300 space-y-1">
              <div className="flex items-center justify-between">
                <span>Remaining memory</span>
                <span className="text-emerald-300 font-semibold">High</span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Last locked by</span>
                <span>Internal system</span>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="col-span-2 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Scenarios</div>
              <span className="text-xs text-gray-500">▼</span>
            </div>

            <div className="space-y-2">
              {[
                { title: "New account onboarding", active: true },
                { title: "Loan application support", active: false },
                { title: "Fraud alert handling", active: false, badge: "New" },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg border ${
                    item.active ? "border-cyan-400/40 bg-white/5 text-white" : "border-white/5 bg-white/5 text-gray-300"
                  }`}
                >
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-amber-400/10 text-amber-200 border border-amber-200/40">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-2">Supporting docs</div>
                <div className="space-y-2 text-sm text-gray-200">
                  <div className="flex items-center gap-2">📄 Compliance guidelines.pdf</div>
                  <div className="flex items-center gap-2">📑 ID verification.csv</div>
                  <div className="flex items-center gap-2">🗂️ Escalation flowchart.png</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 space-y-3">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Brand</div>
                  <div className="text-sm text-gray-200">Voice: Calm, concise</div>
                  <div className="text-sm text-gray-200">Region: EN/US</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Rules</div>
                  <ul className="space-y-1 text-sm text-gray-200">
                    <li>• Verify ID before sharing sensitive info</li>
                    <li>• Use empathetic tone for escalations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}







