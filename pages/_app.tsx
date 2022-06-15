import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import QuizContextProvider from "../context/category";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuizContextProvider>
      <Head>
        <title>Dream Quiz</title>
        <link rel="icon" type="image/svg" href="/logo.svg" />
      </Head>

      <Component {...pageProps} />
    </QuizContextProvider>
  );
}

export default MyApp;
