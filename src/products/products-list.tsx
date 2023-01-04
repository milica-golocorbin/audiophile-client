import { useQuery } from "react-query";
import ProductsServices from "../apis/products/products-services";
import { IProduct } from "../types/product";

const ProductsList = () => {
  const { isLoading, data, error } = useQuery<IProduct[], Error>(
    "posts",
    ProductsServices.getProducts
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) return <h1> {error?.message}</h1>;

  return (
    <div>
      {data &&
        data.map((product: IProduct) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ProductsList;
