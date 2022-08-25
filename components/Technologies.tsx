import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import styles from '../styles/scss/Technologies.module.scss';
import useWindowSize from '../utils/useWindowSize'


const Technologies = () => {
    const [width] = useWindowSize()

    const { ref, inView } = useInView({
        threshold: width < 1000 ? .1 : .2,
        triggerOnce: true

      });


    return (
        <div ref={ref} className={styles.container} id='technologies'>
            <div className={styles.decoration_ball_inv}></div>
            <div className={styles.ball_decoration}></div>
            <div className={styles.dividing_div}>
                    {width <= 1000 && 
                        <div className={`${styles.section_name} ${inView ? styles.sn_before : ''}`}>
                            <span style={{opacity: 0, transition: 'opacity 1s'}} className={inView ? styles.fade_in : ''}>Technologies</span>
                        </div>
                    }
                <div className={`${styles.full_circle} ${inView ? styles.put_in_place : ''}`}>
                    <div className={styles.imgs_circle}>
                        <Image src={'/assets/images/ReactJS.svg'} height={50} width={50} alt='ReactJS' />
                        <div style={{display: 'block', bottom: 30, position: 'relative'}}>
                            <Image src={'/assets/images/ReactNative.svg'} height={50} width={50} alt='ReactNative' />
                        </div>
                        <div style={{display: 'block', bottom: 30, position: 'relative'}}>
                            <Image src={'/assets/images/GCP.png'} width={50} height={50} alt='GCP' />
                        </div>
                        <Image src={'/assets/images/Redux.svg'} width={50} height={50} alt='Redux' />
                    </div>

                    <div className={styles.circle_tech}>
                        <Image src={'/assets/images/ClientBG.svg'} width={200} height={200} alt='ClientBG' />
                    </div>

                    <div className={styles.imgs_circle}>
                        <Image src={'/assets/images/NextJS.svg'} width={50} height={50} alt='NextJS' />
                        <div style={{display: 'block', top: 30, position: 'relative'}}>
                            <Image src={'/assets/images/Typescript.svg'} width={50} height={50} alt='Typescript' />
                        </div>
                        <div style={{display: 'block', top: 25, position: 'relative'}}>
                            <Image src={'/assets/images/GulpJS.svg'} width={23} height={50} alt='GulpJS' />
                        </div>
                        <Image src={'/assets/images/SocketIO.svg'} width={50} height={50} alt='SocketIO' />
                    </div>
                </div>

                <div className={styles.centered_content}>
                    {width > 1000 && 
                        <div className={`${styles.section_name} ${inView ? styles.sn_before : ''}`}>
                            <span style={{opacity: 0, transition: 'opacity 1s'}} className={inView ? styles.fade_in : ''}>Technologies</span>
                        </div>
                    }
                    <div className={`${styles.lists} ${inView ? styles.fade_in : ''}`}>
                        <ul>
                            <h2>Frontend Development</h2>
                            <li>HTML5, CSS3, Javascript</li>
                            <li>Typescript</li>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>React Native</li>
                            <li>Socket.io</li>
                            <li>Gulp</li>
                            <li>Redux</li>
                        </ul>
                        <ul>
                            <h2>Backend Development</h2>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>Cloudinary API</li>
                            <li>MongoDB, Mongoose</li>
                            <li>JWT</li>
                            <li>Socket.io</li>
                            <li>Redis</li>
                        </ul>
                        <ul>
                            <h2>Tools</h2>
                            <li>Git, GitHub</li>
                            <li>NPM, Yarn</li>
                            <li>Google Cloud Platform</li>
                            <li>Cloudinary</li>
                            <li>Trello</li>
                        </ul>
                        {width > 550 && <Image style={{position: 'relative', bottom: 100}} src={'/assets/images/FillImage.svg'} width={250} height={200} layout={'fixed'} alt='FillImage' /> }
                    </div>
                </div>

                <div className={`${styles.full_circle} ${inView ? styles.put_in_place : ''}`}>
                    <div className={styles.imgs_circle}>
                        <Image src={'/assets/images/Cloudinary.svg'} height={50} width={50} alt='Cloudinary' />
                        <div style={{display: 'block', bottom: 30, position: 'relative'}}>
                            <Image src={'/assets/images/MongoDB.svg'} height={50} width={50} alt='MongoDB' />
                        </div>
                        <div style={{display: 'block', bottom: 30, position: 'relative'}}>
                            <Image src={'/assets/images/Express.svg'} width={50} height={50} alt='Express' />
                        </div>
                        <Image src={'/assets/images/JWT.svg'} width={50} height={50} alt='JWT' />
                    </div>
                    <div className={styles.circle_tech}>
                        <Image src={'/assets/images/ServerBG.svg'} width={200} height={200} alt='ServerBG' />
                    </div>
                    <div className={styles.imgs_circle}>
                        <Image src={'/assets/images/NPM.svg'} width={50} height={50} alt='NPM' />
                        <div style={{display: 'block', top: 35, position: 'relative', marginLeft: 7}}>
                            <Image src={'/assets/images/Redis.svg'} width={50} height={50} alt='Redis' />
                        </div>
                        <div style={{display: 'block', top: 30, position: 'relative'}}>
                            <Image src={'/assets/images/SocketIO.svg'} width={50} height={50} alt='SocketIO' />
                        </div>
                        <Image src={'/assets/images/NodeJS.svg'} width={50} height={50} alt='NodeJS' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;
