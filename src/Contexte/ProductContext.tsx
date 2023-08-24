import React, { ReactNode, createContext, useContext, useState } from "react";
import imageProduct1 from "../assets/images/image-product-1.jpg";
import imageProduct2 from "../assets/images/image-product-2.jpg";
import imageProduct3 from "../assets/images/image-product-3.jpg";
import imageProduct4 from "../assets/images/image-product-4.jpg";
import imageProduct1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";

interface Product {
  name: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  pictures: string[];
  thumbnails: string[];
  currency: string;
}

interface ProductContext {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
  itemNumber: number;
  setItemNumber: (value: number) => void;
  displayToolTip: boolean;
  setDisplayToolTip: (value: boolean) => void;
}

const ProductContext = createContext<ProductContext>({
  product: {
    name: "",
    description: "",
    price: 0,
    discount: 0,
    quantity: 0,
    pictures: [],
    thumbnails: [],
    currency: "$",
  },
  setProduct: () => {},
  itemNumber: 0,
  setItemNumber: () => {},
  displayToolTip: false,
  setDisplayToolTip: () => {},
});

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [displayToolTip, setDisplayToolTip] = useState(false);
  const [product, setProduct] = useState<Product>({
    name: "Fall Limited Edition Sneakers",
    description:
      "Thes low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
    quantity: 0,
    pictures: [imageProduct1, imageProduct2, imageProduct3, imageProduct4],
    thumbnails: [
      imageProduct1Thumbnail,
      imageProduct2Thumbnail,
      imageProduct3Thumbnail,
      imageProduct4Thumbnail,
    ],
    currency: "$",
  });
  const [itemNumber, setItemNumber] = useState<number>(0);

  const contextValue = {
    product,
    setProduct,
    itemNumber,
    setItemNumber,
    displayToolTip,
    setDisplayToolTip,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
