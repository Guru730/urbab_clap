
import React, { Component } from 'react'
import './Carasoul.css'



//importing connect from react-redux
import {connect} from 'react-redux'




//importing higherorder carasoul functionality
import Carasoul from '../../../../higherOrderFunctions/creatingcarasoul'



//importing the image strucure 
import Image from '../../../../Components/ImagesCarasoul/CarasoulImage/carasoulimage.'



//importing carasoul images  for carasoul
import CarasoulComponentImages from './CarasoulImages/carasoulimages'

export function CarasoulComponent ()  {


        return (
           
            <div  className='blogs-carasoul-wrapper'>
                <div className='blogs-carasoul'>
                  <CarasoulComponentImages/>
                </div>
            </div>
        )
}




export default  Carasoul(CarasoulComponent);
