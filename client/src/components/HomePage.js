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
          // backgroundColor: "inherit",
          height: "auto",
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
            backgroundColor: "inherit",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={4}
            sx={{
              height: "80%",
            }}
          ></Grid>
          <Grid
            item
            xs={8}
            sx={{
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">
              You will no longer have to worry about managing your foods anymore
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "inherit",
            height: "400px",
          }}
        >
          <Grid
            item
            xs={8}
            sx={{
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">
              We also give recommendations of dishes you can make based on the
              foods you have
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              height: "80%",
            }}
          ></Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
