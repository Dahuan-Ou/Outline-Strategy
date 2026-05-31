"use client";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

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
        {/* Subtle background texture */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.04) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            right: "-10%",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(148, 163, 184, 0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 720, pt: { xs: 12, md: 4 } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#18181B",
                  fontSize: { xs: "2.5rem", sm: "3.2rem", md: "3.8rem" },
                  lineHeight: 1.15,
                  mb: 3,
                }}
              >
                Operational Clarity for Service Businesses
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6B7280",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  mb: 5,
                  maxWidth: 560,
                  fontSize: { xs: "1rem", md: "1.15rem" },
                }}
              >
                We help consultancies, agencies, and professional services firms
                design operational systems that give them visibility over project
                delivery, team capacity, and profitability.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  borderRadius: "6px",
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
