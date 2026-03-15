const fs = require('fs')
const path = require('path')

const distIndex = path.join(__dirname, '..', 'dist', 'index.html')
const output = path.join(__dirname, '..', 'dist', 'thisisme.html')

let html = fs.readFileSync(distIndex, 'utf8')

// Replace title
html = html.replace(
    /<title>.*?<\/title>/,
    '<title>This Is Me</title>'
)

// Replace meta description
html = html.replace(
    /<meta name="description"\s+content="[^"]*"\s*\/?>/,
    '<meta name="description" content="A private page." />'
)

// Replace OG tags
html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    '<meta property="og:title" content="This Is Me" />'
)
html = html.replace(
    /<meta property="og:description"\s+content="[^"]*"\s*\/?>/,
    '<meta property="og:description" content="A private page." />'
)
html = html.replace(
    /<meta property="og:site_name" content="[^"]*"\s*\/?>/,
    '<meta property="og:site_name" content="This Is Me" />'
)

// Replace Twitter tags
html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    '<meta name="twitter:title" content="This Is Me" />'
)
html = html.replace(
    /<meta name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    '<meta name="twitter:description" content="A private page." />'
)

fs.writeFileSync(output, html)
console.log('Generated thisisme.html with custom meta tags')
