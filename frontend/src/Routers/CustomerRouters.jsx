import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customers/pages/HomePage/HomePage";
import Cart from "../customers/components/Cart/Cart";
import Navbar from "../customers/components/Navigation/Navbar";
import Footer from "../customers/components/Footer/Footer";
import Product from "../customers/components/Product/Product";
import ProductDetails from "../customers/components/ProductDetails/ProductDetails";
import Checkout from "../customers/components/Checkout/Checkout";
import Order from "../customers/components/Order/Order";
import OrderDetails from "../customers/components/Order/OrderDetails";
import AuthModel from "../customers/Auth/AuthModel";
import PaymentSuccess from "../customers/components/Payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />

        {/* <Checkout /> */}
        {/* <Order /> */}
        {/* <OrderDetails /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRouters;
