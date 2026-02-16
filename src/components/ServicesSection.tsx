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
import { motion, AnimatePresence } from "framer-motion";
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
    color: "#b8965a",
    gradient: "linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)",
  },
  {
    icon: <SettingsSuggestIcon sx={{ fontSize: 32 }} />,
    title: "Business Process Automation & Optimization",
    shortDesc: "Streamline operations with intelligent automation.",
    fullDesc:
      "We identify bottlenecks in your workflows and implement smart automation solutions that reduce manual effort, minimize errors, and increase throughput. Our optimization frameworks ensure every process delivers peak efficiency.",
    tags: ["Automation", "Efficiency", "Workflow"],
    color: "#b8965a",
    gradient: "linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)",
  },
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 32 }} />,
    title: "Digital Health Check",
    shortDesc: "Comprehensive audit of your digital ecosystem.",
    fullDesc:
      "Our thorough digital health assessment evaluates your technology stack, security posture, user experience, and digital maturity. We deliver a detailed roadmap highlighting critical gaps and prioritized improvements for your digital transformation.",
    tags: ["Audit", "Security", "Assessment"],
    color: "#b8965a",
    gradient: "linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)",
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 32 }} />,
    title: "System Integration",
    shortDesc: "Seamlessly connect your business systems.",
    fullDesc:
      "We architect and implement robust integrations between disparate systems, ensuring seamless data flow and unified operations. Whether it's ERP, cloud platforms, or legacy systems, we create a cohesive technology ecosystem that works in harmony.",
    tags: ["API", "Cloud", "Enterprise"],
    color: "#b8965a",
    gradient: "linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    title: "CRM Implementation",
    shortDesc: "Build stronger customer relationships.",
    fullDesc:
      "From selection to deployment and beyond, we implement CRM solutions tailored to your business needs. We ensure seamless data migration, user adoption, and process alignment so your teams can nurture leads, close deals, and delight customers.",
    tags: ["Salesforce", "HubSpot", "Customer Success"],
    color: "#b8965a",
    gradient: "linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 32 }} />,
    title: "Web & App Development",
    shortDesc: "Craft exceptional digital experiences.",
    fullDesc:
      "Our engineering teams build performant, scalable, and beautiful web applications and mobile apps. Using modern frameworks and best practices, we deliver products that captivate users and drive engagement from concept to launch and beyond.",
    tags: ["React", "Mobile", "Full-Stack"],
    color: "#b8965a",
    gradient: "linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)",
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 10, md: 14 },
        background: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <Chip
              label="OUR SERVICES"
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
              Solutions That Drive Results
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
              We offer a comprehensive suite of services designed to transform
              your operations, empower your teams, and accelerate your digital
              journey.
            </Typography>
          </Box>
        </AnimatedSection>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid
              key={service.title}
              size={{ xs: 12, sm: 6, lg: 4 }}
            >
              <AnimatedSection delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
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
                          : "rgba(28, 25, 23, 0.06)",
                      boxShadow:
                        expandedIndex === index
                          ? `0 12px 40px ${service.color}18`
                          : "0 2px 12px rgba(28, 25, 23, 0.04)",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        borderColor: `${service.color}30`,
                        boxShadow: `0 8px 30px ${service.color}15`,
                      },
                    }}
                  >
                    {/* Top gradient bar */}
                    <Box
                      sx={{
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
                        }}
                      >
                        {service.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#1c1917",
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
                          color: "#78716c",
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
                            transition={{ duration: 0.3 }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#57534e",
                                lineHeight: 1.7,
                                mb: 2.5,
                                pt: 1,
                                borderTop: "1px solid rgba(28, 25, 23, 0.06)",
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
                        {service.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              background: `${service.color}08`,
                              color: service.color,
                              border: `1px solid ${service.color}20`,
                              height: 26,
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
