import {createStore, combineReducers} from 'redux'

import NumbersReducers from './reducers/NumbersReducers'

const reducers = combineReducers({
    numeros: NumbersReducers,
})
   

function storeConfig(){
    return createStore(reducers)
}
export default storeConfig