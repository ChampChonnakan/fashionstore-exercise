import { Product } from "@/models/product";
import ProductItem from "./ProductItem";
import { useTheme } from "@/contexts/theme";
import { useCart } from "@/contexts/cart";

type ProductListProps = {
  items: Product[];
};
// dark theme: bg-slate-700
// light theme: bg-slate-100
// 💡 a product contains {name: string, imageUrl: string, price: number}
const ProductList = ({ items }: ProductListProps) => {
  const { addProduct, removeProduct } = useCart();
  const { bgColorClassName } = useTheme();
  return (
    <div
      v-else-if="productList.result.value"
      className={`${bgColorClassName}  mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8`}
    >
      {items.map((item) => (
        <ProductItem
          key={item.id}
          data={item}
          onAddProduct={addProduct}
          onRemoveProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
