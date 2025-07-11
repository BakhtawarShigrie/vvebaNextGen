'use client';
import React, {useState} from 'react';
import {
 List,
 ListItem,
 ListItemButton,
 ListItemText,
 Tabs,
 Tab,
 Typography,
 Paper,
 Table,
 TableContainer,
 TableRow,
 Box,
} from '@mui/material';

import Image from 'next/image';

export default function TechStackDashboard() {
 const [activeSidebarItem, setActiveSidebarItem] = useState('Web Development');
 const [activeTab, setActiveTab] = useState(0);

 // Data structure for sidebar items and their associated tab content
 const sidebarItems = {
  'Web Development': {
   color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Upwork is a top freelancing platform where programmers and software engineers find remote jobs and long-term contracts. From web and mobile app development to AI and DevOps, it connects tech talent with global clients, offering secure payments and flexible work.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Web developers on Fiverr offering HTML, CSS, JavaScript, and Bootstrap services face a competitive but in-demand market. Basic front-end gigs are crowded, but those providing clean, responsive designs focused on user experience, performance, and modern CSS frameworks like Tailwind or Materialize can still stand out. Combining strong technical skills with up-to-date design trends helps these developers attract clients and succeed despite high competition.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Freelancers offering HTML, CSS, JS, Bootstrap, and other CSS library services face tough competition on Freelancer.com. Basic front-end gigs are oversaturated, but those with strong portfolios, fast delivery, and modern, responsive designs still attract clients. Success depends on quality, communication, and staying updated with design trends like Tailwind CSS and sleek UI animations.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Web developer on PeoplePerHour skilled in HTML, CSS, JavaScript, Bootstrap, and CSS libraries like Tailwind. Offers beginner services from $10–$15/hr focusing on responsive design and bug fixes. Expert services from $40–$60/hr include full website builds, UI/UX, and performance optimization. Delivers clean code, fast load times, and mobilefriendly layouts tailored to client needs.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Skilled web developer on Guru with expertise in HTML, CSS, JavaScript, Bootstrap, and modern CSS libraries like Tailwind and Materialize. Specializes in creating responsive, clean, and user-friendly websites tailored to client needs. Delivers pixel-perfect layouts, optimized performance, and cross-browser compatibility. Committed to quality code, timely delivery, and continuous learning to stay updated with the latest web design trends.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/web-guru2.png',
     },
    };

    return {
     title: `Web Development in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Web Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },
  'JavaScript Developer': {
   color: 'linear-gradient(-90deg, #6929C5,rgb(194, 173, 223))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'JavaScript Developer on Upwork with extensive experience in building dynamic, interactive web applications. Expert in ES6+, DOM manipulation, event handling, and API integration. Skilled at writing clean, efficient, and maintainable code to deliver high-quality solutions on time. Dedicated to optimizing performance and enhancing user experience, capable of handling projects of various sizes with professionalism and attention to detail.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'JavaScript Developer on Fiverr operate in a competitive yet high-demand environment. Success depends on clear gig descriptions, fast delivery, strong communication, and positive reviews. Beginners may earn $10–$25 per gig for basic tasks, while experienced developers offering advanced solutions like custom scripts or API integration can earn $50–$200+ per project. Consistency, skill, and client satisfaction are key to growth.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JavaScript Developer on Freelancer.com must compete with global talent, requiring strong proposals, a clear profile, and a solid portfolio to win bids. Success depends on fast communication, meeting deadlines, and maintaining high client ratings. Building trust, starting with small tasks, and delivering quality work are key to gaining long-term clients and higher-paying projects.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'PeoplePerHour.com features skilled JavaScript Developer offering a wide range of services including custom scripts, dynamic web features, form validation, and interactive UI enhancements. You can view ratings, reviews, and hire by the hour or project for reliable, efficient coding solutions tailored to your needs.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Guru.com hosts experienced JavaScript Developer who specialize in creating dynamic, interactive, and responsive web solutions. From fixing bugs and optimizing code to developing custom features and enhancing user interfaces, freelancers offer reliable services tailored to your project needs. You can review portfolios, compare quotes, and hire with confidence through secure payment options.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/javascript-guru2.png',
     },
    };

    return {
     title: `JavaScript Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About JavaScript Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },
  'Front-End Developer': {
   color: 'linear-gradient(-90deg, #2B5E5E,rgb(110, 187, 187))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Upwork offers a wide range of skilled frontend developers specializing in React, HTML, CSS, and JavaScript to create responsive, user-friendly web interfaces. They build visually appealing and interactive websites and applications. Clients can review portfolios and ratings to hire experts for projects of any size, ensuring quality results delivered on time and within budget.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a wide range of frontend developers skilled in creating responsive, visually appealing websites using HTML, CSS, JavaScript, and frameworks like React. Freelancers provide services such as website design, UI enhancements, and bug fixes. Clients can choose from various packages based on budget and project needs, with many developers offering quick turnaround times and reliable communication, making Fiverr a popular platform for affordable and efficient frontend development.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Freelancer.com connects clients with talented frontend developers skilled in HTML, CSS, JavaScript, and React. These freelancers create responsive, interactive, and visually appealing websites and applications. They offer services such as website design, UI enhancements, bug fixes, and custom feature development. Clients can browse portfolios, review ratings, and post projects to receive competitive bids, ensuring they hire the right developer for quality, timely, and affordable frontend solutions.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'PeoplePerHour links clients with talented frontend developers skilled in HTML, CSS, JavaScript, and React to build responsive, user-friendly websites. These freelancers provide services including website design, UI enhancements, and bug fixes. Clients can review profiles and feedback, then hire experts for projects of any scale, ensuring high-quality work delivered on time.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Guru.com offers access to skilled frontend developers proficient in HTML, CSS, JavaScript, and React. These experts create responsive, interactive, and visually appealing websites tailored to client needs. Clients can browse detailed profiles, portfolios, and reviews to find the right developer. Guru’s secure platform ensures reliable communication, timely delivery, and quality results for projects of all sizes.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/frontend-guru2.png',
     },
    };

    return {
     title: `Front-End Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Front-End Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },
  'JAM-stack Developer': {
   color: 'linear-gradient(-90deg, #4B93E9,rgb(135, 179, 232))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    // 'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/jamStack-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/jamStack-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/jamStack-freelancer1.png',
     },
     //  'PEOPLEPERHOUR.com': {
     //   shortDescription: 'Not Included',
     //   imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/images-placeholder.png',
     //  },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/jamStack-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/jamStack-guru2.png',
     },
    };

    return {
     title: `JAM-stack Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About JAM-stack Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'MERN-Stack Developer': {
   color: 'linear-gradient(-90deg, #9F1D53,rgb(206, 122, 157))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'MERN stack developers on Upwork build full-stack web applications using MongoDB, Express.js, React, and Node.js. They create dynamic, scalable, and responsive apps tailored to client needs, integrating APIs and ensuring optimal performance. Ideal for startups and businesses looking for modern, maintainable solutions that enhance user experience and drive growth.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'MERN stack developers on Fiverr specialize in building complete web applications using MongoDB, Express.js, React, and Node.js. They develop secure, fast, and scalable solutions tailored to each client’s needs. From crafting sleekuser interfaces to building powerful backend APIs and managing databases, they deliver end-to-end services ideal for startups, e-commerce stores, portfolios, and custom business platforms.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'MERN stack developers on Freelancer.com enjoy flexible work conditions, choosing their own hours, rates, and projects. They bid on jobs ranging from small bug fixes to full-stack app development. Success depends on strong portfolios, client communication, and competitive pricing. With growing demand for JavaScript-based solutions, MERNdevelopers often find steady, well-paying opportunities—especially with positive reviews and consistent delivery.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'PeoplePerHour features MERN stack developers skilled in MongoDB, Express.js, React, and Node.js for building full-stack web applications. These developers handle everything from frontend interfaces to backend APIs, offering scalable and dynamic solutions. Clients can review freelancer profiles, ratings, and portfolios to hire professionals for projects of various sizes, ensuring quality work delivered on time.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'On Guru.com, MERN stack developers charge $40 to $150 per hour based on experience and project complexity. Beginners start around $20 per hour, while experts earn higher rates. Fixed-price projects can exceed $1,000 depending on scope. Skilled developers with strong portfolios and good reviews can secure well-paying jobs and grow their freelance careers on the platform.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/mern-guru2.png',
     },
    };

    return {
     title: `MERN-Stack Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About MERN-Stack Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Next.js Specialist': {
   color: 'linear-gradient(-90deg, #E74B54,rgb(225, 173, 176))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Next.js specialists on Upwork build fast, SEO-friendly React applications with server-side rendering and static site generation. They develop scalable, dynamic websites and web apps, optimizing performance and user experience. Their skills include API integration, routing, and deployment on platforms like Vercel and AWS, helping clients deliver modern, efficient web solutions.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'A Next.js specialist on Fiverr delivers high-performance, SEO-friendly web solutions using modern React-based development. They build responsive landing pages, static or dynamic websites, and handle API integration and deployment. Offering clear package options and fast delivery, they serve startups and businesses seeking scalable, efficient, and user-focused web applications.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Next.js specialists on Freelancer build fast, dynamic, and SEO-optimized websites using React-based architecture. They handle tasks like static site generation, server-side rendering, API integration, and responsive design. Clients hire them for projects ranging from landing pages to full-scale web apps, valuing their ability to deliver scalable, efficient, and modern digital solutions.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Next.js developers on PeoplePerHour are in steady demand, with opportunities ranging from quick one-off tasks to full-time roles in complex applications. Freelancers offer services such as building landing pages, integrating APIs, and developing full-stack applications using Next.js. Rates vary based on experience and project complexity, with some freelancers offering services starting at $15 per hour.',

      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Next.js developers on Guru.com offer services like building SEO-friendly, high-performance web apps using React. They handle landing pages, API integrations, and full-stack solutions. Clients seek scalable and modern websites. Beginners may start with lower rates to build credibility, while experienced developers charge premium rates for complex projects. Guru.com provides solid freelance opportunities for all skill levels.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/next-guru2.png',
     },
    };

    return {
     title: `Next.js Specialist in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Next.js Specialist ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'React Native Developer': {
   color: 'linear-gradient(-90deg, #520A09,rgb(183, 121, 120))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'React Native developers on Upwork work remotely on varied projects like app development, bug fixes, and feature additions. They handle multiple clients, often across different time zones, requiring good communication and time management. Success relies on a strong portfolio, positive reviews, and clear proposals. Upwork’s tools for milestone payments and dispute resolution help ensure secure and professional collaborations in a competitive freelance market.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'React Native developers on Fiverr face high competition with many offering services from bug fixes to full app development. Prices range from $20 for small tasks to $2000+ for complex apps. New sellers often offer lower rates to build reviews. Clients expect quality and quick delivery. Success requires good portfolios, niche gigs, and clear communication. Fiverr’s milestone system protects both buyers and sellers.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'React Native developers on Freelancer face strong global competition with varied skill levels. Projects range from small bug fixes $50+ to full apps $1000+. Clients expect timely delivery and clear communication. New freelancers often bid low to build reputation. Success depends on strong portfolios, good reviews, and bidding smartly. Freelancer’s milestone system ensures secure payments for both parties.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'React Native developers on PeoplePerHour face moderate competition with a mix of beginners and experienced freelancers. Projects range from simple bug fixes to full app development. Rates typically start at $15/hour for beginners and go up to $70+/hour for experts. Clients expect timely delivery and clear communication. Success depends on a strong profile, good reviews, and competitive pricing. Milestone payments protect both parties.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'React Native developers on Guru.com offer services ranging from bug fixes to full app development. The platform hosts a mix of beginners and experienced professionals. Clients look for clear communication, timely delivery, and clean code. Developers with strong portfolios, positive reviews, and niche expertise stand out. Guru’s SafePay system provides secure project payments and builds trust between clients and freelancers.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/reactN-guru2.png',
     },
    };

    return {
     title: `React Native Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About React Native Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'DevOps Engineer': {
   color: 'linear-gradient(-90deg, #3B7F39,rgb(144, 200, 143))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'A DevOps Engineer bridges the gap between development and operations, ensuring smooth code deployment, automation, and system reliability. They manage CI/CD pipelines, monitor infrastructure, and optimize performance. Skilled in tools like Docker, Kubernetes, Jenkins, and cloud platforms, DevOps engineers enhance collaboration, speed up releases, and maintain system stability across development lifecycles.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'DevOps services on Fiverr include CI/CD setup, Dockerization, cloud deployment, Kubernetes, and server automation. Freelancers offer tiered packages, making it easy for clients to choose based on needs. DevOps gigs range from basic setups to full-scale infrastructure management. With clear scopes and fast delivery, Fiverr is a growing platform for DevOps professionals to offer targeted, efficient solutions to startups and businesses.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Beginner DevOps engineers on Freelancer typically charge between $20 to $30 per hour, depending on their skills and project complexity. They often begin with smaller tasks such as setting up CI/CD pipelines, configuring cloud servers, writing basic automation scripts, or deploying simple applications. Early success depends on submitting strong proposals, delivering work promptly, and maintaining clear communication with clients. Positive reviews enhance profile visibility and build client trust. As they gain experience and develop a solid reputation, beginners can gradually increase their hourly rates, attract more advanced projects, and steadily expand their freelance career and earnings over time, establishing themselves as reliable professionals in the field.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'DevOps engineers on PeoplePerHour offer services like CI/CD setup, cloud infrastructure management, automation scripting, and containerization with Docker or Kubernetes. Clients post projects, and freelancers bid competitively. The platform suits both short and long-term work, allowing DevOps professionals to build reputations, showcase skills, and grow through diverse projects. Reliable communication and timely delivery help secure repeat clients.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'On Guru.com, DevOps engineers offer services like CI/CD pipeline setup, cloud infrastructure management, automation, containerization, and system monitoring. They bid on projects that range from short-term tasks to longterm contracts. The platform enables freelancers to showcase their skills, build strong portfolios, and connect with clients globally. Success is driven by clear communication, timely delivery, and positive feedback, helping DevOps professionals steadily grow their freelance careers.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/devOpps-guru2.png',
     },
    };

    return {
     title: `DevOps Engineer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About DevOps Engineer ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },

  'Salesforce Specialist': {
   color: 'linear-gradient(-90deg,rgb(107, 120, 198), #192D9D )',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Salesforce specialists on Upwork provide CRM customization, workflow automation, data migration, and third-party integrations. They help businesses optimize Salesforce for sales and service needs. Freelancers bid on projects of varying sizes. Success relies on expertise, clear communication, and positive reviews, helping specialists build strong client relationships and grow their freelance careers.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforse-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforse-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Salesforce specialists on Fiverr provide CRM customization, workflow automation, data migration, and integrations. They help optimize sales, marketing, and customer service processes. Freelancers offer packages from small fixes to full implementations. Positive reviews and clear communication help them attract clients and grow their freelance presence on the platform.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforse-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforse-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Salesforce specialists on Freelancer offer services like CRM customization, workflow automation, data migration, and third-party integrations. They bid on projects ranging from small tasks to full-scale implementations. Success depends on technical skills, clear communication, and positive client feedback, helping specialists build reputation and secure more projects to grow their freelance careers steadily.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforce-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Beginner Salesforce specialists on PeoplePerHour typically earn $15–$35 per hour, handling basic CRM customization and simple automation tasks. Advanced specialists charge $50–$120+ per hour, managing complex customizations, data migrations, and integrations. Success depends on skills, communication, and positive reviews, which help freelancers attract clients and grow their earnings steadily on the platform.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforce-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforce-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Salesforce specialists on Guru.com offer services like CRM customization, workflow automation, data migration, and third-party integrations. They help businesses optimize sales, marketing, and customer service processes using Salesforce. Freelancers bid on projects of varying sizes, from small fixes to full implementations. Strong communication and positive reviews help specialists build trust and grow their freelance careers steadily on Guru.com',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforce-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/salesforce-guru2.png',
     },
    };

    return {
     title: `Salesforce Specialist in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Salesforce Specialist ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },
  'Microservices Developer': {
   color: 'linear-gradient(-90deg,rgb(218, 124, 215),rgb(226, 131, 175) )',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Microservices developers on Upwork design and build scalable, modular applications using microservices architecture. They work with tools like Docker, Kubernetes, and REST APIs, focusing on independent deployment and efficient service communication. Clients value skills in system design, API development, and optimization. Clear communication and timely delivery help freelancers build strong reputations and secure ongoing projects.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Microservices developers on Fiverr specialize in designing, developing, and deploying scalable applications using microservices architecture. They use tools like Docker, Kubernetes, and REST APIs to create modular, independently deployable services. Clients look for expertise in system design, API integration, and cloud deployment. Strong communication and timely delivery help freelancers build solid reputations and attract repeat business on Fiverr.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Microservices developers on Freelancer focus on designing and building scalable, modular applications using microservices architecture. They utilize tools like Docker, Kubernetes, and REST APIs to develop independently deployable services that enhance system flexibility and performance. Clients value expertise in API development, system integration, and cloud deployment. Effective communication and dependable delivery help freelancers establish strong reputations and secure ongoing work on Freelancer.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Microservices developers on PeoplePerHour offer services like designing and deploying scalable applications using modular, independent services. They work with tools such as Docker, Kubernetes, and REST APIs to build robust systems. Clients on the platform seek developers who can efficiently integrate services, improve system performance, and handle cloud-based deployments. Clear communication and on-time delivery help developers succeed and gain repeat clients.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Microservices developers on Guru specialize in building modular, scalable applications by breaking systems into independent services. They often use technologies like Docker, Kubernetes, and RESTful APIs, along with cloud platforms such as AWS or Azure. Clients on Guru look for developers who can improve performance, simplify maintenance, and support agile development. Strong portfolios, clear communication, and timely delivery help developers build long-term client relationships.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/microservices-guru2.png',
     },
    };

    return {
     title: `Microservices Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Microservices Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Blockchain Developer': {
   color: 'linear-gradient(-90deg, #B2850D,rgb(232, 207, 139))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Blockchain developers on Upwork offer services like smart contract development, DApp creation, tokenomics design, and blockchain integration using platforms such as Ethereum, Solana, Polygon, or Binance Smart Chain. Clients range from startups launching crypto products to enterprises exploring decentralized solutions. Success on Upwork depends on expertise, security practices, portfolio strength, and client communication.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Blockchain development on Fiverr involves creating smart contracts, decentralized applications (DApps), NFT projects, and blockchain integrations. Freelancers offer services across various platforms like Ethereum, Binance Smart Chain, and Solana. Clients range from startups to individuals seeking to launch tokens or NFTs. Success depends on technical expertise, clear communication, and delivering secure, efficient code. Fiverr’s gig-based model allows developers to showcase specific blockchain skills and attract clients worldwide.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Blockchain developers on Freelancer offer services like smart contract development, DApp creation, token launches, and blockchain integration on platforms like Ethereum and Binance Smart Chain. Clients range from startups to NFT creators. Success depends on strong technical skills, secure coding, clear communication, and positive reviews. Freelancers can bid on projects or offer fixed-price gigs to build their reputation and attract clients worldwide.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Blockchain developers on PeoplePerHour offer services like smart contract creation, DApp development, token launches, and blockchain integration on platforms such as Ethereum and Binance Smart Chain. Clients range from startups to NFT creators. Success depends on technical skills, clear communication, and positive reviews. A strong portfolio helps attract repeat clients and higher-paying projects globally.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Blockchain developers on Guru.com offer services such as smart contract development, token creation, DApp building, and blockchain integration across networks like Ethereum and Binance Smart Chain. Clients range from startups to enterprises seeking secure and scalable blockchain solutions. Developers gain success through strong portfolios, client trust, and timely, professional project delivery.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/blockchain-guru2.png',
     },
    };

    return {
     title: `Blockchain Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Blockchain Developer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Data Scientist': {
   color: 'linear-gradient(-90deg,rgb(182, 120, 93), #8A3814 )',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Data scientists on Upwork provide services like data analysis, machine learning, predictive modeling, and visualization. They use tools such as Python, R, and SQL to help clients gain insights and make data-driven decisions. Serving industries like finance, health, and e-commerce, successful freelancers build strong profiles through skillful delivery, clear communication, and reliable results.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/dataScientist-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/dataScientist-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Data scientists on Fiverr offer services like data analysis, machine learning, and visualization using tools like Python,R, and Excel. Clients range from small startups to larger firms. Gigs are usually sold in packages—basic to premium—based on complexity. Success depends on delivering quality work, clear gig descriptions, and gaining positive reviews to attract more clients.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/dataScientist-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/dataScientist-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Data scientists on Freelancer provide services such as data cleaning, predictive modeling, machine learning, and data visualization. They use tools like Python, R, SQL, and Tableau. Projects vary from small analyses to full-scale AI solutions. Success depends on strong proposals, timely delivery, and client satisfaction. Reviews and portfolio strength help secure higher-value projects over time.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/dataScientist-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Data scientist success on peoplePerHour.com depends on experience, skillset, project complexity, and profile quality. Strong client reviews, a well-detailed portfolio, and consistent, timely delivery significantly improve visibility. Proficiency in tools like Python, R, SQL, and frameworks such as TensorFlow or Scikit-learn boosts credibility. Specializing in niches like AI, NLP, or big data can further enhance opportunities.',

      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/dataScientist-peopleperhour1.png',
     },
     'GURU.com': {
      shortDescription:
       'Data scientist success on Guru.com depends on experience, skillset, project complexity, and profile quality. Strong client reviews, a well-detailed portfolio, and consistent, timely delivery significantly improve visibility. Proficiency in tools like Python, R, SQL, and frameworks such as TensorFlow or Scikit-learn boosts credibility. Specializing in niches like AI, NLP, or big data can further enhance opportunities.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/dataScientist-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/dataScientist-guru2.png',
     },
    };

    return {
     title: `Data Scientist in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Data Scientist ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Machine Learning Engineer': {
   color: 'linear-gradient(-90deg, #A66EFF,rgb(217, 193, 255))',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Machine learning engineers on Upwork design, build, and deploy ML models for various applications. They typically work with Python, TensorFlow, PyTorch, and data processing tools. Success depends on strong coding skills, problemsolving ability, and clear communication. Rates vary widely, influenced by experience, project complexity, and client reviews. High-rated engineers often secure long-term contracts and premium projects.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Machine learning engineers on Fiverr provide services like model building, data preprocessing, and AI consulting using tools like Python and TensorFlow. Success depends on clear gig descriptions, strong portfolios, and positive client reviews. Fiverr’s fixed-price gigs attract clients seeking specific tasks. Experienced engineers with high ratings can charge premium prices and secure repeat business for complex projects.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Machine learning engineers on Freelancer.com create and deploy ML models, perform data preprocessing, and develop AI solutions using tools like Python and TensorFlow. Success relies on having a strong profile, positive client reviews, and effective communication. Rates vary based on experience and project complexity. Skilled engineers with proven expertise often win higher-paying jobs and long-term contracts by delivering reliable, high-quality work.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Machine learning engineers on PeoplePerHour build and deploy ML models, handle data preprocessing, and create AI solutions using tools like Python and TensorFlow. Success depends on a strong profile, clear communication, and positive client reviews. Rates vary by experience and project complexity. Skilled engineers with proven expertise often secure higher-paying jobs and long-term contracts through consistent quality work and reliability.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Machine learning engineers on Guru.com design, develop, and deploy ML models, working with tools like Python, TensorFlow, and PyTorch. Success depends on a strong profile, clear communication, and positive client feedback. Rates vary based on experience and project complexity. Experienced engineers with proven skills often secure highpaying projects and long-term contracts by delivering reliable, quality solutions that meet client needs.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/machineLearning-guru2.png',
     },
    };

    return {
     title: `Machine Learning Engineer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Machine Learning Engineer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'AI Engineer': {
   color: 'linear-gradient(-90deg, #3B7D7A,rgb(158, 201, 199) )',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    // 'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'AI engineers on Upwork design, develop, and deploy artificial intelligence models and systems using tools like Python, TensorFlow, and PyTorch. Success relies on strong technical skills, clear communication, and positive client reviews. Rates vary with experience and project complexity. Skilled AI engineers often secure high-paying contracts by delivering innovative, reliable solutions that meet client needs across industries.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/AI-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/AI-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'AI engineers on Fiverr offer services like building and deploying AI models, data preprocessing, and custom AI solutions using tools such as Python, TensorFlow, and PyTorch. Success depends on clear gig descriptions, strong portfolios, and positive client reviews. Fiverr’s fixed-price gigs attract clients seeking specific tasks. Experienced engineers with high ratings often command premium prices and secure repeat clients for complex projects.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/AI-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/AI-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'AI engineers on Freelancer.com develop and deploy AI models, handle data preprocessing, and create custom AI solutions using tools like Python, TensorFlow, and PyTorch. Success depends on a strong profile, clear communication, and positive client reviews. Rates vary by experience and project complexity. Skilled engineers with proven expertise often secure higher-paying projects and long-term contracts through reliable, high-quality work.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/AI-freelancer1.png',
     },
     //  'PEOPLEPERHOUR.com': {
     //   shortDescription: 'NOT Included',
     //   imagePath1: 'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/images-placeholder.png',
     //  },
     'GURU.com': {
      shortDescription:
       'AI engineers on Guru.com design, develop, and deploy AI models and systems using tools like Python, TensorFlow, and PyTorch. Success depends on a strong profile, clear communication, and positive client feedback. Rates vary by experience and project complexity. Skilled AI engineers with proven expertise often secure high-paying projects and long-term contracts by delivering reliable, innovative solutions tailored to client needs.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/AI-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/AI-guru2.png',
     },
    };

    return {
     title: `AI Engineer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About AI Engineer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
      },
     ],
    };
   },
  },

  'Certified Ethical Hacker (CEH v13)': {
   color: 'linear-gradient(-90deg,rgb(233, 185, 90),rgb(231, 156, 5) )',
   tabs: [
    'UPWORK.com',
    'FIVERR.com',
    'FREELANCER.com',
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'Certified Ethical Hackers (CEH) on Upwork specialize in identifying and fixing security vulnerabilities in systems and networks. They use tools and techniques to perform penetration testing, vulnerability assessments, and security audits. Success depends on strong technical skills, certifications, clear communication, and positive client feedback. CEHs with proven expertise often secure high-paying, trusted cybersecurity projects and long-term contracts.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-upwork1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Certified Ethical Hackers (CEH) on Fiverr offer services like penetration testing, vulnerability assessments, and security audits to help clients protect their systems. They use industry-standard tools and techniques to identify security flaws. Success depends on clear gig descriptions, strong portfolios, and positive client reviews. Experienced CEHs with high ratings often command premium prices and secure repeat clients for advanced cybersecurity projects.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-fiverr1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Certified Ethical Hackers (CEH) on Freelancer.com perform penetration testing, vulnerability assessments, and security audits to identify and fix system weaknesses. They use industry tools and techniques to help clients improve cybersecurity. Success depends on a strong profile, clear communication, and positive client feedback. Experienced CEHs often secure high-paying projects and long-term contracts by delivering reliable, thorough security solutions.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Certified Ethical Hackers (CEH) on PeoplePerHour specialize in identifying and fixing security vulnerabilities through penetration testing, vulnerability assessments, and security audits. They use industry tools and techniques to help clients strengthen cybersecurity. Success depends on strong profiles, clear communication, and positive reviews. Experienced CEHs often secure high-paying, trusted cybersecurity projects and repeat clients on the platform.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-peopleperhour1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Certified Ethical Hackers (CEH) on Guru.com perform penetration testing, vulnerability assessments, and security audits to identify and fix system weaknesses. They use industry tools and techniques to improve client cybersecurity. Success depends on a strong profile, clear communication, and positive reviews. Experienced CEHs often secure high-paying projects and long-term contracts by delivering reliable, thorough security solutions.',
      imagePath1:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-guru1.png',
      imagePath2:
       'https://vveba.s3.eu-north-1.amazonaws.com/freelancing/CEH-guru2.png',
     },
    };

    return {
     title: `Certified Ethical Hacker (CEH v13) in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Certified Ethical Hacker (CEH v13) ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
    };
   },
  },
 };

 const handleSidebarItemClick = (item) => {
  setActiveSidebarItem(item);
  setActiveTab(0);
 };

 const handleTabChange = (event, newValue) => {
  setActiveTab(newValue);
 };

 return (
  <div className="container-fluid p-4 mb-80 sm:mb-60">
   <div className="tp-home-4-service-title text-center mt-60">
    <span className="tp-section-v_2-title-pre">Latest Insights</span>
    <h3 className="tp-section-title">Top Freelancing Platform</h3>
   </div>

   <div className="row g-3">
    {/* Sidebar Column - Bootstrap Grid */}
    <div className="col-md-3">
     <Paper elevation={2} className="p-2 h-100">
      <Typography variant="h6" className="mb-2 fw-bold">
       Tech Stacks
      </Typography>
      <List dense>
       {Object.keys(sidebarItems).map((item) => (
        <ListItem key={item} disablePadding>
         <ListItemButton
          selected={activeSidebarItem === item}
          onClick={() => handleSidebarItemClick(item)}
          sx={{
           borderRadius: 1,
           color: '#363f46',
           '&.Mui-selected': {
            backgroundColor: 'rgba(54, 63, 70, 0.5)',
            borderLeft: '4px solid #e92e3e',
            color: 'white !important',
            '&:hover': {
             backgroundColor: 'rgba(54, 63, 70, 0.8)', // Light on hover when selected
            },
           },
          }}
         >
          <ListItemText primary={item} />
         </ListItemButton>
        </ListItem>
       ))}
      </List>
     </Paper>
    </div>

    {/* Main Content Column - Bootstrap Grid */}
    <div className="col-md-9">
     <Paper elevation={1} className="p-0 h-100">
      {/* Tabs */}
      <Box className="mb-3">
       <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="country tabs"
        sx={{
         '& .MuiTab-root': {
          color: 'black',
          margin: '0 4px',
          borderRadius: '8px 8px 0 0',
         },
         '& .Mui-selected': {
          background: 'rgba(54, 63, 70, 0.5)', //  background for selected tab
          color: 'white !important',
         },
         '& .MuiTabs-indicator': {
          backgroundColor: ' #e92e3e', // Hide the default indicator
         },
         backgroundColor: 'rgba(54, 63, 70, 0.1)', //tabs nav background color
         padding: '7px 7px 0px 7px',
        }}
       >
        {sidebarItems[activeSidebarItem].tabs.map((tab, index) => (
         <Tab
          key={index}
          label={tab}
          id={`tab-${index}`}
          aria-controls={`tabpanel-${index}`}
          sx={{textTransform: 'none', fontWeight: 'bold'}}
         />
        ))}
       </Tabs>
      </Box>

      {/* Tab Content */}
      <div
       role="tabpanel"
       id={`tabpanel-${activeTab}`}
       aria-labelledby={`tab-${activeTab}`}
      >
       <Typography
        variant="h4"
        gutterBottom
        sx={{fontWeight: 'bold', marginBottom: '20px', marginLeft: '20px'}}
       >
        {
         sidebarItems[activeSidebarItem].content(
          sidebarItems[activeSidebarItem].tabs[activeTab]
         ).title
        }
       </Typography>

       <TableContainer className='shadow-none' component={Paper} elevation={2}>
        <Table aria-label="tech stack metrics">
         <Box className="p-4">
          {sidebarItems[activeSidebarItem]
           .content(sidebarItems[activeSidebarItem].tabs[activeTab])
           .data.map((row, index) => (
            <TableRow key={index} sx={{display: 'block', mb: 4}}>
             {row.shortDescription && (
              <Typography className="mb-4">{row.shortDescription}</Typography>
             )}
             {row.heading && <h3>{row.heading}</h3>}

             {row.image1 && (
              <Image
               loading="lazy"
               src={row.image1}
               alt="Freelance Guru"
               width={1000}
               height={300}
               className="mb-4"
              />
             )}

             {row.image2 && (
              <Image
               loading="lazy"
               src={row.image2}
               alt="Freelance Guru"
               width={1000}
               height={300}
              />
             )}
            </TableRow>
           ))}
         </Box>
        </Table>
       </TableContainer>
      </div>
     </Paper>
    </div>
   </div>
  </div>
 );
}