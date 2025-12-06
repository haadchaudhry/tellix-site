"use client";

import Link from "next/link";

const policySections = [
  {
    title: "1. Data We Collect",
    bullets: [
      "Account information (name, email, workspace details)",
      "Usage data (features used, performance metrics, diagnostics)",
      "Customer interaction data you choose to process through our platform",
      "Device and log data (IP, browser, timestamps) for security and reliability",
    ],
  },
  {
    title: "2. How We Use Data",
    bullets: [
      "Provide and improve the Tellix platform and AI experiences",
      "Maintain security, prevent abuse, and monitor reliability",
      "Respond to support requests and product feedback",
      "Generate aggregated, anonymized analytics to improve performance",
    ],
  },
  {
    title: "3. Data Ownership & Access",
    bullets: [
      "You own your data. We process it solely to provide the service.",
      "We do not sell your data or use your customer content to train models without consent.",
      "Access is restricted by role-based controls and logged for audit.",
    ],
  },
  {
    title: "4. Security",
    bullets: [
      "Encryption in transit (TLS) and at rest.",
      "Principle of least privilege for internal access.",
      "Network isolation and strict access controls for production systems.",
      "Regular backups, monitoring, and incident response procedures.",
    ],
  },
  {
    title: "5. Data Retention & Deletion",
    bullets: [
      "We retain data only as long as necessary to provide the service or as required by law.",
      "You may request deletion of your workspace data; backups purge on a rolling schedule.",
    ],
  },
  {
    title: "6. Subprocessors",
    text:
      "We use vetted subprocessors (cloud hosting, analytics, infrastructure) under strict data protection terms. A current list is available upon request.",
  },
  {
    title: "7. International Transfers",
    text:
      "Data may be processed internationally under appropriate safeguards (e.g., SCCs or equivalent mechanisms).",
  },
  {
    title: "8. Your Rights",
    bullets: [
      "Access, correct, or delete your personal data",
      "Export your data in a portable format",
      "Opt-out of non-essential communications",
      "File a complaint with your local data protection authority",
    ],
  },
  {
    title: "9. Contact",
    text: "For privacy or security inquiries, reach us at: security@tellix.ai",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900">
      {/* Top nav for consistency */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Tellix logo" className="w-9 h-9 object-contain" />
            <span className="text-lg font-semibold text-gray-900">Tellix</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600">
            <Link href="/#features" className="hover:text-gray-900">Product</Link>
            <Link href="/#voice" className="hover:text-gray-900">Voice AI</Link>
            <Link href="/#pricing" className="hover:text-gray-900">Pricing</Link>
            <Link href="/#contact" className="hover:text-gray-900">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/#contact" className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors">
              Contact
            </Link>
            <Link href="/#hero" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all">
              Back to home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero for this page */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 via-purple-100 to-pink-100 opacity-70 blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 py-16 relative">
          <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
            Privacy & Security
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2 mb-3">
            Privacy and Security Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-6 text-gray-700 max-w-3xl">
            Tellix is committed to protecting your data and your customers&apos; data. This page outlines how we collect, use, store, and protect information across the platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        {policySections.map((section) => (
          <section key={section.title} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
            {section.bullets ? (
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">{section.text}</p>
            )}
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gray-900 text-white rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Questions about privacy or security?</h3>
            <p className="text-gray-200 text-sm mt-1">Reach us anytime at security@tellix.ai</p>
          </div>
          <Link href="/#contact" className="bg-white text-gray-900 px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all">
            Talk to the team
          </Link>
        </div>
      </div>
    </main>
  );
}

