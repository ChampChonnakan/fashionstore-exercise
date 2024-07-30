import { Product } from "@/models/product";

type ProductListProps = {
  items: Product[];
  onRemove?: (name: string) => void;
};

const ProductList = ({ items, onRemove }: ProductListProps) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item) => (
        <li key={item.name}>
          {item.name}{" "}
          <button onClick={() => onRemove!(item.name)}>
            <span className="text-red-500">x</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
