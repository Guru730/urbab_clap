import React from 'react'
import './appliances.css'



//importing heading for column
import Heading from '../Offers/heading/offersheading'

//importing props object for appliance
import {appliancesprops} from '../../../../object'


//import Offers card components
import Offers from '../Offers/offers'



function appliances() {

    const sub_heading = 'Expert technicians at your doorsteps in 2 hours';
        
       const main_heading = 'Appliances: Services & Repair';  

        return (
            <div className='best-offers-column-ctn'>
                <Heading mainheading={main_heading} subheading={sub_heading}/>
                <div className='offers-ctn'>
                {
                  appliancesprops.map((value, idx) => {
                      return ( <Offers image={value.image} lable={value.lable} discount={value.discount} />
                               
                      )
                  })
                }
                </div>
            </div>
    )
}

export default appliances
