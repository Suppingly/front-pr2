import arrowImg2 from '../../assets/arrow (2).png'
import arrowImg3 from '../../assets/arrow (3).png'
import humanImg3 from '../../assets/image (6).png'
import humanImg4 from '../../assets/image (7).png'
import lineImg from '../../assets/element.png'
import quoteImg from '../../assets/quote.png'
import './Review.css'

function ReviewPage(){
  return (
    <>
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
    </>
  )
}
export default ReviewPage