import React from 'react';

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        width="34"
        height="34"
        role="img"
        aria-label="Ideavix logo"
        className="shrink-0">
        
        <defs>
          <linearGradient id="ivx-logo-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="55%" stopColor="#006BFF" />
            <stop offset="100%" stopColor="#7B2CFF" />
          </linearGradient>
          <linearGradient id="ivx-logo-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C238FF" />
            <stop offset="100%" stopColor="#006BFF" />
          </linearGradient>
        </defs>
        <path
          d="M20 3.2 L34.5 11.6 V28.4 L20 36.8 L5.5 28.4 V11.6 Z"
          fill="none"
          stroke="url(#ivx-logo-a)"
          strokeWidth="1.6"
          strokeLinejoin="round" />
        
        <path d="M13.2 12.4 L20 27.6 L26.8 12.4" fill="none" stroke="url(#ivx-logo-b)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="9.6" r="2" fill="#FFB800" />
        <circle cx="20" cy="9.6" r="4.2" fill="none" stroke="#FFB800" strokeOpacity="0.32" strokeWidth="1" />
      </svg>
      {showWordmark ?
      <span className="font-heading text-[1.05rem] font-semibold tracking-tight text-ivory">
          Ideavix
        </span> :
      null}
    </span>);

}