import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiClient } from '@shared/api/apiClient'
import { handleAxiosError } from '@shared/utils'

export const getAdsList = createAsyncThunk(
  'ad/list',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get('/ad/list')
      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  },
)
