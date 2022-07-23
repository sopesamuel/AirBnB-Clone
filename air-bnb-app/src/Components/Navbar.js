import React from "react"
import Images from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav className="nav">
        <img src={Images} className="navbar-img"></img>
        </nav>
    )
}