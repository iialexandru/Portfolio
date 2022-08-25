import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import styles from '../styles/scss/Technologies.module.scss';
import useWindowSize from '../utils/useWindowSize'


const Technologies = () => {
    const [width] = useWindowSize()

    const { ref, inView } = useInView({
        threshold: .3,
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
                        <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151065/Portfolio/react-2_q655ir.svg'} height={50} width={50} />
                        <div style={{display: 'block', bottom: 30, position: 'relative'}}>
                            <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1660475929/Portfolio/react-native-1_sc1g9a.svg'} height={50} width={50} />
                        </div>
                        <div style={{display: 'block', bottom: 30, position: 'relative'}}>
                            <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151365/Portfolio/apple-icon_tvswuc.png'} width={50} height={50} />
                        </div>
                        <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1660475937/Portfolio/redux_i2v1u0.svg'} width={50} height={50} />
                    </div>

                    <div className={styles.circle_tech}>
                        <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1655150579/Portfolio/undraw_progressive_app_m-9-ms_jgyedp.svg' width={200} height={200} />
                    </div>

                    <div className={styles.imgs_circle}>
                        <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151026/Portfolio/next-js_m4iakr.svg'} width={50} height={50} />
                        <div style={{display: 'block', top: 30, position: 'relative'}}>
                            <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151165/Portfolio/typescript-2_lijm6f.svg'} width={50} height={50} />
                        </div>
                        <div style={{display: 'block', top: 25, position: 'relative'}}>
                            <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151063/Portfolio/gulp_wism5a.svg'} width={23} height={50} />
                        </div>
                        <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1660475974/Portfolio/socket-io_yxlazi.svg'} width={50} height={50} />
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
                        {width > 550 && <Image style={{position: 'relative', bottom: 100}} src={'https://res.cloudinary.com/multimediarog/image/upload/v1655150156/Portfolio/undraw_code_review_re_woeb_iutbzk.svg'} width={250} height={200} layout={'fixed'} /> }
                    </div>
                </div>

                <div className={`${styles.full_circle} ${inView ? styles.put_in_place : ''}`}>
                    <div className={styles.imgs_circle}>
                        <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151389/Portfolio/cloudinary-2_rij5yf.svg'} height={50} width={50} />
                        <div style={{display: 'block', bottom: 30, position: 'relative'}}>
                            <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151201/Portfolio/mongodb-icon-1_phmxdr.svg'} height={50} width={50} />
                        </div>
                        <div style={{display: 'block', bottom: 30, position: 'relative'}}>
                            <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151268/Portfolio/express-109_xm8edu.svg'} width={50} height={50} />
                        </div>
                        <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1655151203/Portfolio/jwt-3_tr5rlv.svg'} width={50} height={50} />
                    </div>
                    <div className={styles.circle_tech}>
                        <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1655150151/Portfolio/undraw_server_cluster_jwwq_egw8q4.svg' width={200} height={200} />
                    </div>
                    <div className={styles.imgs_circle}>
                        <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1660479362/Portfolio/npm-square-red-1_b1adwh.svg'} width={50} height={50} />
                        <div style={{display: 'block', top: 35, position: 'relative', marginLeft: 7}}>
                            <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1660479400/Portfolio/redis_bai71d.svg'} width={50} height={50} />
                        </div>
                        <div style={{display: 'block', top: 30, position: 'relative'}}>
                            <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1660475974/Portfolio/socket-io_yxlazi.svg'} width={50} height={50} />
                        </div>
                        <Image src={'https://res.cloudinary.com/multimediarog/image/upload/v1660833010/Portfolio/nodejs-1_zuaxkn.svg'} width={50} height={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;
