import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiClient } from '@shared/api/apiClient'
import { LoginFormInputs, RegisterFormInputs } from '../model/types'
import { handleAxiosError } from '@shared/utils'

export const register = createAsyncThunk(
  'auth/register',
  async (data: RegisterFormInputs, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/auth/register', data)
      localStorage.setItem('token', response.data.accessToken)
      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  },
)

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginFormInputs, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/auth/login', data)
      localStorage.setItem('token', response.data.accessToken)
      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  },
)

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/auth/refresh')
      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  },
)
