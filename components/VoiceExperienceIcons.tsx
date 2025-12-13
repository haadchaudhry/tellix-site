import * as React from "react";

export type TellixIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

/**
 * Apple/Google-ish thin stroke icons for the Voice Experience cards.
 * Usage:
 *   <IconPersonalizedVoices className="text-white/80" />
 *   <IconDynamicInterrupts className="text-white/80" />
 *   <IconUltraLowLatency className="text-white/80" />
 */
export function IconPersonalizedVoices({ size = 24, ...props }: TellixIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {/* equalizer bars */}
      <path d="M6 14.5v-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10 17v-10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14 15.5v-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18 16.5v-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      {/* subtle baseline */}
      <path d="M4.5 19.5h15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export function IconDynamicInterrupts({ size = 24, ...props }: TellixIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {/* chat bubble */}
      <path
        d="M7.2 18.2l-2.6 1.3 1.2-2.8A7.4 7.4 0 0 1 4.5 13.3C4.5 9.6 7.7 6.7 12 6.7s7.5 2.9 7.5 6.6S16.3 19.9 12 19.9c-1.7 0-3.3-.4-4.8-1.2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* "interrupt" spark/plus */}
      <path d="M17.2 8.2v3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.6 9.8h3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconUltraLowLatency({ size = 24, ...props }: TellixIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {/* clock */}
      <path
        d="M12 20.2a8.2 8.2 0 1 0 0-16.4 8.2 8.2 0 0 0 0 16.4z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M12 7.3v5.2l3.4 2.0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* speed tick */}
      <path d="M19.2 12h1.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

