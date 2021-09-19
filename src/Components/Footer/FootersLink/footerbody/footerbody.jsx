import React from 'react'
import './footerbody.css'


//importing link component
import Footerlink from '../footerComponents/footerlinks/footerlink'

function footerbody() {


    const ServingInCities = ['Ahmedabad', 'Banglore', 'Chennai', 'Delhi NCR', 'Chandigarh Tricity', 'Jaipur', 'Hyderabad', 'kolkata', 'Mumbai'];

      const AustralianCities = ['Sydney'];

        const UAECities = ['Abudabi', 'Dubai'];
    return (
        <div className='footer-body-wrapper'>
            <h3 className='serving-in-heading'>Serving In</h3>
            <div className='india-cities-ctn'>
                <h3 className='cities-heading'>INDIA</h3>
                <div className='cities-wrapper'>
          {
              ServingInCities.map((value) => {
                  return <Footerlink tittle={value}/>
              })
          }
          </div>
          </div>
          <div className='Aus-cities-ctn'>
              <h3 className='cities-heading'>
                  Aus
              </h3>
              <div className='cities-wrapper'>
                  {
                     AustralianCities.map((value, idx) => {
                         return <Footerlink tittle={value}/>
                     })
                  }
              </div>
          </div>
          <div className='UAE-cities-ctn'>
              <h3 className='cities-heading'>UAE</h3>
              <div className='cities-wrapper'>
                  {
                      UAECities.map((value, idx) => {
                          return <Footerlink tittle={value}/>
                      })
                  }
              </div>
          </div>
        </div>
    )
}

export default footerbody
