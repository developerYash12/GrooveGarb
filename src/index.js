import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";
import { WishlistProvider } from "./Context/WishListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>

        <ProductProvider>
          <CartProvider>
            <WishlistProvider>

              <App />
            </WishlistProvider>


          </CartProvider>

        </ProductProvider>
      </AuthProvider>

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
