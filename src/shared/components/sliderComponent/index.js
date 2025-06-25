'use client';
import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

import {
 Box,
 Dialog,
 DialogContent,
 IconButton,
 Button,
 useTheme,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const FullScreenDialog = styled(Dialog)(({theme}) => ({
 '& .MuiDialog-container': {
  padding: 0,
  margin: 0,
  alignItems: 'flex-start',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
 },
 '& .MuiDialog-paper': {
  margin: 0,
  width: '100%',
  height: '100%',
  maxWidth: 'none',
  maxHeight: 'none',
  borderRadius: 0, // Remove rounded corners for true fullscreen
  transition: theme.transitions.create(['transform', 'opacity'], {
   easing: theme.transitions.easing.easeInOut,
   duration: theme.transitions.duration.enteringScreen,
  }),
 },
 '& .MuiDialog-paperWidthSm': {
  maxWidth: 'none',
 },
}));

const Carousel = () => {
 const router = useRouter();
 const [items] = useState([
  {
   id: 0,
   image: '/assets/image/01.jpg',
   videoLink:
    'https://www.youtube.com/embed/FUiu-cdu6mA?si=6ykPCneK0usCEYoH&amp;controls=0',
   author: 'LUNDEV',
   title: 'Frontend Developer',
   topic: '$500 Per Month',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 1,
   image: '/assets/image/02.jpg',
   videoLink:
    'https://www.youtube.com/embed/U-nlSTGY6hw?si=zsdECXzqwhtdHD7q&amp;controls=0',
   author: 'HUSNAIN',
   title: 'Full-Stack Developer',
   topic: '$1000 Per Month',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 2,
   image: '/assets/image/03.jpg',
   videoLink:
    'https://www.youtube.com/embed/FUiu-cdu6mA?si=6ykPCneK0usCEYoH&amp;controls=0',
   author: 'FAWAD',
   title: 'DevOPS Consultant',
   topic: '$1500 Per Month',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 3,
   image: '/assets/image/04.jpg',
   videoLink:
    'https://www.youtube.com/embed/FUiu-cdu6mA?si=6ykPCneK0usCEYoH&amp;controls=0',
   author: 'BAKHTAWAR',
   title: 'Salesforce Consultant',
   topic: '$2000 Per Month',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 4,
   image: '/assets/image/05.jpg',
   videoLink:
    'https://www.youtube.com/embed/FUiu-cdu6mA?si=6ykPCneK0usCEYoH&amp;controls=0',
   author: 'Akeel',
   title: 'Blockchain Consultant',
   topic: '$1000 Per Month',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
 ]);

 const [isNext, setIsNext] = useState(false);
 const [isPrev, setIsPrev] = useState(false);
 const carouselRef = useRef(null);
 const sliderRef = useRef(null);
 const thumbnailBorderRef = useRef(null);
 const timeRunningRef = useRef();
 const runNextAutoRef = useRef();

 const timeRunning = 3000;
 const timeAutoNext = 7000;

 const showSlider = (type) => {
  if (!sliderRef.current || !thumbnailBorderRef.current || !carouselRef.current)
   return;

  const sliderItems = Array.from(sliderRef.current.children);
  const thumbnailItems = Array.from(thumbnailBorderRef.current.children);

  if (type === 'next') {
   // Move first item to end
   const firstSliderItem = sliderItems[0];
   const firstThumbnailItem = thumbnailItems[0];

   sliderRef.current.appendChild(firstSliderItem);
   thumbnailBorderRef.current.appendChild(firstThumbnailItem);
   setIsNext(true);
  } else {
   // Move last item to beginning
   const lastSliderItem = sliderItems[sliderItems.length - 1];
   const lastThumbnailItem = thumbnailItems[thumbnailItems.length - 1];

   sliderRef.current.prepend(lastSliderItem);
   thumbnailBorderRef.current.prepend(lastThumbnailItem);
   setIsPrev(true);
  }

  // Clear existing timeouts
  if (timeRunningRef.current) clearTimeout(timeRunningRef.current);
  if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current);

  // Remove animation classes after delay
  timeRunningRef.current = setTimeout(() => {
   setIsNext(false);
   setIsPrev(false);
  }, timeRunning);

  // Auto-advance to next slide
  runNextAutoRef.current = setTimeout(() => {
   showSlider('next');
  }, timeAutoNext);
 };

 // Initialize auto-rotation
 useEffect(() => {
  runNextAutoRef.current = setTimeout(() => {
   showSlider('next');
  }, timeAutoNext);

  return () => {
   if (timeRunningRef.current) clearTimeout(timeRunningRef.current);
   if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current);
  };
 }, []);

 // Implement direct thumbnail click navigation
 const thumbnailNavigation = (e) => {
  const clickedEl = e.currentTarget;

  const thumbs = Array.from(thumbnailBorderRef.current.children);
  const currentIndex = thumbs.findIndex((el) => el === clickedEl);

  if (currentIndex === -1) return;

  // Rotate slider and thumbnails to bring clicked index to front
  for (let i = 0; i < currentIndex; i++) {
   sliderRef.current.appendChild(sliderRef.current.children[0]);
   thumbnailBorderRef.current.appendChild(
    thumbnailBorderRef.current.children[0]
   );
  }

  setIsNext(true);

  if (timeRunningRef.current) clearTimeout(timeRunningRef.current);
  if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current);

  timeRunningRef.current = setTimeout(() => {
   setIsNext(false);
  }, timeRunning);

  runNextAutoRef.current = setTimeout(() => {
   showSlider('next');
  }, timeAutoNext);
 };

 //  // Add state for video dialog

 const [dialogOpen, setdialogOpen] = useState(false);
 const [currentVideo, setCurrentVideo] = useState('');

 const handleVideoDialog = (videoLink) => {
  setdialogOpen(true);
  setCurrentVideo(videoLink);
 };

 const handleDialogClose = () => {
  setdialogOpen(false);
  setCurrentVideo('');
 };

 const theme = useTheme();

 return (
  <div
   ref={carouselRef}
   className={`carousel ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`}
  >
   {/* Main list */}
   <div ref={sliderRef} className="list">
    {items.map((item) => (
     <div key={item.id} className="item">
      <Image
       src={item.image}
       alt={item.title}
       width={800}
       height={500}
       className="carousel-image"
      />
      <div className="content">
       <div className="author">{item.author}</div>
       <div className="title">{item.title}</div>
       <div className="topic">{item.topic}</div>
       <ul className="des">
        {item.description.map((desc, index) => (
         <li key={index}>{desc}</li>
        ))}
       </ul>
       <div className="buttons">
        <Button
         sx={{
          boxShadow: 'none',
          borderRadius: '50px',
          backgroundColor: '#e92e3e',
          '&:hover': {
           backgroundColor: '#363f46',
           color: '#ffffff',
          },
         }}
         variant="contained"
         onClick={() => router.push('/seminar')}
        >
         Book Seminar
        </Button>
        <Button
         sx={{
          boxShadow: 'none',
          borderRadius: '50px',
          backgroundColor: '#e92e3e',
          '&:hover': {
           backgroundColor: '#363f46',
           color: '#ffffff',
          },
         }}
         variant="contained"
         onClick={() => handleVideoDialog(item.videoLink)}
        >
         Demo Video
        </Button>
       </div>
      </div>
     </div>
    ))}
   </div>

   {/* Thumbnail navigation */}
   <div ref={thumbnailBorderRef} className="thumbnail">
    {items.map((item, index) => (
     <div key={item.id} className="item" onClick={thumbnailNavigation}>
      <Image
       src={item.image}
       alt={item.title}
       width={200}
       height={120}
       className="thumbnail-image"
      />
      <div className="content">
       <div className="title">{item.title}</div>
       <div className="description">{item.topic}</div>
      </div>
     </div>
    ))}
   </div>

   {/* Navigation arrows */}
   <div className="arrows">
    <button id="prev" onClick={() => showSlider('prev')}>
     ‹
    </button>
    <button id="next" onClick={() => showSlider('next')}>
     ›
    </button>
   </div>

   {/* Time indicator */}
   <div className="time"></div>

   {/* Video Dialog */}

   <FullScreenDialog
    open={dialogOpen}
    onClose={handleDialogClose}
    maxWidth="md"
    fullWidth
   >
    <DialogContent sx={{p: 0, position: 'relative', height: '70vh'}}>
     <IconButton
      aria-label="close"
      onClick={handleDialogClose}
      sx={{
       position: 'absolute',
       right: 8,
       top: 8,
       color: (theme) => theme.palette.common.white, // White icon for contrast
       backgroundColor: (theme) => theme.palette.primary.main, // Primary color background
       '&:hover': {
        backgroundColor: (theme) => theme.palette.primary.dark, // Darker on hover
       },
       zIndex: 1,
       borderRadius: '50%', // Makes it circular
       width: 50, // Fixed width
       height: 50, // Fixed height (same as width for perfect circle)
       padding: 0, // Remove default padding
      }}
     >
      <CloseIcon />
     </IconButton>
     <Box
      sx={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       height: '100%',
      }}
     >
      {currentVideo && (
       <iframe
        src={currentVideo}
        width="100%"
        height="100%"
        style={{border: 'none'}}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       />
      )}
     </Box>
    </DialogContent>
   </FullScreenDialog>
  </div>
 );
};

export default Carousel;
