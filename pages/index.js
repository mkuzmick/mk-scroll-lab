import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mk scroll-lab workbook</title>
        <meta name="description" content="mk workbook for scroll-lab-22-23" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         mk scroll lab
        </h1>
      </main>

      <footer className={styles.footer}>
       <ul>
        <li>
          <Link href="/people/anna/hello-all-the-poems"><a>anna's hello site rebuilt in react</a></Link>
        </li>
       </ul>
      </footer>
    </div>
  )
}
