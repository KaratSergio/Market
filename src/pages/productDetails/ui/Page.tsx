import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
}

export const Details: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product as Product | undefined;

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
};
