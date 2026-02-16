"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const floatingShapes = [
  { size: 300, top: "10%", left: "-5%", delay: 0, duration: 20 },
  { size: 200, top: "60%", right: "-3%", delay: 2, duration: 25 },
  { size: 150, top: "30%", right: "15%", delay: 4, duration: 18 },
  { size: 100, bottom: "20%", left: "10%", delay: 1, duration: 22 },
  { size: 80, top: "15%", right: "30%", delay: 3, duration: 16 },
];

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
      className="animated-gradient"
    >
      {/* Floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: shape.size,
            height: shape.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(184, 150, 90, ${0.04 + i * 0.015}) 0%, transparent 70%)`,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            y: [0, -30, 15, 0],
            x: [0, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(184, 150, 90, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184, 150, 90, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            gap: { xs: 6, lg: 8 },
            pt: { xs: 12, md: 0 },
          }}
        >
          {/* Left content */}
          <Box sx={{ flex: 1, maxWidth: { lg: "55%" } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.5,
                  py: 0.8,
                  borderRadius: "50px",
                  background: "rgba(184, 150, 90, 0.12)",
                  border: "1px solid rgba(184, 150, 90, 0.25)",
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#b8965a",
                    animation: "pulseGlow 2s ease-in-out infinite",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#d4b07a",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  TRANSFORMING BUSINESSES DIGITALLY
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "2.5rem", sm: "3.2rem", md: "3.8rem" },
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Elevate Your Business
                <br />
                <Box component="span" className="gradient-text">
                  Through Innovation
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  mb: 5,
                  maxWidth: 520,
                  fontSize: { xs: "1rem", md: "1.15rem" },
                }}
              >
                We partner with forward-thinking organizations to streamline
                operations, implement cutting-edge technology, and unlock
                sustainable growth.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => handleScroll("#services")}
                  sx={{
                    background:
                      "linear-gradient(135deg, #b8965a 0%, #96783f 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    px: 4,
                    py: 1.8,
                    fontSize: "1rem",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #d4b07a 0%, #b8965a 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 30px rgba(184, 150, 90, 0.35)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore Services
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  onClick={() => handleScroll("#workflow")}
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    fontWeight: 500,
                    px: 4,
                    py: 1.8,
                    fontSize: "1rem",
                    "&:hover": {
                      borderColor: "rgba(184, 150, 90, 0.5)",
                      background: "rgba(184, 150, 90, 0.08)",
                      color: "#d4b07a",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  See Our Process
                </Button>
              </Stack>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Stack
                direction="row"
                spacing={{ xs: 3, sm: 5 }}
                sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                {[
                  { value: "150+", label: "Clients Served" },
                  { value: "98%", label: "Satisfaction Rate" },
                  { value: "12+", label: "Years of Expertise" },
                ].map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#d4b07a",
                        fontWeight: 700,
                        fontSize: { xs: "1.5rem", md: "2rem" },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: { xs: "0.75rem", md: "0.85rem" },
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Box>

          {/* Right side - abstract visual */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ position: "relative", width: 420, height: 420 }}
            >
              {/* Orbiting rings */}
              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  style={{
                    position: "absolute",
                    inset: ring * 30,
                    border: `1px solid rgba(184, 150, 90, ${0.1 + ring * 0.05})`,
                    borderRadius: "50%",
                  }}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 20 + ring * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -4,
                      left: "50%",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#b8965a",
                      boxShadow: "0 0 15px rgba(184, 150, 90, 0.5)",
                    }}
                  />
                </motion.div>
              ))}

              {/* Center element */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(184, 150, 90, 0.15) 0%, transparent 70%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(184, 150, 90, 0.2)",
                      "0 0 60px rgba(184, 150, 90, 0.35)",
                      "0 0 30px rgba(184, 150, 90, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #b8965a 0%, #1c1917 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.8rem",
                    }}
                  >
                    R
                  </Typography>
                </motion.div>
              </Box>

              {/* Floating data points */}
              {[
                { top: "8%", left: "60%", label: "CRM" },
                { top: "75%", left: "15%", label: "API" },
                { top: "45%", right: "2%", label: "AI" },
                { top: "85%", right: "25%", label: "Cloud" },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    top: point.top,
                    left: point.left,
                    right: point.right,
                  }}
                  animate={{
                    y: [0, -10, 5, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 0.8,
                      borderRadius: "8px",
                      background: "rgba(184, 150, 90, 0.08)",
                      border: "1px solid rgba(184, 150, 90, 0.2)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#d4b07a",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {point.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Bottom curve */}
      <Box
        sx={{
          position: "absolute",
          bottom: -2,
          left: 0,
          width: "100%",
          height: { xs: 40, md: 80 },
          background: "#fafaf9",
          clipPath: "ellipse(55% 100% at 50% 100%)",
        }}
      />
    </Box>
  );
}
