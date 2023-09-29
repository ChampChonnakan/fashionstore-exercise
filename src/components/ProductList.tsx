import { Product } from "@/models/product";

type ProductListProps = {
  items: Product[];
};

const ProductList = ({ items }: ProductListProps) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li key={item.name}>
          {item.name} <button onClick={() => {}}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
