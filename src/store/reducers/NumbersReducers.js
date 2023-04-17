import {
    NUM_MIN_EDIT,
    NUM_MAX_EDIT
} from "../actions/ActionsTypes"

 const initialState = {
    min:1,
    max:10
  }
 
 export default function(state = initialState, action) {
       
    switch(action.type){
        case NUM_MIN_EDIT:
            return {
                ...state,
                min : action.payload
            }

            case NUM_MAX_EDIT:
            return {
                ...state,
                max : action.payload
            }

            default:
                return state
    }
}