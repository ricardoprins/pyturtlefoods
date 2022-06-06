import React from "react";

// Material UI
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Components
import HomePage from "./components/HomePage";

// Apply New Font
const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(","),
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Container maxWidth={false} disableGutters>
            <CssBaseline />
            <HomePage />
          </Container>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;
