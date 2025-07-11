'use client';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
   Dialog,
   DialogContent,
   IconButton,
   Button,
   DialogContentText,
   Stack,
   Avatar,
   Typography,
   DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Carousel = () => {
   const router = useRouter();
   const items = useMemo(
    () => [
     {
      id: 0,
      thumbIcon:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-1.jpg',
      image:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-bg-01.jpg',
      details: `Stage 01 is the ideal starting point for passionate beginners looking to become professional frontend developers. It   spans three structured levels. 
     
       Level 01: Students undergo 6 months of intensive, paid training (12 hours/day, 5 days/week), where they learn the complete fundamentals of frontend development. This includes HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and also the best part is data structures to build logic. After completing this core phase, they are provided 2 months of free profile-building support, during which they work on real-world projects to strengthen their portfolio. Upon successful completion of the full 8-month journey—including training and profile projects—students are guaranteed a job at our company with a starting salary of $200/month.
  
       By the 4th month, students must successfully clear a rigorous Data Structures & Algorithms (DSA) assessment, achieving at least 80% marks to demonstrate logic-building and problem-solving abilities.
       In the 5th month, Students must also pass a comprehensive JavaScript test, designed to assess their mastery of core concepts, coding standards, and problem-solving using modern JavaScript.
       In the 6th month, learners move on to develop a customized final project, applying all previously learned technologies with a core emphasis on React.js.
  
       This final phase includes three critical checkpoints: the DSA evaluation, a comprehensive JavaScript proficiency test, and the creation of a customized final project—showcasing the student’s skill set, creativity, and readiness for development roles.
  
       
       Level 02: Students embark on a 6-month deep dive into advanced JavaScript through free training sessions held 4 hours per day. It takes learners from absolute basics to advanced real-world problem solving. It begins with understanding variables (let, const), data types, operators, conditionals, loops, and functions, followed by the concepts of scope, hoisting, and strict mode. Students then progress to working with arrays, objects, destructuring, spread/rest operators, and mastering ES6+ features like arrow functions and classes. Core topics like closures, higher-order functions, and the this keyword build deeper logic-building abilities. DOM manipulation, event handling, form validation, and browser APIs are introduced next to prepare students for frontend interactivity. On the advanced side, the bootcamp covers asynchronous JavaScript with callbacks, promises, and async/await, along with APIs, JSON, local storage, and error handling. Learners dive into the event loop, memory management, modules, data structures, and functional programming. Optional mastery includes topics like debouncing, design patterns, web workers, and introduction to TypeScript, preparing students for any modern JavaScript role with confidence.
       
       Level 03: In our comprehensive React.js bootcamp, students begin by understanding the fundamentals of React, including JSX syntax, functional components, props, and state management using useState. They learn to handle events, render lists, and manage forms through controlled components. As they advance, they explore useEffect for side effects, conditional rendering, routing with React Router, and global state sharing through the Context API. The course also introduces styling techniques using CSS modules, Tailwind, and styled-components, along with custom hooks and error boundaries.
       
       Stage 01 concludes with a fully developed skillset, followed by a guaranteed $200/month salary.`,
      avatar:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-01.jpg',
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
      thumbIcon:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-2.jpg',
      image:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-bg-02.jpg',
      details: `
          To qualify for Stage 02, students must complete all three levels of Stage 01, which provides the essential foundation for modern frontend development:
          
          Level 01: Students undergo 6 months of paid training, mastering HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures—followed by 2 months of free profile project building.
          
          Level 02: Covers the fundamentals of JavaScript, sharpening logic and scripting confidence.
          
          Level 03: Focuses entirely on React.js and Next.js, equipping students with the tools to build high-performance user interfaces and static/dynamic web apps.
          
          Once Stage 01 is completed, students enter Stage 02, a deeper full-stack journey spread across three structured levels—each 6 months long, free, and 4 hours per day:
          
          Level 04: JAMstack Developer – Learn to build fast, secure, and SEO-friendly web applications using modern tools and static-first architecture.
          
          Level 05: MERN Stack Developer – Dive into full-stack development using MongoDB, Express.js, React, and Node.js to build scalable applications.
          
          Level 06: Next.js Specialist – Specialize in professional-grade web development with a focus on performance, routing, rendering, and real-world deployment using Next.js.
          
          Every student completing Stage 02 earns a guaranteed job in our company with a $500/month salary, unlocking career-ready expertise and access to Stage 03 and beyond.`,
      avatar:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-02.jpg',
      title: 'Full Stack Developer',
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
      thumbIcon:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-3.jpg',
      image:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-bg-03.jpg',
      details: `To become a Next.js Specialist in Stage 03, students must first complete all levels of Stage 01 and Stage 02, which together provide the essential groundwork for advanced frontend and full-stack development.
          
          Level 01: 6 months of paid training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures, followed by 2 months of free profile project work.
          
          Level 02: Deep dive into the fundamentals of JavaScript, focusing on scripting, logical thinking, and foundational concepts.
          
          Level 03: Introduction to React.js and Next.js, covering components, UI rendering, and static/dynamic web experiences.
          
          Level 04: JAMstack Developer – Build fast, secure, and SEO-optimized web applications using modern frontend architecture.
          
          Level 05: MERN Stack Developer – Create full-stack web apps using MongoDB, Express.js, React, and Node.js.
          
          Level 06: Next.js Specialist (Basic) – Initial exposure to professional-grade routing, rendering, and performance optimizations using Next.js.
          
          <br/ > <br/ ><b>Now Entering Stage 03: Next.js Specialist</b>
          
          After mastering the fundamentals across both previous stages, students now begin Stage 03:
          
          Level 07: Next.js Specialist, a dedicated 6-month free training (4 hours/day) designed to sharpen expertise in building production-grade, high-performance web applications using Next.js. This stage focuses on real-world development scenarios, working in collaborative environments, and preparing for roles in modern web product teams.
          
          Upon successful completion, every graduate is guaranteed a job at our company with a $1000/month salary, proving their capability to deliver fast, scalable, and professional web applications with industry-ready confidence.`,
      avatar:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-03.jpg',
      title: 'Next.js Specialist',
      topic: '$1,000/month Guaranteed',
      description: [
       'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
       'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
       'Appointments Required for Entry',
       'Eligibility: Intermediate or equivalent',
      ],
     },
     {
      id: 3,
      thumbIcon:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-4.jpg',
      image:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-bg-04.jpg',
      details: `Before entering Stage 04, students must successfully complete all levels of Stage 01, Stage 02, and Stage 03. These foundational stages are essential to prepare learners with the practical development mindset, coding discipline, and real-world project experience required for advanced infrastructure and deployment roles.
          
          Level 01: 6 months of paid training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures, followed by 2 months of free profile projects.
          
          Level 02: Focused on the fundamentals of JavaScript, helping students build strong logical thinking and scripting foundations.
          
          Level 03: Introduces React.js and Next.js, allowing students to build modern, interactive web interfaces and static/dynamic web experiences.
          
          Level 04: JAMstack Developer – Learn static-first, API-driven development focused on speed, security, and scalability.
          
          Level 05: MERN Stack Developer – Build full-stack applications using MongoDB, Express, React, and Node.js.
          
          Level 06: Next.js Specialist (Basic) – Advance your skills in professional-level routing, performance, and full-stack rendering using Next.js.
          
          Level 07: A 6-month specialist-level training focused entirely on mastering high-performance, production-grade applications with Next.js. Students work on real business-grade systems in collaborative environments, readying them for enterprise roles with full deployment capability.
          
          Upon completion: Guaranteed job with $1000/month salary
          
          Now Entering Stage 4: DevOps Engineer
          
          With a strong full-stack and frontend foundation in place, learners now begin Stage 4: DevOps Engineer.
          
          Level 08: This 01-year free training (4 hours/day) is designed to train students in system reliability, automation, deployment workflows, infrastructure management, and operational readiness. Students work in simulated production environments where precision, ownership, and uptime matter most. This stage is structured to develop a DevOps mindset—where students move beyond just writing code and into building the systems that support it. Real-time collaboration, performance monitoring, CI/CD practices, and environment handling are all approached through real-world simulations. 
         
         Alongside job placement, students also become eligible to pursue two globally recognized certifications by Amazon Web Services (AWS):
         🔹 AWS Certified Solutions Architect – Associate, which validates the ability to design and deploy scalable systems on AWS
         🔹 AWS Certified DevOps Engineer – Professional, which confirms expertise in automating infrastructure, monitoring, and continuous delivery in complex cloud environments
         
         These certifications further enhance students' credibility, preparing them for international DevOps roles in high-demand enterprise and cloud-native environments.
         
         Upon successful completion, every student is guaranteed a job at our company with a $1500/month salary, officially stepping into their role as a DevOps Engineer equipped to support global tech ecosystems.`,
      avatar:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-04.jpg',
      title: 'DevOps Engineer',
      topic: '$1,500/month Guaranteed',
      description: [
       'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
       'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
       'Appointments Required for Entry',
       'Eligibility: Intermediate or equivalent',
      ],
     },
     {
      id: 4,
      thumbIcon:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-5.jpg',
      image:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-bg-05.jpg',
      details: `
          To enroll in <b>Stage 5: Microservices Architect,</b> students must complete all levels of Stage 01, Stage 02, Stage 03, and Stage 04. These foundational and professional levels ensure learners have mastered full-stack development, system deployment, and production-grade engineering before moving into scalable backend architecture.
          
          Level 01: 6-month paid training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures. Followed by 2 months of free profile projects.
          
          Level 02: Focused entirely on the fundamentals of JavaScript, developing strong logic and scripting abilities.
          
          Level 03: Introduces React.js and Next.js, enabling students to create dynamic, modern user interfaces.
          
          Level 04: JAMstack Developer – Focus on API-driven, static-first web development using modern tools and architecture.
          
          Level 05: MERN Stack Developer – Build full-stack applications using MongoDB, Express.js, React, and Node.js.
          
          Level 06: Next.js Specialist (Basic) – Learn advanced routing, rendering, and optimization techniques in Next.js.
          
          Level 07: 6-month professional training focused on building real-world, enterprise-level applications using Next.js, along with real deployment practices, teamwork, and performance tuning.
          
          Level 08: Students learn deployment pipelines, automation, system monitoring, and infrastructure management over 01-year of free training (4 hours/day). The program simulates real-time production environments to shape operational maturity. Alongside job placement, students also become eligible to pursue two globally recognized certifications by Amazon Web Services (AWS):
         
         AWS Certified Solutions Architect – Associate
         AWS Certified DevOps Engineer – Professional
          
          Now Entering Stage 5: Microservices Architect
          
          With a powerful full-stack and DevOps foundation, students are now eligible for Stage 5.
          
          Level 09: Microservices Architect a specialized 01-year training (free, 4 hours/day) designed to prepare developers for scalable backend system design and cloud-native architecture. In this stage, students operate in simulated enterprise environments where service-based thinking, team collaboration, and distributed application design are key. This is where coders become system architects.
          Students who complete this stage will also receive a globally recognized certification in Spring Boot Java Microservices, proving their backend and architecture expertise to international employers.
          
          Upon completion, every student is guaranteed a $3000/month job in our company, launching them into elite backend engineering roles where they build, scale, and manage high-demand systems.`,
      avatar:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-05.jpg',
      title: 'Microservices Architect',
      topic: '$3,000/month Guaranteed',
      description: [
       'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
       'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
       'Appointments Required for Entry',
       'Eligibility: Intermediate or equivalent',
      ],
     },
     {
      id: 5,
      thumbIcon:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-6.jpg',
      image:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-bg-06.jpg',
      details: `Before entering Stage 06, students must successfully complete all levels of Stage 01, Stage 02, Stage 03, Stage 04, and Stage 05. These prior stages are essential for shaping a well-rounded tech expert skilled in frontend development, backend architecture, system deployment, and operational engineering.
          
          Level 01: 6 months of paid foundational training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures, followed by 2 months of free portfolio project building
          
          Level 02: Focuses purely on JavaScript fundamentals, covering the essential building blocks of logic and scripting
          
          Level 03: Introduction to React.js and Next.js, enabling development of interactive UIs and dynamic/static websites
          
          Level 04: JAMstack Developer – Learn fast, secure static-first architecture using modern APIs
          
          Level 05: MERN Stack Developer – Build full-stack apps using MongoDB, Express, React, and Node.js
          
          Level 06: Next.js Specialist (Basic) – Dive deeper into routing, server-side rendering, and optimization using Next.js
          
          Level 07: An expert-level 6-month track focused on full product delivery using Next.js, performance tuning, and live deployment strategies
          
          Level 08: 01-year free training in automation, CI/CD pipelines, infrastructure as code, and monitoring systems in production and AWS Certified Solutions Architect – Associate & AWS certified DevOps Engineer.
          
          Level 09: Professional 01-year track focused on scalable, distributed backend systems and service-oriented design, including Spring Boot Java Microservices Certification.
          <br/> <br/>
          Now Entering Stage 06: Blockchain Developer With full-stack, DevOps, and architecture mastery in place, students are now eligible for Stage 6:
          
          Level 10: Blockchain Developer—a highly specialized 04-years track (free, 4 hours/day) focused on building secure, decentralized, and tamper-proof systems that power Web3, fintech, NFTs, smart contracts, and digital identity. This program is not limited to a single certificate or training cycle.
         
         Stage 06 is designed to formally certify students as blockchain professionals, positioning them for leadership roles in the global blockchain industry. After hands-on experience in real-world simulations and decentralized systems, students advance into Level 10, where they earn four globally recognized certifications issued by EC-Council, tailored to diverse professional roles in the blockchain ecosystem:
         
            ECBP – EC-Council Certified Blockchain Professional
            Recommended for: Developers, consultants, architects, and technical managers
            This certification validates end-to-end knowledge of blockchain infrastructure, cryptography, smart contracts, and ecosystem design.
         
            EC-Council Certified Blockchain Developer (CBD)
            Recommended for: Developers, coders, and smart contract engineers
            Focuses on the practical development of blockchain applications, emphasizing security, scalability, and real-world deployment.
         
            CHFI – Computer Hacking Forensic Investigator (Blockchain Forensics Specialization)
            Recommended for: Forensic analysts, law enforcement, and auditors
            Covers blockchain-specific forensic techniques used in investigations, fraud detection, and incident response.
         
            Blockchain for Business Leaders
            Recommended for: CTOs, CEOs, project managers, and innovators
            Equips decision-makers with a strategic understanding of blockchain applications, risks, and opportunities in business.
         
         With these four certifications, our students not only master blockchain technology but also position themselves across technical, forensic, developmental, and executive roles in the industry.
         
         Upon successful completion of all levels and certifications, every student is guaranteed a $4000/month job in our company, marking their entry into the global blockchain economy as a certified, job-ready, and trusted developer.`,
      avatar:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-06.jpg',
      title: 'Blockchain Developer',
      topic: '$4,000/month Guaranteed',
      description: [
       'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
       'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
       'Appointments Required for Entry',
       'Eligibility: Intermediate or equivalent',
      ],
     },
     {
      id: 6,
      thumbIcon:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-7.jpg',
      image:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-bg-07.jpg',
      details: `
          To qualify for Stage 07: AI Engineer, students must complete all levels of Stage 01 through Stage 06. These stages build the full journey—from frontend foundations to backend mastery, system deployment, microservices, and secure blockchain development—equipping learners with the technical depth and real-world experience needed to move into the high-demand field of Artificial Intelligence.
          
          Level 01: Paid 6-month training in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures, followed by 2 months of free profile projects
          
          Level 02: Focused solely on the fundamentals of JavaScript
          
          Level 03: Mastering modern UI with React.js and Next.js
          
          Level 04: JAMstack Developer – static-first, API-powered apps
          
          Level 05: MERN Stack Developer – full-stack web apps
          
          Level 06: Next.js – server-side and hybrid rendering
          
          Level 07: Full product delivery using Next.js as a Next.js Specialist in a real-world team environment Completion Reward: $1000/month job
          
          Level 08: Hands-on deployment, infrastructure automation, monitoring and get Certified Solutions Architect – Associate & certified DevOps Engineer from AWS.
          
          Level 09: Distributed backend systems and certification in Spring Boot Java Microservices
          
          Level 10: Real-world blockchain apps and 4 EC-Council Blockchain certifications 
          
          Now Entering Stage 07: AI Engineer
          
          With a deeply layered skill set built over six progressive stages, students now begin Stage 07:
          
          Level 11: AI Engineer, a specialized 01-Year free training (4 hours/day) designed for those who are ready to build, optimize, and deploy intelligent systems in real production environments. This stage is structured to simulate the workflows of modern AI teams, where engineers are expected to think beyond code—analyzing data, solving abstract problems, and deploying smart, scalable solutions. You’ll face project-level challenges that prepare you for roles in global tech companies working on automation, intelligent products, and decision-making engines. 
         
         This level culminates in a globally respected certification:
         
         🔹 AWS Certified Machine Learning – Specialty
         
         Issued by Amazon Web Services (AWS), this certification validates the ability to design, implement, deploy, and maintain machine learning solutions across the AWS Cloud. It demonstrates deep understanding of data engineering, model training, tuning, and operationalization in real-world environments.
         
         By achieving this credential, students position themselves as AI professionals equipped for global roles in ML engineering, data science, and intelligent product development.
         
         Upon completion of Stage 07, every graduate is guaranteed a job at our company with a $6000/month salary, launching them into one of the most respected, high-paying roles in the global software industry.`,
      avatar:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-07.jpg',
      title: 'AI Engineer',
      topic: '$6,000/month Guaranteed',
      description: [
       'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
       'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
       'Appointments Required for Entry',
       'Eligibility: Intermediate or equivalent',
      ],
     },
     {
      id: 7,
      thumbIcon:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-cart-8.jpg',
      image:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-bg-08.png',
      details: `
          Stage 08 represents one of the most critical, high-responsibility roles in today’s digital world—Cybersecurity Expert. To be eligible for this elite training, students must complete all previous stages (Stage 01 through Stage 07), which collectively equip them with the deep technical foundation, system understanding, and secure development practices required to defend against cyber threats in modern enterprises.
          
          Level 01: Paid 6-month foundation in HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, responsive design, DOM manipulation, AJAX, HTML local storage, JSON, webforms and data structures
          
          Level 02: Focus on JavaScript fundamentals
          
          Level 03: UI mastery with React.js and Next.js
          Followed by 2 months of free portfolio project building
          
          Level 04: JAMstack Developer – static-first, modern APIs
          
          Level 05: MERN Stack Developer – dynamic full-stack apps
          
          Level 06: Next.js – hybrid rendering and scalability
          
          Level 07: Product-grade application building with real-world teamwork using Next.js as a Next.js Specialist
          
          Level 08: CI/CD, automation, infrastructure monitoring, system uptime and AWS Certified Solutions Architect – Associate & AWS certified DevOps Engineer
          
          Level 09: Backend system design, containerization, scalable services with Spring Boot Java Microservices Certification
          
          Level 10: Decentralized systems and smart contract mastery, including 4 Blockchain Certifications from EC-Council
          
          Level 11: Real-world intelligent systems simulation, smart automation logic, working as an AI Engineer and AWS Certified Machine Learning – Specialty
         
          
          Now Entering Stage 8: Cybersecurity Expert
          
          Cybersecurity isn’t optional—it’s the backbone of modern digital ecosystems.
          
         Level 12: Students take on one of the most sensitive and respected roles in tech: defending systems, networks, and organizations from cyber threats. This 05-years free program (4 hours/day) prepares learners to operate in high-risk, high-stakes environments where ethical hacking, penetration testing, and threat response are core responsibilities.
          
         Stage 08, marks the highest achievement in our cybersecurity engineering pathway. This level transforms students into elite cybersecurity experts—equipped to protect digital infrastructures at enterprise and government levels. Upon reaching this stage, students will enter intensive training, live simulations, and red/blue/purple team operations to prepare for a suite of globally recognized certifications issued by EC-Council.
         
            <br/ > <br/ >
            <ul style="margin-left: 20px;">
  <li>
    <strong>CSC – Certified Secure Computer User</strong>
    <p>Fundamental digital safety awareness for end-users.</p>
  </li>
  <li>
    <strong>CND – Certified Network Defender</strong>
    <p>In-depth skills for protecting, detecting, and responding to network threats.</p>
  </li>
  <li>
    <strong>CEH v13 – Certified Ethical Hacker</strong>
    <p>The world’s most respected ethical hacking certification.</p>
  </li>
  <li>
    <strong>CEH Practical – Certified Ethical Hacker (Practical)</strong>
    <p>A performance-based extension of CEH that validates hands-on skills.</p>
  </li>
  <li>
    <strong>ECIH – EC-Council Certified Incident Handler</strong>
    <p>Skills to respond to and manage security incidents in real time.</p>
  </li>
  <li>
    <strong>CHFI – Computer Hacking Forensic Investigator</strong>
    <p>Digital forensics and investigation training for law enforcement, enterprises, and analysts.</p>
  </li>
  <li>
    <strong>CPENT – Certified Penetration Testing Professional</strong>
    <p>Advanced penetration testing certification with live exploit challenges.</p>
  </li>
  <li>
    <strong>LPT – Licensed Penetration Tester</strong>
    <p>One of EC-Council’s most elite red team certifications, reserved for proven professionals.</p>
  </li>
  <li>
    <strong>CCISO – Certified Chief Information Security Officer</strong>
    <p>Strategic leadership certification focused on governance, risk, and enterprise security.</p>
  </li>
  <li>
    <strong>E|CDE – EC-Council Certified DevSecOps Engineer</strong>
    <p>Security automation and DevSecOps specialization across CI/CD pipelines.</p>
  </li>
  <li>
    <strong>CSA (AI Labs) – Certified SOC Analyst</strong>
    <p>Focused on real-time security operations, monitoring, threat hunting, and incident analysis using advanced tools and AI-based SOC platforms.</p>
  </li>
</ul>

          <br/ >
         Upon successful completion of Stage 08, every student is guaranteed a $10,000/month job at our company, entering the global cybersecurity space as a certified, trusted, and battle-tested expert.`,
      avatar:
       'https://vveba.s3.eu-north-1.amazonaws.com/carousel/slider-avatar-08.jpg',
      title: ' Cybersecurity Expert',
      topic: '$10,000/month Guaranteed',
      description: [
       'We train you and ensure a job placement at VVEBA Pvt. Ltd.',
       'Join our FREE Seminar – Reserve your seat now: 📞 +92 319 7167168',
       'Appointments Required for Entry',
       'Eligibility: Intermediate or equivalent',
      ],
     },
    ],
    []
   );


   
   const [isNext, setIsNext] = useState(false);
   const [isPrev, setIsPrev] = useState(false);
   const carouselRef = useRef(null);
   const sliderRef = useRef(null);
   const thumbnailBorderRef = useRef(null);
   const timeRunningRef = useRef();
   const runNextAutoRef = useRef();

   const timeRunning = 3000;
   const timeAutoNext = 10000;

   const showSlider = useCallback((type) => {
      if (!sliderRef.current || !thumbnailBorderRef.current || !carouselRef.current) return;

      const sliderItems = sliderRef.current.children;
      const thumbnailItems = thumbnailBorderRef.current.children;

      if (type === 'next') {
         sliderRef.current.appendChild(sliderItems[0]);
         thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
         setIsNext(true);
      } else {
         const lastSliderIndex = sliderItems.length - 1;
         const lastThumbnailIndex = thumbnailItems.length - 1;

         sliderRef.current.prepend(sliderItems[lastSliderIndex]);
         thumbnailBorderRef.current.prepend(thumbnailItems[lastThumbnailIndex]);
         setIsPrev(true);
      }

      clearTimeout(timeRunningRef.current);
      clearTimeout(runNextAutoRef.current);

      timeRunningRef.current = setTimeout(() => {
         setIsNext(false);
         setIsPrev(false);
      }, timeRunning);

      runNextAutoRef.current = setTimeout(() => {
         showSlider('next');
      }, timeAutoNext);
   }, []);

   const thumbnailNavigation = useCallback((e) => {
      const clickedEl = e.currentTarget;
      const thumbs = thumbnailBorderRef.current.children;
      const currentIndex = Array.from(thumbs).indexOf(clickedEl);

      if (currentIndex === -1) return;

      for (let i = 0; i < currentIndex; i++) {
         sliderRef.current.appendChild(sliderRef.current.children[0]);
         thumbnailBorderRef.current.appendChild(thumbnailBorderRef.current.children[0]);
      }

      setIsNext(true);

      clearTimeout(timeRunningRef.current);
      clearTimeout(runNextAutoRef.current);

      timeRunningRef.current = setTimeout(() => {
         setIsNext(false);
      }, timeRunning);

      runNextAutoRef.current = setTimeout(() => {
         showSlider('next');
      }, timeAutoNext);
   }, [showSlider]);

   useEffect(() => {
      runNextAutoRef.current = setTimeout(() => {
         showSlider('next');
      }, timeAutoNext);

      return () => {
         clearTimeout(timeRunningRef.current);
         clearTimeout(runNextAutoRef.current);
      };
   }, [showSlider]);

   const [dialogOpen, setDialogOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);

   const handleDialogOpen = useCallback((item) => {
      setSelectedItem(item);
      setDialogOpen(true);
   }, []);

   const handleDialogClose = useCallback(() => {
      setDialogOpen(false);
      setSelectedItem(null);
   }, []);

   const processedDetails = useMemo(() => {
      if (!selectedItem) return '';
      return selectedItem.details
         .replace(/Level (\d{2}):/g, '<br /><br /><strong>Level $1:</strong>')
         .replace(/Level (\d):/g, '<br /><br /><strong>Level $1:</strong>');
   }, [selectedItem]);

   const buttonStyles = useMemo(() => ({
      boxShadow: 'none',
      borderRadius: '50px',
      backgroundColor: '#e92e3e',
      '&:hover': {
         backgroundColor: '#363f46',
         color: '#ffffff',
      },
   }), []);

   return (
      <div
         ref={carouselRef}
         className={`carousel ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`}
      >
         <div ref={sliderRef} className="list">
            {items.map((item) => (
               <div key={item.id} className="item">
                  <Image
                     src={item.image}
                     alt={item.title}
                     width={800}
                     height={500}
                     className="carousel-image"
                     priority={item.id === 0} // Only prioritize first image
                  />
                  <div className="content">
                     <div className="title">{item.title}</div>
                     <div className="topic">{item.topic}</div>
                     <ul className="des">
                        {item.description.map((desc, index) => (
                           <li key={index}>{desc}</li>
                        ))}
                     </ul>
                     <div className="buttons">
                        <Button
                           sx={buttonStyles}
                           variant="contained"
                           onClick={() => router.push('/seminar')}
                        >
                           Book Seminar
                        </Button>
                        <Button
                           sx={buttonStyles}
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

         <div ref={thumbnailBorderRef} className="thumbnail">
            {items.map((item) => (
               <div key={item.id} className="item" onClick={thumbnailNavigation}>
                  <Image
                     src={item.thumbIcon}
                     alt={item.title}
                     width={200}
                     height={120}
                     className="thumbnail-image"
                     loading="lazy"
                  />
                  <div className="content">
                     <div className="title" style={{ color: '#363f46' }}>
                        {item.title}
                     </div>
                     <div className="description">{item.topic}</div>
                  </div>
               </div>
            ))}
         </div>

         <div className="arrows">
            <button id="prev" onClick={() => showSlider('prev')}>
               ‹
            </button>
            <button id="next" onClick={() => showSlider('next')}>
               ›
            </button>
         </div>

         <div className="time"></div>

         <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth>
            <DialogContent>
               {selectedItem && (
                  <>
                     <Stack spacing={2} direction="row" alignItems="center">
                        <Avatar
                           src={selectedItem.avatar}
                           alt={selectedItem.title}
                           sx={{ width: 56, height: 56, marginTop: '10px' }}
                        />
                        <div>
                           <Typography variant="h6">
                              {'Stage ' + (selectedItem.id + 1) + ': ' + selectedItem.title}
                           </Typography>
                           <Typography variant="subtitle2" color="text.secondary">
                              {selectedItem.topic}
                           </Typography>
                        </div>
                     </Stack>
                     <DialogContentText
                        sx={{ mt: 2 }}
                        dangerouslySetInnerHTML={{ __html: processedDetails }}
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

export default React.memo(Carousel);