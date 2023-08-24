import React, { ReactNode, createContext, useContext, useState } from "react";

interface Product {}

interface ProductContext {}

const CarouselContext = createContext<ProductContext>({});

export const CarouselContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const contextValue = {};

  return (
    <CarouselContext.Provider value={contextValue}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useProductContext = () => useContext(CarouselContext);
