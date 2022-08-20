import { useInView } from 'react-intersection-observer';
import Project from './Project'

import styles from '../styles/scss/Projects.module.scss';


export interface Event {
    title: string;
    date: string;
    description: string;
    image: string;
    video?: string;
    type: string;
    technologies: string[];

}

interface Events extends Array<Event>{}


const Projects = () => {

    const { ref, inView, entry } = useInView({
        threshold: .2,
        triggerOnce: true
      });

    const events: Events = Array(
        {
            title: 'Puppeteer News Scraping Project',
            description: 'First There once was a ship that put to sea and in the name of the ship was a billy I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['Typescript', 'ReactJS', 'NextJS', 'SCSS', 'Gulp', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'Puppeteer']
        },
        {
            title: 'Puppeteer News Scraping Project',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['Typescript', 'ReactJS', 'NextJS', 'SCSS', 'Gulp', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'Puppeteer']
        },        {
            title: 'Puppeteer News Scraping Project',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['Typescript', 'ReactJS', 'NextJS', 'SCSS', 'Gulp', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'Puppeteer']
        },        {
            title: 'Puppeteer News Scraping Project',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['Typescript', 'ReactJS', 'NextJS', 'SCSS', 'Gulp', 'NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'Puppeteer']
        },
    )

    return (
        <div className={styles.container} ref={ref} id='projects'>
            <div className={styles.headline}>
                <h2 style={{opacity: inView ? 1 : 0}}>Projects</h2>
            </div>
            <div className={`${styles.projects} ${inView ? styles.project_vis : ''}`}>
                {events.map((event: Event, key: number) => {
                    return (
                        (key + 1) % 3 !== 0 && key !== events.length - 1 ?
                            <>
                                <Project event={event} key={key} />
                                <div className={styles.divider_line_grid} key={key}></div>
                            </>
                        :
                            <Project event={event} key={key} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;