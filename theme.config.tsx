import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
	docsRepositoryBase: 'https://github.com/EpicHigh/leetcode-practitioner',
	footer: {
		text: (
			<span>
				MIT {new Date().getFullYear()} © Thank you for visiting my LeetCode
				practices documentation website.
				<br />
				I hope that you have found this resource helpful in improving your
				coding skills and preparing for technical interviews.
				<br />
				Made with ❤️ by{' '}
				<Link
					className="footer-link"
					href="https://linkedin.com/in/prasit-tongpradit"
					target="_blank"
					rel="noreferrer noopener"
				>
					Prasit Tongpradit
				</Link>{' '}
				and I would like to thank{' '}
				<Link
					className="footer-link"
					href="https://www.youtube.com/@NeetCode"
					target="_blank"
					rel="noreferrer noopener"
				>
					NeetCode
				</Link>{' '}
				for their video resources. Keep practicing and happy coding!
			</span>
		),
	},
	head() {
		const { frontMatter } = useConfig();
		return (
			<>
				<meta name="application-name" content="LeetCode Practitioner" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content={frontMatter.title} />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta
					name="google-site-verification"
					content="6lYoiRDSgMvimZ6DzgL7tpq7kUlelV_QhO0Efsyd0Yg"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="shortcut icon" href="/favicon.ico" />

				<meta name="keywords" content={frontMatter.keywords || ''} />
			</>
		);
	},
	i18n: [],
	logo: (
		<>
			<Image
				src="/android-chrome-512x512.png"
				alt="LeetCode Practitioner Icon"
				width={32}
				height={32}
			/>
			<span>LeetCode Practitioner</span>
		</>
	),
	project: {
		link: 'https://github.com/EpicHigh/leetcode-practitioner',
	},
	useNextSeoProps() {
		const { asPath } = useRouter();
		const { frontMatter } = useConfig();
		return {
			titleTemplate: '%s – LeetCode Practitioner',
			description: frontMatter.description,
			openGraph: {
				type: 'website',
				locale: 'en',
				siteName: 'LeetCode Practitioner',
				url: `https://leetcode-practitioner.vercel.app${asPath}`,
				title: frontMatter.title,
				description: frontMatter.description,
				images: [
					{
						url: 'https://leetcode-practitioner.vercel.app/apple-touch-icon.png',
						width: 180,
						height: 180,
						alt: 'LeetCode Practitioner Apple Touch Icon',
					},
					{
						url: 'https://leetcode-practitioner.vercel.app/android-chrome-192x192.png',
						width: 192,
						height: 192,
						alt: 'LeetCode Practitioner Android Chrome Icon',
					},
					{
						url: 'https://leetcode-practitioner.vercel.app/android-chrome-512x512.png',
						width: 512,
						height: 512,
						alt: 'LeetCode Practitioner Android Chrome Icon',
					},
				],
			},
		};
	},
};

export default config;
