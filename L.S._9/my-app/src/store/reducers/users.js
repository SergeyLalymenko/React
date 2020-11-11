import { USERS_SET_LIST, SET_NEW_USER, CHANGE_USER, DELETE_USER } from "../actions/users";

const initialState = {
   list: [],
}

export default function (state = initialState, {type, payload}){
    switch(type){
        case USERS_SET_LIST: return {...state, list: payload};

        case SET_NEW_USER: return {...state, list: [...state.list, payload]};
        
        case CHANGE_USER: return {...state, list: state.list.map((item) => item.id === payload.id ? payload : item)};
        
        case DELETE_USER: return {...state, list: state.list.filter((item) => item.id != payload)};

        default: return state;
    }
}