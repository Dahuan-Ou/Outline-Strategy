"use client";

import { useRef } from "react";
import { Box, Container, Typography, Chip, Grid, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const beliefs = [
  {
    title: "Structure creates freedom.",
    description:
      "Clear systems don't constrain teams — they remove confusion and let people focus on the work that matters.",
  },
  {
    title: "Tools should follow design, not lead it.",
    description:
      "Software is only useful when it supports a well-defined process. Otherwise, it just adds noise.",
  },
  {
    title: "Visibility changes behaviour.",
    description:
      "When people can see project health, capacity, and margins in real time, better decisions happen naturally.",
  },
  {
    title: "Simple systems get adopted.",
    description:
      "The best operational system is the one your team actually uses. We design for adoption, not perfection.",
  },
];

export default function WhyUsSection() {
  const whoRef = useRef(null);
  const beliefsRef = useRef(null);
  const ctaRef = useRef(null);
  const whoInView = useInView(whoRef, { once: true, margin: "-80px" });
  const beliefsInView = useInView(beliefsRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <Box id="about">
      {/* ══════ Header ══════ */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 4, md: 6 },
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
            <Box sx={{ textAlign: "center" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Chip
                  label="ABOUT"
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
                A Small Consultancy with a{" "}
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
                  Clear Focus
                </Box>
              </Typography>

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

      {/* ══════ Who We Are ══════ */}
      <Box
        ref={whoRef}
        sx={{
          py: { xs: 6, md: 10 },
          background: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
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
              Who We Are
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4B5563",
                lineHeight: 1.9,
                fontSize: { xs: "1.02rem", md: "1.1rem" },
                mb: 3,
              }}
            >
              Outline Strategy is a founder-led consultancy that helps service
              businesses get their operations in order. We work with
              consultancies, agencies, and professional services firms that have
              outgrown their early-stage systems but haven&apos;t yet built the
              structure to support what&apos;s next.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4B5563",
                lineHeight: 1.9,
                fontSize: { xs: "1.02rem", md: "1.1rem" },
                mb: 3,
              }}
            >
              We&apos;re not a software vendor. We don&apos;t sell licenses or
              implementation hours. Our job is to help you see your operations
              clearly, design a system that works, and make sure the right tools
              are in place to support it.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4B5563",
                lineHeight: 1.9,
                fontSize: { xs: "1.02rem", md: "1.1rem" },
              }}
            >
              We keep our client list small. Every engagement gets direct,
              senior-level attention from start to finish.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ══════ What We Believe ══════ */}
      <Box
        ref={beliefsRef}
        sx={{
          py: { xs: 8, md: 12 },
          background: "#F8F9FA",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
              "radial-gradient(circle, rgba(148, 163, 184, 0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={beliefsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
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
                What We Believe
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 3,
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #94A3B8, #B8C4D4)",
                  mx: "auto",
                  mt: 1,
                }}
              />
            </Box>
          </motion.div>

          <Grid container spacing={{ xs: 4, md: 5 }}>
            {beliefs.map((belief, index) => (
              <Grid key={belief.title} size={{ xs: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={beliefsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: 30,
                        height: 2,
                        borderRadius: 1,
                        background:
                          "linear-gradient(90deg, #94A3B8, #B8C4D4)",
                        mb: 2.5,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#18181B",
                        fontSize: { xs: "1.05rem", md: "1.15rem" },
                        mb: 1.5,
                        lineHeight: 1.3,
                      }}
                    >
                      {belief.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6B7280",
                        lineHeight: 1.8,
                        fontSize: { xs: "0.95rem", md: "0.98rem" },
                      }}
                    >
                      {belief.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ══════ CTA ══════ */}
      <Box
        ref={ctaRef}
        sx={{
          py: { xs: 8, md: 12 },
          background: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#18181B",
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  mb: 2,
                  lineHeight: 1.3,
                }}
              >
                Interested in working together?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#6B7280",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  mb: 4,
                }}
              >
                We take on a limited number of engagements at any time. If your
                operations need structure, we&apos;d like to hear from you.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background:
                      "linear-gradient(135deg, #94A3B8 0%, #64748B 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    px: 5,
                    py: 1.8,
                    fontSize: "1rem",
                    textDecoration: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #64748B 0%, #4A5568 100%)",
                      boxShadow: "0 8px 30px rgba(148, 163, 184, 0.35)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Start a Conversation
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
