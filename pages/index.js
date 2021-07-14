import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import profile from '../public/profile.png'
import instagram from '../public/instagram.png'
import linkedin from '../public/linkedin.png'
import github from '../public/github.png'
import website from '../public/globe.png'


import Button from '../components/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amós Aureliano - Links</title>
        <meta name="description" content="Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <section className={styles.profile}>        
              <Image src={profile} alt="Foto Amós Aureliano"/>
              <h1>@amos_aureliano</h1>
          </section>

          <section className={styles.links}>
              <div className={styles.columnLinks}>
                  <Button
                    title="LinkedIn"
                    subtitle="Here is my LinkedIn page!"
                    linkTo="https://www.linkedin.com/in/am%C3%B3s-aureliano-689a36187/"
                  />
                  <Button
                    title="GitHub"
                    subtitle="Check out my GitHub page"
                    linkTo="https://github.com/AurelianoAmosG20"
                  />
                  <Button
                    title="Website"
                    subtitle="My website"
                    linkTo="https://amosaureliano.vercel.app/"
                  />
                  <Button
                    title="Instagram"
                    subtitle="Follow me on Instagram"
                    linkTo="https://www.instagram.com/amos_aureliano/"
                  />
              </div>
          </section>
      </main>
    </div>
  )
}
