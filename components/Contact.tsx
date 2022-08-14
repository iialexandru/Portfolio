import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import styles from '../styles/scss/Contact.module.scss';

const Contact = () => {

    const { ref, inView, entry } = useInView({
        threshold: .4,
      });

    return (
        <div className={styles.container} id='contact'>

        </div>
    )
}

export default Contact;