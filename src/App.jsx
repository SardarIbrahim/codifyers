import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Form from './components/Form'

import 'css-doodle'
import './App.css'
import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <section className='bg-gradient'>
        <Navbar />
        <Hero />
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
