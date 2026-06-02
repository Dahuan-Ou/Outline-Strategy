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
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showLight = true;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 1 : 0}
        sx={{
          background: showLight
            ? "rgba(248, 249, 250, 0.92)"
            : "transparent",
          backdropFilter: showLight ? "blur(20px)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: showLight
            ? "1px solid rgba(24, 24, 27, 0.06)"
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
                component={Link}
                href="/"
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textDecoration: "none",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.3rem",
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontWeight: 400,
                    color: showLight ? "#18181B" : "#fff",
                    transition: "color 0.4s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Outline Strategy
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
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Button
                      component={Link}
                      href={item.href}
                      sx={{
                        color:
                          showLight
                            ? isActive
                              ? "#18181B"
                              : "#4B5563"
                            : isActive
                              ? "#fff"
                              : "rgba(255,255,255,0.85)",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: "0.82rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        px: 2,
                        py: 1,
                        borderRadius: "50px",
                        transition: "all 0.3s ease",
                        position: "relative",
                        "&::after": isActive
                          ? {
                              content: '""',
                              position: "absolute",
                              bottom: 4,
                              left: "30%",
                              right: "30%",
                              height: 2,
                              borderRadius: 1,
                              background:
                                "linear-gradient(90deg, #94A3B8, #B8C4D4)",
                            }
                          : {},
                        "&:hover": {
                          background: showLight
                            ? "rgba(24, 24, 27, 0.05)"
                            : "rgba(255, 255, 255, 0.12)",
                          color: showLight ? "#18181B" : "#fff",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                );
              })}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { md: "none" },
                color: showLight ? "#18181B" : "#fff",
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
                  "linear-gradient(180deg, #18181B 0%, #09090B 100%)",
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
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ListItem disablePadding sx={{ mb: 1 }}>
                      <ListItemButton
                        component={Link}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        sx={{
                          borderRadius: 2,
                          py: 1.5,
                          background: isActive
                            ? "rgba(148, 163, 184, 0.15)"
                            : "transparent",
                          borderLeft: isActive
                            ? "3px solid #94A3B8"
                            : "3px solid transparent",
                          "&:hover": {
                            background: "rgba(148, 163, 184, 0.1)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: "1.1rem",
                            fontWeight: isActive ? 700 : 500,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                );
              })}
            </List>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}
