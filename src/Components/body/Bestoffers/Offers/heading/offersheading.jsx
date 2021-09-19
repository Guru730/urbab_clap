import React from 'react'
import './offersheading.css'

function offersheading({mainheading, subheading}) {
    return (
        <div className='offers-heading-ctn'>
        <h1 className='offers-heading'>
             {mainheading}
        </h1>
        <div className='offers-sub-heading-ctn'>
            <h3 className='offers-sub-heading'>
                {subheading}
            </h3>
        </div>
    </div>
    )
}

export default offersheading
