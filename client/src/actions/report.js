import { dataReportProgram, dataReportLive } from '../utils/staticData' 
import { GET_PROGRAMS, GET_PROGRAM, GET_LIVES, GET_LIVE, REPORT_ERROR, CLEAR_REPORT } from './types' 

// get all programs report
export const getPrograms = () => async dispatch => {
    dispatch({ type: CLEAR_REPORT })

    try {
        const res = await dataReportProgram

        dispatch({
            type: GET_PROGRAMS,
            payload: res
        })
    } catch (err) {
        dispatch({
            type: REPORT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//  get program by id
export const getProgramById = id => async dispatch => {
    try {
        const res = await dataReportProgram

        dispatch({
            type: GET_PROGRAM,
            // payload: res.data
            payload: res.filter(item => item.id === id)
        })
    } catch (err) {
        dispatch({
            type: REPORT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// get all lives report
export const getLives = () => async dispatch => {
    dispatch({ type: CLEAR_REPORT })

    try {
        const res = await dataReportLive
        
        dispatch({
            type: GET_LIVES,
            payload: res
        })
    } catch (err) {
        dispatch({
            type: REPORT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//  get live by id
export const getLiveById = id => async dispatch => {
    try {
        const res = await dataReportLive

        dispatch({
            type: GET_LIVE,
            // payload: res.data
            payload: res.filter(item => item.id === id)
        })
    } catch (err) {
        dispatch({
            type: REPORT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}
