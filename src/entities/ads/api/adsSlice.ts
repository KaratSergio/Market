import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAdsList } from './adsApi'
import { Ad, AdsState } from '../model/types'

const initialState: AdsState = {
  ads: null,
  isLoading: false,
  error: null,
}

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdsList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getAdsList.fulfilled, (state, action: PayloadAction<Ad[]>) => {
        state.isLoading = false
        state.ads = action.payload
      })
      .addCase(getAdsList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default adsSlice.reducer
