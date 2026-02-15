import { useState } from 'react'
import './Header.css'
import headerImg1 from '../../../assets/cart.png'
import headerImg2 from '../../../assets/search.png'
import headerImg3 from '../../../assets/menu.png'

const NAV_ITEMS: { id: string; label: string }[] = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'Страницы' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'blog', label: 'Блог' },
  { id: 'contact', label: 'Контакты' },
]

interface HeaderProps {
  activeSection?: string
  scrollToHero: () => void
  scrollToAbout: () => void
  scrollToPortfolio: () => void
  scrollToBlog: () => void
  scrollToContact: () => void
}

function Header({ activeSection = '', scrollToHero, scrollToAbout, scrollToPortfolio, scrollToBlog, scrollToContact }: HeaderProps) {
  const scrollHandlers: Record<string, () => void> = {
    hero: scrollToHero,
    about: scrollToAbout,
    portfolio: scrollToPortfolio,
    blog: scrollToBlog,
    contact: scrollToContact,
  }
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <div className="headerContainer">
        <div className="headerFiller1"/>
        <div className="headerItems">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className="headerItem"
              id={activeSection === id ? 'selected' : undefined}
              onClick={scrollHandlers[id]}
            >
              {label} V
            </button>
          ))}
        </div>
        <div className="headerFiller2"/>
        <div className="headerButtons">
          <button className="headerButton" type="button" aria-label="Корзина">
            <img src={headerImg1} alt="" className="HeaderImg"/>
          </button>
          <button
            className="headerButton"
            type="button"
            aria-label="Поиск"
            onClick={() => setSearchOpen(true)}
          >
            <img src={headerImg2} alt="" className="HeaderImg"/>
          </button>
          <button className="headerButton" type="button" aria-label="Меню">
            <img src={headerImg3} alt="" className="HeaderImg"/>
          </button>
        </div>
      </div>

      <div className={`search-overlay ${searchOpen ? 'is-open' : ''}`} aria-hidden={!searchOpen}>
        <button
          type="button"
          className="search-close"
          onClick={() => setSearchOpen(false)}
          aria-label="Закрыть поиск"
        >
          ×
        </button>
        <input
          type="search"
          placeholder="Поиск..."
          autoFocus={searchOpen}
          onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
        />
      </div>
    </>
  )
}
export default Header
