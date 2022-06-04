import React from "react";
import Box from "@mui/material/Box";

// Material UI
import { Typography } from "@mui/material";

// Components
import AppBar from "../Template/AppBar";
import FoodsTable from "./FoodsTable";

function FoodsList() {
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
          backgroundColor: "#59B8B4",
          height: "80vh",
          border: "1px solid red",
          margin: "10px",
        }}
      >
        <FoodsTable />
      </Box>
    </Box>
  );
}

export default FoodsList;
