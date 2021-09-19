import React from 'react'
import'./service.css'


//imporing ServicepageHeader
import ServicepageHeader from './ServicePageHeader/servicepageheader'

//importing packages box
import PackageBox from './PackagesBox/packagesbox'

//importing service page Navbar 
import ServicePageNavbar from './Service-page-navbar/service-page-navbar'


//import service page body 
import ServicePageBody from './service-page-body/service-page-body'



//importing Footer form footer.js
import Footer from '../Components/Footer/footer'

function servicepage() {
    return (
        <div className='service-page-ctn'>
            
            <ServicepageHeader/>
             <PackageBox/>
             <div className='service-page-navbar-ctn'>
             <ServicePageNavbar/>
             </div>
             <div className='service-page-body-ctn'>
               <ServicePageBody/>
             </div>
             <div className='service-page-footer-ctn'>
                 <Footer/>
             </div>
        </div>
    )
}

export default servicepage
