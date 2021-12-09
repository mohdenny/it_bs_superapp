import { 
    GET_DISK_SPACE, 
    DISK_ERROR, 
    GET_ALL_DISK
} from "../actions/types"

const initialState = {
    disks: [],
    disk: null,
    loading: true,
    error: {}
}

const diskReducer = (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
        case GET_ALL_DISK:
            return {
                ...state,
                disks: payload,
                loading: false
            }
        case GET_DISK_SPACE:
            return {
                ...state,
                disk: payload,
                loading: false
            }
        case DISK_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        default:
            return state
    }
} 

export default diskReducer