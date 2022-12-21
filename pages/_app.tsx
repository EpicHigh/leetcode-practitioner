import { AppProps } from "next/app";
import "../styles/global.css";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default MyApp;
