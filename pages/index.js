import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Folz Peepz | Home</title>
        <meta name="keywords" content="folz" />
      </Head>
      <div>

          <h1 className={styles.title}>FolzPeepz</h1>
          <p className={styles.text}>Think of how impressed your audience will be if you extol the virtues of your company's new product because it features a "cloned regional interface", a "visionary 3rd generation extranet" or a "synchronized fault-tolerant protocol".</p>
          <Link href="/folz"><a className={styles.btn}>See Folz list</a></Link>

      </div>
    </>
  )
}
