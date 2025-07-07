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
 DialogContentText,
 Stack,
 Avatar,
 Typography,
 DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Carousel = () => {
 const router = useRouter();
 const [items] = useState([
  {
   id: 0,
   thumbIcon: '/assets/slider_cart-1.jpg',
   image: '/assets/image/01.jpg',
   details: `Stage 1 is the ideal starting point for passionate beginners looking to become professional frontend developers. It spans three structured levels. Level 1, students undergo 6 months of intensive, paid training (12 hours/day, 5 days/week), where they learn the complete fundamentals of frontend development. This includes HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, DOM manipulation, AJAX, responsive design, and an introduction to basic data structures to build logic. After completing this core phase, they are provided 2 months of free profile-building support, during which they work on real-world projects to strengthen their portfolio. Upon successful completion of the full 8-month journey—including training and profile projects—students are guaranteed a job at our company with a starting salary of $200/month. Level 2, Students embark on a 6-month deep dive into advanced JavaScript through free training sessions held 4 hours per day. Level 3, where students explore React.js with real-world single of multiple page applications. Stage 1 concludes with a fully developed skillset and strong project portfolio, followed by a guaranteed $200/month salary.`,
   author: 'Ali Husnain',
   title: 'Junior Frontend Developer',
   topic: '$200/month Guaranteed',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 1,
   thumbIcon: '/assets/slider_cart-2.jpg',
   image: '/assets/image/02.jpg',
   details: `Stage 2 is the advanced track for students who have completed Stage 1 foundational experience. Level 4, where learners specialize as JAMstack Developers. This 6-month program (4 hours/day) dives into the modern architecture of JavaScript, APIs, and Markup, using tools like Next.js, Gatsby, headless CMSs (like Strapi or Sanity), and deployment platforms like Vercel. The focus is on building blazing-fast, secure, and SEO-friendly web applications. In the second path of Level 4, students can instead specialize as MERN Stack Developers, mastering MongoDB, Express.js, React, and Node.js. Level 5, trains students to become Next.js Specialists, teaching advanced features like server- side rendering(SSR), static site generation(SSG), ISR, dynamic routing, authentication, performance tuning, and full deployment pipelines.Real - world, enterprise - grade apps are built throughout this level.By the end of Stage 2, learners are fully equipped to work globally as high - performing frontend or full - stack developers—earning a guaranteed $500 / month salary as they enter the professional world with confidence and specialization.`,
   author: 'HUSNAIN',
   title: 'JAMstack Developer',
   topic: '$500/month Guaranteed',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 2,
   thumbIcon: '/assets/slider_cart-3.jpg',
   image: '/assets/image/03.jpg',
   details:
    'Stage 3 is the elite track for developers ready to specialize in production-grade web applications using Next.js. This 6-month track offers free, high-intensity training for 4 hours each day, focused on pushing you beyond standard coding practices and into expert-level thinking. Throughout the journey, students are placed in realistic product-building scenarios, working on complex problems, collaborating in team environments, and delivering solutions under deadlines. This stage emphasizes quality, speed, reliability, and readiness for global standards. Its not just about writing code—its about building scalable systems, thinking critically, and executing professionally. You`ll be closely mentored, challenged with real workflows, and expected to deliver with confidence. Upon successful completion of the program, every graduate is offered a guaranteed job in our company with a $1000/month salary, reflecting your new status as a specialist. This stage is for those who aim high—and are ready to be treated like true professionals.',
   author: 'FAWAD',
   title: 'Next.js Specialist',
   topic: '$1000/month Guaranteed',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 3,
   thumbIcon: '/assets/slider_cart-4.jpg',
   image: '/assets/image/04.jpg',
   details:
    'Stage 4 is where you transition from skilled developer to full-fledged DevOps engineer, capable of managing the infrastructure, automation, and scalability demands of real-world products. This advanced program spans 6 months of free, focused training (4 hours per day) designed to simulate real-world production environments. It’s not just about writing scripts—it’s about building systems that never go down. You’ll work under realistic pressure, solving live operational challenges and collaborating across simulated cross-functional teams. The training focuses on discipline, accountability, and delivering software that is fast, stable, and secure. As part of the program, you will also be prepared for and awarded a globally recognized AWS Certified DevOps Engineer certification, further validating your expertise on an international level. Upon successful completion of the training and certification, every graduate is guaranteed a job at our company, starting with a $1500/month salary. This stage is for those who are ready to engineer systems that power the world’s best technology—reliably and at scale.',
   author: 'BAKHTAWAR',
   title: 'DevOps Engineer',
   topic: '$1500/month Guaranteed',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 4,
   thumbIcon: '/assets/slider_cart-5.jpg',
   image: '/assets/image/05.jpg',
   details:
    'Stage 5 is the pinnacle of our engineering journey—built for elite developers aiming to lead and architect large-scale distributed systems. Over an intensive 6-month free advanced training program, students dive deep into real-world microservices architecture, service orchestration, and system design—operating at the level required by global enterprises. This stage demands precision, leadership, and the ability to manage complex services across cloud environments. Upon successful completion, every you earns a globally recognized certification in Spring Boot Java Microservices, validating their backend expertise with industry-proven technologies. Graduates are guaranteed a high-paying job in our company with a $3000/month salary, launching them into top-tier roles as backend system architects or microservices specialists. Stage 5 is not just a Bootcamp—it’s a final leap into world-class software engineering.',
   author: 'Akeel',
   title: 'Microservices Architect',
   topic: '$3000/month Guaranteed',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 5,
   thumbIcon: '/assets/slider_cart-6.jpg',
   image: '/assets/image/05.jpg',
   details:
    'Stage 6 is the ultimate destination for developers ready to lead in the world of decentralized technology. This elite-level program prepares you to become a Blockchain Developer, equipped to build secure, transparent, and scalable applications for the future of finance, identity, data, and more. Over the course of this advanced 6-month free bootcamp journey, you’ll work in high-level environments that mirror the blockchain industry’s real demands. From smart contracts to distributed ledgers, this program is tailored for those who want to be on the cutting edge of innovation. Upon successful completion, each employee earns a globally recognized certification from EC-Council, one of the most respected blockchain authorities in the world. Every graduate is also guaranteed a $4000/month job at our company, placing you in a powerful position within one of the most forward-moving sectors of the tech industry. Stage 6 is not just a bootcamp—it’s a launchpad into blockchain leadership.',
   author: 'Akeel',
   title: 'Blockchain Developer',
   topic: '$4000/month Guaranteed',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 6,
   thumbIcon: '/assets/slider_cart-7.jpg',
   image: '/assets/image/05.jpg',
   details:
    'Stage 6 is the ultimate destination for developers ready to lead in the world of decentralized technology. This elite-level program prepares you to become a Blockchain Developer, equipped to build secure, transparent, and scalable applications for the future of finance, identity, data, and more. Over the course of this advanced 6-month free bootcamp journey, you’ll work in high-level environments that mirror the blockchain industry’s real demands. From smart contracts to distributed ledgers, this program is tailored for those who want to be on the cutting edge of innovation. Upon successful completion, each employee earns a globally recognized certification from EC-Council, one of the most respected blockchain authorities in the world. Every graduate is also guaranteed a $4000/month job at our company, placing you in a powerful position within one of the most forward-moving sectors of the tech industry. Stage 6 is not just a bootcamp—it’s a launchpad into blockchain leadership.',
   author: 'Akeel',
   title: 'Blockchain Developer',
   topic: '$4000/month Guaranteed',
   description: [
    'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
    'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
    'Appointments Required for Entry',
    'Eligibility: Intermediate or equivalent',
   ],
  },
  {
   id: 7,
   thumbIcon: '/assets/slider_cart-8.jpg',
   image: '/assets/image/05.jpg',
   details:
    'Stage 6 is the ultimate destination for developers ready to lead in the world of decentralized technology. This elite-level program prepares you to become a Blockchain Developer, equipped to build secure, transparent, and scalable applications for the future of finance, identity, data, and more. Over the course of this advanced 6-month free bootcamp journey, you’ll work in high-level environments that mirror the blockchain industry’s real demands. From smart contracts to distributed ledgers, this program is tailored for those who want to be on the cutting edge of innovation. Upon successful completion, each employee earns a globally recognized certification from EC-Council, one of the most respected blockchain authorities in the world. Every graduate is also guaranteed a $4000/month job at our company, placing you in a powerful position within one of the most forward-moving sectors of the tech industry. Stage 6 is not just a bootcamp—it’s a launchpad into blockchain leadership.',
   author: 'Akeel',
   title: 'Blockchain Developer',
   topic: '$4000/month Guaranteed',
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
 const timeAutoNext = 10000;

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
    const [selectedItem, setSelectedItem] = useState(null);
    const handleDialogOpen = (item) => {
     setSelectedItem(item);
     setdialogOpen(true);
    };

    const handleDialogClose = () => {
     setdialogOpen(false);
     setSelectedItem(null);
    };
    

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
       {/* <div className="author">{item.author}</div> */}
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
         onClick={() => handleDialogOpen(item)}
        >
         Details
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
       src={item.thumbIcon}
       alt={item.title}
       width={200}
       height={120}
       className="thumbnail-image"
      />
      <div className="content">
       <div className="title" style={{color: " #363f46"}}>{item.title}</div>
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

   <Dialog
    open={dialogOpen}
    onClose={handleDialogClose}
    maxWidth="md"
    fullWidth
   >
    <DialogContent>
     {selectedItem && (
      <>
       <Stack spacing={2} direction="row" alignItems="center">
        <Avatar
         src={selectedItem.thumbIcon}
         alt={selectedItem.title}
         sx={{width: 56, height: 56, marginTop: '10px'}}
        />
        <div>
         <Typography variant="h6">
          {'Stage:' + (selectedItem.id + 1) + ' ' + selectedItem.title ||
           'Author N/A'}
         </Typography>
         <Typography variant="subtitle2" color="text.secondary">
          {selectedItem.topic}
         </Typography>
        </div>
       </Stack>
       <DialogContentText
        sx={{mt: 2}}
        dangerouslySetInnerHTML={{
         __html: selectedItem.details
          .replace(/Level 1,/g, '<br /> <br /> <strong>Level 1,</strong>')
          .replace(/Level 2,/g, '<br /> <br /> <strong>Level 2,</strong>')
          .replace(/Level 3,/g, '<br /> <br /> <strong>Level 3,</strong>')
          .replace(/Level 4,/g, '<br /> <br /> <strong>Level 4,</strong>')
          .replace(/Level 5,/g, '<br /> <br /> <strong>Level 5,</strong>'),
        }}
       />
      </>
     )}
    </DialogContent>
    <DialogActions>
     <IconButton
      aria-label="close"
      onClick={handleDialogClose}
      sx={{
       position: 'absolute',
       right: 8,
       top: 8,
       color: (theme) => theme.palette.grey[900],
       zIndex: 1,
      }}
     >
      <CloseIcon />
     </IconButton>
    </DialogActions>
   </Dialog>
  </div>
 );
};

export default Carousel;
