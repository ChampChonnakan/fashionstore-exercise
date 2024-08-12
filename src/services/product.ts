import { Product } from "@/models/product";
import axios from "axios";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get<{ data: Product[] }>(
    "https://fashion-store.fly.dev/products"
  );
  return res.data.data;
};
