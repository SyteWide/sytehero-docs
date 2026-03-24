export default function BannerIcon({className}: {className?: string}) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M6 9v12" />
      <path d="M18 9v12" />
      <path d="M6 15h12" />
    </svg>
  );
}
