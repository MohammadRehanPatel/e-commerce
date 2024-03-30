import { CssBaseline, Drawer, ListItemText, useTheme } from "@mui/material";
import {
  Email,
  Inbox,
  Inventory,
  People,
  AddBox,
  Assignment,
  AccountBalance,
  AccountCircle,
} from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <Inventory /> },
  { name: "Customers", path: "/admin/customers", icon: <People /> },
  { name: "Orders", path: "/admin/orders", icon: <Assignment /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <AddBox /> },
  //   { name: "", path: "" },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="">
      {/* <Box sx={{ display: `${isLargeScreen}?"flex":"block"` }}> */}
      <div className="flex h-[100vh]  ">
        <CssBaseline />

        <div
          className=" shadow-lg shadow-gray-700 w-[13%]  border border-r-gray-300 h-full fixed top-0  "
          sx={{ height: "100vh", width: 240, flexShrink: 0 }}
          variant="permanent"
        >
          {drawer}
        </div>
        <div className="w-[100%] h-full ml-[12%]">
          <Routes>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
