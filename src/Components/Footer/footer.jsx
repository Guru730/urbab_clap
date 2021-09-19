import React from 'react'
import './footer.css'



//importing top part of footer
import FooterTop from './FootersLink/footertoplinks/footertoplink'



//importing footer body
import FooterBody from './FootersLink/footerbody/footerbody'

//importing footer bottom
import FooterBottom from './FootersLink/footerbottom/footerbottom'


function footer() {
    return (
        <div className='footer-wrapper'>
            <FooterTop/>
             <FooterBody/>
             <FooterBottom/>
             
        </div>
    )
}

export default footer
