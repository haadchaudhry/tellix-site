"use client";

import { motion, AnimatePresence } from "framer-motion";
import { UnifiedInboxStep } from "./unifiedInboxTypes";
import { InboxPreview } from "./previews/InboxPreview";
import { VoiceCallsPreview } from "./previews/VoiceCallsPreview";
import { ReviewsPreview } from "./previews/ReviewsPreview";
import { AnalyticsPreview } from "./previews/AnalyticsPreview";

type Props = {
  activeStep: UnifiedInboxStep;
};

const scenic =
  "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(11,17,30,0.95)), url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=80')";

export function UnifiedInboxPreview({ activeStep }: Props) {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-[#0b0f1a] shadow-2xl">
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: scenic, backgroundSize: "cover", backgroundPosition: "center" }}
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/90 via-[#050509]/60 to-transparent" />
      
      {/* Logo in top left corner */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <img src="/logo.svg" alt="Tellix logo" className="w-6 h-6 object-contain" />
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-1.5 h-1.5 bg-rose-300/60 rounded-sm" />
          <div className="w-1.5 h-1.5 bg-sky-300/60 rounded-sm" />
          <div className="w-1.5 h-1.5 bg-blue-400/60 rounded-sm" />
          <div className="w-1.5 h-1.5 bg-indigo-400/60 rounded-sm" />
        </div>
      </div>

      <div className="relative px-4 md:px-8 py-8 flex items-center justify-center h-full">
        <AnimatePresence mode="wait">
          {activeStep === "inbox" && <InboxPreview key="inbox" />}
          {activeStep === "voice" && <VoiceCallsPreview key="voice" />}
          {activeStep === "reviews" && <ReviewsPreview key="reviews" />}
          {activeStep === "analytics" && <AnalyticsPreview key="analytics" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

