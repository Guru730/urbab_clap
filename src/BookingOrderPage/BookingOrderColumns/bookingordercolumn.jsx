import React, { Component } from 'react'
import './bookingordercolumns.css'



import Card from './BookingOrderSingleColumn/BookingOrderCard/bookingordercard'


import {orderBookingPage} from '../../Redux/order-booking-page-state-objects'



import Img from '../../assets/u_c2.jpg'

//impotr bill and quantity bars
import BillQuantity from './BookingOrderColumnBillandPriceBars/billandquantity'

//import offers headline for offersheadline
import Offersheadline from './BookingOrderSingleColumn/BookingOrderCard/BookingColumnOfferHeadline/offersheadline'

//importing single column structure from booking order singlecolumn
import SingleColumnHeading from './BookingOrderSingleColumn/bookingordersinglecolumnheading'




//importing Link from Link
import Link from '../BookingOrderServicesLinks/BookingServiceLink/bookingservicelink'



//importing Heading from singleColumnHeading
import Heading from './BookingOrderSingleColumn/bookingordersinglecolumnheading'





//importing change links color function to change the color of links on scroll
import {changeLinkColor} from './BookingOrderSingleColumn/functionforchanginglinkscolor'

export class bookingordercolumn extends Component {

    state ={
        bill: 0,
        click: 0,
        show: false,
        linkColor: 0

    }



    plusAction = (rate) => {
        this.setState({bill: this.state.bill + rate, click: this.state.click + 1, show: true});
    }


    minusAction = (rate) => {
       
           if(this.state.bill < 40){
                       this.setState({show: false});
           }
        else {
            this.setState({bill: this.state.bill - rate, click: this.state.click - 1 })
    
        }
    }
















    //creating links color change on column in viewport
   ChangeColor = () => {



     
       
              
    const singleColumn = document.getElementById('cards-single-column-wrapper-0');
    const firstColumnDiv = singleColumn.offsetHeight;


    const secondColumn = document.getElementById('cards-single-column-wrapper-1');
    const secondColumnDiv = secondColumn.offsetHeight;

    const thirdColumn = document.getElementById('cards-single-column-wrapper-2');
    const thirdColumnDiv = thirdColumn.offsetHeight;


    const fourthColumn = document.getElementById('cards-single-column-wrapper-3');
    const fourthColumnDiv = fourthColumn.offsetHeight;


    const fifthColumn = document.getElementById('cards-single-column-wrapper-4');
    const fifthColumnDiv = fifthColumn.offsetHeight;


    const sixthColumn = document.getElementById('cards-single-column-wrapper-5');
    const sixthColumnDiv = sixthColumn.offsetHeight;


    const seventhColumn = document.getElementById('cards-single-column-wrapper-6');
    const seventhColumnDiv = seventhColumn.offsetHeight;
 

    const wholeScrollableColumn = document.getElementById('booking-order-page-columns-wrapper');
    const wholeColumn = wholeScrollableColumn.scrollTop;



    if(wholeScrollableColumn.scrollTop < firstColumnDiv) {
        this.setState({linkColor: 0})
        
        document.getElementById(`${this.state.linkColor}`).style.backgroundColor = 'black';
        document.getElementById(`${this.state.linkColor}`).style.color = 'white';

        document.getElementById(`${this.state.linkColor + 1}`).style.backgroundColor = 'white';
        document.getElementById(`${this.state.linkColor + 1}`).style.color = 'black';

    }




     if(wholeScrollableColumn.scrollTop > firstColumnDiv  && wholeScrollableColumn.scrollTop < firstColumnDiv + secondColumnDiv) {
                 
       this.setState({linkColor: 1})

       document.getElementById(`${this.state.linkColor - 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor - 1}`).style.color = 'black';

       document.getElementById(`${this.state.linkColor}`).style.backgroundColor = 'black';
       document.getElementById(`${this.state.linkColor}`).style.color = 'white';

       document.getElementById(`${this.state.linkColor + 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor + 1}`).style.color = 'black';

     
     }



      if(wholeScrollableColumn.scrollTop > firstColumnDiv + secondColumnDiv    && wholeScrollableColumn.scrollTop < firstColumnDiv + secondColumnDiv + thirdColumnDiv){
              
         this.setState({linkColor: 2});

         
       document.getElementById(`${this.state.linkColor - 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor - 1}`).style.color = 'black';

       document.getElementById(`${this.state.linkColor}`).style.backgroundColor = 'black';
       document.getElementById(`${this.state.linkColor}`).style.color = 'white';

       document.getElementById(`${this.state.linkColor + 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor + 1}`).style.color = 'black';

      }


      if(wholeScrollableColumn.scrollTop > firstColumnDiv + secondColumnDiv + thirdColumnDiv && wholeScrollableColumn.scrollTop < firstColumnDiv + secondColumnDiv + thirdColumnDiv + fourthColumnDiv) {
          this.setState({linkColor : 3});

          document.getElementById(`${this.state.linkColor - 1}`).style.backgroundColor = 'white';
          document.getElementById(`${this.state.linkColor - 1}`).style.color = 'black';
  
          document.getElementById(`${this.state.linkColor}`).style.backgroundColor = 'black';
          document.getElementById(`${this.state.linkColor}`).style.color = 'white';
  
          document.getElementById(`${this.state.linkColor + 1}`).style.backgroundColor = 'white';
          document.getElementById(`${this.state.linkColor + 1}`).style.color = 'black';
  

      }



      if(wholeScrollableColumn.scrollTop > firstColumnDiv + secondColumnDiv + thirdColumnDiv + fourthColumnDiv && wholeScrollableColumn.scrollTop < firstColumnDiv + secondColumnDiv + thirdColumnDiv + fourthColumnDiv + fifthColumnDiv) {
       this.setState({linkColor : 4});

       document.getElementById(`${this.state.linkColor - 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor - 1}`).style.color = 'black';

       document.getElementById(`${this.state.linkColor}`).style.backgroundColor = 'black';
       document.getElementById(`${this.state.linkColor}`).style.color = 'white';

       document.getElementById(`${this.state.linkColor + 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor + 1}`).style.color = 'black';


   }


   if(wholeScrollableColumn.scrollTop > firstColumnDiv + secondColumnDiv + thirdColumnDiv + fourthColumnDiv + fifthColumnDiv && wholeScrollableColumn.scrollTop < firstColumnDiv + secondColumnDiv + thirdColumnDiv + fourthColumnDiv + fifthColumnDiv + sixthColumnDiv) {
       this.setState({linkColor : 5});

       document.getElementById(`${this.state.linkColor - 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor - 1}`).style.color = 'black';

       document.getElementById(`${this.state.linkColor}`).style.backgroundColor = 'black';
       document.getElementById(`${this.state.linkColor}`).style.color = 'white';

       document.getElementById(`${this.state.linkColor + 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor + 1}`).style.color = 'black';


   }



   if(wholeScrollableColumn.scrollTop > firstColumnDiv + secondColumnDiv + thirdColumnDiv + fourthColumnDiv + fifthColumnDiv + sixthColumnDiv && wholeScrollableColumn.scrollTop < firstColumnDiv + secondColumnDiv + thirdColumnDiv + fourthColumnDiv + fifthColumnDiv + sixthColumnDiv + seventhColumnDiv) {
       this.setState({linkColor : 6});

       document.getElementById(`${this.state.linkColor - 1}`).style.backgroundColor = 'white';
       document.getElementById(`${this.state.linkColor - 1}`).style.color = 'black';

       document.getElementById(`${this.state.linkColor}`).style.backgroundColor = 'black';
       document.getElementById(`${this.state.linkColor}`).style.color = 'white';

       // document.getElementById(`${this.state.linkColor + 1}`).style.backgroundColor = 'white';
       // document.getElementById(`${this.state.linkColor + 1}`).style.color = 'black';


   }

      

  }





















