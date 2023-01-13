import React from 'react'
import Header from './Header'
import '../Styles/Service.css'


export default function Services() {
    return (
        <div className='servBody'>
            <p className='title'>My Services</p>
            <p className='sub-title'>Our Provided Features & Expertise</p>
            <div className='card-one'>
                <img className='card-img' width='70px' height='70px' />
                <h1 >Web Design</h1>
                <p className='title-web'></p>
                <h3>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</h3>
                <button className='btn'>Know More</button>
            </div>
            <div className='card-two'>
                <h1>95%</h1>
                <p className='card-two-line'></p>
                <h2>Web Design</h2>
                <h3>HTML,CSS,JQUERY</h3>
            </div>
            <div className='card-three'>
                <h1>85%</h1>
                <p className='card-three-line'></p>
                <h2>Graphic Design</h2>
                <h3>Photoshop,Illustrator</h3>
            </div>
            <div className='card-four'>
                <img className='card-img2'/>
                <h1 >Graphics Design</h1>
                <p className='title-web'></p>
                <h3>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</h3>
                <button className='btn2'>Know More</button>
            </div>
            <div className='card-five'>
                <img className='card-img3' width='70px' height='70px' />
                <h1 >Web Design</h1>
                <p className='title-web'></p>
                <h3>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</h3>
                <button className='btn'>Know More</button>
            </div>
            <div className = 'bgBox'></div>
            <div className='card-six'>
                <h1>70%</h1>
                <p className='card-six-line'></p>
                <h2>Web Design</h2>
                <h3>HTML,CSS,JQUERY</h3>
            </div>
            
            <button className='view-btn'>View More</button>
        </div>
    )
}