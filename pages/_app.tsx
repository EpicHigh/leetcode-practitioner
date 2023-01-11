import { AppProps } from "next/app";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";

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
