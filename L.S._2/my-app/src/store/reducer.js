import { SET_TODO_ACTION, SET_TODOS_ACTION } from './actions'

const initialState = {
    list: null
}

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case SET_TODO_ACTION: return {
            ...state,
            list: state.list.map((item) => payload.id !== item.id ? item : payload)
        }

        case SET_TODOS_ACTION : return {
            ...state,
            list: payload
        }
        default: return state;
    }
}