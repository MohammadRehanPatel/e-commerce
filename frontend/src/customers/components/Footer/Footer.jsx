import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Company
          </Typography>
          <div className="">
            <Button className="pb-5 " gutterBottom>
              About
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Solutions
          </Typography>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Marketing
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Analytics
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Commerce
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Insights
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 font-bold " variant="h6">
            Support
          </Typography>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Pricing
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Documentation
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Guides
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Legal
          </Typography>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Claim
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Privacy
            </Button>
          </div>
          <div className="">
            <Button className="pb-5 " variant="h6">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-10" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with Love by me
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
