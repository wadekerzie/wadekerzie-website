export default function ProfileHeader({ bio, name, image }) {
    return (
        <header className="text-center mb-10">
            {/* Profile Headshot */}
            <img
                src={image || "/headshot.jpg"}
                alt="Wade Kerzie"
                className="w-28 h-28 mx-auto mb-6 rounded-full object-cover ring-4 ring-[#2D3154] shadow-lg"
            />

            {/* Name */}
            <h1 className="font-sans text-4xl md:text-5xl font-semibold text-white mb-3">
                {name || 'Wade Kerzie'}
            </h1>

            {/* Bio */}
            <p className="text-[#6B9FD4] text-lg leading-relaxed mb-6 max-w-md mx-auto">
                {bio || <>Problem solver. Always have been. Always will be.</>}
            </p>

        </header>
    )
}
