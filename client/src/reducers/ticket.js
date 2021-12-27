import {
    GET_TICKETS,
    GET_TICKET,
    TICKET_ERROR,
    CLEAR_TICKET,
    GET_TICKET_BY_STATUS
} from '../actions/types'

const initialState = {
    tickets: [],
    ticketToCount: [],
    ticket: null,
    loading: true,
    error: {}
}

const ticketReducer = (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
        case GET_TICKETS:
            return {
                ...state,
                tickets: payload,
                ticketToCount: payload,
                loading: false
            }
        case GET_TICKET:
            return {
                ...state,
                ticket: payload,
                loading: false
            }
        case GET_TICKET_BY_STATUS:
            return {
                ...state,
                tickets: payload,
                loading: false
            }
        case TICKET_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        case CLEAR_TICKET:
            return {
                ...state,
                tickets: null
            }
        default:
            return state
    }
} 

export default ticketReducer