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
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addProduct = (name: string) => {
    const existItem = cartItems.includes(name);
    if (!existItem) {
      setCartItems([...cartItems, name]);
      setCartQuantity((cartQuantity) => cartQuantity + 1);
    }
    console.log(`Cart items are ${cartItems}.`);
    console.log(`the quantity is ${cartQuantity}.`);
    console.log("--------------------------");
  };

  const removeProduct = (name: string) => {};

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        quantity: cartQuantity,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
