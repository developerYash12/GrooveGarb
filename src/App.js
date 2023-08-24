import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./component/Header";
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/Cart"
import { WishList } from "./pages/WishList"
import Login from "./pages/Login";
import Mockman from "mockman-js";
import Signup from "./pages/Signup";
import { RequiresAuth } from "./component/RequiresAuth";
import { Toaster } from 'react-hot-toast'
import { Checkout } from "./pages/Checkout";
import { Address } from "./pages/address/Address";





function App() {
  return (
    <div className="App">
      <Header />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/cart" element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        } />
        <Route path="/wishlist" element={
          <RequiresAuth>

            <WishList />
          </RequiresAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/address" element={<Address />} />

      </Routes>


    </div>
  );
}

export default App;
