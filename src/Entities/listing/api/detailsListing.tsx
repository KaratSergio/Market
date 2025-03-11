import { useLocation } from "react-router-dom";
import { Product } from '../model/types'


export const useProductFromLocation = () => {
    const location = useLocation();

    return location.state?.product as Product | undefined;
};