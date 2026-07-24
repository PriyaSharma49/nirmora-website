import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Industries from './components/Industries.jsx'
import Trust from './components/Trust.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Engine from './components/Engine.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import Portfolio from './components/Portfolio.jsx'
import SocialWall from './components/SocialWall.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import CTABand from './components/CTABand.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Engine />
      <Industries />
      <Trust />
      <About />
      <WhyUs />
      <Process />
      <Portfolio />
      <SocialWall />
      <Testimonials />
      <FAQ />
      <CTABand />
      <Contact />
      <Footer />
    </div>
  )
}
