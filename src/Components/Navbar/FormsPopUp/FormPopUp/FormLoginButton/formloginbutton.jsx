import React from 'react'




function formloginbutton() {
    return (
        <div style={{width: '8vw', height: '6vh', borderRadius: '2vw', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: 'blue'}} className='login-button-wrapper'>
            <span style={{color: 'white',}} className='login-button'>Login</span>
        </div>
    )
}

export default formloginbutton
