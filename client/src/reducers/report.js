import { GET_PROGRAMS, GET_PROGRAM, GET_LIVES, GET_LIVE, REPORT_ERROR, CLEAR_REPORT } from '../actions/types'

const initialState = {
    programs: [],
    program: null,
    lives: [],
    live: null,
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
        case GET_LIVES:
            return {
                ...state,
                lives: payload,
                loading: false
            }
        case GET_PROGRAM:
            return {
                ...state,
                program: payload,
                loading: false
            }
        case GET_LIVE:
            return {
                ...state,
                live: payload,
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
                programs: null,
                lives: null
            }
        default:
            return state
    }
}

export default reportReducer