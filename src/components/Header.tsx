import headerImg1 from '../assets/cart.png'
import headerImg2 from '../assets/search.png'
import headerImg3 from '../assets/menu.png'

function Header() {
  return (
    <>
      <div className="headerContainer">
        <div className="headerFiller1"/>
        <div className="headerItems">
          <a href="" className="headerItem" id='selected'>Главная V</a>
          <a href="" className="headerItem">Страницы V</a>
          <a href="" className="headerItem">Блог V</a>
          <a href="" className="headerItem">Портфолио V</a>
          <a href="" className="headerItem">Магазин V</a>
          <a href="" className="headerItem">Контакты V</a>
        </div>
        <div className="headerFiller2"/>
        <div className="headerButtons">
          <button className="headerButton"><img src={headerImg1} alt="" className="HeaderImg"/></button>
          <button className="headerButton"><img src={headerImg2} alt="" className="HeaderImg"/></button>
          <button className="headerButton"><img src={headerImg3} alt="" className="HeaderImg"/></button>
        </div>
      </div>
    </>
  )
}
export default Header