import {CHANGE_SHOW, SERVICE_CONTENT_TYPE} from './type'




//importing 
import {SalonForWomen, MassageForWomen} from './service-page-states-objects'


//creating action for citySelector Menu dropdown
export const change_show = (state = false, action) => {
  return {
      type: CHANGE_SHOW
  }
}












//creating action for ServicePage State selector 
export const SERVICE_PAGE_STATE = (istype, ispayload) => ({
  type : istype,
  payload: ispayload
});














//creating servicespage question and answer state

export const QUESTION_ANSWER = (type) => ({
    type : type
})






