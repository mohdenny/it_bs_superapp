import api from '../utils/api'
import { GET_DISK_SPACE, DISK_SPACE_ERROR } from './types'

//  get disk space
export const getDiskSpace = (disk) => async dispatch => {
    try {
        const res = await api.get(`/storage/${disk}`)

        dispatch({
            type: GET_DISK_SPACE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DISK_SPACE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}