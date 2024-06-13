import stack from '../assets/stack.svg'
import pen from '../assets/pen.svg'
import web from '../assets/web.svg'
import mobile from '../assets/mobile.svg'
import cloud from '../assets/cloud.svg'
import custom from '../assets/custom.svg'

import styles from '../styles/services.module.css'

const Services = () => {
  return (
    <section id='services' className='container'>
      <div className={styles.services__info}>
        <h1>We Just Don&apos;t Build Solutions,</h1>
        <br />
        <h1>
          We Craft <span>Experiences</span>{' '}
        </h1>
      </div>

      {/* cards */}

      <div className={styles.cards__container}>
        {/* 1st */}
        <div className={styles.card__item}>
          {/* image */}
          <div className={styles.cardimg__wrapper}>
            <img src={stack} alt='website development' />
          </div>

          {/* card title */}
          <h1>Webflow Development</h1>
          <p>
            Webflow magic turns visions into reality, when no code is preferred
            and the best part? You are in charge of your content.
          </p>
        </div>

        {/* 2nd */}
        <div className={styles.card__item}>
          {/* image */}
          <div className={styles.cardimg__wrapper}>
            <img src={pen} alt='UI/UX Design' />
          </div>

          {/* card title */}
          <h1>UI/UX Design</h1>
          <p>
            We craft pixel perfect designs with Figma, designing experiences
            that captivate and convert. No clunky layouts just smooth flows that
            guide your visitors.
          </p>
        </div>

        {/* 3rd */}
        <div className={styles.card__item}>
          {/* image */}
          <div className={styles.cardimg__wrapper}>
            <img src={web} alt='Web Development' />
          </div>

          {/* card title */}
          <h1>Web Development</h1>
          <p>
            We help convert your UI designs into real websites using latest
            technologies like Tailwind, React and NextJS, so that you can focus
            on growing your business.
          </p>
        </div>

        {/* 4th */}
        <div className={styles.card__item}>
          {/* image */}
          <div className={styles.cardimg__wrapper}>
            <img src={mobile} alt='App Development' />
          </div>

          {/* card title */}
          <h1>App Development</h1>
          <p>
            We help convert your UI designs into real websites using latest
            technologies like Tailwind, React and NextJS, so that you can focus
            on growing your business.
          </p>
        </div>

        {/* 5th */}
        <div className={styles.card__item}>
          {/* image */}
          <div className={styles.cardimg__wrapper}>
            <img src={cloud} alt='Cloud Development' />
          </div>

          {/* card title */}
          <h1>Cloud Services</h1>
          <p>
            Our approach to addressing contemporary business problems involves
            using cloud-native methods for developing enterprise-level
            applications and services.
          </p>
        </div>

        {/* 6th */}
        <div className={styles.card__item}>
          {/* image */}
          <div className={styles.cardimg__wrapper}>
            <img src={custom} alt='Custom Development' />
          </div>

          {/* card title */}
          <h1>Custom Development</h1>
          <p>
            We customize web, mobile, and desktop software solutions to match
            your business procedures in every industry.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
