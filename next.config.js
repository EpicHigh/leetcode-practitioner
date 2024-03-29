const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
	experimental: {
		fontLoaders: [
			{ loader: 'next/font/google', options: { subsets: ['latin'] } },
		],
	},
});
