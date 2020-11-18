import { SET_STICKERS, CHANGE_STICKER, ADD_STICKER, DELETE_STICKER } from '../actions/sticker'

const initialState = {
   stickers: [],
}

export default function (state = initialState, {type, payload}){
    switch(type){
        case SET_STICKERS: return {...state, stickers: payload};

        case CHANGE_STICKER: return {...state, stickers: state.stickers.map((item) => item.id !== payload.id ? item : payload)};

        case ADD_STICKER: return {...state, stickers: [...state.stickers, payload]};

        case DELETE_STICKER: return {...state, stickers: state.stickers.filter((item) => item.id !== payload)};

        default: return state;
    }
}