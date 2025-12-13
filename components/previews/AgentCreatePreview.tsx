"use client";

import { motion } from "framer-motion";

const icons = {
  x: (
    <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
};

const fileIcons = ["📄", "🖼️", "🎧", "📊", "📃", "🗂️"];

export function AgentCreatePreview() {
  return (
    <motion.div
      key="create"
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
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-lg" />
            <div>
              <div className="text-sm font-semibold text-white">Create new agent</div>
              <div className="text-xs text-gray-400">Draft</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 px-2 py-1 rounded-lg border border-white/10">Draft</span>
            {icons.x}
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 pt-3 flex items-center gap-2 text-sm">
          {["Chat", "Voice", "Multi-modal"].map((tab, idx) => (
            <button
              key={tab}
              className={`px-3 py-1.5 rounded-full ${
                idx === 0
                  ? "bg-gradient-to-r from-cyan-400/30 to-purple-400/30 text-white border border-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-semibold">Add training documents</div>
              <div className="text-sm text-gray-400">Attach files to give your agent business context</div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Enable for customer support
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <div className="border-2 border-dashed border-white/15 rounded-xl p-6 bg-white/5">
                <div className="flex flex-wrap items-center gap-2 text-xl mb-3">
                  {fileIcons.map((ico) => (
                    <span key={ico}>{ico}</span>
                  ))}
                </div>
                <div className="text-white font-semibold">Drag files here or click to browse</div>
                <div className="text-sm text-gray-400 mt-1">PDF, DOC, CSV, images, audio — up to 100MB each</div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm text-gray-300">Agent persona</label>
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm flex items-center justify-between">
                Friendly support specialist
                <span className="text-gray-400">▾</span>
              </div>
              <div className="text-sm text-gray-400">
                Tone: empathetic, concise. Escalates when sentiment is negative twice in a row.
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm text-gray-300">Channels</label>
              <div className="flex items-center gap-2 flex-wrap">
                {["Chat", "Voice", "Email", "DMs"].map((c) => (
                  <span key={c} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white">
                    {c}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-400">You can enable or disable channels anytime.</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button className="text-sm text-gray-300 hover:text-white">Cancel</button>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Autosaving draft</span>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-sm font-semibold text-black shadow-lg">
                Create agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}







