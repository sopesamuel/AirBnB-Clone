import React from "react"
import Star from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/images/star.png"
 

export default function Player1(props){

    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }

return(
            <div className="katie">
                <span className="props-img"> <img src= {props.item.coverImg}  className="prop-img" /></span>
                {badgeText && <div className="katie-text">{badgeText}</div>}
                 <div className="katie-star-text"><img src={Star} /> 
                 <p>{props.item.stats.rating}<span className="Light-txt">({props.item.stats.reviewCount}).{props.item.location}</span></p>
                 </div>
                <div className="katie-star-text2">{props.item.title}<br>
                </br><span className="Bold-txt">From ${props.item.price}</span>/ person</div>
            </div>
)
}

