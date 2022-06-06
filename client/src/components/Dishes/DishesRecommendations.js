import React from "react";

// Material UI
import { Typography, Box } from "@mui/material";

// Components
import Carousel from "./Carousel";

// Components
import AppBar from "../Template/AppBar";

function DishesRec() {
  const SliderData = [
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
    { title: "Item 4" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#cfe8fc",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar />
      <Box sx={{ backgroundColor: "#69B859", height: "20vh" }}>
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Welcome to ...
        </Typography>
      </Box>
      <Box
        sx={{
          // backgroundColor: "#59B8B4",
          height: "80vh",
          margin: "10px",
        }}
      >
        Recommendations
        <Carousel items={SliderData} />
      </Box>
    </Box>
  );
}

export default DishesRec;
