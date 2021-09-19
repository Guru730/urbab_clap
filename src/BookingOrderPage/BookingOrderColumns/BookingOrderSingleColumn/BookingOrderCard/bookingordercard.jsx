import React, {useState, useCallback} from 'react'
import './bookingordercard.css'






//imorting lable for cards
import Lable from './BookingCardLable/bookingcardlable'


function Button(minusaction, plusaction){

      const [showButton, setshowButton] = useState(false);


      if(!showButton) {
          return (
              <div onMouseOver={() => setshowButton(true)} className='add-order-button-wrapper'>
                  <div className='add-order-button'>
                      Add
                  </div>
              </div>

          )
      }   else {
          return (
          <div onMouseLeave={() => setshowButton(false)} className='add-order-button-clicked-wrapper'>
              <div className='add-order-button-clicked'>
                  <div onClick={minusaction} className='add-order-button-clicked-minus-symbole'>-</div>
                  <div className='add-order-button-clicked-column-symbole'></div>
                  <div onClick={plusaction} className='add-order-button-clicked-plus-symbole'>+</div>

              </div>
          </div>
          )
      }
 

}




//creating a function for best seller and trending lable of card




function ServiceCard({image, heading, time, factHeading, fact, cuttedRate, serviceRate, plus_Action, minus_Action}) {

 
  

    
    return (
        <div className='service-card-column-wrapper'>

            <div className='service-card-column'>

                <div className='service-card-column-lable'>
              
                    <Lable/>

                </div>
                <div className='service-card-column-image-wrapper'>
                    <img src={image} className='service-card-column-image' alt="image"/>
                </div>
            
            <div className='service-card-column-heading-wrapper'>
                <span className='service-card-column-heading'>
                   {heading}
                </span>
            </div>
            <div className='service-card-column-rating-wrapper'>
                <span className='service-card-column-rating-stars'>
                &#9733;
                </span>
                <span className='service-card-column-rating-number'>
                    4.5/
                </span>
                <span className='service-card-column-rating-5'>
                    5
                </span>

            </div>
            <div className='service-card-column-rate-wrapper'>
              <div className='service-card-column-rate-rupees'>
                 <span className='service-card-column-rate'>
                   Rs.{serviceRate}
                    </span>
                    <span className='service-card-column-cutted-rate'>
                    Rs.{cuttedRate}
                 </span>
                </div>
                <div className='add-order-button-ctn'>
                 {Button(minus_Action, plus_Action,)}
                </div>
            </div>
            <div className='service-card-column-service-time-wrapper'>
                <span className='service-card-column-service-time-watch-symbole'>⏱</span>
                <span className='service-card-column-service-time'>{time}</span>
            </div>

            <div className='service-card-column-service-facts-wrapper'>
                <ul className='service-card-column-service-facts-list'>
                    <li className='facts'><span className='facts-heading'>{factHeading}:</span>
                    <span className='fact'>{fact}</span></li>
                    <li className='facts'><span className='facts-heading'>{factHeading}:</span>
                    <span className='fact'>{fact}</span></li>
                    <li className='facts'><span className='facts-heading'>{factHeading}:</span>
                    <span className='fact'>{fact}</span></li>
                    <li className='facts'><span className='facts-heading'>{factHeading}:</span>
                    <span className='fact'>{fact}</span></li>
                    <li className='facts'><span className='facts-heading'>{factHeading}:</span>
                    <span className='fact'>{fact}</span></li>

                </ul>
            </div>
            </div>
        </div>
    )
}

export default ServiceCard
