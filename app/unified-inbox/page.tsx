"use client";

import { useState } from "react";
import Link from "next/link";
import { UnifiedInboxStep } from "@/components/unifiedInboxTypes";
import { UnifiedInboxSteps } from "@/components/UnifiedInboxSteps";
import { UnifiedInboxPreview } from "@/components/UnifiedInboxPreview";

const steps = [
  {
    id: "inbox" as UnifiedInboxStep,
    title: "Unified Inbox",
    subtitle: "All channels in one place: email, SMS, social DMs",
    icon: "📥",
  },
  {
    id: "voice" as UnifiedInboxStep,
    title: "Voice Calls",
    subtitle: "Monitor live calls, AI handling, take over when needed",
    icon: "📞",
  },
  {
    id: "reviews" as UnifiedInboxStep,
    title: "Reviews & Ratings",
    subtitle: "Track reviews, auto-respond with AI, sentiment analysis",
    icon: "⭐",
  },
  {
    id: "analytics" as UnifiedInboxStep,
    title: "Analytics",
    subtitle: "Real-time metrics, CSAT scores, channel breakdown",
    icon: "📊",
  },
];

export default function UnifiedInboxPage() {
  const [activeStep, setActiveStep] = useState<UnifiedInboxStep>("inbox");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.svg" alt="Tellix logo" className="w-9 h-9 object-contain" />
              <span className="text-lg font-semibold text-gray-900">Tellix AI</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/#features" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                Product
              </Link>
              <Link href="/#voice" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                Voice AI
              </Link>
              <Link href="/#pricing" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                Pricing
              </Link>
              <Link href="/#contact" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/#contact" className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors border border-gray-300 rounded-lg hover:border-gray-400">
              CONTACT SALES
            </Link>
            <Link href="/#contact" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all">
              TRY FOR FREE
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-rose-300 rounded-sm" />
              <div className="w-2 h-2 bg-sky-300 rounded-sm" />
              <div className="w-2 h-2 bg-blue-400 rounded-sm" />
              <div className="w-2 h-2 bg-indigo-400 rounded-sm" />
            </div>
            <span className="rainbow-text text-sm font-medium uppercase tracking-wider">Unified Inbox</span>
          </div>
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white">
            Every conversation,
            <br />
            <span className="gradient-text-retell">
              one beautiful place
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Email, SMS, voice calls, social DMs, and reviews — all unified in a single workspace. AI suggests responses, tracks sentiment, and surfaces issues automatically.
          </p>
        </div>
      </section>

      {/* Interactive Inbox Section */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side - Step selector */}
            <div className="lg:w-[340px] flex-shrink-0">
              <UnifiedInboxSteps
                steps={steps}
                activeStep={activeStep}
                onStepChange={setActiveStep}
              />
            </div>

            {/* Right side - Live Preview */}
            <div className="flex-1 min-h-[500px] lg:min-h-[600px]">
              <UnifiedInboxPreview activeStep={activeStep} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-4xl md:text-5xl font-semibold mb-6 text-white">
            Ready to unify your support?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Stop switching between tools. See all your customer conversations in one place.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact" className="btn-primary btn-shimmer px-8 py-4 text-lg">
              Get Started
            </Link>
            <Link href="/" className="btn-outline px-8 py-4 text-lg">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

