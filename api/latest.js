// Newest post from the Substack feed, for the "Latest letter" strip on the home page.
// Server-side because Substack's feed sends no CORS headers.
const FEED = 'https://news.kerzie.ai/feed'

function pick(block, tag) {
    const m = block.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`))
    return m ? m[1].trim() : null
}

export default async function handler(req, res) {
    try {
        const r = await fetch(FEED, { headers: { 'User-Agent': 'wadekerzie.com' } })
        if (!r.ok) throw new Error(`feed ${r.status}`)
        const xml = await r.text()
        const item = xml.match(/<item>([\s\S]*?)<\/item>/)
        if (!item) throw new Error('no items')
        const title = pick(item[1], 'title')
        const link = pick(item[1], 'link')
        const date = pick(item[1], 'pubDate')
        res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400')
        res.status(200).json({ title, link, date })
    } catch (err) {
        res.setHeader('Cache-Control', 's-maxage=300')
        res.status(502).json({ error: String(err.message || err) })
    }
}
