import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../model/types';



export const fetchProducts = createAsyncThunk<Product[], void>(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<{ products: Product[] }>('https://dummyjson.com/products');
            return response.data.products;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки данных');
            }
            return rejectWithValue('Неизвестная ошибка');
        }
    }
);
