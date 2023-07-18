import React from "react";



function Card(props){
    return(
        <>
          <div data-aos="fade-up" className="one-card">
            <img src={props.image} alt="blank"/>
            <div className="card-txt">
            <h1>{props.title} </h1>
            <p>{props.description}...</p>
            <p>{props.genre}</p>
            <p>IMDB : {props.rating} </p>
            </div>
            <a className="trailer-anc" href={props.trailer} target="_blank"><button className="trailer-btn">Watch Trailer</button></a>
            
          </div>  
        </>
    );
}
export default Card;