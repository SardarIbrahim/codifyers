import styles from '../styles/about.module.css'

const About = () => {
  return (
    <section className={styles.about__container}>
      <div className={`${styles.about__info} container`}>
        <p>
          At Codifyers, we believe in the power of technology to drive
          innovation and enhance businesses. Codifyers is a dynamic software
          agency dedicated to delivering cutting-edge solutions in web
          development, UI/UX design, and cloud services. With a team of
          passionate and experienced professionals, we are committed to helping
          our clients harness the full potential of technology to achieve their
          goals.
        </p>

        <h1>OUR MISSION</h1>

        {/* ripple */}
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
          <circle
            fill='none'
            strokeOpacity='1'
            stroke='#FEE715'
            strokeWidth='.5'
            cx='100'
            cy='100'
            r='0'
          >
            <animate
              attributeName='r'
              calcMode='spline'
              dur='2'
              values='1;80'
              keyTimes='0;1'
              keySplines='0 .2 .5 1'
              repeatCount='indefinite'
            ></animate>
            <animate
              attributeName='stroke-width'
              calcMode='spline'
              dur='2'
              values='0;25'
              keyTimes='0;1'
              keySplines='0 .2 .5 1'
              repeatCount='indefinite'
            ></animate>
            <animate
              attributeName='stroke-opacity'
              calcMode='spline'
              dur='2'
              values='1;0'
              keyTimes='0;1'
              keySplines='0 .2 .5 1'
              repeatCount='indefinite'
            ></animate>
          </circle>
        </svg>
      </div>
    </section>
  )
}

export default About
