"use client";

import { Box, Container, Typography, Chip, Grid } from "@mui/material";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", duration: 2 },
  { value: 98, suffix: "%", label: "Client Retention", duration: 2.2 },
  { value: 40, suffix: "%", label: "Average Cost Savings", duration: 1.8 },
  { value: 12, suffix: "+", label: "Years of Excellence", duration: 1.5 },
];

const strengths = [
  {
    icon: <SpeedIcon sx={{ fontSize: 28 }} />,
    title: "Rapid Delivery",
    description:
      "Agile methodologies and experienced teams ensure your solutions go live faster without compromising quality.",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 28 }} />,
    title: "Deep Expertise",
    description:
      "Our consultants bring decades of cross-industry experience, ensuring solutions grounded in real-world insight.",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 28 }} />,
    title: "True Partnership",
    description:
      "We embed ourselves in your teams, aligning our success with yours for outcomes that exceed expectations.",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
    title: "Measurable Impact",
    description:
      "Every engagement is tied to KPIs and business outcomes, so you always see the return on investment.",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
];

/* ── Animated counter with smooth motion value ── */
function AnimatedCounter({
  value,
  suffix,
  duration,
}: {
  value: number;
  suffix: string;
  duration: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, value, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    const unsubscribe = rounded.on("change", (v) => setDisplayVal(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, value, duration, motionVal, rounded]);

  return (
    <Typography
      ref={ref}
      variant="h3"
      sx={{
        fontWeight: 800,
        color: "#fff",
        fontSize: { xs: "2.2rem", md: "3rem" },
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {displayVal}
      {suffix}
    </Typography>
  );
}

export default function WhyUsSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <Box id="why-us">
      {/* ══════ Stats Banner ══════ */}
      <Box
        ref={statsRef}
        className="animated-gradient"
        sx={{
          py: { xs: 8, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Decorative background ── */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.05) 0%, transparent 50%)
            `,
          }}
        />

        {/* ── Grid overlay for depth ── */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* ── Horizontal glow line ── */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={
            statsInView
              ? { width: "60%", opacity: 1 }
              : {}
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: "20%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.3), transparent)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <AnimatedSection>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "#fff",
                fontSize: { xs: "2rem", md: "2.5rem" },
                mb: 1.5,
              }}
            >
              Numbers That Speak for{" "}
              <Box
                component="span"
                sx={{
                  color: "#60a5fa",
                }}
              >
                Themselves
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "rgba(255,255,255,0.5)",
                maxWidth: 500,
                mx: "auto",
                mb: 6,
                fontSize: "0.95rem",
              }}
            >
              Trusted by businesses across industries to deliver lasting impact.
            </Typography>
          </AnimatedSection>

          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      py: 3,
                      px: 2,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      backdropFilter: "blur(8px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255,255,255,0.08)",
                        borderColor: "rgba(96, 165, 250, 0.2)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={stat.duration}
                    />
                    <Box
                      sx={{
                        width: 30,
                        height: 2,
                        borderRadius: 1,
                        background: "linear-gradient(90deg, #2563eb, #60a5fa)",
                        mx: "auto",
                        mt: 1,
                        mb: 1,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* ── Bottom glow line ── */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={statsInView ? { width: "60%", opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          style={{
            position: "absolute",
            bottom: 0,
            left: "20%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.3), transparent)",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* ══════ Strengths Section ══════ */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Background accent ── */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.025) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <AnimatedSection>
            <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Chip
                  label="WHY CHOOSE US"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    fontSize: "0.75rem",
                    background: "rgba(37, 99, 235, 0.08)",
                    color: "#2563eb",
                    border: "1px solid rgba(37, 99, 235, 0.18)",
                  }}
                />
              </motion.div>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  color: "#0f172a",
                  mb: 2,
                }}
              >
                The Raveena{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #2563eb 0%, #60a5fa 50%, #2563eb 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Advantage
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#64748b",
                  maxWidth: 600,
                  mx: "auto",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                What sets us apart is not just what we deliver, but how we
                deliver it. Here is why industry leaders choose Raveena.
              </Typography>

              {/* ── Decorative divider ── */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #2563eb, #60a5fa)",
                  margin: "24px auto 0",
                }}
              />
            </Box>
          </AnimatedSection>

          <Grid container spacing={3}>
            {strengths.map((strength, index) => (
              <Grid
                key={strength.title}
                size={{ xs: 12, sm: 6, lg: 3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Box
                      sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        height: "100%",
                        background: "#fff",
                        border: "1px solid rgba(15, 23, 42, 0.06)",
                        boxShadow: "0 2px 12px rgba(15, 23, 42, 0.04)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          boxShadow: `0 20px 60px ${strength.color}15`,
                          borderColor: `${strength.color}25`,
                        },
                        "&:hover .strength-icon-box": {
                          background: strength.gradient,
                          color: "#fff",
                          boxShadow: `0 8px 24px ${strength.color}30`,
                          transform: "scale(1.05)",
                        },
                        "&:hover .strength-line": {
                          width: 50,
                          background: strength.gradient,
                        },
                      }}
                    >
                      {/* Top accent on hover */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 3,
                          background: strength.gradient,
                          transformOrigin: "left",
                        }}
                      />

                      <Box
                        className="strength-icon-box"
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: "16px",
                          background: `${strength.color}10`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: strength.color,
                          mx: "auto",
                          mb: 2.5,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {strength.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#0f172a",
                          mb: 1.5,
                          fontSize: "1.05rem",
                        }}
                      >
                        {strength.title}
                      </Typography>

                      {/* ── Decorative mini line ── */}
                      <Box
                        className="strength-line"
                        sx={{
                          width: 30,
                          height: 2,
                          borderRadius: 1,
                          background: `${strength.color}30`,
                          mx: "auto",
                          mb: 2,
                          transition: "all 0.4s ease",
                        }}
                      />

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#64748b",
                          lineHeight: 1.7,
                        }}
                      >
                        {strength.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
