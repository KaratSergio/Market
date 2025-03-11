import { FC } from 'react';
import { useProductFromLocation } from '@entities/listing/api/detailsListing';
import { useNavigate } from 'react-router-dom';

export const ListingCard: FC = () => {

    const product = useProductFromLocation();
    const navigate = useNavigate();

    if (!product) {
        navigate("/404");
        return null;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-xl font-semibold mt-2">Цена: ${product.price}</p>
            <div className="mt-4 flex space-x-2 overflow-x-auto">
                <img src={product.thumbnail} alt="product" className="w-32 h-32 object-cover rounded-md" />
            </div>
        </div>
    );
}