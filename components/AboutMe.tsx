import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import styles from '../styles/scss/AboutMe.module.scss';

const AboutMe = () => {

    const { ref, inView, entry } = useInView({
        threshold: .4,
        triggerOnce: true
      });

    return (
        <div className={styles.container} ref={ref} id='aboutme'>
            <div className={styles.about_me_text}>
                <h2 className={`${inView ? styles.am_head : ''} ${inView ? styles.fade_in_anim : ''}`}>Something about me...</h2>
                <p className={inView ? styles.fade_in_anim : ''}>I&apos;m a 17 year old student that has a big passion for everything about web development and looking forward to pursuing a career in web development.</p>
            </div>
            <div className={`${styles.image_of_self} ${inView ? styles.activate_animation : '' }`}>
                <div className={styles.blue_back}></div>
                <div className={styles.purple_back}></div>
                <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1655146804/Portfolio/274231930_1099182287294103_6993847869180623425_n_2_uwwk2p.jpg' width={400} height={400} />
            </div>
            <div className={styles.ball_decoration}></div>
            <div className={styles.decoration_ball_inv}></div>
        </div>
    )
}

export default AboutMe;
