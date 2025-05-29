"use client"
import BlogCard from '@/shared/components/blogCard';
import CourseSelector from '@/shared/components/courses';
import {HomeAreaAbout} from '@/shared/components/home/about';
import {HomeFeatureArea} from '@/shared/components/home/features';
import {HeroSection} from '@/shared/components/home/hero';
import {HomeProcessArea} from '@/shared/components/home/process';
import {HomeAreaService} from '@/shared/components/home/service';
import {HomeAreaTestimonial} from '@/shared/components/home/testimonial';
import Slider from '@/shared/components/slider';
import Carousel from '@/shared/components/sliderComponent';
import Education from '@/shared/components/timeline/Education/Education';
import { sliderData } from '@/shared/constants/slidesData';
import { Box } from '@mui/material';
import { useEffect } from 'react';

export default function Home() {
     useEffect(() => {
      if (window.location.hash === '#courses-section') {
       const element = document.getElementById('courses-section');
       if (element) {
        // Small timeout to ensure page is loaded
        setTimeout(() => {
         element.scrollIntoView({behavior: 'smooth'});
        }, 100);
       }
      }
     }, []);
 return (
  <main>
         {/* <Slider slides={sliderData} /> */}
    <Carousel />
         
   <Box
    id="courses-section"
    sx={{
     display: 'flex',
     flexDirection: 'column',
     marginBottom: '150px',
     padding: {
      xs: 0, // No padding on mobile
      md: '60px', // 60px padding on desktop (md breakpoint and up)
     },
    }}
   >
    <div className="tp-hero-4-title-wrapper ">
     <h2 className="tp-hero-title ">Course Details</h2>
    </div>
    <CourseSelector />
   </Box>
   <HomeAreaAbout />
   <HomeAreaService />
   {/* <HomeFeatureArea /> */}
   {/* <HomeAreaTestimonial /> */}
   <HomeProcessArea />
   <Box
    className="tp-home-4-service-area"
    sx={{
     padding: {
      xs: 0, // No padding on mobile
      md: '60px', // 60px padding on desktop (md breakpoint and up)
     },
    }}
   >
    <BlogCard />
   </Box>
   <Education />
  </main>
 );
}
