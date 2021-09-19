

import React, { Component } from 'react'
import '../Service-Page-Blogs-Carasoul/service-page-blogs-carasoul.css'
import './popularservicescarasoul.css'


//importing connect from react-redux
import { connect } from 'react-redux';


//importing Carasoul component
import CarasoulComponent from './PopularCarasoul/popularcarasoul'

export class servicepageblogscarasoul extends Component {
    render() {

        return (
           <>
           <div className='blogs-carasoul-column-wrapper'>
               <div className='blogs-carasoul-column-heading-wrapper'>
                   <span className='blogs-carasoul-column-heading'>
                       {this.props.Service.Also_Looked_At_Services.heading}
                   </span>
               </div>
               <div className='popular-blogs-carasoul-ctn'> 
           <CarasoulComponent/>
           </div>
           </div>
           </>
        )
    }
}




const mapStateToProps = (state) => ({
    Service: state.ServiceType
})

export default connect(mapStateToProps)  (servicepageblogscarasoul);
