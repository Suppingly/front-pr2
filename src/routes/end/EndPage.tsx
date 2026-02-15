import groupImg2 from '../../assets/image 34.png'
import arrowImg from '../../assets/arrow.png'
import './End.css'

function EndPage(){
  return (
    <>
      <div className='endContainer'>
        <img src={groupImg2} alt='' className='endImg'/>
        <div className='endLink'>
            <span className='endText'>Давайте сделаем что-то Прекрасным <span className='text-[#E3B27D]'>Вместе!</span></span>
            <div>
            <button className='endBtn'>Связаться с нами<img src={arrowImg} alt="" className='transform-[rotate(-45deg)] mt-5 w-8'/></button>
            </div>
        </div>
      </div>
    </>
  )
}
export default EndPage