import React, { useState } from "react";
import Navbar from "./Navbar";
import CardDiv from "./CardDiv";
import LeftCard from "./LeftCard";
import Categories from "./Categories";
import Trending from "./Trending";
import About from "./About";
import Heading from "./Heading";


// import  ReactDOM  from "react";
import "./index.css";


function App(){   
const [isCardVisible, setCardVisible] = useState(true);
const [dekhache, setdekhache] = useState(false);
const [cate, setcate] = useState(false);
const [trend, settrend] = useState(false);
const [abt, setabt] = useState(false);


  function handleButtonClick(){
    setCardVisible(!isCardVisible);
    setdekhache(false);
    setcate(false);
    settrend(false);
    setabt(false);
   
  };
  function handleDekhno(){
    setdekhache(!dekhache);
    
 
    setcate(false);
    settrend(false);
    setabt(false);
  
  };
  function cateDekhao(){
    
    setcate(!cate);
   
    setdekhache(false);
  
    settrend(false);
    setabt(false);
  };  
  function trendDekhao(){
   
    settrend(!trend);
   
    setdekhache(false);
    setcate(false);
   
    setabt(false);
  };
  function abtDekhao(){
    
    setabt(!abt);
   
    setdekhache(false);
    setcate(false);
    settrend(false);
    
  };
  function allClose(){
    console.log("clicked");
    setcate(false);
    setabt(false);
    settrend(false);
  }
  
  // function clspnl(){
  //   setdekhache(!dekhache);
  
  // };
  
    return(
        <>
        <Navbar abtfunc={abtDekhao} trendfunc={trendDekhao} catefunc={cateDekhao}  originfunc={handleDekhno} handleButtonClick={handleButtonClick} />
        <Heading/>
        <div className="card-box">
        {isCardVisible && <CardDiv/>}
        </div>
        {dekhache && <LeftCard/>}
        {cate && <Categories closePanel={allClose} />}
        {trend && <Trending closePanel={allClose} />}
        {abt && <About closePanel={allClose}/>}
        
        </>
    );
}

export default App;