import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['400', '700'] });

const MyApp = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${roboto.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
};

export default MyApp;
