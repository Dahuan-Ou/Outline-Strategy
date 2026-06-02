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
import { motion, AnimatePresence, useScroll } from "framer-motion";
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
  const { scrollYProgress } = useScroll();

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
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(248, 249, 250, 0.96)"
            : "rgba(248, 249, 250, 0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: scrolled
            ? "0 8px 30px -14px rgba(24, 24, 27, 0.18)"
            : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
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
                  gap: 1.25,
                  textDecoration: "none",
                  "&:hover .logo-mark-inner": {
                    transform: "translate(-2px, -2px)",
                  },
                }}
              >
                {/* Brand mark */}
                <Box
                  sx={{
                    position: "relative",
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      border: "1.5px solid #18181B",
                      borderRadius: "5px",
                    }}
                  />
                  <Box
                    className="logo-mark-inner"
                    sx={{
                      position: "absolute",
                      right: 4,
                      bottom: 4,
                      width: 9,
                      height: 9,
                      background: "#18181B",
                      borderRadius: "2px",
                      transition:
                        "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.3rem",
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontWeight: 400,
                    color: "#18181B",
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
                gap: 0.5,
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
                      disableRipple
                      sx={{
                        color: isActive ? "#18181B" : "#52525B",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: "0.8rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        px: 1.75,
                        py: 1,
                        borderRadius: 0,
                        minWidth: 0,
                        position: "relative",
                        transition: "color 0.3s ease",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: 14,
                          right: 14,
                          bottom: 6,
                          height: "1.5px",
                          background: "#94A3B8",
                          transform: "scaleX(0)",
                          transformOrigin: "center",
                          transition:
                            "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        },
                        "&:hover": {
                          background: "transparent",
                          color: "#18181B",
                        },
                        "&:hover::after": {
                          transform: isActive ? "scaleX(0)" : "scaleX(1)",
                        },
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="navUnderline"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                          style={{
                            position: "absolute",
                            left: 14,
                            right: 14,
                            bottom: 6,
                            height: "2px",
                            borderRadius: "2px",
                            background: "#18181B",
                          }}
                        />
                      )}
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

        {/* Scroll progress bar (also serves as the nav's bottom edge) */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "rgba(24, 24, 27, 0.08)",
          }}
        >
          <motion.div
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "left",
              width: "100%",
              height: "100%",
              background: "#18181B",
            }}
          />
        </Box>
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
