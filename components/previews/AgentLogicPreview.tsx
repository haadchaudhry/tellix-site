"use client";

import { motion } from "framer-motion";

const Tag = ({ text }: { text: string }) => (
  <span className="px-2 py-1 rounded-full text-[11px] bg-blue-500/10 text-blue-200 border border-blue-200/30">
    {text}
  </span>
);

const ScenarioBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-2">
    <div className="flex items-center justify-between text-sm text-white">
      <span>{title}</span>
      <span className="text-gray-500 text-xs">▾</span>
    </div>
    <div className="space-y-2 text-sm text-gray-200">{children}</div>
  </div>
);

export function AgentLogicPreview() {
  return (
    <motion.div
      key="logic"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-500 shadow-lg" />
            <div>
              <div className="text-sm font-semibold text-white">Tellix AI support agent</div>
              <div className="text-xs text-gray-400">Multi-modal</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200">Draft</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>Deploy agent ▾</span>
            <span className="flex items-center gap-1">🕒 1 hour ago</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="text-white font-semibold text-lg">Scenario: New account onboarding</div>
          <ScenarioBlock title="Scenario 1: Generic “Account Creation” inquiry">
            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
              Say: “Welcome to Tellix! We’re excited to get you started. May I confirm your full name and email to begin?”
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 p-3 space-y-2">
              <div className="flex items-center gap-2">
                Customer provides info <Tag text="@info_confirmed" /> → proceed to Identity Verification
              </div>
              <div className="flex items-center gap-2">
                Customer refuses <Tag text="@info_not_provided" /> → proceed to Escalation
              </div>
            </div>
          </ScenarioBlock>

          <ScenarioBlock title="Scenario 2: Identity Verification">
            <div className="rounded-lg bg-white/5 border border-white/10 p-3">
              Say: “Please upload a photo of your government-issued ID.”
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 p-3 space-y-2">
              <div className="flex items-center gap-2">
                Upload is successful <Tag text="verify_identity_check" /> → Compliance Checks
              </div>
              <div className="flex items-center gap-2">
                Upload fails (retry up to 2 times) <Tag text="@info_not_provided" /> → Escalation
              </div>
            </div>
          </ScenarioBlock>

          <ScenarioBlock title="Scenario 3: Compliance Checks">
            <div className="rounded-lg bg-white/5 border border-white/10 p-3 space-y-2">
              <div className="flex items-center gap-2">
                Pass <Tag text="accepted" /> → Account Confirmation
              </div>
              <div className="flex items-center gap-2">
                Fail (mismatch) → Escalation
              </div>
            </div>
          </ScenarioBlock>

          <div className="flex justify-end">
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-200">
              Mark Derek editing…
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}





