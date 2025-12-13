"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RetellWave from "@/components/RetellWave";

type MockTone = "blue" | "teal" | "purple" | "indigo" | "cyan" | "pink" | "orange";

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
    teal: "from-teal-200 via-cyan-200 to-blue-200",
    purple: "from-purple-200 via-violet-200 to-pink-200",
    indigo: "from-indigo-200 via-slate-200 to-sky-200",
    cyan: "from-cyan-200 via-blue-200 to-indigo-200",
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
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [channelFilter, setChannelFilter] = useState<'All' | 'Email' | 'Voice' | 'Chat' | 'Reviews'>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Priority' | 'Resolved'>('All');
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  type Ticket = {
    id: number;
    title: string;
    customer: string;
    channel: 'Email' | 'Voice' | 'Chat' | 'Reviews';
    status: 'Open' | 'Priority' | 'Resolved';
    sentiment: 'Positive' | 'Neutral' | 'Negative';
    eta: string;
  };

  const tickets: Ticket[] = [
    { id: 4521, title: 'Order delayed — tracking link', customer: 'Amelia Watts', channel: 'Email', status: 'Priority', sentiment: 'Negative', eta: '2h' },
    { id: 4520, title: 'Need invoice for Q4', customer: 'Jamal Singh', channel: 'Email', status: 'Open', sentiment: 'Neutral', eta: '4h' },
    { id: 4519, title: 'Upgrade to enterprise plan', customer: 'Priya Nair', channel: 'Voice', status: 'Priority', sentiment: 'Positive', eta: '1h' },
    { id: 4518, title: 'Return request for shoes', customer: 'Leo Martins', channel: 'Chat', status: 'Resolved', sentiment: 'Positive', eta: '—' },
    { id: 4517, title: 'Bug: payment failing', customer: 'Sofia Alvarez', channel: 'Email', status: 'Open', sentiment: 'Negative', eta: '3h' },
    { id: 4516, title: 'Store review flagged', customer: 'Glasshouse Home', channel: 'Reviews', status: 'Open', sentiment: 'Negative', eta: '6h' },
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesChannel = channelFilter === 'All' || ticket.channel === channelFilter;
    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    return matchesSearch && matchesChannel && matchesStatus;
  });

  const ticketStats = {
    total: filteredTickets.length,
    priority: filteredTickets.filter(t => t.status === 'Priority').length,
    positive: filteredTickets.filter(t => t.sentiment === 'Positive').length,
    sla: `${Math.max(1, Math.min(24, filteredTickets.length * 2))}m`,
  };

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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    required
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
                  />
                  <select
                    required
                    value={formData.role}
                    onChange={e => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
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
                    className="mt-4 text-sm text-cyan-400 hover:text-cyan-300"
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

      {/* Hero Section - Retell AI Style */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#fafafa]">
        {/* Retell-style Wave Background */}
        <RetellWave />

        <div className="relative text-center px-6 pt-20 pb-40" style={{ zIndex: 10 }}>
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in text-gray-900 tracking-tight font-sans">
            Supercharge your
            <br />
            <span className="gradient-text-retell">Call Operations</span> with AI
            </h1>

          <p className="text-gray-500 text-base md:text-lg mb-10 animate-fade-in delay-100 max-w-xl mx-auto leading-relaxed">
            Discover the new way to build, test, deploy, and monitor production-ready AI voice agents at scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in delay-200">
            <button onClick={() => setShowDemoModal(true)} className="bg-gray-900 text-white px-7 py-3.5 rounded-lg font-medium text-sm tracking-wide hover:bg-gray-800 transition-all">
              TRY FOR FREE
              </button>
            <button onClick={() => setShowDemoModal(true)} className="bg-white text-gray-900 px-7 py-3.5 rounded-lg font-medium text-sm tracking-wide border border-gray-300 hover:border-gray-400 transition-all">
              CONTACT SALES
              </button>
            </div>
          </div>

        {/* Trusted by */}
        <div className="absolute bottom-0 left-0 right-0 bg-white py-12 border-t border-gray-100" style={{ zIndex: 10 }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-gray-400 text-xs mb-8 text-center uppercase tracking-[0.2em]">Trusted by</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-6">
              {["pwc", "twilio", "JustCall", "degreed", "spare", "REGAL"].map((brand) => (
                <span key={brand} className="text-base font-semibold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                  {brand}
                </span>
              ))}
              </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {["HONK", "THE HOTELS NETWORK", "waymark", "clear", "Cal.com", "Wonolo"].map((brand) => (
                <span key={brand} className="text-base font-semibold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
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
      <section id="features" className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-600 text-sm font-medium uppercase tracking-wider">Features</span>
            <h2 className="font-sans text-4xl md:text-5xl font-semibold mt-4 mb-6 text-gray-900">
              Everything you need to scale support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From voice calls to social DMs, Tellix handles it all with AI that actually understands your customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                tone: "blue", 
                title: "Voice AI Agents", 
                desc: "Handle inbound and outbound calls with human-like conversation. Supports 99+ languages with ultra-low latency.",
                features: ["Natural conversation", "Emotion detection", "Call summarization"]
              },
              { 
                tone: "teal", 
                title: "Unified Inbox", 
                desc: "Email, SMS, social DMs, reviews — all in one place. AI suggests responses and tracks sentiment automatically.",
                features: ["Multi-channel", "AI suggestions", "Sentiment analysis"]
              },
              { 
                tone: "purple", 
                title: "Agent Canvas", 
                desc: "Build, test, and deploy AI agents with a visual builder. No coding required.",
                features: ["Visual builder", "A/B testing", "Instant rollback"]
              },
              { 
                tone: "indigo", 
                title: "Intelligence Dashboard", 
                desc: "Understand what's driving tickets, identify product issues, and track performance in real-time.",
                features: ["Issue detection", "Trend analysis", "Custom reports"]
              },
              { 
                tone: "cyan", 
                title: "Deep Integrations", 
                desc: "Connect with Shopify, Zendesk, Salesforce, Slack, and 50+ more tools you already use.",
                features: ["50+ integrations", "Webhooks", "API access"]
              },
              { 
                tone: "pink", 
                title: "Enterprise Security", 
                desc: "SOC 2 Type II, GDPR, and HIPAA compliant. Your data is encrypted and never used for training.",
                features: ["SOC 2 Type II", "GDPR compliant", "Data encryption"]
              },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-cyan-200 transition-all cursor-pointer group relative">
                <MockShot tone={feature.tone as MockTone} withCursor className="mb-4 group-hover:scale-105 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.features.map((f, j) => (
                    <span key={j} className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">{f}</span>
                  ))}
                </div>
                {feature.title === "Intelligence Dashboard" && (
                  <Link
                    href="/smart-insights"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-gray-600 text-sm font-light transition-colors duration-300 flex items-center gap-2 group/btn mt-2"
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
                )}
                      </div>
            ))}
                    </div>
                    </div>
      </section>

      {/* Voice Experience Section (Giga-inspired) */}
      <section
        id="voice"
        className="relative py-28 px-6 bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#0b0b12] text-white overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MockShot tone="blue" className="w-10 h-6" />
            <span className="text-cyan-200 font-medium">Voice Experience</span>
          </div>

          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Meet your customers with
            <br />
            empathy at every turn
              </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
            Designed to make every conversation feel natural. Industry-leading Voice AI allows agents to follow rapid shifts in
            conversation, sentiment, pitch, and tone detection. This ensures they match the mood of each interaction over 99 languages.
          </p>

          {/* Feature mini cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
            {[
              { tone: "blue", title: "Personalized Voices", desc: "Tailored to match your unique brand" },
              { tone: "purple", title: "Dynamic interrupts", desc: "Adapts to accents, languages, and sentiment shifts" },
              { tone: "pink", title: "Ultra-low latency", desc: "Industry-leading response time for natural back-and-forth" },
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MockShot tone={f.tone as MockTone} className="w-12 h-8" />
                  <div className="font-medium text-sm md:text-base">{f.title}</div>
            </div>
                <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
            ))}
          </div>

          {/* Centered talking orb, Giga-style */}
          <div className="relative flex items-center justify-center pt-4 pb-4">
            {/* Glow halo */}
            <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-cyan-200/20 blur-3xl" />
            <div className="absolute w-[460px] h-[460px] md:w-[520px] md:h-[520px] rounded-full bg-purple-300/15 blur-3xl" />

            <div
              onClick={() => setIsVoiceActive(!isVoiceActive)}
              className={`relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-b from-cyan-100 via-cyan-200 to-purple-200 shadow-[0_0_50px_rgba(126,220,255,0.35)] border border-white/30 cursor-pointer transition-transform duration-300 ${
                isVoiceActive ? "scale-105" : "scale-100"
              } animate-voice-pulse flex items-center justify-center`}
            >
              {/* Pulsing rings */}
              <div className="absolute inset-[-10%] rounded-full border border-cyan-100/50 animate-voice-ring-slow" />
              <div
                className="absolute inset-[-18%] rounded-full border border-cyan-100/30 animate-voice-ring-slow"
                style={{ animationDelay: "0.6s" }}
              />
              <div
                className="absolute inset-[-26%] rounded-full border border-cyan-100/20 animate-voice-ring-slow"
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
          <div className="mt-12 flex justify-center">
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

      {/* Unified Inbox Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-cyan-600 text-sm font-medium uppercase tracking-wider">Unified Inbox</span>
              <h2 className="font-sans text-4xl md:text-5xl font-semibold mt-4 mb-6 text-white">
                Every conversation,
                <br />
                one beautiful place
              </h2>
              <p className="text-gray-600 mb-8 max-w-md">
                Email, SMS, voice calls, social DMs, and reviews — all unified in a single workspace. 
                AI suggests responses, tracks sentiment, and surfaces issues automatically.
              </p>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Inbox", "Voice", "Reviews", "Analytics"].map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === i 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
            </div>

              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="col-span-1 sm:col-span-1">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search tickets or customers"
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
          </div>
          </div>
                <select
                  value={channelFilter}
                  onChange={(e) => setChannelFilter(e.target.value as typeof channelFilter)}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {["All", "Email", "Voice", "Chat", "Reviews"].map(opt => (
                    <option key={opt} value={opt}>{opt} channels</option>
                  ))}
                </select>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {["All", "Open", "Priority", "Resolved"].map(opt => (
                    <option key={opt} value={opt}>{opt} status</option>
                  ))}
                </select>
        </div>

              {/* Live stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Visible tickets", value: ticketStats.total },
                  { label: "Priority", value: ticketStats.priority },
                  { label: "Positive", value: ticketStats.positive },
                  { label: "Est. SLA", value: ticketStats.sla },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                    <div className="text-xs text-gray-400">{stat.label}</div>
                    <div className="text-lg font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>

              <button onClick={() => setShowDemoModal(true)} className="btn-dark">
                See it in action
              </button>
            </div>

            <div className="flex-1">
              <div className="mockup-window">
                <div className="mockup-titlebar">
                  <div className="mockup-dot bg-red-500" />
                  <div className="mockup-dot bg-yellow-500" />
                  <div className="mockup-dot bg-green-500" />
                  <span className="ml-4 text-sm text-gray-400">Tellix — {["Inbox", "Voice Calls", "Reviews", "Analytics"][activeTab]}</span>
                </div>
                <div className="bg-[#111] p-0">
                  <div className="flex">
                    {/* Sidebar */}
                    <div className="w-48 bg-[#0d0d0d] border-r border-white/5 p-3 hidden md:block">
                      {[
                        { tone: "teal", label: "Inbox", count: 24, active: activeTab === 0 },
                        { tone: "blue", label: "Voice", count: 5, active: activeTab === 1 },
                        { tone: "pink", label: "Reviews", count: 12, active: activeTab === 2 },
                        { tone: "indigo", label: "Analytics", active: activeTab === 3 },
                      ].map((item, i) => (
                        <div
                          key={item.label}
                          onClick={() => setActiveTab(i)}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm mb-1 ${
                            item.active ? 'bg-white/10 text-white' : 'text-gray-500 hover:bg-white/5'
                          } cursor-pointer transition-colors`}
                        >
                          <span className="flex items-center gap-2">
                            <MockShot tone={item.tone as MockTone} className="w-8 h-5" />
                            {item.label}
                          </span>
                          {item.count && (
                            <span className="text-xs bg-white/10 px-2 py-0.5 rounded">
                              {item.count}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Message list */}
                    <div className="flex-1 p-4 max-h-[400px] overflow-hidden">
                      {activeTab === 0 && (
                        <div className="space-y-3">
                          {filteredTickets.map((msg) => (
                            <div
                              key={msg.id}
                              onClick={() => setSelectedTicket(msg.id)}
                              className="flex items-center justify-between py-3 px-3 border border-white/5 rounded-lg hover:border-cyan-400/40 hover:bg-white/5 cursor-pointer transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <MockShot
                                  tone={
                                    msg.channel === 'Email'
                                      ? 'blue'
                                      : msg.channel === 'Voice'
                                      ? 'purple'
                                      : msg.channel === 'Chat'
                                      ? 'teal'
                                      : 'pink'
                                  }
                                  className="w-9 h-6"
                                />
                                <div>
                                  <div className="text-sm font-medium text-white">{msg.title}</div>
                                  <div className="text-xs text-gray-400">
                                    {msg.customer} • {msg.channel}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div
                                  className={`text-xs px-2 py-1 rounded-full inline-flex items-center justify-end ${
                                    msg.status === 'Resolved'
                                      ? 'bg-green-500/20 text-green-300'
                                      : msg.status === 'Priority'
                                      ? 'bg-red-500/20 text-red-300'
                                      : 'bg-yellow-500/20 text-yellow-200'
                                  }`}
                                >
                                  {msg.status}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">ETA {msg.eta}</div>
                              </div>
                            </div>
                          ))}

                          {filteredTickets.length === 0 && (
                            <div className="text-sm text-gray-400 bg-white/5 border border-white/10 rounded-lg p-4">
                              No tickets match your filters. Try a different search.
                            </div>
                          )}
                        </div>
                      )}
                      
                      {activeTab === 1 && (
                        <div className="text-center py-8 text-gray-500 space-y-3">
                          <MockShot tone="blue" className="mx-auto w-24 h-14" />
                          <p>5 active voice calls</p>
                          <p className="text-sm mt-2">AI handling 4 • 1 needs attention</p>
                        </div>
                      )}

                      {activeTab === 2 && (
                        <div className="space-y-3">
                          {[
                            { stars: 5, text: "Amazing product!", platform: "Google" },
                            { stars: 4, text: "Good but shipping slow", platform: "Shopify" },
                            { stars: 3, text: "Okay experience", platform: "TikTok" },
                          ].map((review, i) => (
                            <div key={i} className="p-3 bg-white/5 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-yellow-400">{"★".repeat(review.stars)}{"☆".repeat(5-review.stars)}</div>
                                <span className="text-xs text-gray-500">{review.platform}</span>
                              </div>
                              <p className="text-sm text-gray-300">{review.text}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === 3 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-xs text-gray-500">Response Time</div>
                              <div className="text-2xl font-semibold text-green-400">2.3s</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4">
                              <div className="text-xs text-gray-500">Resolution Rate</div>
                              <div className="text-2xl font-semibold text-cyan-400">94%</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket detail modal */}
      {selectedTicket && (
        <div className="modal-overlay" onClick={() => setSelectedTicket(null)}>
          <div className="modal-content max-w-2xl" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const ticket = tickets.find(t => t.id === selectedTicket);
              if (!ticket) return null;
  return (
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Ticket #{ticket.id}</div>
                      <h3 className="text-2xl font-semibold text-white mt-1">{ticket.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {ticket.customer} • {ticket.channel} • Sentiment: {ticket.sentiment}
                      </p>
      </div>
                    <button
                      onClick={() => setSelectedTicket(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-xs text-gray-400">Status</div>
                      <div className="text-sm text-white">{ticket.status}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-xs text-gray-400">ETA</div>
                      <div className="text-sm text-white">{ticket.eta}</div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-white">AI summary</div>
                      <span className="text-xs text-cyan-300">Auto-generated</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Customer reports an issue across {ticket.channel.toLowerCase()} about shipping delays. Suggested next step: share tracking
                      link, offer refund if delayed beyond SLA, and tag logistics.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button className="btn-dark">Respond with AI</button>
                    <button className="btn-outline">Create follow-up</button>
                    <button className="btn-outline">Escalate</button>
                  </div>
    </div>
  );
            })()}
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-glow text-sm font-medium uppercase tracking-wider">Testimonials</span>
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
            <span className="text-cyan-600 text-sm font-medium uppercase tracking-wider">Pricing</span>
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
                    ? 'bg-black text-white ring-2 ring-cyan-500 scale-105' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">Most Popular</div>
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
                      <svg className={`w-5 h-5 ${plan.highlighted ? 'text-cyan-400' : 'text-cyan-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      ? 'bg-cyan-500 text-black hover:bg-cyan-400' 
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                  <span className="text-black font-bold text-sm">T</span>
      </div>
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
