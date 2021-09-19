import React from 'react'



//importing google logo to create login with google button
import{ReactComponent as GoogleLogo} from '../../../../../assets/footersassets/google logo.svg'

function loginwithgoogle() {

    const googleStyles = {
        width: '20px',
        height: '30px',
    }


    const outterStyles =   { 
    width: '14vw',
     height: '5vh',
     fontSize: '16px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '20px',
    textDecoration: 'underline',
    fontFamily: 'Main-heading-font',
    backgroundColor: '#ECE8E8' ,
    borderRadius: '20px',
    boxShadow: '1px 1px 1px gray inset'
    };
  
    return (
        <div style={outterStyles} className='login-with-google-button-wrapper'>
            <GoogleLogo style={googleStyles} className='google-logo'/>
            <span  style={{margin: '0 5px'}} className='login-with-google-button'>
                Login with Google
            </span>
        </div>
    )
}

export default loginwithgoogle
