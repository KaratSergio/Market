import { FC, useEffect } from 'react';
import { fetchProducts } from './fetchProducts';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@shared/hooks/useRedux';

export const ListingList: FC = () => {
    const dispatch = useAppDispatch();
    const { items, loading, error } = useAppSelector((state) => state.products);

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
                    className='xs:w-[305px] h-[500px] w-full flex flex-col gap-y-4 md:items-start items-center p-4 bg-white rounded-md'
                >
                    <img src={product.thumbnail} alt={product.title} className='xs:w-[305px] h-[261px] object-cover rounded-2xl' />
                    <div className='grow flex flex-col'>
                        <h2 className='ms:text-base md:text-base lg:text-xl xl:text-2xl font-bold text-left line-clamp-1' >{product.title}</h2>
                        <p className='mb-4 text-left'> Author's name </p>
                        <p className='text-left'> date of publication | <span className='text-green-500'> rating </span> </p>
                        <p className='line-clamp-2 text-gray-400 my-4'> {product.description}</p>
                        <div className='xs:text-sm md:text-sm lg:text-base xl:text-base font-bold grow flex flex-row items-end' >
                            <div className='w-auto bg-green-200 rounded-full h-7 px-2'>
                                ${product.price}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
