import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1b4b66",
    },
    common: {
      black: "#000000",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white",
        },
      },
    },
  },
  typography: {
    fontFamily: `"Inter", "Nunito Sans", sans-serif`,
    fontSize: 14,
  },
  text: {
    primary: "black",
  },
});

export const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};
