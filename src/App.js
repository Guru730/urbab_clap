import React from 'react'
import './App.css'

//importing Header from Components/Header/Header.js
import Header from './Components/Header/header'


//importing body from Components/body.jsx
import Body from './Components/body/body' 


//importing footer of homepage
import Footer from './Components/Footer/footer'


//import Home
import Home from './Homepage/homepage'

//importing service
import Service from './ServicePage/servicepage'


//importing bookingorder page
import BookingPage from './BookingOrderPage/orderpage'

//importing Navbar to stay on top always
import Navbar from './Components/Navbar/navbar'

//importing roueter from react-router-dom
import {Route,Link,Switch} from 'react-router'

function App() {
    return (
        <div className='app-ctn'>
          <Navbar/>
          
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/service' component={Service}/>
            <Route path='/booking' component={BookingPage}/>
            </Switch>
        </div>
    )
}

export default App
