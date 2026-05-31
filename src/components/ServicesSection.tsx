"use client";

import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Stack,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InsightsIcon from "@mui/icons-material/Insights";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: <AccountTreeIcon sx={{ fontSize: 36 }} />,
    label: "Structure Before Software",
    title: "Operational Design",
    description:
      "We work with leadership teams to map how work actually moves through the business — from client intake to project delivery to financial reporting. The result is a clear operational blueprint that removes ambiguity and creates accountability.",
    deliverables: [
      "End-to-end workflow mapping across teams",
      "Identifying gaps, bottlenecks, and manual workarounds",
      "Defining clear handoffs, ownership, and decision points",
      "Standardising how projects are scoped, tracked, and closed",
    ],
    color: "#94A3B8",
    gradient: "linear-gradient(135deg, #94A3B8 0%, #B8C4D4 100%)",
  },
  {
    icon: <SettingsSuggestIcon sx={{ fontSize: 36 }} />,
    label: "Choosing Tools That Fit",
    title: "Systems Architecture",
    description:
      "Most businesses pick tools before defining what they need. We reverse that. Once your operational design is clear, we define the system requirements — then help you select and configure the right tools to support them.",
    deliverables: [
      "Defining what your systems need to do, not just what's available",
      "Evaluating your current tools against actual requirements",
      "Designing integrations so data flows without manual effort",
      "Creating a phased implementation plan that doesn't disrupt delivery",
    ],
    color: "#94A3B8",
    gradient: "linear-gradient(135deg, #94A3B8 0%, #B8C4D4 100%)",
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 36 }} />,
    label: "The Numbers That Matter",
    title: "Visibility & Reporting",
    description:
      "You can't manage what you can't see. We design reporting structures that give you real-time clarity over project health, team utilisation, and profitability — without chasing people for updates.",
    deliverables: [
      "Defining the metrics that actually drive decisions",
      "Building dashboards that reflect real operational data",
      "Connecting delivery data to financial outcomes",
      "Replacing status meetings with self-serve visibility",
    ],
    color: "#94A3B8",
    gradient: "linear-gradient(135deg, #94A3B8 0%, #B8C4D4 100%)",
  },
];

/* ── Individual Service Section ── */
function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 !== 0;

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: index % 2 === 0 ? "#FFFFFF" : "#F8F9FA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Subtle background pattern ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.03) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* ── Decorative radial glow ── */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: isReversed ? "20%" : "80%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(148, 163, 184, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          direction={isReversed ? "row-reverse" : "row"}
        >
          {/* ── Left: Content ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "16px",
                    background: `${service.color}10`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: service.color,
                    mb: 3,
                    transition: "all 0.4s ease",
                    "&:hover": {
                      background: service.gradient,
                      color: "#fff",
                      boxShadow: `0 8px 24px ${service.color}30`,
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {service.icon}
                </Box>
              </motion.div>

              {/* Label */}
              <Typography
                variant="overline"
                sx={{
                  color: service.color,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  fontSize: "0.75rem",
                  mb: 1,
                  display: "block",
                }}
              >
                {service.label}
              </Typography>

              {/* Title */}
              <Typography
                variant="h3"
                sx={{
                  color: "#18181B",
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                {service.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  maxWidth: 520,
                }}
              >
                {service.description}
              </Typography>
            </motion.div>
          </Grid>

          {/* ── Right: Deliverables ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 4.5 },
                  borderRadius: 4,
                  background:
                    index % 2 === 0
                      ? "#F8F9FA"
                      : "#FFFFFF",
                  border: "1px solid rgba(24, 24, 27, 0.06)",
                  boxShadow: "0 2px 16px rgba(24, 24, 27, 0.04)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: `0 12px 40px ${service.color}12`,
                    borderColor: `${service.color}20`,
                  },
                }}
              >
                {/* Top accent */}
                <Box
                  sx={{
                    width: 40,
                    height: 3,
                    borderRadius: 2,
                    background: service.gradient,
                    mb: 3,
                  }}
                />

                <Stack spacing={2.5}>
                  {service.deliverables.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        delay: 0.35 + i * 0.1,
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "8px",
                            background: `${service.color}10`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            mt: 0.2,
                          }}
                        >
                          <ArrowForwardIcon
                            sx={{
                              fontSize: 14,
                              color: service.color,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#4B5563",
                            fontSize: { xs: "0.92rem", md: "0.98rem" },
                            lineHeight: 1.6,
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);

  return (
    <Box id="services" ref={sectionRef}>
      {/* ── Section Header ── */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 4, md: 6 },
          background: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Background pattern ── */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.035) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <AnimatedSection>
            <Box sx={{ textAlign: "center" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Chip
                  label="SERVICES"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    fontSize: "0.75rem",
                    background: "rgba(148, 163, 184, 0.08)",
                    color: "#94A3B8",
                    border: "1px solid rgba(148, 163, 184, 0.18)",
                  }}
                />
              </motion.div>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  color: "#18181B",
                  mb: 2,
                }}
              >
                What We{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #94A3B8 0%, #B8C4D4 50%, #94A3B8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Do
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  maxWidth: 680,
                  mx: "auto",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                We help service businesses design operational systems that work.
                Not more tools. Not more complexity. Just clear structure,
                connected data, and the visibility you need to make better
                decisions.
              </Typography>

              {/* ── Decorative divider line ── */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #94A3B8, #B8C4D4)",
                  margin: "24px auto 0",
                }}
              />
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      {/* ── Service Sections ── */}
      {services.map((service, index) => (
        <ServiceSection key={service.title} service={service} index={index} />
      ))}
    </Box>
  );
}
