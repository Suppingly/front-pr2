import groupImg1 from '../../assets/image (8).png'
import './News.css'

function NewsPage(){
  return (
    <>
      <div className='newsContainer'>
        <div className="newsTop">
          <div className='newsLeft'>
            <div className="news">Последние новости</div>
            <h1 className="newsMainText">
              Посмотрите наши<br/>последние новости
            </h1>
          </div>
          <div className='newsRight'>
            <p className="newsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="newsBtnCon">
            <button className="newsBtn">
              Посмотреть весь блог
              <div className="btnCir"/>
            </button>
            </div>
          </div>
        </div>
        <div className='newsGrid'>
          <div className='newsCard'>
            <div className='newsCardInfo'>
              <span className='newsTheme'>UI-дизайн</span>
              <div className='newsLine'></div>
              <span className='newsDate'>15 Dec 2022</span>
            </div>
            <button className='newsHeadline'>Что такое маркетинг цифрового бизнеса</button>
          </div>
          <div className='newsCard'>
            <div className='newsCardInfo'>
              <span className='newsTheme'>Маркетинг</span>
              <div className='newsLine'></div>
              <span className='newsDate'>15 Dec 2022</span>
            </div>
            <button className='newsHeadline'>Простой список маркетинга социальных сетей</button>
          </div>
          <div className='newsCard'>
            <div className='newsCardInfo'>
              <span className='newsTheme'>Бизнес</span>
              <div className='newsLine'></div>
              <span className='newsDate'>15 Dec 2022</span>
            </div>
            <button className='newsHeadline'>Поддержка во время экспонентного роста</button>
          </div>
          <div className='newsCard'>
            <div className='newsCardInfo'>
              <span className='newsTheme'>Маркетинг</span>
              <div className='newsLine'></div>
              <span className='newsDate'>15 Dec 2022</span>
            </div>
            <button className='newsHeadline'>Важность в создании контента прямо сейчас</button>
          </div>
        </div>
        <img src={groupImg1} alt='group' className='newsImg'/>
      </div>
    </>
  )
}
export default NewsPage