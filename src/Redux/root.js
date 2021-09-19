

import {combineReducers} from 'redux'

import {city_reducer, service_page_reducer, menu_items, popup_answer_reducer} from './reducer'

  export default combineReducers({
    //reducer for showing city selector menu in homepage 
    show: city_reducer,

    //reducer for showing photos and lebels in service page 
    ServiceType: service_page_reducer,

   //reducer for showing the answer in popup in service page question
    Answer: popup_answer_reducer,


    //reducer for showing photos in home page service menu
    MenuItems: menu_items

});