import './Contact.css'
import phoneImg from '../../../assets/icon1.png'

const scrollToSection = (id: string) => {
  if (typeof window === 'undefined') return

  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function Contact() {
  return (
    <div
      id="contact"
      className='relative overflow-hidden bg-gradient-to-t from-black via-[#050505] to-black px-[8rem] py-16'
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#E3B27D]/20 blur-3xl animate-pulse" />

      <div className='flex flex-row justify-between gap-10'>
        <div className='text-left px-5 w-1/4 pb-25 transform transition-all duration-500 ease-out hover:-translate-y-1'>
          <div className='text-gray-300 mb-10 leading-relaxed'>
            Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua tepo the.
          </div>
          <button
            className='group bg-[#E3B27D] w-fit px-5 py-3 flex flex-row justify-start items-center rounded-sm shadow-lg shadow-[#E3B27D]/30 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[#E3B27D]/60'
            onClick={() => (window.location.href = 'tel:+19730682300')}
          >
            <img
              src={phoneImg}
              alt="Phone"
              className='mr-3 h-6 w-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6'
            />
            <span className='tracking-wide group-hover:tracking-widest transition-all duration-300'>
              (973) 068 2300
            </span>
          </button>
        </div>

        <div className='w-1/4 flex flex-col justify-start transform transition-all duration-500 ease-out hover:-translate-y-1'>
          <span className='uppercase text-left text-xl font-medium mb-10 tracking-[0.25em] text-gray-100'>
            Быстрые ссылки
          </span>
          <div className='flex flex-row text-left text-gray-300 text-sm'>
            <div className='w-1/2 space-y-1'>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('about')}
              >
                О нас
              </button>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('pricing')}
              >
                Список цен
              </button>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('contact')}
              >
                Связаться с нами
              </button>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('team')}
              >
                Встретьте нашу команду
              </button>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('news')}
              >
                Последние новости
              </button>
            </div>
            <div className='w-1/2 space-y-1'>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('cases')}
              >
                Изучение кейсов
              </button>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('faq')}
              >
                FAQ&apos;s
              </button>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('services')}
              >
                Сервисы
              </button>
              <button
                className="w-full cursor-pointer my-1 text-left transition-all duration-200 transform hover:translate-x-1 hover:text-[#E3B27D]"
                onClick={() => scrollToSection('support')}
              >
                Поддержка клиентов
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent transform origin-center scale-x-75 hover:scale-x-100 transition-transform duration-500' />

      <div className="flex flex-row justify-between items-center py-8 text-sm text-gray-400">
        <div className="transition-colors duration-200 hover:text-gray-200">
          © 2023 davixq All Rights Reserved
        </div>
        <div className="flex flex-row items-center">
          <button
            className="cursor-pointer hover:underline transition-colors duration-200 hover:text-[#E3B27D]"
          >
            Условия использования
          </button>
          <button
            className="cursor-pointer hover:underline ml-6 transition-colors duration-200 hover:text-[#E3B27D]"
          >
            Политика приватности
          </button>
        </div>
      </div>
    </div>
  )
}
