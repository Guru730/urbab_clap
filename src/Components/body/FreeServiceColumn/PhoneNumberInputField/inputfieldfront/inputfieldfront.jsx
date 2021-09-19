import React from 'react'
import './inputfieldfront.css'


//importing flag image
import Flag from '../../../../../assets/referColumnassets/indiaflag.png'



//importing arrow image
import Arrow from '../../../../../assets/referColumnassets/drop-down-arrow.png'


function inputfieldfront({width, height, text, handleClick}) {
    return (
        <div onClick={handleClick} style={{width: `${width}vw`,
         height: `${height}vh`}} className='front-part-of-inputfield'>
        <img className='flag-image' src={Flag} />
        <p className='phone-number-front'>{text}</p>
          <img className='phone-number-arrow' src={Arrow}/>
     </div>
    )
}

export default inputfieldfront
