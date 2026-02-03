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
            <button className='heroScroll' onClick={
            ()=>{
              const target=document.getElementById('func')
              if (target){
                target.scrollIntoView({behavior:'smooth'})
              }
            }
          } >&lt;&lt; Прокрутить</button>
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

      <div className='logosCon' id='func'>
        <img src={logoImg1} alt='group' className='logoImg'/>
        <img src={logoImg2} alt='group' className='logoImg'/>
        <img src={logoImg3} alt='group' className='logoImg'/>
        <img src={logoImg4} alt='group' className='logoImg'/>
        <img src={logoImg5} alt='group' className='logoImg'/>
        <img src={logoImg6} alt='group' className='logoImg'/>
      </div>

    <div className='aboutContainer'>
      <div className="aboutTitle">About Us</div>
      <h1 className="aboutText">
        Мы Создаем Цифровую Торговую Площадку Бизнес-Агентств Мирового Класса
      </h1>
      <div className='aboutStats'>
        <div className="aboutInfo">
          <div className="aboutStat">
            <div className="aboutStatN">300+</div>
            <div className="aboutStatInfo">Рабочих людей</div>
          </div>
          <div className="aboutStat">
            <div className="aboutStatN">20+</div>
            <div className="aboutStatInfo">Офисов в Мире</div>
          </div>
        </div>
        <div className="aboutMain">
          <div className="aboutSvgs">
            <img src={shape2} alt='shape' className='aboutSvg1'/>
            <img src={shape1} alt='shape' className='aboutSvg2'/>
            <img 
              src={womanImg}
              alt="Woman with flowers"
              className="aboutImg"/>
          </div>
          <div className="aboutMainText">
            <p className="aboutTextInside">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <p className="aboutTextInside">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className="aboutBtnCon">
              <button className="aboutBtn">
                Узнать больше
                <div className="btnCir"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    <div className="portfolioContainer">
      <div className="portfolioTop">
        <div className='portfiolioTopCont'>
          <div className="portfolio">Портфолио</div>
          <h1 className="portfolioMainText">
            Мы создаем места, которые соединяют, поддерживают и вдохновляют
          </h1>
        </div>
        <div className='portfiolioTopCont'>
          <p className="portfolioTopText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="portfolioBtnCon">
          <button className="portfolioBtn">
            Посмотреть все портфолио
            <div className="BtnCir"/>
          </button>
          </div>
        </div>
      </div>
      <div className="portfolioLinks">
        <div className="portfolioLink">
          <div className='portfolioLinkLeft'>
            <div className="portfolioLinkLText">
              <span className="portfolioLinkL">01.</span>
            </div>
            <h3 className="portfolioLinkText">
              Веб и мобильная разработка
            </h3>
          </div>
          <button className='portfolioLinkRight'>
            <img src={arrowImg} alt='->'/>
          </button>
        </div>

        <div className="portfolioLink">
          <div className='portfolioLinkLeft'>
            <div className="portfolioLinkLText">
              <span className="portfolioLinkL">02.</span>
            </div>
            <h3 className="portfolioLinkText">
              Интерактивный дизайн
            </h3>
          </div>
          <button className='portfolioLinkRight'>
            <img src={arrowImg1} alt='->' className='portfolioArrImg'/>
          </button>
        </div>

        <div className="portfolioLink">
          <div className='portfolioLinkLeft'>
            <div className="portfolioLinkLText">
              <span className="portfolioLinkL">03.</span>
            </div>
            <h3 className="portfolioLinkText">
              Цифровой маркетинг
            </h3>
          </div>
          <button className='portfolioLinkRight'>
            <img src={arrowImg} alt='->'/>
          </button>
        </div>

        <div className="portfolioLink">
          <div className='portfolioLinkLeft'>
            <div className="portfolioLinkLText">
              <span className="portfolioLinkL">04.</span>
            </div>
            <h3 className="portfolioLinkText">
              Брендинг и стратегия
            </h3>
          </div>
          <button className='portfolioLinkRight'>
            <img src={arrowImg} alt='->'/>
          </button>
        </div>
      </div>

      <div className="portfolioImgCon">
        <img src={peopleImg} alt="Team collaboration" className="portfolioImg"/>
      </div>
    </div>

    <div className="teamContainer">
      <div className="teamTop">
        <div className='teamLeft'>
          <div className="team">Наша команда</div>
          <h1 className="teamMainText">
            Стройте наше будущее<br/>Увидите членов команды
          </h1>
        </div>
        <div className="teamRight">
          <p className="teamRightText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="buttons">
            <button className="button">
              <img src={arrowImg3} alt="<-" />
            </button>
            <button className="button">
              <img src={arrowImg2} alt="->" />
            </button>
          </div>
        </div>
      </div>
      <div className="teamGrid">
        <div>
          <img src={humanImg} alt="Aimee Calderon" className="teamImg"/>
          <div className="teamInfo">
            <h3 className="teamName">Aimee Calderon</h3>
            <p className="teamJob">Веб-разработчик</p>
          </div>
        </div>
        <div>
          <div className='relative'>
            <img src={humanImg1} alt="Raymond Horn" className="teamImg"/>
            <div className="teamSoc">
              <a href=""><img src={socialImg} alt='f'/></a>
              <a href=""><img src={socialImg1} alt='t'/></a>
              <a href=""><img src={socialImg2} alt='i'/></a>
              <a href=""><img src={socialImg3} alt='in'/></a>
            </div>
          </div>
          <div className="teamInfo">
            <h3 className="teamName">Raymond Horn</h3>
            <p className="teamJob">Цифровой маркетолог</p>
          </div>
        </div>
        <div>
          <img src={humanImg2} alt="Linda Towner" className="teamImg"/>
          <div className="teamInfo">
            <h3 className="teamName">Linda Towner</h3>
            <p className="teamJob">Дизайнер приложений</p>
          </div>
        </div>
      </div>
      <div className="teamPages">
        <img src={dotAcImg} alt='-'/>
        <img src={dotImg} alt='0'/>
        <img src={dotImg} alt='0'/>
      </div>
    </div>

    <div className="reviewContainer">
      <div className="reviewTop">
        <div className='reviewLeft'>
          <div className="review">Рекомендации</div>
          <h1 className="reviewText">
            Отзывы от наших клиентов
          </h1>
        </div>
        <div className="buttons">
          <button className="button">
            <img src={arrowImg3} alt="<-" />
          </button>
          <button className="button">
            <img src={arrowImg2} alt="->" />
          </button>
        </div>
      </div>
      <div className='reviewGrid'>
        <div className='reviewCard'>
          <div className='reviewCardTop'>
            <div className='reviewTextLine'/>
            <div className='reviewCardText'>"Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полное объяснение."</div>
          </div>
          <img src={lineImg} alt='-------'/>
          <div className='reviewCardBottom'>
            <div className='reviewer'>
              <img src={humanImg4} alt=''/>
              <div className='reviewerInfo'>
                <span className='reviewerName'>Chester Feil</span><br/>
                <span className='reviewerJob'>Покупатель</span>
              </div>
            </div>
            <div className='reviewQuoteCon'>
              <img src={quoteImg} alt='quote' className='reviewQuote'/>
            </div>
          </div>
        </div>
        <div className='reviewCard'>
          <div className='reviewCardTop'>
            <div className='reviewTextLine'/>
            <div className='reviewCardText'>"Но я должен объяснить вам, как родилась вся эта ошибочная идея осуждения удовольствия и восхваления боли, и я дам вам полное объяснение."</div>
          </div>
          <img src={lineImg} alt='-------'/>
          <div className='reviewCardBottom'>
            <div className='reviewer'>
              <img src={humanImg3} alt=''/>
              <div className='reviewerInfo'>
                <span className='reviewerName'>Malina Willans</span><br/>
                <span className='reviewerJob'>Покупатель</span>
              </div>
            </div>
            <div className='reviewQuoteCon'>
              <img src={quoteImg} alt='quote' className='reviewQuote'/>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    <div className='endContainer'>
      <img src={groupImg2} alt='' className='endImg'/>
      <div className='endLink'>
        <span className='endText'>Давайте сделаем что-то Прекрасным <span className='text-[#E3B27D]'>Вместе!</span></span>
        <div>
          <button className='endBtn'>Связаться с нами<img src={arrowImg} alt="" className='transform-[rotate(-45deg)] mt-5 w-8'/></button>
        </div>
      </div>
    </div>
    <div className='footerCon'>
      <div className='footerTop'>
        <div className='footerLeft'>
          <div className='footerText'>Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tepo the.</div>
          <div className='footerPhone'>
            <img src={phoneImg} alt="" className='footerPhoneImg'/>
            <span>(973) 068 2300</span>
          </div>
        </div>
        <div className='footerRight'>
          <span className='footerLinks'>Быстрые ссылки</span>
          <div className='footerLinksGrid'>
            <div className='footerLinksRow'>
              <button className="footerLink">О нас</button><br/>
              <button className="footerLink">Список цен</button><br/>
              <button className="footerLink">Связаться с нами</button><br/>
              <button className="footerLink">Встретьте нашу команду</button><br/>
              <button className="footerLink">Последние новости</button><br/>
            </div>
            <div className='footerLinksRow'>
              <button className="footerLink">Изучение кейсов</button><br/>
              <button className="footerLink">FAQ's</button><br/>
              <button className="footerLink">Сервисы</button><br/>
              <button className="footerLink">Поддержка клиентов</button><br/>
            </div>
          </div>
        </div>
      </div>
      <div className='footerLine'/>
      <div className="footerBottom">
        <div className="footerRights"> © 2023 davixq All Rights Reserved</div>
        <div className="footerSomeLinks">
          <button className="footerPol">Условия использования</button>
          <button className="footerPri">Политика приватности</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default HomePage