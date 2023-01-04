import Product from "./products/product";
import ProductsList from "./products/products-list";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ProductsList />
      <Product id={2} />
    </div>
  );
};

export default App;
