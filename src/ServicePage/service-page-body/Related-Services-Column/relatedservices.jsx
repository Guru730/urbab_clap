import React, { Component } from 'react'
import './relatedservices.css'



//importing textfield for column text
import Textfield from './Related-Services-column-field/related-services-column-field'


//importing connect from react-redux
import {connect} from 'react-redux'

export class relatedservices extends Component {
    render() {
        return (
            <div className='related-services-column-wrapper'>
                <div className='related-services-column'>
                    <div className='related-services-column-heading-wrapper'>
                        <span className='related-services-column-heading'>{this.props.Service.Related_Services_Column.heading}</span>
                    </div>
                    {
                        this.props.Service.Related_Services_Column.links.map((value, idx) => {

                            return <Textfield textlink={value.link}/>
                            
                        })
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
  Service: state.ServiceType
})

export default connect(mapStateToProps) (relatedservices);
