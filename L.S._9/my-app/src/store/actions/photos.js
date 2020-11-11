import api from '../../api'


export const PHOTOS_SET_LIST = 'PHOTOS_SET_LIST'
export const fetchPhotos = (albumId) => async (dispatch) => {
    dispatch({type: PHOTOS_SET_LIST, payload: []})
    const {data} = await api.get(`photos?albumId=${albumId}`);
    dispatch({type: PHOTOS_SET_LIST, payload: data})
}