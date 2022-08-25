import { useInView } from 'react-intersection-observer';
import Project from './Project'
import {useEffect} from 'react'

import styles from '../styles/scss/Projects.module.scss';
import useWindowSize from '../utils/useWindowSize'


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
    const [width] = useWindowSize()

    const { ref, inView, entry } = useInView({
        threshold: .2,
        triggerOnce: true
      });

    const events: Events = Array(
        {
            title: 'Puppeteer News Scraping Project',
            description: 'A website which you can see the news from multiple news sites, from different countries. Also, they can be sorted by date or you can select a specific date. In addition, there is a special page where you can compare the news from two different news websites, with filtering capabilities.',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1661082294/Portfolio/NewsArchivedIMG_l7nfeb.png',
            date: '2021/05',
            type: 'Personal Project',
            technologies: ['NextJS', 'Puppeteer']
        },
        {
            title: 'FIICODE 2022, Stage 1 (Domain)',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1661082840/Portfolio/ROMDIG_dpbp75.png',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['NextJS', 'Google Cloud Platform']
        },        
        {
            title: 'FIICODE 2022, Stage1 (Subdomain)',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1661082770/Portfolio/Dashboard_Romdig_juh07b.png',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['NextJS', 'Google Cloud Platform']
        },        
        {
            title: 'FIICODE 2022 Stage 2 - 24hr hackathon (Web App)',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1661083882/Portfolio/Child_Tracker_mxyhyr.png',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['Typescript']
        },
        {
            title: 'FIICODE 2022 Stage 2 - 24hr hackathon (React Native App)',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['Typescript']
        },
        {
            title: 'Weather App',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2021/05',
            type: 'Internship 2022',
            technologies: ['Typescript']
        },
        {
            title: 'Messaging Website',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2021/05',
            type: 'Internship 2022',
            technologies: ['Typescript']
        },
        {
            title: 'Chatting Application',
            description: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2021/05',
            type: 'Internship 2022',
            technologies: ['Typescript']
        },
    )

    useEffect(() => {
        console.log(inView)
    }, [inView])
    return (
        <div className={styles.container} id='projects'>
            <div className={styles.headline} ref={ref}>
                <h2 style={{opacity: inView ? 1 : 0}}>Projects</h2>
            </div>
            <div className={styles.disclaimer}>
                <p style={{opacity: inView ? 1 : 0, marginTop: width <= 1000 ? -10 : 0}}>*Disclaimer: all projects use Typescript, SCSS and ReactJS. If a server is included &#40;almost all of them have one&#41; then it uses NodeJS, Express, MongoDB, Mongoose.</p>
                <p style={{marginTop: width <= 1000 ? 0 : -10, marginBottom: 30, opacity: inView ? 1 : 0}}>*The websites may not work at first, since the server is not always on, only when it is used. &#40;Heroku Free Plan&#41;</p>
            </div>
            <div className={`${styles.projects} ${inView ? styles.project_vis : ''}`}>
                {events.map((event: Event, key: number) => {
                        return (
                            (key + 1) % 3 !== 0 && key !== events.length - 1 ?
                                <>
                                    <Project event={event} key={key} />
                                    {width > 1000 && <div className={styles.divider_line_grid} key={key * key}></div> }
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