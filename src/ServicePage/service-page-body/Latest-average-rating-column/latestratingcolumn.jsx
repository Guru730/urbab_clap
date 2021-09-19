import React, { Component } from 'react'
import './latestratingcolumn.css'




//importing connect from react-redux
import {connect} from 'react-redux'


export class latestratingcolumn extends Component {
    render() {
        return (
            <div className='latest-rating-column-wrapper'>
                <div className='latest-customer-rating-heading-wrapper'>
                    <span className='latest-customer-rating-heading'>
                        {this.props.Service.Latest_Customer_Reviews_Average_Column.heading}
                        <div className='latest-customer-rating-sub-heading'>
                        {this.props.Service.Latest_Customer_Reviews_Average_Column.sub_heading}
                        </div>
                    </span>
                </div>
                <div className='latest-customer-rating-wrapper'> 
                  <div className='latest-customer-rating-star-wrapper'>
                      <span className='latest-customer-rating-star'>&#9733;</span>
                      <span className='latest-customer-rating-number'>{this.props.Service.Latest_Customer_Reviews_Average_Column.rating}</span>
                      <span className='latest-customer-rating-slash'>/</span>
                      <span className='latest-customer-rating-5'>5</span>
                  </div>
                  <div className='latest-customer-numbers'>
                      <span className='customer-review'>{this.props.Service.Latest_Customer_Reviews_Average_Column.number_of_reviews}</span>
                  </div>
                </div>
                <div className='latest-rating-lower-column-view-more-wrapper'>
                    <a href={this.props.Service.Latest_Customer_Reviews_Average_Column.view_more_comment}>
                       <span className='view-more-span'>View More Comments</span>
                    </a>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    Service: state.ServiceType
})

export default connect(mapStateToProps) (latestratingcolumn);
