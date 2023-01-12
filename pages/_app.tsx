import '../styles/global.css';
import { Roboto } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';

const roboto = Roboto({ weight: '400' });

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
