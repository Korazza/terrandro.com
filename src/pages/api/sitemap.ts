import type { NextApiRequest, NextApiResponse } from 'next'

const WEBSITE_URL = 'https://terrandro.com'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
	res.setHeader('Content-Type', 'text/xml')
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${WEBSITE_URL}/</loc>
      <lastmod>${new Date().toJSON().substring(0, 10)}</lastmod>
    </url>
  </urlset>`
	res.statusCode = 200
	res.end(xml)
}
