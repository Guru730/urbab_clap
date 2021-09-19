import React from 'react'
import './forminputfield.css'


function forminputfield({handleClick, id, placeholder}) {
    return (
       
       <div className='form-input-field-ctn'>
        <div id={id} className='form-input-field-wrapper'>
            <input  placeholder={placeholder} className='form-input-field' type="text"/>
        </div>
        </div>
    )
}

export default forminputfield
