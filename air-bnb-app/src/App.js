import React from "react"
import './App.css';
import Navbar from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/Components/Navbar.js"
import Card from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/Components/Card.js"
import Player1 from "./Components/Player1.js"
import Data from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/Components/Data.js"

export default function App() {
const players = Data.map(items =>{
  return (
    <Player1 
    title = {items.title}
    rating ={items.stats.rating}
    reviewCount = {items.stats.reviewCount}
    location = {items.location}
    price = {items.price}
    />
  )
})

  return (
    <div className="App">
      <Navbar />
    <Card />
    {players}
    </div>
  )
}




