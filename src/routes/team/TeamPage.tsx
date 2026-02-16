import humanImg from '../../assets/image (3).png'
import humanImg1 from '../../assets/image (4).png'
import humanImg2 from '../../assets/image (5).png'
import socialImg from '../../assets/Vector.png'
import socialImg1 from '../../assets/Vector (1).png'
import socialImg2 from '../../assets/Vector (2).png'
import socialImg3 from '../../assets/Vector (3).png'
import dotAcImg from '../../assets/Rectangle 46.png'
import dotImg from '../../assets/Ellipse 19.png'
import arrowImg2 from '../../assets/arrow (2).png'
import arrowImg3 from '../../assets/arrow (3).png'
import './Team.css'
import { useState } from 'react'

interface teamMember{
  img:String;
  name: String;
  job: String;
  hasLinks: Boolean;
}
interface section{
  img:String;
  alt:String;
}

function TeamPage(){
  const [teamMembers,setMembers]=useState<teamMember[]>([
    {
      img:humanImg,
      name:'Aimee Calderon',
      job:'Веб-разработчик',
      hasLinks:false
    },
    {
      img:humanImg1,
      name:'Raymond Horn',
      job:'Цифровой маркетолог',
      hasLinks:true
    },
    {
      img:humanImg2,
      name:'Linda Towner',
      job:'Дизайнер приложений',
      hasLinks:false
    }
  ])
  const [sections,setSections]=useState<section[]>([
    { img:dotAcImg,alt:'-' },{ img:dotImg,alt:'0' },{ img:dotImg,alt:'0' }
  ])
  return (
    <>
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
              <button className="button" onClick={()=>{
                let newList=[]
                let newSectionList=[]
                newList.push(teamMembers[teamMembers.length-1])
                for (let i=0;i<teamMembers.length;i++){
                  if (i!=teamMembers.length-1)
                    newList[i+1]=teamMembers[i]
                }
                setMembers(newList)
                for (let i=0;i<sections.length;i++){
                  if (i!=0)
                    newSectionList[i-1]=sections[i]
                }
                newSectionList.push(sections[0])
                setSections(newSectionList)
              }}>
                <img src={arrowImg3} alt="<-" />
              </button>
              <button className="button" onClick={()=>{
                let newList=[]
                let newSectionList=[]
                newList.push(teamMembers[teamMembers.length-1])
                for (let i=0;i<teamMembers.length;i++){
                  if (i!=0){
                    newList[i-1]=teamMembers[i]
                  }
                }
                newList.push(teamMembers[0])
                setMembers(newList)
                newSectionList.push(sections[sections.length-1])
                for (let i=0;i<sections.length;i++){
                  if (i!=sections.length-1)
                    newSectionList[i+1]=sections[i]
                }
                setSections(newSectionList)
              }}>
                <img src={arrowImg2} alt="->" />
              </button>
            </div>
          </div>
        </div>
        <div className="teamGrid">
          {teamMembers.map((memberCard)=>(
          <div className='teamCard'>
            <div className='relative'>
              <img src={memberCard.img} alt={memberCard.name} className="teamImg"/>
              {memberCard.hasLinks && <div className="teamSoc">
                <a href="" className='teamLink'><img src={socialImg} alt='f'/></a>
                <a href="" className='teamLink'><img src={socialImg1} alt='t'/></a>
                <a href="" className='teamLink'><img src={socialImg2} alt='i'/></a>
                <a href="" className='teamLink'><img src={socialImg3} alt='in'/></a>
              </div>}
            </div>
            <div className="teamInfo">
              <h3 className="teamName">{memberCard.name}</h3>
              <p className="teamJob">{memberCard.job}</p>
            </div>
          </div>
          ))}
        </div>
        <div className="teamPages">
          {sections.map((section)=>(
            <img src={section.img} alt={section.alt}/>
          ))}
        </div>
      </div>
    </>
  )
}
export default TeamPage