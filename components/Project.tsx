import {FC, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {Event} from './Projects'
import styles from '../styles/scss/Projects.module.scss'


const Project = ({event}: {event: Event}) => {
  const [hoverGit, setHoverGit] = useState(false)
  const [hoverLink, setHoverLink] = useState(false)

    return (
      <div className={styles.project}>
        <h2>{event.title} 
            <br /> 
            {event.title === 'Weather App' && <br/>}
            <span>- {event.date} -</span>
        </h2>
        <div className={styles.image}>
          <Image src={event.image} width={500} height={300} alt='Project Image' objectFit='fill' />
        </div>
        <div className={styles.description}>
          <p>{event.description}</p>
        </div>
        <div style={{display: 'flex', flexFlow: 'column nowrap', width: '80%', marginTop: 'auto'}}>
          <div className={styles.achv}>
            <p>{event.type}</p>
            <div className={styles.divider_line}></div>
            <p>{event.technologies.join(', ')}</p>
          </div>
          <div className={styles.links}>
            <Link href='/'>
              <Image src={!hoverGit ? 'https://res.cloudinary.com/multimediarog/image/upload/v1661010940/Portfolio/github-logo-6532_d0zwyf.svg' : 'https://res.cloudinary.com/multimediarog/image/upload/v1661011234/Portfolio/github-logo-6532_1_qbjohb.svg' } onMouseOver={() => setHoverGit(true)} onMouseLeave={() => setHoverGit(false)} width={30} height={30} alt='GitHub' priority/>
            </Link>
            <Link href='/'>
              <Image src={!hoverLink ? 'https://res.cloudinary.com/multimediarog/image/upload/v1661011104/Portfolio/login-right-arrow-11937_if4n4s.svg' : 'https://res.cloudinary.com/multimediarog/image/upload/v1661011232/Portfolio/login-right-arrow-11937_1_tbpihd.svg' } onMouseOver={() => setHoverLink(true)} onMouseLeave={() => setHoverLink(false)} width={30} height={30} alt='View Page' priority/>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Project;