import shape1 from '../../assets/shape (1).png'
import shape2 from '../../assets/shape (2).png'
import womanImg from '../../assets/ivan-kazlouskij-y-qi1eyc_34-unsplash 1.png'
import './About.css'

function AboutPage(){
  return (
    <>
      <div className='aboutContainer'>
        <div className="aboutTitle">О нас</div>
        <h1 className="aboutText">
          Мы Создаем Цифровую Торговую Площадку Бизнес-Агентств Мирового Класса
        </h1>
        <div className='aboutStats'>
          <div className="aboutInfo">
            <div className="aboutStat">
              <div className="aboutStatN">300+</div>
              <div className="aboutStatInfo">Рабочих людей</div>
            </div>
            <div className="aboutStat">
              <div className="aboutStatN">20+</div>
              <div className="aboutStatInfo">Офисов в Мире</div>
            </div>
          </div>
          <div className="aboutMain">
            <div className="aboutSvgs">
              <img src={shape2} alt='shape' className='aboutSvg1'/>
              <img src={shape1} alt='shape' className='aboutSvg2'/>
              <img 
                src={womanImg}
                alt="Woman with flowers"
                className="aboutImg"/>
            </div>
            <div className="aboutMainText">
              <p className="aboutTextInside">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
              <p className="aboutTextInside">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <div className="aboutBtnCon">
                <button className="aboutBtn">
                  Узнать больше
                  <div className="btnCir"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutPage