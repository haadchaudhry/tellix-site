"use client";

import { motion } from "framer-motion";

const Pill = ({ text, tone = "default" }: { text: string; tone?: "default" | "success" }) => {
  const styles =
    tone === "success"
      ? "bg-emerald-500/15 text-emerald-200 border-emerald-400/30"
      : "bg-white/5 text-gray-200 border-white/10";
  return <span className={`px-3 py-1 rounded-full text-xs border ${styles}`}>{text}</span>;
};

export function AgentMonitorPreview() {
  return (
    <motion.div
      key="monitor"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="text-white font-semibold">Voice call details</div>
          <div className="flex items-center gap-2">
            <Pill text="Happy" tone="success" />
            <Pill text="Transferred" />
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="text-sm text-gray-300">
            Ticket ID: <span className="text-white">call-1747</span> · Aug 18, 2025 23:56 (2m 7s)
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full bg-white/10 border border-white/10 text-white">⏯</button>
              <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-rose-300 to-sky-400" />
              </div>
              <div className="text-xs text-gray-400">0:19 / 1:48</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            {["Transcript", "Details", "Latency"].map((tab, idx) => (
              <span
                key={tab}
                className={`px-3 py-1.5 rounded-lg border ${
                  idx === 0 ? "border-white/20 bg-white/10 text-white" : "border-white/5 text-gray-400"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-100 text-xs px-3 py-2">
            Initialization code · 4 logs
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-sky-400 flex items-center justify-center text-xs font-bold text-black">
                AI
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-white max-w-xl">
                Hello! You’re speaking with Tellix, your AI support assistant. How can I assist you today?
                <div className="text-[10px] text-gray-400 mt-1">2s</div>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-end">
              <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tr-none px-4 py-3 text-sm text-white max-w-xl">
                Hi, I’d like to know more about what you can do.
                <div className="text-[10px] text-gray-400 mt-1 text-right">4s</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-200">
                👤
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs text-gray-300">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-gray-400 mb-1">Channel</div>
              <div className="text-white">Voice</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-gray-400 mb-1">Customer</div>
              <div className="text-white">John Doe</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-gray-400 mb-1">Order ID</div>
              <div className="text-white">#12345</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}








