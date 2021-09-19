import React from 'react'
import './inputfieldback.css'

function inputfieldback({width, height, type, placeholder}) {
    return (
        <div className='inputfield-box-second-part'>
        <input style={{width: `${width}vw`,
                      height: `${height}vh`,
                      borderRadius: '1vw'}} className='inputfield' type={type} placeholder={placeholder} />
    </div>
    )
}

export default inputfieldback
