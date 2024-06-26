import styles from "./styles.module.scss";
import logo from "../../../assets/images/logo.svg";
import CardToolTip from "../../../Page/Components/CartToolTip/CardToolTip";
import { useProductContext } from "../../../Contexte/ProductContext";
import NavRightSide from "../NavRightSide/NavRightSide";
import { useCarouselContext } from "../../../Contexte/CarouselContext";

const DesktopNavigation = () => {
  const { displayToolTip } = useProductContext();
  const { toggleLightBox } = useCarouselContext();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <figure className={styles.logo}>
            <img src={logo} alt="Logo" />
          </figure>
          <nav className={styles.navigation}>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <NavRightSide />
        {displayToolTip === true && toggleLightBox === false ? (
          <CardToolTip />
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default DesktopNavigation;
