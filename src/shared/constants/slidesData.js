import { Box, Typography } from "@mui/material";
import { HeroSection } from "../components/home/hero";

export const sliderData = [
 <HeroSection />,
 <Box
  class
  sx={{
   display: 'flex',
   flexDirection: {xs: 'column', md: 'row'}, // Stack on small screens
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: 4,
   padding: 4,
   maxWidth: '1200px',
   margin: 'auto',
   marginTop: '60px',
   paddingBottom: '100px',
  }}
 >
  {/* Left Content */}
  <Box sx={{flex: 1, textAlign: {xs: 'center', md: 'left'}}}>
   <Typography variant="h4" component="h1" gutterBottom>
    Project Title
   </Typography>
   <Typography variant="body1">
    This is the project description. It provides an overview of the project’s
    purpose, features, and other details that might interest the viewer.This is
    the project description. It provides an overview of the project’s purpose,
    features, and other details that might interest the viewer.
   </Typography>
  </Box>

  {/* Right Content */}
  <Box sx={{flex: 1}}>
   <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/EIc2MK-EV1E?si=pTjeugwvkv8A3U-V"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
   ></iframe>
  </Box>
 </Box>,

 <Box
  class
  sx={{
   display: 'flex',
   flexDirection: {xs: 'column', md: 'row'}, // Stack on small screens
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: 4,
   padding: 4,
   maxWidth: '1200px',
   margin: 'auto',
   marginTop: '60px',
   paddingBottom: '100px',
  }}
 >
  <Box sx={{flex: 1}}>
   <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
   ></iframe>
  </Box>

  <Box sx={{flex: 1, textAlign: {xs: 'center', md: 'left'}}}>
   <Typography variant="h4" component="h1" gutterBottom>
    Project Title
   </Typography>
   <Typography variant="body1">
    This is the project description. It provides an overview of the project’s
    purpose, features, and other details that might interest the viewer.This is
    the project description. It provides an overview of the project’s purpose,
    features, and other details that might interest the viewer.
   </Typography>
  </Box>
 </Box>,
];