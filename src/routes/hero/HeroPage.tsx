import heroImg from '../../assets/image (2).png'
import groupImg from '../../assets/Group 8.png'
import playButton from '../../assets/play button.png'
import shape from '../../assets/shape.png'
import logoImg1 from '../../assets/1.png'
import logoImg2 from '../../assets/2.png'
import logoImg3 from '../../assets/3.png'
import logoImg4 from '../../assets/4.png'
import logoImg5 from '../../assets/5.png'
import logoImg6 from '../../assets/6.png'
import './Hero.css'

function HeroPage(){
  return (
    <>
      <div className="heroContainer">
        <div className="heroText">
          <div className="heroBigText">Решение цифрового агентства</div>
          <div className='heroSmallText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className='heroScrollCon'>
            <button className='heroScroll' onClick={
            ()=>{
              const target=document.getElementById('func')
              if (target){
                target.scrollIntoView({behavior:'smooth'})
              }
            }
          } >&lt;&lt; Прокрутить</button>
          </div>
          <img src={shape} alt='hero' className="heroShapeImg"/>
        </div>
        <div className='heroImageCon'>
          <img src={playButton} alt='hero' className="heroPlayImg"/>
          <div className="heroImageTop">
            <img src={heroImg} alt='hero' className="heroImg"/>
            <div className='heroStatsCon'>
            <div className="heroStats">
              <div className="heroStat">
                <div className="heroStatTop">12 тыс+</div>
                <div className="heroStatBottom">Проектов Выполнено</div>
              </div>
              <div className="heroStat">
                <div className="heroStatTop">7 тыс+</div>
                <div className="heroStatBottom">Довольных Клиентов</div>
              </div>
              <div className="heroStat">
                <div className="heroStatTop">10+</div>
                <div className="heroStatBottom">Лет Опыта</div>
              </div>
              <div className="heroStat">
                <div className="heroStatTop">270+</div>
                <div className="heroStatBottom">Выигрышных Наград</div>
              </div>
            </div>
          </div>
          </div>
          <div className="heroImageBottom">
            <img src={groupImg} alt='hero' className="heroBottomImg"/>
            <div className="heroBottomText">
              <div className='heroBTText'>240 Бизнес Людей</div>
              <div className='heroBBText'>Уже зарегестрировались</div>
            </div>
          </div>
        </div>
      </div>
      <div className='logosCon' id='func'>
        <img src={logoImg1} alt='group' className='logoImg'/>
        <img src={logoImg2} alt='group' className='logoImg'/>
        <img src={logoImg3} alt='group' className='logoImg'/>
        <img src={logoImg4} alt='group' className='logoImg'/>
        <img src={logoImg5} alt='group' className='logoImg'/>
        <img src={logoImg6} alt='group' className='logoImg'/>
      </div>
    </>
  )
}
export default HeroPage