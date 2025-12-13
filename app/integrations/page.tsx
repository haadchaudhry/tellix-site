"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type IntegrationCategory = "crm" | "ecommerce" | "helpdesk" | "communication";

const categories = [
  {
    id: "crm" as IntegrationCategory,
    title: "CRM & Sales",
    subtitle: "Salesforce, HubSpot, Pipedrive, and more",
    icon: "💼",
    integrations: [
      { name: "Salesforce", logo: "SF", connected: true },
      { name: "HubSpot", logo: "HS", connected: true },
      { name: "Pipedrive", logo: "PD", connected: false },
      { name: "Zoho CRM", logo: "ZO", connected: false },
    ],
  },
  {
    id: "ecommerce" as IntegrationCategory,
    title: "E-commerce",
    subtitle: "Shopify, WooCommerce, BigCommerce",
    icon: "🛒",
    integrations: [
      { name: "Shopify", logo: "SH", connected: true },
      { name: "WooCommerce", logo: "WC", connected: true },
      { name: "BigCommerce", logo: "BC", connected: false },
      { name: "Magento", logo: "MG", connected: false },
    ],
  },
  {
    id: "helpdesk" as IntegrationCategory,
    title: "Help Desk",
    subtitle: "Zendesk, Freshdesk, Intercom",
    icon: "🎧",
    integrations: [
      { name: "Zendesk", logo: "ZD", connected: true },
      { name: "Freshdesk", logo: "FD", connected: false },
      { name: "Intercom", logo: "IC", connected: true },
      { name: "Help Scout", logo: "HS", connected: false },
    ],
  },
  {
    id: "communication" as IntegrationCategory,
    title: "Communication",
    subtitle: "Slack, Teams, Discord, Email",
    icon: "💬",
    integrations: [
      { name: "Slack", logo: "SL", connected: true },
      { name: "Microsoft Teams", logo: "MS", connected: true },
      { name: "Discord", logo: "DC", connected: false },
      { name: "Gmail", logo: "GM", connected: true },
    ],
  },
];

function IntegrationPreview({ category }: { category: typeof categories[0] }) {
  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">{category.icon}</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{category.title}</div>
              <div className="text-xs text-gray-400">{category.subtitle}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-400/30">
              {category.integrations.filter(i => i.connected).length} connected
            </span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {category.integrations.map((integration) => (
              <div
                key={integration.name}
                className={`rounded-xl border p-4 flex items-center gap-3 cursor-pointer transition-all ${
                  integration.connected 
                    ? "border-emerald-400/30 bg-emerald-500/10" 
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold ${
                  integration.connected 
                    ? "bg-gradient-to-br from-emerald-400 to-green-500" 
                    : "bg-gradient-to-br from-gray-500 to-gray-600"
                }`}>
                  {integration.logo}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{integration.name}</div>
                  <div className={`text-xs ${integration.connected ? "text-emerald-400" : "text-gray-400"}`}>
                    {integration.connected ? "Connected" : "Available"}
                  </div>
                </div>
                {integration.connected ? (
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <button className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs hover:bg-white/20">
                    Connect
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium text-white mb-3">Sync Status</div>
            <div className="space-y-2">
              {category.integrations.filter(i => i.connected).map((integration) => (
                <div key={integration.name} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{integration.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs">Synced</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20">
              View All Integrations
            </button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold">
              Manage Connections
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<IntegrationCategory>("crm");
  const currentCategory = categories.find(c => c.id === activeCategory)!;

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
            <span className="text-2xl">🔗</span>
            <span className="rainbow-text text-sm font-medium uppercase tracking-wider">Deep Integrations</span>
          </div>
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white">
            Connect with
            <br />
            <span className="gradient-text-retell">
              50+ tools you already use
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Seamlessly integrate with Shopify, Zendesk, Salesforce, Slack, and more. Two-way sync keeps everything in perfect harmony.
          </p>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side - Category selector */}
            <div className="lg:w-[340px] flex-shrink-0">
              <div className="space-y-4">
                {categories.map((category) => {
                  const isActive = category.id === activeCategory;
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.995 }}
                      onClick={() => setActiveCategory(category.id)}
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
                            <span className="text-lg">{category.icon}</span>
                            <div className={`text-base font-semibold ${isActive ? "text-white" : "text-gray-400"}`}>
                              {category.title}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">{category.subtitle}</div>
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
                    <IntegrationPreview key={currentCategory.id} category={currentCategory} />
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
            Ready to connect your stack?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Get started with our pre-built integrations or use our API to build custom connections.
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

