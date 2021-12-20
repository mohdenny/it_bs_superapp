import { dataTicket } from "../utils/staticData"
import { GET_TICKETS, GET_TICKET, TICKET_ERROR } from "./types"

//  get all ticket
export const getTickets = () => async dispatch => {
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

//  get ticket
export const getTicket = (term) => async dispatch => {
    try {
        const res = await dataTicket

        dispatch({
            type: GET_TICKET,
            // payload: res.data
            payload: res.filter(item => item.status === term)
        })
    } catch (err) {
        dispatch({
            type: TICKET_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}