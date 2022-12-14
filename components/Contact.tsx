import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/scss/Contact.module.scss';
import useWindowSize from '../utils/useWindowSize'


const Contact = () => {
    const [width] = useWindowSize()

    const { ref, inView, entry } = useInView({
        threshold: .4,
      });

    return (
        <div className={styles.container} id='contact'>
            <div className={styles.item}>
                <h1>CV</h1>
                <div className={styles.cv_cont}>
                    <Link href='https://resume.io/r/iUgCnp4Fb'>
                        <a target='_blank'>
                            Check it out
                        </a>
                    </Link>
                    <button>
                        <a id='download' href='/assets/files/CV.pdf' download>Download my CV</a>
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <h1 style={{marginBottom: 0}}>Get in touch</h1>
                <div className={styles.flex_logo}>
                    <abbr title='Alexandru Ipatov'>
                        <Link href='https://www.linkedin.com/in/alexandru-ipatov-869a3622b/'>
                            <a target='_blank'>
                                <Image src={'/assets/images/LinkedInLogo.svg'} width={50} height={50} alt='LinkedIn' priority/>
                            </a>
                        </Link>
                    </abbr>
                    <abbr title='iialexandru'>
                        <Link href='https://github.com/iialexandru'>
                            <a target='_blank'>
                                <Image src={'/assets/images/GitHubLogo.svg'} width={50} height={50} alt='GitHub' priority/>
                            </a>
                        </Link>
                    </abbr>
                    <abbr title='Ipatov Ioan Alexandru'>
                        <Link href='https://www.facebook.com/ioanalexandru.ipatov.9/'>
                            <a target='_blank'>
                                <Image src={'/assets/images/FacebookLogo.svg'} width={50} height={50} alt='Facebook' priority/>
                            </a>
                        </Link>
                    </abbr>
                </div>
                <div className={styles.email}>
                    <div style={{display: 'block', marginTop: 5}}>
                        <Image src={'/assets/images/MailIcon.svg'} width={width < 320 ? 25 : 30} height={width < 320 ? 20 : 25} alt='Email' priority/>
                    </div>
                    <span>: ioanalexandruipatov12@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;