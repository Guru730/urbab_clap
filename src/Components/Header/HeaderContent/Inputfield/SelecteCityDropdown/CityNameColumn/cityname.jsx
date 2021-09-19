import React from 'react'
import './cityname.css'



function cityname({text}) {
    return (
        <div className='cityname-wrapper'>
            <div className='cityname-column'>
                <span className='cityname'>{text}</span>
            </div>
        </div>
    )
}

export default cityname
