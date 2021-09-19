
import {CHANGE_SHOW} from './type'


import {SERVICE_CONTENT_TYPE} from './type'



//importing menu items state objects
import {Image} from '../object'



//importing state object from servicepage State object
import {SalonForMen, SalonForWomen} from './service-page-states-objects'

// export const city_reducer = (state = false, action) => {
//      switch (action.type) {
//          case CHANGE_SHOW :
//              return !state;
//              break;
     
//          default:
//              return state;
//              break;
//      }
//     }



export const city_reducer = (state = false, action) => {
    switch (action.type) {
        case CHANGE_SHOW :
            return !state;
            break;
    
        default:
            return state;
            break;
    }
   }








    //CREATING REDUCER TO DECIDE THE STATE OF SERVICE PAGE BASED ON SERVICE CLICK
    export const service_page_reducer = (state = SalonForMen, action) => {
          
       switch(action.type) {
           case SERVICE_CONTENT_TYPE.SALON_FOR_MEN :
               return action.payload;
               break;
               case SERVICE_CONTENT_TYPE.CLEANING_AND_DISINFCTION :
                   return action.payload;
                   break;
                   case SERVICE_CONTENT_TYPE.SALON_FOR_WOMEN :
                       return action.payload;
                       break;
                       case SERVICE_CONTENT_TYPE.APPLIANCE_REPAIR :
                           return action.payload;
                           break;
                           case SERVICE_CONTENT_TYPE.MASSAGE_FOR_MEN :
                               return action.payload;
                               break;
                               case SERVICE_CONTENT_TYPE.PAINTER :
                                   return action.payload;
                                   break;
                                   case SERVICE_CONTENT_TYPE.AC_SERVICE_AND_REPAIR :
                                       return action.payload;
                                       break;
                                       case SERVICE_CONTENT_TYPE.ELECTRICIANS :
                                           return action.payload;
                                           break;
                                           case SERVICE_CONTENT_TYPE.PLUMBERS :
                                               return action.payload;
                                               break;
                                               case SERVICE_CONTENT_TYPE.CARPENTERS :
                                                   return action.payload;
                                                   break;
                                                   case SERVICE_CONTENT_TYPE.MASSAGE_FOR_WOMEN :
                                                       return action.payload;
                                                       break;
                                                       case SERVICE_CONTENT_TYPE.PEST_CONTROL :
                                                           return action.payload;
                                                             break;


                                                default:
                                                  return state;
                                                    break;
       }
    }



















//creating reducer to get the state of question and answer

 export const popup_answer_reducer = (state = SalonForWomen.Modal_Question_And_Answer, action) => {
    switch(action.type) {
        case SalonForWomen.Modal_Question_And_Answer.First_Element_Of_Question_Modal.question :
            return SalonForWomen.Modal_Question_And_Answer.First_Element_Of_Question_Modal;
            break;


            case SalonForWomen.Modal_Question_And_Answer.Second_Element_Of_Question_Modal.question :
                return SalonForWomen.Modal_Question_And_Answer.Second_Element_Of_Question_Modal;
                break;


                case SalonForWomen.Modal_Question_And_Answer.Third_Element_Of_Question_Modal.question :
                    return SalonForWomen.Modal_Question_And_Answer.Third_Element_Of_Question_Modal;
                    break;

                    case SalonForWomen.Modal_Question_And_Answer.Fourth_Element_Of_Question_Modal.question :
                        return SalonForWomen.Modal_Question_And_Answer.Fourth_Element_Of_Question_Modal;
                        break;

                        case SalonForWomen.Modal_Question_And_Answer.Fifth_Element_Of_Question_Modal.question :
                            return SalonForWomen.Modal_Question_And_Answer.Fifth_Element_Of_Question_Modal;
                            break;

                            case SalonForWomen.Modal_Question_And_Answer.Sixth_Element_Of_Question_Modal.question :
                                return SalonForWomen.Modal_Question_And_Answer.Sixth_Element_Of_Question_Modal;
                                break;


                                case SalonForWomen.Modal_Question_And_Answer.Seventh_Element_Of_Question_Modal.question :
                                    return SalonForWomen.Modal_Question_And_Answer.Seventh_Element_Of_Question_Modal ;
                                    break;

                                    case SalonForWomen.Modal_Question_And_Answer.Eighth_Element_Of_Question_Modal.question :
                                        return SalonForWomen.Modal_Question_And_Answer.Eighth_Element_Of_Question_Modal;
                                        break;

                                        case SalonForWomen.Modal_Question_And_Answer.Nineth_Element_Of_Question_Modal.question :
                                            return SalonForWomen.Modal_Question_And_Answer.Nineth_Element_Of_Question_Modal;
                                            break;

                                            case SalonForWomen.Modal_Question_And_Answer.Tenth_Element_Of_Question_Modal.question :
                                                return SalonForWomen.Modal_Question_And_Answer.Tenth_Element_Of_Question_Modal;
                                                break;

                                                      case SalonForWomen.Modal_Question_And_Answer.Eleventh_Element_Of_Question_Modal.question :
                                                          return SalonForWomen.Modal_Question_And_Answer.Eleventh_Element_Of_Question_Modal;
                                                          break;

                                                           case SalonForWomen.Modal_Question_And_Answer.Twelth_Element_Of_Question_Modal.question :
                                                               return SalonForWomen.Modal_Question_And_Answer.Twelth_Element_Of_Question_Modal;
                                                               break;

                                                               case SalonForWomen.Modal_Question_And_Answer.Thirteenth_Element_Of_Question_Modal.question :
                                                                   return SalonForWomen.Modal_Question_And_Answer.Thirteenth_Element_Of_Question_Modal;
                                                                   break;

                                                                   case SalonForWomen.Modal_Question_And_Answer.Fourteenth_Element_Of_Question_Modal.question :
                                                                      return SalonForWomen.Modal_Question_And_Answer.Fourteenth_Element_Of_Question_Modal;
                                                                      break;


                                                                      case SalonForWomen.Modal_Question_And_Answer.Fifteenth_Element_Of_Question_Modal.question :
                                                                          return SalonForWomen.Modal_Question_And_Answer.Fifteenth_Element_Of_Question_Modal;
                                                                          break;


                                                                          case SalonForWomen.Modal_Question_And_Answer.Sixteenth_Element_Of_Question_Modal.question :
                                                                              return SalonForWomen.Modal_Question_And_Answer.Sixteenth_Element_Of_Question_Modal;
                                                                              break;


                                                              default:
                                                                  return SalonForWomen.Modal_Question_And_Answer.Twelth_Element_Of_Question_Modal.answer;
                                                                  break;

    }
}































































    //creating Reducer for services Menu items 

   export  const menu_items =  (state = Image, action) => {
              switch(action.type) {
                  case CHANGE_SHOW :
                      return action.payload;
                      break;
                     default:
                      return state;
              }
   } 