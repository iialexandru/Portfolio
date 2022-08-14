import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import styles from '../styles/scss/AboutMe.module.scss';

const AboutMe = () => {

    const { ref, inView, entry } = useInView({
        threshold: .4,
        triggerOnce: true
      });

    return (
        <div className={styles.container} id='aboutme'>
            <div className={styles.section_name}>
                <span>About Me</span>
            </div>
            <div className={styles.about_paragraph} ref={ref}>
                <p className={inView ? styles.fade_left_to_right_text : ''}>I&apos;m a young 16 year old student, who really has a big passion about programming. I&apos;ve started coding in 2019 for the first time in HTML, learning step by step everything about it
                and since then I&apos;ve only evolved, managing...</p>

                <div style={{ display: 'flex', justifyContent: 'center' }} className={inView ? styles.image_fade : ''}>
                    <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1655146804/Portfolio/274231930_1099182287294103_6993847869180623425_n_2_uwwk2p.jpg' width={280} height={280} />
                </div>

                <p className={inView ? styles.fade_right_to_left_text : ''}>...to learn a ton of new stuff and start working with some of the newest technologies right now, some of them
                include ReactJS together with NextJS, but more about that in the next section.</p>
            </div>
        </div>
    )
}

export default AboutMe;
