// lucide-react ships no brand/social logos, so these are small hand-drawn
// line icons kept visually consistent with the rest of the lucide icon set.

export function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10.5 9.3v5.4l4.5-2.7-4.5-2.7z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7" y1="10" x2="7" y2="16" />
      <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
      <line x1="11" y1="10" x2="11" y2="16" />
    </svg>
  );
}
