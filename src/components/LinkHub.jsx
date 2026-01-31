import { useState } from 'react'
import LinkCard from './LinkCard'
import PodcastCard from './PodcastCard'
import CalendarModal from './CalendarModal'
import ResumeModal from './ResumeModal'

const topLinks = [
    {
        emoji: '🤖',
        title: 'Kerzie AI Solutions',
        description: 'AI automation and workflow systems for SMBs.',
        href: 'https://kerzie.ai',
        useKerzieIcon: true,
        liveIndicator: 'Unison Now Live',
    },
    {
        emoji: '🎯',
        title: 'Kerzie Consulting',
        description: 'AI Training and AI-Powered App Development',
        href: 'https://kerzieconsulting.com',
        useKerzieIcon: true,
    },
]

const linksAfterPodcast = [
    {
        emoji: '⛳',
        title: 'PuttingIsSimple',
        description: 'Improve Your Putting, Lower Your Scores (On-Line Video Course)',
        href: 'https://puttingissimple.com',
        useGolfIcon: true,
    },
    {
        emoji: '📧',
        title: 'Newsletter',
        description: 'Insights on AI, ops, and building.',
        href: 'https://wades-newsletter-9cf259.beehiiv.com/',
    },
]

export default function LinkHub() {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [isResumeOpen, setIsResumeOpen] = useState(false)

    return (
        <>
            <nav className="space-y-3 mb-10" aria-label="Main navigation">
                {topLinks.map((link) => (
                    <LinkCard key={link.title} {...link} />
                ))}

                {/* My Career - Opens Resume Modal */}
                <button
                    onClick={() => setIsResumeOpen(true)}
                    className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 text-left"
                >
                    <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                        💼
                    </span>
                    <div className="flex-grow min-w-0">
                        <h2 className="font-medium text-sm text-primary group-hover:text-accent transition-colors truncate">
                            My Career
                        </h2>
                        <p className="text-xs text-secondary truncate">
                            Telecom to SaaS. 30 years of building and closing.
                        </p>
                    </div>
                    <svg
                        className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Podcast Card */}
                <div className="py-2">
                    <PodcastCard />
                </div>

                {linksAfterPodcast.map((link) => (
                    <LinkCard key={link.title} {...link} />
                ))}

                {/* Let's Connect - Opens Modal */}
                <button
                    onClick={() => setIsCalendarOpen(true)}
                    className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 text-left"
                >
                    <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                        📅
                    </span>
                    <div className="flex-grow min-w-0">
                        <h2 className="font-medium text-sm text-primary group-hover:text-accent transition-colors truncate">
                            Let's Connect
                        </h2>
                        <p className="text-xs text-secondary truncate">
                            Schedule a call with me.
                        </p>
                    </div>
                    <svg
                        className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
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

            <ResumeModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </>
    )
}
