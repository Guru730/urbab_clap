import React from 'react'
import './servicepagepopup.css'



import ReactDOM from 'react-dom'


//import Modal from service-page-modall
import ModalContent from './Service-page-Popup/service-page-modal'

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
                   <ModalContent/>
                </div>
           </div>
        </div>, 
        document.getElementById('portal-modal')
      )
    }
}

export default servicepagepopup
