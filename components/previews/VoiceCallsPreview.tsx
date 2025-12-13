"use client";

import { motion } from "framer-motion";

const activeCalls = [
  { id: 1, customer: "Sarah Miller", duration: "3:24", status: "AI handling", sentiment: "Positive" },
  { id: 2, customer: "James Wilson", duration: "1:45", status: "AI handling", sentiment: "Neutral" },
  { id: 3, customer: "Emily Chen", duration: "5:12", status: "Needs attention", sentiment: "Negative" },
  { id: 4, customer: "Michael Brown", duration: "2:08", status: "AI handling", sentiment: "Positive" },
];

export function VoiceCallsPreview() {
  return (
    <motion.div
      key="voice"
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
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-sm">📞</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Active Voice Calls</div>
              <div className="text-xs text-gray-400">4 calls in progress</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-400/30">
              3 AI handling
            </span>
            <span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs border border-amber-400/30">
              1 needs attention
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-4 border-b border-white/5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-semibold text-white">4</div>
            <div className="text-xs text-gray-400">Active calls</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-semibold text-rose-300">2.3s</div>
            <div className="text-xs text-gray-400">Avg response</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-semibold text-emerald-400">94%</div>
            <div className="text-xs text-gray-400">AI resolution</div>
          </div>
        </div>

        {/* Call list */}
        <div className="p-4 space-y-3">
          {activeCalls.map((call) => (
            <div
              key={call.id}
              className="flex items-center justify-between py-3 px-4 border border-white/5 rounded-xl bg-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
                    {call.customer.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${
                    call.status === "Needs attention" ? "bg-amber-400" : "bg-emerald-400"
                  } border-2 border-[#0b0f1a] animate-pulse`} />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{call.customer}</div>
                  <div className="text-xs text-gray-400">{call.status}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-white font-mono">{call.duration}</div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs hover:bg-white/20">
                    Listen
                  </button>
                  {call.status === "Needs attention" && (
                    <button className="px-3 py-1.5 rounded-lg bg-rose-400 text-black text-xs font-semibold">
                      Take over
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

