import React from 'react'
import './carasoulimage.css'


function carasoulimage({imageUrl, id, text}) {
    return (
        <div className='carasoul-image-ctn'>
            <div className='image-wrapper'>
                <img key={id} src={imageUrl} className='image' />
            </div>
            <div className='text-wrapper'>
                <span className='text'>{text}</span>
            </div>
        </div>
    )
}

export default carasoulimage
