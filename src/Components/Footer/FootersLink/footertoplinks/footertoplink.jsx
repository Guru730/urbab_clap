import React from 'react'
import './footertoplink.css'


//importing link for links
import FooterLink from '../footerComponents/footerlinks/footerlink'

function footertoplink() {

    const linkspropperties = [{lable: 'About Us'},{lable: 'Terms & Conditions'},{lable: 'Privacy Policy'}, {lable: 'Anti Discrimination Policy'}, {lable: 'Blog'}, {lable: 'Reviews'}, {lable: 'Near Me'}, {lable: 'Careers'}, {lable: 'Gift Cards'}, {lable: 'Contact Us'}];

    return (
        <div className='footer-top-wrapper'>
            <div className='links-ctn'>
        {
            linkspropperties.map((value, idx) => {
                return <FooterLink tittle={value.lable}/>
            })
        }
           </div>
            
        </div>
    )
}

export default footertoplink
