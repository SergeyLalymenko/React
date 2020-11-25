import api from '../../api'



export const SET_CONTACTS = 'SET_CONTACTS'
export const fetchContacts = () => (dispatch) => {
    api.get('/').then(({data}) => dispatch({type: SET_CONTACTS, payload: data}));
}

export const ADD_CONTACT = 'ADD_CONTACT'
export const addContact = (values) => (dispatch) => {
    const newContact = {
        name: values.name,
        surname: values.surname,
        phone: values.phone,
    }
    api.post('/', newContact).then(({data}) => dispatch({type: ADD_CONTACT, payload: data}))
}

export const SET_CONTACT = 'SET_CONTACT'
export const changeContact = (values, contacts, id) => (dispatch) => {
    const selectedContact = contacts.find((item) => item.id === id);
    const newContact = {
        ...selectedContact,
        name: values.name,
        surname: values.surname,
        phone: values.phone,
    }
    api.put('/' + id, newContact).then(({data}) => dispatch({type: SET_CONTACT, payload: data}))
}

export const DELETE_CONTACT = 'DELETE_CONTACT'
export const deleteContact = (id) => (dispatch) => {
    api.delete('/' + id).then(() => dispatch({type: DELETE_CONTACT, payload: id}));
}