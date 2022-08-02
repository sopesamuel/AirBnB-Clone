import React from "react"
import Katie from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/images/katie-zaferes.png"
import Star from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/images/star.png"
 

export default function Player1(props){
    
return(
    <div className="player1">
            <div className="katie">
                <img src={Katie} />
                <div className="katie-text"> SOLD OUT </div>
                 <div className="katie-star-text"><img src={Star} /> 
                 <p>{props.rating}<span className="Light-txt">({props.rating}).{props.location}</span></p>
                 </div>
                <div className="katie-star-text2">{props.title}<br>
                </br><span className="Bold-txt">From ${props.price}</span>/ person</div>
            </div>
        </div>
)
}

