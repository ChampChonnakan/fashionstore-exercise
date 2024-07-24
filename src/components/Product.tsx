import Image from "next/image";
import { IProduct } from "./ProductList";

type Props = {
  product: IProduct;
  onClick: () => void;
};

const Product = ({ product, onClick }: Props) => {
  return (
    <div className="group relative" data-testid="product-item" role="listitem">
      <div className="pw-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <Image
          data-testid="product-item--image"
          src={product.imageUrl}
          width={300}
          height={300}
          alt={product.name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span data-testid="product-item--name" aria-hidden="true">
              {product.name}
            </span>
          </h3>
        </div>
        <p
          data-testid="product-item--price"
          className="text-sm font-medium text-gray-900"
        >
          ${product.price}
        </p>
      </div>
      <div className="flex space-x-2 justify-center mt-2">
        <button
          data-testid="product-item--add-to-cart"
          className="add-to-cart-button px-6 py-1 transition ease-in duration-200 w-full rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          onClick={onClick}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
