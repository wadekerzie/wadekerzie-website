import { useState, useEffect } from 'react'

const scoringPillars = [
    {
        name: 'Systems Built',
        weight: 30,
        score: 29,
        maxScore: 30,
        details: [
            { label: 'Production systems', value: 'Unison (unified communications), STQ (white-label quoting), Add to Action (lead qualification), Zorli (consumer mobile app — App Store/Google Play), AI Solution Architect suite, Scout training infrastructure, lead generation engine' },
            { label: 'Zorli architecture', value: 'Consumer mobile application with AWS S3 backend, encryption at rest and in transit, AI-powered semantic retrieval for personal information management' },
            { label: 'Led development teams', value: 'Guided architecture and scoping for Zorli development in Replit' },
            { label: 'Complexity demonstrated', value: 'Multi-channel orchestration, mobile app distribution, cloud infrastructure (AWS), security architecture, semantic search, real-time voice AI, multi-tenant SaaS' },
        ],
    },
    {
        name: 'Production Deployments',
        weight: 25,
        score: 25,
        maxScore: 25,
        details: [
            { label: 'Live revenue-generating systems', value: 'Unison (unified communications, January 2025), Add to Action for Kat Fabricators (live several months)' },
            { label: 'Consumer product', value: 'Zorli launching to public app stores (App Store + Google Play)' },
            { label: 'Add to Action', value: 'Multi-channel lead qualification system (outbound SMS + inbound voice AI agent)' },
            { label: 'Standardized deployment process', value: 'SOPs for scout intake → ops team handoff workflow' },
        ],
    },
    {
        name: 'Revenue Impact',
        weight: 20,
        score: 20,
        maxScore: 20,
        details: [
            { label: 'Career revenue', value: '$380M+ in enterprise sales leadership' },
            { label: 'Kerzie revenue model', value: '$2,500 setup + $1,000/month recurring (STQ), 20-50% commission structure (Scout program)' },
            { label: 'ROI frameworks', value: 'Built-in proposal tools with quantified client value calculations' },
        ],
    },
    {
        name: 'Training & Education',
        weight: 15,
        score: 15,
        maxScore: 15,
        details: [
            { label: 'Paid training engagements', value: 'AI Basics workshops for Kat Fabricators, Architectural Security Group (30+ attendees), Association of Directory Publishers' },
            {
                label: 'Public educational content', value: 'Published Notion training curriculum + 2-hour YouTube workshop', links: [
                    { text: 'Notion curriculum', url: 'https://abrupt-cornet-6e8.notion.site/AI-Freedom-Express-Fundamentals-Kat-Fabricators-221ded1bc3ae800faa97d8348b74a53c' },
                    { text: 'YouTube workshop', url: 'https://youtu.be/ZAGF-mwD63E' }
                ]
            },
            { label: 'Multiple delivery formats', value: 'In-person conference room sessions, live workshops, online content' },
            { label: 'Professional materials', value: 'Structured, repeatable curriculum with documentation' },
        ],
    },
    {
        name: 'Toolchain Mastery',
        weight: 10,
        score: 9,
        maxScore: 10,
        details: [
            { label: 'Cloud infrastructure', value: 'AWS S3, encryption at rest and in transit, secure storage architecture' },
            { label: 'Development', value: 'Antigravity IDE, Replit, Git/GitHub, Vercel, mobile app deployment (App Store/Google Play)' },
            { label: 'AI & Automation', value: 'GoHighLevel, Zapier (Silver Partner), Make, GPT-4, Claude, Anthropic API, semantic retrieval systems' },
            { label: 'Platforms', value: 'Salesforce, HubSpot, voice/SMS orchestration, real-time AI agents, database architecture' },
            { label: 'Security', value: 'Encryption standards, secure data handling, authentication/authorization' },
        ],
    },
]

const totalScore = scoringPillars.reduce((sum, p) => sum + p.score, 0)
const maxTotalScore = scoringPillars.reduce((sum, p) => sum + p.maxScore, 0)

export default function CompetencyBadge() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsModalOpen(false)
        }
        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isModalOpen])

    return (
        <>
            {/* Badge */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-border shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer group"
                aria-label="View Applied AI Competency Index details"
            >
                <div className="flex items-center gap-2">
                    <span className="text-sm text-secondary">Applied AI Competency Index™</span>
                    <span className="text-lg font-bold text-primary">{totalScore}/{maxTotalScore}</span>
                </div>
                <span className="text-xs text-secondary">(Verified Architect)</span>
                <svg
                    className="w-4 h-4 text-secondary group-hover:text-accent transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="aaci-modal-title"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 id="aaci-modal-title" className="text-xl font-bold text-primary">
                                    Applied AI Competency Index™
                                </h2>
                                <p className="text-sm text-secondary">
                                    Score: <span className="font-semibold text-primary">{totalScore}/{maxTotalScore}</span> (Verified Architect)
                                </p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 text-secondary hover:text-primary hover:bg-background rounded-lg transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto max-h-[calc(90vh-140px)] px-6 py-4">
                            {/* Description */}
                            <p className="text-secondary text-sm mb-6 leading-relaxed">
                                The AACI measures verified implementation capability across five weighted pillars. This is not a self-assessment—it's based on documented systems, deployments, and revenue impact.
                            </p>

                            {/* Scoring Breakdown */}
                            <div className="space-y-6">
                                {scoringPillars.map((pillar) => (
                                    <div key={pillar.name} className="border border-border rounded-xl p-4">
                                        {/* Pillar Header */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div>
                                                <h3 className="font-semibold text-primary">{pillar.name}</h3>
                                                <span className="text-xs text-secondary">({pillar.weight}% weight)</span>
                                            </div>
                                            <span className="text-lg font-bold text-accent">
                                                {pillar.score}/{pillar.maxScore}
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-background rounded-full mb-4 overflow-hidden">
                                            <div
                                                className="h-full bg-accent rounded-full transition-all duration-500"
                                                style={{ width: `${(pillar.score / pillar.maxScore) * 100}%` }}
                                            />
                                        </div>

                                        {/* Details */}
                                        <ul className="space-y-2">
                                            {pillar.details.map((detail, idx) => (
                                                <li key={idx} className="text-sm">
                                                    <span className="font-medium text-primary">{detail.label}:</span>{' '}
                                                    <span className="text-secondary">{detail.value}</span>
                                                    {detail.links && (
                                                        <span className="ml-1">
                                                            ({detail.links.map((link, linkIdx) => (
                                                                <span key={linkIdx}>
                                                                    <a
                                                                        href={link.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-accent hover:underline"
                                                                    >
                                                                        {link.text}
                                                                    </a>
                                                                    {linkIdx < detail.links.length - 1 && ', '}
                                                                </span>
                                                            ))})
                                                        </span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4">
                            <p className="text-xs text-secondary text-center">
                                This scoring methodology is transparent and auditable. The 2-point gap (to 100) is reserved for published research, major conference speaking, platforms serving 1,000+ customers, or recognized industry thought leadership.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
