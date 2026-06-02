"use client";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

/* ─── Workflow stages (Operational Design: intake → delivery → reporting) ─── */
const stages = ["Intake", "Delivery", "Reporting"];

/* ─── Metric tiles (Visibility: delivery, capacity, profitability) ─── */
const metrics = [
  { label: "On Track", value: 94, suffix: "%" },
  { label: "Capacity", value: 78, suffix: "%" },
  { label: "Margin", value: 41, suffix: "%" },
];

/* ─── Project rows (what's on track) ─── */
const projects = [
  { name: "Client Onboarding", start: 0, width: 55 },
  { name: "Delivery Sprint", start: 20, width: 60 },
  { name: "Q2 Reporting", start: 50, width: 45 },
];

/* Profitability trend line */
const trend = "0,34 9,30 18,32 27,24 36,26 45,18 54,20 63,13 72,15 81,8 90,10 100,4";

/* ─── Animated count-up number ─── */
function CountUp({ to, suffix, delay }: { to: number; suffix: string; delay: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, delay]);
  return (
    <>
      {val}
      <Box component="span" sx={{ fontSize: "0.85rem" }}>
        {suffix}
      </Box>
    </>
  );
}

/* ─── Living operations dashboard ─── */
function DashboardViz() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { md: 460 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Soft glow behind the card */}
      <Box
        sx={{
          position: "absolute",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(148,163,184,0.10) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: "relative", width: "100%", maxWidth: 440 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "#FFFFFF",
            borderRadius: 16,
            border: "1px solid rgba(24,24,27,0.07)",
            boxShadow:
              "0 24px 60px rgba(24,24,27,0.10), 0 4px 12px rgba(24,24,27,0.04)",
            padding: 28,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "1.05rem",
                  color: "#18181B",
                }}
              >
                Operations Overview
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#64748B",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                  }}
                >
                  Live
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Workflow strip: Intake → Delivery → Reporting */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3.5,
              px: 1,
            }}
          >
            {/* Track line */}
            <Box
              sx={{
                position: "absolute",
                left: "12%",
                right: "12%",
                top: 9,
                height: 2,
                background: "rgba(148,163,184,0.2)",
              }}
            />
            {/* Animated fill line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.9, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: "12%",
                right: "12%",
                top: 9,
                height: 2,
                background: "#94A3B8",
                transformOrigin: "left",
              }}
            />
            {/* Travelling pulse */}
            <motion.div
              animate={{ left: ["12%", "88%"] }}
              transition={{
                duration: 3,
                delay: 2.4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: 5,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#64748B",
                boxShadow: "0 0 0 4px rgba(100,116,139,0.15)",
              }}
            />
            {stages.map((stage, i) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.25 }}
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  padding: "0 4px",
                }}
              >
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#fff",
                    border: "2px solid #94A3B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#94A3B8",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    color: "#6B7280",
                    textTransform: "uppercase",
                  }}
                >
                  {stage}
                </Typography>
              </motion.div>
            ))}
          </Box>

          {/* Metric tiles */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.15 }}
                style={{ flex: 1 }}
              >
                <Box
                  sx={{
                    borderRadius: 2,
                    background: "rgba(148,163,184,0.07)",
                    border: "1px solid rgba(148,163,184,0.1)",
                    py: 1.5,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      fontSize: "1.5rem",
                      lineHeight: 1,
                      color: "#18181B",
                    }}
                  >
                    <CountUp to={m.value} suffix={m.suffix} delay={1.6 + i * 0.15} />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.52rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#9CA3AF",
                      mt: 0.6,
                    }}
                  >
                    {m.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Project timeline rows */}
          <Box sx={{ mb: 3 }}>
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + i * 0.12 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1.2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.58rem",
                      color: "#9CA3AF",
                      minWidth: 92,
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.name}
                  </Typography>
                  <Box
                    sx={{
                      position: "relative",
                      flex: 1,
                      height: 5,
                      borderRadius: 3,
                      background: "rgba(148,163,184,0.1)",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${p.width}%` }}
                      transition={{
                        duration: 1.2,
                        delay: 2 + i * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{
                        position: "absolute",
                        left: `${p.start}%`,
                        top: 0,
                        height: "100%",
                        borderRadius: 3,
                        background:
                          "linear-gradient(90deg, #B8C4D4, #94A3B8)",
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Profitability trend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 0.8,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                }}
              >
                Profitability
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  color: "#64748B",
                }}
              >
                ↑ 18%
              </Typography>
            </Box>
            <Box
              component="svg"
              viewBox="0 0 100 38"
              preserveAspectRatio="none"
              sx={{ width: "100%", height: 44, display: "block" }}
            >
              <motion.polygon
                points={`0,38 ${trend} 100,38`}
                fill="rgba(148,163,184,0.08)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
              />
              <motion.polyline
                points={trend}
                fill="none"
                stroke="#94A3B8"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 2.6, ease: "easeOut" }}
              />
              <motion.circle
                cx={100}
                cy={4}
                r={2}
                fill="#64748B"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 4.3 }}
              />
            </Box>
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default function HeroSection() {
  return (
    <Box id="hero">
      {/* ══════ Hero ══════ */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "#F8F9FA",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
              pt: { xs: 12, md: 4 },
            }}
          >
            {/* ── Left: Content ── */}
            <Box sx={{ flex: 1, maxWidth: { md: "48%" } }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  height: 2,
                  background: "#94A3B8",
                  marginBottom: 32,
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "#18181B",
                    fontSize: {
                      xs: "2.5rem",
                      sm: "3.2rem",
                      md: "3.4rem",
                    },
                    lineHeight: 1.12,
                    mb: 3,
                  }}
                >
                  Operational Clarity for Service Businesses
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6B7280",
                    lineHeight: 1.8,
                    mb: 5,
                    maxWidth: 460,
                    fontSize: { xs: "1rem", md: "1.05rem" },
                  }}
                >
                  We help consultancies, agencies, and professional services
                  firms design operational systems that give them visibility over
                  project delivery, team capacity, and profitability.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "#18181B",
                    color: "#fff",
                    fontWeight: 600,
                    px: 4,
                    py: 1.8,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    borderRadius: "4px",
                    "&:hover": {
                      background: "#27272A",
                      boxShadow: "0 4px 20px rgba(24, 24, 27, 0.15)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </Box>

            {/* ── Right: Storytelling animation ── */}
            <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "block" },
                position: "relative",
                height: 480,
              }}
            >
              <DashboardViz />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ══════ The Problem ══════ */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#94A3B8",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
                mb: 3,
                display: "block",
              }}
            >
              The Problem
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#18181B",
                fontSize: { xs: "1.6rem", md: "2.2rem" },
                lineHeight: 1.3,
                maxWidth: 640,
                mb: 4,
              }}
            >
              Most service businesses don&apos;t have an operations problem.
              They have a visibility problem.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#6B7280",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.05rem" },
                maxWidth: 720,
                mb: 3,
              }}
            >
              Work gets delivered. Clients get served. But behind the scenes,
              information lives in spreadsheets, inboxes, and people&apos;s
              heads. Nobody has a clear view of what&apos;s on track, who&apos;s
              at capacity, or which projects are actually profitable.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6B7280",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.05rem" },
                maxWidth: 720,
              }}
            >
              We fix that. Not by adding more tools — but by designing the
              operational structure your business is missing.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ══════ What We Do ══════ */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "#F8F9FA",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#94A3B8",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
                mb: 4,
                display: "block",
              }}
            >
              What We Do
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 4, md: 0 }}>
            {[
              {
                title: "Operational Design",
                description:
                  "We map how work flows through your business — from sales to delivery to reporting — and design a system that actually holds together.",
              },
              {
                title: "Systems Architecture",
                description:
                  "We define what your tools need to do before you choose them. Structure first, software second.",
              },
              {
                title: "Visibility & Control",
                description:
                  "We build the foundations for real-time clarity over project delivery, team capacity, and profitability.",
              },
            ].map((service, index) => (
              <Grid key={service.title} size={{ xs: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Box
                    sx={{
                      px: { md: 4 },
                      py: { xs: 1, md: 0 },
                      borderLeft: {
                        xs: "none",
                        md:
                          index > 0
                            ? "1px solid #E5E7EB"
                            : "none",
                      },
                      borderTop: {
                        xs:
                          index > 0
                            ? "1px solid #E5E7EB"
                            : "none",
                        md: "none",
                      },
                      pt: { xs: index > 0 ? 3 : 0, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 30,
                        height: 2,
                        background: "#94A3B8",
                        mb: 3,
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#18181B",
                        fontSize: { xs: "1.2rem", md: "1.35rem" },
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6B7280",
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              component={Link}
              href="/services"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 5,
                color: "#94A3B8",
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textDecoration: "none",
                px: 0,
                "&:hover": {
                  background: "transparent",
                  color: "#64748B",
                },
              }}
            >
              Explore Services
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* ══════ Our Point of View ══════ */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#94A3B8",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
                mb: 1,
                display: "block",
              }}
            >
              Thinking
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#18181B",
                fontSize: { xs: "1.6rem", md: "2.2rem" },
                mb: { xs: 4, md: 6 },
              }}
            >
              Our Point of View
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {[
              {
                label: "Problem",
                title: "Most Service Businesses Run on Fragmented Systems",
                description:
                  "Spreadsheets, inboxes, and disconnected tools create blind spots. Work gets done, but nobody has the full picture.",
              },
              {
                label: "Principle",
                title: "Design the System Before Choosing the Tools",
                description:
                  "Buying software without a clear operational design leads to more complexity, not less.",
              },
              {
                label: "Outcome",
                title: "Clarity Over Delivery, Capacity, and Margin",
                description:
                  "When your operations are properly structured, the right information reaches the right people at the right time.",
              },
            ].map((item, index) => (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#94A3B8",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      fontSize: "0.7rem",
                      mb: 1.5,
                      display: "block",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#18181B",
                      fontSize: { xs: "1.05rem", md: "1.15rem" },
                      lineHeight: 1.4,
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6B7280",
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ══════ CTA ══════ */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "#27272A",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontSize: { xs: "1.6rem", md: "2.2rem" },
                lineHeight: 1.3,
                maxWidth: 560,
                mb: 3,
              }}
            >
              Ready to see how your operations should actually work?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.05rem" },
                maxWidth: 560,
                mb: 4,
              }}
            >
              We work with a small number of clients at a time. If you&apos;re
              looking for clarity over delivery, capacity, or profitability —
              let&apos;s talk.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.3)",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textDecoration: "none",
                borderRadius: "6px",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.05)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Start a Conversation
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
