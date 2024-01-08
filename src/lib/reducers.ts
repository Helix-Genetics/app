import { UnknownAction, combineReducers } from 'redux'
import { Reducer } from '@reduxjs/toolkit'
import authReducer from '@/lib/resources/auth/slice'

export const combinedReducers = combineReducers({
  authReducer,
})

export type CombinedReducers = ReturnType<typeof combinedReducers>

export const reducers: Reducer = (state: CombinedReducers, action: UnknownAction) => {
  return combinedReducers(state, action)
}