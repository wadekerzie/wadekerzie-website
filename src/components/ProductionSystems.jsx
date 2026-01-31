import { useState } from 'react'

const systems = [
    {
        title: 'Unison',
        subtitle: 'Unified AI communications platform',
        description: 'Multi-channel orchestration for SMB operations',
        status: 'Live',
        statusColor: 'bg-[#10b981] text-white',
        details: 'Voice | SMS | Email | Chat | Social Media',
        footer: 'Launched January 2025',
    },
    {
        title: 'STQ (Sketch-to-Quote)',
        subtitle: 'White-label AI quoting for countertop fabricators',
        description: 'Automated estimating and proposal generation',
        status: 'Pilot',
        statusColor: 'bg-[#f59e0b] text-[#1a2332]',
        details: null,
        footer: '$2,500 setup + $1,000/mo recurring',
    },
    {
        title: 'Applied AI Scouts',
        subtitle: 'Commission-based AI automation sales program',
        description: 'Turnkey training and revenue share model for AI solution sales',
        status: 'Live',
        statusColor: 'bg-[#10b981] text-white',
        details: null,
        footer: '20–50% recurring revenue share',
    },
]

export default function ProductionSystems() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className="w-full max-w-md mx-auto">
            {/* Kerzie AI Solutions - Hero Parent Card */}
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-border shadow-card overflow-hidden">
                {/* Main clickable header */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full p-4 flex items-center gap-3 text-left hover:bg-background/50 transition-colors"
                >
                    {/* Kerzie Icon */}
                    <img
                        src="/kerzie-icon.png"
                        alt=""
                        className="w-10 h-10 shrink-0 rounded-lg object-cover"
                    />

                    <div className="flex-grow min-w-0">
                        <h2 className="font-semibold text-sm text-primary">Kerzie AI Solutions</h2>
                        <p className="text-xs text-secondary">AI automation and workflow systems for SMBs</p>
                    </div>

                    {/* Expand/Collapse Arrow */}
                    <svg
                        className={`w-4 h-4 text-secondary transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* CTA Button - Always visible */}
                <div className="px-4 pb-4">
                    <a
                        href="https://kerzie.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent/90 transition-colors"
                    >
                        Explore at Kerzie.ai
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Expandable Production Systems */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 pb-4 pt-2 border-t border-border/50">
                        <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-3">
                            Our Production Systems
                        </h3>

                        <div className="space-y-2.5">
                            {systems.map((system) => (
                                <div
                                    key={system.title}
                                    className="p-3 rounded-xl bg-background/70 border border-border/50"
                                >
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <div className="min-w-0">
                                            <h4 className="font-semibold text-xs text-primary">{system.title}</h4>
                                            <p className="text-[11px] text-secondary">{system.subtitle}</p>
                                        </div>
                                        <span className={`shrink-0 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${system.statusColor}`}>
                                            {system.status}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-secondary/80 mb-1.5">{system.description}</p>
                                    {system.details && (
                                        <p className="text-[10px] text-accent font-medium mb-1.5">{system.details}</p>
                                    )}
                                    <p className="text-[10px] text-secondary italic">{system.footer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
