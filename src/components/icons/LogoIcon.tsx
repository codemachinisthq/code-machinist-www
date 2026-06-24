"use client";

import { motion } from "framer-motion";

interface LogoIconProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function LogoIcon({ size = 40, animated = false, className = "" }: LogoIconProps) {
  const gearPoints =
    "24,2 30.1,9.2 39.6,8.4 38.8,17.9 46,24 38.8,30.1 39.6,39.6 30.1,38.8 24,46 17.9,38.8 8.4,39.6 9.2,30.1 2,24 9.2,17.9 8.4,8.4 17.9,9.2";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Code Machinist logo"
      role="img"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="logoGradInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer gear */}
      {animated ? (
        <motion.polygon
          points={gearPoints}
          stroke="url(#logoGrad)"
          strokeWidth="1.5"
          fill="rgba(59,130,246,0.08)"
          strokeLinejoin="round"
          filter="url(#glow)"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ originX: "24px", originY: "24px", transformOrigin: "24px 24px" }}
        />
      ) : (
        <polygon
          points={gearPoints}
          stroke="url(#logoGrad)"
          strokeWidth="1.5"
          fill="rgba(59,130,246,0.08)"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
      )}

      {/* Inner circle */}
      <circle
        cx="24"
        cy="24"
        r="11"
        stroke="url(#logoGrad)"
        strokeWidth="1"
        fill="rgba(8,8,24,0.9)"
      />

      {/* Code brackets — pure SVG paths, no text */}
      {/* < bracket */}
      <motion.g
        animate={animated ? { opacity: [0.75, 1, 0.75] } : {}}
        transition={animated ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
      >
        <path
          d="M 17 19.5 L 13 24 L 17 28.5"
          stroke="url(#logoGradInner)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* / slash */}
        <path
          d="M 22 29 L 26 19"
          stroke="url(#logoGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* > bracket */}
        <path
          d="M 31 19.5 L 35 24 L 31 28.5"
          stroke="url(#logoGradInner)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>
    </svg>
  );
}
