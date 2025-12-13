"use client";

import React from "react";

/**
 * RetellWave Component
 * 
 * Soft, high-resolution pastel gradient wave effect
 * Coral-pink → Peach → Lavender → Sky-blue
 * Modern AI, premium, calm, futuristic, minimal
 */
const RetellWave: React.FC = () => {
  return (
    <div
      style={{ zIndex: 1 }}
      className="
        absolute 
        inset-0
        pointer-events-none
      "
      aria-hidden="true"
    >
      {/* SVG positioned in the middle of the hero */}
      <svg
        viewBox="0 0 1400 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute top-1/2 left-1/2 w-[200%] h-[500px] -translate-x-1/2 -translate-y-1/2"
        style={{ minWidth: '200%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Primary Gradient: Coral-pink → Peach → Lavender → Sky-blue */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f4a5a5" />
            <stop offset="20%" stopColor="#f8bfb8" />
            <stop offset="35%" stopColor="#fcd5bf" />
            <stop offset="50%" stopColor="#fde2cf" />
            <stop offset="65%" stopColor="#e8d4e4" />
            <stop offset="80%" stopColor="#d4c4e8" />
            <stop offset="100%" stopColor="#a8d4e6" />
          </linearGradient>

          {/* Secondary Gradient - even softer, more diffused */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f8c8c8" />
            <stop offset="30%" stopColor="#fde8dc" />
            <stop offset="60%" stopColor="#e0d8eb" />
            <stop offset="100%" stopColor="#c5e4f3" />
          </linearGradient>

          {/* Soft blur filters for cloud-like effect */}
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
          </filter>
          <filter id="blur3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
          </filter>
          <filter id="blur4">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
          </filter>
        </defs>

        {/* Layer 0: Ultra-soft background glow */}
        <path
          d="M-200,300 C100,350 250,220 450,270 C650,320 800,200 1000,250 C1200,300 1300,220 1600,260"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="200"
          strokeLinecap="round"
          filter="url(#blur4)"
          opacity="0.35"
          className="animate-retell-drift-slow"
        />

        {/* Layer 1: Soft glow background */}
        <path
          d="M-100,280 C150,320 300,200 500,250 C700,300 850,180 1050,230 C1250,280 1350,200 1550,240"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="120"
          strokeLinecap="round"
          filter="url(#blur3)"
          opacity="0.45"
          className="animate-retell-drift-slow"
        />

        {/* Layer 2: Main ribbon - soft and diffused */}
        <path
          d="M-100,250 C150,300 300,180 500,230 C700,280 850,160 1050,210 C1250,260 1350,180 1550,220"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="60"
          strokeLinecap="round"
          filter="url(#blur2)"
          opacity="0.6"
          className="animate-retell-drift-medium"
        />

        {/* Layer 3: Front ribbon - slightly sharper but still soft */}
        <path
          d="M-50,230 C180,270 320,160 520,210 C720,260 870,150 1070,200 C1270,250 1380,170 1580,210"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="40"
          strokeLinecap="round"
          filter="url(#blur1)"
          opacity="0.7"
          className="animate-retell-drift-fast"
        />

        {/* Layer 4: Highlight line - subtle */}
        <path
          d="M-50,220 C180,260 320,150 520,200 C720,250 870,140 1070,190 C1270,240 1380,160 1580,200"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="12"
          strokeLinecap="round"
          filter="url(#blur1)"
          opacity="0.6"
          className="animate-retell-drift-fast"
        />

        {/* Layer 5: Secondary strand - very soft */}
        <path
          d="M0,300 C200,260 350,340 550,300 C750,260 900,330 1100,290 C1300,250 1400,310 1600,280"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="30"
          strokeLinecap="round"
          filter="url(#blur2)"
          opacity="0.4"
          className="animate-retell-drift-slow"
        />
      </svg>
    </div>
  );
};

export default RetellWave;
