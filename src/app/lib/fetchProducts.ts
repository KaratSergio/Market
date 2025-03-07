import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

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
