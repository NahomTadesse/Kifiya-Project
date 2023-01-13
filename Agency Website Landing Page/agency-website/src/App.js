import React from 'react'
import './App.css'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Header from './Components/Header'
import Resources from './Components/Resources'
export default function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Services />
      <Resources />
    </div>
  )
}