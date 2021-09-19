import React, { Component } from 'react'


//importing Images for carasoul
import Image from './CarasoulImage/carasoulimage.'


//importing ImageArray from object
import {ImageArray} from '../../object'



//importing carasoul logic from higher order functions
import Carasoul from '../../higherOrderFunctions/creatingcarasoul'

export class imagecarasoul extends Component {

    render() {
        return (
            <>
            {
                ImageArray.map((value, idx) => {
                    return <Image imageUrl={value.imageurl} id={value.id} />
                })
            }
            </>
        )
    }
}

export default Carasoul(imagecarasoul);
