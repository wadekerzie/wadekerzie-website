export default function LinkCard({ emoji, title, description, href, primary = false, useKerzieIcon = false, useGolfIcon = false, liveIndicator = null }) {
    const isExternal = href.startsWith('http')

    return (
        <a
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={`
                group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl
                bg-[#1E2035] border border-border hover:border-[#6B9FD4]
                shadow-card hover:shadow-card-hover
                transition-all duration-300 hover:-translate-y-0.5
                ${primary ? 'ring-2 ring-accent/20' : ''}
            `}
        >
            {/* Icon */}
            {useKerzieIcon ? (
                <img
                    src="/kerzie-icon.png"
                    alt=""
                    className="w-10 h-10 shrink-0 rounded-lg object-cover"
                />
            ) : useGolfIcon ? (
                <img
                    src="/putting-is-simple-icon.png"
                    alt=""
                    className="w-10 h-10 shrink-0 rounded-lg object-contain"
                />
            ) : (
                <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                    {emoji}
                </span>
            )}

            {/* Content */}
            <div className="flex-grow min-w-0">
                <h2 className="font-medium text-sm text-white group-hover:text-[#6B9FD4] transition-colors truncate">
                    {title}
                </h2>
                <p className="text-xs text-[#AABBCC] truncate">
                    {description}
                </p>
                {liveIndicator && (
                    <p className="text-xs text-[#5b8def] font-medium flex items-center gap-1.5 mt-0.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5b8def] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5b8def]"></span>
                        </span>
                        {liveIndicator}
                    </p>
                )}
            </div>

            {/* Arrow */}
            <svg
                className="w-4 h-4 text-[#6B9FD4] group-hover:translate-x-0.5 transition-all shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </a>
    )
}

