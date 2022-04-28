import { dataTicket } from "../utils/staticData" // import static data
import { 
    GET_TICKETS,
    GET_TICKET,
    TICKET_ERROR,
    CLEAR_TICKET,
    GET_TICKET_BY_STATUS
} from "./types" // import types action

//  get all ticket
export const getTickets = () => async dispatch => {
    dispatch({ type: CLEAR_TICKET })

    try {
        const res = await dataTicket

        dispatch({
            type: GET_TICKETS,
            // payload: res.data
            payload: res
        })
    } catch (err) {
        dispatch({
            type: TICKET_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//  get ticket by id
export const getTicketById = id => async dispatch => {
    try {
        const res = await dataTicket

        dispatch({
            type: GET_TICKET,
            // payload: res.data
            payload: res.filter(item => item.id === id)
        })
    } catch (err) {
        dispatch({
            type: TICKET_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

//  get ticket by STATUS
export const getTicketByStatus = status => async dispatch => {
    dispatch({ type: CLEAR_TICKET })

    try {
        const res = await dataTicket

        dispatch({
            type: GET_TICKET_BY_STATUS,
            // payload: res.data
            payload: res.filter(item => item.status === status)
        })

    } catch (err) {
        dispatch({
            type: TICKET_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}