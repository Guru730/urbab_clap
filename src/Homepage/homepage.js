import React from 'react'


//importing header component of homepage
import Header from '../Components/Header/header'



//importing Body from body.js
import Body from '../Components/body/body'


//importing footer from footer.js
import Footer from '../Components/Footer//footer'

function homepage() {
    return (
        <div style={{overflow: 'hidden'}} className='homepage'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default homepage
