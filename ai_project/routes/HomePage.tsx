import { useRef, type RefObject } from 'react'
import Header from '../components/sections/Header/Header'
import './HomePage.css'
import Hero from '../components/sections/Hero/Hero'
import Partners from '../components/sections/Partners/Partners'
import About from '../components/sections/About/About'
import Services from '../components/sections/Services/Services'
import Portfolio from '../components/sections/Portfolio/Portfolio'
import Team from '../components/sections/Team/Team'
import Testimonials from '../components/sections/Testimonials/Testimonials'
import Blog from '../components/sections/Blog/Blog'
import CTA from '../components/sections/CTA/CTA'
import Contact from '../components/sections/Contact/Contact'

interface HomePageProps {
  activeSection: string
}

function HomePage({ activeSection }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToHero = () => scrollToSection(heroRef)
  const scrollToAbout = () => scrollToSection(aboutRef)
  const scrollToPortfolio = () => scrollToSection(portfolioRef)
  const scrollToBlog = () => scrollToSection(blogRef)
  const scrollToContact = () => scrollToSection(contactRef)

  return (
    <div className="App">
      <Header 
        activeSection={activeSection}
        scrollToHero={scrollToHero}
        scrollToAbout={scrollToAbout}
        scrollToPortfolio={scrollToPortfolio}
        scrollToBlog={scrollToBlog}
        scrollToContact={scrollToContact}
      />
      
      <Hero ref={heroRef} scrollToAbout={scrollToAbout} scrollToBlog={scrollToBlog} />

      {/* Блок с общим фоном из 4 полос (кроме Hero и Contact) */}
      <div className="page-stripes-wrapper">
        <Partners />

        <About ref={aboutRef} scrollToPortfolio={scrollToPortfolio} />

        <Services />

        <Portfolio ref={portfolioRef} scrollToSelf={scrollToPortfolio} />

        <Team />

        <Testimonials />

        <div ref={blogRef}>
          <Blog />
        </div>

        <CTA scrollToContact={scrollToContact} />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  )
}

export default HomePage
