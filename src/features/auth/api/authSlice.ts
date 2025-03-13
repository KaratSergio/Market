import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { AuthState } from '../model/types'
import { login, register } from './authApi'

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  user: null,
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token')
      state.isAuthenticated = false
      state.token = null
      state.user = null
      document.cookie = 'refresh_token=; Max-Age=0'
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(register.pending, login.pending), (state) => {
        state.isLoading = true
      })
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, action) => {
          state.isAuthenticated = true
          state.token = action.payload.accessToken
          state.user = action.payload.user
          state.isLoading = false
          state.error = null
        },
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected),
        (state, action) => {
          state.isLoading = false
          state.error = action.error.message || 'Error in auth slice'
        },
      )
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
