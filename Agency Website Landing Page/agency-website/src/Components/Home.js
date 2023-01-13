import React from 'react'
import Header from './Header'
import img1 from './Images/2905211.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Home() {
    return (
        <div className='body'>



            <Header />
            <FontAwesomeIcon icon="fa-regular fa-circle-small" />
            <div className='home-text'>
                Sharing Vitality<br />
                <b>Through Designing</b>
             
                <div className = 'circleBg'></div>
                <div className = 'circleBgTwo'></div>
                <div className = 'circleBgThree'></div>
                <div className = 'circleBgFour'></div>
                <div className = 'circleBgFive'></div>
                <div className='pinkBg'></div>
                
                

                
            </div>
            

            <img src={img1} alt="" className='img1' />

            <div className='underline-Text'>
                clean design and advanced digital solutions
            </div>
            <div className='home-btn'>
                <button className='home-btn1'>Explore More</button>
                <button className='home-btn2'>See Live Demo</button>
            </div>
        </div>
    )
}