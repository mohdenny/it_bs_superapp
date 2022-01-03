import { combineReducers } from 'redux'
import disk from './disk'
import ticket from './ticket'
import report from './report'

export default combineReducers({
    disk,
    ticket,
    report
})