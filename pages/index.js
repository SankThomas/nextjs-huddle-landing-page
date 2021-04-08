import Head from "next/head"
import Logo from "../components/Logo"
import Showcase from "../components/Showcase"
import Footer from "../components/Footer"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huddle Landing Page with Single Introductory Section</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Logo />
      <Showcase />
      <Footer />
    </div>
  )
}
