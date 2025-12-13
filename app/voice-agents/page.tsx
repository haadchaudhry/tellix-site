"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type VoiceStep = "inbound" | "outbound" | "languages" | "analytics";

const steps = [
  {
    id: "inbound" as VoiceStep,
    title: "Inbound Calls",
    subtitle: "AI answers calls 24/7, routes intelligently",
    icon: "📞",
  },
  {
    id: "outbound" as VoiceStep,
    title: "Outbound Campaigns",
    subtitle: "Automated follow-ups, reminders, surveys",
    icon: "📤",
  },
  {
    id: "languages" as VoiceStep,
    title: "99+ Languages",
    subtitle: "Real-time translation, accent detection",
    icon: "🌍",
  },
  {
    id: "analytics" as VoiceStep,
    title: "Call Analytics",
    subtitle: "Sentiment tracking, call summaries, insights",
    icon: "📊",
  },
];

function InboundPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-white text-lg">📞</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Incoming Call</div>
              <div className="text-xs text-gray-400">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs border border-green-400/30 animate-pulse">
              Live
            </span>
            <span className="text-xs text-gray-400">0:45</span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="text-sm font-medium text-white mb-3">Live Transcript</div>
          
          <div className="space-y-3 max-h-[200px] overflow-y-auto">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white flex-shrink-0">C</div>
              <div className="bg-white/5 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-gray-300 max-w-[80%]">
                Hi, I&apos;m calling about my order #12345. It hasn&apos;t arrived yet.
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rounded-tr-none px-4 py-2 text-sm text-white max-w-[80%]">
                I understand your concern. Let me look up order #12345 for you right away.
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs text-white flex-shrink-0">AI</div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rounded-tr-none px-4 py-2 text-sm text-white max-w-[80%]">
                I found your order. It&apos;s currently in transit and expected to arrive tomorrow by 5 PM.
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs text-white flex-shrink-0">AI</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-lg font-semibold text-emerald-400">😊</div>
              <div className="text-xs text-gray-400">Positive</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-lg font-semibold text-white">EN</div>
              <div className="text-xs text-gray-400">English</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-lg font-semibold text-purple-400">AI</div>
              <div className="text-xs text-gray-400">Handling</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function OutboundPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">📤</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Outbound Campaign</div>
              <div className="text-xs text-gray-400">Order Follow-up</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-400/30">
              Running
            </span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-4 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-white">1,250</div>
              <div className="text-xs text-gray-400">Total calls</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-emerald-400">892</div>
              <div className="text-xs text-gray-400">Completed</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-blue-400">245</div>
              <div className="text-xs text-gray-400">In progress</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-amber-400">113</div>
              <div className="text-xs text-gray-400">Pending</div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium text-white mb-3">Campaign Script</div>
            <div className="text-sm text-gray-400 italic">
              &quot;Hi [Name], this is a follow-up call from [Company] regarding your recent order. 
              We wanted to make sure everything arrived safely and see if you have any questions...&quot;
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20">
              Pause Campaign
            </button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LanguagesPreview() {
  const languages = [
    { code: "EN", name: "English", usage: 45 },
    { code: "ES", name: "Spanish", usage: 22 },
    { code: "FR", name: "French", usage: 12 },
    { code: "DE", name: "German", usage: 8 },
    { code: "ZH", name: "Chinese", usage: 7 },
    { code: "JP", name: "Japanese", usage: 6 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">🌍</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Language Support</div>
              <div className="text-xs text-gray-400">99+ languages available</div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-white">99+</div>
              <div className="text-xs text-gray-400">Languages</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-emerald-400">Real-time</div>
              <div className="text-xs text-gray-400">Translation</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-purple-400">Auto</div>
              <div className="text-xs text-gray-400">Detection</div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium text-white mb-3">Usage by Language</div>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.code} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                    {lang.code}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-gray-400">{lang.usage}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full mt-1">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        style={{ width: `${lang.usage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnalyticsPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">📊</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Call Analytics</div>
              <div className="text-xs text-gray-400">Last 7 days</div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-4 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-xl font-semibold text-white">2,456</div>
              <div className="text-xs text-gray-400">Total calls</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-xl font-semibold text-emerald-400">2.3s</div>
              <div className="text-xs text-gray-400">Avg response</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-xl font-semibold text-purple-400">94%</div>
              <div className="text-xs text-gray-400">Resolution</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-xl font-semibold text-amber-400">4.8</div>
              <div className="text-xs text-gray-400">CSAT</div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium text-white mb-3">Call Volume</div>
            <div className="flex items-end justify-between gap-2 h-20">
              {[40, 65, 45, 80, 60, 75, 55].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1">
                  <div
                    className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"
                    style={{ height: `${height}%` }}
                  />
                  <div className="text-xs text-gray-500 text-center">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium text-white mb-3">Sentiment Distribution</div>
            <div className="flex gap-3">
              <div className="flex-1 text-center">
                <div className="text-2xl">😊</div>
                <div className="text-sm text-emerald-400 font-semibold">72%</div>
                <div className="text-xs text-gray-400">Positive</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-2xl">😐</div>
                <div className="text-sm text-amber-400 font-semibold">21%</div>
                <div className="text-xs text-gray-400">Neutral</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-2xl">😟</div>
                <div className="text-sm text-red-400 font-semibold">7%</div>
                <div className="text-xs text-gray-400">Negative</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function VoiceAgentsPage() {
  const [activeStep, setActiveStep] = useState<VoiceStep>("inbound");

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
            <span className="text-2xl">📞</span>
            <span className="rainbow-text text-sm font-medium uppercase tracking-wider">Voice AI Agents</span>
          </div>
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white">
            Human-like voice AI
            <br />
            <span className="gradient-text-retell">
              for every conversation
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Handle inbound and outbound calls with AI that sounds natural, understands context, and resolves issues faster than ever.
          </p>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side - Step selector */}
            <div className="lg:w-[340px] flex-shrink-0">
              <div className="space-y-4">
                {steps.map((step) => {
                  const isActive = step.id === activeStep;
                  return (
                    <motion.button
                      key={step.id}
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.995 }}
                      onClick={() => setActiveStep(step.id)}
                      className={`w-full text-left rounded-2xl border transition-all duration-300 px-4 py-3 ${
                        isActive
                          ? "border-white/20 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                          : "border-white/5 bg-white/[0.02] hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="pt-1">
                          <div className={`h-8 w-1 rounded-full ${isActive ? "rainbow-indicator" : "bg-white/10"}`} />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{step.icon}</span>
                            <div className={`text-base font-semibold ${isActive ? "text-white" : "text-gray-400"}`}>
                              {step.title}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">{step.subtitle}</div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right side - Live Preview */}
            <div className="flex-1 min-h-[500px] lg:min-h-[600px]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 bg-[#0b0f1a] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/90 via-[#050509]/60 to-transparent" />
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <img src="/logo.svg" alt="Tellix logo" className="w-6 h-6 object-contain" />
                </div>
                <div className="relative px-4 md:px-8 py-8 flex items-center justify-center h-full">
                  <AnimatePresence mode="wait">
                    {activeStep === "inbound" && <InboundPreview key="inbound" />}
                    {activeStep === "outbound" && <OutboundPreview key="outbound" />}
                    {activeStep === "languages" && <LanguagesPreview key="languages" />}
                    {activeStep === "analytics" && <AnalyticsPreview key="analytics" />}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-4xl md:text-5xl font-semibold mb-6 text-white">
            Ready to transform your calls?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Start handling calls with AI that your customers will love.
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

