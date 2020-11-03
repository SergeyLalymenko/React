import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(reducer, applyMiddleware(thunk, logger));