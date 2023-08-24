import Cart from "../../../Components/Icons/Cart/Cart";
import styles from "./styles.module.scss";
import Plus from "../../../Components/Icons/Plus/Plus";
import Minus from "../../../Components/Icons/Minus/Minus";
import { useProductContext } from "../../../Contexte/ProductContext";

const AddCart = () => {
  const { setProduct, itemNumber, setItemNumber } = useProductContext();

  const handleMinus = (number: number) => {
    if (number !== 0) {
      setItemNumber(number - 1);
    } else {
      return;
    }
  };

  const handlePlus = (number: number) => {
    setItemNumber(number + 1);
  };

  const handleAddToCart = () => {
    if (itemNumber !== 0) {
      setProduct((prevState) => ({
        ...prevState,
        quantity: prevState.quantity + itemNumber,
      }));
      setItemNumber(0);
    }
  };

  return (
    <div className={styles.cartManagement}>
      <div className={styles.cartItems}>
        <button
          className={
            itemNumber === 0
              ? `${styles.minusBtn} ${styles["minusBtn--disabled"]}`
              : `${styles.minusBtn} `
          }
          onClick={() => handleMinus(itemNumber)}
        >
          <Minus />
        </button>
        <span className={styles.itemNumber}>{itemNumber}</span>
        <button
          onClick={() => handlePlus(itemNumber)}
          className={styles.plusBtn}
        >
          <Plus />
        </button>
      </div>
      <div
        className={
          itemNumber === 0
            ? `${styles.addToCart} ${styles["addToCart--disabled"]}`
            : styles.addToCart
        }
      >
        <button onClick={handleAddToCart} className={styles.addBtn}>
          <Cart />
          <span>
            {itemNumber === 0 ? "Add 1 article minimum" : "Add to cart"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddCart;
