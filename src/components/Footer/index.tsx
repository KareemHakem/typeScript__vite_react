import useCart from '../../hooks/useCart';

type propsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: propsType) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getUTCFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy {year}</p>
  ) : (
    <>
      Total Items : {totalItems}
      Total Price : {totalPrice}
      shopping Cart &copy {year}
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
};

export default Footer;
