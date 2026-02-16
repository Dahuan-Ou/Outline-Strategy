"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1c1917",
      light: "#44403c",
      dark: "#0c0a09",
    },
    secondary: {
      main: "#b8965a",
      light: "#d4b07a",
      dark: "#96783f",
    },
    background: {
      default: "#fafaf9",
      paper: "#f5f5f4",
    },
    text: {
      primary: "#1c1917",
      secondary: "#78716c",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 50,
          padding: "10px 28px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(28, 25, 23, 0.04)",
        },
      },
    },
  },
});

export default theme;
