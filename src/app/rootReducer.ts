import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from '@features/auth'
import { adsSlice } from '@entities/ads'

export const rootReducer = combineReducers({
  auth: authSlice,
  ads: adsSlice,
})

export type RootState = ReturnType<typeof rootReducer>
