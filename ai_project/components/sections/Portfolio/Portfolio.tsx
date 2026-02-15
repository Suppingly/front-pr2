import { forwardRef } from 'react'
import './Portfolio.css'
import { useInView } from '../../../hooks/useInView'
import peopleImg from '../../../assets/image 26.png'
import arrowImg from '../../../assets/arrow.png'
import arrowImg1 from '../../../assets/arrow (1).png'

interface PortfolioProps {
  scrollToSelf?: () => void
}

interface PortfolioItem {
  id: string
  title: string
  arrow: string
  arrowClass?: string
}

const portfolioItems: PortfolioItem[] = [
  { id: '01', title: 'Веб и мобильная разработка', arrow: arrowImg },
  { id: '02', title: 'Интерактивный дизайн', arrow: arrowImg1, arrowClass: 'w-[37px]' },
  { id: '03', title: 'Цифровой маркетинг', arrow: arrowImg },
  { id: '04', title: 'Брендинг и стратегия', arrow: arrowImg }
]

const Portfolio = forwardRef<HTMLDivElement, PortfolioProps>(({ scrollToSelf }, ref) => {
  const { isInView } = useInView({ threshold: 0.1, ref: ref as React.RefObject<HTMLDivElement | null> })

  return (
    <div id="portfolio" ref={ref} className={`container mx-auto px-[8rem] py-16 relative ${isInView ? 'reveal-on-scroll is-visible' : 'reveal-on-scroll'}`}>
      <div className="flex flex-row justify-between w-full mb-4">
        <div className='text-left w-1/2'>
          <div className="text-[18px] uppercase tracking-wider text-gray-400 text-left mb-2">Портфолио</div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
            Мы создаем места, которые соединяют, поддерживают и вдохновляют
          </h1>
        </div>
        <div className='text-left w-1/2'>
          <p className="text-gray-300 max-w-lg h-1/2 flex items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-start items-center h-1/2">
          <button
            type="button"
            className="relative px-6 py-3 rounded-full hover:underline cursor-pointer transition-colors duration-300 font-bold uppercase tracking-widest btn-underline"
            onClick={scrollToSelf}
          >
            Посмотреть все портфолио
            <div className="absolute top-0 left-0 size-13 bg-gray-800 -z-1 rounded-full"/>
          </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-row flex flex-col justify-between md:flex-row py-12 border-b-2 border-gray-800 rounded cursor-pointer group hover:bg-white/5 transition-colors duration-300">
            <div className='flex flex-row'>
              <div className="w-fit">
                <span className="text-gray-400">{item.id}.</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight mt-2 ml-3">
                {item.title}
              </h3>
            </div>
            <button type="button" className='flex items-end cursor-pointer group-hover:translate-x-2 transition-transform duration-300'>
              <img src={item.arrow} alt='->' className={item.arrowClass || ''}/>
            </button>
          </div>
        ))}
      </div>

      <div className="absolute top-4/10 right-3/20 pointer-events-none">
        <img src={peopleImg} alt="Team collaboration" className="w-full h-full"/>
      </div>
    </div>
  )
})

export default Portfolio
