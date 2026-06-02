"use client";

import { useRef } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    icon: <SearchIcon sx={{ fontSize: 32 }} />,
    title: "Understand",
    description:
      "We start by mapping how your business actually operates today. Not how it's supposed to work — how it really works. We identify where information gets lost, where decisions stall, and where manual effort fills the gaps.",
    color: "#94A3B8",
    gradient: "linear-gradient(135deg, #94A3B8 0%, #B8C4D4 100%)",
  },
  {
    number: "02",
    icon: <ArchitectureIcon sx={{ fontSize: 32 }} />,
    title: "Design",
    description:
      "We design a clear operational structure — defining workflows, ownership, data flows, and reporting. This becomes the blueprint your systems need to support. No tool is selected until the design is right.",
    color: "#94A3B8",
    gradient: "linear-gradient(135deg, #94A3B8 0%, #B8C4D4 100%)",
  },
  {
    number: "03",
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    title: "Implement",
    description:
      "With the design in place, we help you select, configure, and connect the right tools. Implementation is phased, practical, and built around your team's capacity to adopt change without disrupting delivery.",
    color: "#94A3B8",
    gradient: "linear-gradient(135deg, #94A3B8 0%, #B8C4D4 100%)",
  },
];

/* ── Steps Row (3-column with vertical separators) ── */
function StepsRow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Box ref={ref}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={step.title}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Step content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ flex: 1 }}
            >
              <Box sx={{ px: { xs: 0, md: 4 }, py: { xs: 4, md: 0 } }}>
                {/* Number */}
                <Typography
                  sx={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    fontSize: "3rem",
                    lineHeight: 1,
                    color: "#CBD5E1",
                    mb: 2.5,
                  }}
                >
                  {step.number}
                </Typography>

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    color: "#18181B",
                    fontSize: { xs: "1.3rem", md: "1.4rem" },
                    mb: 2,
                  }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6B7280",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", md: "0.95rem" },
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </motion.div>

            {/* Vertical separator (desktop) / Horizontal separator (mobile) */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.3,
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    width: 1,
                    alignSelf: "stretch",
                    background:
                      "linear-gradient(180deg, transparent, #D1D5DB, transparent)",
                    flexShrink: 0,
                  }}
                />
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                    height: 1,
                    mx: 0,
                    background:
                      "linear-gradient(90deg, transparent, #D1D5DB, transparent)",
                  }}
                />
              </motion.div>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* ── Why This Order Matters ── */
function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: "#F8F9FA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Accent line */}
          <Box
            sx={{
              width: 40,
              height: 2,
              background: "#94A3B8",
              mx: { xs: 0, md: "auto" },
              mb: 3,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              color: "#18181B",
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              mb: 3,
              textAlign: { xs: "left", md: "center" },
            }}
          >
            Why This Order Matters
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                Most businesses start with tools. They buy software, configure
                it around assumptions, and hope it solves the problem. Six
                months later, the tool is half-adopted, data lives in three
                places, and the team is back to spreadsheets.
              </Typography>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                We start with the problem. By understanding your operations
                first and designing the system second, every tool decision is
                grounded in what your business actually needs — not what a
                vendor is selling.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

/* ── Main Section ── */
export default function WorkflowSection() {
  return (
    <Box id="workflow">
      {/* ── Header ── */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 2, md: 4 },
          background: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.03) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <AnimatedSection>
            <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto" }}>
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
                Our Approach
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  color: "#18181B",
                  mb: 2,
                }}
              >
                Understand. Design. Implement.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  maxWidth: 700,
                  mx: "auto",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                We follow a simple, deliberate process. Every engagement starts
                with understanding how your business actually works — not
                jumping to solutions. The goal is a system that fits your
                business, not the other way around.
              </Typography>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      {/* ── Steps (3-column with separators) ── */}
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          background: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <StepsRow />
        </Container>
      </Box>

      {/* ── Why This Order Matters ── */}
      <WhySection />
    </Box>
  );
}
