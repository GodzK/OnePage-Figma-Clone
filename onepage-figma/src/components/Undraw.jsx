import React from 'react'
import "./Intro.css";
function Undraw() {
  return (
    <div className='intro-container'>
        <div className='intro-image'>
            <img src="/images/undraw.png" alt="" />
        </div>
        <div className='Landingpage-text'>
          <div><h1 className='h1'> Light,Fast & Powerful</h1><br/><br/>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus alias temporibus <br/>enim asperiores ad! Cumque iste cupiditate molestias dolores dolor quos,<br/> soluta minus nostrum voluptates, corporis sint porro consectetur deserunt.</p>
        </div><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, repellat!</p> <br/>
          <button
            type="button"
            className="text-white text-sm px-5 py-10  focus:outline-none btn-header1 "
          >
            Purchase Now
          </button>
        </div>
     
    </div>
  )
}

export default Undraw