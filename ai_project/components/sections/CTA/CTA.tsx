import './CTA.css'
import arrowImg from '../../../assets/arrow.png'
import groupImg2 from '../../../assets/image 34.png'

interface CTAProps {
  scrollToContact: () => void
}

export default function CTA({ scrollToContact }: CTAProps) {
  return (
    <div id="cta" className='container relative flex items-end pb-30'>
      <img src={groupImg2} alt='Decorative background' className='absolute top-0 right-0 -z-1'/>
      <div className='absolute top-0 right-0'/>
      <div className='flex flex-row justify-start p-15 mt-70 bg-stone-1000 w-9/10'>
        <span className='text-7xl leading-tight text-left font-bold mr-30'>Давайте сделаем что-то Прекрасным <span className='text-[#E3B27D]'>Вместе!</span></span>
        <div className=''>
          <button
            type="button"
            className='ctaCircleBtn flex flex-col justify-center items-center bg-[#E3B27D] rounded-[50%] aspect-square h-64 w-64 text-2xl font-bold
          uppercase tracking-wider cursor-pointer hover:bg-[#a6845f] transition-transform hover:scale-105'
            onClick={scrollToContact}
          >
            Связаться с нами<img src={arrowImg} alt="" className='-rotate-45 mt-5 w-8'/>
          </button>
        </div>
      </div>
    </div>
  )
}
