const panels = [
    {
        id: 'consulting',
        title: 'Kerzie Consulting',
        description: 'Strategic advisory and GTM execution for growth-stage operators.',
        cta: { label: 'Learn More', href: '#' },
        size: 'large',
        subCards: [
            { title: 'Strategy & Advisory', description: 'Fractional COO and growth consulting' },
            { title: 'GTM Execution', description: 'Revenue operations and market expansion' },
        ],
    },
    {
        id: 'ai',
        title: 'Kerzie AI Solutions',
        description: 'AI automation and workflow systems for SMB operators.',
        cta: { label: 'Visit Kerzie AI', href: 'https://kerzie.ai' },
        size: 'medium',
        subCards: [
            { title: 'Voice AI', description: 'Intelligent call handling and automation' },
            { title: 'Workflow Systems', description: 'Process automation and integrations' },
        ],
    },
    {
        id: 'career',
        title: 'Technology Sales Career',
        description: '15+ years driving revenue in enterprise software and SaaS.',
        cta: { label: 'View Background', href: '#contact' },
        size: 'medium',
        subCards: [
            { title: 'Enterprise Sales', description: 'Complex B2B sales cycles and partnerships' },
            { title: 'Team Leadership', description: 'Building and scaling high-performance teams' },
        ],
    },
    {
        id: 'personal',
        title: 'Personal Interests',
        description: 'Golf, podcasting, and continuous learning.',
        cta: { label: 'Explore', href: '#media' },
        size: 'small',
        subCards: [
            { title: 'PuttingIsSimple', description: 'Golf performance platform' },
            { title: 'Midlife Podcast', description: 'Conversations on reinvention' },
        ],
    },
]

const sizeStyles = {
    large: 'py-16 md:py-20',
    medium: 'py-12 md:py-16',
    small: 'py-8 md:py-12',
}

const titleSizes = {
    large: 'text-3xl md:text-4xl',
    medium: 'text-2xl md:text-3xl',
    small: 'text-xl md:text-2xl',
}

export default function PanelSection() {
    return (
        <section id="products" className="divide-y divide-border">
            {panels.map((panel) => (
                <div key={panel.id} className={`${sizeStyles[panel.size]} bg-white`}>
                    <div className="max-w-container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                            {/* Main content */}
                            <div className="lg:max-w-xl">
                                <h2 className={`${titleSizes[panel.size]} font-semibold text-primary mb-3`}>
                                    {panel.title}
                                </h2>
                                <p className="text-secondary text-lg mb-6">
                                    {panel.description}
                                </p>
                                <a
                                    href={panel.cta.href}
                                    target={panel.cta.href.startsWith('http') ? '_blank' : undefined}
                                    rel={panel.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                                >
                                    {panel.cta.label}
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            {/* Sub-cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-1/2">
                                {panel.subCards.map((card) => (
                                    <div
                                        key={card.title}
                                        className="bg-background rounded-lg border border-border p-5 hover:border-accent/30 transition-colors"
                                    >
                                        <h3 className="font-semibold text-primary mb-1">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-secondary">
                                            {card.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
