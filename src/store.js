import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/chats'

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    profile: profileReducer,
	chats: chatsReducer
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)