import { GET_PROGRAMS, REPORT_ERROR, CLEAR_REPORT } from '../actions/types'

const initialState = {
    programs: [],
    loading: true,
    error: {}
}

const reportReducer = (state= initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_PROGRAMS:
            return {
                ...state,
                programs: payload,
                loading: false
            }
        case REPORT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_REPORT:
            return {
                ...state,
                programs: null
            }
        default:
            return state
    }
}

export default reportReducer