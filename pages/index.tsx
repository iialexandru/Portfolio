import type { NextPage } from 'next'
import Image from 'next/image'
import MobileNav from '../components/MobileNav'

import styles from '../styles/scss/Container.module.scss'
import Canvas from '../components/Canvas'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Contact from '../components/Contact'
import useWindowSize from '../utils/useWindowSize'
import { NoSSR } from '../utils/NoSsr'


const Home: NextPage = () => {
  const [ width ] = useWindowSize()

  const Item = ({ url, name }: { url: string, name: string}) => {
      return (
        <li>
          <a href={url}>{name}</a>
        </li>
      )
  }

  return (
    <NoSSR fallback={<div style={{width: '100vw', height: '100vh'}}></div>}>
      <div className={styles.container} style={{ scrollBehavior: 'smooth' }}>
        <div className={styles.home}>

            {width >= 615 &&
              <div className={styles.navbar}>
                <ul>
                  <Item url='#aboutme' name='About me' />
                  <Item url='#technologies' name='Technologies' />
                  <Item url='#projects' name='Projects' />
                  <Item url='#contact' name='Contact' />
                </ul>
              </div>
          }

            <div className={styles.main_section}>
              <h1>- Ipatov Ioan Alexandru -</h1>
              <h1>Web Developer</h1>
              <h1>Frontend &amp; <span>Backend</span></h1>
            </div>

            <div className={styles.scroll_more}>
              <span>Scroll for More</span>
              <div className={styles.animated_arrow}>
                <Image src={'/assets/images/ArrowDown.svg'} width={30} height={30} alt='Arrow' priority/>
              </div>
            </div>
          </div>

          <AboutMe />
          <Technologies />
          <Projects />
          <Contact />
      </div>
    </NoSSR>
  )
}

export default Home;
