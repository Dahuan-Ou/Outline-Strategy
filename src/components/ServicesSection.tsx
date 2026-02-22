"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
} from "@mui/material";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import GroupsIcon from "@mui/icons-material/Groups";
import DevicesIcon from "@mui/icons-material/Devices";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 32 }} />,
    title: "Business Consulting",
    shortDesc: "Strategic guidance to accelerate your growth.",
    fullDesc:
      "Our seasoned consultants analyse your business landscape, identify opportunities, and craft actionable strategies that drive measurable results. From market entry to operational excellence, we help you make informed decisions with confidence.",
    tags: ["Strategy", "Growth", "Market Analysis"],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
  {
    icon: <SettingsSuggestIcon sx={{ fontSize: 32 }} />,
    title: "Business Process Automation & Optimization",
    shortDesc: "Streamline operations with intelligent automation.",
    fullDesc:
      "We identify bottlenecks in your workflows and implement smart automation solutions that reduce manual effort, minimize errors, and increase throughput. Our optimization frameworks ensure every process delivers peak efficiency.",
    tags: ["Automation", "Efficiency", "Workflow"],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 32 }} />,
    title: "Digital Health Check",
    shortDesc: "Comprehensive audit of your digital ecosystem.",
    fullDesc:
      "Our thorough digital health assessment evaluates your technology stack, security posture, user experience, and digital maturity. We deliver a detailed roadmap highlighting critical gaps and prioritized improvements for your digital transformation.",
    tags: ["Audit", "Security", "Assessment"],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 32 }} />,
    title: "System Integration",
    shortDesc: "Seamlessly connect your business systems.",
    fullDesc:
      "We architect and implement robust integrations between disparate systems, ensuring seamless data flow and unified operations. Whether it's ERP, cloud platforms, or legacy systems, we create a cohesive technology ecosystem that works in harmony.",
    tags: ["API", "Cloud", "Enterprise"],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    title: "CRM Implementation",
    shortDesc: "Build stronger customer relationships.",
    fullDesc:
      "From selection to deployment and beyond, we implement CRM solutions tailored to your business needs. We ensure seamless data migration, user adoption, and process alignment so your teams can nurture leads, close deals, and delight customers.",
    tags: ["Salesforce", "HubSpot", "Customer Success"],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 32 }} />,
    title: "Web & App Development",
    shortDesc: "Craft exceptional digital experiences.",
    fullDesc:
      "Our engineering teams build performant, scalable, and beautiful web applications and mobile apps. Using modern frameworks and best practices, we deliver products that captivate users and drive engagement from concept to launch and beyond.",
    tags: ["React", "Mobile", "Full-Stack"],
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
  },
];

/* ── Floating decorative dots ── */
const bgDots = [
  { top: "8%", left: "5%", size: 6, opacity: 0.12, delay: 0 },
  { top: "15%", right: "8%", size: 4, opacity: 0.1, delay: 0.5 },
  { top: "45%", left: "3%", size: 5, opacity: 0.08, delay: 1 },
  { top: "72%", right: "4%", size: 7, opacity: 0.1, delay: 1.5 },
  { top: "85%", left: "12%", size: 4, opacity: 0.12, delay: 2 },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <Box
      id="services"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 14 },
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Subtle background pattern ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.035) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* ── Floating dots ── */}
      {bgDots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  opacity: dot.opacity,
                  scale: [1, 1.4, 1],
                }
              : {}
          }
          transition={{
            opacity: { duration: 0.6, delay: dot.delay },
            scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: dot.delay },
          }}
          style={{
            position: "absolute",
            top: dot.top,
            left: dot.left,
            right: dot.right,
            width: dot.size,
            height: dot.size,
            borderRadius: "50%",
            background: "#2563eb",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* ── Gradient corner accents ── */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle at 100% 0%, rgba(37, 99, 235, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle at 0% 100%, rgba(37, 99, 235, 0.03) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* ── Section Header ── */}
        <AnimatedSection>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="OUR SERVICES"
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
              Solutions That{" "}
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
                Drive Results
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
              We offer a comprehensive suite of services designed to transform
              your operations, empower your teams, and accelerate your digital
              journey.
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
                background: "linear-gradient(90deg, #2563eb, #60a5fa)",
                margin: "24px auto 0",
              }}
            />
          </Box>
        </AnimatedSection>

        {/* ── Service Cards ── */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card
                    onClick={() =>
                      setExpandedIndex(
                        expandedIndex === index ? null : index
                      )
                    }
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "visible",
                      border: "1px solid",
                      borderColor:
                        expandedIndex === index
                          ? `${service.color}40`
                          : "rgba(15, 23, 42, 0.06)",
                      boxShadow:
                        expandedIndex === index
                          ? `0 20px 60px ${service.color}18`
                          : "0 2px 12px rgba(15, 23, 42, 0.04)",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        borderColor: `${service.color}35`,
                        boxShadow: `0 16px 50px ${service.color}18`,
                      },
                    }}
                  >
                    {/* Top gradient bar — animated width */}
                    <motion.div
                      initial={{ width: "30%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{
                        height: 4,
                        background: service.gradient,
                        borderRadius: "16px 16px 0 0",
                      }}
                    />

                    <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "14px",
                          background: `${service.color}10`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: service.color,
                          mb: 2.5,
                          transition: "all 0.3s ease",
                          ".MuiCard-root:hover &": {
                            background: service.gradient,
                            color: "#fff",
                            boxShadow: `0 4px 20px ${service.color}30`,
                          },
                        }}
                      >
                        {service.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#0f172a",
                          mb: 1.5,
                          fontSize: "1.1rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#64748b",
                          lineHeight: 1.6,
                          mb: 2,
                        }}
                      >
                        {service.shortDesc}
                      </Typography>

                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#475569",
                                lineHeight: 1.7,
                                mb: 2.5,
                                pt: 1.5,
                                borderTop: "1px solid rgba(37, 99, 235, 0.1)",
                              }}
                            >
                              {service.fullDesc}
                            </Typography>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Tags */}
                      <Box
                        sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}
                      >
                        {service.tags.map((tag, tagIdx) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + tagIdx * 0.05 + 0.3 }}
                          >
                            <Chip
                              label={tag}
                              size="small"
                              sx={{
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                background: `${service.color}08`,
                                color: service.color,
                                border: `1px solid ${service.color}20`,
                                height: 26,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  background: `${service.color}15`,
                                  borderColor: `${service.color}40`,
                                },
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>

                      {/* Expand indicator */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 2,
                        }}
                      >
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            background:
                              expandedIndex === index
                                ? "rgba(37, 99, 235, 0.12)"
                                : "rgba(15, 23, 42, 0.04)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.75rem",
                            color:
                              expandedIndex === index ? "#2563eb" : "#94a3b8",
                            transition: "all 0.3s ease",
                          }}
                        >
                          ▼
                        </motion.div>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
