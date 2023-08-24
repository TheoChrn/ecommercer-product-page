import ChevronNext from "../../../../Components/Icons/Chevron/ChevronNext";
import SliderWrapper from "../SliderWrapper/SliderWrapper";
import styles from "./styles.module.scss";

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide}>
        <ChevronNext rotate={"180"} />
      </button>
      <button onClick={nextSlide}>
        <ChevronNext />
      </button>
      <div className={styles.sliderWrapper}>
        <figure
          className={
            leaveAnimation === "leaveRight" ? styles[enterAnimation] : ""
          }
        >
          <img
            src={prevImage}
            alt={`Image produit ${
              currentIndex === 0 ? totalSlides : currentIndex
            }`}
          />
        </figure>
        <figure className={styles[leaveAnimation]}>
          <img src={currentImage} alt={`Image produit ${currentIndex + 1}`} />
        </figure>
        <figure
          className={
            leaveAnimation === "leaveLeft" ? styles[enterAnimation] : ""
          }
        >
          <img
            src={nextImage}
            alt={`Image produit ${
              currentIndex === totalSlides - 1 ? 1 : currentIndex + 2
            }`}
          />
        </figure>
      </div>
    </div>
  );
};

export default Carousel;
