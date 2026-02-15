import './Team.css'
import { useState } from 'react'
import humanImg from '../../../assets/image (3).png'
import humanImg1 from '../../../assets/image (4).png'
import humanImg2 from '../../../assets/image (5).png'
import arrowImg2 from '../../../assets/arrow (2).png'
import arrowImg3 from '../../../assets/arrow (3).png'
import socialImg from '../../../assets/Vector.png'
import socialImg1 from '../../../assets/Vector (1).png'
import socialImg2 from '../../../assets/Vector (2).png'
import socialImg3 from '../../../assets/Vector (3).png'
import dotAcImg from '../../../assets/Rectangle 46.png'
import dotImg from '../../../assets/Ellipse 19.png'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  socials?: boolean
}

const teamMembers: TeamMember[] = [
  { id: 0, name: 'Aimee Calderon', role: 'Веб-разработчик', image: humanImg },
  { id: 1, name: 'Raymond Horn', role: 'Цифровой маркетолог', image: humanImg1, socials: true },
  { id: 2, name: 'Linda Towner', role: 'Дизайнер приложений', image: humanImg2 }
]

export default function Team() {
  const [teamIndex, setTeamIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const teamPrev = () => {
    setDirection('prev')
    setTeamIndex((i) => (i === 0 ? teamMembers.length - 1 : i - 1))
  }
  const teamNext = () => {
    setDirection('next')
    setTeamIndex((i) => (i === teamMembers.length - 1 ? 0 : i + 1))
  }

  const visibleMembers = [
    teamMembers[teamIndex % teamMembers.length],
    teamMembers[(teamIndex + 1) % teamMembers.length],
    teamMembers[(teamIndex + 2) % teamMembers.length],
  ]

  return (
    <div id="team" className="container px-[8rem] py-25">
      <div className="flex flex-row justify-between mb-12 w-full">
        <div className='w-1/2 text-left'>
          <div className="text-[18px] uppercase tracking-wider text-gray-400 text-left mb-2">Наша команда</div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium leading-tight">
            Стройте наше будущее<br/>Увидите членов команды
          </h1>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <p className="text-gray-300 text-left h-1/2 w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex items-center gap-6 h-1/2">
            <button type="button" className="flex justify-center p-4 size-12 rounded-full bg-stone-800 hover:bg-stone-900 cursor-pointer transition-transform hover:scale-110" onClick={teamPrev}>
              <img src={arrowImg3} alt="Previous slide" />
            </button>
            <button type="button" className="flex justify-center p-4 size-12 rounded-full bg-stone-700 hover:bg-stone-800 cursor-pointer transition-transform hover:scale-110" onClick={teamNext}>
              <img src={arrowImg2} alt="Next slide" />
            </button>
          </div>
        </div>
      </div>
      
      <div key={`m-${teamIndex}`} className={`team-slider ${direction === 'next' ? 'enter-next' : 'enter-prev'} md:hidden`}>
        {visibleMembers.slice(0, 1).map((member) => (
          <div key={member.id} className="team-card">
            <div className='relative'>
              <img src={member.image} alt={member.name} className="w-full"/>
              {member.socials && (
                <div className="absolute bottom-0 right-0 w-10 h-7/20 bg-[#E3B27D] flex flex-col items-center justify-around py-3">
                  <a href="#"><img src={socialImg} alt='Facebook'/></a>
                  <a href="#"><img src={socialImg1} alt='Twitter'/></a>
                  <a href="#"><img src={socialImg2} alt='Instagram'/></a>
                  <a href="#"><img src={socialImg3} alt='LinkedIn'/></a>
                </div>
              )}
            </div>
            <div className="py-6 text-left">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div key={`d-${teamIndex}`} className={`team-slider ${direction === 'next' ? 'enter-next' : 'enter-prev'} hidden md:grid md:grid-cols-3 gap-8`}>
        {visibleMembers.map((member) => (
          <div key={member.id} className="team-card">
             <div className='relative'>
                <img src={member.image} alt={member.name} className="w-full"/>
                {member.socials && (
                  <div className="absolute bottom-0 right-0 w-10 h-[35%] bg-[#E3B27D] flex flex-col items-center justify-around py-3">
                    <a href="#"><img src={socialImg} alt='Facebook'/></a>
                    <a href="#"><img src={socialImg1} alt='Twitter'/></a>
                    <a href="#"><img src={socialImg2} alt='Instagram'/></a>
                    <a href="#"><img src={socialImg3} alt='LinkedIn'/></a>
                  </div>
                )}
             </div>
            <div className="py-6 text-left">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2 md:hidden">
        {teamMembers.map((_, index) => (
          <button 
            key={index}
            type="button" 
            onClick={() => {
              setDirection(index > teamIndex ? 'next' : 'prev')
              setTeamIndex(index)
            }} 
            className="p-1 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" 
            aria-label={`Слайд ${index + 1}`}
          >
            <img src={teamIndex === index ? dotAcImg : dotImg} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
