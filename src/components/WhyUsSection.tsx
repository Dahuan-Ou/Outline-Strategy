"use client";

import { Box, Container, Typography, Chip, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
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
    color: "#b8965a",
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 28 }} />,
    title: "Deep Expertise",
    description:
      "Our consultants bring decades of cross-industry experience, ensuring solutions grounded in real-world insight.",
    color: "#b8965a",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 28 }} />,
    title: "True Partnership",
    description:
      "We embed ourselves in your teams, aligning our success with yours for outcomes that exceed expectations.",
    color: "#b8965a",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
    title: "Measurable Impact",
    description:
      "Every engagement is tied to KPIs and business outcomes, so you always see the return on investment.",
    color: "#b8965a",
  },
];

function AnimatedCounter({
  value,
  suffix,
  duration,
}: {
  value: number;
  suffix: string;
  duration: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <Typography
      ref={ref}
      variant="h3"
      sx={{
        fontWeight: 800,
        color: "#fff",
        fontSize: { xs: "2.2rem", md: "3rem" },
      }}
    >
      {count}
      {suffix}
    </Typography>
  );
}

export default function WhyUsSection() {
  return (
    <Box id="why-us">
      {/* Stats banner */}
      <Box
        className="animated-gradient"
        sx={{
          py: { xs: 8, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(184, 150, 90, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(184, 150, 90, 0.05) 0%, transparent 50%)
            `,
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
                mb: 6,
              }}
            >
              Numbers That Speak for Themselves
            </Typography>
          </AnimatedSection>

          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <AnimatedSection delay={index * 0.15}>
                  <Box sx={{ textAlign: "center" }}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={stat.duration}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.6)",
                        mt: 0.5,
                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Strengths */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: "#fff" }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
              <Chip
                label="WHY CHOOSE US"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontSize: "0.75rem",
                  background: "rgba(184, 150, 90, 0.08)",
                  color: "#b8965a",
                  border: "1px solid rgba(184, 150, 90, 0.18)",
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  color: "#1c1917",
                  mb: 2,
                }}
              >
                The Raveena Advantage
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#78716c",
                  maxWidth: 600,
                  mx: "auto",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                }}
              >
                What sets us apart is not just what we deliver, but how we
                deliver it. Here is why industry leaders choose Raveena.
              </Typography>
            </Box>
          </AnimatedSection>

          <Grid container spacing={3}>
            {strengths.map((strength, index) => (
              <Grid
                key={strength.title}
                size={{ xs: 12, sm: 6, lg: 3 }}
              >
                <AnimatedSection delay={index * 0.1} direction="up">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box
                      sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        height: "100%",
                        background: "#fff",
                        border: "1px solid rgba(28, 25, 23, 0.06)",
                        boxShadow: "0 2px 12px rgba(28, 25, 23, 0.04)",
                        transition: "all 0.3s ease",
                        textAlign: "center",
                        "&:hover": {
                          boxShadow: `0 12px 40px ${strength.color}15`,
                          borderColor: `${strength.color}25`,
                        },
                      }}
                    >
                      <Box
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
                        }}
                      >
                        {strength.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#1c1917",
                          mb: 1.5,
                          fontSize: "1.05rem",
                        }}
                      >
                        {strength.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#78716c",
                          lineHeight: 1.7,
                        }}
                      >
                        {strength.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
