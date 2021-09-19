import React, { Component } from 'react'
import './service-page-blogs-carasoul.css'

//importing connect from react-redux
import { connect } from 'react-redux';


//importing Carasoul component
import CarasoulComponent from './Carasoul/Carasoul'

export class servicepageblogscarasoul extends Component {
    render() {
        console.log(this.props.Service);

        return (
           <>
           <div className='blogs-carasoul-column-wrapper'>
               <div className='blogs-carasoul-column-heading-wrapper'>
                   <span className='blogs-carasoul-column-heading'>
                       {this.props.Service.Related_Services_Blogs_heading.heading}
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
