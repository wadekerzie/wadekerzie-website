const mediaItems = [
    {
        title: "Blackjack Wade's Midlife Podcast",
        description: 'Conversations on life, business, and reinvention.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        href: '#',
    },
    {
        title: 'Newsletter',
        description: 'Weekly insights on AI, ops, and building.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        href: '#',
    },
    {
        title: 'AI Workshops & Speaking',
        description: 'Training and keynotes for teams and events.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        href: '#',
    },
]

export default function MediaSection() {
    return (
        <section id="media" className="py-16 md:py-20">
            <div className="max-w-container mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-10">
                    Media & Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mediaItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-4 bg-white rounded-lg border border-border p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/5 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-secondary">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
