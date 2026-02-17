"use client";

import { useState, useRef, useCallback } from "react";
import { Box, Container, Typography, Chip, Stack } from "@mui/material";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TuneIcon from "@mui/icons-material/Tune";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: <SearchIcon sx={{ fontSize: 28 }} />,
    title: "Discover & Assess",
    subtitle: "Understanding your world",
    description:
      "We begin by understanding your business inside out. Through stakeholder interviews, process mapping, and our Digital Health Check, we identify pain points, opportunities, and your unique competitive advantages.",
    value: "Clear visibility into what matters most",
    deliverables: [
      "Stakeholder interview summaries",
      "Process flow documentation",
      "Digital maturity scorecard",
      "Opportunity & risk register",
    ],
    metric: "2-4 weeks",
    metricLabel: "Discovery Phase",
    color: "#047857",
    lightColor: "#ecfdf5",
    gradient: "linear-gradient(135deg, #047857 0%, #34d399 100%)",
  },
  {
    icon: <ArchitectureIcon sx={{ fontSize: 28 }} />,
    title: "Strategize & Design",
    subtitle: "Charting the course",
    description:
      "Our consultants craft a tailored roadmap that aligns technology with your business objectives. We design solutions that are scalable, sustainable, and focused on delivering measurable impact.",
    value: "A roadmap you can trust",
    deliverables: [
      "Strategic transformation roadmap",
      "Solution architecture blueprint",
      "Implementation timeline",
      "ROI projection model",
    ],
    metric: "3-6 weeks",
    metricLabel: "Planning Phase",
    color: "#047857",
    lightColor: "#ecfdf5",
    gradient: "linear-gradient(135deg, #047857 0%, #34d399 100%)",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 28 }} />,
    title: "Build & Integrate",
    subtitle: "Bringing vision to life",
    description:
      "Our engineers bring the strategy to life — developing custom applications, implementing CRM systems, and integrating your technology stack. We follow agile practices to deliver incremental value quickly.",
    value: "Solutions that work from day one",
    deliverables: [
      "Working software increments",
      "System integrations & APIs",
      "Data migration & validation",
      "User acceptance testing",
    ],
    metric: "4-8 weeks",
    metricLabel: "Build Phase",
    color: "#047857",
    lightColor: "#ecfdf5",
    gradient: "linear-gradient(135deg, #047857 0%, #34d399 100%)",
  },
  {
    icon: <TuneIcon sx={{ fontSize: 28 }} />,
    title: "Optimize & Automate",
    subtitle: "Maximizing performance",
    description:
      "We refine processes, introduce intelligent automation, and eliminate inefficiencies. Through continuous monitoring and data-driven insights, we ensure your operations run at peak performance.",
    value: "Efficiency that keeps improving",
    deliverables: [
      "Automated workflow pipelines",
      "Performance dashboards",
      "Process optimization report",
      "Automation playbooks",
    ],
    metric: "40%",
    metricLabel: "Avg. Cost Reduction",
    color: "#047857",
    lightColor: "#ecfdf5",
    gradient: "linear-gradient(135deg, #047857 0%, #34d399 100%)",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 28 }} />,
    title: "Sustain & Evolve",
    subtitle: "Growing together",
    description:
      "Our commitment extends beyond delivery. We provide ongoing support, training, and strategic guidance to ensure your solutions evolve with your business needs and market demands.",
    value: "A partnership that grows with you",
    deliverables: [
      "24/7 support & monitoring",
      "Team training & enablement",
      "Quarterly business reviews",
      "Continuous improvement cycles",
    ],
    metric: "98%",
    metricLabel: "Client Retention",
    color: "#047857",
    lightColor: "#ecfdf5",
    gradient: "linear-gradient(135deg, #047857 0%, #34d399 100%)",
  },
];

