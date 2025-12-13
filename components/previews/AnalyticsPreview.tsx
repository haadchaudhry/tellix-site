"use client";

import { motion } from "framer-motion";

export function AnalyticsPreview() {
  return (
    <motion.div
      key="analytics"
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
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-sm">📊</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Analytics Dashboard</div>
              <div className="text-xs text-gray-400">Last 7 days</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">7 days</span>
            <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">30 days</span>
            <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">Custom</span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-gray-400 mb-1">Response Time</div>
            <div className="text-2xl font-semibold text-emerald-400">2.3s</div>
            <div className="text-xs text-emerald-400 mt-1">↓ 15% vs last week</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-gray-400 mb-1">Resolution Rate</div>
            <div className="text-2xl font-semibold text-rose-300">94%</div>
            <div className="text-xs text-rose-300 mt-1">↑ 8% vs last week</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-gray-400 mb-1">CSAT Score</div>
            <div className="text-2xl font-semibold text-purple-400">4.8</div>
            <div className="text-xs text-purple-400 mt-1">↑ 0.3 vs last week</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-gray-400 mb-1">AI Deflection</div>
            <div className="text-2xl font-semibold text-rose-300">78%</div>
            <div className="text-xs text-rose-300 mt-1">↑ 12% vs last week</div>
          </div>
        </div>

        {/* Charts area */}
        <div className="p-4 space-y-4">
          {/* Fake chart */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-white">Ticket Volume</div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-300" /> Email</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400" /> Voice</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-300" /> Chat</span>
              </div>
            </div>
            {/* Fake bar chart */}
            <div className="flex items-end justify-between gap-2 h-24">
              {[40, 65, 45, 80, 60, 75, 55].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1">
                  <div
                    className="bg-gradient-to-t from-rose-300 to-sky-400 rounded-t-lg opacity-80"
                    style={{ height: `${height}%` }}
                  />
                  <div className="text-xs text-gray-500 text-center">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Channel breakdown */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium text-white mb-3">By Channel</div>
              <div className="space-y-2">
                {[
                  { label: "Email", value: 45, color: "bg-rose-300" },
                  { label: "Voice", value: 30, color: "bg-purple-400" },
                  { label: "Chat", value: 25, color: "bg-rose-300" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <div className="text-xs text-gray-300 flex-1">{item.label}</div>
                    <div className="text-xs text-white">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium text-white mb-3">Top Issues</div>
              <div className="space-y-2">
                {[
                  { label: "Shipping delays", count: 42 },
                  { label: "Refund requests", count: 28 },
                  { label: "Product questions", count: 19 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="text-xs text-gray-300 flex-1">{item.label}</div>
                    <div className="text-xs text-rose-300">{item.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

