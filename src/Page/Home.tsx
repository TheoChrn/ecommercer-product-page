import { useEffect, useState } from "react";
import MobileNavigation from "../Components/Navigation/MobileNav/MobileNavigation";
import { useProductContext } from "../Contexte/ProductContext";
import AddCart from "./Components/AddCart/AddCart";
import CarouselWrapper from "./Components/CarouselWrapper/CarouselWrapper";
import styles from "./styles.module.scss";
import DesktopNavigation from "../Components/Navigation/DesktopNav/DesktopNav";
import { CarouselContextProvider } from "../Contexte/CarouselContext";

const Home = () => {
  const { product } = useProductContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 1024;
  const formatPriceWithDiscount = (number: number, discount: number) => {
    const newNumber = number * (1 - discount / 100);
    return newNumber.toFixed(2);
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <CarouselContextProvider>
        {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        <main>
          <CarouselWrapper isMobile={isMobile} />

          <div className={styles.contentWrapper}>
            <div className={styles.productName}>
              <h1>SNEAKER COMPANY</h1>
              <h2>{product.name}</h2>
            </div>
            <div className={styles.productDescription}>
              <p>{product.description}</p>
            </div>
            <div className={styles.productPriceWrapper}>
              <div className={styles.productPriceUpdate}>
                <span>
                  {product.currency}
                  {formatPriceWithDiscount(product.price, product.discount)}
                </span>
                <span>{product.discount}%</span>
              </div>
              <div className={styles.productPriceRaw}>
                <span>
                  {product.currency}
                  {product.price.toFixed(2)}
                </span>
              </div>
            </div>
            <AddCart />
          </div>
        </main>
      </CarouselContextProvider>
    </>
  );
};

export default Home;
