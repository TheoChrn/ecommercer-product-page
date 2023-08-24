import MenuIcon from "../../Icons/Menu/Menu";
import styles from "./styles.module.scss";
import logo from "../../../assets/images/logo.svg";
import Close from "../../Icons/Close/Close";
import { useState } from "react";
import CardToolTip from "../../../Page/Components/CartToolTip/CardToolTip";
import { useProductContext } from "../../../Contexte/ProductContext";
import NavRightSide from "../NavRightSide/NavRightSide";

const MobileNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean | null>(null);
  const { displayToolTip } = useProductContext();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <button
            onClick={() => setToggleMenu(true)}
            className={styles.menuBtn}
          >
            <MenuIcon />
          </button>
          <figure className={styles.logo}>
            <img src={logo} alt="Logo" />
          </figure>
        </div>
        <NavRightSide />
        <div
          className={
            toggleMenu === null
              ? styles.asideWrapper
              : toggleMenu === false
              ? `${styles.asideWrapper} ${styles["asideWrapper--LeaveAnimation"]}`
              : `${styles.asideWrapper} ${styles["asideWrapper--EnterAnimation"]}`
          }
        >
          <aside className={styles.asideNav}>
            <button
              onClick={() => setToggleMenu(false)}
              className={styles.closeMenuBtn}
            >
              <Close />
            </button>
            <nav className={styles.navigation}>
              <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </aside>
        </div>
        {displayToolTip && <CardToolTip />}
      </header>
    </>
  );
};

export default MobileNavigation;
