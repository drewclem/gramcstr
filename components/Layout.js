import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gramcstr</title>
        <meta name="description" content="On-demand podcast transcriptions" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header class={styles.header}>
        <img src="/logo.svg" alt="Gramcstr logo" />

        <nav>
          <a href="/">Contribute</a>
        </nav>
      </header>
      <main class={styles.main}>{children}</main>

      <footer class={styles.footer}>
        <a href="https://deepgram.com/">
          Powered by: <span class="sr-only">Deepgram</span>
          <img src="/dg-logo.png" alt="Deepgram logo" />
        </a>
      </footer>
    </div>
  );
}
