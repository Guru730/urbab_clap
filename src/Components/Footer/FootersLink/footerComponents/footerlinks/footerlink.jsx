import React from 'react'
import './footerlink.css'


function footerlink({tittle, link}) {
    return (
       <>
       <a href={link}>
       <p className='link'>
          {tittle}
       </p>
       </a> 
       </>
    )
}

export default footerlink
