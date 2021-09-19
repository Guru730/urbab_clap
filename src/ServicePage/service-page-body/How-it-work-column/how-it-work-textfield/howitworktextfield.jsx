import React from 'react'
import './howitworktextfield.css'


import Img from '../../../../assets/referColumnassets/money.png'

function howitworktextfield({image, Arrow, text, subheading}) {
    return (
        <div className='how-it-work-text-field-wrapper'>
            <div className='how-it-work-text-field-image-wrapper'>
                <img src={image} className='how-it-work-text-field-image' alt="image"/>
            </div>
            <div className='how-it-work-text-field-text-wrapper'>
                <span className='how-it-work-text-field-text'>{text}</span>
            
            <div className='how-it-work-text-field-sub-heading-wrapper'>
                <span className='how-it-work-text-field-sub-heading'>{subheading}</span>
            </div>
            </div>
        </div>
    )
}

export default howitworktextfield
