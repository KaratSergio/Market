import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from '@features/index'
import { adsSlice } from '@entities/index'

export const rootReducer = combineReducers({
  auth: authSlice,
  ads: adsSlice,
})

export type RootState = ReturnType<typeof rootReducer>
