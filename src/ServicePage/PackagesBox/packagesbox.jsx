import React, { Component } from 'react'
import './Packagesbox.css'



//importing package box field
import PackageField from './Packagefield/packagefield'


//importing leftlowerpart of packages box
import LowerPartLeft from './PackagesBox-lowerPart/packagesbox-lowerpart'



//importing rightlowerpart of packages box
import LowerPartRight from './PackagesBox-lowerPart/Rightside-packagesbox-lowerPart/rightside-lowerbox'



//importing connect from react-redux for getting the packages box image and text
import {connect} from 'react-redux'



class packagesbox extends Component {

 render() {

        
        return (
     



            <div className='packages-box-wrapper'>
                <div className='package-box-heading-wrapper'>
                    <span className='package-box-heading'>{this.props.Service.Packages_Box.Heading}</span>
                </div>
                <div className='packages-box'>
                     
                     <PackageField image={this.props.Service.Packages_Box.Images.First_Image} text={this.props.Service.Packages_Box.Fields.First_Field}/>
                     <PackageField image={this.props.Service.Packages_Box.Images.Second_Image} text={this.props.Service.Packages_Box.Fields.Second_Field}/>
                     <PackageField image={this.props.Service.Packages_Box.Images.Third_Image} text={this.props.Service.Packages_Box.Fields.Third_Field}/>
                     <PackageField image={this.props.Service.Packages_Box.Images.Fourth_Image} text={this.props.Service.Packages_Box.Fields.Fourth_Field}/>
                </div>
                <div className='packages-box-lower-part-ctn'>
                    <LowerPartLeft/>
                    <LowerPartRight/>

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


export default connect(mapStateToProps) (packagesbox);
