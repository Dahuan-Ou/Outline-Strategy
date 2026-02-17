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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AnimatedSection from "./AnimatedSection";
import type { ContactFormData, ContactApiResponse } from "@/lib/types";

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: "Email Us",
    value: "raveena.r.rajput@gmail.com",
    color: "#047857",
  },
  {
    icon: <PhoneIcon />,
    label: "Call Us",
    value: "+64 210 843 4488",
    color: "#047857",
  },
  {
    icon: <LocationOnIcon />,
    label: "Visit Us",
    value: "Auckland, New Zealand",
    color: "#047857",
  },
];

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    transition: "all 0.3s ease",
    "&:hover fieldset": {
      borderColor: "#047857",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#047857",
    },
    "&:hover": {
      boxShadow: "0 2px 8px rgba(4, 120, 87, 0.08)",
    },
    "&.Mui-focused": {
      boxShadow: "0 2px 12px rgba(4, 120, 87, 0.12)",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#065f46",
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
    // Clear field error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project";
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
        // Reset form on success
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
        py: { xs: 10, md: 14 },
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Decorative background elements ── */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle at 0% 0%, rgba(4, 120, 87, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle at 100% 100%, rgba(4, 120, 87, 0.03) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Dot pattern ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(4, 120, 87, 0.03) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* ── Animated accent line ── */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "40%", opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: "30%",
          height: 2,
          borderRadius: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(4, 120, 87, 0.2), transparent)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* ── Left - CTA content ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection direction="right">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.6rem" },
                    color: "#0f172a",
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Ready to Transform
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(135deg, #047857 0%, #34d399 50%, #047857 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Your Business?
                  </Box>
                </Typography>
              </motion.div>

              <Typography
                variant="body1"
                sx={{
                  color: "#64748b",
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 480,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Take the first step toward digital excellence. Our team is ready
                to discuss your challenges and craft a solution that drives real
                results.
              </Typography>

              {/* ── Decorative line ── */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #047857, #34d399)",
                  marginBottom: 32,
                }}
              />

              {/* ── Contact info ── */}
              <Stack spacing={2.5}>
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 1.5,
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(4, 120, 87, 0.04)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          background: `${info.color}10`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: info.color,
                          transition: "all 0.3s ease",
                          "div:hover > &": {
                            background: `linear-gradient(135deg, ${info.color}, #34d399)`,
                            color: "#fff",
                            boxShadow: `0 4px 16px ${info.color}30`,
                          },
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#94a3b8",
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
                            color: "#0f172a",
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

          {/* ── Right - Contact form ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatedSection direction="left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Box
                  sx={{
                    background: "#fff",
                    borderRadius: 4,
                    p: { xs: 3, md: 5 },
                    boxShadow: "0 8px 40px rgba(15, 23, 42, 0.08)",
                    border: "1px solid rgba(15, 23, 42, 0.06)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      boxShadow: "0 16px 60px rgba(4, 120, 87, 0.1)",
                      borderColor: "rgba(4, 120, 87, 0.12)",
                    },
                  }}
                >
                  {/* ── Form top accent bar ── */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background:
                        "linear-gradient(90deg, #047857, #34d399, #047857)",
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#0f172a",
                      mb: 1,
                    }}
                  >
                    Get in Touch
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#64748b", mb: 3 }}
                  >
                    Fill out the form and we will get back to you within 24
                    hours.
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <Stack spacing={2.5}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                      >
                        <TextField
                          fullWidth
                          label="First Name"
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
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          error={!!errors.lastName}
                          helperText={errors.lastName}
                          variant="outlined"
                          size="small"
                          disabled={isSubmitting}
                          sx={textFieldSx}
                        />
                      </Stack>
                      <TextField
                        fullWidth
                        label="Work Email"
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
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        error={!!errors.company}
                        helperText={errors.company}
                        variant="outlined"
                        size="small"
                        disabled={isSubmitting}
                        sx={textFieldSx}
                      />
                      <TextField
                        fullWidth
                        label="Tell us about your project"
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
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          size="large"
                          disabled={isSubmitting}
                          endIcon={
                            isSubmitting ? (
                              <CircularProgress size={20} color="inherit" />
                            ) : (
                              <ArrowForwardIcon />
                            )
                          }
                          sx={{
                            background:
                              "linear-gradient(135deg, #047857 0%, #065f46 100%)",
                            color: "#fff",
                            fontWeight: 600,
                            py: 1.5,
                            fontSize: "1rem",
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #065f46 0%, #064e3b 100%)",
                              boxShadow: "0 8px 24px rgba(4, 120, 87, 0.3)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </Stack>
                  </Box>

                  {/* ── Trust indicator ── */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      mt: 3,
                      pt: 2.5,
                      borderTop: "1px solid rgba(15, 23, 42, 0.06)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#34d399",
                        boxShadow: "0 0 6px rgba(52, 211, 153, 0.5)",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#94a3b8",
                        fontSize: "0.72rem",
                        fontWeight: 500,
                      }}
                    >
                      Typically responds within 24 hours
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </AnimatedSection>
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
