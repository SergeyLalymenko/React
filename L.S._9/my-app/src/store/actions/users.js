import api from '../../api'


export const USERS_SET_LIST = 'USERS_SET_LIST'
export const fetchUsers = () => async (dispatch) => {
    const {data} = await api.get(`users`);
    dispatch({type: USERS_SET_LIST, payload: data})
}

export const SET_NEW_USER = 'SET_NEW_USER'
export const setNewUser = (form) => async (dispatch) => {
    const {data} = await api.post(`users`, form);
    dispatch({type: SET_NEW_USER, payload: data})
}

export const CHANGE_USER = 'CHANGE_USER'
export const changeUser = (form, id) => async (dispatch, getState) => {
    const {users: {list}} = getState();
    const selectedUser = list.find((item) => item.id == id);
    const newUser = {
        ...selectedUser,
        name: form.name,
        username: form.username,
    }
    const {data} = await api.put(`users/${id}`, newUser);
    dispatch({type: CHANGE_USER, payload: data})
}

export const DELETE_USER = 'DELETE_USER'
export const deleteUser = (id) => async (dispatch) => {
    await api.delete(`users/${id}`);
    dispatch({type: DELETE_USER, payload: id})
}