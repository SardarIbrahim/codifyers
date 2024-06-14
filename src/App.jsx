import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Lenis from '@studio-freight/react-lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Form from './components/Form'

import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'

import 'css-doodle'
import './App.css'

const App = () => {
  // gsap
  useGSAP(() => {
    gsap.to('.overflow', {
      y: -1000,
      duration: 3,
      ease: 'power1',
    })
  })

  return (
    <>
      <section className='bg-gradient'>
        <Navbar />
        <Hero />
        <div className='overflow'></div>
      </section>

      {/* Services */}
      <Services />

      {/* Process */}
      <Process />

      {/* Work */}
      <Work />

      {/* About */}
      <About />

      {/* Form */}
      <Form />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
