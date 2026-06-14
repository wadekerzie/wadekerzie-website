import { useState } from 'react'
import LinkCard from './LinkCard'
import PodcastCard from './PodcastCard'
import CalendarModal from './CalendarModal'

const links = [
    {
        emoji: '🤖',
        title: 'Kerzie AI Solutions',
        description: 'SMS-native home repair, lead response, and mobile apps.',
        href: 'https://kerzie.ai',
        useKerzieIcon: true,
        liveIndicator: 'GotaGuy Now Live',
    },
    {
        emoji: '⛳',
        title: 'PuttingIsSimple',
        description: 'Online putting instruction. Lower your scores.',
        href: 'https://puttingissimple.com',
        useGolfIcon: true,
    },
    {
        emoji: '🏈',
        title: "KK's Sports Dashboard",
        description: 'Built for my daughter. Arkansas Razorbacks.',
        href: 'https://razorbacks-dashboard.vercel.app/',
    },
    {
        emoji: '📞',
        title: "Garrison's Work Dashboard",
        description: 'Built for my son. Call intelligence and pipeline tracking.',
        href: 'https://garrison-call-intel.vercel.app/',
    },
    {
        emoji: '📧',
        title: 'Newsletter',
        description: 'Insights on AI, ops, and building.',
        href: 'https://wades-newsletter-9cf259.beehiiv.com/',
    },
    {
        emoji: '🔗',
        title: 'Professional Profile',
        description: 'Credentials, current work, and how to reach me professionally.',
        href: 'https://pro.wadekerzie.com',
    },
]

export default function LinkHub() {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    return (
        <>
            <nav className="space-y-3 mb-10" aria-label="Main navigation">
                {/* Kerzie AI */}
                <LinkCard key={links[0].title} {...links[0]} />

                {/* Podcast */}
                <div className="py-1">
                    <PodcastCard />
                </div>

                {/* PuttingIsSimple, KK's, Garrison's, Newsletter */}
                {links.slice(1).map((link) => (
                    <LinkCard key={link.title} {...link} />
                ))}

                {/* Let's Connect */}
                <button
                    onClick={() => setIsCalendarOpen(true)}
                    className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-[#1E2035] border border-border hover:border-[#6B9FD4] shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 text-left"
                >
                    <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                        📅
                    </span>
                    <div className="flex-grow min-w-0">
                        <h2 className="font-medium text-sm text-white group-hover:text-[#6B9FD4] transition-colors truncate">
                            Let's Connect
                        </h2>
                        <p className="text-xs text-[#AABBCC] truncate">
                            Schedule a call with me.
                        </p>
                    </div>
                    <svg
                        className="w-4 h-4 text-[#6B9FD4] group-hover:translate-x-0.5 transition-all shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </nav>

            <CalendarModal
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
            />
        </>
    )
}
