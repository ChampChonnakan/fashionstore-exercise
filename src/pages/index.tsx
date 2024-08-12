import ProductList from "@/components/product/ProductList";
import { useCart } from "@/contexts/cart";
import { Category, Product } from "@/models/product";
import { fetchProducts } from "@/services/product";
// import { getAllTodos, Todo } from "@/services/todo";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useCart();
  const onAddProduct = (productId: string) => {
    cart.addNumberOfItems(1);
    console.log(`add product:${productId} to the cart.`);
  };

  useEffect(() => {
    let isStale = false;
    setIsLoading(true);
    fetchProducts().then((productsResult) => {
      if (!isStale) {
        setIsLoading(false);
        setProducts(productsResult);
      }
    });
    return () => {
      isStale = true;
    };
  }, []);

  // useEffect(() => {
  //   getAllTodos().then((todosResult) => {
  //     setTodos(todosResult);
  //   });
  // }, []);
  return (
    <>
      {/* {todos.map((todo) => (
        <ul>
          <li key={todo.id}>
            {" "}
            - {todo.title} {todo.completed ? "✔️" : ""}
          </li>
        </ul>
      ))} */}
      {isLoading ? (
        "Loading..."
      ) : (
        <ProductList items={products} onAddProduct={onAddProduct} />
      )}
    </>
  );
}
