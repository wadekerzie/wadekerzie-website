import { useEffect, useState } from 'react'
import CalendarModal from '../components/CalendarModal'

// Change this one line when the focus shifts.
const NOW = 'Building Kerzie AI. Writing every Tuesday.'

const SUBSTACK = 'https://news.kerzie.ai'

const groups = [
    {
        title: 'What I run',
        note: 'the day job, times four',
        items: [
            {
                title: 'Kerzie AI Solutions',
                description: 'An AI operating company. The Back Cover, Sales Teams, Unison.',
                href: 'https://kerzie.ai',
                mark: { img: '/marks/kerzie.png', bg: '#1A1B2E', bleed: true, zoom: 1.3 },
            },
            {
                title: 'GotaGuy',
                description: 'Home repair by text. McKinney and Aurora.',
                href: 'https://gotaguy.chat',
                mark: { img: '/marks/gotaguy.png', bg: '#E8F3EC', bleed: true, zoom: 1.05 },
                badge: 'Live',
            },
            {
                title: 'TrueSeat',
                description: 'Resumes are claims. An AI interview builds the evidence.',
                href: 'https://trueseat.io',
                mark: { img: '/marks/trueseat.svg', bg: '#0E1116', bleed: true },
            },
            {
                title: 'Packed House',
                description: 'Everything happening near McKinney, in one calendar.',
                href: 'https://packedhouse.live',
                mark: { img: '/marks/packedhouse.svg', bg: '#F6F4EF', bleed: true },
            },
        ],
    },
    {
        title: 'What I make',
        note: 'receipts only',
        items: [
            {
                title: 'AI in the Wild',
                description: 'The show. AI out in the real world, on YouTube.',
                href: 'https://www.youtube.com/@KerzieAI',
                mark: { img: '/marks/aitw.jpg', bg: '#0F2A1C', bleed: true },
            },
            {
                title: 'The Tuesday letter',
                description: 'One long-form piece every Tuesday on Substack.',
                href: SUBSTACK,
                mark: { icon: 'letter', bg: '#F6E3D8', fg: '#B04E2B' },
            },
            {
                title: 'Essays',
                description: 'The longer arguments about AI and knowledge work.',
                href: 'https://kerzie.ai/essays',
                mark: { icon: 'pen', bg: '#E4ECF6', fg: '#2B5D96' },
            },
        ],
    },
    {
        title: 'Built for my family',
        note: 'Woo Pig. Wreck ’Em.',
        items: [
            {
                title: 'Double Coverage',
                description: 'Built for my daughter, KK. Arkansas and Texas Tech football in one view.',
                href: 'https://razorbacks-dashboard.vercel.app/',
                mark: { icon: 'football', bg: '#F7E1E1', fg: '#9D2235' },
            },
        ],
    },
    {
        title: 'The game',
        note: 'former college golfer',
        items: [
            {
                title: 'PuttingIsSimple',
                description: 'Online putting instruction. Stop three-putting.',
                href: 'https://puttingissimple.com',
                mark: { img: '/marks/golf.png', bg: '#EEF6EA', bleed: true, zoom: 1.45 },
            },
        ],
    },
]

