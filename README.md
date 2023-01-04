# Audiophile client (React, Tailwind CSS, TS)

## DAY 01

### Generating new project.

```
npm init vite@latest client -- --template react-ts
```

### Installing necessary packages for routing, fetching, state management and add them to main.tsx.

```
npm i react-router-dom axios react-query
```

**main.tsx**

```
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
```

### Install Tailwind CSS following instructions from: [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite).

### Add "League Spartan" font to the app.

**index.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Audiophile e-commerce website" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <title>Audiophile</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**tailwind.config.cjs**

```
/** @type {import('tailwindcss').Config} */

let plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: "375px",
      s: "480px",
      sm: "640px",
      md: "768px",
      lg: "896px",
      xl: "1024px",
      "2xl": "1280px",
      "4xl": "1536px",
    },
  },
  plugins: [],
};
```

### Push to github.

```
git add .
```

```
git commit -m "initial configuration"
```

```
git push
```

### Add .env and environment variables. Create apis folder with fetch-api.ts file and necessary routes for fetching from the backend.

**.env**

```
VITE_BACKEND_URL=http://localhost:3000
```

**apis/fetch-api.ts**

```
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const fetchAPI = {
  getAll: function (route: string) {
    return axiosInstance.request({
      method: "GET",
      url: route,
    });
  },
  getById: function (route: string, id: number) {
    return axiosInstance.request({
      method: "GET",
      url: `${route}/${id}`,
    });
  },
  create: function (route: string, payload: any) {
    return axiosInstance.request({
      method: "POST",
      url: route,
      data: payload,
    });
  },
  update: function (route: string, id: number, payload: any) {
    return axiosInstance.request({
      method: "PUT",
      url: `${route}/${id}`,
      data: payload,
    });
  },
};
```

### Create simple base for CRUD.

### Create types folder and product.ts file.

**product.ts**

```
export interface IProduct {
  id?: number;
  title: string;
  description: string;
}
```

### Inside apis folder, create products folder. Create products-services.ts file and add functions for read part.

**products-services.ts**

```
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
```

### READ

### At the src folder add products folder and products-list.tsx and product.tsx files.

**products-list.tsx**

```
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
```

**product.tsx**

```
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
```

### Add PostsList and Post components to the app.tsx file.

**app.tsx**

```
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
```

### Push to github.

```
git add .
```

```
git commit -m "basic read operations"
```

```
git push
```
