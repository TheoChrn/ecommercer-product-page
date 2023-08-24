import { useProductContext } from "../../../Contexte/ProductContext";
import CartIcon from "../../Icons/Cart/Cart";
import styles from "./styles.module.scss";
import avatar from "../../../assets/images/image-avatar.png";

const NavRightSide = () => {
  const { product, displayToolTip, setDisplayToolTip } = useProductContext();
  return (
    <div className={styles.rightSide}>
      <button
        onClick={() => setDisplayToolTip(!displayToolTip)}
        className={styles.cartBtn}
      >
        {product.quantity !== 0 && <span>{product.quantity}</span>}
        <CartIcon />
      </button>
      <figure className={styles.avatar}>
        <img src={avatar} alt="Avatar" />
      </figure>
    </div>
  );
};

export default NavRightSide;
