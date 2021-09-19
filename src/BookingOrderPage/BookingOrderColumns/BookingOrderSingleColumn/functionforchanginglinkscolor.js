
    export const changeLinkColor = () => {

                    
     const singleColumn = document.getElementById('cards-single-column-wrapper-0');
     const firstColumnDiv = singleColumn.offsetHeight;
      console.log('firstColumn');     
      console.log(firstColumnDiv);

     const secondColumn = document.getElementById('cards-single-column-wrapper-1');
     const secondColumnDiv = secondColumn.offsetHeight;
     console.log(secondColumnDiv);

     const thirdColumn = document.getElementById('cards-single-column-wrapper-2');
     const thirdColumnDiv = thirdColumn.offsetHeight;
     console.log(thirdColumnDiv);


     const fourthColumn = document.getElementById('cards-single-column-wrapper-3');
     const fourthColumnDiv = fourthColumn.offsetHeight;
     console.log(fourthColumnDiv);


     const fifthColumn = document.getElementById('cards-single-column-wrapper-4');
     const fifthColumnDiv = fifthColumn.offsetHeight;
     console.log(fifthColumnDiv);


     const sixthColumn = document.getElementById('cards-single-column-wrapper-5');
     const sixthColumnDiv = sixthColumn.offsetHeight;
     console.log(sixthColumnDiv);


     const seventhColumn = document.getElementById('cards-single-column-wrapper-6');
     const seventhColumnDiv = seventhColumn.offsetHeight;
     console.log(seventhColumnDiv);
  

     const wholeScrollableColumn = document.getElementById('booking-order-page-columns-wrapper');
     const wholeColumn = wholeScrollableColumn.scrollTop;
     console.log(wholeColumn);



     if(wholeScrollableColumn.scrollTop < firstColumnDiv) {
         this.setState({linkColor: 0})
         
         document.getElementById(`${this.state.linkColor}`).style.backgroundColor = 'black';
         document.getElementById(`${this.state.linkColor}`).style.color = 'white';

         document.getElementById(`${this.state.linkColor + 1}`).style.backgroundColor = 'white';
         document.getElementById(`${this.state.linkColor + 1}`).style.color = 'black';

     }

      if(wholeScrollableColumn.scrollTop > firstColumnDiv  && wholeScrollableColumn.scrollTop < firstColumnDiv + secondColumnDiv) {
                  
        this.setState({linkColor: 1})

       Object.assign(document.getElementById(`${this.state.linkColor - 1}`), styles);
      

       Object.assign( document.getElementById(`${this.state.linkColor}`), styles);



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



    


   const styles = {
    
    'background-color' : 'orange',
    'color' : 'white'

   };






   const activeStyles = {

   };





