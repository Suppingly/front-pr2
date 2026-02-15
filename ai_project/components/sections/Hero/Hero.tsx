import { forwardRef } from 'react'
import './Hero.css'
import { useInView } from '../../../hooks/useInView'
import heroImg from '../../../assets/image (2).png'
import playButton from '../../../assets/play button.png'
import shape from '../../../assets/shape.png'
import groupImg from '../../../assets/Group 8.png'

interface HeroProps {
  scrollToAbout: () => void
  scrollToBlog: () => void
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ scrollToAbout, scrollToBlog }, ref) => {
  const { isInView: heroInView } = useInView({ threshold: 0.2, ref: ref as React.RefObject<HTMLDivElement | null> })

  return (
    <div id="hero" ref={ref} className="heroContainer">
      <div className={`heroText ${heroInView ? 'reveal-on-scroll is-visible' : 'reveal-on-scroll'}`}>
        <div className="heroBigText">Решение цифрового агентства</div>
        <div className='heroSmallText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className='heroScrollCon'>
          <button
            type="button"
            className='heroScroll cursor-pointer hover:text-amber-200 transition-colors duration-300'
            onClick={scrollToAbout}
          >
            &lt;&lt; Прокрутить
          </button>
        </div>
        <img src={shape} alt='decoration shape' className="heroShapeImg"/>
      </div>
      <div className='heroImageCon'>
        <button type="button" className="heroPlayBtn" aria-label="Перейти к блогу" onClick={scrollToBlog}>
          <img src={playButton} alt="" className="heroPlayImg ctaCircleBtn"/>
        </button>
        <div className="heroImageTop">
          <img src={heroImg} alt='Hero main' className="heroImg"/>
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
          <img src={groupImg} alt='Business people group' className="heroBottomImg"/>
          <div className="heroBottomText">
            <div className='heroBTText'>240 Бизнес Людей</div>
            <div className='heroBBText'>Уже зарегестрировались</div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Hero
