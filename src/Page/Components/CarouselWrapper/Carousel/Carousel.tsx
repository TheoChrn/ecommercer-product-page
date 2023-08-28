import { useEffect, useState } from "react";
import ChevronNext from "../../../../Components/Icons/Chevron/ChevronNext";
import { useProductContext } from "../../../../Contexte/ProductContext";
import SliderWrapper from "../SliderWrapper/SliderWrapper";
import styles from "./styles.module.scss";
import { useCarouselContext } from "../../../../Contexte/CarouselContext";

const Carousel = () => {
  //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //const isMobile = windowWidth < 1024;
  const { product } = useProductContext();
  const {
    setCurrentIndex,
    currentIndex,
    totalSlides,
    previousImage,
    setPreviousImage,
    currentImage,
    setCurrentImage,
    nextImage,
    setNextImage,
    leaveAnimation,
    setLeaveAnimation,
    enterAnimation,
    setEnterAnimation,
  } = useCarouselContext();

  const [disableButtons, setDisableButtons] = useState(false);

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

  /*useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);*/

  const setImages = () => {
    setPreviousImage(
      product.pictures[currentIndex === 0 ? totalSlides - 1 : currentIndex - 1]
    );
    setCurrentImage(product.pictures[currentIndex]);
    setNextImage(
      product.pictures[currentIndex === totalSlides - 1 ? 0 : currentIndex + 1]
    );
  };

  useEffect(() => {
    if (enterAnimation !== "" || leaveAnimation !== "") {
      const timeoutId = setTimeout(() => {
        setImages();
        setLeaveAnimation("");
        setEnterAnimation("");
        console.log("finTimeOut");
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setImages();
    }
  }, [currentIndex]);

  return (
    <div className={styles.carousel}>
      <button className={styles.prevBtn} onClick={prevSlide}>
        <ChevronNext rotate={"180"} />
      </button>
      <button className={styles.nextBtn} onClick={nextSlide}>
        <ChevronNext />
      </button>
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
  );
};

export default Carousel;
