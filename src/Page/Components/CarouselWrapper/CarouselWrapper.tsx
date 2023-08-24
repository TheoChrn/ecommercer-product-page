import { useEffect, useState } from "react";
import { useProductContext } from "../../../Contexte/ProductContext";
import styles from "./styles.module.scss";
import ChevronNext from "../../../Components/Icons/Chevron/ChevronNext";
import SliderWrapper from "./SliderWrapper/SliderWrapper";

type CarouselProps = {
  isMobile: boolean;
};

const CarouselWrapper = ({ isMobile }: CarouselProps) => {
  const { product } = useProductContext();
  const totalSlides = product.pictures.length;
  const [leaveAnimation, setLeaveAnimation] = useState("");
  const [enterAnimation, setEnterAnimation] = useState("");
  const [disableButtons, setDisableButtons] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState(
    product.pictures[currentIndex]
  );
  const [previousImage, setPreviousImage] = useState(
    product.pictures[currentIndex === 0 ? totalSlides - 1 : currentIndex - 1]
  );
  const [nextImage, setNextImage] = useState(
    product.pictures[currentIndex === totalSlides - 1 ? 0 : currentIndex + 1]
  );
  const nextSlide = () => {
    if (!disableButtons) {
      setDisableButtons(true); // Désactiver les boutons
      setCurrentIndex((currentIndex + 1) % totalSlides);
      setLeaveAnimation("leaveLeft");
      setEnterAnimation("enterLeft");

      setTimeout(() => {
        setDisableButtons(false); // Réactiver les boutons après 300ms
      }, 350);
    }
  };

  const prevSlide = () => {
    if (!disableButtons) {
      setDisableButtons(true); // Désactiver les boutons
      setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
      setLeaveAnimation("leaveRight");
      setEnterAnimation("enterRight");

      setTimeout(() => {
        setDisableButtons(false); // Réactiver les boutons après 300ms
      }, 350);
    }
  };

  const handleThumbNail = (thumbNailIndex: number) => {
    setCurrentIndex(thumbNailIndex);
  };

  useEffect(() => {
    if (isMobile) {
      const timeoutId = setTimeout(() => {
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
        setLeaveAnimation("");
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
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
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {isMobile && (
          <>
            <button onClick={prevSlide}>
              <ChevronNext rotate={"180"} />
            </button>
            <button onClick={nextSlide}>
              <ChevronNext />
            </button>
          </>
        )}
        <SliderWrapper
          prevImage={previousImage}
          currentImage={currentImage}
          nextImage={nextImage}
          currentIndex={currentIndex}
          enterAnimation={enterAnimation}
          leaveAnimation={leaveAnimation}
          totalSlides={totalSlides}
        />
      </div>
      {!isMobile && (
        <div className={styles.thumbnailsWrapper}>
          <ul>
            {product.thumbnails.map((thumbnail, index) => {
              return (
                <li onClick={() => handleThumbNail(index)} key={index}>
                  <figure>
                    <img src={thumbnail} alt={`Image produit ${index + 1}`} />
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CarouselWrapper;
