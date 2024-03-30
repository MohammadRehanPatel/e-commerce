import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  cancelOrder,
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.confirmed,
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.deletedOrder,
  ]);

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    console.log("Confirmed id ", orderId);
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  // const handleCanceledOrder=(orderId)=>{
  //   dispatch(cancelOrder(orderId))
  // }
  console.log("admin order ", adminOrder);

  return (
    <div className="p-8">
      <Card className="mt-2 ">
        <CardHeader title="All Orders" />
        <TableContainer
          // sx={{ bgcolor: "#392e4a", color: "white" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="">
                    <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem?.product?.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {/* {item.title} */}
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem?.product?.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={` text-white px-5 py-2 rounded-full ${
                        item.orderStatus == "CONFIRMED"
                          ? "bg-[#198785]"
                          : item.orderStatus == "SHIPPED"
                          ? "bg-blue-700"
                          : item.orderStatus == "PLACED"
                          ? "bg-[#02b290]"
                          : item.orderStatus == "PENDING"
                          ? "bg-gray-600"
                          : "bg-[#49b1f6]"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>
                        Confirmed Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item.id)}>
                        Shiped Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item.id)}>
                        Delivered Order
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteOrder(item.id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
