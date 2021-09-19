import React, { Component } from 'react'
import './animationnavbar.css'




//importing scroll-navbar-image 
import NavbarImage from './animationNavbarImage/animationnavbarimage'




//importing images object for navbar
import {navbarImages} from '../../../object'


export class animationnavbar extends Component {

    state = {
        Navbar: false,
        classname: '',
        secondClassName: 'nothing'
    }

    handleScroll = () => {
        if(window.scrollY > 600) {
            this.setState({Navbar: true ,classname: 'nav', secondClassName: 'scroll-navbar-content-wrapper'});

        }
          if(window.scrollY < 600 && this.state.Navbar == true) {
              this.setState({Navbar : false, classname: 'remove-nav', secondClassName: 'nothing'});
          }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        const {classname, Navbar, secondClassName} = this.state;

   
        return (
            <>
            <div className={`${classname}`}>

                 <div className='scroll-navbar-content-wrapper'>
      { Navbar ?
                     <div className='scroll-navbar-images-links-wrapper'>
                         {
                             navbarImages.map((value, idx) => {
                                 return <NavbarImage key={idx} lable={value.lable} image={value.imageUrl}/>
                             } )
                         }

                         <div className='scroll-navbar-number-wrapper'>
                             <span className='scroll-navbar-number'>+7</span>
                         </div>
                     </div>: null
    }
                 </div> 
            </div>
            </>
        )
      

    }
}

export default animationnavbar
