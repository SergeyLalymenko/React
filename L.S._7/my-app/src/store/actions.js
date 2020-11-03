import contactsService from '../contactsService'

// export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION'
// export function setContacts(payload){
//     return {
//         type: SET_CONTACTS_ACTION,
//         payload
//     }
// }

export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION'
export const setContacts = () => (dispatch) => {
    contactsService.get('/').then(({data}) => dispatch({type:SET_CONTACTS_ACTION, payload: data}));
}

export const SET_FORM_ACTION = 'SET_FORM_ACTION'
export function setForm(payload){
    return {
        type: SET_FORM_ACTION,
        payload
    }
}
///////////////////////////////////////////////////////////////
export const SET_CONTACT_ACTION = 'SET_CONTACT_ACTION'
export const setContact = (id, contact) => (dispatch) => {
    contactsService.put('/' + id, contact)
        .then(({data}) => {
            dispatch({type: SET_CONTACT_ACTION, payload: data})
        })
}
///////////////////////////////////////////////////////////////
export const SET_NEW_CONTACT_ACTION = 'SET_NEW_CONTACT_ACTION'
export function setNewContact(payload){
    return {
        type: SET_NEW_CONTACT_ACTION,
        payload
    }
}

export const DELETE_CONTACT_ACTION = 'DELETE_CONTACT_ACTION'
export function deleteContact(){
    return {
        type: DELETE_CONTACT_ACTION,
    }
}