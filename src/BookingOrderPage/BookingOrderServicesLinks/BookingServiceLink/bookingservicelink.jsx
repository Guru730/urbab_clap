import React, {useState} from 'react'
import './bookingservicelink.css'


function Bookingservicelink({text, handleClick, id}) {



    
    return (
        <div  className='booking-service-link-wrapper'>
            <div id={id} onClick={handleClick} className='booking-service-link'>
                <span className='booking-service-link-text'>
                  {text}
                </span>
            </div>
        </div>
    )
  
}

export default Bookingservicelink
