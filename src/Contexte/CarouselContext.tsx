import { ReactNode, createContext, useContext, useState } from "react";
import { useProductContext } from "./ProductContext";

interface CarouselContext {
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
  totalSlides: number;
  previousImage: string;
  setPreviousImage: (value: string) => void;
  currentImage: string;
  setCurrentImage: (value: string) => void;
  nextImage: string;
  setNextImage: (value: string) => void;
  toggleLightBox: boolean;
  setToggleLightBox: (value: boolean) => void;
  leaveAnimation: string;
  setLeaveAnimation: (value: string) => void;
  enterAnimation: string;
  setEnterAnimation: (value: string) => void;
}

const CarouselContext = createContext<CarouselContext>({
  currentIndex: 0,
  setCurrentIndex: () => {},
  totalSlides: 4,
  previousImage: "",
  setPreviousImage: () => {},
  currentImage: "",
  setCurrentImage: () => {},
  nextImage: "",
  setNextImage: () => {},
  toggleLightBox: false,
  setToggleLightBox: () => {},
  leaveAnimation: "",
  setLeaveAnimation: () => {},
  enterAnimation: "",
  setEnterAnimation: () => {},
});

export const CarouselContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { product } = useProductContext();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = product.pictures.length;
  const [currentImage, setCurrentImage] = useState(
    product.pictures[currentIndex]
  );
  const [previousImage, setPreviousImage] = useState(
    product.pictures[currentIndex === 0 ? totalSlides - 1 : currentIndex - 1]
  );
  const [nextImage, setNextImage] = useState(
    product.pictures[currentIndex === totalSlides - 1 ? 0 : currentIndex + 1]
  );
  const [toggleLightBox, setToggleLightBox] = useState(false);
  const [leaveAnimation, setLeaveAnimation] = useState("");
  const [enterAnimation, setEnterAnimation] = useState("");

  const contextValue = {
    currentIndex,
    setCurrentIndex,
    totalSlides,
    previousImage,
    setPreviousImage,
    currentImage,
    setCurrentImage,
    nextImage,
    setNextImage,
    toggleLightBox,
    setToggleLightBox,
    enterAnimation,
    setEnterAnimation,
    leaveAnimation,
    setLeaveAnimation,
  };

  return (
    <CarouselContext.Provider value={contextValue}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarouselContext = () => useContext(CarouselContext);
