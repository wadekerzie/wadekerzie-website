import CompetencyBadge from './CompetencyBadge'

export default function Hero() {
    return (
        <section id="work" className="py-20 md:py-28">
            <div className="max-w-container mx-auto px-6">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-2">
                        Wade Kerzie
                    </h1>
                    <p className="text-xl md:text-2xl text-accent font-semibold mb-6">
                        Problem solver. Always have been. Always will be.
                    </p>
                    <p className="text-xl md:text-2xl text-[#AABBCC] mb-8 leading-relaxed">
                        $380M+ career revenue. 30 years building and closing. Production AI in market now.
                    </p>
                    <div className="mb-8">
                        <CompetencyBadge />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://kerzie.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                        >
                            Work with Kerzie AI
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
