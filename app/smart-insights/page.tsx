"use client";

import { useState } from "react";
import Link from "next/link";

export default function SmartInsightsPage() {
  const [activeTab, setActiveTab] = useState(0);

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
        <div className="absolute inset-x-3 top-3 h-2 rounded bg-white/60" />
        <div className="absolute inset-x-3 top-6 h-1.5 rounded bg-white/30" />
        <div className="absolute inset-x-3 top-9 h-1.5 rounded bg-white/20" />
        {withCursor && (
          <>
            <div className="absolute w-12 h-12 rounded-full bg-white/20 left-8 top-6 animate-[ping_1.6s_ease-out_infinite]" />
            <div className="absolute left-10 top-8 h-3 w-3 rotate-12 border-l-4 border-b-4 border-white drop-shadow" />
          </>
        )}
      </div>
    );
  }

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
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <MockShot tone="indigo" className="w-10 h-6" />
            <span className="rainbow-text text-sm font-medium uppercase tracking-wider">Intelligence Dashboard</span>
          </div>
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white">
            Understand what&apos;s driving
            <br />
            <span className="gradient-text-retell">
              customer conversations
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Real-time insights into ticket drivers, product issues, sentiment trends, and performance metrics. Make data-driven decisions with AI-powered analytics.
          </p>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-white/10">
            {["Overview", "Issues", "Trends", "Reports"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-sm font-medium transition-all border-b-2 ${
                  activeTab === i 
                    ? 'border-pink-400 text-pink-400' 
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mockup-window">
            <div className="mockup-titlebar">
              <div className="mockup-dot bg-red-500" />
              <div className="mockup-dot bg-yellow-500" />
              <div className="mockup-dot bg-green-500" />
              <span className="ml-4 text-sm text-gray-400">Tellix Intelligence Dashboard</span>
            </div>
            <div className="bg-[#111] p-6">
              {activeTab === 0 && (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { label: "Total Tickets", value: "2,451", change: "+12%", trend: "up" },
                      { label: "Avg Response Time", value: "2.3s", change: "-15%", trend: "down" },
                      { label: "Resolution Rate", value: "94%", change: "+3%", trend: "up" },
                      { label: "Customer Satisfaction", value: "4.8/5", change: "+0.2", trend: "up" },
                    ].map((metric, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                        <div className="text-2xl font-semibold mb-1">{metric.value}</div>
                        <div className={`text-xs flex items-center gap-1 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                          <span>{metric.change}</span>
                          <span>vs last month</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sentiment Analysis */}
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-lg font-semibold mb-4">Sentiment Trends</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">68%</div>
                        <div className="text-sm text-gray-400">Positive</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">24%</div>
                        <div className="text-sm text-gray-400">Neutral</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-400 mb-2">8%</div>
                        <div className="text-sm text-gray-400">Negative</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Detected Issues</h3>
                  {[
                    { issue: "Shipping delays", count: 142, severity: "high", trend: "increasing" },
                    { issue: "Product quality concerns", count: 89, severity: "medium", trend: "stable" },
                    { issue: "Billing questions", count: 67, severity: "low", trend: "decreasing" },
                    { issue: "Return requests", count: 45, severity: "medium", trend: "increasing" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="font-medium mb-1">{item.issue}</div>
                        <div className="text-sm text-gray-400">{item.count} tickets this month</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          item.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                          item.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {item.severity}
                        </span>
                        <span className="text-xs text-gray-500">{item.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold mb-4">Trend Analysis</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="text-sm text-gray-400 mb-2">Top Topics</div>
                      {[
                        { topic: "Order Status", volume: 456, change: "+23%" },
                        { topic: "Returns", volume: 312, change: "+8%" },
                        { topic: "Product Questions", volume: 289, change: "-5%" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <span className="text-sm">{item.topic}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">{item.volume}</span>
                            <span className="text-xs text-green-400">{item.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <div className="text-sm text-gray-400 mb-2">Channel Performance</div>
                      {[
                        { channel: "Email", volume: 1245, satisfaction: "4.7" },
                        { channel: "Voice", volume: 892, satisfaction: "4.9" },
                        { channel: "Chat", volume: 314, satisfaction: "4.6" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <span className="text-sm">{item.channel}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">{item.volume}</span>
                            <span className="text-xs text-pink-400">★ {item.satisfaction}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Custom Reports</h3>
                  {[
                    { name: "Weekly Performance Summary", lastRun: "2 hours ago", status: "ready" },
                    { name: "Monthly Customer Satisfaction", lastRun: "1 day ago", status: "ready" },
                    { name: "Q4 Issue Analysis", lastRun: "3 days ago", status: "ready" },
                  ].map((report, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="font-medium mb-1">{report.name}</div>
                        <div className="text-sm text-gray-400">Last run: {report.lastRun}</div>
                      </div>
                      <button className="text-sm text-pink-400 hover:text-pink-300 px-4 py-2 border border-pink-400/30 rounded-lg hover:bg-pink-400/10 transition-all">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl font-semibold mb-12 text-center text-white">
            Powerful analytics features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Issue Detection",
                desc: "AI automatically identifies recurring problems, product issues, and customer pain points from conversations. Get alerts before issues escalate.",
                features: ["Automated issue detection", "Severity classification", "Trend analysis", "Alert system"]
              },
              {
                title: "Trend Analysis",
                desc: "Understand what's driving ticket volume, identify seasonal patterns, and track performance over time. Spot opportunities for improvement.",
                features: ["Time-series analysis", "Pattern recognition", "Forecasting", "Comparative insights"]
              },
              {
                title: "Custom Reports",
                desc: "Build custom reports tailored to your needs. Schedule automated reports, export data, and share insights with your team.",
                features: ["Custom report builder", "Scheduled reports", "Data export", "Team sharing"]
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-4xl md:text-5xl font-semibold mb-6 text-white">
            Start making data-driven decisions
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Get real-time insights into your customer conversations. Start your free trial today.
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

