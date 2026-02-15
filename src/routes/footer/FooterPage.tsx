import phoneImg from '../../assets/icon1.png'
import './Footer.css'

function FooterPage(){
  return (
    <>
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
export default FooterPage