import ProductList from "@/components/ProductList";
import { useState } from "react";

export default function Home() {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([
    { name: "Loose Cropped Jeans (Damaged)" },
  ]);

  const removeProduct = (name: string) => {
    setProducts(products.filter((product) => product.name !== name));
  };

  return (
    <div className="p-2">
      <form
        onSubmit={(event) => {
          if (!products.some((p) => p.name === productName)) {
            setProducts([...products, { name: productName }]);
          }

          event.preventDefault();
        }}
      >
        <h1 className="text-2xl font-bold">Add a new product</h1>
        <div>
          <label htmlFor="product-name">Product name:</label>
          <input
            className="bg-slate-200"
            id="product-name"
            onChange={(event) => setProductName(event.target.value)}
          />
          <p data-testid="result">{productName}</p>
        </div>
      </form>
      <hr />
      <h1 className="text-2xl font-bold">Products: {products.length} items</h1>
      <ProductList items={products} onRemove={removeProduct} />
    </div>
  );
}
