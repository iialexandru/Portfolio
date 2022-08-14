import type { FC } from 'react'
import Image from 'next/image'

import styles from '../styles/scss/Projects.module.scss';


interface Events {
    events?: {
        numbered: number;
        title: string;
        date: string;
        text: string;
        image: string;
        video?: string;
    }[]
}

interface Event {
    numbered: number;
    title: string;
    date: string;
    text: string;
    image: string;
    video?: string;
}

const HistoryLine: FC<Events> = ({ events }) => {

    return (
        <div className={styles.line} style={{ minWidth: events ? `calc(${events[events.length - 1].numbered} * 2vw + 40vw)` : 'inherit' }}>
            {events &&
                <>
                    {events.map((event: Event, key: number) => {
                        return (
                            <div className={styles.absolute_positioning_container} key={key} style={{ top: key % 2 === 0 ?  'calc(-35vh - 4.5px)' : -4.5, left: `calc(${event.numbered} * 2vw)` }}  >
                                {key % 2 === 0 &&
                                    <div className={`${styles.event_container} ${styles.triangle_down}`} style={{ top: '-8vh' }}>
                                        <Image src={event.image} width={150} height={150} />
                                    </div>
                                }
                                <div key={key} className={styles.event_circle} date-text={event.date}></div>
                                {key % 2 !== 0 &&
                                    <div className={`${styles.event_container} ${styles.triangle_up}`} style={{ top: '8vh' }}>
                                        <div className={styles.image}>
                                            <Image src={event.image} width={300} height={200} />
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </>
            }
            <div className={styles.final_text}>More to come...</div>
        </div>
    )
}

export default HistoryLine;
