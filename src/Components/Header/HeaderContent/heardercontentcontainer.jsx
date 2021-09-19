import React, { Component } from 'react'
import './h-c.css'


//importing input-field for city and services input in header
import Inputfield from './Inputfield/inputfiled' 


//importing cityinputbutton from cityinputbutton.js
import Inputbutton from './Cityinputbutton/cityinputbutton'

//importing inputfield front from refercolumn
import InputFront from '../../../Components/body/FreeServiceColumn/PhoneNumberInputField/inputfieldfront/inputfieldfront'


//importing searchIcon image
import SearchIcon from '../../../assets/inputfieldicon/search-icon.png'

//importing cities dropdown menu
import Dropdown from './Inputfield/SelecteCityDropdown/dropdown'


//importing connect from 'react-redux' for dropdown cityselector visibility
import {connect} from 'react-redux'
 

//importing city_button function for cityreducer's action or to make toggle button for dropdown
import {change_show} from '../../../Redux/actions'

class headercontentcontainer extends Component {

render() {
    console.log(this.props.button);
    return (
        <div className='header-content-wrapper'>
            <div className='heading-ctn'>
                <h1 className='heading'>
                    Home Services, On Demand
                </h1>
                <div  className='input-field-ctn'>
                 
                  <InputFront handleClick={this.props.change_show} width='14' height='9' text='Delhi'/>
                     <div className='dropdown-menu-ctn'>
                    <Dropdown/>
                    </div>
                    <Inputfield image={SearchIcon}/>
                </div>
            </div>
        </div>
    )
}

}

const mapStateToProps = (state) => {
 return {
        button: state.show
  }
}


export default connect(mapStateToProps, {change_show}) (headercontentcontainer);
