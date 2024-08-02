import { Product } from "@/models/product";
import { useState } from "react";

export const useProduct = (initProduct: Product[]) => {
  const [products, setProducts] = useState(initProduct);
  const [productName, setProductName] = useState("");

  const onRemoveProduct = (name: string) => {
    setProducts(products.filter((product) => name !== product.name));
  };

  const onAddProduct = (name: string) => {
    setProducts([...products, { name }]);
  };

  return {
    products,
    productName,
    setProductName,
    onRemoveProduct,
    onAddProduct,
  };
};
