import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import './styles/scss/App.scss'

function App() {

  return (
    <div className="container">
     <Navbar />
     <Hero />
    </div>
  )
}

export default App
