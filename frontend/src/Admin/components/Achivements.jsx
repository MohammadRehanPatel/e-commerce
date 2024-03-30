import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";
const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivements = () => {
  return (
    <Card className="" sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop With Us
        </Typography>
        <Typography variant="body2">Congratulations ✨</Typography>
        <Typography variant="h5" sx={{ my: 3.1 }}>
          430.8k
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TriangleImg />
        <TrophyImg
          //   className="right-36 bottom-16 h-[98px] absolute"
          src="https://t4.ftcdn.net/jpg/05/93/91/27/240_F_593912714_6pEIEP3YlFQkbwknHEYxQzbne5ZN6BlE.jpg"
        />
      </CardContent>
    </Card>
  );
};

export default Achivements;
