import React, {useState} from 'react'
import './servicepagetextfield.css'


//importing popup component in text field 
import PopUp from '../Service-Page-Popup/servicepagepopup'


function Servicepagetextfield({questiontext}) {

    const [ShowPopUp, setShowPopUp] = useState(false);
 
    const colorArray = ['red', 'green', 'blue',];

    const colorNumber = Math.floor(Math.random()   * 5); 

    return (
        <div   className='service-page-question-wrapper'>
            <span onClick={() => (setShowPopUp(!ShowPopUp))}  className='service-page-question'>
                {questiontext}
            </span>
            <div   className='service-page-popup-button-wrapper'>
                <span className='service-page-popup-button'>
                Click
                </span>
            </div>
            <div className='service-page-popup'>
               <PopUp isOpen={ShowPopUp} onClose={() => setShowPopUp(!ShowPopUp)}/>
            </div>
        </div>
    )
}





export default Servicepagetextfield
