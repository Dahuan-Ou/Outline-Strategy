"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18181B",
      light: "#27272A",
      dark: "#09090B",
    },
    secondary: {
      main: "#94A3B8",
      light: "#B8C4D4",
      dark: "#64748B",
    },
    background: {
      default: "#F8F9FA",
      paper: "#F1F3F5",
    },
    text: {
      primary: "#18181B",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    h1: {
      fontFamily: "var(--font-dm-serif), Georgia, serif",
      fontWeight: 400,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-dm-serif), Georgia, serif",
      fontWeight: 400,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: "var(--font-dm-serif), Georgia, serif",
      fontWeight: 400,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: "var(--font-dm-serif), Georgia, serif",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "var(--font-dm-serif), Georgia, serif",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "var(--font-dm-serif), Georgia, serif",
      fontWeight: 400,
    },
    body1: {
      letterSpacing: "0.01em",
    },
    body2: {
      letterSpacing: "0.01em",
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
          boxShadow: "0 4px 24px rgba(24, 24, 27, 0.04)",
        },
      },
    },
  },
});

export default theme;
