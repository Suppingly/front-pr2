import './Partners.css'
import logoImg1 from '../../../assets/1.png'
import logoImg2 from '../../../assets/2.png'
import logoImg3 from '../../../assets/3.png'
import logoImg4 from '../../../assets/4.png'
import logoImg5 from '../../../assets/5.png'
import logoImg6 from '../../../assets/6.png'

export default function Partners() {
  return (
    <div className='logosCon'>
      <img src={logoImg1} alt='Partner logo 1' className='logoImg'/>
      <img src={logoImg2} alt='Partner logo 2' className='logoImg'/>
      <img src={logoImg3} alt='Partner logo 3' className='logoImg'/>
      <img src={logoImg4} alt='Partner logo 4' className='logoImg'/>
      <img src={logoImg5} alt='Partner logo 5' className='logoImg'/>
      <img src={logoImg6} alt='Partner logo 6' className='logoImg'/>
    </div>
  )
}
