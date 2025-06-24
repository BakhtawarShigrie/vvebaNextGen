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
  borderRadius: 0,
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
   image: '/assets/image/18.jpg',
   videoLink:
    'https://www.youtube.com/embed/FUiu-cdu6mA?si=6ykPCneK0usCEYoH&amp;controls=0',
   author: 'LUNDEV',
   title: 'DESIGN SL',
   topic: 'ANIMAL',
   description: [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi.',
    'Rem magnam nesciunt minima placeat, itaque eum neque officiis unde.',
    'Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde.',
    'Ut, exercitationem eum aperiam illo illum laudantium?',
   ],
  },
  {
   id: 1,
   image: '/assets/image/11.jpg',
   videoLink:
    'https://www.youtube.com/embed/U-nlSTGY6hw?si=zsdECXzqwhtdHD7q&amp;controls=0',
   author: 'HUSNAIN',
   title: 'DESIGN SERVER',
   topic: 'ANIMAL',
   description: [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi.',
    'Rem magnam nesciunt minima placeat, itaque eum neque officiis unde.',
    'Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde.',
    'Ut, exercitationem eum aperiam illo illum laudantium?',
   ],
  },
  {
   id: 2,
   image: '/assets/image/12.jpg',
   videoLink:
    'https://www.youtube.com/embed/FUiu-cdu6mA?si=6ykPCneK0usCEYoH&amp;controls=0',
   author: 'FAWAD',
   title: 'DESIGN APP',
   topic: 'ANIMAL',
   description: [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi.',
    'Rem magnam nesciunt minima placeat, itaque eum neque officiis unde.',
    'Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde.',
    'Ut, exercitationem eum aperiam illo illum laudantium?',
   ],
  },
  {
   id: 3,
   image: '/assets/image/05.jpg',
   videoLink:
    'https://www.youtube.com/embed/FUiu-cdu6mA?si=6ykPCneK0usCEYoH&amp;controls=0',
   author: 'BAKHTAWAR',
   title: 'DESIGN GRAPHICS',
   topic: 'ANIMAL',
   description: [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi.',
    'Rem magnam nesciunt minima placeat, itaque eum neque officiis unde.',
    'Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde.',
    'Ut, exercitationem eum aperiam illo illum laudantium?',
   ],
  },
  {
   id: 4,
   image: '/assets/image/13.jpg',
   videoLink:
    'https://www.youtube.com/embed/FUiu-cdu6mA?si=6ykPCneK0usCEYoH&amp;controls=0',
   author: 'Akeel',
   title: 'DESIGN GRAPHICS',
   topic: 'ANIMAL',
   description: [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi.',
    'Rem magnam nesciunt minima placeat, itaque eum neque officiis unde.',
    'Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde.',
    'Ut, exercitationem eum aperiam illo illum laudantium?',
   ],
  },
 ]);

 const [isNext, setIsNext] = useState(false);
 const [isPrev, setIsPrev] = useState(false);
 const [activeIndex, setActiveIndex] = useState(0);
 const carouselRef = useRef(null);
 const sliderRef = useRef(null);
 const thumbnailBorderRef = useRef(null);
 const timeRunningRef = useRef();
 const runNextAutoRef = useRef();

 const timeRunning = 3000;
 const timeAutoNext = 7000;

 const handleThumbnailClick = (clickedIndex) => {
  if (!sliderRef.current || !thumbnailBorderRef.current) return;

  const sliderItems = Array.from(sliderRef.current.children);
  const thumbnailItems = Array.from(thumbnailBorderRef.current.children);
  const total = sliderItems.length;

  if (clickedIndex === activeIndex) return;

  const nextSteps = (clickedIndex - activeIndex + total) % total;
  const prevSteps = (activeIndex - clickedIndex + total) % total;

  if (nextSteps <= prevSteps) {
   for (let i = 0; i < nextSteps; i++) {
    const firstSlider = sliderItems[0];
    const firstThumbnail = thumbnailItems[0];
    sliderRef.current.appendChild(firstSlider);
    thumbnailBorderRef.current.appendChild(firstThumbnail);
   }
   setIsNext(true);
  } else {
   for (let i = 0; i < prevSteps; i++) {
    const lastSlider = sliderItems[sliderItems.length - 1];
    const lastThumbnail = thumbnailItems[thumbnailItems.length - 1];
    sliderRef.current.prepend(lastSlider);
    thumbnailBorderRef.current.prepend(lastThumbnail);
   }
   setIsNext(false);
  }

  setActiveIndex(clickedIndex);
  clearTimeouts();
  timeRunningRef.current = setTimeout(() => {
   setIsNext(false);
  }, timeRunning);
  resetAutoRotation();
 };

 const clearTimeouts = () => {
  if (timeRunningRef.current) clearTimeout(timeRunningRef.current);
  if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current);
 };

 const resetAutoRotation = () => {
  clearTimeouts();
  runNextAutoRef.current = setTimeout(() => {
   showNextSlide();
  }, timeAutoNext);
 };

 const showNextSlide = () => {
  if (!sliderRef.current || !thumbnailBorderRef.current) return;

  const sliderItems = Array.from(sliderRef.current.children);
  const thumbnailItems = Array.from(thumbnailBorderRef.current.children);
  const firstSliderItem = sliderItems[0];
  const firstThumbnailItem = thumbnailItems[0];

  sliderRef.current.appendChild(firstSliderItem);
  thumbnailBorderRef.current.appendChild(firstThumbnailItem);
  setIsNext(true);
  setActiveIndex((prev) => (prev + 1) % items.length);

  clearTimeouts();
  timeRunningRef.current = setTimeout(() => {
   setIsNext(false);
  }, timeRunning);
  resetAutoRotation();
 };

 useEffect(() => {
  resetAutoRotation();
  return () => clearTimeouts();
 }, []);

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
     <div key={item.id} className="item" data-id={item.id}>
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
     <div
      key={item.id}
      className={`item ${index === activeIndex ? 'active' : ''}`}
      onClick={() => handleThumbnailClick(index)}
     >
      <Image
       src={item.image}
       alt={item.title}
       width={200}
       height={120}
       className="thumbnail-image"
      />
      <div className="content">
       <div className="title">{item.author}</div>
       <div className="description">{item.title}</div>
      </div>
     </div>
    ))}
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
