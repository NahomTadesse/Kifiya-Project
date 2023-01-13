import React from 'react'
import Header from './Header'
// import img2 from './Images/freelancer-bearded-man-taking-notes-laptop_85574-3146.png'
import '../Styles/About.css'
export default function AboutUs() {
    return (
        <div >
            <img className='img2' />
            
            <img className='x' style={{}}/>
            <div className='dotBox'></div>
            <div className='title1'>About Us</div>
            <p className='aboutUs-title'>Why hire us for your next project?</p>
            <p className='paragraph'>
                We are Creative Director and UI/UX Designer from New York, working in web development and print media. We enjoy turning complex problems into simple, beautiful and intuitive designs. Our job is to build your website so that it is functional and user-friendly but at the same time attractive.</p>
            <button className='about-btn'>Download CV</button>
            <div className='percents'>
                <div className='percents-one'>
                    <p style = {{fontWeight:'bold',fontSize:30}}>50%</p>
                    <p style = {{marginTop:-20}}>WEB DESIGN</p>
                </div>
                <div className='percents-two'>
                    <p style = {{fontWeight:'bold',fontSize:30}}>75%</p>
                    <p style = {{marginTop:-20}}>Development</p>
                </div>
                <div className='percents-three'>
                    <p style = {{fontWeight:'bold',fontSize:30}}>20%</p>
                    <p style = {{marginTop:-20}}>WEB DESIGN</p>
                </div>
                <div className='percents-four'>
                    <p style = {{fontWeight:'bold',fontSize:30}}>50%</p>
                    <p style = {{marginTop:-20}}>User Experience</p>
                </div>
            </div>
        </div>


    )
}