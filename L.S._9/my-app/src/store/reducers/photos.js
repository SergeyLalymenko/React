import { PHOTOS_SET_LIST } from "../actions/photos";

const initialState = {
   list: [],
}

export default function (state = initialState, {type, payload}){
    switch(type){
        case PHOTOS_SET_LIST: return {...state, list: payload}

        default: return state;
    }
}