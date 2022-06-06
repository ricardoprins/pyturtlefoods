import * as React from "react";

// Material UI
import { Typography, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import AppBar from "./Template/AppBar";

// Files
import logo from "../images/pyturtlefoods.png";

function Dashboard() {
  return (
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
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="app logo" height="350px" width="350px" />
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Welcome to PyTurtle Foods
        </Typography>
      </Box>
      {/* Content Box */}
      <Box
        sx={{
          backgroundColor: "#fcf5e1",
          height: "1800px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          // margin: "10px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#f4f7e1",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={4} sx={{ height: "300px", border: "1px solid red" }}>
            xs=4
          </Grid>
          <Grid item xs={8} sx={{ height: "300px", border: "1px solid red" }}>
            xs=8
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
