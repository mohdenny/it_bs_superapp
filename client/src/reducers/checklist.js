import {
    GET_CHECKLISTS,
    GET_CHECKLIST,
    CLEAR_CHECKLIST,
    CHECKLIST_ERROR,
    GET_CHECKLIST_BY_DATE
} from '../actions/types'

const initialState = {
    checklists: [],
    checklist: null,
    loading: true,
    error: {}
}

const checklistReducer = (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
        case GET_CHECKLISTS:
            return {
                ...state,
                checklists: payload,
                loading: false
            }
        case GET_CHECKLIST_BY_DATE:
            return {
                ...state,
                checklists: payload,
                loading: false
            }
        case GET_CHECKLIST:
            return {
                ...state,
                checklist: payload,
                loading: false
            }
        case CHECKLIST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        case CLEAR_CHECKLIST:
            return {
                ...state,
                tickets: null
            }
        default:
            return state
    }
} 

export default checklistReducer