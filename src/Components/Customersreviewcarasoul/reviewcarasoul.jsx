import React from 'react'




//importing Carasoul higher order function
import Carasoul from '../../higherOrderFunctions/creatingcarasoul'

//importing imageComponent for reviewcolums
import Image from '../../Components/ImagesCarasoul/CarasoulImage/carasoulimage.'
import { ReviewArray } from '../../object';



//importing heading 
import Heading from '../body/Bestoffers/Offers/heading/offersheading'

function reviewcarasoul() {
    return (
        <>
            {
                ReviewArray.map((value, idx) => {
                    return <Image imageUrl={value.image} />
                })
            }
        </>
    )
}

export default Carasoul(reviewcarasoul);
