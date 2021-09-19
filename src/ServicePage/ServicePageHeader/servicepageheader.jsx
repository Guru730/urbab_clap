import React, { Component } from 'react'
import './s_p_h.css'


import {connect} from 'react-redux'


//importing action to test service_page action
import {SERVICE_PAGE_STATE} from '../../Redux/actions'



//'https://res.cloudinary.com/urbanclap/image/upload/fl_progressive,t_medium_res_template/categories/category_v2/category_24ad7c60.png'

class servicepageheader extends Component {


    render(){

        return (
            <div className='service-page-header-wrapper'>
                
                <div className='background-image-ctn'>
                    <img src={this.props.Service.Main_Photo} className='background-image'/>
                </div>
                <div className='service-page-header-content-ctn'>
                    <div className='service-page-content-wrapper'>
                        <div className='service-page-content'>
                        <div className='service-page-heading-ctn'>
                         <h1  className='service-page-heading'>{this.props.Service.Main_Heading}</h1>
                         </div>
                           <div className='service-page-sub-headings-ctn'>
                               <ul>
                                   <li  className='service-page-sub-heading'>{this.props.Service.Sub_Heading_List.First_Element}</li>
                                   <li className='service-page-sub-heading'>{this.props.Service.Sub_Heading_List.Second_Element}</li>
                                   <li className='service-page-sub-heading'>{this.props.Service.Sub_Heading_List.Third_Element}</li>
                               </ul>
                           </div>
                        </div>
                    </div>
                </div>
                  

            </div>
        )
      }
    }


const mapStateToProps = (state) => ({
    Service: state.ServiceType,

}) 


export default connect(mapStateToProps, {SERVICE_PAGE_STATE}) (servicepageheader);
