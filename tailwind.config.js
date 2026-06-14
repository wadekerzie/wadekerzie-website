/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#1A1B2E',
                primary: '#FFFFFF',
                accent: '#6B9FD4',
                secondary: '#AABBCC',
                border: '#2D3154',
                card: '#1E2035',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
            maxWidth: {
                'hub': '520px',
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.05)',
                'card-hover': '0 4px 12px -2px rgb(0 0 0 / 0.08)',
            },
        },
    },
    plugins: [],
}
