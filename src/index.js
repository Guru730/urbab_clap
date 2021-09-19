import react from 'react'

import ReactDOM from 'react-dom'

import App from './App'

//importing provider method to apply redux on app

import {Provider} from 'react-redux'

//importing store from store.js for provider method
import {store} from './Redux/store'



import OrderPage from './BookingOrderPage/orderpage'


//importing  browserRouter from react-router-dom
import {BrowserRouter as Router} from 'react-router-dom'

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
       </Router>
        </Provider>
  ,
    root
)
