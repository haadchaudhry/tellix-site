"use client";

import React from "react";

/**
 * AnimatedWaveBackground
 * 
 * A soft, animated gradient ribbon that sits behind hero text.
 * Inspired by Retell AI's landing page aesthetic.
 * 
 * Features:
 * - SVG-based wavy ribbon shape
 * - Pastel gradient: cyan → purple → pink → orange
 * - Soft blur/glow effect
 * - Slow horizontal drift + vertical breathing animation
 * - Fully responsive
 */
const AnimatedWaveBackground: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* 
        Main animated container
        - Positioned to center vertically in the hero
        - Contains the SVG ribbon with animations applied
      */}
      <div 
        className="
          absolute 
          top-1/2 
          left-1/2 
          -translate-x-1/2 
          -translate-y-1/2
          w-[140%] 
          h-[60%]
          md:h-[50%]
          lg:h-[45%]
          animate-wave-float
        "
      >
        {/* 
          SVG Container with horizontal drift animation
          The wave-drift animation moves the ribbon left-right slowly
        */}
        <svg
          className="w-full h-full animate-wave-drift"
          viewBox="0 0 1400 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 
              Main gradient: flows from cyan through purple to pink/orange
              This creates the Retell AI-style pastel ribbon look
            */}
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.8" />
              <stop offset="20%" stopColor="#a5b4fc" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#c4b5fd" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#f0abfc" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#fda4af" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fdba74" stopOpacity="0.7" />
            </linearGradient>

            {/* 
              Highlight gradient for the glossy top edge of the ribbon
              Creates a 3D tube-like appearance
            */}
            <linearGradient id="waveHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cffafe" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ede9fe" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.9" />
            </linearGradient>

            {/* 
              Shadow/glow gradient for depth
              Applied to a blurred version of the ribbon
            */}
            <linearGradient id="waveShadow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.4" />
            </linearGradient>

            {/* Blur filter for the soft glow/shadow layer */}
            <filter id="ribbonBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
            </filter>

            {/* Slight blur for the main ribbon to soften edges */}
            <filter id="softEdge" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>

          {/* 
            Layer 1: Soft glow/shadow behind the main ribbon
            Blurred and lower opacity for depth
          */}
          <path
            d="M-100,350 
               C150,420 300,280 500,340 
               C700,400 850,260 1050,320 
               C1250,380 1350,280 1550,340"
            fill="none"
            stroke="url(#waveShadow)"
            strokeWidth="120"
            strokeLinecap="round"
            filter="url(#ribbonBlur)"
            className="animate-wave-morph"
          />

          {/* 
            Layer 2: Main ribbon body
            The primary visible gradient ribbon
          */}
          <path
            d="M-100,320 
               C150,390 300,250 500,310 
               C700,370 850,230 1050,290 
               C1250,350 1350,250 1550,310"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="50"
            strokeLinecap="round"
            filter="url(#softEdge)"
            className="animate-wave-morph"
          />

          {/* 
            Layer 3: Highlight line on top of ribbon
            Creates the glossy 3D tube effect
          */}
          <path
            d="M-100,305 
               C150,375 300,235 500,295 
               C700,355 850,215 1050,275 
               C1250,335 1350,235 1550,295"
            fill="none"
            stroke="url(#waveHighlight)"
            strokeWidth="12"
            strokeLinecap="round"
            className="animate-wave-morph"
          />

          {/* 
            Layer 4: Secondary ribbon strand
            Adds visual complexity and depth
          */}
          <path
            d="M-50,400 
               C200,350 350,450 550,400 
               C750,350 900,430 1100,380 
               C1300,330 1400,410 1600,360"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="28"
            strokeLinecap="round"
            opacity="0.5"
            filter="url(#softEdge)"
            className="animate-wave-morph-reverse"
          />

          {/* 
            Layer 5: Thin accent ribbon
            Adds delicate detail to the composition
          */}
          <path
            d="M0,260 
               C200,310 350,210 550,260 
               C750,310 900,210 1100,260 
               C1300,310 1450,230 1650,280"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.35"
            className="animate-wave-morph-reverse"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedWaveBackground;
