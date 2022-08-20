import {FC} from 'react'
import Image from 'next/image'

import {Event} from './Projects'
import styles from '../styles/scss/Projects.module.scss'


const Project = ({event}: {event: Event}) => {

    return (
      <div className={styles.project}>
        <h2>{event.title} 
            <br /> 
            <span>- {event.date} -</span>
        </h2>
        <div className={styles.image}>
          <Image src={event.image} width={400} height={300} alt='Project Image' />
        </div>
        <div className={styles.description}>
          <p>{event.description}</p>
        </div>
        <div className={styles.achv}>
          <p>{event.type}</p>
          <div className={styles.divider_line}></div>
          <p>{event.technologies.join(', ')}</p>
        </div>
      </div>
    )
}

export default Project;