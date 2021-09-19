import React, { Component } from 'react'
import './Menu.css'


//importing MenuItem from menuitem.js
import Menuitems from './Menuitem/Menuitem'


//importing connect from react-redux
import {connect} from 'react-redux'

//importing actiions to link state of Service page to menu itmes
import {SERVICE_PAGE_STATE, } from '../../../Redux/actions'


//importing Link, Switch, from react-router-dom
import {Link, Switch} from 'react-router-dom'



//importing Content_type from redux/type to decide the state of service page through action
import {SERVICE_CONTENT_TYPE} from '../../../Redux/type'

//importing payload for service page state
import {MassageForWomen,AcRepair,ApplianceRepair, Painters,CleaningAndDisinfection,Electricians,Plumbers,MassageForMen,Carpainters,PestControl,SalonForMen,SalonForWomen} from '../../../Redux/service-page-states-objects'

class Menu extends Component {


    render() {
    return (
        <div className='Menu-wrapper'>
            
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.SALON_FOR_MEN, SalonForMen)}  imageUrl={this.props.Menu.FirstItem.imageUrl} lable={this.props.Menu.FirstItem.lable}/>
            </Link>
            
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.CLEANING_AND_DISINFCTION, CleaningAndDisinfection)}  imageUrl={this.props.Menu.SecondItem.imageUrl} lable={this.props.Menu.SecondItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.SALON_FOR_WOMEN, SalonForWomen)} imageUrl={this.props.Menu.ThirdItem.imageUrl} lable={this.props.Menu.ThirdItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.APPLIANCE_REPAIR, ApplianceRepair)} imageUrl={this.props.Menu.FourthItem.imageUrl} lable={this.props.Menu.FourthItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.MASSAGE_FOR_MEN, MassageForMen)} imageUrl={this.props.Menu.FifthItem.imageUrl} lable={this.props.Menu.FifthItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.PAINTER, Painters)} imageUrl={this.props.Menu.SixthItem.imageUrl} lable={this.props.Menu.SixthItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.AC_SERVICE_AND_REPAIR, AcRepair)} imageUrl={this.props.Menu.SeventhItem.imageUrl} lable={this.props.Menu.SeventhItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.ELECTRICIANS, Electricians)} imageUrl={this.props.Menu.EightItem.imageUrl} lable={this.props.Menu.EightItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.PLUMBERS, Plumbers)} imageUrl={this.props.Menu.NinethItem.imageUrl} lable={this.props.Menu.NinethItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.CARPENTERS, Carpainters)} imageUrl={this.props.Menu.TenthItem.imageUrl} lable={this.props.Menu.TenthItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.MASSAGE_FOR_WOMEN, MassageForWomen)} imageUrl={this.props.Menu.EleventhItem.imageUrl} lable={this.props.Menu.EleventhItem.lable}/>
            </Link>
            <Link to='/service'>
            <Menuitems handleClick={() => this.props.SERVICE_PAGE_STATE(SERVICE_CONTENT_TYPE.PEST_CONTROL, PestControl)} imageUrl={this.props.Menu.TwelthItem.imageUrl} lable={this.props.Menu.TwelthItem.lable}/>
            </Link>

        </div>
    )
  }
}


const mapStateToprops = (state) => ({
    Menu: state.MenuItems,
})

export default connect(mapStateToprops, {SERVICE_PAGE_STATE}) (Menu);
