"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#workflow" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 1 : 0}
        sx={{
          background: scrolled
            ? "rgba(248, 250, 252, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: scrolled
            ? "1px solid rgba(15, 23, 42, 0.06)"
            : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: scrolled ? 0.5 : 1.5,
              transition: "padding 0.4s ease",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                onClick={() => handleNavClick("#hero")}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #047857 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                  }}
                >
                  R
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: scrolled ? "#0f172a" : "#fff",
                    transition: "color 0.4s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Raveena
                </Box>
              </Box>
            </motion.div>

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: scrolled ? "#475569" : "rgba(255,255,255,0.85)",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      px: 2,
                      py: 1,
                      borderRadius: "50px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: scrolled
                          ? "rgba(15, 23, 42, 0.05)"
                          : "rgba(255, 255, 255, 0.12)",
                        color: scrolled ? "#0f172a" : "#fff",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleNavClick("#contact")}
                  sx={{
                    ml: 1,
                    background:
                      "linear-gradient(135deg, #047857 0%, #065f46 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    px: 3,
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 15px rgba(4, 120, 87, 0.35)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { md: "none" },
                color: scrolled ? "#0f172a" : "#fff",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            PaperProps={{
              sx: {
                width: "100%",
                maxWidth: 360,
                background:
                  "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
                color: "#fff",
              },
            }}
          >
            <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                onClick={() => setMobileOpen(false)}
                sx={{ color: "#fff" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <List sx={{ px: 2 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        borderRadius: 2,
                        py: 1.5,
                        "&:hover": {
                          background: "rgba(4, 120, 87, 0.1)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: "1.1rem",
                          fontWeight: 500,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleNavClick("#contact")}
                  sx={{
                    mt: 2,
                    background:
                      "linear-gradient(135deg, #047857 0%, #065f46 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    py: 1.5,
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </List>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}
