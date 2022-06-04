import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FoodsList from "../components/Foods/FoodsList";

export default function FoodsRoute() {
  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters>
        <CssBaseline />
        <FoodsList />
      </Container>
    </React.Fragment>
  );
}
