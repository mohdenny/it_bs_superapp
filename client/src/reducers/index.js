import { combineReducers } from 'redux'
import disk from './disk'
import ticket from './ticket'

export default combineReducers({
    disk,
    ticket
})