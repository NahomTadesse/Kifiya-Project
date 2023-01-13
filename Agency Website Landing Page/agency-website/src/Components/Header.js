import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import { AboutUs } from './AboutUs';
import { Services } from './Services';
import { News } from './News';
import { Resources } from './Resources';

export default function Header() {

    return (
        <div>
        

            <Router>
                <div className='header'>
                    <ul>
                        <li>  <Link to='/' > Home </Link> </li>
                        <li>  <Link to='aboutUs'>About Us </Link>  </li>
                        <li>  <Link to='services'> Services</Link>  </li>
                        <li>  <Link to='news'> News</Link>  </li>
                        <li>  <Link to='resources'> Resources</Link>  </li>
                    </ul>
                </div>
                <Routes>
                    {/* <Route path='/' element={<Home />} />
                    <Route path='/aboutUs' element={<AboutUs />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/resources' element={<Resources />} />
                    <Route path='*' element={<h1>404 NOT FOUND </h1>} /> */}
                </Routes>
            </Router>
        </div>
    )


}