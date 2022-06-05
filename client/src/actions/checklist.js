import { dataChecklist } from "../utils/staticData"
import {
    GET_CHECKLISTS,
    GET_CHECKLIST,
    GET_CHECKLIST_BY_DATE,
    CLEAR_CHECKLIST,
    CHECKLIST_ERROR
} from './types'
import { format } from 'date-fns'

const formatDate = (date) => {
    return format(date, 'dd-MM-yyyy')
} 

// get all checklist
export const getChecklists = () => async dispatch => {
    dispatch({ type: CLEAR_CHECKLIST })

    try {
        const res = await dataChecklist

        dispatch({
            type: GET_CHECKLISTS,
            // payload: res.data
            payload: res
        })
    } catch (err) {
        dispatch({
            type: CHECKLIST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//  get checklist by id
export const getChecklistById = id => async dispatch => {
    try {
        const res = await dataChecklist

        dispatch({
            type: GET_CHECKLIST,
            // payload: res.data
            payload: res.filter(item => item.id === id)
        })
    } catch (err) {
        dispatch({
            type: CHECKLIST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//  get checklist by DATE
export const getChecklistByDate = (date) => async dispatch => {
    try {
        const res = await dataChecklist

        dispatch({
            type: GET_CHECKLIST_BY_DATE,
            // payload: res.data
            payload: res
            // payload: res.filter(item => formatDate(item.date) === date)
        })

    } catch (err) {
        dispatch({
            type: CHECKLIST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}