import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 m-2 transition-all cursor-pointer hover:shadow-lg "
    >
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border hover:shadow-lg rounded-xl h-80">
        <img
          className="w-full h-full object-cover object-left-top shadow-lg transition-all duration-500 hover:scale-110"
          src={product.imageUrl}
          alt="card-image"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-col justify-center items-center ">
          <p className="block font-sans text-lg antialiased font-bold leading-relaxed text-blue-gray-900">
            {product.brand}
          </p>
          <p className="block font-sans text-sm antialiased font-semibold leading-relaxed text-blue-gray-900">
            {product.title}
          </p>
        </div>
        <div className="flex pt-2 gap-2 items-center justify-center mb-2">
          <p className="block  font-sans text-base antialiased font-semibold leading-relaxed text-blue-gray-900">
            ₹{product.discountedPrice}
          </p>
          <p className="block font-sans text-base antialiased font-semibold line-through opacity-50 leading-relaxed text-gray-700 ">
            ₹{product.price}
          </p>
          <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-green-400">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
      {/* <div className="p-6 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Add to Cart
          </button>
        </div> */}
    </div>
  );
};

export default ProductCard;
