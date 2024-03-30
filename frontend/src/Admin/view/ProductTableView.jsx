// import {
//   Paper,
//   Table,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableBody,
//   Avatar,
//   Button,
//   Card,
//   CardHeader,
// } from "@mui/material";
// import React, { useEffect } from "react";
// import { deleteProduct, findProducts } from "../../State/Product/Action";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

// const ProductsTableView = () => {
//   const dispatch = useDispatch();
//   const { products } = useSelector((store) => store);

//   useEffect(() => {
//     const data = {
//       category: "mens_kurta",
//       colors: [],
//       sizes: [],
//       minPrice: 0,
//       maxPrice: 100000,
//       minDiscount: 0,
//       sort: "price_low",
//       pageNumber: 0,
//       pageSize: 10,
//       stock: "",
//     };
//     dispatch(findProducts(data));
//   }, [products.deletedProduct]);

//   return (
//     <div className="p-2">
//       <Card className="mt-2 ">
//         <CardHeader title="Recent Products" />
//         <TableContainer
//           // sx={{ bgcolor: "#392e4a", color: "white" }}
//           component={Paper}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align="left">Image</TableCell>
//                 <TableCell align="left">Title</TableCell>
//                 <TableCell align="left">Category</TableCell>
//                 <TableCell align="left">Price</TableCell>
//                 <TableCell align="left">Quantity</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products?.products?.content?.slice(0, 5).map((item) => (
//                 <TableRow
//                   key={item.title}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell align="left">
//                     <Avatar src={item.imageUrl}></Avatar>
//                   </TableCell>
//                   <TableCell align="left" scope="row">
//                     {item.title}
//                   </TableCell>
//                   <TableCell align="left">{item.category.name}</TableCell>
//                   <TableCell align="left">{item.price}</TableCell>
//                   <TableCell align="left">{item.quantity}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>
//     </div>
//   );
// };

// export default ProductsTableView;

import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Avatar,
  Button,
  Card,
  CardHeader,
} from "@mui/material";
import React, { useEffect } from "react";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductsTableView = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="p-2">
        <Card className="mt-2 ">
          <CardHeader title="Recent Products" />
          <TableContainer
            // sx={{ bgcolor: "#392e4a", color: "white" }}
            component={Paper}
          >
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.products?.content?.slice(0, 8).map((item) => (
                  <TableRow
                    key={item.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">
                      <Avatar src={item.imageUrl}></Avatar>
                    </TableCell>
                    <TableCell align="left" scope="row">
                      {item.title}
                    </TableCell>
                    <TableCell align="left">{item.category.name}</TableCell>
                    <TableCell align="left">{item.price}</TableCell>
                    <TableCell align="left">{item.quantity}</TableCell>
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

export default ProductsTableView;
