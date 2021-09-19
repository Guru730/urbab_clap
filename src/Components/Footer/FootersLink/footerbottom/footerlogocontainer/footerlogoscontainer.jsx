import React from 'react'
import './footerlogocontainer.css'


//importing logos for 
import Google from '../../../../../assets/footersassets/google logo.svg'

import Facebook from '../../../../../assets/footersassets/facebook logo.svg'

import Instagram from '../../../../../assets/footersassets/instagram logo.svg'

import Linkedin from '../../../../../assets/footersassets/linkedin logo.svg'

import Twitter from '../../../../../assets/footersassets/twitter.svg'

import Youtube from '../../../../../assets/footersassets/youtube logo.svg'



function footerlogoscontainer() {
    return (
        <div className='logos-wrapper'>
        <div id='google-logo-ctn' className='logo-ctn'>
          <img src={Google} alt="google logo" id='google-logo' className='logo'/>
        </div>
        <div id='facebook-logo-ctn' className='logo-ctn'>
            <img src={Facebook} className='logo' id='facebook-logo' alt="facebook logo"/>
        </div>
        <div id='instagram-logo-ctn' className='logo-ctn'>
            <img src={Instagram} className='logo' id='instagram-logo' alt="Instagram logo"/>
        </div>
        <div id='linkedin-logo-ctn' className='logo-ctn'>
            <img src={Linkedin} className='logo' id='linkedin-logo' alt="Linkedin-logo"/>
        </div>

        <div id='twitter-logo-ctn' className='logo-ctn'>
            <img src={Twitter} className='logo' id='twitter-logo' alt="Twitter-logo"/>
        </div>
        <div id='youtube-logo-ctn' className='logo-ctn'>
            <img src={Youtube} className='logo' id='youtube-logo' alt="Youtube-logo"/>
        </div>
    
    </div>

    )
}

export default footerlogoscontainer
