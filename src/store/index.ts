import {combineReducers, configureStore, Action} from '@reduxjs/toolkit'
import {ThunkAction} from 'redux-thunk'
import UsersReducer from './UserReducer'

const reducer=combineReducers({
    users: UsersReducer
})

const store = configureStore({
    reducer
})


export type rootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, rootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
