import React, { Component } from 'react'
import './service-page-body.css'



//import how-it-work column from how-it-work.js
import HowItWork from './How-it-work-column/howitwork'



//importing connect for getting the states for professionals profiles rating from redux 
import {connect} from 'react-redux'


//import professional cards with customers review
import ProfessionalReview from './ProfessionalCards/professionalCards'



//importing also looked at services or popular services carasoul
import AlsoLookedAtServices from './Popular-Services-carasoul-column/popularservicescarasoul'


//import Related services column
import RelatedServices from './Related-Services-Column/relatedservices'




//importing blog carasoul
import BlogCarasoul from './Service-Page-Blogs-Carasoul/service-page-blogs-carasoul'



//importing question and answer column 
import QuestionAndAnswerColumn from './Service-Page-Question-Answer/serviceppagequestionanswer'



//importing latest average customer rating
import LatestCustomerRating from './Latest-average-rating-column/latestratingcolumn' 

class servicepagebody extends Component {

    render() {

    return (
        <div className='service-page-body-wrapper'>
            <div className='how-it-work-column-ctn'>
                <HowItWork/>
            </div>
            <div className='professionals-heading-wrapper'>
                <h2 className='professionals-heading'>Beauticians</h2>
                <div className='professionals-sub-heading-wrapper'>
                    <span className='professionals-sub-heading'>More than 1000 beauticians in Delhi</span>
                </div>
            </div>
            <div className='professionals-cards-reviews-ctn'>
              {
                  this.props.Service.Professionals_Rating_Column.Professionals_Cards_List.map((value, idx) => {
                      return <ProfessionalReview image={value.Image} Name={value.Name} address={value.Address} commenterName={value.Commenter_Name} commentText={value.Comment} commenterAlphabate={value.Commenter_Name_Alphabate} />
                  })
              }
            </div>
            <div className='also-looked-at-services-ctn'>
               <AlsoLookedAtServices/>
            </div>
            <div className='related-services-column-ctn'>
              <RelatedServices/>
            </div>
            <div className='related-blogs-carasoul-ctn'>
               <BlogCarasoul/>
            </div>
            <div className='latest-average-customers-rating-ctn'>
                <LatestCustomerRating/>
            </div>
            <div className='question-answer-column-ctn'>
                  <QuestionAndAnswerColumn/>
            </div>
        </div>
    )
    }
}


const mapStateToProps = (state) => (
    {
        Service: state.ServiceType
    }
)

export default connect(mapStateToProps) (servicepagebody)
