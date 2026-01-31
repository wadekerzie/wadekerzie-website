import ProductCard from './ProductCard'

const products = [
    {
        title: 'Kerzie AI Solutions',
        description: 'AI automation and workflow systems for SMB operators.',
        status: 'Live',
        href: 'https://kerzie.ai',
        year: '2024',
    },
    {
        title: 'Life.OS',
        description: 'Personal operating system framework for high performers.',
        status: 'Coming Soon',
        href: '#',
        year: '2024',
    },
    {
        title: 'Zorli',
        description: 'Internal systems platform for operational efficiency.',
        status: 'Building',
        href: '#',
        year: '2023',
    },
    {
        title: 'Kerzie Consulting',
        description: 'Strategy and GTM execution for growth-stage companies.',
        status: 'Live',
        href: '#',
        year: '2020',
    },
    {
        title: 'Auto Assure',
        description: 'Risk and protection platform for the mobility industry.',
        status: 'Live/Building',
        href: '#',
        year: '2018',
    },
    {
        title: 'PuttingIsSimple',
        description: 'Golf performance platform for serious players.',
        status: 'Live',
        href: '#',
        year: '2015',
    },
]

export default function ProductGrid() {
    return (
        <section id="products" className="py-16 md:py-20 bg-white">
            <div className="max-w-container mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">
                    The Journey
                </h2>
                <p className="text-secondary mb-10">
                    Products and ventures built over two decades of operator experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.title} {...product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
