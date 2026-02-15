import peopleImg from '../../assets/image 26.png'
import arrowImg1 from '../../assets/arrow (1).png'
import arrowImg from '../../assets/arrow.png'
import './Portfolio.css'

function PortfolioPage(){
  return (
    <>
      <div className="portfolioContainer">
        <div className="portfolioTop">
          <div className='portfolioTopCont'>
            <div className="portfolio">Портфолио</div>
            <h1 className="portfolioMainText">
              Мы создаем места, которые соединяют, поддерживают и вдохновляют
            </h1>
          </div>
          <div className='portfolioTopCont'>
            <p className="portfolioTopText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="portfolioBtnCon">
            <button className="portfolioBtn">
              Посмотреть все портфолио
              <div className="btnCir"/>
            </button>
            </div>
          </div>
        </div>
        <div className="portfolioLinks">
          <div className="portfolioLink">
            <div className='portfolioLinkLeft'>
              <div className="portfolioLinkLText">
                <span className="portfolioLinkL">01.</span>
              </div>
              <h3 className="portfolioLinkText">
                Веб и мобильная разработка
              </h3>
            </div>
            <button className='portfolioLinkRight'>
              <img src={arrowImg} alt='->'/>
            </button>
          </div>

          <div className="portfolioLink">
            <div className='portfolioLinkLeft'>
              <div className="portfolioLinkLText">
                <span className="portfolioLinkL">02.</span>
              </div>
              <h3 className="portfolioLinkText">
                Интерактивный дизайн
              </h3>
            </div>
            <button className='portfolioLinkRight'>
              <img src={arrowImg1} alt='->' className='portfolioArrImg'/>
            </button>
          </div>

          <div className="portfolioLink">
            <div className='portfolioLinkLeft'>
              <div className="portfolioLinkLText">
                <span className="portfolioLinkL">03.</span>
              </div>
              <h3 className="portfolioLinkText">
                Цифровой маркетинг
              </h3>
            </div>
            <button className='portfolioLinkRight'>
              <img src={arrowImg} alt='->'/>
            </button>
          </div>

          <div className="portfolioLink">
            <div className='portfolioLinkLeft'>
              <div className="portfolioLinkLText">
                <span className="portfolioLinkL">04.</span>
              </div>
              <h3 className="portfolioLinkText">
                Брендинг и стратегия
              </h3>
            </div>
            <button className='portfolioLinkRight'>
              <img src={arrowImg} alt='->'/>
            </button>
          </div>
        </div>

        <div className="portfolioImgCon">
          <img src={peopleImg} alt="Team collaboration" className="portfolioImg"/>
        </div>
      </div>
    </>
  )
}
export default PortfolioPage