import { forwardRef } from 'react'
import './About.css'
import { useInView } from '../../../hooks/useInView'
import shape1 from '../../../assets/shape (1).png'
import shape2 from '../../../assets/shape (2).png'
import womanImg from '../../../assets/ivan-kazlouskij-y-qi1eyc_34-unsplash 1.png'

interface AboutProps {
  scrollToPortfolio: () => void
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ scrollToPortfolio }, ref) => {
  
  const { isInView } = useInView({ threshold: 0.1, ref: ref as React.RefObject<HTMLDivElement | null> })

  return (
    <div id="about" ref={ref} className={`py-20 px-[8rem] ${isInView ? 'reveal-on-scroll is-visible' : 'reveal-on-scroll'}`}>
      <div className="aboutTitle">О Нас</div>
      <h1 className="text-4xl font-bold leading-tight text-left w-7/10">
        Мы Создаем Цифровую Торговую Площадку Бизнес-Агентств Мирового Класса
      </h1>
      <div className='relative'>
          <div className="absolute -bottom-20 right-60 z-1 flex flex-row">
          <div className="bg-zinc-800 p-14 text-center">
            <div className="text-4xl font-bold">300+</div>
            <div className="text-gray-400 text-xl mt-1">Рабочих людей</div>
          </div>
          <div className="bg-zinc-800 p-14 text-center">
            <div className="text-4xl font-bold">20+</div>
            <div className="text-gray-400 text-xl mt-1">Офисов в Мире</div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start my-10">
          <div className="relative w-6/10">
            <img src={shape2} alt='decoration shape' className='absolute -top-18 -right-16 z-0'/>
            <img src={shape1} alt='decoration shape' className='absolute -bottom-10 -left-10 z-1'/>
            <img 
              src={womanImg}
              alt="Woman with flowers"
              className="w-full h-auto rounded-lg grayscale object-cover"/>
          </div>
          <div className="space-y-6 w-3/10">
            <p className="text-gray-300 leading-relaxed text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <p className="text-gray-300 leading-relaxed text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className="flex justify-start mt-6">
              <button
                type="button"
                className="heroBtn relative px-6 py-3 rounded-full hover:underline transition-colors duration-300 font-bold uppercase tracking-widest cursor-pointer btn-underline"
                onClick={scrollToPortfolio}
              >
                Узнать больше
                <div className="absolute top-0 left-0 size-13 bg-gray-800 -z-1 rounded-full"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
