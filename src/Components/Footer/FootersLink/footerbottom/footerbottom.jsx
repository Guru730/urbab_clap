import React from 'react'
import './footerbottom.css'


//importing logos container 
import Logos from './footerlogocontainer/footerlogoscontainer'

import CompanyLogo from '../../../../Components/Navbar/Logo/logo'

function footerbottom() {
    return (
        <div className='footer-bottom-wrapper'>
            <div className='company-logo-ctn'>
              <CompanyLogo />
            </div>
            <div className='logo-ctn'>
              <Logos/>
                </div>
                <div className='signature-ctn'>
                    <p className='signature'>Guru..........</p>
                </div>
        </div>
    )
}

export default footerbottom
