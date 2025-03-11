import { combineReducers } from '@reduxjs/toolkit'
import productsReducer from '../pages/main/api/productSlice';

export const rootReducer = combineReducers({
    products: productsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
