import api from '../utils/api'
import { dataDisk } from '../utils/staticData'
import { GET_MAPPING_DISK, DISK_ERROR, GET_SAVED_DISK } from './types'

//  get mapping disk
export const getMappingDisk = () => async dispatch => {
    try {
        const res = await api.get(`/disk`)

        dispatch({
            type: GET_MAPPING_DISK,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DISK_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//  get saved disk
export const getSavedDisk = () => async dispatch => {
    try {
        // const res = await api.get(`/disk/${path}:`)
        const res = await dataDisk

        console.log(res)
        dispatch({
            type: GET_SAVED_DISK,
            payload: res
            // payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DISK_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}