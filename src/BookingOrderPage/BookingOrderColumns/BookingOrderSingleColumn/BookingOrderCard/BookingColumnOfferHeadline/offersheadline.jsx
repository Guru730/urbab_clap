import React from 'react'
import './offersheadline.css'


function offersheadline({need, symbole}) {

    if(need) {
    return (
        <div className='offers-headline-wrapper'>
            <div className='offers-headline'>
                <div className='offers-headline-symbole-wrapper'>
                <span className='offers-headline-symbole'>&#9822;</span>
                </div>
                <div className='offers-headline-text-wrapper'>
                    <span className='offers-headline-text-line-one'>
                        Buy More Save More
                    </span>
                    <span className='offers-headline-text-line-two'>
                        * Up to 50% Off
                    </span>
                </div>
            </div>
        </div>
    )
    } else {
        return null
    }
}

export default offersheadline
