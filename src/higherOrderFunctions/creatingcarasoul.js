import React, { Component } from 'react'
import '../Components/ImagesCarasoul/imagecarasoul.css'

//importing Button for carasoul from carasoulButton.js
import Button from '../Components/ImagesCarasoul/Carasoulbutton/carasoulbutton'




//importing ArrowImages from assets
import ArrowImage from '../assets/ImagecarasoulAssets/up-arrow.png'




//importing 


export default (Children) => {
    class ComposedClass extends Component {
     
        state = {
            leftbutton : false,
            rightbutton: true,
            availableTimes : 1,
            moveProperty : 0
        }
    
    
    
    
        moveright = () => {
    
    
            if(this.state.availableTimes <= 1 ) {
                this.setState({leftbutton: false})
            } else {
                this.setState(
                    {
                        availableTimes: this.state.availableTimes - 1,
                        leftbutton: true,
                        rightbutton: true,
                        moveProperty: this.state.moveProperty + 16.5
                    }
                    )
            }
            console.log(this.state.availableTimes)
        }
    
    
    
    
        moveleft = () => {
  
              if(this.state.availableTimes >= 3) {
                  this.setState({rightbutton: false})
              }
              else {
                  this.setState(
                      {
                        availableTimes: this.state.availableTimes + 1,
                        leftbutton: true,
                        rightbutton: true,
                        moveProperty: this.state.moveProperty - 16.5
                      }
                  )
              }
              console.log(this.state.availableTimes)
        }
    
        render() {
            return (
                <div className='imagecarasoul-ctn'>
                <div className='carasoul-ctn'>
                    <div className='carasoul-wrapper'>

                           { 
                            this.state.leftbutton ?
                            
                         <div className='left-button'>
                          <Button handleClick={this.moveright} image='<'/>
                          </div>
                          : null
                           }
               
                             {

                                 this.state.rightbutton ?
                                 <div className='right-button'>
                             <Button handleClick={this.moveleft} image='>' />
                             </div>
                             : null
                             }
                        
                       
                       <div style={{transform: `translateX(${this.state.moveProperty}%)`,
                                     transition: '300ms'}} className='carasoul'>
                               <Children/>
                       </div>
                    </div>
                </div>
            </div>
            )
        }

    }

    return ComposedClass;
}