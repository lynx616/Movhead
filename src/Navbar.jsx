import React, { useState,useEffect } from 'react';
import axios from 'axios';
import SrchCard from './SrcCard';


function srchCardMap(props){
    
    return(
        <>
        {props.i && props.l && props.y && props.rank && props.s ? (
          <SrchCard
            image={props.i.imageUrl}
            title={props.l.slice(0,50)}
            year={props.y}
            rank={props.rank}
            cast={props.s}
          />
                                ) : (
          // Handle the case when prop values are not available
          <div>Some cards might not be available</div>
        )}
      </>
    );
}
function Navbar({ handleButtonClick, originfunc, catefunc, trendfunc, abtfunc, srchapiCall }){
   
    const [show, setshow] = useState(false);
    const [srch, setsrch] = useState('');
    const [srchres, setsrchres] = useState([]);
    


    useEffect(() => {
        
      }, [srch, srchres]);
  

    function updateData(e){
        setsrch(e.target.value);
        // console.log(srch, e.target.value);

    };
    function handleKeypress(e){
      if(e.key==='Enter'){
        srchapiCall();
      }
    };
    async function srchapiCall(){
       
        console.log(srch);
        const options={
            method: 'GET',
            url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
            params: {q:srch},
            headers: {
              'X-RapidAPI-Key': '68b19c647cmsh9d2c26c2ea9bbcep181003jsn9500b9558af2',
              'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }

          };
        
        const response=await axios.request(options);
        
        setsrchres(response.data.d);
        setshow(!show);
        console.log(response.data.d);
        // console.log(srchres, "showing");
        if(srchres.length!=null){
            setshow(true);
        }
        else{
            setshow(false);
        }
    

     }
     
        
    
    function closePanel(){
        setshow(false);
    }

    return(
        <>
        <div className="whole">
        <video className="vid-nav" src="video1.mkv" loop muted playsInline autoPlay/>
        <div className="navbar">
            <img role='button' onClick={originfunc} src="logo1.png" alt="Logo"/>
            <ul className="navul">
             <li><a href="#">Home</a></li>
             <li><a role='button' onClick={catefunc} href="#">Categories</a></li>
             <li><a href="#test">Top imdb</a></li>
             <li><a onClick={abtfunc} href="#">About</a></li>
             <li><a onClick={trendfunc} href="#">Trendings</a></li>
            </ul>
            <div className="search-bar">      
            <input onKeyDown={handleKeypress} onChange={updateData} value={srch}  type="text" placeholder="Type here.."/>
            <button onClick={srchapiCall} type="submit">search</button>
            </div> 

            
        </div>
        <div className='bottom-sec'>
        <div className="batman-txt">
        <h1>THE BATMAN</h1>
        <p>The Batman is a 2022 American superhero film based on the DC Comics<br/> character Batman. Produced by Warner Bros.</p>
        <a href='#test'><button>
    Show more </button></a>
        </div>
        <div className='music-btn'>
        {/* <audio className="myAudio" src='audio.mp3' controls autoplay/> */}
        <a href='#'><button>
        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8285 11.9481L16.2427 10.5339L12 6.29122L7.7574 10.5339L9.17161 11.9481L11 10.1196V17.6568H13V10.1196L14.8285 11.9481Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7782 4.22183C15.4824 -0.0739415 8.51759 -0.0739422 4.22183 4.22183C-0.0739415 8.51759 -0.0739422 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604Z" fill="currentColor" /></svg></span>
            </button></a>
            </div>
            </div>
            <div id='test'><h1>.</h1></div>
        </div>
        {show && <div className='categ srch-sec'>
                    <h1>Results
                    <button onClick={closePanel} className='close-btn'>
    <svg
     className="socialSvg instagramSvg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
    fill="currentColor"
  />
  </svg>
  </button>
                    
                    </h1>
                    
                    {srchres.map(srchCardMap)} 

                    
            </div>} 
        </>

    );
}

export default Navbar;