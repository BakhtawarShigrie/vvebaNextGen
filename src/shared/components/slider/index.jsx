import React, { Fragment, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = ({ slides }) => {
    const [active, setActive] = useState(0);

    const handleNavigation = (direction) => {
        setActive((current) => {
            const newIndex = current + direction;
            if (newIndex < 0) return slides.length - 1; // Loop to last slide
            if (newIndex >= slides.length) return 0; // Loop to first slide
            return newIndex;
        });
    };

    return (
        <Fragment>
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height:"auto",// Fixed height at 100% of the viewport
                overflow: "hidden",
                marginBottom:"20px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "100%", // Ensure full height for the content
                }}
            >
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: index === active ? "block" : "none",
                            width: "100%",
                            height: "100%", // Ensure slides take up the full height
                        }}
                    >
                        {slide}
                    </Box>
                ))}
            </Box>

            {/* Left Navigation */}
        </Box>
            <IconButton
                onClick={() => handleNavigation(-1)}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            {/* Right Navigation */}
            <IconButton
                onClick={() => handleNavigation(1)}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Fragment>
    );
};

export default Slider;
