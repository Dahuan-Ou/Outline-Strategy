"use client";

import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "next/link";
import { LogoMark } from "./Logo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERIF = "var(--font-dm-serif), Georgia, serif";

const labelSx = {
  color: "#94A3B8",
  fontWeight: 700,
  letterSpacing: "0.14em",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  mb: 3,
  display: "block",
} as const;

/* underline-grow link used across the footer */
const linkSx = {
  color: "rgba(255,255,255,0.55)",
  textDecoration: "none",
  fontSize: "0.95rem",
  position: "relative",
  width: "fit-content",
  transition: "color 0.25s ease",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -3,
    width: "100%",
    height: "1px",
    background: "#94A3B8",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  "&:hover": { color: "#fff" },
  "&:hover::after": { transform: "scaleX(1)" },
} as const;

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "#18181B",
        color: "#fff",
        pt: { xs: 9, md: 12 },
        pb: 5,
      }}
    >
      {/* Faint oversized brand mark — depth */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: -90, md: -40 },
          bottom: -110,
          color: "#fff",
          opacity: 0.04,
          pointerEvents: "none",
          lineHeight: 0,
        }}
      >
        <LogoMark size={360} />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2.5, color: "#fff" }}>
              <LogoMark size={26} />
              <Typography
                variant="h6"
                sx={{ fontFamily: SERIF, fontWeight: 400, color: "#fff", letterSpacing: "-0.01em" }}
              >
                Outline Strategy
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                maxWidth: 360,
                mb: 3.5,
              }}
            >
              Operational clarity for service businesses. We design the systems
              that give you visibility over delivery, capacity, and
              profitability.
            </Typography>
            <Box
              component={Link}
              href="/contact"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                "& .arrow": { transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" },
                "&:hover .arrow": { transform: "translateX(4px)" },
              }}
            >
              Start a conversation
              <ArrowForwardIcon className="arrow" sx={{ fontSize: 16, color: "#94A3B8" }} />
            </Box>
          </Grid>

          {/* Navigate */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="overline" sx={labelSx}>
              Navigate
            </Typography>
            <Stack spacing={1.75} sx={{ alignItems: "flex-start" }}>
              {navLinks.map((link) => (
                <Box key={link.label} component={Link} href={link.href} sx={linkSx}>
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Connect */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography variant="overline" sx={labelSx}>
              Connect
            </Typography>
            <Stack spacing={2.5} sx={{ alignItems: "flex-start" }}>
              <Box>
                <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", mb: 0.75 }}>
                  Email
                </Typography>
                <Box
                  component="a"
                  href="mailto:contact@outlinestrategy.com"
                  sx={{ ...linkSx, fontSize: "1.05rem", fontFamily: SERIF, color: "rgba(255,255,255,0.85)" }}
                >
                  contact@outlinestrategy.com
                </Box>
              </Box>
              <Box>
                <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", mb: 0.75 }}>
                  Location
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem" }}>
                  London, United Kingdom
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            pt: 3.5,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}
          >
            &copy; {new Date().getFullYear()} Outline Strategy. All rights
            reserved.
          </Typography>

          <Box
            component="button"
            onClick={() =>
              typeof window !== "undefined" &&
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              background: "none",
              border: "none",
              cursor: "pointer",
              p: 0,
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.25s ease",
              "& .up": { transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)" },
              "&:hover": { color: "#fff" },
              "&:hover .up": { transform: "translateY(-3px)" },
            }}
          >
            Back to top
            <ArrowUpwardIcon className="up" sx={{ fontSize: 15 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
