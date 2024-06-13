import { useRef } from 'react'
import styles from '../styles/navbar.module.css'
import { useState } from 'react'

const Navbar = () => {
  // menu
  const menuRef = useRef()
  const [show, setShow] = useState(false)

  console.log(show)

  // hamburger
  const hamburgerRef = useRef()

  // hamburger bars
  const firstBar = useRef()
  const secondBar = useRef()
  const thirdBar = useRef()

  function openMenu(e) {
    setShow((prev) => !prev)
  }

  return (
    <section className='container'>
      <div className={styles.navbar}>
        {/* Logo */}
        <h1>Codifyers</h1>

        {/* Nav Items*/}

        <ul
          ref={menuRef}
          className={`${styles.nav__items} ${show ? styles.open__menu : ''}`}
        >
          <li onClick={openMenu}>
            <a href='#'>Work</a>
          </li>
          <li onClick={openMenu}>
            <a href='#services'>Services</a>
          </li>
          <li onClick={openMenu}>
            <a href='#'>About</a>
          </li>

          {/* cta */}
          <button className={styles.touch} onClick={openMenu}>
            Lets Connect
          </button>
        </ul>

        {/* Hamburger */}
        {show ? (
          <a
            href='#'
            onClick={openMenu}
            className={styles.hamburger__toggle}
            ref={hamburgerRef}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='#fff'
              width={40}
              height={40}
            >
              <path
                fill='#fff'
                d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
              ></path>
            </svg>
          </a>
        ) : (
          <a
            href='#'
            ref={hamburgerRef}
            className={styles.hamburger__toggle}
            onClick={openMenu}
          >
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                ref={firstBar}
                x='6'
                y='10'
                width='28'
                height='4'
                fill='#fee715'
                className={styles.burger__top}
              />
              <rect
                ref={secondBar}
                x='6'
                y='18'
                width='28'
                height='4'
                fill='white'
                className={styles.burger__mid}
              />
              <rect
                ref={thirdBar}
                x='6'
                y='26'
                width='28'
                height='4'
                fill='#fee715'
                className={styles.burger__bottom}
              />
            </svg>
          </a>
        )}
      </div>
    </section>
  )
}

export default Navbar
