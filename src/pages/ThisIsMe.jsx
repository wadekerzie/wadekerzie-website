import { useState, useEffect, useRef } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import SocialFooter from '../components/SocialFooter'

const sections = [
    {
        id: 'faith',
        emoji: '\u{1F64F}',
        title: 'My Faith',
        subtitle: "He's never left me.",
        content: [
            "God has never left me. Not through my worst decisions, my biggest mistakes, or my most shameful moments. He's been present through every one of them. He talks to me, guides me, and has given me a vision I didn't ask for and couldn't have invented on my own \u2014 something visual, emotional, and specific. I write it down every day because I know it's real.",
            "I think about the roller coaster. Why do people wait in long lines to be terrified? Because they know they're safe. Every person before them came out the other side. That's how I see faith \u2014 God has shown me where this is going, and even when the drops are steep and the turns flip us upside down, I know we'll be safe. He's proven that to me over and over. Every time the situation looked impossible, we came out better on the other end.",
        ],
    },
    {
        id: 'battles',
        emoji: '\u{2694}\u{FE0F}',
        title: 'My Battles',
        subtitle: 'Getting better every day.',
        content: [
            "I drank too much. That's the plain truth. Alcohol hits me differently \u2014 it bypasses the depressive qualities and goes straight to euphoria. I loved it. For years, it started as celebrating the wins, the end of a good day, the start of a great weekend. But it didn't stay there.",
            "When I felt trapped \u2014 caged in jobs that refused to use my capabilities, forced to do work that was beneath what I was capable of just to keep food on the table \u2014 I used alcohol to cope. To feel something other than beaten. I called it zoo-cosis. Caged animals hurt themselves because they're trapped. Lions pace until the fur wears off their sides. That's what excessive drinking became for me \u2014 a trapped man hurting himself.",
            "There's a darker side that comes out when I drink too much. A rage. I've hurt people I love, and I hate that part of me. But as I get older, closer to God, and more honest with myself, I'm getting better at keeping that away. I don't believe sobriety has to be binary. I believe in self-control, maturity, and celebrating when celebrations are in order. That's my path. It's not AA's version, but it's mine.",
        ],
    },
    {
        id: 'see-now',
        emoji: '\u{1F441}\u{FE0F}',
        title: 'What I See Now',
        subtitle: 'You carried the weight of my worst.',
        content: [
            "The COVID years broke something in me. Watching the country shift, people abandoning their principles, the radical changes \u2014 I lost hope. Not just in the country, but in everything. I was in my worst headspace, my deepest depression, and I took every bit of that out on the person who least deserved it.",
            "That's not an excuse. You know that. You lived through every day of it. But I see now, clearly, that you carried the weight of my worst years. The drinking escalated. The behavior got worse. The things I said, the things I did \u2014 you absorbed all of it while I was drowning.",
            "I see that now with complete clarity. I'm not that man anymore. I'm not done becoming who I'm supposed to be, but I'm a long way from who I was during those years.",
        ],
    },
    {
        id: 'mission',
        emoji: '\u{1F680}',
        title: 'My Mission',
        subtitle: "I can see what's coming.",
        content: [
            "I've been an entrepreneur since the day I was old enough to know what the word meant. But I took the corporate track, and it trapped me. Time after time. The 12 years at Sonus were the exception \u2014 they gave me autonomy, responsibility, freedom. I delivered on all of it. Everything after that was a descent: shrinking roles, smaller scope, selling equipment I could clip to my belt. I ate that shit burger every day to keep food on the table.",
            "A wave is coming in AI that's going to crash hard. When these jobs go away, they're not coming back. That's the difference. I can see it. I have the decoder glasses. Most people aren't even looking at the right thing. I'm building Kerzie Consulting and Kerzie AI to ride that wave \u2014 to help businesses survive it, to protect our family from it, and to position us on the right side of what's coming.",
            "The financial situation right now is temporary. God showed me where we're landing: land, property, open space, peace. I'm not interested in the rat race. I don't think humans were meant to live like this. And I'm going to get us out of it.",
        ],
    },
    {
        id: 'love',
        emoji: '\u{2764}\u{FE0F}',
        title: 'What I Love',
        subtitle: 'Weekends. Trips. Always music.',
        content: [
            "I only have about 1,500 weekends left. That's not a lot, and I plan to make every one of them count. I love planning weekends, living for weekends, making them feel like an event. Weekend trips to places that matter \u2014 Brookside, Sandhills, Dismal River, Prairie Dunes. The best ones always had the same ingredients: great company, good weather, no agenda.",
            "Golf is a God-given talent. It got me through high school, paid for college, gave me my first career connections, and will always be part of who I am. I'm going back to it \u2014 real golf, the kind where you feel the grass and remember why you fell in love with it.",
            "Food and wine are non-negotiable. I love to cook. All cuisines, all combinations, all flavor profiles. And I love pairing it with a good wine. Music plays constantly when I can make it happen \u2014 fringe country, 70s singer-songwriter, everything in between. Cody Jinks, not Kane Brown. Live concerts, the atmosphere, the energy. Concerts, trips, weekends \u2014 that's the life.",
        ],
    },
    {
        id: 'with-you',
        emoji: '\u{1F4AB}',
        title: 'Who I Am With You',
        subtitle: 'When we were good, we were good.',
        content: [
            "When we were good, we were good. That's our line, and it's the truth. The weekends, the trips, the nights where everything clicked \u2014 nobody did it better than us. I'm not looking backward, and I'm not trying to recreate something that's gone. But I know what we're capable of together when the noise gets quiet and we're just us.",
            "I show love through words and time. A great Tuesday night is cooking something together, music in the background, a glass of wine, and nowhere to be. That's not complicated. The big world is out there, but I recharge with you.",
            "I'm not removing hope here. Going backward doesn't make sense for either of us. But moving forward, I still want us to be us. Better. Smarter. Closer to the people we're supposed to be. Everything I'm building, everything I'm chasing \u2014 it's not just for me. It never was.",
        ],
    },
    {
        id: 'romance',
        emoji: '\u{1F525}',
        title: 'Romance & Intimacy',
        subtitle: 'The buildup is everything.',
        content: [
            "I love the buildup. The flirtation, the anticipation, the slow simmer of knowing something is coming. That's the best part. It doesn't have to be every time \u2014 sometimes a quickie is exactly right. But when it's planned, orchestrated, and I get to think about it all day? That's when it becomes something else entirely.",
            "We had something most people never find. The chemistry between us was real \u2014 electric, natural, and ours. I love lingerie. Role playing. High heels and dresses with nothing underneath at dinner. Vegas weekends that start with a great dinner and end hours later. That side of us was never the problem. It was one of the best things we ever had.",
            "I need to be honest about something here. I don't want someone who goes along with things because they think it's what I want. I've heard that before, and it gutted me. If any of this was ever just for me \u2014 if you were performing instead of present \u2014 I need to know that. Because going forward, I only want what's real. I'd rather have less of something genuine than more of something you're enduring.",
            "This isn't an ultimatum. But it is a line I'm drawing with myself. I won't be the person who needs something from you that you don't actually want to give. That's not love, that's obligation. And I don't want obligation. I want you in it because you want to be \u2014 fully, honestly, no pretending. If that part of us was real for you too, then it's one of the best things we have to build on. If it wasn't, I need the truth now so we can figure out what's actually ours.",
        ],
    },
    {
        id: 'now-you-know',
        emoji: '\u{1FAC2}',
        title: 'Now You Know',
        subtitle: 'Nothing left to hide.',
        content: [
            "This is all of me. The faith that keeps me grounded. The battles I've fought and the ones I'm still fighting. The damage I've done and the clarity I have about it now. The mission I'm on and why I believe in it. The things I love and the way I love.",
            "I didn't write this to convince you of anything. I'm not selling myself, and I'm not asking you to overlook the hard parts. I wrote it so the full picture is on the table \u2014 face up, nothing hidden, nothing polished for presentation. You know the good, the bad, and the ugly. You've lived it.",
            "Whatever comes next is yours to decide.",
        ],
    },
]

