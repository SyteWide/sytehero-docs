export default function SliderIcon({className}: {className?: string}) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M8 20l4-4 4 4" />
      <circle cx="12" cy="10" r="2" />
      <path d="M2 12h2M20 12h2" />
    </svg>
  );
}
