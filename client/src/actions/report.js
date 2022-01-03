import { dataReportProgram } from '../utils/staticData'
import { GET_PROGRAMS, REPORT_ERROR, CLEAR_REPORT } from './types'

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