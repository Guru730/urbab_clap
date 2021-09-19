import React from 'react'
import './related-services-column-field.css'


function relatedservicescolumnfield({textlink}) {
    return (
        <div className='text-link-field-wrapper'>
         <span className='text-link-field'>{textlink}</span>
        </div>
    )
}

export default relatedservicescolumnfield
