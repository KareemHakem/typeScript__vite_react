import { useContext } from 'react';
import ProductContext from '../context/productsProvider';
import { UseProductsContextType } from '../context/productsProvider';

const useProducts = (): UseProductsContextType => {
  return useContext(ProductContext);
};

export default useProducts;
