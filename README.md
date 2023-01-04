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

### Install Tailwind CSS following instructions from: [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

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
