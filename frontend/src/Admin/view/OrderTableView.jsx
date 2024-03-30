// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import {
//   confirmOrder,
//   deleteOrder,
//   deliveredOrder,
//   getOrders,
//   shipOrder,
// } from "../../State/Admin/Order/Action";
// import {
//   Avatar,
//   AvatarGroup,
//   Button,
//   Card,
//   CardHeader,
//   Menu,
//   MenuItem,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";

// const OrdersTableView = () => {
//   const dispatch = useDispatch();
//   const { adminOrder } = useSelector((store) => store);

//   useEffect(() => {
//     dispatch(getOrders());
//   }, [
//     adminOrder.confirmed,
//     adminOrder.shipped,
//     adminOrder.delivered,
//     adminOrder.deletedOrder,
//   ]);

//   return (
//     <div className="p-8">
//       <Card className="mt-2 ">
//         <CardHeader title="Recent Orders" />
//         <TableContainer
//           // sx={{ bgcolor: "#392e4a", color: "white" }}
//           component={Paper}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align="left">Image</TableCell>
//                 <TableCell align="left">Title</TableCell>
//                 <TableCell align="left">Id</TableCell>
//                 <TableCell align="left">Price</TableCell>
//                 <TableCell align="left">Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {adminOrder?.orders?.slice(0, 5).map((item, index) => (
//                 <TableRow
//                   key={item.id}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell align="">
//                     <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
//                       {item.orderItems.map((orderItem) => (
//                         <Avatar src={orderItem?.product?.imageUrl}></Avatar>
//                       ))}
//                     </AvatarGroup>
//                   </TableCell>
//                   <TableCell align="left" scope="row">
//                     {/* {item.title} */}
//                     {item.orderItems.map((orderItem) => (
//                       <p>{orderItem?.product?.title}</p>
//                     ))}
//                   </TableCell>
//                   <TableCell align="left">{item.id}</TableCell>
//                   <TableCell align="left">{item.totalPrice}</TableCell>
//                   <TableCell align="left">
//                     <span
//                       className={` text-white px-5 py-2 rounded-full ${
//                         item.orderStatus == "CONFIRMED"
//                           ? "bg-[#198785]"
//                           : item.orderStatus == "SHIPPED"
//                           ? "bg-blue-700"
//                           : item.orderStatus == "PLACED"
//                           ? "bg-[#02b290]"
//                           : item.orderStatus == "PENDING"
//                           ? "bg-gray-600"
//                           : "bg-[#49b1f6]"
//                       }`}
//                     >
//                       {item.orderStatus}
//                     </span>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>
//     </div>
//   );
// };

// export default OrdersTableView;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
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

const OrdersTableView = () => {
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="pt-8">
        <Card className="mt-24">
          <CardHeader title="Recent Orders" />
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
                </TableRow>
              </TableHead>
              <TableBody>
                {adminOrder?.orders?.slice(0, 5).map((item, index) => (
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </div>
  );
};

export default OrdersTableView;
