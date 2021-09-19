import React, { Component } from 'react'
import './service-page-modal.css'



import {connect} from 'react-redux'

export class servicepagepopup extends Component {
    render() {

        console.log(this.props.Answer);

        return (
            <div className='Modal-wrapper'>
                <div className='Modal-content'>
                    <div className='Modal-question-wrapper'>
                        <span className='Modal-question'>
                            {this.props.Answer.question}
                        </span>
                    </div>
                    <div className='Modal-Answer-wrapper'>
                            <span className='Modal-Answer'>
                            {this.props.Answer.answer}
                            </span>
                        
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    Answer: state.Answer
})


export default connect(mapStateToProps) (servicepagepopup);
