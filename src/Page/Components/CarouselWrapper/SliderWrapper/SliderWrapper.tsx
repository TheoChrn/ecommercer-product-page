import styles from "./styles.module.scss";

interface SliderWrapperProps {
  prevImage: string;
  currentImage: string;
  nextImage: string;
  currentIndex: number;
  enterAnimation: string;
  leaveAnimation: string;
  totalSlides: number;
}

const SliderWrapper = ({
  prevImage,
  currentImage,
  nextImage,
  currentIndex,
  enterAnimation,
  leaveAnimation,
  totalSlides,
}: SliderWrapperProps) => {
  
  return (
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
        className={leaveAnimation === "leaveLeft" ? styles[enterAnimation] : ""}
      >
        <img
          src={nextImage}
          alt={`Image produit ${
            currentIndex === totalSlides - 1 ? 1 : currentIndex + 2
          }`}
        />
      </figure>
    </div>
  );
};

export default SliderWrapper;
