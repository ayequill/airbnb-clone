import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import Card from './components/Card';
import './styles/scss/App.scss'
import data from './data';


function App() {
  // iterate over the data to create props array
  const cardElements = data.map((card)=>{
    return <Card 
    key = {card.id}
    img = {card.coverImg} 
    rating = {card.stats.rating}
    reviewCount = {card.stats.reviewCount}
    country = {card.location} 
    title = {card.title}
    price = {card.price}
    openSpots = {card.openSpots} />
  })
  return (
    <div className="container">
     <Navbar />
     <Hero />
     <section className='sec-2'>

  {cardElements}
    </section>
    </div>
  )
}

export default App
