import React from 'react';
import './Landingpage.css'
function Landingpage() {
  return (
    <>
    <div className='Landingpage-container'>
        <div className='Landingpage-text'>
          <div><h1 className='h1'> Light,Fast & Powerful</h1><br/><br/>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus alias temporibus <br/>enim asperiores ad! Cumque iste cupiditate molestias dolores dolor quos,<br/> soluta minus nostrum voluptates, corporis sint porro consectetur deserunt.</p>
        </div><br /><br />
         <div className='Landingpage-item'>
          <div className='item1'>
          <img src="/images/icon.png" alt="" className='icon-lp'/>
          <h2>Title Goes Here</h2>
          <p>Lorem ipsum dolor sit amet consectetur,<br/> Lorem ipsum dolor sit amet </p>
          </div>
          <div style={{marginLeft:"1.5rem"}} className='item1'>
          <img src="/images/icon.png" alt="" className='icon-lp'/>
          <h2>Title Goes Here</h2>
          <p>Lorem ipsum dolor sit amet <br/>Lorem ipsum dolor sit amet consectetur,</p></div>
        </div>
        </div>
        <div>
          <img src="/images/fm2.png" alt="" />
        </div>
    </div><br/><br/><br/>
    </>
    
  );
}

export default Landingpage;
