import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import useWindowSize from '../utils/useWindowSize';
import styles from '../styles/scss/AboutMe.module.scss';
import {NoSSR} from '../utils/NoSsr'


const AboutMe = () => {
    const [ width ] = useWindowSize()

    const { ref, inView } = useInView({
        threshold: .3,
        triggerOnce: true
      });


    return (
        <NoSSR fallback={<div style={{height: '100vh', width: '100vw'}}></div>}>
            <div className={styles.container} ref={ref} id='aboutme'>
                <div className={styles.certified_logo}>
                    <Image src={'/assets/images/CertifiedLogo.png'} width={width < 800 ? 75 : 100} height={width < 800 ? 75 : 100} alt='Certified Logo' priority/>
                </div>
                <div className={styles.about_me_text}>
                    <h2 className={`${inView ? styles.am_head : ''}`}>Something about me...</h2>
                    <div className={styles.line_between}></div>
                    <p style={{opacity: !inView ? 0 : 1}}>
                        I am 17 year old young student with a really big interest in web development. I first took web development as a hobby, but afterwards it became 
                        a more serious way of speding my time. Despite my age, I&apos;ve had the opportunity to work in a professional environment, in a team and even 
                        lead a few other fellow web development enthusiasts during an internship. Throughout the years, I also was able to work with many technologies, 
                        creating many diverse projects with them.


                    </p>
                </div>
                <div className={`${styles.image_of_self} ${inView ? styles.activate_animation : '' }`}>
                    <div className={styles.blue_back}></div>
                    <div className={styles.purple_back}></div>
                    <Image src={'/assets/images/ImageOfMyself.jpg'} width={width < 800 ? 225 : width < 1000 ? 275 : 350}  height={width < 800 ? 225 : width < 1000 ? 275 : 350} alt='Image Of Myself' priority/>
                </div>
                <div className={styles.ball_decoration}></div>
                <div className={styles.decoration_ball_inv}></div>
            </div>
        </NoSSR>
    )
}

export default AboutMe;
