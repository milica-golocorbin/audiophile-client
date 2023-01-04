import { fetchAPI } from "../fetch-api";
import { IProduct } from "../../types/product";

const getProducts: () => Promise<IProduct[]> = async () => {
  const response = await fetchAPI.getAll("/products");
  return response.data;
};

const getProduct: (id: number) => Promise<IProduct> = async (id: number) => {
  const response = await fetchAPI.getById("/products", id);
  return response.data;
};

const ProductsServices = {
  getProducts,
  getProduct,
};
export default ProductsServices;
