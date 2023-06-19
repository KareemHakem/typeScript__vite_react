import { useState } from 'react';

import Cart from '../components/Cart';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Navigation = () => {
  const [viewCart, setViewCart] = useState<boolean>(false);
  const pageContext = viewCart ? <Cart /> : <Products />;

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContext}
      <Footer viewCart={viewCart} />
    </>
  );
};

export default Navigation;
