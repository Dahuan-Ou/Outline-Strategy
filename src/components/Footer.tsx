"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

const footerLinks = [
  {
    title: "Services",
    links: [
      "Business Consulting",
      "Process Automation",
      "Digital Health Check",
      "System Integration",
      "CRM Implementation",
      "Web & App Development",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Case Studies", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Support", "Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #1c1917 0%, #0c0a09 100%)",
        color: "#fff",
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #1c1917 0%, #b8965a 100%)",
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
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#fff" }}
                >
                  Raveena
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  maxWidth: 300,
                }}
              >
                Empowering businesses through strategic consulting, intelligent
                automation, and cutting-edge technology solutions.
              </Typography>
            </Box>

            {/* Social icons */}
            <Stack direction="row" spacing={1}>
              {[
                { icon: <LinkedInIcon />, label: "LinkedIn" },
                { icon: <XIcon />, label: "X" },
                { icon: <GitHubIcon />, label: "GitHub" },
              ].map((social) => (
                <IconButton
                  key={social.label}
                  aria-label={social.label}
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    "&:hover": {
                      color: "#d4b07a",
                      borderColor: "rgba(184, 150, 90, 0.3)",
                      background: "rgba(184, 150, 90, 0.08)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Links */}
          {footerLinks.map((section) => (
            <Grid
              key={section.title}
              size={{ xs: 6, sm: 4, md: 2.5 }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: "0.85rem",
                  letterSpacing: "0.03em",
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Typography
                    key={link}
                    variant="body2"
                    component="a"
                    href="#"
                    sx={{
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#d4b07a",
                        paddingLeft: "4px",
                      },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}
          >
            &copy; {new Date().getFullYear()} Raveena. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}
          >
            Designed with purpose. Built with precision.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
