export default function PodcastCard() {
    return (
        <div className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
            {/* Podcast Cover Art as Icon */}
            <img
                src="/podcast-cover.jpg"
                alt=""
                className="w-10 h-10 shrink-0 rounded-lg object-cover shadow-sm"
            />

            {/* Content */}
            <div className="flex-grow min-w-0">
                <h2 className="font-medium text-sm text-primary truncate">
                    Blackjack Wade's Midlife
                </h2>
                <p className="text-xs text-secondary truncate">
                    ✨ 50+ episodes, more coming soon
                </p>
            </div>

            {/* Streaming Buttons */}
            <div className="flex gap-1.5 shrink-0">
                {/* Spotify */}
                <a
                    href="https://open.spotify.com/show/7KDKge7ZtmkdIfxsby7wu1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Listen on Spotify"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                </a>

                {/* Apple Podcasts */}
                <a
                    href="https://podcasts.apple.com/us/podcast/blackjack-wades-midlife/id1669058317"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#9933FF] to-[#FA2D48] hover:from-[#a347ff] hover:to-[#ff3d57] text-white rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Listen on Apple Podcasts"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.588-.12 1.2-.588 1.476-.468.276-1.056.18-1.476-.276-.276-.312-.36-.624-.456-1.056-.276-1.272-.768-2.304-1.608-3.18-1.272-1.332-2.76-1.98-4.512-1.932-3.324.108-6.036 3.036-6.036 6.444v.072c.036 1.608.588 3.096 1.644 4.284.24.264.588.48.912.636.396.192.516.588.516.996 0 .516-.312.972-.768 1.164-.312.132-.66.156-.984.024-.684-.264-1.308-.636-1.86-1.116-1.512-1.32-2.4-3.216-2.544-5.304-.204-2.748 1.008-5.244 3.084-6.996 1.608-1.356 3.528-2.1 5.676-2.196.228-.012.456-.012.684-.012zm-.024 4.536c1.56-.048 2.988.624 4.032 1.788.792.888 1.26 1.884 1.404 3.096.072.552-.168 1.044-.624 1.332-.456.288-1.008.228-1.416-.168-.252-.24-.36-.54-.42-.888-.12-.672-.408-1.26-.888-1.74-.732-.72-1.572-1.044-2.604-.972-1.596.12-2.892 1.368-3.024 2.964-.096 1.2.348 2.22 1.26 2.988.288.24.624.42.972.552.456.168.684.588.684 1.08 0 .492-.276.912-.732 1.092-.324.132-.672.096-.972-.048a5.292 5.292 0 01-1.74-1.236c-.936-1.008-1.428-2.28-1.38-3.672.084-2.46 1.92-4.548 4.368-4.932.36-.06.72-.084 1.08-.084v-.012zm.012 4.848c.684 0 1.272.588 1.272 1.272 0 .696-.588 1.272-1.284 1.272-.684 0-1.272-.576-1.272-1.272 0-.696.588-1.272 1.284-1.272zm-.024 4.08a.96.96 0 01.96.96v2.16a.96.96 0 01-.96.96.96.96 0 01-.96-.96v-2.16a.96.96 0 01.96-.96z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
