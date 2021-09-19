import React from 'react'
import './carasoulbutton.css'

function carasoulbutton({direction, handleClick, image}) {
    return (
        <div className='button-ctn'>
            <div onClick={handleClick} className='button-link'>
                <span className='button'>{image}</span>
            </div>
        </div>
    )
}

export default carasoulbutton
