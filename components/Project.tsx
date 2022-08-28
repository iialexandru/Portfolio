import {FC, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {Event} from './Projects'
import styles from '../styles/scss/Projects.module.scss'
import useWindowSize from '../utils/useWindowSize'


const Project = ({event}: {event: Event}) => {
  const [width] = useWindowSize()

  const [hoverGit, setHoverGit] = useState(false)
  const [hoverLink, setHoverLink] = useState(false)

    return (
      <div className={styles.project}>
        <h2>{event.title} 
            <br /> 
            {event.title === 'Weather App' && width > 1000 && <br/>}
            <span>- {event.date} -</span>
        </h2>
        <div className={styles.image}>
          <Image src={event.image} width={600} height={300} alt='Project Image' objectFit='contain' priority/>
        </div>
        <div className={styles.description}>
          <p>{event.description}</p>
        </div>
        <div style={{display: 'flex', flexFlow: 'column nowrap', width: '90%', marginTop: 'auto'}}>
          <div className={styles.achv}>
            <p>{event.type}</p>
            <div className={styles.divider_line}></div>
            <p>{event.technologies.join(', ')}</p>
          </div>
          <div className={styles.links}>  
              <Link href={event.git}>
                <a target='_blank'>
                  <Image src={!hoverGit ? '/assets/images/GitHubIcon.svg' : '/assets/images/GitHubIconHovered.svg' } onMouseOver={() => setHoverGit(true)} onMouseLeave={() => setHoverGit(false)} width={30} height={30} alt='GitHub' priority/>
                </a>
              </Link>
              <Link href={event.page}>
                <a target='_blank'>
                  <Image src={!hoverLink ? '/assets/images/LinkIcon.svg' : '/assets/images/LinkIconHovered.svg' } onMouseOver={() => setHoverLink(true)} onMouseLeave={() => setHoverLink(false)} width={30} height={30} alt='View Page' priority/>
                </a>
              </Link>
          </div>
        </div>
      </div>
    )
}

export default Project;