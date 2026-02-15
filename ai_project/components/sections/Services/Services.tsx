import './Services.css'
import shape3 from '../../../assets/icon.png'
import shape4 from '../../../assets/icon (1).png'
import shape5 from '../../../assets/icon (2).png'

interface ServiceItem {
  titleOutline: string
  titleMain: string
  description: string
  items: string[]
  icon: string
}

const servicesData: ServiceItem[] = [
  {
    titleOutline: 'Фирменный',
    titleMain: 'Дизайн',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    items: ['Дизайн лого', 'Карточка бизнеса', 'Социальные сети', 'Реклама', 'Раскрутка'],
    icon: shape3
  },
  {
    titleOutline: 'Интерактивный',
    titleMain: 'Дизайн',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    items: ['Дизайн лого', 'Карточка бизнеса', 'Социальные сети', 'Реклама', 'Раскрутка'],
    icon: shape4
  },
  {
    titleOutline: 'Моделирование',
    titleMain: 'Иллюстраций',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    items: ['Дизайн лого', 'Карточка бизнеса', 'Социальные сети', 'Реклама', 'Раскрутка'],
    icon: shape5
  }
]

export default function Services() {
  return (
    <div id="services" className='servicesContainer py-25'>
      <div className='flex flex-row justify-around py-30 px-[8rem]'>
        {servicesData.map((service, index) => (
          <div key={index} className="relative flex flex-col items-center text-center w-3/10">
            <img src={service.icon} alt='shape' className='absolute -top-0 -left-0'/>
            <h3 className="absolute inline-block text-4xl font-bold mb-2">
              <span className="text-outline">{service.titleOutline}</span>
            </h3>
            <div className='flex flex-row justify-between gap-6 items-center mt-15'>
              <div className="w-10 h-0.25 bg-white"/>
              <h2 className="text-[42px] font-bold">
                {service.titleMain}
              </h2>
            </div>
            <p className="text-gray-400 mt-6 w-full text-xl text-left">
              {service.description}
            </p>
            <ul className="mt-8 space-y-2 text-left text-gray-100 text-[18px] font-medium w-full">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2.5 mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
