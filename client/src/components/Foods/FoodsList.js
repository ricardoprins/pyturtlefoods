import React from "react";
import Box from "@mui/material/Box";

// Material UI
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Components
import AppBar from "../Template/AppBar";
import FoodsTable from "./FoodsTable";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
});

function FoodsList() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#fcffea",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar />
        <Box
          sx={{
            backgroundColor: "inherit",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Your Foods
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#inherit",
            height: "80vh",
            // border: "1px solid red",
            margin: "10px",
          }}
        >
          <FoodsTable />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default FoodsList;
