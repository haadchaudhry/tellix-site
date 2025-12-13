"use client";

import { useId } from "react";

type VoiceIconType = "experience" | "personalized" | "dynamic" | "latency";

type VoiceIconProps = {
  type: VoiceIconType;
  className?: string;
};

export default function VoiceIcon({ type, className = "" }: VoiceIconProps) {
  const uniqueId = useId().replace(/:/g, '');
  const gradientMap: Record<VoiceIconType, string> = {
    experience: `voice-g1-${uniqueId}`,
    personalized: `voice-g2-${uniqueId}`,
    dynamic: `voice-g3-${uniqueId}`,
    latency: `voice-g4-${uniqueId}`,
  };
  
  const gradientId = gradientMap[type];

  const icons = {
    experience: (
      <svg viewBox="0 0 64 64" width="40" height="40" fill="none" className="block">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E9D5FF" />
            <stop offset="100%" stopColor="#DBEAFE" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="14" fill={`url(#${gradientId})`} />
        <rect x="20" y="22" width="24" height="4" rx="2" fill="white" />
        <rect x="20" y="30" width="18" height="4" rx="2" fill="white" opacity="0.9" />
        <rect x="20" y="38" width="14" height="4" rx="2" fill="white" opacity="0.75" />
      </svg>
    ),
    personalized: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" className="block">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E0E7FF" />
            <stop offset="100%" stopColor="#F5D0FE" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="14" fill={`url(#${gradientId})`} />
        <rect x="20" y="22" width="24" height="4" rx="2" fill="white" />
        <rect x="20" y="30" width="20" height="4" rx="2" fill="white" opacity="0.9" />
        <rect x="20" y="38" width="16" height="4" rx="2" fill="white" opacity="0.75" />
      </svg>
    ),
    dynamic: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" className="block">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FBCFE8" />
            <stop offset="100%" stopColor="#DDD6FE" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="14" fill={`url(#${gradientId})`} />
        <rect x="20" y="22" width="18" height="4" rx="2" fill="white" />
        <rect x="20" y="30" width="24" height="4" rx="2" fill="white" opacity="0.9" />
        <rect x="20" y="38" width="14" height="4" rx="2" fill="white" opacity="0.75" />
      </svg>
    ),
    latency: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" className="block">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="14" fill={`url(#${gradientId})`} />
        <rect x="20" y="22" width="26" height="4" rx="2" fill="white" />
        <rect x="20" y="30" width="22" height="4" rx="2" fill="white" opacity="0.9" />
        <rect x="20" y="38" width="18" height="4" rx="2" fill="white" opacity="0.75" />
      </svg>
    ),
  };

  return icons[type];
}

