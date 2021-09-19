import React from 'react'
import './congratescontent.css'



function Content({price}) {
    return (
        <div className='congrates-content-wrapper'>
            <div className='congrates-content'>
                <div className='congrates-text-wrapper'>
                    <span className='congrates-text-congratulation'>
                        Congratulation
                    </span>
                    <span className='congrates-text-line'>
                        Your order is successfully placed for <span className='order-price'>Rs. {price}</span>
                    </span>
                   <span style={{textDecoration: 'underline', marginTop: '20px', fontSize: '13px'}} className='congrates-text-thank-you-line'>
                       Thank you very much for trusting us
                   </span>
                   <span style={{textDecoration: 'underline',  fontSize: '13px', color: 'blue'}} className='congrates-text-nice-day'>
                       have a nice day
                   </span>
                </div>
                <div className='congrates-img-wrapper'>
                    <img src="https://cdn.pixabay.com/photo/2019/06/29/02/51/birthday-items-4305336_960_720.png" className='congrates-img' alt="congrates images"/>
                </div>
            </div>
        </div>
    )
}

export default Content
