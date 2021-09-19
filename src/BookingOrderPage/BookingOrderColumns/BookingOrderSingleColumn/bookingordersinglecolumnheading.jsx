import React, { Component } from 'react'





import BookingServiceCard from './BookingOrderCard/bookingordercard'






function bookingordersinglecolumn({id, columnHeading,}) {
    return (
       <>
         <h1 id={id} style={{fontSize: '24px' }} className='booking-service-page-column-heading'>{columnHeading}</h1> 
       </>
    )
}

export default bookingordersinglecolumn
