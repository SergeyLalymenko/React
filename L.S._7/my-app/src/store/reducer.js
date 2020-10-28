import { SET_CONTACTS_ACTION, SET_FORM_ACTION, SET_CONTACT_ACTION, SET_NEW_CONTACT_ACTION, DELETE_CONTACT_ACTION } from './actions'

const initialState = {
    contacts: [],
    form: {
        name: '',
        surname: '',
        phone: '',
        targetElementId: '',
    }
}

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case SET_CONTACTS_ACTION: return {
            ...state,
            contacts: payload,
        }

        case SET_FORM_ACTION: return {
            ...state,
            form: payload
        }

        case SET_CONTACT_ACTION: return {
            ...state,
            contacts: state.contacts.map((item) => item.id !== payload.id ? item : payload)
        }

        case SET_NEW_CONTACT_ACTION: return {
            ...state,
            contacts: [...state.contacts, payload]
        }

        case DELETE_CONTACT_ACTION: return {
            ...state,
            contacts: state.contacts.filter((item) => item.id !== state.form.targetElementId)
        }

        default: return state
    }
}