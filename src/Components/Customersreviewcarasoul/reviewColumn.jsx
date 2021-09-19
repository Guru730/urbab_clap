import React from 'react'
import './reviewColumn.css'



//importing reviewCarasoul
import ReviewCarasoul from './reviewcarasoul'


//importing Heading from offerHeadings
import Heading from '../body/Bestoffers/Offers/heading/offersheading'

function reviewColumn() {

    const main_heading = 'Customer Safety Is Our Priority'

    const sub_heading = 'What customer are saying about our safety standards'
    return (
        <>
        <div className='best-offers-column-ctn'>
            <Heading mainheading={main_heading} subheading={sub_heading}/>
            <div>
                  <ReviewCarasoul/>
            </div>
        </div>
        </>
    )
}

export default reviewColumn
