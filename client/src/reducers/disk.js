import { 
    GET_MAPPING_DISK, 
    DISK_ERROR, 
    GET_SAVED_DISK_PATH
} from "../actions/types"

const initialState = {
    mappingDisk: [],
    savedDisk: null,
    loading: true,
    error: {}
}

const diskReducer = (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
        case GET_MAPPING_DISK:
            return {
                ...state,
                mappingDisk: payload,
                loading: false
            }
        case GET_SAVED_DISK_PATH:
            return {
                ...state,
                savedDisk: payload,
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