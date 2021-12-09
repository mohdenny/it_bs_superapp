import api from '../utils/api'
import { GET_DISK_SPACE, DISK_ERROR, GET_ALL_DISK } from './types'

//  get all disk
export const getAllDisk = () => async dispatch => {
    try {
        const res = await api.get(`/disk`)

        dispatch({
            type: GET_ALL_DISK,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DISK_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//  get disk space
export const getDiskSpace = path => async dispatch => {
    try {
        const res = await api.get(`/disk/${path}:`)

        dispatch({
            type: GET_DISK_SPACE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DISK_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}