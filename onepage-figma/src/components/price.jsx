import React from 'react'
import "./price.css"
function Price() {
  return (
    <div className='price-container' >
        <div className='price-info'> 
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl">A Price To Suit Everyone</h1>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus<br/> explicabo iure aliquid facilis harum vero consequatur laborum quisquam<br/> soluta iusto, delectus amet, magnam ut autem omnis ad nam, eligendi hic eaque?</p>
        </div>
        <div className='fourty'>
            <h1 >$40</h1>
            <p style={{color:"#37447E"}}>UI Design Kit</p>
        </div>
        <div className='price-btn'>
            <p className=''>See,One price. Simple.</p>
            <button
            type="button"
            className="text-white text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none btn-header1 ml-8">
            Purchase Now
          </button>
        </div>
       
    </div>
   
  )
}

export default Price