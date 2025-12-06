"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AgentCanvasPage() {
  const [activeAccordion, setActiveAccordion] = useState(0);

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
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
              <div className="w-2 h-2 bg-white rounded-sm" />
            </div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Agent Canvas</span>
          </div>
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white">
            Build, test, and deploy
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              production-ready AI agents
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            The fastest way to build, govern, and scale enterprise AI agents. No coding required — just drag, drop, and deploy.
          </p>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left side - Detailed Accordion */}
            <div className="flex-1">
              <div className="space-y-0">
                {[
                  {
                    title: "Create the agent",
                    content: "Start with a template or build from scratch. Define your agent's personality, knowledge base, and capabilities in minutes. Upload your brand guidelines, product catalogs, and support documentation. Our AI learns your tone, policies, and workflows automatically.",
                    details: [
                      "Pre-built templates for common use cases",
                      "Custom agent personalities and voices",
                      "Knowledge base integration from 50+ sources",
                      "Automatic policy extraction from existing docs"
                    ]
                  },
                  {
                    title: "Define policies",
                    content: "Set clear guardrails in plain language. Decide what should be automated, when to escalate, and how to manage sensitive cases. Create approval workflows, spending limits, and escalation rules without writing a single line of code.",
                    details: [
                      "Natural language policy definition",
                      "Multi-level approval workflows",
                      "Automatic compliance checking",
                      "Real-time policy violation alerts"
                    ]
                  },
                  {
                    title: "Design the logic",
                    content: "Use our visual flow builder to create conversation paths. No coding required — just drag, drop, and connect. Build complex decision trees, handle edge cases, and create personalized experiences for different customer segments.",
                    details: [
                      "Visual flow builder with drag-and-drop",
                      "Conditional logic and branching",
                      "Integration with external APIs",
                      "A/B testing built-in"
                    ]
                  },
                  {
                    title: "Test and launch",
                    content: "Validate performance with AI-driven simulations built from real customer conversations. Run regression tests, A/B experiments, and deploy safely with instant rollback. Test against thousands of scenarios before going live.",
                    details: [
                      "AI-powered conversation simulations",
                      "Automated regression testing",
                      "A/B testing framework",
                      "One-click rollback to previous versions"
                    ]
                  },
                  {
                    title: "Monitor and improve",
                    content: "Track performance in real-time. AI automatically suggests improvements based on conversation patterns and customer feedback. Get alerts for issues, see what's working, and continuously optimize your agents.",
                    details: [
                      "Real-time performance dashboards",
                      "AI-powered improvement suggestions",
                      "Automated issue detection",
                      "Continuous learning from feedback"
                    ]
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                    onClick={() => setActiveAccordion(index)}
                  >
                    <h3 className="font-medium text-xl mb-2">{item.title}</h3>
                    {activeAccordion === index && (
                      <div className="mt-4 space-y-4">
                        <p className="text-gray-300 leading-relaxed">{item.content}</p>
                        <ul className="space-y-2">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Enhanced Mockup */}
            <div className="flex-1">
              <div className="mockup-window">
                <div className="mockup-titlebar">
                  <div className="mockup-dot bg-red-500" />
                  <div className="mockup-dot bg-yellow-500" />
                  <div className="mockup-dot bg-green-500" />
                  <span className="ml-4 text-sm text-gray-400">Banking AI support agent</span>
                </div>
                <div className="p-6 space-y-6">
                  <div className="text-sm font-medium">Test results</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#1a1a1a] rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">Pass rate</div>
                      <div className="text-2xl font-semibold text-green-400">99%</div>
                      <div className="text-xs text-gray-500 mt-1">Based on 1,250 simulations</div>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">Simulations passed</div>
                      <div className="text-2xl font-semibold">1,240</div>
                      <div className="text-xs text-gray-500 mt-1">All conditions met</div>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-lg p-4">
                      <div className="text-xs text-gray-500 mb-1">Simulations failed</div>
                      <div className="text-2xl font-semibold text-yellow-400">10</div>
                      <div className="text-xs text-gray-500 mt-1">Failure conditions detected</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="grid grid-cols-3 text-xs text-gray-500 py-2 border-b border-white/10">
                      <span>Test case</span>
                      <span>Status</span>
                      <span>Pass rate</span>
                    </div>
                    {[
                      { name: "Response Accuracy Test", status: "Passed", rate: "100%" },
                      { name: "User Interaction Simulation", status: "Passed", rate: "100%" },
                      { name: "AI Agent Error Handling", status: "Deviated", rate: "80%" },
                      { name: "Policy Compliance Check", status: "Passed", rate: "98%" },
                      { name: "Edge Case Handling", status: "Passed", rate: "95%" },
                    ].map((test, i) => (
                      <div key={i} className="grid grid-cols-3 text-sm py-3 border-b border-white/5">
                        <span>{test.name}</span>
                        <span className={`flex items-center gap-2 ${test.status === 'Passed' ? 'text-green-400' : 'text-yellow-400'}`}>
                          <span className={`w-2 h-2 rounded-full ${test.status === 'Passed' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                          {test.status}
                        </span>
                        <span>{test.rate}</span>
                      </div>
                    ))}
                  </div>
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
            Ready to build your first agent?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Start building production-ready AI agents in minutes. No credit card required.
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

