import heroImg from '../assets/image (2).png'
import groupImg from '../assets/Group 8.png'
import groupImg1 from '../assets/image (8).png'
import groupImg2 from '../assets/image 34.png'
import playButton from '../assets/play button.png'
import shape from '../assets/shape.png'
import shape1 from '../assets/shape (1).png'
import shape2 from '../assets/shape (2).png'
import shape3 from '../assets/icon.png'
import shape4 from '../assets/icon (1).png'
import shape5 from '../assets/icon (2).png'
import logoImg1 from '../assets/1.png'
import logoImg2 from '../assets/2.png'
import logoImg3 from '../assets/3.png'
import logoImg4 from '../assets/4.png'
import logoImg5 from '../assets/5.png'
import logoImg6 from '../assets/6.png'
import womanImg from '../assets/ivan-kazlouskij-y-qi1eyc_34-unsplash 1.png'
import peopleImg from '../assets/image 26.png'
import arrowImg from '../assets/arrow.png'
import arrowImg1 from '../assets/arrow (1).png'
import arrowImg2 from '../assets/arrow (2).png'
import arrowImg3 from '../assets/arrow (3).png'
import humanImg from '../assets/image (3).png'
import humanImg1 from '../assets/image (4).png'
import humanImg2 from '../assets/image (5).png'
import humanImg3 from '../assets/image (6).png'
import humanImg4 from '../assets/image (7).png'
import socialImg from '../assets/Vector.png'
import socialImg1 from '../assets/Vector (1).png'
import socialImg2 from '../assets/Vector (2).png'
import socialImg3 from '../assets/Vector (3).png'
import dotAcImg from '../assets/Rectangle 46.png'
import dotImg from '../assets/Ellipse 19.png'
import lineImg from '../assets/element.png'
import quoteImg from '../assets/quote.png'
import phoneImg from '../assets/icon1.png'


