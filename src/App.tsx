import Navigation from './navigation';
import { CartProvider } from './context/cartProvider';
import { ProductsProvider } from './context/productsProvider';

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Navigation />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
