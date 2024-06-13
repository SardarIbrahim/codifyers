import Marquee from 'react-fast-marquee'

import first from '../assets/project-1.jpg'
import second from '../assets/project-2.jpg'
import third from '../assets/project-3.jpg'
import fourth from '../assets/project-4.jpg'

import styles from '../styles/work.module.css'

const Work = () => {
  return (
    <section className={`${styles.work__container} `}>
      <h1>Our Work</h1>
      <Marquee speed={80} pauseOnClick pauseOnHover>
        {/* 1st item */}
        <div className={styles.project}>
          <img src={second} alt='' />
          <a href='#services'>Visit</a>
        </div>

        {/* second item */}

        <div className={styles.project}>
          <img src={first} alt='' />
          <a href='#'>Visit</a>
        </div>

        {/* third item */}
        <div className={styles.project}>
          <img src={third} alt='' />
          <a href='#'>Visit</a>
        </div>

        <div className={styles.project}>
          <img src={fourth} alt='' />
          <a href='#'>Visit</a>
        </div>
      </Marquee>
    </section>
  )
}

export default Work
