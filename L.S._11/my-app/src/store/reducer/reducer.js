import { SET_CONTACTS, ADD_CONTACT, SET_CONTACT, DELETE_CONTACT } from '../actions/actions'

const initialState = {
    contacts: [],
}

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case SET_CONTACTS: return {...state, contacts: payload}

        case ADD_CONTACT: return {...state, contacts: [...state.contacts, payload]}

        case SET_CONTACT: return {...state, contacts: state.contacts.map((item) => item.id !== payload.id ? item : payload)}

        case DELETE_CONTACT: return {...state, contacts: state.contacts.filter((item) => item.id !== payload)}

        default: return state
    }
}