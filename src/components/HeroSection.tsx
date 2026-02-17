"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

/* ─── Seeded PRNG for deterministic values (server === client) ─── */
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ─── Particle Field (deterministic) ─── */
const rng = seededRandom(42);
const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x: Math.round(rng() * 10000) / 100,
  y: Math.round(rng() * 10000) / 100,
  size: Math.round((rng() * 3 + 1) * 100) / 100,
  duration: Math.round((rng() * 15 + 15) * 100) / 100,
  delay: Math.round(rng() * 500) / 100,
}));

/* ─── Connection Lines (network mesh) ─── */
const networkNodes = [
  { x: 15, y: 20 },
  { x: 35, y: 12 },
  { x: 55, y: 25 },
  { x: 75, y: 15 },
  { x: 90, y: 30 },
  { x: 25, y: 50 },
  { x: 50, y: 55 },
  { x: 70, y: 45 },
  { x: 85, y: 60 },
  { x: 10, y: 75 },
  { x: 40, y: 80 },
  { x: 65, y: 72 },
  { x: 88, y: 82 },
  { x: 20, y: 90 },
  { x: 55, y: 92 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [1, 6], [2, 7], [3, 8],
  [5, 6], [6, 7], [7, 8],
  [5, 9], [6, 10], [7, 11], [8, 12],
  [9, 10], [10, 11], [11, 12],
  [9, 13], [10, 14], [12, 14],
];

/* ─── Animated Counter ─── */
function AnimatedStatValue({ value }: { value: string }) {
  const numericPart = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    const controls = animate(motionVal, numericPart, {
      duration: 2.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    const unsubscribe = rounded.on("change", (v) => setDisplayVal(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [motionVal, rounded, numericPart]);

  return (
    <Typography
      variant="h4"
      sx={{
        color: "#34d399",
        fontWeight: 700,
        fontSize: { xs: "1.5rem", md: "2rem" },
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {displayVal}
      {suffix}
    </Typography>
  );
}

/* ─── Orbiting DNA Helix (pre-computed for hydration safety) ─── */
const helixData = Array.from({ length: 14 }, (_, i) => {
  const t = (i / 13) * Math.PI * 3;
  const xOffset1 = Math.round(Math.cos(t) * 80 * 100) / 100;
  const xOffset2 = Math.round(Math.cos(t + Math.PI) * 80 * 100) / 100;
  const z1 = Math.round(Math.sin(t) * 40 * 100) / 100;
  const z2 = Math.round(Math.sin(t + Math.PI) * 40 * 100) / 100;
  const shadow1 = Math.round((0.3 + z1 / 100) * 1000) / 1000;
  const shadow2 = Math.round((0.3 + z2 / 100) * 1000) / 1000;
  const yPos = Math.round((i / 13) * 100 * 100) / 100;
  return { id: i, xOffset1, xOffset2, z1, z2, shadow1, shadow2, yPos };
});

function DNAHelix() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 320,
        height: 320,
      }}
    >
      {/* Rotating container */}
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          perspective: 600,
        }}
      >
        {helixData.map((point) => (
          <Box key={point.id} sx={{ position: "absolute", width: "100%", top: `${point.yPos}%` }}>
            {/* Strand 1 dot */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                delay: point.id * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                left: `calc(50% + ${point.xOffset1}px)`,
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: `0 0 12px rgba(52, 211, 153, ${point.shadow1})`,
                transform: `translateZ(${point.z1}px)`,
              }}
            />
            {/* Strand 2 dot */}
            <motion.div
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 3,
                delay: point.id * 0.2 + 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                left: `calc(50% + ${point.xOffset2}px)`,
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#047857",
                boxShadow: `0 0 10px rgba(4, 120, 87, ${point.shadow2})`,
                transform: `translateZ(${point.z2}px)`,
              }}
            />
            {/* Connecting bar */}
            {point.id % 2 === 0 && (
              <motion.div
                animate={{ opacity: [0.05, 0.2, 0.05] }}
                transition={{
                  duration: 4,
                  delay: point.id * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${Math.min(point.xOffset1, point.xOffset2)}px)`,
                  width: Math.abs(point.xOffset1 - point.xOffset2),
                  height: 1,
                  background: "linear-gradient(90deg, #34d399, #047857)",
                }}
              />
            )}
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}

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
      {/* ── Particle field ── */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(52, 211, 153, 0.4)",
          }}
          animate={{
            y: [0, -40, 20, 0],
            x: [0, 20, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Network mesh (SVG) ── */}
      <Box
        component="svg"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={`line-${i}`}
            x1={networkNodes[a].x}
            y1={networkNodes[a].y}
            x2={networkNodes[b].x}
            y2={networkNodes[b].y}
            stroke="rgba(4, 120, 87, 0.08)"
            strokeWidth={0.15}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}

        {/* Travelling pulses along connections */}
        {connections.slice(0, 8).map(([a, b], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r={0.3}
            fill="#34d399"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [networkNodes[a].x, networkNodes[b].x],
              cy: [networkNodes[a].y, networkNodes[b].y],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 2 + 1,
              repeat: Infinity,
              repeatDelay: 8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Network nodes */}
        {networkNodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={0.4}
            fill="rgba(52, 211, 153, 0.25)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 + 0.5 }}
          />
        ))}

        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </Box>

      {/* ── Grid pattern overlay ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(4, 120, 87, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(4, 120, 87, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Scanning line ── */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.15), transparent)",
          pointerEvents: "none",
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
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
            {/* Badge */}
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
                  background: "rgba(4, 120, 87, 0.12)",
                  border: "1px solid rgba(4, 120, 87, 0.25)",
                  mb: 4,
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#34d399",
                    boxShadow: "0 0 8px rgba(52, 211, 153, 0.6)",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#34d399",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  TRANSFORMING BUSINESSES DIGITALLY
                </Typography>
              </Box>
            </motion.div>

            {/* Heading with word-by-word animation */}
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
                {"Elevate Your Business".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{ display: "inline-block", marginRight: "0.3em" }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <Box component="span">
                  {"Through Innovation".split(" ").map((word, i) => (
                    <motion.span
                      key={`grad-${i}`}
                      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.6,
                        delay: 0.65 + i * 0.12,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{
                        display: "inline-block",
                        marginRight: "0.3em",
                        background:
                          "linear-gradient(135deg, #34d399 0%, #6ee7b7 40%, #a7f3d0 60%, #34d399 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </Box>
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => handleScroll("#services")}
                    sx={{
                      background:
                        "linear-gradient(135deg, #047857 0%, #065f46 100%)",
                      color: "#fff",
                      fontWeight: 600,
                      px: 4,
                      py: 1.8,
                      fontSize: "1rem",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #34d399 0%, #047857 100%)",
                        boxShadow: "0 8px 30px rgba(4, 120, 87, 0.35)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Explore Services
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
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
                        borderColor: "rgba(4, 120, 87, 0.5)",
                        background: "rgba(4, 120, 87, 0.08)",
                        color: "#34d399",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    See Our Process
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>

            {/* Stats row with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Stack
                direction="row"
                spacing={{ xs: 3, sm: 5 }}
                sx={{
                  mt: 6,
                  pt: 4,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {[
                  { value: "150+", label: "Clients Served" },
                  { value: "98%", label: "Satisfaction Rate" },
                  { value: "12+", label: "Years of Expertise" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
                  >
                    <Box>
                      <AnimatedStatValue value={stat.value} />
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
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Box>

          {/* ── Right side - Advanced visual ── */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              height: 480,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: "relative", width: 440, height: 440 }}
            >
              {/* Outer pulsing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  border: "1px solid rgba(52, 211, 153, 0.15)",
                }}
              />

              {/* Orbiting rings with dots */}
              {[
                { inset: 0, duration: 25, direction: 1, dotSize: 10, color: "#34d399" },
                { inset: 35, duration: 18, direction: -1, dotSize: 8, color: "#047857" },
                { inset: 70, duration: 30, direction: 1, dotSize: 6, color: "#34d399" },
                { inset: 100, duration: 22, direction: -1, dotSize: 7, color: "#065f46" },
              ].map((ring, idx) => (
                <motion.div
                  key={`ring-${idx}`}
                  style={{
                    position: "absolute",
                    inset: ring.inset,
                    borderRadius: "50%",
                    border: `1px solid rgba(4, 120, 87, ${0.06 + idx * 0.03})`,
                  }}
                  animate={{ rotate: ring.direction * 360 }}
                  transition={{
                    duration: ring.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Primary dot */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 4px ${ring.color}40`,
                        `0 0 16px ${ring.color}80`,
                        `0 0 4px ${ring.color}40`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      top: -ring.dotSize / 2,
                      left: "50%",
                      width: ring.dotSize,
                      height: ring.dotSize,
                      borderRadius: "50%",
                      background: ring.color,
                    }}
                  />
                  {/* Secondary dot (opposite side) */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -ring.dotSize / 2 + 1,
                      left: "50%",
                      width: ring.dotSize - 2,
                      height: ring.dotSize - 2,
                      borderRadius: "50%",
                      background: `${ring.color}60`,
                    }}
                  />
                </motion.div>
              ))}

              {/* DNA Helix in center */}
              <DNAHelix />

              {/* Center core */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(4, 120, 87, 0.2) 0%, transparent 70%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(4, 120, 87, 0.2), inset 0 0 20px rgba(52, 211, 153, 0.1)",
                      "0 0 50px rgba(4, 120, 87, 0.4), inset 0 0 30px rgba(52, 211, 153, 0.2)",
                      "0 0 20px rgba(4, 120, 87, 0.2), inset 0 0 20px rgba(52, 211, 153, 0.1)",
                    ],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #047857 0%, #0f172a 50%, #065f46 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      textShadow: "0 0 20px rgba(52, 211, 153, 0.5)",
                    }}
                  >
                    R
                  </Typography>
                </motion.div>
              </Box>

              {/* Floating tech labels with connecting lines */}
              {[
                { top: "4%", left: "65%", label: "CRM", delay: 0 },
                { top: "72%", left: "8%", label: "API", delay: 0.3 },
                { top: "38%", right: "-5%", label: "AI", delay: 0.6 },
                { top: "88%", right: "20%", label: "Cloud", delay: 0.9 },
                { top: "18%", left: "5%", label: "Data", delay: 1.2 },
                { bottom: "5%", left: "40%", label: "IoT", delay: 1.5 },
              ].map((point, i) => (
                <motion.div
                  key={`label-${i}`}
                  style={{
                    position: "absolute",
                    top: point.top,
                    left: point.left,
                    right: point.right,
                    bottom: point.bottom,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 4, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.8 + point.delay },
                    scale: { duration: 0.6, delay: 0.8 + point.delay },
                    y: {
                      duration: 5 + i,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 0.8,
                      borderRadius: "8px",
                      background: "rgba(4, 120, 87, 0.1)",
                      border: "1px solid rgba(4, 120, 87, 0.25)",
                      backdropFilter: "blur(12px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(4, 120, 87, 0.2)",
                        borderColor: "rgba(52, 211, 153, 0.5)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#34d399",
                        fontWeight: 600,
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
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
          background: "#f8fafc",
          clipPath: "ellipse(55% 100% at 50% 100%)",
        }}
      />
    </Box>
  );
}
