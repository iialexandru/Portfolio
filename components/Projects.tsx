import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import styles from '../styles/scss/Projects.module.scss';
import HistoryLine from './HistoryLine'


interface Event {
    numbered: number;
    title: string;
    date: string;
    text: string;
    image: string;
    video?: string;
}

interface Events extends Array<Event>{}


const Projects = () => {

    const { ref, inView, entry } = useInView({
        threshold: .4,
      });

    const events: Events = Array(
        {
            numbered: 0,
            title: 'First time coding having a purpose in mind',
            text: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2019/05'
        },
        {
            numbered: 15,
            title: 'FIICode 2022, Stage I',
            text: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2022/05'
        },
        {
            numbered: 30,
            title: 'FIICode 2022, Stage II (24h long Hackathon)',
            text: 'First I started coding tutorial to learn about web development',
            image: 'https://res.cloudinary.com/multimediarog/image/upload/v1633172445/news/PTQ0MCZoYXNoPTMwNjVkYjIxODEyNjBiZWNlOTk0NGUxZTEyZGVhMDNi.thumb_btudhc.jpg',
            date: '2022/05'
        },
    )

    return (
        <div className={styles.container} id='projects'>
            <HistoryLine 
                events={events}
            />
        </div>
    )
}

export default Projects;