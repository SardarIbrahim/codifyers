import styles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <section className={` ${styles.hero__container} container`}>
      {/* left */}

      <div className={styles.left__hero}>
        <h4>Product Growth Solution in Single Platform</h4>

        <h1>Give Your Businesses a</h1>
        <br />
        <h1>Digital Presence</h1>

        <p>Empower your ideas and turn ideas into great reality.</p>

        {/* cta */}
        <a href='#form'>Lets go 🚀</a>
      </div>

      {/* right */}
      <div className={styles.right__hero}>
        <css-doodle className={styles.doodle}>
          {`
@grid: 14 / 100%;

@random {
  border-left: 1px solid #5d81bc;
}
@random {
  border-top: 1px solid #5d81bc;
}
@random(.25) {
  background: linear-gradient(
    @p(#fff, tan, #5d81bc), @lp
  )
  50% / @r(60%) @lr
  no-repeat;
}
@random {
  filter: drop-shadow(0 0 10px #fff);
}


      animation: test infinite @r(100s, 150s) linear; 
      @keyframes test { 0%{
      transform: translate3d(0,0,0) } 50%{ transform: translate3d(@r(-500%,
      1000%), @r(-500%, 1500%), 0) } 100%{ transform: translate3d(0,0,0) } }
  `}
        </css-doodle>
      </div>
    </section>
  )
}

export default Hero
