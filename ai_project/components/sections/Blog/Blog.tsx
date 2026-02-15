import './Blog.css'
import groupImg1 from '../../../assets/image (8).png'

interface BlogPost {
  category: string
  date: string
  title: string
}

const blogPosts: BlogPost[] = [
  { category: 'UI-дизайн', date: '15 Dec 2022', title: 'Что такое маркетинг цифрового бизнеса' },
  { category: 'Маркетинг', date: '15 Dec 2022', title: 'Простой список маркетинга социальных сетей' },
  { category: 'Бизнес', date: '15 Dec 2022', title: 'Поддержка во время экспонентного роста' },
  { category: 'Маркетинг', date: '15 Dec 2022', title: 'Важность в создании контента прямо сейчас' }
]

export default function Blog() {
  const handleViewAllClick = () => {
    const blogSection = document.getElementById('blog')
    blogSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div id="blog" className='container relative px-[8rem] pt-15 pb-25'>
      <div className="flex flex-row justify-between w-full mb-4">
        <div className='text-left w-1/2'>
          <div className="text-[18px] uppercase tracking-wider text-gray-400 text-left mb-2">Последние новости</div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
            Посмотрите наши<br/>последние новости
          </h1>
        </div>
        <div className='text-left w-2/5'>
          <p className="text-gray-300 max-w-lg h-1/2 flex items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex justify-start items-center h-1/2">
            <button
              type="button"
              className="heroBtn relative px-6 py-3 rounded-full hover:underline cursor-pointer transition-colors duration-300 font-bold uppercase tracking-widest btn-underline"
              onClick={handleViewAllClick}
            >
              Посмотреть весь блог
              <div className="absolute top-0 left-0 size-13 bg-gray-800 -z-1 rounded-full"/>
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-x-8'>
        {blogPosts.map((post, index) => (
          <div key={index} className='text-left w-full my-15'>
            <div className='flex flex-row mb-5 items-center'>
              <span className='text-gray-500'>{post.category}</span>
              <div className='bg-gray-600 w-[2px] h-4 ml-2'></div>
              <span className='text-[#E3B27D] ml-3'>{post.date}</span>
            </div>
            <button className='text-left font-medium text-3xl md:text-4xl leading-tight cursor-pointer hover:underline transition-all'>
              {post.title}
            </button>
          </div>
        ))}
      </div>
      <img src={groupImg1} alt='Decorative group' className='absolute bottom-5/20 left-7/20 h-70 pointer-events-none'/>
    </div>
  )
}
