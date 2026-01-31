import CompetencyBadge from './CompetencyBadge'

export default function Hero() {
    return (
        <section id="work" className="py-20 md:py-28">
            <div className="max-w-container mx-auto px-6">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-6">
                        Wade Kerzie — Applied AI Expert & Operator
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed">
                        20 years building and scaling businesses — from automotive to insurance to golf tech. Now channeling that operator experience into AI systems, voice automation, and intelligent workflows at Kerzie AI.
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
                        <a
                            href="#products"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border border-border hover:border-accent hover:text-accent transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                        >
                            Explore My Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
