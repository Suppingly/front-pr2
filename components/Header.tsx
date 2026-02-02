import headerImg1 from '../assets/cart.png'
import headerImg2 from '../assets/search.png'
import headerImg3 from '../assets/menu.png'

function Header() {
  return (
    <>
      <div className="headerContainer">
        <div className="headerFiller1"/>
        <div className="headerItems">
          <a href="" className="headerItem" id='selected'>Home V</a>
          <a href="" className="headerItem">Pages V</a>
          <a href="" className="headerItem">Blog V</a>
          <a href="" className="headerItem">Portfolio V</a>
          <a href="" className="headerItem">Shop V</a>
          <a href="" className="headerItem">Contact V</a>
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