import type { NextPage } from 'next'
import Image from 'next/image'
import MobileNav from '../components/MobileNav'

import styles from '../styles/scss/Container.module.scss'
import Canvas from '../components/Canvas'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Contact from '../components/Contact'


const Home: NextPage = () => {

  const Item = ({ url, name }: { url: string, name: string}) => {
      return (
        <li>
          <a href={url}>{name}</a>
        </li>
      )
  }

  return (
    <div className={styles.container} style={{ scrollBehavior: 'smooth' }}>
      <div className={styles.home}>

          <div className={styles.navbar}>
            <ul>
              <Item url='#aboutme' name='About me' />
              <Item url='#technologies' name='Technologies' />
              <Item url='#projects' name='Projects' />
              <Item url='#contact' name='Contact' />
            </ul>
          </div>

          <div className={styles.main_section}>
            <h1>- Ipatov Ioan Alexandru -</h1>
            <h1>Web Developer</h1>
            <h1>Frontend &amp; <span>Backend</span></h1>
          </div>

          <div className={styles.scroll_more}>
            <span>Scroll for More</span>
            <div className={styles.animated_arrow}>
              <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1654958735/Portfolio/arrow-down-3101_3_ehbczl.svg' width={30} height={30} />
            </div>
          </div>
        </div>

        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />

        {/* <MobileNav /> */}
    </div>
  )
}

export default Home;
