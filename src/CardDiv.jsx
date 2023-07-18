import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function cardMap(props){
    return(
        <>
        {/* <div className="card-box"> */}
        {/* slice holo koto ggolo letter show korate chao */}
            <Card 
             image={props.image}  
             title={props.title.slice(0,50)} 
             description={props.description.slice(0,50)}   
             rating={props.rating}   
             genre={props.genre}   
             trailer={props.trailer}    
            />
            
            
        

        </>
    );
}
function CardDiv(){
        
    const [apiArr, setapiArr] = useState([]);
    useEffect(() => {
        apiCall();
        AOS.init();
        AOS.refresh();
      }, []);
    // const options={
            // method:'GET',
            // url:'https://api.npoint.io/dd3014cab848896ebaa4',
            // headers:{
            //     'X-RapidAPI-Key':'ff4815a894mshef90b6cc2091b2fp1bcf42jsne0fd5802b6c1',
            //     'X-RapidAPI-Host':'imdb-top-100-movies.p.rapidapi.com'
            // }

    // }
    async function apiCall(){
        const response=await axios.get("https://api.npoint.io/badb9cb819d4ea8ec9f4");
        console.log("API DATA",response.data);
        setapiArr(response.data);

    }
    
    return(
        <>
        
        {apiArr.map(cardMap)}
        </>
    );
}
export default CardDiv;