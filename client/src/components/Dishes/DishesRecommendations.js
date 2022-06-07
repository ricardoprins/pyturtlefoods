import React from "react";

// Material UI
import { Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Components
import Carousel from "./Carousel";

// Components
import AppBar from "../Template/AppBar";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
});

function DishesRec() {
  const SliderData = [
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
    { title: "Item 4" },
  ];

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
            Dishes Recommendations
          </Typography>
        </Box>
        <Box
          sx={{
            // backgroundColor: "#59B8B4",
            height: "80vh",
            margin: "10px",
          }}
        >
          <Carousel items={SliderData} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DishesRec;
