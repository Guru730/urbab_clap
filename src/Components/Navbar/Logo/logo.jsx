import React from 'react'
import './logo.css'


//importing logo image from assets folder
import Logo from '../../../assets/urban_clap logo.svg';

function logo() {
    return (
        <div className='logo_wrapper'>
            <img src={Logo} alt='logo' className='logo'/>
            <h2 className='logo_text'>
               <span className='bigger_letters_heading'>My</span> <span className='smaller_letters_heading'>Company</span>
            </h2>
             <div className='slash-wrapper'><span className='slash'>|</span></div>
             <div className='former_urbanclap_text_wrapper'>
                 <h2 className='former_urbanclap_text' >former urbanclap</h2>
             </div>
        </div>
    )
}

export default logo
