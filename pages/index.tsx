import type { NextPage } from 'next'
import Image from 'next/image'
import { Canvas, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as THREE from "three";
import { useEffect, useMemo, useRef } from 'react'

import styles from '../styles/scss/Container.module.scss'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Contact from '../components/Contact'
import useWindowSize from '../utils/useWindowSize'
import { NoSSR } from '../utils/NoSsr'
import Tauri from '../utils/Tauri_Regular.json'

const font = new FontLoader().parse(Tauri);

const CameraController = () => {
  const { camera, gl, viewport } = useThree();
  
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      controls.enableZoom = false
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

const Home: NextPage = () => {
  const [ width, height ] = useWindowSize()

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
            <div className={styles.logo}>
              <Image src={'/assets/images/PineTree.svg'} width={40} height={50} alt='Pine Tree' priority/>
            </div>

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

            <div className={styles.main_section} >
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
