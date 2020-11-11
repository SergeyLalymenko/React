import { TOGGLE_TODO_ACTION, GET_TODOS_ACTION, DELETE_TODO_ACTION, ADD_TODO_ACTION } from '../actions/actions'

const initialState = {
    list: null,
    form: {value: ''},
}

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case TOGGLE_TODO_ACTION: return {
            ...state,
            list: state.list.map((item) => payload.id !== item.id ? item : payload)
        }

        case GET_TODOS_ACTION : return {
            ...state,
            list: payload
        }

        case DELETE_TODO_ACTION : return {
            ...state,
            list: state.list.filter((item) => item.id !== payload)
        }

        case ADD_TODO_ACTION : return {
            form: {value: ''},
            list: [...state.list, payload]
        }

        default: return state;
    }
}