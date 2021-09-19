import React, { Component } from 'react'
import './howitwork.css'


//import image


//import howitwork column text field
import Textfield from './how-it-work-textfield/howitworktextfield'



//importing connect to get the state of how it work column with redux
import {connect} from 'react-redux'


export class howitwork extends Component {

    render() {
        return (
            <div className='how-it-work-column-wrapper'>
                <div className='how-it-work-column-heading-wrapper'>
                    <span className='how-it-work-column-heading'>How it Works</span>
                </div>
         <div className='how-it-work-column-text-fields-ctn'>
             <div className='how-it-work-text-field'>
                <Textfield image={this.props.Service.How_it_Work_Column.How_It_Work_First_Element.Image} text={this.props.Service.How_it_Work_Column.How_It_Work_First_Element.Text} subheading={this.props.Service.How_it_Work_Column.How_It_Work_First_Element.Sub_Text}  Arrow={true}/>
                 </div>
                    <div className='how-it-work-text-field'>
                      <Textfield image={this.props.Service.How_it_Work_Column.How_It_Work_Second_Element.Image} text={this.props.Service.How_it_Work_Column.How_It_Work_First_Element.Text} subheading={this.props.Service.How_it_Work_Column.How_It_Work_Second_Element.Sub_Text} Arrow={true} />
                        </div>
                          <div className='how-it-work-text-field'>
                            <Textfield image={this.props.Service.How_it_Work_Column.How_It_Work_Third_Element.Image} text={this.props.Service.How_it_Work_Column.How_It_Work_Third_Element.Text} subheading={this.props.Service.How_it_Work_Column.How_It_Work_Third_Element.Sub_Text} />
                              </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    Service: state.ServiceType
})

export default connect(mapStateToProps) (howitwork);
