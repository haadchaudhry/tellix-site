"use client";

import { motion } from "framer-motion";

const tickets = [
  { id: 4521, title: "Order delayed — tracking link", customer: "Amelia Watts", channel: "Email", status: "Priority", sentiment: "Negative", eta: "2h" },
  { id: 4520, title: "Need invoice for Q4", customer: "Jamal Singh", channel: "Email", status: "Open", sentiment: "Neutral", eta: "4h" },
  { id: 4519, title: "Upgrade to enterprise plan", customer: "Priya Nair", channel: "Voice", status: "Priority", sentiment: "Positive", eta: "1h" },
  { id: 4518, title: "Return request for shoes", customer: "Leo Martins", channel: "Chat", status: "Resolved", sentiment: "Positive", eta: "—" },
  { id: 4517, title: "Bug: payment failing", customer: "Sofia Alvarez", channel: "Email", status: "Open", sentiment: "Negative", eta: "3h" },
];

const channelColors: Record<string, string> = {
  Email: "from-sky-400 to-blue-500",
  Voice: "from-purple-400 to-violet-500",
  Chat: "from-rose-300 to-pink-400",
  Reviews: "from-rose-300 to-pink-400",
};

const statusColors: Record<string, string> = {
  Resolved: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
  Priority: "bg-red-500/15 text-red-200 border-red-400/30",
  Open: "bg-amber-500/15 text-amber-200 border-amber-400/30",
};

export function InboxPreview() {
  return (
    <motion.div
      key="inbox"
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
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 via-orange-200 to-sky-300 shadow-lg" />
            <div>
              <div className="text-sm font-semibold text-white">Unified Inbox</div>
              <div className="text-xs text-gray-400">24 open tickets</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white">
              Search tickets...
            </div>
            <span className="text-gray-400">⚙️</span>
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
          {["All", "Email", "Voice", "Chat"].map((filter, idx) => (
            <button
              key={filter}
              className={`px-3 py-1.5 rounded-full text-xs ${
                idx === 0
                  ? "bg-gradient-to-r from-rose-300/30 to-sky-300/30 text-white border border-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
          <div className="flex-1" />
          <span className="text-xs text-gray-400">Sort by: Priority ▾</span>
        </div>

        {/* Ticket list */}
        <div className="p-4 space-y-2 max-h-[320px] overflow-y-auto">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-center justify-between py-3 px-3 border border-white/5 rounded-xl hover:border-rose-300/40 hover:bg-white/5 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${channelColors[ticket.channel]} shadow-lg flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{ticket.channel[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{ticket.title}</div>
                  <div className="text-xs text-gray-400">{ticket.customer} • {ticket.channel}</div>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[ticket.status]}`}>
                  {ticket.status}
                </span>
                <div className="text-xs text-gray-500 mt-1">ETA {ticket.eta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

