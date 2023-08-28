import Bin from "../../../Components/Icons/Bin/Bin";
import { useProductContext } from "../../../Contexte/ProductContext";
import styles from "./styles.module.scss";
const CardToolTip = () => {
  const { product, setProduct } = useProductContext();
  const productQuantity = product.quantity;
  const formatPriceWithDiscount = (number: number, discount: number) => {
    const newNumber = number * (1 - discount / 100);
    return newNumber.toFixed(2);
  };

  const formattedPrice = formatPriceWithDiscount(
    product.price,
    product.discount
  );

  const calculTotal = (price: number, quantity: number) => {
    const total = price * quantity;
    return total.toFixed(2);
  };

  const handleDeleteBtn = () => {
    setProduct((prevState) => ({
      ...prevState,
      quantity: 0,
    }));
  };

  return (
    <div className={styles.toolTipContainer}>
      <h3 className={styles.cartTitle}>Cart</h3>
      <div className={styles.productWrapper}>
        <div className={styles.productContent}>
          {productQuantity !== 0 ? (
            <>
              <div className={styles.productDetails}>
                <figure>
                  <img src={product.thumbnails[0]} alt="" />
                </figure>
                <div className={styles.productNameAndPrices}>
                  <h3>{product.name}</h3>
                  <div>
                    <span
                      className={styles.productPrice}
                    >{`${product.currency}${formattedPrice} x ${productQuantity} `}</span>
                    <span className={styles.totalPrice}>{`${
                      product.currency
                    }${calculTotal(
                      parseInt(formattedPrice),
                      productQuantity
                    )}`}</span>
                  </div>
                </div>
                <button onClick={handleDeleteBtn} className={styles.deleteBtn}>
                  <Bin />
                </button>
              </div>
              <div className={styles.productCheckout}>
                <button>Checkout</button>
              </div>
            </>
          ) : (
            <span>Your cart is empty.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardToolTip;
