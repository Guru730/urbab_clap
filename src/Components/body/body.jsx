import React from 'react'


//importing MenuContainer from Menu
import MenuContainer from './Menu/Menu'

//importing imageCarasoul from imagecarasoul directory
import ImageCarasoul from '../ImagesCarasoul/imagecarasoul'

//importing third column for cleaning and pestControl column
import Cleaning from './Bestoffers/Services/cleaning'

//import Appliances column for Appliances column
import Appliancesoffers from './Bestoffers/Appliances/appliances'


//importing Services column of page 
import ServicesOffers from './Bestoffers/servicesoffer'


//importing Gifts column of page
import GiftsOffersColumn from './Bestoffers/gifts/gifts'


//importing free reward column
import ReferCoulmn from './FreeServiceColumn/freeServiceColumn'




//importing CustomerreviewCarasoul components 
import ReviewColumn from '../Customersreviewcarasoul/reviewColumn'

function body() {
    return (
        <>
         <MenuContainer/>
           <ImageCarasoul/>
             <ServicesOffers/>
              <Appliancesoffers/>
                <Cleaning/>
                <GiftsOffersColumn/>
                <ReviewColumn/>
                  <ReferCoulmn/>
        </>
    )
}

export default body
