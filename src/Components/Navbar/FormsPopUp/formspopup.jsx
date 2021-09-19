import React from 'react'
import './formspopup.css'



import ReactDOM from 'react-dom'


//import Modal from form-page-modall
import Modal from './FormPopUp/formsModal'


function servicepagepopup({isOpen, onClose}) {

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
                     <Modal/>
                </div>
           </div>
        </div>, 
        document.getElementById('portal-modal')
      )
    }
}

export default servicepagepopup
