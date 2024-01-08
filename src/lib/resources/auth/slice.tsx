// libraries
import { Reducer, createSlice } from '@reduxjs/toolkit'

import { IAuth } from '@/lib/resources/auth/auth.interface'
import { matchAuthChange } from './matcher'
// models


//endpoints

const initialState: IAuth = {
  access_token: '',
  refresh_token: 'null',
  current_user: {
    id: '',
    first_name: '',
    middle_name: '',
    last_names: '',
    email: '',
    phone_number: '',
    username: '',
    is_active: true,
    avatar: '',
    role_id: '',
    created_at: '',
    updated_at: '',
    role: {
      id: '',
      name: '',
      permissions: []
    }
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload
    },
    setCurrentUser: (state, action) => {
      state.current_user = action.payload.current_user
    },
    deleteAccessToken: () => initialState
  },
  extraReducers: b => {
    b.addMatcher(matchAuthChange, (state, action) => {
      state.access_token = action.payload.access_token
      state.refresh_token = action.payload.refresh_token
    })
  }
})

export const { setAccessToken,setCurrentUser, deleteAccessToken } = authSlice.actions
const authReducer: Reducer<IAuth> = authSlice.reducer
export default authReducer
