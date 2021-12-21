import { dataTicket } from "../utils/staticData"
import { 
    GET_TICKETS,
    GET_TICKET,
    TICKET_ERROR,
    CLEAR_TICKET
} from "./types"

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

//  get ticket by id
export const getTicketByStatus = status => async dispatch => {
    try {
        const res = await dataTicket

        dispatch({
            type: GET_TICKET,
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