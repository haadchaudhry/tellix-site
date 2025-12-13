"use client";

import { motion } from "framer-motion";

const StatCard = ({ title, value, hint }: { title: string; value: string; hint: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-1">
    <div className="text-sm text-gray-400">{title}</div>
    <div className="text-3xl font-semibold text-white">{value}</div>
    <div className="text-xs text-gray-500">{hint}</div>
  </div>
);

const statusBadge = (status: "Passed" | "Deviated") => {
  const styles =
    status === "Passed"
      ? "bg-emerald-500/15 text-emerald-200 border-emerald-400/30"
      : "bg-amber-500/15 text-amber-200 border-amber-300/30";
  return <span className={`px-2 py-1 rounded-full text-xs border ${styles}`}>{status}</span>;
};

export function AgentTestingPreview() {
  const tests = [
    { name: "Response Accuracy Test", status: "Passed" as const, rate: "100%" },
    { name: "User Interaction Simulation", status: "Passed" as const, rate: "100%" },
    { name: "AI Error Handling Test", status: "Deviated" as const, rate: "80%" },
  ];

  return (
    <motion.div
      key="test"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-500 shadow-lg" />
            <div>
              <div className="text-sm font-semibold text-white">Tellix support agent</div>
              <div className="text-xs text-gray-400">Test suite</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>🔗</span>
            <span>🕒 1 hour ago</span>
            <span>▶ Run tests</span>
            <span>⋮</span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="text-white font-semibold text-lg">Test results</div>

          <div className="grid sm:grid-cols-3 gap-3">
            <StatCard title="Pass rate" value="99%" hint="Based on 1,250 simulations" />
            <StatCard title="Simulations passed" value="1,231" hint="All conditions met" />
            <StatCard title="Simulations failed" value="9" hint="Failure conditions detected" />
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid grid-cols-3 px-4 py-2 text-xs text-gray-400 border-b border-white/5">
              <span>Test case</span>
              <span>Status</span>
              <span>Pass rate</span>
            </div>
            {tests.map((test, i) => (
              <div key={test.name} className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 1 ? "bg-white/5" : ""}`}>
                <span className="text-white">{test.name}</span>
                <div>{statusBadge(test.status)}</div>
                <span className="text-gray-200">{test.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}







