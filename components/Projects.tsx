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
    page: string;
    git: string;
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
            image: '/assets/images/NewsArchiver.png',
            date: '2021/05',
            type: 'Personal Project',
            technologies: ['NextJS', 'Puppeteer'],
            page: 'https://newsarchiver.vercel.app/',
            git: 'https://github.com/iialexandru/newsarchiver'
        },
        {
            title: 'FIICODE 2022, Stage 1 (Domain)',
            description: 'A website in which, after logged in and verified by the moderators (part included in the next project), you can create posts about what you would like to be improved and what you would add in your city/county/village, which can then be rated by other people that live in the same city/county/village and commented on. (made for the 2022 FIICode Competition)',
            image: '/assets/images/Romdig.png',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['NextJS', 'Google Cloud Platform'],
            page: 'https://www.romdig.net/',
            git: 'https://github.com/iialexandru/ROMDIG---FE'
        },        
        {
            title: 'FIICODE 2022, Stage1 (Subdomain)',
            description: 'The website for the moderators of the ROMDIG site (see previous project), all of them assigned to their city/village/county (they cannot access other location\'s content), which includes the moderation of the posts, comments, account validation requests, people\'s accounts, of the other moderators (if you are a county moderator you can manage the moderators in your county), statistics.',
            image: '/assets/images/DashboardRomdig.png',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['NextJS', 'Google Cloud Platform'],
            page: 'https://dashboard.romdig.net/',
            git: 'https://github.com/iialexandru/ROMDIG_subdomain'
        },        
        {
            title: 'FIICODE 2022 Stage 2 - 24hr hackathon (Web App)',
            description: 'A website through which you can check the location of your kids, and other kids you are assigned. You can make other people too responsible for your kids. You get notifications when your child gets into a restricted area set by you with the help of the Google Maps API. This a 2-part project, see the next one for full understanding. (Unfortunately, the site doesn\'t fully work because I would have to expose my Google API Key, due to not having a dedicated server, with a stable ip. Hence, a video is provided instead.)',
            image: '/assets/images/ChildTracker.png',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['Typescript', 'Google Cloud Platform', 'NextJS'],
            page: 'https://www.youtube.com/watch?v=_63gIg6FXB4&ab_channel=Fiils',
            git: 'https://github.com/iialexandru/hackathon-fiicode2022-fe'
        },
        {
            title: 'FIICODE 2022 Stage 2 - 24hr hackathon (React Native App)',
            description: 'The app must be installed on the person\'s phone you want to track and with the help of a QR code, which can be scanned only once, you have access to the child\'s location whenever the app is in foreground.',
            image: '/assets/images/ChildTrackerApp.png',
            date: '2021/05',
            type: 'FIICODE 2022',
            technologies: ['Typescript', 'React Native (Expo)'],
            page: 'https://www.youtube.com/watch?v=_63gIg6FXB4&ab_channel=Fiils',
            git: 'https://github.com/iialexandru/MOBILE-HACKATHON'
        },
        {
            title: 'Weather App',
            description: 'A small weather app, done with NextJS, in which you can select certain cities to check their weather (all the data is random, created with react context). The repo, unfortunately, is private and it is not under my control.',
            image: '/assets/images/WeatherApp.png',
            date: '2021/05',
            type: 'Internship 2022',
            technologies: ['Typescript', 'NextJS'],
            page: 'https://weather-app-dun-zeta.vercel.app/',
            git: '/'
        },
        {
            title: 'Messaging Website',
            description: 'A messaging website throgh which you can talk to your friends in real time (SocketIO), with notifications, ability to send images. Also, to be able to chat to them, you have to add them as friends, being able, at the same time, to unfriend or block them.',
            image: '/assets/images/MessagingWebApp.png',
            date: '2021/05',
            type: 'Internship 2022',
            technologies: ['Typescript', 'Socket.io', 'Redux', 'ReactJS'],
            page: 'https://messaging-app-blue.vercel.app/',
            git: 'https://github.com/iialexandru/MessagingApp'
        },
        {
            title: 'Chatting Application',
            description: 'A remastered application version of the messaging website, in which I had to implement 4 websites (communicating with the app with signals), done by 4 of my colleagues from the 2022 internship, so that you can have a website. At the same time, it has all the options available in the website version, but improved.',
            image: '/assets/images/MessagingApp.jpg',
            date: '2021/05',
            type: 'Internship 2022',
            technologies: ['Typescript', 'React Native', 'Redux', 'Socket.io'],
            page: 'https://mega.nz/file/ZR1TjDhJ#2Z7yKi-IugV3ePB2cfwbdsaMla011tzZlhBh0rnIklo',
            git: 'https://github.com/Stellar-Intern-Programme/SWGMMMA'
        },
    )
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