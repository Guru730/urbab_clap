import React, { Component } from 'react'


//importing connect from react-redux
import {connect} from 'react-redux'




//importing image from 
import Image from '../../../../../Components/ImagesCarasoul/CarasoulImage/carasoulimage.'


export class carasoulimages extends Component {
    render() {
        return (
            <>
                {
                  this.props.Service.Related_Services_Blogs_Carasoul.map((value, idx) => {

                      return <div style={{margin: '0 1vw'}} className='images-wrappers'>
                          <a href={value.link}>
                          <Image imageUrl={value.image}  text={value.textlable}/>
                          </a>
                          </div>
                  })
                }
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    Service: state.ServiceType
});

export default connect(mapStateToProps) (carasoulimages)
