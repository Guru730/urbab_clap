import React from 'react'
import './congratspopup.css'



import ReactDOM from 'react-dom'

//import Modal from service-page-modall
import Content from './CongratesContent/congratescontent'



function servicepagepopup({isOpen, onClose, price}) {

    if(!isOpen) {
        return null
    } else {
        return ReactDOM.createPortal(
          <div className='service-page-popup-overlay'>
              <div className='service-page-popup-ctn'>
                 <div  className='service-page-close-popup-button-wrapper'>
                   <span onClick={onClose} className='service-page-close-popup-button'>&#9747;</span>
                </div>
                <div className='service-page-Modal-ctn'>
                  <Content price={price}/>
                </div>
           </div>
        </div>, 
        document.getElementById('portal-modal')
      )
    }
}

export default servicepagepopup
