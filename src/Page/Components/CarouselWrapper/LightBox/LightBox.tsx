import Close from "../../../../Components/Icons/Close/Close";
import { useCarouselContext } from "../../../../Contexte/CarouselContext";
import Carousel from "../Carousel/Carousel";

import Thumbnails from "../Thumbnails/Thumbnails";
import styles from "./styles.module.scss";

const LightBox = () => {
  const { toggleLightBox, setToggleLightBox } = useCarouselContext();

  return (
    <div className={styles.lightBoxBackground}>
      <div className={styles.lightBoxContainer}>
        <button
          className={styles.closeBtn}
          onClick={() => setToggleLightBox(!toggleLightBox)}
        >
          <Close />
        </button>
        <Carousel />
        <Thumbnails />
      </div>
    </div>
  );
};

export default LightBox;
