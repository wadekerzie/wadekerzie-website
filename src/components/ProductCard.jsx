const statusStyles = {
    'Live': 'bg-green-100 text-green-800',
    'Building': 'bg-amber-100 text-amber-800',
    'Coming Soon': 'bg-slate-100 text-slate-600',
    'Live/Building': 'bg-blue-100 text-blue-800',
}

export default function ProductCard({ title, description, status, href = '#', year }) {
    return (
        <article className="group bg-white rounded-lg border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                    {year && (
                        <span className="text-xs font-medium text-secondary bg-background px-2 py-1 rounded">
                            {year}
                        </span>
                    )}
                    <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                        {title}
                    </h3>
                </div>
                <span className={`shrink-0 px-2.5 py-1 text-xs font-medium rounded-full ${statusStyles[status] || statusStyles['Coming Soon']}`}>
                    {status}
                </span>
            </div>
            <p className="text-secondary text-sm mb-6 flex-grow">
                {description}
            </p>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-primary transition-colors"
            >
                Learn more
                <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </a>
        </article>
    )
}
