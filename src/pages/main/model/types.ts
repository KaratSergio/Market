export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail: string;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
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