function HomePage() {
  return (
    <>
      <div className="heroContainer">
        <div className="heroText">
          <div className="heroBigText">Решение цифрового агентства</div>
          <div className='heroSmallText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className='heroScrollCon'>
            <div className='heroScroll'>&lt;&lt; Прокрутить</div>
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

      <div className='logosCon'>
        <img src={logoImg1} alt='group' className='logoImg'/>
        <img src={logoImg2} alt='group' className='logoImg'/>
        <img src={logoImg3} alt='group' className='logoImg'/>
        <img src={logoImg4} alt='group' className='logoImg'/>
        <img src={logoImg5} alt='group' className='logoImg'/>
        <img src={logoImg6} alt='group' className='logoImg'/>
      </div>

    <div className='my-20 px-[8rem]'>
      <div className="aboutTitle">About Us</div>
      <h1 className="text-5xl font-bold leading-tight text-left w-7/10">
        Мы Создаем Цифровую Торговую Площадку Бизнес-Агентств Мирового Класса
      </h1>
      <div className='relative'>
        <div className="absolute -bottom-20 right-60 z-1 flex flex-row">
          <div className="bg-zinc-800 p-14 text-center">
            <div className="text-5xl font-bold">300+</div>
            <div className="text-gray-400 text-xl mt-1">Рабочих людей</div>
          </div>
          <div className="bg-zinc-800 p-14 text-center">
            <div className="text-5xl font-bold">20+</div>
            <div className="text-gray-400 text-xl mt-1">Офисов в Мире</div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start my-10">
          <div className="relative w-6/10">
            <img src={shape2} alt='shape' className='absolute -top-18 -right-16 z-0'/>
            <img src={shape1} alt='shape' className='absolute -bottom-10 -left-10 z-1'/>
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
              <button className="heroBtn relative px-6 py-3 rounded-full hover:underline transition-colors duration-300 font-bold uppercase tracking-widest cursor-pointer">
                Узнать больше
                <div className="absolute top-0 left-0 size-13 bg-gray-800 -z-1 rounded-full"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='py-25'>
      <div className='flex flex-row justify-around bg-stone-800 py-30 px-[8rem]'>
        <div className="relative flex flex-col items-center text-center w-3/10">
          <img src={shape3} alt='shape' className='absolute -top-0 -left-0'/>
          <h3 className="absolute inline-block text-5xl font-bold mb-2">
            <span className="text-outline">Фирменный</span>
          </h3>
          <div className='flex flex-row justify-between gap-6 items-center mt-15'>
            <div className="w-10 h-0.25 bg-white"/>
            <h2 className="text-[52px] font-bold">
              Дизайн
            </h2>
          </div>
          <p className="text-gray-400 mt-6 w-full text-xl text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <ul className="mt-8 space-y-2 text-left text-gray-100 text-[18px] font-medium w-full">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Дизайн лого
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Карточка бизнеса
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Социальные сети
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Реклама
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Раскрутка
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col items-center text-center w-3/10">
          <img src={shape4} alt='shape' className='absolute -top-0 -left-0'/>
          <h3 className="absolute inline-block text-5xl font-bold mb-2">
            <span className="text-outline">Интерактивный</span>
          </h3>
          <div className='flex flex-row justify-between gap-6 items-center mt-15'>
            <div className="w-10 h-0.25 bg-white"/>
            <h2 className="text-[52px] font-bold">
              Дизайн
            </h2>
          </div>
          <p className="text-gray-400 mt-6 w-full text-xl text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <ul className="mt-8 space-y-2 text-left text-gray-100 text-[18px] font-medium w-full">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Дизайн лого
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Карточка бизнеса
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Социальные сети
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Реклама
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Раскрутка
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col items-center text-center w-3/10">
          <img src={shape5} alt='shape' className='absolute -top-0 -left-0'/>
          <h3 className="absolute inline-block text-5xl font-bold mb-2">
            <span className="text-outline">Моделирование</span>
          </h3>
          <div className='flex flex-row justify-between gap-6 items-center mt-15'>
            <div className="w-10 h-0.25 bg-white"/>
            <h2 className="text-[52px] font-bold">
              Иллюстраций
            </h2>
          </div>
          <p className="text-gray-400 mt-6 w-full text-xl text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <ul className="mt-8 space-y-2 text-left text-gray-100 text-[18px] font-medium w-full">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Дизайн лого
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Карточка бизнеса
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Социальные сети
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Реклама
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
              Раскрутка
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-[8rem] py-16 relative">
      <div className="flex flex-row justify-between w-full mb-4">
        <div className='text-left w-1/2'>
          <div className="text-[18px] uppercase tracking-wider text-gray-400 text-left mb-2">Портфолио</div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight mb-6">
            Мы создаем места, которые соединяют, поддерживают и вдохновляют
          </h1>
        </div>
        <div className='text-left w-1/2'>
          <p className="text-gray-300 max-w-lg h-1/2 flex items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-start items-center h-1/2">
          <button className="relative px-6 py-3 rounded-full hover:underline cursor-pointer transition-colors duration-300 font-bold uppercase tracking-widest">
            Посмотреть все портфолио
            <div className="absolute top-0 left-0 size-13 bg-gray-800 -z-1 rounded-full"/>
          </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-between md:flex-row py-12 border-b-2 border-gray-800">
          <div className='flex flex-row'>
            <div className="w-fit">
              <span className="text-gray-400">01.</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 ml-3">
              Веб и мобильная разработка
            </h3>
          </div>
          <button className='flex items-end cursor-pointer'>
            <img src={arrowImg} alt='->'/>
          </button>
        </div>

        <div className="flex flex-col justify-between md:flex-row py-12 border-b-2 border-gray-800">
          <div className='flex flex-row'>
            <div className="w-fit">
              <span className="text-gray-400">02.</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 ml-3">
              Интерактивный дизайн
            </h3>
          </div>
          <button className='flex items-end cursor-pointer'>
            <img src={arrowImg1} alt='->' className='w-[37px]'/>
          </button>
        </div>

        <div className="flex flex-col justify-between md:flex-row py-12 border-b-2 border-gray-800">
          <div className='flex flex-row'>
            <div className="w-fit">
              <span className="text-gray-400">03.</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 ml-3">
              Цифровой маркетинг
            </h3>
          </div>
          <button className='flex items-end cursor-pointer'>
            <img src={arrowImg} alt='->'/>
          </button>
        </div>

        <div className="flex flex-col justify-between md:flex-row py-12 border-b-2 border-gray-800">
          <div className='flex flex-row'>
            <div className="w-fit">
              <span className="text-gray-400">04.</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 ml-3">
              Брендинг и стратегия
            </h3>
          </div>
          <button className='flex items-end cursor-pointer'>
            <img src={arrowImg} alt='->'/>
          </button>
        </div>
      </div>

      <div className="absolute top-4/10 right-3/20">
        <img src={peopleImg} alt="Team collaboration" className="w-full h-full"/>
      </div>
    </div>

    <div className="container px-[8rem] py-25">
      <div className="flex flex-row justify-between mb-12 w-full">
        <div className='w-1/2 text-left'>
          <div className="text-[18px] uppercase tracking-wider text-gray-400 text-left mb-2">Наша команда</div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight">
            Стройте наше будущее<br/>Увидите членов команды
          </h1>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <p className="text-gray-300 text-left h-1/2 w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex items-center gap-6 h-1/2">
            <button className="flex justify-center p-4 size-12 rounded-full bg-stone-800 hover:bg-stone-900 cursor-pointer">
              <img src={arrowImg3} alt="<-" />
            </button>
            <button className="flex justify-center p-4 size-12 rounded-full bg-stone-700 hover:bg-stone-800 cursor-pointer">
              <img src={arrowImg2} alt="->" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={humanImg} alt="Aimee Calderon" className="w-full"/>
          <div className="py-6 text-left">
            <h3 className="text-2xl font-bold">Aimee Calderon</h3>
            <p className="text-gray-400 text-sm mt-1">Веб-разработчик</p>
          </div>
        </div>
        <div>
          <div className='relative'>
            <img src={humanImg1} alt="Raymond Horn" className="w-full"/>
            <div className="absolute bottom-0 right-0 w-10 h-7/20 bg-[#E3B27D] flex flex-col items-center justify-around py-3">
              <a href=""><img src={socialImg} alt='f'/></a>
              <a href=""><img src={socialImg1} alt='t'/></a>
              <a href=""><img src={socialImg2} alt='i'/></a>
              <a href=""><img src={socialImg3} alt='in'/></a>
            </div>
          </div>
          <div className="py-6 text-left">
            <h3 className="text-2xl font-bold">Raymond Horn</h3>
            <p className="text-gray-400 text-sm mt-1">Цифровой маркетолог</p>
          </div>
        </div>
        <div>
          <img src={humanImg2} alt="Linda Towner" className="w-full"/>
          <div className="py-6 text-left">
            <h3 className="text-2xl font-bold">Linda Towner</h3>
            <p className="text-gray-400 text-sm mt-1">Дизайнер приложений</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        <img src={dotAcImg} alt='-'/>
        <img src={dotImg} alt='0'/>
        <img src={dotImg} alt='0'/>
      </div>
    </div>

    <div className="container px-[8rem] pt-15 pb-25">
      <div className="flex flex-row justify-between mb-12 w-full">
        <div className='w-1/2 text-left'>
          <div className="text-[18px] uppercase tracking-wider text-gray-400 text-left mb-2">Рекомендации</div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight">
            Отзывы от наших клиентов
          </h1>
        </div>
        <div className="w-1/2 flex justify-end items-end gap-6">
          <button className="flex justify-center p-4 size-12 rounded-full bg-stone-800 hover:bg-stone-900 cursor-pointer">
            <img src={arrowImg3} alt="<-" />
          </button>
          <button className="flex justify-center p-4 size-12 rounded-full bg-stone-700 hover:bg-stone-800 cursor-pointer">
            <img src={arrowImg2} alt="->" />
          </button>
        </div>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-col w-1/2 pr-4'>
          <div className='flex flex-row items-center mb-5'>
            <div className='w-2 h-9/10 bg-[#E3B27D] mr-4'/>
            <div className='italic text-2xl text-left'>"Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полное объяснение."</div>
          </div>
          <img src={lineImg} alt='-------'/>
          <div className='flex flex-row mt-10'>
            <div className='flex flex-row justify-start items-center w-1/2'>
              <img src={humanImg4} alt=''/>
              <div className='text-left ml-5'>
                <span className='text-[22px] font-medium'>Chester Feil</span><br/>
                <span className='text-[14px] text-[#E3B27D] uppercase tracking-wider'>Покупатель</span>
              </div>
            </div>
            <div className='flex justify-center items-center w-1/2'>
              <img src={quoteImg} alt='quote' className='h-1/3'/>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-1/2 pl-4'>
          <div className='flex flex-row items-center mb-5'>
            <div className='w-2 h-9/10 bg-[#E3B27D] mr-4'/>
            <div className='italic text-2xl text-left'>"Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полное объяснение."</div>
          </div>
          <img src={lineImg} alt='-------'/>
          <div className='flex flex-row mt-10'>
            <div className='flex flex-row justify-start items-center w-1/2'>
              <img src={humanImg3} alt=''/>
              <div className='text-left ml-5'>
                <span className='text-[22px] font-medium'>Malina Willans</span><br/>
                <span className='text-[14px] text-[#E3B27D] uppercase tracking-wider'>Покупатель</span>
              </div>
            </div>
            <div className='flex justify-center items-center w-1/2'>
              <img src={quoteImg} alt='quote' className='h-1/3'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='container relative px-[8rem] pt-15 pb-25'>
      <div className="flex flex-row justify-between w-full mb-4">
        <div className='text-left w-1/2'>
          <div className="text-[18px] uppercase tracking-wider text-gray-400 text-left mb-2">Последние новости</div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight mb-6">
            Посмотрите наши<br/>последние новости
          </h1>
        </div>
        <div className='text-left w-2/5'>
          <p className="text-gray-300 max-w-lg h-1/2 flex items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex justify-start items-center h-1/2">
          <button className="relative px-6 py-3 rounded-full hover:underline cursor-pointer transition-colors duration-300 font-bold uppercase tracking-widest">
            Посмотреть весь блог
            <div className="absolute top-0 left-0 size-13 bg-gray-800 -z-1 rounded-full"/>
          </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='text-left w-full my-15'>
          <div className='flex flex-row mb-5'>
            <span className='text-gray-500'>UI-дизайн</span>
            <div className='bg-gray-600 w-[2px] ml-2'></div>
            <span className='text-[#E3B27D] ml-3'>15 Dec 2022</span>
          </div>
          <button className='text-left font-medium text-5xl/15 cursor-pointer hover:underline'>Что такое маркетинг цифрового бизнеса</button>
        </div>
        <div className='text-left w-full my-15'>
          <div className='flex flex-row mb-5'>
            <span className='text-gray-500'>Маркетинг</span>
            <div className='bg-gray-600 w-[2px] ml-2'></div>
            <span className='text-[#E3B27D] ml-3'>15 Dec 2022</span>
          </div>
          <button className='text-left font-medium text-5xl/15 cursor-pointer hover:underline'>Простой список маркетинга социальных сетей</button>
        </div>
        <div className='text-left w-full my-15'>
          <div className='flex flex-row mb-5'>
            <span className='text-gray-500'>Бизнес</span>
            <div className='bg-gray-600 w-[2px] ml-2'></div>
            <span className='text-[#E3B27D] ml-3'>15 Dec 2022</span>
          </div>
          <button className='text-left font-medium text-5xl/15 cursor-pointer hover:underline'>Поддержка во время экспонентного роста</button>
        </div>
        <div className='text-left w-full my-15'>
          <div className='flex flex-row mb-5'>
            <span className='text-gray-500'>Маркетинг</span>
            <div className='bg-gray-600 w-[2px] ml-2'></div>
            <span className='text-[#E3B27D] ml-3'>15 Dec 2022</span>
          </div>
          <button className='text-left font-medium text-5xl/15 cursor-pointer hover:underline'>Важность в создании контента прямо сейчас</button>
        </div>
      </div>
      <img src={groupImg1} alt='group' className='absolute bottom-5/20 left-7/20 h-70'/>
    </div>

    <div className='container relative flex items-end mb-30'>
      <img src={groupImg2} alt='' className='absolute top-0 right-0 -z-1'/>
      <div className='absolute top-0 right-0'/>
      <div className='flex flex-row justify-start p-15 mt-70 bg-stone-900 w-9/10'>
        <span className='text-7xl/20 text-left font-bold mr-30'>Давайте сделаем что-то Прекрасным <span className='text-[#E3B27D]'>Вместе!</span></span>
        <div className=''>
          <button className='flex flex-col justify-center items-center bg-[#E3B27D] rounded-[50%] aspect-square h-full p-10 text-2xl 
          uppercase tracking-wider cursor-pointer hover:bg-[#a6845f]'>Связаться с нами<img src={arrowImg} alt="" className='transform-[rotate(-45deg)] mt-5 w-8'/></button>
        </div>
      </div>
    </div>
    <div className='bg-black px-[8rem]'>
      <div className='flex flex-row justify-between'>
        <div className='text-left px-5 w-1/4 pb-25'>
          <div className='text-gray-300 mb-10'>Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tepo the.</div>
          <div className='bg-[#E3B27D] w-fit p-3 flex flex-row justify-start items-center'>
            <img src={phoneImg} alt="" className='mr-2'/>
            <span>(973) 068 2300</span>
          </div>
        </div>
        <div className='w-1/4 flex flex-col justify-start'>
          <span className='uppercase text-left text-xl font-medium mb-10'>Быстрые ссылки</span>
          <div className='flex flex-row text-left text-gray-300'>
            <div className='w-1/2'>
              <button className="cursor-pointer hover:underline my-1 text-left">О нас</button><br/>
              <button className="cursor-pointer hover:underline my-1 text-left">Список цен</button><br/>
              <button className="cursor-pointer hover:underline my-1 text-left">Связаться с нами</button><br/>
              <button className="cursor-pointer hover:underline my-1 text-left">Встретьте нашу команду</button><br/>
              <button className="cursor-pointer hover:underline my-1 text-left">Последние новости</button><br/>
            </div>
            <div className='w-1/2'>
              <button className="cursor-pointer hover:underline my-1 text-left">Изучение кейсов</button><br/>
              <button className="cursor-pointer hover:underline my-1 text-left">FAQ's</button><br/>
              <button className="cursor-pointer hover:underline my-1 text-left">Сервисы</button><br/>
              <button className="cursor-pointer hover:underline my-1 text-left">Поддержка клиентов</button><br/>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-0.5 bg-gray-800'/>
      <div className="flex flex-row justify-between py-8">
        <div className="text-gray-400"> © 2023 davixq All Rights Reserved</div>
        <div className="text-gray-400">
          <button className="cursor-pointer hover:underline">Условия использования</button>
          <button className="cursor-pointer hover:underline ml-15">Политика приватности</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default HomePage