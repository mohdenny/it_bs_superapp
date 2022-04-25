import api from '../utils/api' // import instance axios
import { dataDisk } from '../utils/staticData' // import static data
import { GET_MAPPING_DISK, DISK_ERROR, GET_SAVED_DISK_PATH } from './types' // import types action

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
export const getSavedDiskPath = () => async dispatch => {
    try {
        // const res = await api.get(`/disk/${path}:`)
        const res = await dataDisk

        dispatch({
            type: GET_SAVED_DISK_PATH,
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