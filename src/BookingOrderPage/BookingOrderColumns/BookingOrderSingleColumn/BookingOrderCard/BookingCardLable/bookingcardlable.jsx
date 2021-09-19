
import React from 'react'
import './bookingcardlable.css'


  const PutLable =  () => {
    
    

    const num = Math.floor(Math.random() * 4);
    
        switch(num){
            case  1 :
                return<span className='best-seller-lable'>BESTSELLER</span>;
                 break;
    
                 case 2 :
                     return <span className='trending-seller-lable'>TRENDING</span>
                     break;
    
                      default :
                         return null;
                         break;

        }
    
    
    }


export default React.memo(PutLable)  

