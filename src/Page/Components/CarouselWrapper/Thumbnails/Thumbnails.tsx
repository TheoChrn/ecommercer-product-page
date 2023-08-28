import { useEffect } from "react";
import { useCarouselContext } from "../../../../Contexte/CarouselContext";
import { useProductContext } from "../../../../Contexte/ProductContext";
import styles from "./styles.module.scss";

type ThumbnailsProps = {
  isMobile?: boolean;
};

const Thumbnails = ({ isMobile }: ThumbnailsProps) => {
  const { product } = useProductContext();

  const {
    setCurrentIndex,
    setPreviousImage,
    setCurrentImage,
    setNextImage,
    toggleLightBox,
    currentIndex,
    totalSlides,
  } = useCarouselContext();

  const handleThumbNail = (thumbNailIndex: number) => {
    setCurrentIndex(thumbNailIndex);
  };

  useEffect(() => {
    if (!isMobile && toggleLightBox === false) {
      setPreviousImage(
        product.pictures[
          currentIndex === 0 ? totalSlides - 1 : currentIndex - 1
        ]
      );
      setCurrentImage(product.pictures[currentIndex]);
      setNextImage(
        product.pictures[
          currentIndex === totalSlides - 1 ? 0 : currentIndex + 1
        ]
      );
    }
  }, [currentIndex]);

  return (
    <div className={styles.thumbnailsWrapper}>
      <ul>
        {product.thumbnails.map((thumbnail, index) => {
          return (
            <li
              onClick={() => handleThumbNail(index)}
              key={index}
              data-index={index}
              className={currentIndex === index ? styles.selected : ""}
            >
              <figure>
                <img src={thumbnail} alt={`Image produit ${index + 1}`} />
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Thumbnails;
