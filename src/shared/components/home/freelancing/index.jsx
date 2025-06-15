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
      imagePath1: '/assets/image/freelancing/web-upwork1.png',
      imagePath2: '/assets/image/freelancing/web-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Web developers on Fiverr offering HTML, CSS, JavaScript, and Bootstrap services face a competitive but in-demand market. Basic front-end gigs are crowded, but those providing clean, responsive designs focused on user experience, performance, and modern CSS frameworks like Tailwind or Materialize can still stand out. Combining strong technical skills with up-to-date design trends helps these developers attract clients and succeed despite high competition.',
      imagePath1: '/assets/image/freelancing/web-fiverr1.png',
      imagePath2: '/assets/image/freelancing/web-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Freelancers offering HTML, CSS, JS, Bootstrap, and other CSS library services face tough competition on Freelancer.com. Basic front-end gigs are oversaturated, but those with strong portfolios, fast delivery, and modern, responsive designs still attract clients. Success depends on quality, communication, and staying updated with design trends like Tailwind CSS and sleek UI animations.',
      imagePath1: '/assets/image/freelancing/web-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Web developer on PeoplePerHour skilled in HTML, CSS, JavaScript, Bootstrap, and CSS libraries like Tailwind. Offers beginner services from $10–$15/hr focusing on responsive design and bug fixes. Expert services from $40–$60/hr include full website builds, UI/UX, and performance optimization. Delivers clean code, fast load times, and mobilefriendly layouts tailored to client needs.',
      imagePath1: '/assets/image/freelancing/web-peopleperhour1.png',
      imagePath2: '/assets/image/freelancing/web-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Skilled web developer on Guru with expertise in HTML, CSS, JavaScript, Bootstrap, and modern CSS libraries like Tailwind and Materialize. Specializes in creating responsive, clean, and user-friendly websites tailored to client needs. Delivers pixel-perfect layouts, optimized performance, and cross-browser compatibility. Committed to quality code, timely delivery, and continuous learning to stay updated with the latest web design trends.',
      imagePath1: '/assets/image/freelancing/web-guru1.png',
      imagePath2: '/assets/image/freelancing/web-guru2.png',
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
      imagePath1: '/assets/image/freelancing/javascript-upwork1.png',
      imagePath2: '/assets/image/freelancing/javascript-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'JavaScript Developer on Fiverr operate in a competitive yet high-demand environment. Success depends on clear gig descriptions, fast delivery, strong communication, and positive reviews. Beginners may earn $10–$25 per gig for basic tasks, while experienced developers offering advanced solutions like custom scripts or API integration can earn $50–$200+ per project. Consistency, skill, and client satisfaction are key to growth.',
      imagePath1: '/assets/image/freelancing/javascript-fiverr1.png',
      imagePath2: '/assets/image/freelancing/javascript-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JavaScript Developer on Freelancer.com must compete with global talent, requiring strong proposals, a clear profile, and a solid portfolio to win bids. Success depends on fast communication, meeting deadlines, and maintaining high client ratings. Building trust, starting with small tasks, and delivering quality work are key to gaining long-term clients and higher-paying projects.',
      imagePath1: '/assets/image/freelancing/javascript-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'PeoplePerHour.com features skilled JavaScript Developer offering a wide range of services including custom scripts, dynamic web features, form validation, and interactive UI enhancements. You can view ratings, reviews, and hire by the hour or project for reliable, efficient coding solutions tailored to your needs.',
      imagePath1: '/assets/image/freelancing/javascript-peopleperhour1.png',
      imagePath2: '/assets/image/freelancing/javascript-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Guru.com hosts experienced JavaScript Developer who specialize in creating dynamic, interactive, and responsive web solutions. From fixing bugs and optimizing code to developing custom features and enhancing user interfaces, freelancers offer reliable services tailored to your project needs. You can review portfolios, compare quotes, and hire with confidence through secure payment options.',
      imagePath1: '/assets/image/freelancing/javascript-guru1.png',
      imagePath2: '/assets/image/freelancing/javascript-guru2.png',
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
      imagePath1: '/assets/image/freelancing/frontend-upwork1.png',
      imagePath2: '/assets/image/freelancing/frontend-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a wide range of frontend developers skilled in creating responsive, visually appealing websites using HTML, CSS, JavaScript, and frameworks like React. Freelancers provide services such as website design, UI enhancements, and bug fixes. Clients can choose from various packages based on budget and project needs, with many developers offering quick turnaround times and reliable communication, making Fiverr a popular platform for affordable and efficient frontend development.',
      imagePath1: '/assets/image/freelancing/frontend-fiverr1.png',
      imagePath2: '/assets/image/freelancing/frontend-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Freelancer.com connects clients with talented frontend developers skilled in HTML, CSS, JavaScript, and React. These freelancers create responsive, interactive, and visually appealing websites and applications. They offer services such as website design, UI enhancements, bug fixes, and custom feature development. Clients can browse portfolios, review ratings, and post projects to receive competitive bids, ensuring they hire the right developer for quality, timely, and affordable frontend solutions.',
      imagePath1: '/assets/image/freelancing/frontend-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'PeoplePerHour links clients with talented frontend developers skilled in HTML, CSS, JavaScript, and React to build responsive, user-friendly websites. These freelancers provide services including website design, UI enhancements, and bug fixes. Clients can review profiles and feedback, then hire experts for projects of any scale, ensuring high-quality work delivered on time.',
      imagePath1: '/assets/image/freelancing/frontend-peopleperhour1.png',
      imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Guru.com offers access to skilled frontend developers proficient in HTML, CSS, JavaScript, and React. These experts create responsive, interactive, and visually appealing websites tailored to client needs. Clients can browse detailed profiles, portfolios, and reviews to find the right developer. Guru’s secure platform ensures reliable communication, timely delivery, and quality results for projects of all sizes.',
      imagePath1: '/assets/image/freelancing/frontend-guru1.png',
      imagePath2: '/assets/image/freelancing/frontend-guru2.png',
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
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
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
      imagePath1: '/assets/image/freelancing/mern-upwork1.png',
      imagePath2: '/assets/image/freelancing/mern-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'MERN stack developers on Fiverr specialize in building complete web applications using MongoDB, Express.js, React, and Node.js. They develop secure, fast, and scalable solutions tailored to each client’s needs. From crafting sleekuser interfaces to building powerful backend APIs and managing databases, they deliver end-to-end services ideal for startups, e-commerce stores, portfolios, and custom business platforms.',
      imagePath1: '/assets/image/freelancing/mern-fiverr1.png',
      imagePath2: '/assets/image/freelancing/mern-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'MERN stack developers on Freelancer.com enjoy flexible work conditions, choosing their own hours, rates, and projects. They bid on jobs ranging from small bug fixes to full-stack app development. Success depends on strong portfolios, client communication, and competitive pricing. With growing demand for JavaScript-based solutions, MERNdevelopers often find steady, well-paying opportunities—especially with positive reviews and consistent delivery.',
      imagePath1: '/assets/image/freelancing/mern-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'PeoplePerHour features MERN stack developers skilled in MongoDB, Express.js, React, and Node.js for building full-stack web applications. These developers handle everything from frontend interfaces to backend APIs, offering scalable and dynamic solutions. Clients can review freelancer profiles, ratings, and portfolios to hire professionals for projects of various sizes, ensuring quality work delivered on time.',
      imagePath1: '/assets/image/freelancing/mern-peopleperhour1.png',
      imagePath2: '/assets/image/freelancing/mern-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'On Guru.com, MERN stack developers charge $40 to $150 per hour based on experience and project complexity. Beginners start around $20 per hour, while experts earn higher rates. Fixed-price projects can exceed $1,000 depending on scope. Skilled developers with strong portfolios and good reviews can secure well-paying jobs and grow their freelance careers on the platform.',
      imagePath1: '/assets/image/freelancing/mern-guru1.png',
      imagePath2: '/assets/image/freelancing/mern-guru2.png',
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
      imagePath1: '/assets/image/freelancing/next-upwork1.png',
      imagePath2: '/assets/image/freelancing/next-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'A Next.js specialist on Fiverr delivers high-performance, SEO-friendly web solutions using modern React-based development. They build responsive landing pages, static or dynamic websites, and handle API integration and deployment. Offering clear package options and fast delivery, they serve startups and businesses seeking scalable, efficient, and user-focused web applications.',
      imagePath1: '/assets/image/freelancing/next-fiverr1.png',
      imagePath2: '/assets/image/freelancing/next-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'Next.js specialists on Freelancer build fast, dynamic, and SEO-optimized websites using React-based architecture. They handle tasks like static site generation, server-side rendering, API integration, and responsive design. Clients hire them for projects ranging from landing pages to full-scale web apps, valuing their ability to deliver scalable, efficient, and modern digital solutions.',
      imagePath1: '/assets/image/freelancing/next-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Next.js developers on PeoplePerHour are in steady demand, with opportunities ranging from quick one-off tasks to full-time roles in complex applications. Freelancers offer services such as building landing pages, integrating APIs, and developing full-stack applications using Next.js. Rates vary based on experience and project complexity, with some freelancers offering services starting at $15 per hour.',

      imagePath1: '/assets/image/freelancing/next-peopleperhour1.png',
      imagePath2: '/assets/image/freelancing/next-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'Next.js developers on Guru.com offer services like building SEO-friendly, high-performance web apps using React. They handle landing pages, API integrations, and full-stack solutions. Clients seek scalable and modern websites. Beginners may start with lower rates to build credibility, while experienced developers charge premium rates for complex projects. Guru.com provides solid freelance opportunities for all skill levels.',
      imagePath1: '/assets/image/freelancing/next-guru1.png',
      imagePath2: '/assets/image/freelancing/next-guru2.png',
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
      imagePath1: '/assets/image/freelancing/reactN-upwork1.png',
      imagePath2: '/assets/image/freelancing/reactN-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'React Native developers on Fiverr face high competition with many offering services from bug fixes to full app development. Prices range from $20 for small tasks to $2000+ for complex apps. New sellers often offer lower rates to build reviews. Clients expect quality and quick delivery. Success requires good portfolios, niche gigs, and clear communication. Fiverr’s milestone system protects both buyers and sellers.',
      imagePath1: '/assets/image/freelancing/reactN-fiverr1.png',
      imagePath2: '/assets/image/freelancing/reactN-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'React Native developers on Freelancer face strong global competition with varied skill levels. Projects range from small bug fixes $50+ to full apps $1000+. Clients expect timely delivery and clear communication. New freelancers often bid low to build reputation. Success depends on strong portfolios, good reviews, and bidding smartly. Freelancer’s milestone system ensures secure payments for both parties.',
      imagePath1: '/assets/image/freelancing/reactN-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'React Native developers on PeoplePerHour face moderate competition with a mix of beginners and experienced freelancers. Projects range from simple bug fixes to full app development. Rates typically start at $15/hour for beginners and go up to $70+/hour for experts. Clients expect timely delivery and clear communication. Success depends on a strong profile, good reviews, and competitive pricing. Milestone payments protect both parties.',
      imagePath1: '/assets/image/freelancing/reactN-peopleperhour1.png',
      imagePath2: '/assets/image/freelancing/reactN-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'React Native developers on Guru.com offer services ranging from bug fixes to full app development. The platform hosts a mix of beginners and experienced professionals. Clients look for clear communication, timely delivery, and clean code. Developers with strong portfolios, positive reviews, and niche expertise stand out. Guru’s SafePay system provides secure project payments and builds trust between clients and freelancers.',
      imagePath1: '/assets/image/freelancing/reactN-guru1.png',
      imagePath2: '/assets/image/freelancing/reactN-guru2.png',
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
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
     },
    };

    return {
     title: `DevOps Engineer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About DevOps Engineer ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
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
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
     },
    };

    return {
     title: `Salesforce Specialist in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Salesforce Specialist ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
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
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
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
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
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
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
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
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
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
    'PEOPLEPERHOUR.com',
    'GURU.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'UPWORK.com': {
      shortDescription:
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
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
       'On Upwork, Jamstack developers build fast, secure, and scalable websites using modern tools like Firebase and headless CMS. They specialize in creating static sites powered by APIs, delivering excellent performance and smooth user experiences. Clients on Upwork can hire these experts for projects requiring optimized, easy-to-maintain web solutions that load quickly and are highly secure, making Jamstack a popular choice for modern web development.',
      imagePath1: '/assets/image/freelancing/jamStack-upwork1.png',
      imagePath2: '/assets/image/freelancing/jamStack-upwork2.png',
     },
     'FIVERR.com': {
      shortDescription:
       'Fiverr offers a variety of Jamstack developers who specialize in creating fast, secure, and scalable websites using modern tools like Gatsby, Next.js, and headless CMS. These freelancers provide services such as building static sites, API integrations, and performance optimization. Clients can choose from different packages based on their needs and budget, ensuring flexible options for projects of all sizes with reliable delivery and quality results.',
      imagePath1: '/assets/image/freelancing/jamStack-fiverr1.png',
      imagePath2: '/assets/image/freelancing/jamStack-fiverr2.png',
     },
     'FREELANCER.com': {
      shortDescription:
       'JAMstack developers on Freelancer specialize in building ultra-fast, secure, and scalable websites using modern static site generators and headless CMS solutions. They expertly integrate APIs and third-party services to enhance functionality, optimize for SEO and performance, and deploy on advanced platforms like Netlify or Vercel. Perfect for businesses and startups seeking cost-effective, high-converting digital solutions that fuel growth and revenue.',
      imagePath1: '/assets/image/freelancing/jamStack-freelancer1.png',
     },
     'PEOPLEPERHOUR.com': {
      shortDescription:
       'Junior JAMstack Developers on PeoplePerHour typically earn $25–$50 per hour or $15,000–$40,000 annually for freelance projects. Beginners focus on static site development, basic API integrations, and CMS setups (like Sanity or Strapi). Their rates depend on skills in Gatsby, Next.js, or Hugo, along with deployment platforms (Netlify/Vercel). Clients hiring juniors often seek budget-friendly solutions for blogs, small business sites, or landing pages.  Pro JAMstack Developers command $60–$120+ per hour or $70,000–$120,000+ per year due to advanced expertise. They handle complex headless architectures, performance optimization, serverless functions (Lambda/Edge), and e-commerce integrations (Snipcart, Shopify). Top earners specialize in scalable enterprise solutions, real-time data apps, or CI/CD automation. Clients pay premiums for pros who boost SEO, security (JWT/OAuth), and conversion rates while reducing hosting costs.',
      // imagePath1: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1',
      // imagePath2: '/assets/image/freelancing/frontend-peopleperhour2.png',
     },
     'GURU.com': {
      shortDescription:
       'JAMstack developers on Guru.com build fast, secure, and scalable websites using modern static site generators and headless CMS. They integrate APIs, optimize for SEO and performance, and deploy on platforms like Netlify and Vercel. Ideal for businesses seeking cost-effective, high-performing web solutions that boost growth and user experience.',
      imagePath1: '/assets/image/freelancing/jamStack-guru1.png',
      imagePath2: '/assets/image/freelancing/jamStack-guru2.png',
     },
    };

    return {
     title: `Certified Ethical Hacker (CEH v13) in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About Certified Ethical Hacker (CEH v13) ',
       image1: platformData[platform].imagePath1, // Moved image links here
       image2: platformData[platform].imagePath2, // Moved image links here
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
           '&.Mui-selected': {
            background: sidebarItems[item]?.color || sidebarItems.color,
            borderLeft: '4px solid #701DF0',
            color: 'white !important',
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
     <Paper elevation={3} className="p-2 h-100">
      {/* Tabs */}
      <Box sx={{borderBottom: 1, borderColor: 'divider'}} className="mb-3">
       <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="country tabs"
        sx={{
         '& .MuiTab-root': {
          margin: '0 4px',
          borderRadius: '8px 8px 0 0',
         },
         '& .Mui-selected': {
          background:
           sidebarItems[activeSidebarItem]?.color || sidebarItems.color,
          color: 'white !important',
         },
         '& .MuiTabs-indicator': {
          backgroundColor: '#701DF0',
         },
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
       <Typography variant="h5" gutterBottom className="mb-3">
        {
         sidebarItems[activeSidebarItem].content(
          sidebarItems[activeSidebarItem].tabs[activeTab]
         ).title
        }
       </Typography>

       <TableContainer component={Paper} elevation={2}>
        <Table aria-label="tech stack metrics">
         <Box className="p-2">
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
               src={row.image1}
               alt="Freelance Guru"
               width={1000}
               height={300}
               className="mb-4"
              />
             )}

             {row.image2 && (
              <Image
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