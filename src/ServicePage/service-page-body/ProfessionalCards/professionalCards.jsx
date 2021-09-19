import React,{Component, useState} from 'react'
import './professionalCards.css'



import Comment from './Comments/comments'

const ShowCommentButton = () => {
    const [ShowButton,setShowButton] = useState(false);
       
    if(ShowButton) {
        return <button className='show-more-button' onClick={() => setShowButton(!ShowButton)}>Show More</button>
    }
     else {
         return <button className='show-more-button' onClick={() => setShowButton(!ShowButton)}>Show Less</button>
     }
}


function ProfessionalCards ({ExtraComment, handleClick, Name, address, image, commenterName, commentText, commenterAlphabate}) {
    return (
        <div className='professionals-rating-cards-wrappers'>
            <div className='professionals-rating-cards-image-wrapper'>
                <img src={image} alt='image' className='professional-image'/>
            </div>
            <div className='professionals-rating-cards-information-wrapper'>
                <div className='professionals-name-wrapper'>
                    <span className='professionals-name'>{Name}</span>
                </div>
                <div className='professional-address-wrapper'>
                    <span className='professionals-address'>{address}</span>
                </div>
                <div className='professionals-rating-information-wrapper'>
                    <div className='rating-star-wrapper'>
                        <span className='rating-star'>&#9733;</span>
                        <span className='rating-stars-number'>5.0</span>
                        <span className='rating-number-times'>(16098)</span>
                    </div>
                    <div className='number-times-rated-5-star-wrapper'>
                        <span className='number-times-rated-5-star'>463 times rated 5 star</span>
                    </div>
                </div>
                <div className='comments-wrapper'>
                      <Comment  CommenterName={commenterName} Alphabate={commenterAlphabate} Comment={commentText}/>
                      {
                          ExtraComment ? <Comment/> : null
                      }
                </div>
                <div onClick={handleClick} className='show-more-comment-button-wrapper'>
                    {ShowCommentButton()}
                      </div>
            </div>
        </div>
    )
}


export default ProfessionalCards
