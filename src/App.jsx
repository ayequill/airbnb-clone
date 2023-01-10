import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Card from "./components/Card";
import "./styles/scss/App.scss";
import data from "./data";

function App() {
  // iterate over the data to create props array
  const cardElements = data.map((card) => {
    return (
      <Card
        // always include a 'key'
        key={card.id}
        {...card}
        // card = {card}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="sec-2">{cardElements}</section>
    </div>
  );
}

export default App;
