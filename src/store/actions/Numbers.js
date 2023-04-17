import {
    NUM_MIN_EDIT,
    NUM_MAX_EDIT
} from "./ActionsTypes"

//action Creator 
export function EditNumberMin (newNumber){
    return {
        type: NUM_MIN_EDIT,
        payload: newNumber
    }
}

export function EditNumberMax (newNumber){
    return {
        type: NUM_MAX_EDIT,
        payload: newNumber
    }
}