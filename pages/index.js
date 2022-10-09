import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const theLinks = [
  {
    slug: "/people/anna/hello-all-the-poems",
    text: `anna's hello site rebuilt in react`
  },
  {
    slug: "/plain-html/anna/hello.html",
    text: `anna's original page preserved`
  }
]

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
        {theLinks.map((link, i) => {
          return (
            <li key={i}>
              <Link href={link.slug}><a>{link.text}</a></Link>
            </li>
          )
        })}
       </ul>
      </footer>
    </div>
  )
}
