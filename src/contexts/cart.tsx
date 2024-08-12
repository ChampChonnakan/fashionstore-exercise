import { Product } from "@/models/product";
import { createContext, useContext, useState } from "react";

export type CartContextType = {
  items: string[];
  quantity: number;
  addProduct: (name: string) => void;
  removeProduct: (productId: string) => void;
};

export const CartContext = createContext<CartContextType>({
  items: [],
  quantity: 0,
  addProduct: () => {},
  removeProduct: () => {},
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const addProduct = (name: string) => {
    setCartQuantity((cartQuantity) => cartQuantity + 1);
    // const itemExist = items.find((item) => item === name);
    // if (!itemExist) {
    //   items = [...items, name];
    //   quantity++;
    // } else {
    //   const newItems = items.filter((item) => item !== name);
    //   items = newItems;
    //   quantity--;
    // }
    // setCartQuantity(quantity);
    // console.log(`add product:${name} to the cart.`);
    // console.log(`the quantity is ${quantity}.`);
    // console.log("--------------------------");
  };

  const removeProduct = (productId: string) => {
    // const newItems = items.filter((item) => item !== productId);
    // items = newItems;
    // quantity--;
  };

  return (
    <CartContext.Provider
      value={{
        items: [],
        quantity: cartQuantity,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
