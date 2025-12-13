"use client";

type FeatureLogoProps = {
  feature: "voice" | "inbox" | "canvas" | "intelligence" | "integrations" | "security";
  className?: string;
};

export default function FeatureLogo({ feature, className = "" }: FeatureLogoProps) {
  const logos = {
    voice: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
        <path d="M20 50 Q35 30 50 50 Q65 70 80 50"/>
        <circle cx="50" cy="50" r="3" fill="currentColor"/>
      </svg>
    ),
    inbox: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
        <path d="M20 30 L50 50"/>
        <path d="M20 50 L50 50"/>
        <path d="M20 70 L50 50"/>
        <rect x="50" y="35" width="30" height="30" rx="6"/>
      </svg>
    ),
    canvas: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
        <rect x="20" y="20" width="60" height="60" rx="10"/>
        <circle cx="40" cy="40" r="4"/>
        <circle cx="60" cy="50" r="4"/>
        <circle cx="45" cy="65" r="4"/>
      </svg>
    ),
    intelligence: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
        <path d="M20 65 L35 50 L50 55 L70 35"/>
        <circle cx="70" cy="35" r="3" fill="currentColor"/>
      </svg>
    ),
    integrations: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
        <circle cx="50" cy="30" r="6"/>
        <circle cx="30" cy="60" r="6"/>
        <circle cx="70" cy="60" r="6"/>
        <path d="M50 36 L30 54"/>
        <path d="M50 36 L70 54"/>
      </svg>
    ),
    security: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
        <path d="M50 20 L75 30 V50 C75 65 62 75 50 80 C38 75 25 65 25 50 V30 Z"/>
      </svg>
    ),
  };

  return logos[feature];
}

