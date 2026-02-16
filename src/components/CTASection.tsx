"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Stack,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: "Email Us",
    value: "hello@raveena.com",
    color: "#b8965a",
  },
  {
    icon: <PhoneIcon />,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    color: "#b8965a",
  },
  {
    icon: <LocationOnIcon />,
    label: "Visit Us",
    value: "Melbourne, Australia",
    color: "#b8965a",
  },
];

export default function CTASection() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg, #fafaf9 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left - CTA content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection direction="right">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  color: "#1c1917",
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Ready to Transform
                <br />
                <Box component="span" className="gradient-text">
                  Your Business?
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#78716c",
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 480,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Take the first step toward digital excellence. Our team is
                ready to discuss your challenges and craft a solution that
                drives real results.
              </Typography>

              {/* Contact info */}
              <Stack spacing={2.5}>
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          background: `${info.color}10`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: info.color,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#a8a29e",
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            fontSize: "0.7rem",
                          }}
                        >
                          {info.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#1c1917",
                            fontWeight: 500,
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Stack>
            </AnimatedSection>
          </Grid>

          {/* Right - Contact form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection direction="left">
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: 4,
                  p: { xs: 3, md: 5 },
                  boxShadow: "0 8px 40px rgba(28, 25, 23, 0.08)",
                  border: "1px solid rgba(28, 25, 23, 0.06)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#1c1917",
                    mb: 1,
                  }}
                >
                  Get in Touch
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#78716c", mb: 3 }}
                >
                  Fill out the form and we will get back to you within 24 hours.
                </Typography>

                <Stack spacing={2.5}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "&:hover fieldset": {
                            borderColor: "#b8965a",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#b8965a",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#96783f",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "&:hover fieldset": {
                            borderColor: "#b8965a",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#b8965a",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#96783f",
                        },
                      }}
                    />
                  </Stack>
                  <TextField
                    fullWidth
                    label="Work Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#b8965a",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#b8965a",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#96783f",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Company"
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#b8965a",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#b8965a",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#96783f",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Tell us about your project"
                    multiline
                    rows={4}
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#b8965a",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#b8965a",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#96783f",
                      },
                    }}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background:
                        "linear-gradient(135deg, #b8965a 0%, #96783f 100%)",
                      color: "#fff",
                      fontWeight: 600,
                      py: 1.5,
                      fontSize: "1rem",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #96783f 0%, #7d6435 100%)",
                        transform: "translateY(-1px)",
                        boxShadow:
                          "0 6px 20px rgba(184, 150, 90, 0.3)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
