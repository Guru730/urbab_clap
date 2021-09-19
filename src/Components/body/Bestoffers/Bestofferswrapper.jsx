import React from 'react'
import './b_o_w.css'


//importing offer component 
import Offers from './Offers/offers'


//importing heading for column
import Heading from './Offers/heading/offersheading'


//importing offers object for offers components props 
import {offers} from '../../../object'


function Bestofferswrapper() {

    const sub_heading = 'Hygenic & single use-product | Low-contact services'

    return (
        <div className='best-offers-column-ctn'>
            <Heading mainheading='Best Offers' subheading={sub_heading}/>
            <div className='offers-ctn'>
            {
              offers.map((value, idx) => {
                  return ( <Offers image={value.image} lable={value.lable} discount={value.discount} />
                           
                  )
              })
            }
            </div>
        </div>
    )
}

export default Bestofferswrapper
