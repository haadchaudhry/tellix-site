"use client";

import { useState } from "react";
import Link from "next/link";

export default function VoiceDemoPage() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);

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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#0b0b12]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <svg width="44" height="44" viewBox="0 0 64 64" fill="none" className="text-white/90">
                <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="22"/>
                  <ellipse cx="32" cy="32" rx="18" ry="9" transform="rotate(24 32 32)"/>
                  <ellipse cx="32" cy="32" rx="18" ry="9" transform="rotate(-24 32 32)"/>
                  <path d="M22 33c3-3 6-3 9 0s6 3 11 0"/>
                </g>
              </svg>
            </div>
            <span className="rainbow-text font-semibold text-xl md:text-2xl">Voice Experience</span>
          </div>
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight text-white">
            Meet your customers with
            <br />
            <span className="gradient-text-retell">
              Destiny at every turn
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            Designed to make every conversation feel natural. Industry-leading Voice AI allows agents to follow rapid shifts in
            conversation, sentiment, pitch, and tone detection. This ensures they match the mood of each interaction over 99 languages.
          </p>
        </div>
      </section>

      {/* Voice Demo Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#0b0b12]">
        <div className="max-w-6xl mx-auto">
          {/* Centered talking orb */}
          <div className="relative flex items-center justify-center pt-4 pb-4 mb-16">
            {/* Glow halo */}
            <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-pink-200/20 blur-3xl" />
            <div className="absolute w-[460px] h-[460px] md:w-[520px] md:h-[520px] rounded-full bg-purple-300/15 blur-3xl" />

            <div
              onClick={() => setIsVoiceActive(!isVoiceActive)}
              className={`relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-b from-pink-100 via-orange-200 to-amber-200 shadow-[0_0_50px_rgba(255,107,157,0.35)] border border-white/30 cursor-pointer transition-transform duration-300 ${
                isVoiceActive ? "scale-105" : "scale-100"
              } animate-voice-pulse flex items-center justify-center`}
            >
              {/* Pulsing rings */}
              <div className="absolute inset-[-10%] rounded-full border border-pink-200/50 animate-voice-ring-slow" />
              <div
                className="absolute inset-[-18%] rounded-full border border-pink-200/30 animate-voice-ring-slow"
                style={{ animationDelay: "0.6s" }}
              />
              <div
                className="absolute inset-[-26%] rounded-full border border-pink-200/20 animate-voice-ring-slow"
                style={{ animationDelay: "1.2s" }}
              />

              {/* Soft inner glow */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/30 blur-xl" />

              {/* Mic badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/80 text-xs font-medium text-gray-800 shadow">
                {isVoiceActive ? "Listening…" : "Tap to talk"}
              </div>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Personalized Voices",
                desc: "Tailored to match your unique brand. Choose from our library of voices or create custom voices that reflect your brand personality. Each voice is trained on your tone, style, and communication preferences.",
                features: [
                  "Custom voice training",
                  "Brand-aligned tone",
                  "Multi-language support",
                  "Emotion-aware delivery"
                ]
              },
              {
                title: "Dynamic Interrupts",
                desc: "Adapted to a variety of accents and languages. Our AI understands when to pause, when to listen, and when to respond. Handles rapid topic changes and complex multi-turn conversations seamlessly.",
                features: [
                  "Natural conversation flow",
                  "Accent recognition",
                  "Context switching",
                  "Interruption handling"
                ]
              },
              {
                title: "Ultra-low Latency",
                desc: "Industry-leading voice response time. Our infrastructure is optimized for real-time conversation, with sub-200ms response times that make interactions feel truly natural and human-like.",
                features: [
                  "Sub-200ms response time",
                  "Global edge network",
                  "Real-time processing",
                  "Seamless handoffs"
                ]
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Conversation Example */}
          {isVoiceActive && (
            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm animate-fade-in">
              <h3 className="font-semibold text-lg mb-6">Live Conversation Example</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-200 max-w-[80%]">
                    Hi! Thanks for calling Acme Store. I&apos;m your AI assistant. How can I help you today?
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <div className="bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl rounded-tr-none px-4 py-3 text-sm text-white max-w-[80%]">
                    Hi, I ordered something last week but it hasn&apos;t arrived yet.
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold flex-shrink-0">
                    👤
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-200 max-w-[80%]">
                    I&apos;d be happy to help track that down! I found your order #4521 — it&apos;s currently out for delivery and should arrive today by 6 PM. Would you like me to send you a tracking link?
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2.5s", label: "Avg Response Time", desc: "Faster than any human" },
              { value: "94%", label: "Resolution Rate", desc: "First contact resolution" },
              { value: "99+", label: "Languages", desc: "Global support coverage" },
              { value: "24/7", label: "Availability", desc: "Never miss a customer" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-4xl md:text-5xl font-semibold mb-6 text-white">
            Ready to transform your voice support?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Experience the future of customer conversations. Start your free trial today.
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

