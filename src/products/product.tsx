import { useQuery } from "react-query";
import ProductsServices from "../apis/products/products-services";
import { IProduct } from "../types/product";

type Props = {
  id: number;
};

const Product = ({ id }: Props) => {
  const { isLoading, data, error } = useQuery<IProduct, Error>(
    ["posts", id],
    () => ProductsServices.getProduct(id)
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) return <h1> {error?.message}</h1>;

  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
    </div>
  );
};

export default Product;
