import React, {useState} from 'react'
import './billandquantity.css'





//importing congrats popup from congratespopup.js
import CongratesPopup from './BookingOrderCongratesPopUp/congratspopup'

function Billandquantity({handleClick, bill}) {


    const [ShowCongrates, setShowCongrates] = useState(false);

    return (
       <>
        <div onClick={() => setShowCongrates(true)} className='booking-order-page-bill-wrapper'>
                     <span className='booking-order-bill'>Click to Save {bill} on final bill</span>
                     <span className='booking-order-bill-arrow'>&#8811;</span>
                 </div>

                 <div className='booking-order-page-bill-and-quantity-wrapper'>
                     <span className='booking-order-bill'>Click to Save {bill} on final bill    </span>
                     <span className='booking-order-bill-arrow'>&#8811;</span>
                 </div>

                 <CongratesPopup price={bill}   onClose={() => setShowCongrates(false)}  isOpen={ShowCongrates}/>
                 
       </>
    )
}

export default Billandquantity
