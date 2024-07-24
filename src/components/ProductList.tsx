import Product from "./Product";

export interface IProduct {
  readonly name: string;
  readonly imageUrl: string;
  readonly price: number;
}

const Products: IProduct[] = [
  {
    name: "Loose Cropped Jeans (Damaged)",
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448429/item/goods_66_448429.jpg?width=300",
    price: 42.57,
  },
  {
    name: "Smart Skort Solid",
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455844/item/goods_09_455844.jpg?width=300",
    price: 140.37,
  },
  {
    name: "Smart Skort Solid",
    imageUrl:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455844/item/goods_09_455844.jpg?width=300",
    price: 140.37,
  },
];

const ProductList = () => {
  return (
    <div
      v-else-if="productList.result.value"
      className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      {Products.map((product) => (
        <Product
          key={product.name}
          product={product}
          onClick={() => window.alert("Add to cart: " + product.name)}
        />
      ))}
    </div>
  );
};

export default ProductList;
