export default function BotAvatar({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="botGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>

      <circle cx="24" cy="24" r="24" fill="url(#botGradient)" />

      {/* antenna */}
      <line x1="24" y1="10" x2="24" y2="15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="8.5" r="2" fill="#ffffff" />

      {/* head */}
      <rect x="13" y="15" width="22" height="17" rx="6" fill="#ffffff" />

      {/* eyes */}
      <circle cx="19.5" cy="23.5" r="2.4" fill="#4F46E5" />
      <circle cx="28.5" cy="23.5" r="2.4" fill="#4F46E5" />

      {/* smile */}
      <path
        d="M19 27.5c1.4 1.4 3 2 5 2s3.6-.6 5-2"
        stroke="#4F46E5"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* ears */}
      <rect x="9.5" y="20" width="3" height="7" rx="1.5" fill="#ffffff" />
      <rect x="35.5" y="20" width="3" height="7" rx="1.5" fill="#ffffff" />
    </svg>
  );
}