/* ─── Travelling Particle ─── */
function TravellingParticle({
  fromIndex,
  toIndex,
  color,
  delay,
}: {
  fromIndex: number;
  toIndex: number;
  color: string;
  delay: number;
}) {
  const startX = (fromIndex / (steps.length - 1)) * 100;
  const endX = (toIndex / (steps.length - 1)) * 100;

  return (
    <motion.div
      style={{
        position: "absolute",
        top: "50%",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 12px ${color}, 0 0 24px ${color}80`,
        zIndex: 3,
        translateY: "-50%",
      }}
      initial={{ left: `${startX}%`, opacity: 0, scale: 0 }}
      animate={{
        left: [`${startX}%`, `${endX}%`],
        opacity: [0, 1, 1, 0],
        scale: [0, 1.2, 1.2, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 6,
        ease: "easeInOut",
      }}
    />
  );
}

/* ─── Desktop Horizontal Journey ─── */
function DesktopJourney({
  activeStep,
  onStepClick,
}: {
  activeStep: number;
  onStepClick: (i: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box
      ref={ref}
      sx={{ display: { xs: "none", md: "block" }, position: "relative" }}
    >
      {/* ── Connector Rail ── */}
      <Box
        sx={{
          position: "relative",
          height: 6,
          mx: 8,
          mb: 0,
          mt: 2,
        }}
      >
        {/* Background rail */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: 3,
            background: "#e2e8f0",
          }}
        />
        {/* Animated fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={
            isInView
              ? { width: `${(activeStep / (steps.length - 1)) * 100}%` }
              : {}
          }
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            borderRadius: 12,
            background:
              "linear-gradient(90deg, #065f46 0%, #047857 40%, #34d399 70%, #047857 100%)",
            boxShadow: "0 0 16px rgba(4, 120, 87, 0.25)",
          }}
        />

        {/* Travelling particles */}
        {isInView &&
          steps.slice(0, -1).map((step, i) => (
            <TravellingParticle
              key={i}
              fromIndex={i}
              toIndex={i + 1}
              color={step.color}
              delay={i * 1.5 + 1}
            />
          ))}
      </Box>

      {/* ── Step Nodes ── */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          px: 2,
          mt: -3.5,
        }}
      >
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                flex: 1,
              }}
              onClick={() => onStepClick(index)}
            >
              {/* Node circle */}
              <motion.div
                animate={
                  isActive
                    ? {
                        scale: [1.12, 1.22, 1.12],
                        boxShadow: [
                          `0 0 0px ${step.color}00`,
                          `0 0 24px ${step.color}50`,
                          `0 0 0px ${step.color}00`,
                        ],
                      }
                    : isPast
                      ? { scale: 1, boxShadow: `0 0 0px ${step.color}00` }
                      : { scale: 1, boxShadow: `0 0 0px ${step.color}00` }
                }
                transition={
                  isActive
                    ? {
                        scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                      }
                    : {
                        scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                        boxShadow: { duration: 0.5, ease: "easeOut" },
                      }
                }
                whileHover={{ scale: isActive ? 1.22 : 1.12 }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: isPast || isActive ? step.gradient : "#fff",
                  border: `3px solid ${isPast || isActive ? step.color : "#cbd5e1"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isPast || isActive ? "#fff" : "#94a3b8",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {step.icon}

                {/* Step number */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background:
                      isPast || isActive ? step.color : "#e2e8f0",
                    color: isPast || isActive ? "#fff" : "#94a3b8",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: isActive
                      ? `0 2px 8px ${step.color}50`
                      : "none",
                    transition: "all 0.4s ease",
                  }}
                >
                  {isPast ? (
                    <CheckCircleOutlineIcon sx={{ fontSize: 16 }} />
                  ) : (
                    index + 1
                  )}
                </Box>
              </motion.div>

              {/* Title under node */}
              <Typography
                variant="caption"
                sx={{
                  mt: 1.5,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? step.color : "#64748b",
                  fontSize: isActive ? "0.82rem" : "0.78rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  maxWidth: 120,
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </Typography>
            </motion.div>
          );
        })}
      </Box>

      {/* ── Detail Panel ── */}
      <Box sx={{ mt: 5, px: 2 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: `0 8px 40px ${steps[activeStep].color}12`,
                border: `1px solid ${steps[activeStep].color}20`,
                background: "#fff",
              }}
            >
              {/* Top accent bar */}
              <Box
                sx={{
                  height: 5,
                  background: steps[activeStep].gradient,
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row" },
                  gap: 0,
                }}
              >
                {/* Left - main info */}
                <Box sx={{ flex: 1.4, p: { md: 5 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: steps[activeStep].color,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        fontSize: "0.72rem",
                      }}
                    >
                      STEP {activeStep + 1} OF {steps.length}
                    </Typography>
                    <Box
                      sx={{
                        flex: 1,
                        height: 1,
                        background: `${steps[activeStep].color}15`,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "#0f172a",
                      mb: 0.5,
                      fontSize: "1.6rem",
                    }}
                  >
                    {steps[activeStep].title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: steps[activeStep].color,
                      fontWeight: 500,
                      mb: 2.5,
                      fontStyle: "italic",
                      fontSize: "0.95rem",
                    }}
                  >
                    {steps[activeStep].subtitle}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#475569",
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: "0.98rem",
                    }}
                  >
                    {steps[activeStep].description}
                  </Typography>

                  {/* Value proposition pill */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        px: 2.5,
                        py: 1,
                        borderRadius: "50px",
                        background: `${steps[activeStep].color}08`,
                        border: `1px solid ${steps[activeStep].color}20`,
                      }}
                    >
                      <VerifiedIcon
                        sx={{
                          fontSize: 18,
                          color: steps[activeStep].color,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: steps[activeStep].color,
                          fontWeight: 600,
                          fontSize: "0.85rem",
                        }}
                      >
                        {steps[activeStep].value}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>

                {/* Right - deliverables + metric */}
                <Box
                  sx={{
                    flex: 1,
                    p: { md: 5 },
                    background: steps[activeStep].lightColor + "60",
                    borderLeft: `1px solid ${steps[activeStep].color}12`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* Metric badge */}
                  <Box
                    sx={{
                      textAlign: "center",
                      mb: 3.5,
                      py: 2.5,
                      borderRadius: 3,
                      background: "#fff",
                      boxShadow: `0 2px 12px ${steps[activeStep].color}10`,
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: steps[activeStep].color,
                        fontSize: "2.2rem",
                        lineHeight: 1,
                      }}
                    >
                      {steps[activeStep].metric}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#64748b",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        fontSize: "0.72rem",
                      }}
                    >
                      {steps[activeStep].metricLabel}
                    </Typography>
                  </Box>

                  {/* Deliverables list */}
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#94a3b8",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      fontSize: "0.68rem",
                      mb: 1.5,
                    }}
                  >
                    KEY DELIVERABLES
                  </Typography>
                  <Stack spacing={1}>
                    {steps[activeStep].deliverables.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.08 }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.2,
                          }}
                        >
                          <ArrowForwardIcon
                            sx={{
                              fontSize: 14,
                              color: steps[activeStep].color,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#475569",
                              fontSize: "0.88rem",
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
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 3,
          }}
        >
          {steps.map((step, i) => (
            <Box
              key={i}
              onClick={() => onStepClick(i)}
              sx={{
                width: i === activeStep ? 32 : 10,
                height: 10,
                borderRadius: 5,
                background:
                  i === activeStep ? step.gradient : "#e2e8f0",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  background:
                    i === activeStep ? step.gradient : "#cbd5e1",
                  transform: "scaleY(1.3)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ─── Mobile Vertical Journey ─── */
function MobileJourney({
  activeStep,
  onStepClick,
}: {
  activeStep: number;
  onStepClick: (i: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Box ref={ref} sx={{ display: { xs: "block", md: "none" } }}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isPast = index < activeStep;

        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.12, duration: 0.5 }}
          >
            <Box
              onClick={() => onStepClick(index)}
              sx={{
                display: "flex",
                gap: 2.5,
                cursor: "pointer",
                position: "relative",
                pb: index < steps.length - 1 ? 0 : 0,
              }}
            >
              {/* Vertical line + Node */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* Node */}
                <motion.div
                  animate={
                    isActive
                      ? {
                          scale: [1.1, 1.2, 1.1],
                          boxShadow: [
                            `0 0 0px ${step.color}00`,
                            `0 0 18px ${step.color}45`,
                            `0 0 0px ${step.color}00`,
                          ],
                        }
                      : {
                          scale: 1,
                          boxShadow: `0 0 0px ${step.color}00`,
                        }
                  }
                  transition={
                    isActive
                      ? {
                          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                          boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                        }
                      : {
                          scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                          boxShadow: { duration: 0.5, ease: "easeOut" },
                        }
                  }
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background:
                      isPast || isActive ? step.gradient : "#fff",
                    border: `2.5px solid ${isPast || isActive ? step.color : "#cbd5e1"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isPast || isActive ? "#fff" : "#94a3b8",
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                >
                  {isPast ? (
                    <CheckCircleOutlineIcon sx={{ fontSize: 22 }} />
                  ) : (
                    step.icon
                  )}
                </motion.div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      width: 3,
                      flexGrow: 1,
                      minHeight: 20,
                      background:
                        isPast
                          ? `linear-gradient(180deg, ${step.color}, ${steps[index + 1].color})`
                          : "#e2e8f0",
                      borderRadius: 2,
                      transition: "background 0.5s ease",
                    }}
                  />
                )}
              </Box>

              {/* Content card */}
              <Box sx={{ flex: 1, pb: 3 }}>
                <Box
                  sx={{
                    borderRadius: 3,
                    p: 2.5,
                    background: isActive ? "#fff" : "transparent",
                    boxShadow: isActive
                      ? `0 4px 24px ${step.color}15`
                      : "none",
                    border: isActive
                      ? `1px solid ${step.color}20`
                      : "1px solid transparent",
                    transition: "all 0.4s ease",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: step.color,
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    STEP {index + 1}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#0f172a",
                      fontSize: "1.05rem",
                      lineHeight: 1.3,
                      mb: 0.5,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#64748b",
                            lineHeight: 1.7,
                            mt: 1,
                            mb: 2,
                          }}
                        >
                          {step.description}
                        </Typography>

                        {/* Metric */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            mb: 2,
                            p: 1.5,
                            borderRadius: 2,
                            background: `${step.color}08`,
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 800,
                              color: step.color,
                              fontSize: "1.4rem",
                            }}
                          >
                            {step.metric}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#64748b",
                              fontWeight: 600,
                              fontSize: "0.72rem",
                            }}
                          >
                            {step.metricLabel}
                          </Typography>
                        </Box>

                        {/* Deliverables */}
                        <Stack spacing={0.8}>
                          {step.deliverables.map((item, i) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.07 }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <ArrowForwardIcon
                                  sx={{
                                    fontSize: 12,
                                    color: step.color,
                                  }}
                                />
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#475569",
                                    fontSize: "0.8rem",
                                  }}
                                >
                                  {item}
                                </Typography>
                              </Box>
                            </motion.div>
                          ))}
                        </Stack>

                        {/* Value pill */}
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.8,
                            mt: 2,
                            px: 2,
                            py: 0.6,
                            borderRadius: "50px",
                            background: `${step.color}08`,
                            border: `1px solid ${step.color}20`,
                          }}
                        >
                          <VerifiedIcon
                            sx={{ fontSize: 14, color: step.color }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: step.color,
                              fontWeight: 600,
                              fontSize: "0.75rem",
                            }}
                          >
                            {step.value}
                          </Typography>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </Box>
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
}

/* ─── Main Section ─── */
export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Auto-advance step based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Map scroll progress (0.3 -> 0.8) to steps (0 -> 4)
    const mapped = Math.min(
      steps.length - 1,
      Math.max(
        0,
        Math.floor(((progress - 0.3) / 0.4) * steps.length)
      )
    );
    if (mapped >= 0 && mapped !== activeStep) {
      setActiveStep(mapped);
    }
  });

  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  // Parallax for background elements
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <Box
      id="workflow"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #f8fafc 0%, #ffffff 40%, #f8fafc 100%)",
      }}
    >
      {/* ── Dot pattern background ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(4, 120, 87, 0.03) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* Decorative background circles with parallax */}
      <motion.div style={{ y: bgY }}>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "-8%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(4, 120, 87, 0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "5%",
            right: "-5%",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(4, 120, 87, 0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(4, 120, 87, 0.02) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
      </motion.div>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <AnimatedSection>
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="OUR PROCESS"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontSize: "0.75rem",
                  background: "rgba(4, 120, 87, 0.08)",
                  color: "#047857",
                  border: "1px solid rgba(4, 120, 87, 0.18)",
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
              Your Journey to{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #047857 0%, #34d399 50%, #047857 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Transformation
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#64748b",
                maxWidth: 620,
                mx: "auto",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              A proven, structured methodology that takes you from current
              challenges to sustainable success — delivering value at every
              stage.
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
                background: "linear-gradient(90deg, #047857, #34d399)",
                margin: "24px auto 0",
              }}
            />
          </Box>
        </AnimatedSection>

        {/* Journey Visualization */}
        <DesktopJourney
          activeStep={activeStep}
          onStepClick={handleStepClick}
        />
        <MobileJourney
          activeStep={activeStep}
          onStepClick={handleStepClick}
        />
      </Container>
    </Box>
  );
}
