import Image from 'next/image';
import { useState, useEffect } from 'react'
import { FC } from 'react'

import styles from '../styles/scss/MobileNav.module.scss'

interface Item { 
    name: string;
    url: string;
    href: string;
    multi: number;
}
const MobileNav = () => {
    const [ menu, setMenu ] = useState<boolean | null>(null) 
    const [ hideMenu, setHideMenu ] = useState(false)
    
    const Item: FC<Item> = ({ name, url, href, multi }) => {
        const [ anim, setAnim] = useState(false)
        
        useEffect(() => {
            if(menu) {
                const openTimer = setTimeout(() => setAnim(true), multi * 200)
                return () => {
                    clearTimeout(openTimer)
                }
            } else if (!menu && menu !== null) {
                    const closeTimer = setTimeout(() => setAnim(false), (4 - multi) * 200)
                    return () => {
                        clearTimeout(closeTimer)
                    }
                }
        }, [menu])


        return (
            <div style={{ opacity: (!anim || menu === null) ? 0 : 'inherit' }} className={`${styles.item} ${menu === null ? '' : (menu ? styles.open_item : styles.close_item)}`}>
                <Image src={url} width={40} height={40} />
                <a className={menu !== null ? ((menu && anim) ? styles.appear_name : styles.disappear_name) : ''} href={`#${href}`}>{name}</a> 
            </div>
        )
    }

    useEffect(() => {
        if(!menu) {
            const timer = setTimeout(() => setHideMenu(true), 800)
            return () => {
                clearTimeout(timer)
            }
        } else if (menu) {
            setHideMenu(false)
        }
    }, [menu])

    return (
        <div className={styles.whole_container}>
                <div className={`${styles.container} ${hideMenu ? styles.closed_menu : ''}`}>
                    <Item key={1} multi={3} name='About me' href='aboutme' url='https://res.cloudinary.com/multimediarog/image/upload/v1654592359/Portfolio/information-6255_3_sngkcd.svg' />
                    <Item key={2} multi={2} name='Technologies' href='technologies' url='https://res.cloudinary.com/multimediarog/image/upload/v1654592620/Portfolio/database-server-2375_2_ldgsdd.svg' />
                    <Item key={3} multi={1} name='Projects' href='projects' url='https://res.cloudinary.com/multimediarog/image/upload/v1654592591/Portfolio/web-search-8943_1_allc3h.svg' />
                    <Item key={4} multi={0} name='Contact' href='contact' url='https://res.cloudinary.com/multimediarog/image/upload/v1654592588/Portfolio/mail-hosting-2356_1_wpxg35.svg' />
                </div>
            <div className={`${styles.circled_button} ${menu ? styles.clicked : ''}`} onClick={() => setMenu(menu => !menu)}></div>
        </div>
    )
}

export default MobileNav;