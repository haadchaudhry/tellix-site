"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import StarlightHeadliner from "@/components/StarlightHeadliner";
import FeatureLogo from "@/components/FeatureLogos";
import { IconPersonalizedVoices, IconDynamicInterrupts, IconUltraLowLatency } from "@/components/VoiceExperienceIcons";

type MockTone = "blue" | "rose" | "purple" | "indigo" | "coral" | "pink" | "orange";

function MockShot({
  tone,
  className = "",
  withCursor = false,
}: {
  tone: MockTone;
  className?: string;
  withCursor?: boolean;
}) {
  const palette: Record<MockTone, string> = {
    blue: "from-sky-200 via-indigo-200 to-purple-200",
    rose: "from-rose-200 via-pink-200 to-red-200",
    purple: "from-purple-200 via-violet-200 to-pink-200",
    indigo: "from-indigo-200 via-slate-200 to-sky-200",
    coral: "from-orange-200 via-amber-200 to-yellow-200",
    pink: "from-pink-200 via-rose-200 to-amber-200",
    orange: "from-amber-200 via-orange-200 to-rose-200",
  };

  return (
    <div
      className={`
        ${className}
        relative
        h-12 w-16
        rounded-xl
        bg-gradient-to-r ${palette[tone]}
        shadow-inner shadow-white/40
        border border-white/40
        overflow-hidden
      `}
    >
      <div className="h-full w-full rounded-xl bg-white/15 backdrop-blur-sm" />

      {/* Simulated UI lines */}
      <div className="absolute inset-x-3 top-3 h-2 rounded bg-white/60" />
      <div className="absolute inset-x-3 top-6 h-1.5 rounded bg-white/30" />
      <div className="absolute inset-x-3 top-9 h-1.5 rounded bg-white/20" />

      {withCursor && (
        <>
          {/* Pointer click ripple */}
          <div className="absolute w-12 h-12 rounded-full bg-white/20 left-8 top-6 animate-[ping_1.6s_ease-out_infinite]" />
          {/* Pointer shape */}
          <div className="absolute left-10 top-8 h-3 w-3 rotate-12 border-l-4 border-b-4 border-white drop-shadow" />
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  // Animated counters
  const [counters, setCounters] = useState({ deflection: 0, languages: 0, customers: 0, messages: 0 });
  
  useEffect(() => {
    const targets = { deflection: 70, languages: 99, customers: 500, messages: 50 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        deflection: Math.round(targets.deflection * progress),
        languages: Math.round(targets.languages * progress),
        customers: Math.round(targets.customers * progress),
        messages: Math.round(targets.messages * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowDemoModal(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', role: '' });
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Demo Modal */}
      {showDemoModal && (
        <div className="modal-overlay" onClick={() => setShowDemoModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
            </div>
                <h3 className="text-xl font-semibold mb-2">Thanks for reaching out!</h3>
                <p className="text-gray-400">We&apos;ll be in touch within 24 hours.</p>
          </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-2">Book a Demo</h3>
                <p className="text-gray-400 mb-6">See how Tellix can transform your customer support.</p>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    required
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                  />
                  <select
                    required
                    value={formData.role}
                    onChange={e => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white"
                  >
                    <option value="">Select your role</option>
                    <option value="cxo">CXO / Founder</option>
                    <option value="vp">VP / Director</option>
                    <option value="manager">Manager</option>
                    <option value="other">Other</option>
                  </select>
                  <button type="submit" className="w-full btn-primary">
                    Request Demo
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className="modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="bg-black rounded-2xl overflow-hidden max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <div className="relative pt-[56.25%]">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">Product demo video</p>
                  <button 
                    onClick={() => setShowVideoModal(false)}
                    className="mt-4 text-sm text-pink-400 hover:text-pink-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img src="/logo.svg" alt="Tellix logo" className="w-9 h-9 object-contain" />
              <span className="text-lg font-semibold text-gray-900">Tellix AI</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <button 
                onClick={() => scrollToSection('features')}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
              >
              Product
              </button>
              <button 
                onClick={() => scrollToSection('voice')}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
              >
                Voice AI
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
              >
              Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
              >
                Contact
              </button>
          </nav>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowDemoModal(true)}
              className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors border border-gray-300 rounded-lg hover:border-gray-400"
            >
              CONTACT SALES
            </button>
            <button onClick={() => setShowDemoModal(true)} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all">
              TRY FOR FREE
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Starry Night Sky */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Starry Night Background - Deep Blue Milky Way (8K Ultra High Res) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=7680&q=100')`,
            backgroundSize: 'cover',
          }}
        />
        {/* Animated fiber optic stars canvas */}
        <StarlightHeadliner />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        <div className="relative text-center px-6 pt-20 pb-40" style={{ zIndex: 10 }}>
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in text-white tracking-tight font-sans drop-shadow-lg">
            Supercharge your
            <br />
            <span className="gradient-text-retell">Call Operations</span> with AI
            </h1>

          <p className="text-gray-200 text-base md:text-lg mb-10 animate-fade-in delay-100 max-w-xl mx-auto leading-relaxed drop-shadow">
            Discover the new way to build, test, deploy, and monitor production-ready AI voice agents at scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in delay-200">
            <button onClick={() => setShowDemoModal(true)} className="bg-white text-gray-900 px-7 py-3.5 rounded-lg font-medium text-sm tracking-wide hover:bg-gray-100 transition-all shadow-lg">
              TRY FOR FREE
              </button>
            <button onClick={() => setShowDemoModal(true)} className="bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 rounded-lg font-medium text-sm tracking-wide border border-white/30 hover:bg-white/20 transition-all">
              CONTACT SALES
              </button>
            </div>
          </div>

        {/* Trusted by */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md py-12 border-t border-white/10" style={{ zIndex: 10 }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-gray-400 text-xs mb-8 text-center uppercase tracking-[0.2em]">Trusted by</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-6">
              {["pwc", "twilio", "JustCall", "degreed", "spare", "REGAL"].map((brand) => (
                <span key={brand} className="text-base font-semibold text-gray-500 hover:text-white transition-colors cursor-pointer">
                  {brand}
                </span>
              ))}
              </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {["HONK", "THE HOTELS NETWORK", "waymark", "clear", "Cal.com", "Wonolo"].map((brand) => (
                <span key={brand} className="text-base font-semibold text-gray-500 hover:text-white transition-colors cursor-pointer">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: `${counters.customers}+`, label: "Enterprise Customers", desc: "From startups to Fortune 500" },
              { number: `${counters.messages}M+`, label: "Messages Handled", desc: "Every single month" },
              { number: "2.5s", label: "Avg Response Time", desc: "Faster than any human" },
              { number: "24/7", label: "Availability", desc: "Never miss a customer" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="stat-number mb-2">{stat.number}</div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="rainbow-text text-sm font-medium uppercase tracking-wider">Features</span>
            <h2 className="font-sans text-4xl md:text-5xl font-semibold mt-4 mb-6 text-white">
              Everything you need to scale support
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From voice calls to social DMs, Tellix handles it all with AI that actually understands your customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                tone: "blue", 
                title: "Voice AI Agents", 
                desc: "Handle inbound and outbound calls with human-like conversation. Supports 99+ languages with ultra-low latency.",
                features: ["Natural conversation", "Emotion detection", "Call summarization"],
                href: "/voice-agents"
              },
              { 
                tone: "rose", 
                title: "Unified Inbox", 
                desc: "Email, SMS, social DMs, reviews — all in one place. AI suggests responses and tracks sentiment automatically.",
                features: ["Multi-channel", "AI suggestions", "Sentiment analysis"],
                href: "/unified-inbox"
              },
              { 
                tone: "purple", 
                title: "Agent Canvas", 
                desc: "Build, test, and deploy AI agents with a visual builder. No coding required.",
                features: ["Visual builder", "A/B testing", "Instant rollback"],
                href: "/agent-canvas"
              },
              { 
                tone: "indigo", 
                title: "Intelligence Dashboard", 
                desc: "Understand what's driving tickets, identify product issues, and track performance in real-time.",
                features: ["Issue detection", "Trend analysis", "Custom reports"],
                href: "/smart-insights"
              },
              { 
                tone: "orange", 
                title: "Deep Integrations", 
                desc: "Connect with Shopify, Zendesk, Salesforce, Slack, and 50+ more tools you already use.",
                features: ["50+ integrations", "Webhooks", "API access"],
                href: "/integrations"
              },
              { 
                tone: "pink", 
                title: "Enterprise Security", 
                desc: "SOC 2 Type II, GDPR, and HIPAA compliant. Your data is encrypted and never used for training.",
                features: ["SOC 2 Type II", "GDPR compliant", "Data encryption"],
                href: "/security"
              },
            ].map((feature, i) => {
              const logoMap: Record<string, "voice" | "inbox" | "canvas" | "intelligence" | "integrations" | "security"> = {
                "Voice AI Agents": "voice",
                "Unified Inbox": "inbox",
                "Agent Canvas": "canvas",
                "Intelligence Dashboard": "intelligence",
                "Deep Integrations": "integrations",
                "Enterprise Security": "security",
              };
              return (
              <div key={i} className="feature-card group relative">
                <div className="mb-4 group-hover:scale-105 transition-transform w-16 h-16 flex items-center justify-center text-white/90 group-hover:text-white">
                  <FeatureLogo feature={logoMap[feature.title]} className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.features.map((f, j) => (
                    <span key={j} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/10">{f}</span>
                  ))}
                </div>
                  <Link
                  href={feature.href}
                    onClick={(e) => e.stopPropagation()}
                  className="text-gray-500 hover:text-white text-sm font-light transition-colors duration-300 flex items-center gap-2 group/btn mt-2"
                  >
                    See more
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                      </div>
              );
            })}
                    </div>
                    </div>
      </section>

      {/* Voice Experience Section (Giga-inspired) */}
      <section
        id="voice"
        className="relative py-28 px-6 bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#0b0b12] text-white overflow-hidden"
      >
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

          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Meet your customers with
            <br />
            <span className="gradient-text-retell">Destiny</span> at every turn
              </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
            Designed to make every conversation feel natural. Industry-leading Voice AI allows agents to follow rapid shifts in
            conversation, sentiment, pitch, and tone detection. This ensures they match the mood of each interaction over 99 languages.
          </p>

          {/* Feature mini cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
            {[
              { title: "Personalized Voices", desc: "Tailored to match your unique brand", Icon: IconPersonalizedVoices },
              { title: "Dynamic interrupts", desc: "Adapts to accents, languages, and sentiment shifts", Icon: IconDynamicInterrupts },
              { title: "Ultra-low latency", desc: "Industry-leading response time for natural back-and-forth", Icon: IconUltraLowLatency },
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm group hover:bg-white/8 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <f.Icon size={32} className="text-white/80" />
                  </div>
                  <div className="font-medium text-sm md:text-base">{f.title}</div>
            </div>
                <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
            ))}
          </div>

          {/* Centered talking orb, Giga-style */}
          <div className="relative flex items-center justify-center pt-4 pb-4">
            {/* Glow halo */}
            <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-rose-200/15 blur-3xl pointer-events-none" />
            <div className="absolute w-[460px] h-[460px] md:w-[520px] md:h-[520px] rounded-full bg-purple-300/15 blur-3xl pointer-events-none" />

            <div
              onClick={() => setIsVoiceActive(!isVoiceActive)}
              className={`relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-b from-rose-200 via-peach-100 to-sky-200 shadow-[0_0_50px_rgba(244,165,165,0.25)] border border-white/30 cursor-pointer transition-transform duration-300 ${
                isVoiceActive ? "scale-105" : "scale-100"
              } animate-voice-pulse flex items-center justify-center`}
            >
              {/* Pulsing rings */}
              <div className="absolute inset-[-10%] rounded-full border border-rose-200/40 animate-voice-ring-slow" />
              <div
                className="absolute inset-[-18%] rounded-full border border-lavender-200/30 animate-voice-ring-slow"
                style={{ animationDelay: "0.6s" }}
              />
              <div
                className="absolute inset-[-26%] rounded-full border border-sky-200/25 animate-voice-ring-slow"
                style={{ animationDelay: "1.2s" }}
              />

              {/* Soft inner glow, no inner icon/bars */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/30 blur-xl" />

              {/* Mic badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/80 text-xs font-medium text-gray-800 shadow">
                {isVoiceActive ? "Listening…" : "Tap to talk"}
          </div>
        </div>
          </div>

          {/* Minimalist "See more" button */}
          <div className="mt-12 flex justify-center relative z-10">
            <Link
              href="/voice-demo"
              className="text-gray-400 hover:text-white text-sm font-light transition-colors duration-300 flex items-center gap-2 group"
            >
              See more
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            </div>
              </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="rainbow-text text-sm font-medium uppercase tracking-wider">Testimonials</span>
            <h2 className="font-sans text-4xl md:text-5xl font-semibold mt-4 text-white">
              Loved by support teams everywhere
              </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Tellix cut our response time by 70% and our team actually enjoys using it. The voice AI is a game changer.",
                name: "Sarah Chen",
                role: "Head of CX",
                company: "Fashion Brand"
              },
              {
                quote: "We replaced 3 tools with Tellix. The intelligence features alone have saved us $50K in preventable refunds.",
                name: "Mike Rodriguez",
                role: "COO",
                company: "DTC Brand"
              },
              {
                quote: "The AI agents handle 80% of our tickets now. My team focuses on VIPs and complex cases only.",
                name: "Emma Thompson",
                role: "Support Lead",
                company: "Beauty Brand"
              }
            ].map((testimonial, i) => (
              <div key={i} className="feature-card">
                <MockShot tone="indigo" className="w-16 h-10 mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="rainbow-text text-sm font-medium uppercase tracking-wider">Pricing</span>
            <h2 className="font-sans text-4xl md:text-5xl font-semibold mt-4 mb-6 text-gray-900">
              Simple, transparent pricing
              </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start with a free trial. Scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$499",
                period: "/month",
                desc: "Perfect for small teams getting started",
                features: ["Up to 1,000 conversations/mo", "Email & chat support", "Basic analytics", "5 team members"],
                cta: "Start free trial",
                highlighted: false
              },
              {
                name: "Pro",
                price: "$1,499",
                period: "/month",
                desc: "For growing teams that need more power",
                features: ["Up to 10,000 conversations/mo", "Voice AI included", "Advanced analytics", "Unlimited team members", "Priority support"],
                cta: "Start free trial",
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For large organizations with custom needs",
                features: ["Unlimited conversations", "Custom integrations", "Dedicated success manager", "SLA guarantee", "On-premise option"],
                cta: "Contact sales",
                highlighted: false
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`rounded-2xl p-8 ${
                  plan.highlighted 
                    ? 'bg-black text-white ring-2 ring-rose-300/50 scale-105' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="rainbow-text text-xs font-semibold uppercase tracking-wider mb-4">Most Popular</div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-gray-400' : 'text-gray-500'}>{plan.period}</span>
              </div>
                <p className={`mb-6 ${plan.highlighted ? 'text-gray-400' : 'text-gray-600'}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <svg className={`w-5 h-5 ${plan.highlighted ? 'text-rose-300' : 'text-rose-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlighted ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
        ))}
      </ul>
                <button 
                  onClick={() => setShowDemoModal(true)}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-rose-400 to-sky-400 text-white hover:from-rose-300 hover:to-sky-300' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
    </div>
            ))}
            </div>
              </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-4xl md:text-6xl font-semibold mb-6 text-white">
            Ready to transform your
            <br />
            customer support?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 500+ companies using Tellix to deliver exceptional customer experiences at scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setShowDemoModal(true)} className="btn-primary btn-shimmer px-8 py-4 text-lg">
              Book a Demo
            </button>
            <button onClick={() => scrollToSection('features')} className="btn-outline px-8 py-4 text-lg">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
                <img src="/logo.svg" alt="Tellix logo" className="w-8 h-8 object-contain invert" />
                <span className="text-lg font-semibold">Tellix</span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">
                AI agents for enterprise customer support. Up and running in two weeks.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { title: "Product", links: [
                  { name: "Agent Canvas", action: () => scrollToSection('features') },
                  { name: "Voice AI", action: () => scrollToSection('voice') },
                  { name: "Inbox", action: () => scrollToSection('features') },
                  { name: "Analytics", action: () => scrollToSection('features') }
                ]},
                { title: "Company", links: [
                  { name: "About", action: () => {} },
                  { name: "Blog", action: () => {} },
                  { name: "Careers", action: () => {} },
                  { name: "Contact", action: () => scrollToSection('contact') }
                ]},
                { title: "Resources", links: [
                  { name: "Documentation", action: () => {} },
                  { name: "API", action: () => {} },
                  { name: "Status", action: () => {} },
                  { name: "Security", action: () => {} }
                ]},
                { title: "Legal", links: [
                  { name: "Privacy", href: "/privacy" },
                  { name: "Terms", href: "#" },
                  { name: "Cookies", href: "#" }
                ] as { name: string; href?: string; action?: () => void; }[]}
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="font-medium mb-4 text-sm">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        {link.href ? (
                          <a
                            href={link.href}
                            className="text-sm text-gray-500 hover:text-white transition-colors"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <button 
                            onClick={link.action}
                            className="text-sm text-gray-500 hover:text-white transition-colors"
                          >
                            {link.name}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <span className="text-sm text-gray-500">© {new Date().getFullYear()} Tellix. All rights reserved.</span>
            <div className="flex items-center gap-6">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
