module.exports = {
	reactStrictMode: false,
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	async rewrites() {
		return [
			{
				source: '/sitemap.xml',
				destination: '/api/sitemap',
			},
		]
	},
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: '**.cdninstagram.com',
		  },
		],
	},
}
