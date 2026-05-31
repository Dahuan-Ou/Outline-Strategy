"use client";

import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function OurPositionSection() {
  return (
    <Box
      id="our-position"
      sx={{
        py: { xs: 10, md: 14 },
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Subtle radial glow ── */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(148, 163, 184, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Dot pattern ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(24, 24, 27, 0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative" }}>
        <AnimatedSection>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="OUR POSITION"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontSize: "0.75rem",
                  background: "rgba(148, 163, 184, 0.08)",
                  color: "#94A3B8",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                }}
              />
            </motion.div>
          </Box>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
              color: "#18181B",
              lineHeight: 1.3,
              mb: 2,
              fontStyle: "italic",
            }}
          >
            &ldquo;Strategy without structure is ambition without
            direction.&rdquo;
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
              background: "linear-gradient(90deg, #94A3B8, #B8C4D4)",
              margin: "32px auto",
            }}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#4B5563",
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              lineHeight: 1.85,
              maxWidth: 680,
              mx: "auto",
            }}
          >
            Outline Strategy is a boutique advisory firm that works at the
            intersection of business process, systems architecture, and
            intelligent automation. We believe that sustainable transformation
            begins with clarity&nbsp;&mdash; not technology.
          </Typography>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
