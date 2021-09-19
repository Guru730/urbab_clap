import {createStore, applyMiddleware} from 'redux'

import root_reducer from './root'

import thunk from 'redux-thunk'


const middleware = [thunk];

export const store = createStore(root_reducer, applyMiddleware(...middleware));