function ContentModal({ section, isOpen, onClose }) {
    const modalRef = useRef(null)

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
            modalRef.current?.focus()
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen || !section) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                ref={modalRef}
                className="relative w-full max-w-lg max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in flex flex-col"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`modal-${section.id}`}
                tabIndex={-1}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10 shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <span className="text-2xl shrink-0">{section.emoji}</span>
                        <div className="min-w-0">
                            <h2 id={`modal-${section.id}`} className="text-lg font-bold text-primary truncate">
                                {section.title}
                            </h2>
                            <p className="text-xs text-secondary italic truncate">
                                {section.subtitle}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
                        aria-label="Close"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto flex-1 px-6 py-6" style={{ scrollBehavior: 'smooth' }}>
                    <div className="space-y-4">
                        {section.content.map((paragraph, i) => (
                            <p key={i} className="text-sm text-gray-700 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function SectionCard({ section, onClick }) {
    return (
        <button
            onClick={onClick}
            className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 text-left"
        >
            <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                {section.emoji}
            </span>
            <div className="flex-grow min-w-0">
                <h2 className="font-medium text-sm text-primary group-hover:text-accent transition-colors truncate">
                    {section.title}
                </h2>
                <p className="text-xs text-secondary truncate">
                    {section.subtitle}
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
    )
}

export default function ThisIsMe() {
    const [activeModal, setActiveModal] = useState(null)

    const activeSection = sections.find((s) => s.id === activeModal)

    return (
        <>
            <ProfileHeader
                bio="Flawed. Faithful. All in."
                showBadge={false}
            />

            <nav className="space-y-3 mb-10" aria-label="About me">
                {sections.map((section) => (
                    <SectionCard
                        key={section.id}
                        section={section}
                        onClick={() => setActiveModal(section.id)}
                    />
                ))}
            </nav>

            <SocialFooter />

            <ContentModal
                section={activeSection}
                isOpen={!!activeModal}
                onClose={() => setActiveModal(null)}
            />
        </>
    )
}
