import React from 'react'
import Header from './Header'
import '../Styles/Resources.css'
export default function Resources() {
    return (
        <div>
            <h2 className='left-text'>Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the is the magna aliquyam.</h2>
            <p className='right-text'>We are digital designer living in Addis Ababa. Apart from eating burger</p>
            <div className='top-list'>
                <ul >
                    <li>SENT MAIL</li>
                    <li>MAKE CALL</li>
                    <li>GET IN TOUCH</li>
                </ul>
            </div>
            <div className='bottom-list'>
                <ul >
                    <li>info.portfolio.c</li>
                    <li>+2519468484<br />+2519468484 </li>
                    <li>123/4</li>
                </ul>
            </div>
            <div className='line'></div>
            <h3 className='footer'>2022 All Rights Reserved</h3>
        </div>

    )
}