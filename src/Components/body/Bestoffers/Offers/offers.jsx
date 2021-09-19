import React from 'react'
import './offers.css'

import Img1 from '../../../../assets/u_c.jpg'

function offers({image, lable, discount}) {
  

     if( !image) {
         return (
             <div className='offer-wrapper'
             ></div>
         )
     }
      else {

    return (
        
        <div className='offer-wrapper'>
           
            <div className='img-ctn'>
                <img className='img' src={image} />
            </div>
            <div className='lable-ctn'>
                <p className='lable'>{lable}</p>
            </div>
            <div className='discount-ctn'>
                <p className='discount'>{discount}</p>
            </div> 
        </div>
    )
      }
}

export default offers
