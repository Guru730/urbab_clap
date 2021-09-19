import React from 'react'
import './orderpage.css'





//importing navbar from nav
import Navbar from './BookingOrderPageNavbar/bookingorderpagenavbar'

//importing columns for order page
import Columns from './BookingOrderColumns/bookingordercolumn'




//importing Links columns 
// import LinksColumn from './BookingOrderServicesLinks/bookinorderservicelinks'

function orderpage() {
    return (
        <div className='booking-page-wrapper'>
            <div className='booking-page-navbar-ctn'>
                   <Navbar/>
            </div>
      
            <Columns/>
        </div>
    )
}

export default orderpage
