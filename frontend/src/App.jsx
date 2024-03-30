import { useState } from "react";
import "./App.css";
import Navbar from "./customers/components/Navigation/Navbar";
import HomePage from "./customers/pages/HomePage/HomePage";
import Footer from "./customers/components/Footer/Footer";
import Product from "./customers/components/Product/Product";
import ProductDetails from "./customers/components/ProductDetails/ProductDetails";
import Cart from "./customers/components/Cart/Cart";
import Checkout from "./customers/components/Checkout/Checkout";
import Order from "./customers/components/Order/Order";
import OrderDetails from "./customers/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/*" element={<CustomerRouters />} />
          <Route path="/admin/*" element={<AdminRouters />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
