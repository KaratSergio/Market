import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../app/lib/fetchProducts';
import { AppDispatch, RootState } from '../../../app/store';
import { Link } from 'react-router-dom';

export const ProductsList: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.products || { items: [], loading: false, error: null });

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
            {items.map((product) => (
                <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className='flex flex-col justify-between items-center p-4 bg-white border rounded-md'
                >
                    <img src={product.thumbnail} alt={product.title} width={150} height={150} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                    <h2 className='ms:text-base md:text-base lg:text-xl xl:text-2xl font-bold text-center my-4' >{product.title}</h2>
                    <p className='ms:text-sm md:text-sm lg:text-base xl:text-xl my-2' >{product.category}</p>
                    <p className='ms:text-sm md:text-sm lg:text-base xl:text-xl font-bold' >Цена: ${product.price}</p>
                </Link>
            ))}
        </div>
    );
};
