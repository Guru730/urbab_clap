import React from 'react'
import './header.css'


//importing navbar form navbar/navbar.js
import Navbar from '../Navbar/navbar'

//importing headerContent container from contenetContainer
import Content from './HeaderContent/heardercontentcontainer'



//importing Navbar on Scroll from animationNavbar
import ScrollNavbar from '../Navbar/animationNavbar/animationnavbar'

function header({primary}) {
    return (
        <div className='header-wrapper'>
            <ScrollNavbar/>
            <div className='background_image_wrapper'>
               
               <div className='header-content-container'>
                <Content/>
               </div> 

            </div>
        </div>
    )
}

export default header
