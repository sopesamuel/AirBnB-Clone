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
    key = {items.id}
  item = {items}
    />
  )
})

  return (
    <div className="App">
      <Navbar />
    <Card />
    <div className="player1">
    {players}
      </div>
    </div>
  )
}


 

