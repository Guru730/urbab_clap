import React from 'react'
import './formsModal.css'




//importing InputField from forminputfield
import InputField from './FormInputField/forminputfield'


//importing login Button
import LoginButton from './FormLoginButton/formloginbutton'



//importing svg image
import {ReactComponent as Image} from '../../../../assets/authenticationFormassets/formimage.svg'



//importing Login with google
import LoginWithGoogle from './FormLoginWithGoogle/loginwithgoogle'

function formsModal() {

    const inputfields = [{lable: 'Email id'}, {lable:'Username'}, {lable: 'Phone number'}, { lable: 'Passsword'}];

    return (
        <div className='form-modal-wrapper'>
            
            <div className='form-modal'>
                <div className='form-image-wrapper-outter'>
                    
            <div className='form-image-wrapper'>
                    <Image className='form-image'/>

            </div>
            </div>
               <div className='form-input-column'>
                <div className='form-modal-heading-wrapper'>
                    <span className='form-modal-heading'>sign in</span>
                </div>
                 <div className='form-modal-input-fields-wrapper'>
                 {
                     inputfields.map((value, idx) => {
                         return <InputField id={idx} placeholder={value.lable}/>
                     })
                 }
                 </div>
                 <div className='form-login-button-ctn'>
                     <LoginButton/>
                 </div>
                 <div className='form-login-with-google-button-wrapper'>
                        <LoginWithGoogle/>
                 </div>
                 </div>
            </div>
        </div>
    )
}

export default formsModal
