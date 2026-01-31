import CompetencyBadge from './CompetencyBadge'

export default function ProfileHeader() {
    return (
        <header className="text-center mb-10">
            {/* Profile Headshot */}
            <img
                src="/headshot.jpg"
                alt="Wade Kerzie"
                className="w-28 h-28 mx-auto mb-6 rounded-full object-cover ring-4 ring-white shadow-lg"
            />

            {/* Name */}
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-3">
                Wade Kerzie
            </h1>

            {/* Bio */}
            <p className="text-secondary text-lg leading-relaxed mb-6 max-w-md mx-auto">
                AI Architect & Builder.<br />30+ years making technology work.
            </p>

            {/* Competency Badge */}
            <div className="flex justify-center">
                <CompetencyBadge />
            </div>
        </header>
    )
}
