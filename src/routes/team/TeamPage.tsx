import humanImg from '../../assets/image (3).png'
import humanImg1 from '../../assets/image (4).png'
import humanImg2 from '../../assets/image (5).png'
import socialImg from '../../assets/Vector.png'
import socialImg1 from '../../assets/Vector (1).png'
import socialImg2 from '../../assets/Vector (2).png'
import socialImg3 from '../../assets/Vector (3).png'
import dotAcImg from '../../assets/Rectangle 46.png'
import dotImg from '../../assets/Ellipse 19.png'
import arrowImg2 from '../../assets/arrow (2).png'
import arrowImg3 from '../../assets/arrow (3).png'
import './Team.css'

function TeamPage(){
  return (
    <>
      <div className="teamContainer">
        <div className="teamTop">
          <div className='teamLeft'>
            <div className="team">Наша команда</div>
            <h1 className="teamMainText">
              Стройте наше будущее<br/>Увидите членов команды
            </h1>
          </div>
          <div className="teamRight">
            <p className="teamRightText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="buttons">
              <button className="button">
                <img src={arrowImg3} alt="<-" />
              </button>
              <button className="button">
                <img src={arrowImg2} alt="->" />
              </button>
            </div>
          </div>
        </div>
        <div className="teamGrid">
          <div>
            <img src={humanImg} alt="Aimee Calderon" className="teamImg"/>
            <div className="teamInfo">
              <h3 className="teamName">Aimee Calderon</h3>
              <p className="teamJob">Веб-разработчик</p>
            </div>
          </div>
          <div>
            <div className='relative'>
              <img src={humanImg1} alt="Raymond Horn" className="teamImg"/>
              <div className="teamSoc">
                <a href=""><img src={socialImg} alt='f'/></a>
                <a href=""><img src={socialImg1} alt='t'/></a>
                <a href=""><img src={socialImg2} alt='i'/></a>
                <a href=""><img src={socialImg3} alt='in'/></a>
              </div>
            </div>
            <div className="teamInfo">
              <h3 className="teamName">Raymond Horn</h3>
              <p className="teamJob">Цифровой маркетолог</p>
            </div>
          </div>
          <div>
            <img src={humanImg2} alt="Linda Towner" className="teamImg"/>
            <div className="teamInfo">
              <h3 className="teamName">Linda Towner</h3>
              <p className="teamJob">Дизайнер приложений</p>
            </div>
          </div>
        </div>
        <div className="teamPages">
          <img src={dotAcImg} alt='-'/>
          <img src={dotImg} alt='0'/>
          <img src={dotImg} alt='0'/>
        </div>
      </div>
    </>
  )
}
export default TeamPage