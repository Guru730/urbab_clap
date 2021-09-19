import React from 'react'
import './cleaning.css'



//importing Heading for column 
import Heading from '../Offers/heading/offersheading'


//importing offers components
import Offers from '../Offers/offers'

//importing props object from objects.js
import {cleaning} from '../../../../object'

function Cleaning() {
    const main_heading = 'Cleaning & Pest Control';

    const sub_heading = 'Removes hard stains & more';


    return (
        <div className='best-offers-column-ctn'>
            <Heading mainheading={main_heading} subheading={sub_heading}/>
            <div className='offers-ctn'>
            {
              cleaning.map((value, idx) => {
                  return ( <Offers image={value.image} lable={value.lable} discount={value.discount} />
                           
                  )
              })
            }
            </div>
        </div>
    )
}

export default Cleaning;
