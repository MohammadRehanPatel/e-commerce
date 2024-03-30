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

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  console.log("products---- ", products);
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 50,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deletedProduct]);
  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="p-5 ">
      <Card className="mt-2 ">
        <CardHeader title="All Products" />
        <TableContainer
          // sx={{ bgcolor: "#392e4a", color: "white" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.map((item) => (
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
                  <TableCell align="left">
                    <Button
                      onClick={() => handleProductDelete(item.id)}
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

export default ProductsTable;
