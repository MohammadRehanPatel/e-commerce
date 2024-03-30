// import { Grid } from "@mui/material";
import React from "react";
import Achivements from "./Achivements";
import MonthlyOverview from "./MonthlyOverview";
import OrdersTableView from "../view/OrderTableView";
import ProductsTableView from "../view/ProductTableView";

import { Grid, Typography } from "@mui/material";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid className="" item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-700">
            <Achivements />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-700">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-700">
            <OrdersTableView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-700">
            <ProductsTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