  //Function to scroll an element into view on link click

  handleScrollOnClick = (id) => {
      const element = document.getElementById(`cards-single-column-wrapper-${id}`);

      element.scrollIntoView({behavior: 'smooth'});
  }










    componentDidMount() {
 
       const ScrollableColumn = document.getElementById('booking-order-page-columns-wrapper');

       ScrollableColumn.addEventListener('scroll', this.ChangeColor);


    }


   
 

    render() {
        const head = '';

        const factText =   '';


        const {show} = this.state;

        const linksTextArray = [{text:'Make your package'}, {text:'Waxing'},{text:'Facial & CleanUp'}, {text:'Bleach & Detan'}, {text:'Hair Color & Care'}, {text:'Pedicure & Manicure'}, {text:'Threading & Face Wax'}];

         
        return (
              <>



    <div className='booking-service-page-links-column-wrapper'>
        <div className='booking-service-page-links-column-inner-wrapper'>
        <div className='booking-service-page-links-wrapper'>
         {
             linksTextArray.map((value, idx) => {
                 return <Link id={`${idx}`}  handleClick={() => this.handleScrollOnClick(idx)} text={value.text}/>
             })
         }
         </div>
         </div>
    </div>


            <div id='booking-order-page-columns-wrapper' className='booking-order-page-columns-wrapper'>

       {show ? 
       <> 
       <BillQuantity bill={this.state.bill}/>
                 </> : null}
                                          

                <div  className='booking-order-page-columns-inner-wrapper'>
                      
                      {
                          orderBookingPage.map((value, idx) => {
                              return <div id={`cards-single-column-wrapper-${idx}`} className='booking-service-page-single-whole-column-wrapper'>
                                  <div className='booking-service-page-column-heading-wrapper'>
                                      <SingleColumnHeading id={`Heading${idx}`} columnHeading={value.heading}/>
                                      <div className='offers-headline-ctn'>
                                         <Offersheadline need={true} />
                                      </div>
                                      </div>
                                {
                                    value.cards.map((value, idx) => {
                                        return <div className='booking-service-page-single-card-ctn'>
                                        <Card image={Img} heading={value.heading} time={value.time}  cuttedRate={value.cuttedRate} serviceRate={value.rate} factHeading={head} fact={factText} plus_Action={() => this.plusAction(value.rate)} minus_Action={() => this.minusAction(value.rate)} />
                                        </div>
                                    })
                                }
                              </div>
                                 
                          })
                      }
                   
               </div>
            </div>
            </>
        )
    }
}

export default bookingordercolumn
