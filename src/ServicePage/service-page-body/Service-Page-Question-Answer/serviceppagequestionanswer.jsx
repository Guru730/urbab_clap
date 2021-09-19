import React, { Component } from 'react'
import './servicepagequestionanswer.css'




import QuestionTextField from './Service-Page-text-field/servicepagetextfield'



//importing connect from react-redux for getting the state  of questions and answers of mmodal content
import {connect} from 'react-redux'


//importing question_answer from action.js
import {QUESTION_ANSWER} from '../../../Redux/actions'
import { SalonForWomen } from '../../../Redux/service-page-states-objects'

export class serviceppagequestionanswer extends Component {
    render() {


        return (
            <div  className='service-page-question-answer-wrapper'>
                {
                    this.props.Service.Question_And_Answer.map((value, idx) => {
                        return <div onClick={() => this.props.QUESTION_ANSWER(value.question)} className='question'><QuestionTextField key={idx}  questiontext={value.question} /></div>
                    })
                }
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    
     Service: state.ServiceType
})

export default connect(mapStateToProps, {QUESTION_ANSWER}) (serviceppagequestionanswer);
