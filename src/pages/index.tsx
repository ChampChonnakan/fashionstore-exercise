import ProductList from "@/components/ProductList";
import { useProduct } from "./useProduct";
import { useState } from "react";

export default function Home() {
  const {
    products,
    productName,
    setProductName,
    onRemoveProduct,
    onAddProduct,
  } = useProduct([
    { name: "Loose Cropped Jeans (Damaged)" },
    { name: "Smart Skort Solid" },
  ]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAddProduct(productName);
          setProductName("");
        }}
      >
        <h1 className="text-2xl font-bold">Add a new product</h1>
        <div>
          <label htmlFor="product-name">Product name:</label>
          <input
            className="bg-slate-200"
            id="product-name"
            value={productName}
            onChange={(event) => {
              setProductName(event.target.value);
            }}
          />
          <p data-testid="result">{productName}</p>
        </div>
      </form>
      <hr />
      <ProductList items={products} onRemoveProduct={onRemoveProduct} />
    </>
  );
}
