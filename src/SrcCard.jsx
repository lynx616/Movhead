import React from "react";



function SrchCard(props){
    return(
        <>
          <div className="two-card">
            <img src={props.image} alt="blank"/>
            <div className="twocard-txt">
            <h1>{props.title} </h1>
            <p>YEAR: {props.year}</p>
            <p>RANKING : {props.rank} </p>
            <p>CAST : {props.cast}</p>
            </div>
            
          </div>  
        </>
    );
}
export default SrchCard;