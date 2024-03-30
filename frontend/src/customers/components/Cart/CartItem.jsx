import { Button, IconButton } from "@mui/material";
import {
  RemoveCircleOutline,
  AddCircleOutlineOutlined,
} from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    dispatch(updateCartItem(data));
  };
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };

  return (
    <div className="p-4 shadow-lg border rounded-lg hover:shadow-violet-200 m-4">
      <div className="flex items-center">
        <div className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[9rem] shadow-lg hover:shadow-violet-200">
          <img
            className="w-full h-full object-cover object-top rounded-lg "
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70 ">Size {item.size} , White</p>
          <p className="opacity-70 mt-2 ">Seller: {item.product.brand}</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹{item.price}</p>
            <p className="opacity-50 line-through"> ₹{item.discountedPrice}</p>
            <p className="text-green-600 font-semibold">
              {item.product.discountPercent}%Off
            </p>
          </div>
        </div>
      </div>
      <div className=" lg:flex items-center  lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
            sx={{ color: "#4566df" }}
            aria-label="delete"
          >
            <RemoveCircleOutline />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            sx={{ color: "#4566df" }}
          >
            <AddCircleOutlineOutlined />
          </IconButton>
        </div>
        <div className="">
          <Button onClick={handleRemoveCartItem} sx={{ color: "red" }}>
            remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
