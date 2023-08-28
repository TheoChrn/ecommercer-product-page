import styles from "./styles.module.scss";
import { useCarouselContext } from "../../../Contexte/CarouselContext";
import Carousel from "./Carousel/Carousel";
import LightBox from "./LightBox/LightBox";
import Thumbnails from "./Thumbnails/Thumbnails";

type CarouselProps = {
  isMobile: boolean;
};

const CarouselWrapper = ({ isMobile }: CarouselProps) => {
  const { currentIndex, currentImage, toggleLightBox, setToggleLightBox } =
    useCarouselContext();

  return (
    <>
      <div className={styles.carouselWrapper}>
        {isMobile ? (
          <Carousel />
        ) : (
          <div className={styles.carousel}>
            <figure onClick={() => setToggleLightBox(!toggleLightBox)}>
              <img
                src={currentImage}
                alt={`Image produit ${currentIndex + 1}`}
              />
            </figure>
          </div>
        )}
        {!isMobile && toggleLightBox && <LightBox />}

        {!isMobile && <Thumbnails isMobile={isMobile} />}
      </div>
    </>
  );
};

export default CarouselWrapper;
