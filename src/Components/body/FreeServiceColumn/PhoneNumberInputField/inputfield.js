import React from 'react'
import './inputfield.css'


//importing flag icon
import Flag from '../../../../assets/referColumnassets/indiaflag.png'

//importing Arrow icon
import Arrow from '../../../../assets/referColumnassets/drop-down-arrow.png'

//importing front of input field
import InputFieldFront from './inputfieldfront/inputfieldfront'


//importing back of input field
import InputFieldBack from './inputfieldback/inputfieldback'


function inputfield() {
    return (
        <div className='number-inputfield-wrapper'>
        <div className='inputfield-box'>
           <div className='inputfield-front-ctn'>
              <InputFieldFront width='8' height='4' text='+91'/>
           </div>
            <div className='inputfield-back-ctn'>
                <InputFieldBack width='18' height='5' type='number' placeholder='Enter Mobile Number'/>
            </div>
        </div>
        
    </div>
    )
}

export default inputfield
