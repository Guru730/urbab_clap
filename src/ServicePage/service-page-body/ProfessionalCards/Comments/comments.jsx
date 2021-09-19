import React from 'react'
import './comments.css'



function comments({CommenterName, Alphabate, Comment}) {

    const colors = ['red','yellow','black','brown','green','blue','orange'];
    const randomNumber = Math.floor(Math.random() * 7);

    return (
        <div className='comment-wrapper'>
            <div className='comment-image-wrapper'>
                    <span style={{backgroundColor: `${colors[randomNumber]}`}} className='commenter-image-name'>{Alphabate}</span>
                </div>
                <div className='comment-other-information-wrapper'>
                    <div className='commenter-name-wrapper'>
                        <span className='commenter-name'>{CommenterName}</span>
                        </div>  
                        <div className='commenter-rating-wrapper'>
                            <span className='commenter-stars'>&#9733;</span>
                             <span className='commerters-stars-number'>5.0</span>
                            
                            </div>  
                            <div className='comment-wrapper'>
                                 <span className='comment'>{Comment}</span>
                             </div>                
                </div>

        </div>
    )
}

export default comments
