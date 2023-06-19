import React from 'react';
import Nav from '../Nav';
import useCart from '../../hooks/useCart';

type propsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: propsType) => {
  const { totalItems, totalPrice } = useCart();
  const content = (
    <header className="header">
      <div className="header_title-bar">
        <h1>Acme co.</h1>
        <div className="header_price-box">
          <p> Total Item: {totalItems}</p>
          <p> Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
  return content;
};

export default Header;
