"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
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
import type { ContactFormData, ContactApiResponse } from "@/lib/types";

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#F8FAFC",
    transition: "all 0.3s ease",
    "& fieldset": {
      borderColor: "#E2E8F0",
      borderWidth: "1.5px",
    },
    "&:hover fieldset": {
      borderColor: "#CBD5E1",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#18181B",
      borderWidth: "1.5px",
    },
    "&:hover": {
      backgroundColor: "#F1F5F9",
    },
    "&.Mui-focused": {
      backgroundColor: "#FFFFFF",
      boxShadow: "0 0 0 3px rgba(24, 24, 27, 0.06)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#94A3B8",
    fontSize: "0.95rem",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#18181B",
  },
  "& .MuiOutlinedInput-input": {
    padding: "14px 16px",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "#94A3B8",
    opacity: 1,
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
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, md: 14 },
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 8, md: 10 }} alignItems="flex-start">
          {/* ── Left - Heading + Contact info ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={6}>
                {/* Heading block */}
                <Box>
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
                      fontSize: { xs: "1rem", md: "1.05rem" },
                      lineHeight: 1.75,
                    }}
                  >
                    If your operations need more structure, or you&apos;re not
                    sure where to start — get in touch. We&apos;re happy to
                    have a straightforward conversation about what might help.
                  </Typography>
                </Box>

                {/* Contact details */}
                <Stack spacing={4}>
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "#94A3B8",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        fontSize: "0.7rem",
                        mb: 0.5,
                        display: "block",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:contact@outlinestrategy.com"
                      variant="body1"
                      sx={{
                        color: "#18181B",
                        fontSize: "1rem",
                        textDecoration: "none",
                        borderBottom: "1px solid transparent",
                        transition: "border-color 0.2s ease",
                        "&:hover": {
                          borderBottomColor: "#18181B",
                        },
                      }}
                    >
                      contact@outlinestrategy.com
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "#94A3B8",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        fontSize: "0.7rem",
                        mb: 0.5,
                        display: "block",
                      }}
                    >
                      Location
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#18181B",
                        fontSize: "1rem",
                      }}
                    >
                      London, United Kingdom
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
          </Grid>

          {/* ── Right - Contact form ── */}
          <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  backgroundColor: "#FAFBFC",
                  borderRadius: "16px",
                  border: "1px solid #E8ECF1",
                  p: { xs: 3, md: 5 },
                }}
              >
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Stack spacing={2.5}>
                    <Grid container spacing={2.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="First name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          error={!!errors.firstName}
                          helperText={errors.firstName}
                          variant="outlined"
                          disabled={isSubmitting}
                          sx={textFieldSx}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Last name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          variant="outlined"
                          disabled={isSubmitting}
                          sx={textFieldSx}
                        />
                      </Grid>
                    </Grid>
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
                      rows={5}
                      variant="outlined"
                      disabled={isSubmitting}
                      sx={{
                        ...textFieldSx,
                        "& .MuiOutlinedInput-input": {
                          padding: "14px 16px",
                        },
                      }}
                    />
                    <Box sx={{ pt: 1 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
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
                          py: 1.8,
                          fontSize: "1rem",
                          borderRadius: "10px",
                          textTransform: "none",
                          letterSpacing: "0.01em",
                          "&:hover": {
                            background: "#27272A",
                            boxShadow:
                              "0 4px 20px rgba(24, 24, 27, 0.2)",
                          },
                          "&:active": {
                            transform: "scale(0.99)",
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Box>
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
