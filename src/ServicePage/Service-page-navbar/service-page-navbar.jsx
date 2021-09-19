import React, { Component } from 'react'
import './service-page-navbar.css'



export class servicepagenavbar extends Component {
    render() {
        return (
            <div className='service-page-navbar-wrapper'>
                <div className='service-page-navbar'>
                    <ul className='service-page-navbar-links-wrapper'>
                        <li className='service-page-navbar-left-arrow'>
                            <span className='service-page-navbar-arrow'>&#60;</span>
                        </li>
                      <li className='service-page-navbar-first-link'>
                         <span className='service-page-navbar-link'>How it Works</span>
                         </li>
                            <li className='service-page-navbar-second-link'>
                             <span className='service-page-navbar-link'>Beauticians</span>
                              </li>
                                 <li className='service-page-navbar-third-link'>
                                    <span className='service-page-navbar-link'>Blogs</span>
                                    </li>
                                       <li className='service-page-navbar-fourth-link'>
                                        <span className='service-page-navbar-link'>FAQs</span>
                                          </li>
                                            <li className='service-page-navbar-fifth-link'>
                                              <span className='service-page-navbar-link'>About Salon at Home</span>
                                                </li>
                                                <li className='service-page-navbar-right-arrow'>
                                                    <span className='service-page-navbar-arrow'>&#62;</span>
                                                </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default servicepagenavbar
