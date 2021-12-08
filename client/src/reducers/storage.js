import { GET_DISK_SPACE, DISK_SPACE_ERROR } from "../actions/types"

const initialState = {
    disks: [],
    disk: null,
    loading: true,
    error: {}
}

const storageReducer = (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
        case GET_DISK_SPACE:
            return {
                ...state,
                disk: payload,
                loading: false
            }
        case DISK_SPACE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        default:
            return state
    }
} 

export default storageReducer