const icons = {
    letter: (
        <path d="M4 6.5h16v11H4zM4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    ),
    pen: (
        <path d="M15.5 4.5l4 4L9 19l-5 1 1-5zM13.5 6.5l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    ),
    football: (
        <>
            <path d="M5 19C3.5 13 7 6.5 12.5 5c2.5-.6 5-.5 6.5 0 .5 1.5.6 4 0 6.5C17.5 17 11 20.5 5 19z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9.5 14.5l5-5M10.5 11.5l2 2M12.5 9.5l2 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
    ),
}

function Mark({ mark }) {
    return (
        <span
            className="wk-mark"
            style={{ background: mark.bg, color: mark.fg }}
            aria-hidden="true"
        >
            {mark.img ? (
                <img
                    src={mark.img}
                    alt=""
                    className={mark.bleed ? 'wk-mark-bleed' : 'wk-mark-img'}
                    style={mark.zoom ? { transform: `scale(${mark.zoom})` } : undefined}
                />
            ) : (
                <svg viewBox="0 0 24 24" className="w-7 h-7">{icons[mark.icon]}</svg>
            )}
        </span>
    )
}

function Card({ item }) {
    return (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="wk-card group">
            <Mark mark={item.mark} />
            <span className="min-w-0 flex-grow">
                <span className="flex items-center gap-2">
                    <span className="wk-card-title">{item.title}</span>
                    {item.badge && (
                        <span className="wk-badge">
                            <span className="wk-dot" />
                            {item.badge}
                        </span>
                    )}
                </span>
                <span className="wk-card-desc">{item.description}</span>
            </span>
            <svg className="wk-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
        </a>
    )
}

function Latest() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        let alive = true
        fetch('/api/latest')
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                if (alive && data && data.title) setPost(data)
            })
            .catch(() => {})
        return () => {
            alive = false
        }
    }, [])

    const date = post?.date
        ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        : null

    return (
        <a href={post?.link || SUBSTACK} target="_blank" rel="noopener noreferrer" className="wk-latest group">
            <span className="wk-latest-label">{post ? `Fresh on Substack${date ? ` · ${date}` : ''}` : 'The Tuesday letter'}</span>
            <span className="wk-latest-title">{post ? post.title : 'Read the latest on Substack'}</span>
            <span className="wk-latest-cta">
                Read it
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            </span>
        </a>
    )
}

const social = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/wade-kerzie-10b6483/',
        path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
        label: 'Substack',
        href: SUBSTACK,
        path: 'M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z',
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@KerzieAI',
        path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/wkerzie/',
        path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    },
    {
        label: 'Email',
        href: 'mailto:wade@kerzie.ai',
        stroke: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
]

export default function Home() {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    // The personal page is light. Other routes keep the dark body.
    useEffect(() => {
        document.body.classList.add('wk-light')
        return () => document.body.classList.remove('wk-light')
    }, [])

    return (
        <div className="wk-page">
            <main className="wk-wrap">
                <header className="wk-hero wk-rise">
                    <div className="wk-photo-wrap">
                        <img src="/headshot-warm.jpg" alt="Wade Kerzie" className="wk-photo" width="160" height="160" />
                        <span className="wk-sticker">McKinney, TX</span>
                    </div>
                    <p className="wk-hi">hi, I'm</p>
                    <h1 className="wk-name">Wade Kerzie</h1>
                    <p className="wk-tagline">
                        Problem solver. Always have been. <span className="wk-coral">Always will be.</span>
                    </p>
                    <p className="wk-now">
                        <span className="wk-dot wk-dot-pulse" />
                        <span className="wk-now-label">Now</span>
                        {NOW}
                    </p>
                </header>

                <div className="wk-rise" style={{ animationDelay: '80ms' }}>
                    <Latest />
                </div>

                {groups.map((group, i) => (
                    <section key={group.title} className="wk-group wk-rise" style={{ animationDelay: `${140 + i * 60}ms` }}>
                        <div className="wk-group-head">
                            <h2 className="wk-group-title">{group.title}</h2>
                            <span className="wk-note">{group.note}</span>
                        </div>
                        <div className={group.items.length > 1 ? 'wk-grid' : 'wk-grid wk-grid-one'}>
                            {group.items.map((item) => (
                                <Card key={item.title} item={item} />
                            ))}
                        </div>
                    </section>
                ))}

                <section className="wk-cta wk-rise" style={{ animationDelay: '400ms' }}>
                    <p className="wk-cta-line">Want to build something, or just talk shop?</p>
                    <div className="wk-cta-row">
                        <button type="button" onClick={() => setIsCalendarOpen(true)} className="wk-btn wk-btn-primary">
                            Grab time with me
                        </button>
                        <a href="https://pro.wadekerzie.com" target="_blank" rel="noopener noreferrer" className="wk-btn wk-btn-ghost">
                            Professional profile
                        </a>
                    </div>
                </section>

                <footer className="wk-footer">
                    <div className="wk-social">
                        {social.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="wk-social-link"
                            >
                                {s.stroke ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.stroke} />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={s.path} />
                                    </svg>
                                )}
                            </a>
                        ))}
                    </div>
                    <p className="wk-signoff">Wade</p>
                    <p className="wk-copy">&copy; {new Date().getFullYear()} Wade Kerzie &middot; McKinney, Texas</p>
                </footer>
            </main>

            <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
        </div>
    )
}
