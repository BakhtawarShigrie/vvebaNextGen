"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Box, Typography, List, ListItem, useTheme } from "@mui/material";
import { education } from "./EducationData";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const theme = useTheme();

  const Details = ({ name, company, year, place, index }) => {
    const itemRef = useRef(null);
    const comesFromLeft = index % 2 !== 0;

    return (
      <ListItem
        ref={itemRef}
        sx={{
          margin: "32px 0",
          // width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          padding: 0,
          alignItems: comesFromLeft ? "flex-start" : "flex-end", // Align based on direction
          textAlign: comesFromLeft ? "left" : "right", // Text alignment
          "&:first-of-type": { marginTop: 0 },
          "&:last-of-type": { marginBottom: 0 },
        }}
      >
        <motion.div
          initial={{
            x: comesFromLeft ? -100 : 100,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          style={{
            width: "80%", // Give some width for better alignment
            maxWidth: "600px" // Optional: prevent too wide on large screens
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: "bold",
              fontSize: "1.25rem",
              textTransform: "capitalize",
              "@media (max-width: 600px)": { fontSize: "1.125rem" },
              "@media (max-width: 400px)": { fontSize: "1rem" },
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontWeight: "medium",
              color: theme.palette.text.secondary,
              textTransform: "capitalize",
              "@media (max-width: 600px)": { fontSize: "0.875rem" },
              "& span": {
                textTransform: "uppercase",
                fontWeight: "bold",
                color: theme.palette.primary.main,
              },
            }}
          >
            {year} | <span>{company}</span> - {place}
          </Typography>
        </motion.div>
      </ListItem>
    );
  };

  return (
    <Box
      id="education"
      sx={{
        width: "100%",
        my: 12,
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
      }}
    >
      <div className="tp-home-4-service-title text-center">
        <span className="tp-section-v_2-title-pre">
          My Learning Journey
        </span>
        <h3 className="tp-section-title">
          Key milestones and Timeline 
        </h3>
      </div>
      <Box
        ref={ref}
        sx={{
          width: "100%",
          margin: "0 auto",
          position: "relative",
          padding: {
            xs: "30px",
           sm: "160px"
          }
        }}
      >
        <motion.div
          sx={{
            position: "absolute",
            left: "50%", // Center the timeline
            transform: "translateX(-50%)",
            top: "2px",
            width: "4px",
            height: "100%",
            background: theme.palette.primary.light,
            originTop: 0,
            "@media (max-width: 600px)": {
              width: "2px",
            },
          }}
          style={{ scaleY: scrollYProgress }}
        />
        <List
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {education.map((educationFact, index) => (
            <Details
              key={educationFact.name}
              name={educationFact.name}
              company={educationFact.company}
              year={educationFact.year}
              place={educationFact.address}
              index={index}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Education;