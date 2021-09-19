import React from 'react'
import './Menuitem.css'




function Menuitem({imageUrl, lable, handleClick}) {
    return (
        <div onClick={handleClick} className='Menuitem-wrapper'>
            <div className='image-ctn'>
                <img src={imageUrl} alt="logo-image" className='logo-image'/>
            </div>
            <div className='service-text-wrapper'>
                <p style={{fontSize: '1vw'}} className='text'>{lable}</p>
            </div>
        </div>
    )
}

export default Menuitem
