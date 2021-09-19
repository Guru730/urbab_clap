import React, { Component } from 'react'
import './freeServiceColumn.css'

//importing phone Number inputfield 
import Inputfield from './PhoneNumberInputField/inputfield'


//importing money image 
import MoneyImage from '../../../assets/referColumnassets/money.png'

export class freeServiceColumn extends Component {
    render() {
        return (
            <div className='refer-column'>
            <div className='refer-column-wrapper'>
                <div className='refer-column-content'>
                    <div className='heading-wrapper'>
                        <div className='main-heading-wrapper'>
                            <h2 className='main-heading'>
                                Refer and get free services
                            </h2>
                        </div>
                        <div className='small-heading-wrapper'>
                            <h4 className='small-heading'>
                                Invite your friends to UrbanCompany services. They get Rs.100 off.You win upto Rs. 5000
                            </h4>
                        </div>
                         <Inputfield/>
                    </div>
                </div>
                <div className='side-money-image-ctn'>
                   <div className='money-image-wrapper'>
                       <img className='money-image' src='https://res.cloudinary.com/urbanclap/image/upload/q_70,f_auto,fl_progressive:steep/images/growth/home-screen/1598953972369-c7f9f7.png'/>
                   </div>

                </div>
            </div>
            </div>
        )
    }
}

export default freeServiceColumn
