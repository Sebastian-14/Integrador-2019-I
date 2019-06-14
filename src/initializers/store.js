import {createStore, combineReducers, compose} from 'redux'
import persistState from 'redux-localstorage'

function userReducer(state=null, action) {    
    switch (action.type) {        
        case 'LOGGED_IN':
            return action.user

        case 'SIGN_OUT':
            return null

        default:
            return state
    }
}

let rootReducer = combineReducers({
    user: userReducer,
})

let mainEnhancer =  compose(persistState('user'))

export default createStore(rootReducer, {}, mainEnhancer)

