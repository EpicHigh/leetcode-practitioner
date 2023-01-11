import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';

const MyApp = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
};

export default MyApp;
