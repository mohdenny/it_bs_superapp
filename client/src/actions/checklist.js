import { dataChecklist } from "../utils/staticData"
import {
    GET_CHECKLISTS,
    GET_CHECKLIST,
    CLEAR_CHECKLIST,
    CHECKLIST_ERROR
} from './types'

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