import React from 'react'
import './packagefield.css'






function packagefield({image, text, link}) {
    return (
        <div className='package-field-wrapper'>
            <div className='package-field-image-wrapper'>
                <img src={image} className='package-field-image'/>
            </div>
            <div className='package-heading-wrapper'>
            <span className='package-heading'>{text}</span>
            </div>
            <div className='package-field-arrow-wrapper'>
                <span className='package-field-arrow'>&rsaquo;</span>
            </div>
        </div>
    )
}

export default packagefield
