import shape3 from '../../assets/icon.png'
import shape4 from '../../assets/icon (1).png'
import shape5 from '../../assets/icon (2).png'
import './Stats.css'

function StatsPage(){
  return (
    <>
      <div className='statsContainer'>
        <div className='statsTable'>
          <div className="statsCard">
            <img src={shape3} alt='shape' className='statsImg'/>
            <h3 className="statsTopText">
              <span className="text-outline">Фирменный</span>
            </h3>
            <div className='statsBottom'>
              <div className="statsDash"/>
              <h2 className="statsBottomText">
                Дизайн
              </h2>
            </div>
            <p className="statsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <ul className="statsCardUl">
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Дизайн лого
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Карточка бизнеса
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Социальные сети
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Реклама
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Раскрутка
              </li>
            </ul>
          </div>
          <div className="statsCard">
            <img src={shape4} alt='shape' className='statsImg'/>
            <h3 className="statsTopText">
              <span className="text-outline">Интерактивный</span>
            </h3>
            <div className='statsBottom'>
              <div className="statsDash"/>
              <h2 className="statsBottomText">
                Дизайн
              </h2>
            </div>
            <p className="statsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <ul className="statsCardUl">
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Дизайн лого
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Карточка бизнеса
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Социальные сети
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Реклама
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Раскрутка
              </li>
            </ul>
          </div>
          <div className="statsCard">
            <img src={shape5} alt='shape' className='statsImg'/>
            <h3 className="statsTopText">
              <span className="text-outline">Моделирование</span>
            </h3>
            <div className='statsBottom'>
              <div className="statsDash"/>
              <h2 className="statsBottomText">
                Иллюстраций
              </h2>
            </div>
            <p className="statsText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <ul className="statsCardUl">
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Дизайн лого
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Карточка бизнеса
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Социальные сети
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Реклама
              </li>
              <li className="statsCardLi">
                <span className="statsLiDot"></span>
                Раскрутка
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default StatsPage