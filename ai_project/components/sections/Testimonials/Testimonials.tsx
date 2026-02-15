import './Testimonials.css'
import { useState } from 'react'
import arrowImg2 from '../../../assets/arrow (2).png'
import arrowImg3 from '../../../assets/arrow (3).png'
import lineImg from '../../../assets/element.png'
import quoteImg from '../../../assets/quote.png'
import humanImg3 from '../../../assets/image (6).png'
import humanImg4 from '../../../assets/image (7).png'

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  image: string
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Chester Feil',
    role: 'Покупатель',
    quote: 'Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полное объяснение.',
    image: humanImg4
  },
  {
    id: 2,
    name: 'Malina Willans',
    role: 'Покупатель',
    quote: 'Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полное объяснение.',
    image: humanImg3
  },
  {
    id: 3,
    name: 'Chester Feil',
    role: 'Покупатель',
    quote: 'Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полное объяснение.',
    image: humanImg4
  },
  {
    id: 4,
    name: 'Malina Willans',
    role: 'Покупатель',
    quote: 'Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полное объяснение.',
    image: humanImg3
  }
]

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0)

  const nextTestimonial = () => {
    setStartIndex((prev) => (prev + 1 >= testimonialsData.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setStartIndex((prev) => (prev === 0 ? testimonialsData.length - 2 : prev - 1))
  }

  const currentPair = [
    testimonialsData[startIndex],
    testimonialsData[(startIndex + 1) % testimonialsData.length]
  ]

  return (
    <div id="testimonials" className="container px-[8rem] pt-15 pb-25">
      <div className="flex flex-row justify-between mb-12 w-full">
        <div className='w-1/2 text-left'>
          <div className="text-[18px] uppercase tracking-wider text-gray-400 text-left mb-2">Рекомендации</div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium leading-tight">
            Отзывы от наших клиентов
          </h1>
        </div>
        <div className="w-1/2 flex justify-end items-end gap-6">
          <button onClick={prevTestimonial} className="flex justify-center p-4 size-12 rounded-full bg-stone-800 hover:bg-stone-900 cursor-pointer transition-transform hover:scale-110">
            <img src={arrowImg3} alt="Previous" />
          </button>
          <button onClick={nextTestimonial} className="flex justify-center p-4 size-12 rounded-full bg-stone-700 hover:bg-stone-800 cursor-pointer transition-transform hover:scale-110">
            <img src={arrowImg2} alt="Next" />
          </button>
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row justify-between w-full gap-8'>
        {currentPair.map((item, index) => (
          <div key={`${item.id}-${index}`} className='flex flex-col w-full md:w-1/2'>
            <div className='flex flex-row items-center mb-5'>
              <div className='w-2 h-[90%] bg-[#E3B27D] mr-4'/>
              <div className='italic text-2xl text-left'>"{item.quote}"</div>
            </div>
            <img src={lineImg} alt='separator'/>
            <div className='flex flex-row mt-10'>
              <div className='flex flex-row justify	start items-center w-1/2'>
                <img src={item.image} alt={item.name}/>
                <div className='text-left ml-5'>
                  <span className='text-[22px] font-medium'>{item.name}</span><br/>
                  <span className='text-[14px] text-[#E3B27D] uppercase tracking-wider'>{item.role}</span>
                </div>
              </div>
              <div className='flex justify-center items-center w-1/2'>
                <img src={quoteImg} alt='quote' className='h-1/3'/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
