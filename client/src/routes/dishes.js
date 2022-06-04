import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import DishesRec from "../components/Dishes/DishesRec";

export default function DishesRoute() {
  return (
    <React.Fragment>
      <Container maxWidth={false} disableGutters>
        <CssBaseline />
        <DishesRec />
      </Container>
    </React.Fragment>
  );
}
