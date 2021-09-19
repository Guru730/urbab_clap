import React from 'react'
import './navbar.css'


//importing logo from logo.jsx
import Logo from './Logo/logo'

//importing links to pages
import Link from './Links/link'


//importing forms popup
import FormPopUp from './FormsPopUp/formspopup'

function Navbar() {


    const [Show, setShow] = React.useState(false);


    return (
        <div className='navbar'>
            <div className='navbar-content-ctn'>
            <Logo/>
            <div className='links_container'>
          <Link lable='Blog' />
          <div className='registration-link-wrapper'>
          <Link lable='Registration as a Professional'/>
          </div>
          <div onClick={() => setShow(true)} className='signin-link-wrapper'>
          <Link lable='signin/signup'/>
          </div>
          </div>
          <FormPopUp isOpen={Show} onClose={() => setShow(false)}/>
          </div>
        </div>
    )
}

export default Navbar
