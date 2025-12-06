"use client";

import React from "react";

/**
 * RetellWave Component
 * 
 * Recreates the Retell AI hero ribbon effect
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
          {/* Primary Gradient: Blue → Purple → Pink */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="25%" stopColor="#c4b5fd" />
            <stop offset="50%" stopColor="#d8b4fe" />
            <stop offset="75%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#fda4af" />
          </linearGradient>

          {/* Secondary Gradient - more transparent */}
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="50%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#fecdd3" />
          </linearGradient>

          {/* Blur filters */}
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
          <filter id="blur3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>

        {/* Layer 1: Soft glow background */}
        <path
          d="M-100,280 C150,320 300,200 500,250 C700,300 850,180 1050,230 C1250,280 1350,200 1550,240"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="100"
          strokeLinecap="round"
          filter="url(#blur3)"
          opacity="0.5"
          className="animate-retell-drift-slow"
        />

        {/* Layer 2: Main ribbon */}
        <path
          d="M-100,250 C150,300 300,180 500,230 C700,280 850,160 1050,210 C1250,260 1350,180 1550,220"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="50"
          strokeLinecap="round"
          filter="url(#blur2)"
          opacity="0.7"
          className="animate-retell-drift-medium"
        />

        {/* Layer 3: Front ribbon - sharper */}
        <path
          d="M-50,230 C180,270 320,160 520,210 C720,260 870,150 1070,200 C1270,250 1380,170 1580,210"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="35"
          strokeLinecap="round"
          filter="url(#blur1)"
          opacity="0.85"
          className="animate-retell-drift-fast"
        />

        {/* Layer 4: Highlight line */}
        <path
          d="M-50,220 C180,260 320,150 520,200 C720,250 870,140 1070,190 C1270,240 1380,160 1580,200"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.9"
          className="animate-retell-drift-fast"
        />

        {/* Layer 5: Secondary strand */}
        <path
          d="M0,300 C200,260 350,340 550,300 C750,260 900,330 1100,290 C1300,250 1400,310 1600,280"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="20"
          strokeLinecap="round"
          filter="url(#blur1)"
          opacity="0.5"
          className="animate-retell-drift-slow"
        />
      </svg>
    </div>
  );
};

export default RetellWave;
