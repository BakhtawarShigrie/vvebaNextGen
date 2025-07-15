'use client';
import BlogCard from '@/shared/components/blogCard';
import CourseSelector from '@/shared/components/courses';
import {HomeAreaAbout} from '@/shared/components/home/about';
import BootcampsStacks from '@/shared/components/home/bootcamps';
import FreelancePlatform from '@/shared/components/home/freelancing';
import TechStackJobs from '@/shared/components/home/jobs';
import PayScale from '@/shared/components/home/payscale';
import TechStackJobsMarket from '@/shared/components/home/marketJobs';
import {HomeProcessArea} from '@/shared/components/home/process';
import {HomeAreaService} from '@/shared/components/home/service';
import Carousel from '@/shared/components/sliderComponent';
import Timeline from '@/shared/components/timeline/Timeline';
import {useEffect} from 'react';

export default function Home() {
 useEffect(() => {
  if (window.location.hash === '#courses-section') {
   const element = document.getElementById('courses-section');
   if (element) {
    setTimeout(() => {
     element.scrollIntoView({behavior: 'smooth'});
    }, 100);
   }
  }
 }, []);
 return (
  <main>
   <Carousel />
   {/* <CourseSelector /> */}
   <HomeProcessArea />
   <HomeAreaService />
   <BlogCard />
   <HomeAreaAbout />
   <PayScale />
   <FreelancePlatform />
   <TechStackJobs />
   {/* <Timeline /> */}
   <BootcampsStacks />
   <TechStackJobsMarket />
  </main>
 );
}
