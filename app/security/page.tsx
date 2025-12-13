"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type SecurityTab = "compliance" | "encryption" | "access" | "audit";

const tabs = [
  {
    id: "compliance" as SecurityTab,
    title: "Compliance",
    subtitle: "SOC 2 Type II, GDPR, HIPAA certified",
    icon: "🛡️",
  },
  {
    id: "encryption" as SecurityTab,
    title: "Encryption",
    subtitle: "End-to-end encryption at rest and in transit",
    icon: "🔐",
  },
  {
    id: "access" as SecurityTab,
    title: "Access Control",
    subtitle: "Role-based permissions, SSO, MFA",
    icon: "🔑",
  },
  {
    id: "audit" as SecurityTab,
    title: "Audit Logs",
    subtitle: "Complete activity tracking and monitoring",
    icon: "📋",
  },
];

function CompliancePreview() {
  const certifications = [
    { name: "SOC 2 Type II", status: "Certified", icon: "✓", color: "emerald" },
    { name: "GDPR", status: "Compliant", icon: "✓", color: "emerald" },
    { name: "HIPAA", status: "Compliant", icon: "✓", color: "emerald" },
    { name: "ISO 27001", status: "In Progress", icon: "◐", color: "amber" },
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
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">🛡️</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Compliance Dashboard</div>
              <div className="text-xs text-gray-400">All certifications up to date</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-400/30">
              All systems secure
            </span>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`rounded-xl border p-4 ${
                  cert.color === "emerald" 
                    ? "border-emerald-400/30 bg-emerald-500/10" 
                    : "border-amber-400/30 bg-amber-500/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl ${cert.color === "emerald" ? "text-emerald-400" : "text-amber-400"}`}>
                    {cert.icon}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    cert.color === "emerald" 
                      ? "bg-emerald-500/20 text-emerald-300" 
                      : "bg-amber-500/20 text-amber-300"
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <div className="text-sm font-medium text-white">{cert.name}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium text-white mb-3">Recent Audits</div>
            <div className="space-y-2">
              {[
                { date: "Dec 2024", type: "SOC 2 Annual Audit", result: "Passed" },
                { date: "Nov 2024", type: "Penetration Test", result: "No vulnerabilities" },
                { date: "Oct 2024", type: "GDPR Review", result: "Compliant" },
              ].map((audit, i) => (
                <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">{audit.date}</span>
                    <span className="text-gray-300">{audit.type}</span>
                  </div>
                  <span className="text-emerald-400">{audit.result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EncryptionPreview() {
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
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">🔐</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Encryption Status</div>
              <div className="text-xs text-gray-400">All data encrypted</div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-white">AES-256</div>
              <div className="text-xs text-gray-400">At rest</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-white">TLS 1.3</div>
              <div className="text-xs text-gray-400">In transit</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-emerald-400">100%</div>
              <div className="text-xs text-gray-400">Coverage</div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium text-white mb-3">Encryption Layers</div>
            <div className="space-y-3">
              {[
                { layer: "Database", method: "AES-256-GCM", status: "Active" },
                { layer: "File Storage", method: "AES-256-CBC", status: "Active" },
                { layer: "API Traffic", method: "TLS 1.3", status: "Active" },
                { layer: "Backups", method: "AES-256-GCM", status: "Active" },
              ].map((item) => (
                <div key={item.layer} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-gray-300">{item.layer}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">{item.method}</span>
                    <span className="text-emerald-400 text-xs">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400">ℹ️</span>
              <span className="text-sm font-medium text-white">Your data is never used for training</span>
            </div>
            <p className="text-xs text-gray-400">
              All customer data is isolated and encrypted. We never use your data to train our models.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AccessPreview() {
  const users = [
    { name: "Admin", role: "Super Admin", mfa: true, sso: true },
    { name: "Support Team", role: "Agent", mfa: true, sso: true },
    { name: "Viewer", role: "Read Only", mfa: false, sso: true },
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
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">🔑</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Access Control</div>
              <div className="text-xs text-gray-400">Role-based permissions</div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-emerald-400">✓</div>
              <div className="text-xs text-gray-400">SSO Enabled</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-emerald-400">✓</div>
              <div className="text-xs text-gray-400">MFA Required</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-semibold text-white">5</div>
              <div className="text-xs text-gray-400">Role Types</div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid grid-cols-4 px-4 py-2 text-xs text-gray-400 border-b border-white/5">
              <span>Role</span>
              <span>Permission Level</span>
              <span>MFA</span>
              <span>SSO</span>
            </div>
            {users.map((user) => (
              <div key={user.name} className="grid grid-cols-4 px-4 py-3 text-sm border-b border-white/5 last:border-0">
                <span className="text-white">{user.name}</span>
                <span className="text-gray-300">{user.role}</span>
                <span className={user.mfa ? "text-emerald-400" : "text-gray-500"}>
                  {user.mfa ? "Enabled" : "Optional"}
                </span>
                <span className={user.sso ? "text-emerald-400" : "text-gray-500"}>
                  {user.sso ? "Enabled" : "Disabled"}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20">
              Manage Roles
            </button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
              Configure SSO
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AuditPreview() {
  const logs = [
    { time: "2 min ago", user: "admin@company.com", action: "Updated security policy", ip: "192.168.1.1" },
    { time: "15 min ago", user: "support@company.com", action: "Accessed customer data", ip: "192.168.1.45" },
    { time: "1 hour ago", user: "admin@company.com", action: "Added new team member", ip: "192.168.1.1" },
    { time: "3 hours ago", user: "system", action: "Automated backup completed", ip: "Internal" },
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
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">📋</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Audit Logs</div>
              <div className="text-xs text-gray-400">Complete activity history</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Search logs..." 
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-400 w-40"
            />
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-4 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-xl font-semibold text-white">12,456</div>
              <div className="text-xs text-gray-400">Total events</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-xl font-semibold text-emerald-400">0</div>
              <div className="text-xs text-gray-400">Alerts</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-xl font-semibold text-white">30</div>
              <div className="text-xs text-gray-400">Days retained</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-xl font-semibold text-purple-400">Real-time</div>
              <div className="text-xs text-gray-400">Monitoring</div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid grid-cols-4 px-4 py-2 text-xs text-gray-400 border-b border-white/5">
              <span>Time</span>
              <span>User</span>
              <span>Action</span>
              <span>IP Address</span>
            </div>
            {logs.map((log, i) => (
              <div key={i} className="grid grid-cols-4 px-4 py-3 text-sm border-b border-white/5 last:border-0 hover:bg-white/5">
                <span className="text-gray-400">{log.time}</span>
                <span className="text-gray-300 truncate">{log.user}</span>
                <span className="text-white truncate">{log.action}</span>
                <span className="text-gray-400">{log.ip}</span>
              </div>
            ))}
          </div>

          <button className="w-full px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20">
            Export Logs
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState<SecurityTab>("compliance");

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
            <span className="text-2xl">🔒</span>
            <span className="rainbow-text text-sm font-medium uppercase tracking-wider">Enterprise Security</span>
          </div>
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-white">
            Security you can
            <br />
            <span className="gradient-text-retell">
              trust with your data
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            SOC 2 Type II, GDPR, and HIPAA compliant. Your data is encrypted, isolated, and never used for training.
          </p>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side - Tab selector */}
            <div className="lg:w-[340px] flex-shrink-0">
              <div className="space-y-4">
                {tabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <motion.button
                      key={tab.id}
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.995 }}
                      onClick={() => setActiveTab(tab.id)}
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
                            <span className="text-lg">{tab.icon}</span>
                            <div className={`text-base font-semibold ${isActive ? "text-white" : "text-gray-400"}`}>
                              {tab.title}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">{tab.subtitle}</div>
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
                    {activeTab === "compliance" && <CompliancePreview key="compliance" />}
                    {activeTab === "encryption" && <EncryptionPreview key="encryption" />}
                    {activeTab === "access" && <AccessPreview key="access" />}
                    {activeTab === "audit" && <AuditPreview key="audit" />}
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
            Ready to secure your support?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Enterprise-grade security that scales with your business.
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

