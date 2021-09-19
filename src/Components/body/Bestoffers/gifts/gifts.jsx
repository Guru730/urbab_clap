import React from 'react'
import './gifts.css'


//importing Offers cards 
import Offers from '../Offers/offers'


//importing Heading component for column
import Heading from '../Offers/heading/offersheading'


//importing props object for offers cards props
import {giftsoffers} from '../../../../object'


function gifts() {

  const main_heading = 'Gift your loved one' 

    const sub_heading = 'An amazing Urban Company experience which they will remember';
    return (
        <div className='best-offers-column-ctn'>
        <Heading mainheading={main_heading} subheading={sub_heading}/>
        <div className='offers-ctn'>
        {
          giftsoffers.map((value, idx) => {
              return ( <Offers image={value.image} lable={value.lable} discount={value.discount} />
                       
              )
          })
        }
        </div>
    </div>
    )
}

export default gifts
