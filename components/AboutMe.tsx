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
                    <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1660924680/Portfolio/pngwing.com_3_mxugre.png' width={width < 800 ? 75 : 100} height={width < 800 ? 75 : 100} alt='Certified Logo' />
                </div>
                <div className={styles.about_me_text}>
                    <h2 className={`${inView ? styles.am_head : ''}`}>Something about me...</h2>
                    <div className={styles.line_between}></div>
                    <p style={{opacity: !inView ? 0 : 1}}>
                        I&apos;m a 17 year old student that has a big passion for everything about web development. I&apos;ve 
                        started programming a few years ago, only taking it more serious beginning with 2020-2021. In the years in which I&apos;ve been coding, I believe that I managed
                        to learn more and more stuff about programming and web development.     
                    </p>
                </div>
                <div className={`${styles.image_of_self} ${inView ? styles.activate_animation : '' }`}>
                    <div className={styles.blue_back}></div>
                    <div className={styles.purple_back}></div>
                    <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1655146804/Portfolio/274231930_1099182287294103_6993847869180623425_n_2_uwwk2p.jpg' width={width < 800 ? 225 : width < 1000 ? 275 : 350}  height={width < 800 ? 225 : width < 1000 ? 275 : 350} alt='Image Of Myself' />
                </div>
                <div className={styles.ball_decoration}></div>
                <div className={styles.decoration_ball_inv}></div>
            </div>
        </NoSSR>
    )
}

export default AboutMe;
