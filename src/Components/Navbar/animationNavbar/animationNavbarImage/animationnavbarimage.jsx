import React from 'react'
import './animationNavbarimage.css'



import Img from '../../../../assets/MenuitemsImages/1.png'


function animationnavbarimage({image, lable}) {
    return (
        <div className='scroll-navbar-images-wrapper'>
            <img src={image} className='scroll-navbar-images' alt="service-image"/>
         
                <span className='scroll-navbar-lable'>{lable}</span>
          
        </div>
    )
}

export default animationnavbarimage
