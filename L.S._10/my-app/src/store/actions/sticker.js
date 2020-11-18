import api from '../../api'



export const SET_STICKERS = 'SET_STICKERS';
export const fetchStickers = () => (dispatch) => {
    api.get('/').then(({data}) => dispatch({type: SET_STICKERS, payload: data}))
}

export const saveSticker = (id) => (dispatch, getState) => {
    const selectedSticker = getState().stickers.find((item) => item.id === id);
    api.put('/' + id, selectedSticker);
}

export const changeStickerLocal = (e, selectedSticker, shiftX, shiftY) => {
    const changedSticker = {
        ...selectedSticker,
        x: e.pageX - shiftX,
        y: e.pageY - shiftY,
    }
    return {
        type: CHANGE_STICKER,
        payload: changedSticker,
    }
}

export const DELETE_STICKER = 'DELETE_STICKER';
export const deleteSticker = (id) => (dispatch) => {
    api.delete('/' + id).then(({data}) => dispatch({type: DELETE_STICKER, payload: data.id}))
}

export const ADD_STICKER = 'ADD_STICKER';
export const addSticker = (values) => (dispatch) => {
    const newSticker = {
        title: values.title,
        description: values.description,
        x: 100,
        y: 100,
        width: 120,
        height: 100,
    }
    api.post('/', newSticker).then(({data}) => dispatch({type: ADD_STICKER, payload: data}))
}

export const CHANGE_STICKER = 'CHANGE_STICKER';
export const changeSticker = (values, id, stickers) => (dispatch) => {
    const selectedSticker = stickers.find((item) => item.id === id);
    const newSticker = {
        ...selectedSticker,
        title: values.title,
        description: values.description,
    }
    api.put('/' + id, newSticker).then(({data}) => dispatch({type: CHANGE_STICKER, payload: data}))
}