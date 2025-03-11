export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

export interface ProductsState {
    items: Product[];
    loading: boolean;
    error: string | null;
}

export const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
};

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}