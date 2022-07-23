import React from "react";
import Katie from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/images/katie-zaferes.png"
import Star from "/Users/mac/Documents/Air-BNB Clone/air-bnb-app/src/images/star.png"
 
export default function Player1(){
    return(
        <div className="players">
            <div className="katie">
                <img src={Katie} /><div className="katie-text"> SOLD OUT </div>
                 <div className="katie-star-text"><img src={Star} /> <p>5.0 <span className="Light-txt">(6).USA</span></p></div>
                <div className="katie-star-text2">Life lessons with Katie Zaferes<br>
                </br><span className="Bold-txt">From $136</span>/ person</div>
            </div>
        </div>
    )
}
