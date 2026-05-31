"use client";

import { useState, type FormEvent, type ChangeEvent, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Stack,
  Grid,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import type { ContactFormData, ContactApiResponse } from "@/lib/types";

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    transition: "all 0.3s ease",
    "&:hover fieldset": {
      borderColor: "#94A3B8",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#94A3B8",
    },
    "&:hover": {
      boxShadow: "0 2px 8px rgba(148, 163, 184, 0.08)",
    },
    "&.Mui-focused": {
      boxShadow: "0 2px 12px rgba(148, 163, 184, 0.12)",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#64748B",
  },
};

export default function CTASection() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({
    open: false,
    severity: "success",
    message: "",
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your situation";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: ContactApiResponse = await response.json();

      if (result.success) {
        setSnackbar({
          open: true,
          severity: "success",
          message: result.message,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
        setErrors({});
      } else {
        setSnackbar({
          open: true,
          severity: "error",
          message: result.message,
        });
      }
    } catch {
      setSnackbar({
        open: true,
        severity: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, md: 14 },
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ── */}
        <AnimatedSection>
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "#94A3B8",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
                mb: 2,
                display: "block",
              }}
            >
              Contact
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "#18181B",
                mb: 2,
              }}
            >
              Let&apos;s Talk
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6B7280",
                maxWidth: 560,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              If your operations need more structure, or you&apos;re not sure
              where to start — get in touch. We&apos;re happy to have a
              straightforward conversation about what might help.
            </Typography>
          </Box>
        </AnimatedSection>

        <Grid container spacing={{ xs: 6, md: 10 }}>
          {/* ── Left - Contact info ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#18181B",
                      fontSize: "1rem",
                      mb: 1,
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#6B7280",
                      fontSize: "1rem",
                    }}
                  >
                    hello@outlinestrategy.com
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#18181B",
                      fontSize: "1rem",
                      mb: 1,
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#6B7280",
                      fontSize: "1rem",
                    }}
                  >
                    London, United Kingdom
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          {/* ── Right - Contact form ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Your name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    variant="outlined"
                    size="small"
                    disabled={isSubmitting}
                    sx={textFieldSx}
                  />
                  <TextField
                    fullWidth
                    label="Email address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                    size="small"
                    disabled={isSubmitting}
                    sx={textFieldSx}
                  />
                  <TextField
                    fullWidth
                    label="Company (optional)"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    disabled={isSubmitting}
                    sx={textFieldSx}
                  />
                  <TextField
                    fullWidth
                    label="Tell us about your situation"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    multiline
                    rows={4}
                    variant="outlined"
                    size="small"
                    disabled={isSubmitting}
                    sx={textFieldSx}
                  />
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : null
                      }
                      sx={{
                        background: "#18181B",
                        color: "#fff",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        fontSize: "0.95rem",
                        borderRadius: "6px",
                        "&:hover": {
                          background: "#27272A",
                          boxShadow:
                            "0 4px 20px rgba(24, 24, 27, 0.15)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Feedback Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
