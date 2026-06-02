"use client";

import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import Link from "next/link";
import { LogoMark } from "./Logo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#18181B",
        color: "#fff",
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2, color: "#fff" }}>
              <LogoMark size={24} />
              <Typography
                variant="h6"
                sx={{ fontFamily: "var(--font-dm-serif), Georgia, serif", fontWeight: 400, color: "#fff" }}
              >
                Outline Strategy
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                maxWidth: 340,
              }}
            >
              Operational clarity for service businesses. We design the systems
              that give you visibility over delivery, capacity, and
              profitability.
            </Typography>
          </Grid>

          {/* Navigate */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 2.5,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Navigate
            </Typography>
            <Stack spacing={1.5}>
              {navLinks.map((link) => (
                <Typography
                  key={link.label}
                  variant="body2"
                  component={Link}
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "rgba(255,255,255,0.8)",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Connect */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 2.5,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Connect
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.9rem",
              }}
            >
              contact@outlinestrategy.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}
          >
            &copy; {new Date().getFullYear()} Outline Strategy. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
