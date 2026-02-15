import { useEffect, useState } from 'react'
import HomePage from './routes/HomePage'
import './App.css'

const SECTION_IDS = ['hero', 'about', 'portfolio', 'team', 'testimonials', 'blog', 'contact', 'cta'] as const
type SectionId = typeof SECTION_IDS[number]

function App() {
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const onScroll = () => {
      let current: SectionId = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <HomePage activeSection={activeSection} />
}

export default App
