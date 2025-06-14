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

export default function TechStackDashboard() {
 const [activeSidebarItem, setActiveSidebarItem] = useState('Web Development');
 const [activeTab, setActiveTab] = useState(0);

 // Data structure for sidebar items and their associated tab content
    const sidebarItems = {
      'Web Development': {
      color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$67,284/year',
         shortDescription:
          'Web Developers in the U.S. earn competitive salaries due to high demand, tech innovation, and remote work options, as reported by PayScale and supported by industry hiring trends.',
         jobMarket:
          'A Web Developer is a core technology expert responsible for building and maintaining websites and web applications that power the internet. They work with languages like HTML, CSS, and JavaScript, and often specialize in frameworks that enhance functionality and user experience. As the digital transformation accelerates globally, the demand for skilled web developers has skyrocketed. From startups to multinational corporations, nearly every business relies on robust, scalable web platforms to connect with customers, streamline operations, and drive growth. This widespread need makes web development one of the most in-demand and valuable skills in today’s tech-driven economy. Whether in product development, marketing, e-commerce, or education, web developers play a central role in innovation and online success. With growing opportunities in freelancing,remote work, and full-time employment, this career offers flexibility, financial stability, and long-term relevance in the evolving tech landscape.',
        },
        'United Kingdom': {
         salary: '£29,200/year',
         shortDescription:
          'In the United Kingdom, web developers earn competitive salaries as per PayScale, with compensation influenced by skill level, industry demand, and experience across tech, retail, and finance sectors.',
         jobMarket:
          'A Web Developer is a core technology expert responsible for building and maintaining websites and web applications that power the internet. They work with languages like HTML, CSS, and JavaScript, and often specialize in frameworks that enhance functionality and user experience. As the digital transformation accelerates globally, the demand for skilled web developers has skyrocketed. From startups to multinational corporations, nearly every business relies on robust, scalable web platforms to connect with customers, streamline operations, and drive growth. This widespread need makes web development one of the most in-demand and valuable skills in today’s tech-driven economy. Whether in product development, marketing, e-commerce, or education, web developers play a central role in innovation and online success. With growing opportunities in freelancing,remote work, and full-time employment, this career offers flexibility, financial stability, and long-term relevance in the evolving tech landscape.',
        },
        Qatar: {
         salary: 'QAR 100,000/year',
         shortDescription:
          'According to PayScale and market trends, web developers in Qatar earn attractive salaries, with income influenced by expertise, company size, and growing demand in tech, oil, and finance sectors.',
         jobMarket:
          'A Web Developer is a core technology expert responsible for building and maintaining websites and web applications that power the internet. They work with languages like HTML, CSS, and JavaScript, and often specialize in frameworks that enhance functionality and user experience. As the digital transformation accelerates globally, the demand for skilled web developers has skyrocketed. From startups to multinational corporations, nearly every business relies on robust, scalable web platforms to connect with customers, streamline operations, and drive growth. This widespread need makes web development one of the most in-demand and valuable skills in today’s tech-driven economy. Whether in product development, marketing, e-commerce, or education, web developers play a central role in innovation and online success. With growing opportunities in freelancing,remote work, and full-time employment, this career offers flexibility, financial stability, and long-term relevance in the evolving tech landscape.',
        },
        'United Arab Emirates': {
         salary: 'AED 44,544/year',
         shortDescription:
          'Web Developers in the United Arab Emirates earn competitive salaries due to high demand, tech innovation, and remote work options, as reported by PayScale and supported by industry hiring trends.',
         jobMarket:
          'A Web Developer is a core technology expert responsible for building and maintaining websites and web applications that power the internet. They work with languages like HTML, CSS, and JavaScript, and often specialize in frameworks that enhance functionality and user experience. As the digital transformation accelerates globally, the demand for skilled web developers has skyrocketed. From startups to multinational corporations, nearly every business relies on robust, scalable web platforms to connect with customers, streamline operations, and drive growth. This widespread need makes web development one of the most in-demand and valuable skills in today’s tech-driven economy. Whether in product development, marketing, e-commerce, or education, web developers play a central role in innovation and online success. With growing opportunities in freelancing,remote work, and full-time employment, this career offers flexibility, financial stability, and long-term relevance in the evolving tech landscape.',
        },
       };

       return {
        title: `Web Development in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Web Developer ',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'JavaScript Developer': {
      color: 'linear-gradient(-90deg, #6929C5,rgb(194, 173, 223))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$111,158/year',
         shortDescription:
          'According to PayScale market insights, JavaScript professionals in the U.S. enjoy strong salaries due to high demand for dynamic web and app development across various tech- driven industries.',
         jobMarket:
          'JavaScript professionals specialize in making web pages dynamic, interactive, and intelligent. As the core language of the web, JavaScript is used for everything from interactive UI elements to full-stack applications through Node.js. Skilled professionals in this field can build fast, responsive frontends and scalable backends. Their work powers apps, websites, and browser-based tools across industries. With frameworks like React, Angular, and Vue, JavaScript has become essential for building modern web applications. Its widespread use means JavaScript experts are consistently in demand, whether in startups or tech giants. Employers value them for their ability to bring static designs to life and enhance user experience through real-time updates, animations, and interactivity.As digital transformation continues globally, JavaScript remains at the heart of web development.Professionals fluent in it can build careers in web, mobile, gaming, and even server - side development.',
        },
        'United Kingdom': {
         salary: '£50,376/year',
         shortDescription:
          'In the United Kingdom, JavaScript professionals receive competitive salaries, driven by consistent demand in tech, finance, and e-commerce sectors for skilled web and application developers.',
         jobMarket:
          'JavaScript professionals specialize in making web pages dynamic, interactive, and intelligent. As the core language of the web, JavaScript is used for everything from interactive UI elements to full-stack applications through Node.js. Skilled professionals in this field can build fast, responsive frontends and scalable backends. Their work powers apps, websites, and browser-based tools across industries. With frameworks like React, Angular, and Vue, JavaScript has become essential for building modern web applications. Its widespread use means JavaScript experts are consistently in demand, whether in startups or tech giants. Employers value them for their ability to bring static designs to life and enhance user experience through real-time updates, animations, and interactivity.As digital transformation continues globally, JavaScript remains at the heart of web development.Professionals fluent in it can build careers in web, mobile, gaming, and even server - side development.',
        },
        Qatar: {
         salary: 'QAR 172,200/year',
         shortDescription:
          'In Qatar, JavaScript professionals earn rewarding salaries as demand grows in digital sectors, with opportunities expanding across tech firms, finance, and government-led innovation projects.',
         jobMarket:
          'JavaScript professionals specialize in making web pages dynamic, interactive, and intelligent. As the core language of the web, JavaScript is used for everything from interactive UI elements to full-stack applications through Node.js. Skilled professionals in this field can build fast, responsive frontends and scalable backends. Their work powers apps, websites, and browser-based tools across industries. With frameworks like React, Angular, and Vue, JavaScript has become essential for building modern web applications. Its widespread use means JavaScript experts are consistently in demand, whether in startups or tech giants. Employers value them for their ability to bring static designs to life and enhance user experience through real-time updates, animations, and interactivity.As digital transformation continues globally, JavaScript remains at the heart of web development.Professionals fluent in it can build careers in web, mobile, gaming, and even server - side development.',
        },
        'United Arab Emirates': {
         salary: 'AED 284,000/year',
         shortDescription:
          'In the UAE, JavaScript professionals earn competitive salaries as digital transformation grows, with high demand across tech companies, startups, and government-backed innovation sectors.',
         jobMarket:
          'JavaScript professionals specialize in making web pages dynamic, interactive, and intelligent. As the core language of the web, JavaScript is used for everything from interactive UI elements to full-stack applications through Node.js. Skilled professionals in this field can build fast, responsive frontends and scalable backends. Their work powers apps, websites, and browser-based tools across industries. With frameworks like React, Angular, and Vue, JavaScript has become essential for building modern web applications. Its widespread use means JavaScript experts are consistently in demand, whether in startups or tech giants. Employers value them for their ability to bring static designs to life and enhance user experience through real-time updates, animations, and interactivity.As digital transformation continues globally, JavaScript remains at the heart of web development.Professionals fluent in it can build careers in web, mobile, gaming, and even server - side development.',
        },
       };

       return {
        title: `Junior JavaScript Developer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Junior Javascript Developer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'Front-End Developer': {
      color: 'linear-gradient(-90deg, #2B5E5E,rgb(110, 187, 187))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$86,154/year',
         shortDescription:
          'According to recent market insights, frontend developers in the U.S. receive competitive salary packages, driven by high demand across tech startups, enterprises, and digital product development teams.',
         jobMarket:
          'Front-end developers are responsible for building the user-facing parts of websites and apps using technologies like HTML, CSS, JavaScript, and frameworks such as React or Angular, ensuring interfaces are attractive, responsive, and easy to use; they define how users interact with digital products, collaborate with designers and back-end developers to create seamless experiences across devices and browsers, and play a vital role in brand identity and digital engagement across industries like marketing, e-commerce, education, and fintech, with a career path offering remote flexibility, strong demand, and long-term growth.',
        },
        'United Kingdom': {
         salary: '£39,336/year',
         shortDescription:
          'In the UK, frontend developers earn attractive salary packages as businesses increasingly invest in digital experiences, with demand rising across fintech, e-commerce, and tech-driven industries.',
         jobMarket:
          'Front-end developers are responsible for building the user-facing parts of websites and apps using technologies like HTML, CSS, JavaScript, and frameworks such as React or Angular, ensuring interfaces are attractive, responsive, and easy to use; they define how users interact with digital products, collaborate with designers and back-end developers to create seamless experiences across devices and browsers, and play a vital role in brand identity and digital engagement across industries like marketing, e-commerce, education, and fintech, with a career path offering remote flexibility, strong demand, and long-term growth.',
        },
        Qatar: {
         salary: 'QAR 212,000/year',
         shortDescription:
          'In Qatar, frontend developers receive promising salary packages as the nation accelerates its digital transformation, with growing demand in tech, finance, and government-led innovation projects.',
         jobMarket:
          'Front-end developers are responsible for building the user-facing parts of websites and apps using technologies like HTML, CSS, JavaScript, and frameworks such as React or Angular, ensuring interfaces are attractive, responsive, and easy to use; they define how users interact with digital products, collaborate with designers and back-end developers to create seamless experiences across devices and browsers, and play a vital role in brand identity and digital engagement across industries like marketing, e-commerce, education, and fintech, with a career path offering remote flexibility, strong demand, and long-term growth.',
        },
        'United Arab Emirates': {
         salary: 'AED 114,000/year',
         shortDescription:
          'In the UAE, frontend developers enjoy competitive salary packages, driven by the country’s rapid tech adoption, digital startups, and smart city initiatives boosting demand for skilled UI developers.',
         jobMarket:
          'Front-end developers are responsible for building the user-facing parts of websites and apps using technologies like HTML, CSS, JavaScript, and frameworks such as React or Angular, ensuring interfaces are attractive, responsive, and easy to use; they define how users interact with digital products, collaborate with designers and back-end developers to create seamless experiences across devices and browsers, and play a vital role in brand identity and digital engagement across industries like marketing, e-commerce, education, and fintech, with a career path offering remote flexibility, strong demand, and long-term growth.',
        },
       };

       return {
        title: `Front-End Developer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Front-End Developer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'JAM-stack Developer': {
      color: 'linear-gradient(-90deg, #4B93E9,rgb(135, 179, 232))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$130,000/year',
         shortDescription:
          'In the U.S., JAMstack developers receive strong salary packages due to rising demand for fast, secure, and scalable web solutions, with modern businesses adopting JAMstack for performancedriven apps.',
         jobMarket:
          'JAMstack developers build modern, high-performance websites using JavaScript, APIs, and Markup by separating the frontend from the backend to achieve faster load times, improved security, and easier scalability, often leveraging static site generators, headless CMSs, and cloud functions to deliver dynamic experiences; favored by businesses for speed, SEO, and simplicity, JAMstack developers are increasingly valuable in tech startups, content platforms, and e-commerce, reducing server costs, improving performance, and enabling scalable content workflows while combining frontend expertise with modern deployment tools, making them essential to today’s web evolution.',
        },
        'United Kingdom': {
         salary: '£56,750/year',
         shortDescription:
          'In the UK, JAMstack developers command competitive salary packages thanks to growing demand for fast, secure, and scalable web solutions, as modern businesses increasingly adopt JAMstack for performance-focused applications.',
         jobMarket:
          'JAMstack developers build modern, high-performance websites using JavaScript, APIs, and Markup by separating the frontend from the backend to achieve faster load times, improved security, and easier scalability, often leveraging static site generators, headless CMSs, and cloud functions to deliver dynamic experiences; favored by businesses for speed, SEO, and simplicity, JAMstack developers are increasingly valuable in tech startups, content platforms, and e-commerce, reducing server costs, improving performance, and enabling scalable content workflows while combining frontend expertise with modern deployment tools, making them essential to today’s web evolution.',
        },
        Qatar: {
         salary: 'QAR 193,200/year',
         shortDescription:
          'In Qatar, JAMstack developers receive attractive salary packages driven by the increasing demand for fast, secure, and scalable web solutions, as businesses modernise their digital presence with performance-oriented JAMstack applications.',
         jobMarket:
          'JAMstack developers build modern, high-performance websites using JavaScript, APIs, and Markup by separating the frontend from the backend to achieve faster load times, improved security, and easier scalability, often leveraging static site generators, headless CMSs, and cloud functions to deliver dynamic experiences; favored by businesses for speed, SEO, and simplicity, JAMstack developers are increasingly valuable in tech startups, content platforms, and e-commerce, reducing server costs, improving performance, and enabling scalable content workflows while combining frontend expertise with modern deployment tools, making them essential to today’s web evolution.',
        },
        'United Arab Emirates': {
         salary: 'AED 117,000/year',
         shortDescription:
          'In the UAE, JAMstack developers enjoy competitive salary packages due to the rising demand for fast, secure, and scalable web solutions, as many businesses embrace JAMstack to build highperformance, modern applications.',
         jobMarket:
          'JAMstack developers build modern, high-performance websites using JavaScript, APIs, and Markup by separating the frontend from the backend to achieve faster load times, improved security, and easier scalability, often leveraging static site generators, headless CMSs, and cloud functions to deliver dynamic experiences; favored by businesses for speed, SEO, and simplicity, JAMstack developers are increasingly valuable in tech startups, content platforms, and e-commerce, reducing server costs, improving performance, and enabling scalable content workflows while combining frontend expertise with modern deployment tools, making them essential to today’s web evolution.',
        },
       };

       return {
        title: `JAM-stack Developer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About JAM-stack Developer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'MERN-Stack Developer': {
      color: 'linear-gradient(-90deg, #9F1D53,rgb(206, 122, 157))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$130,000/year',
         shortDescription:
          'In the U.S., MERN Stack developers command competitive salary packages thanks to the growing demand for fast, secure, and scalable web solutions, as modern businesses increasingly adopt the MERN Stack to build high-performance applications.',
         jobMarket:
          'MERN stack developers are fullstack professionals who build complete web applications using MongoDB, Express.js, React, and Node.js, managing everything from database architecture to dynamic user interfaces within a single project; favored by startups for their speed and efficiency, MERN developers reduce development time and cost by handling both front-end and back-end, enabling real-time features, secure data handling, and seamless user experiences, making them highly valuable in today’s job market with strong career growth in freelancing, product teams, and enterprise-level development.',
        },
        'United Kingdom': {
         salary: '£60,000/year',
         shortDescription:
          'In the UK, MERN Stack developers earn competitive salaries as demand grows for fast, secure, and scalable web solutions, with businesses adopting MERN for high-performance apps.',
         jobMarket:
          'MERN stack developers are fullstack professionals who build complete web applications using MongoDB, Express.js, React, and Node.js, managing everything from database architecture to dynamic user interfaces within a single project; favored by startups for their speed and efficiency, MERN developers reduce development time and cost by handling both front-end and back-end, enabling real-time features, secure data handling, and seamless user experiences, making them highly valuable in today’s job market with strong career growth in freelancing, product teams, and enterprise-level development.',
        },
        Qatar: {
         salary: 'QAR 296,400/year',
         shortDescription:
          'In Qatar, MERN Stack developers command attractive salaries due to rising demand for fast, secure, and scalable web solutions, as businesses increasingly adopt MERN to build efficient, highperformance apps.',
         jobMarket:
          'MERN stack developers are fullstack professionals who build complete web applications using MongoDB, Express.js, React, and Node.js, managing everything from database architecture to dynamic user interfaces within a single project; favored by startups for their speed and efficiency, MERN developers reduce development time and cost by handling both front-end and back-end, enabling real-time features, secure data handling, and seamless user experiences, making them highly valuable in today’s job market with strong career growth in freelancing, product teams, and enterprise-level development.',
        },
        'United Arab Emirates': {
         salary: 'AED 216,000/year',
         shortDescription:
          'competitive salaries driven by growing demand for fast, secure, and scalable web solutions, with many businesses adopting MERN to create highperformance, efficient applications.',
         jobMarket:
          'MERN stack developers are fullstack professionals who build complete web applications using MongoDB, Express.js, React, and Node.js, managing everything from database architecture to dynamic user interfaces within a single project; favored by startups for their speed and efficiency, MERN developers reduce development time and cost by handling both front-end and back-end, enabling real-time features, secure data handling, and seamless user experiences, making them highly valuable in today’s job market with strong career growth in freelancing, product teams, and enterprise-level development.',
        },
       };

       return {
        title: `MERN-Stack Developer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About MERN-Stack Developer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'Next.js Specialist': {
      color: 'linear-gradient(-90deg, #E74B54,rgb(225, 173, 176))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$130,000/year',
         shortDescription:
          'In the U.S., Next.js Specialists command strong salary packages thanks to the rising demand for fast, secure, and scalable web solutions, as modern businesses increasingly adopt Next.js to build high-performance applications.',
         jobMarket:
          'Next.js specialists build fast, SEO-friendly, and scalable web applications using the powerful React framework, leveraging features like server-side rendering, static site generation, and API routes to deliver high-performance, search-optimized experiences; valued by businesses across e-commerce, SaaS, and marketing for merging frontend elegance with backend efficiency, they manage routing, authentication, data fetching, and deployment within one robust framework, making them essential as demand for modern, high-performing web apps continues to rise.',
        },
        'United Kingdom': {
         salary: '£60,000/year',
         shortDescription:
          'In the UK, Next.js Specialists receive competitive salary packages driven by growing demand for fast, secure, and scalable web solutions, as more businesses adopt Next.js to develop high-performance applications.',
         jobMarket:
          'Next.js specialists build fast, SEO-friendly, and scalable web applications using the powerful React framework, leveraging features like server-side rendering, static site generation, and API routes to deliver high-performance, search-optimized experiences; valued by businesses across e-commerce, SaaS, and marketing for merging frontend elegance with backend efficiency, they manage routing, authentication, data fetching, and deployment within one robust framework, making them essential as demand for modern, high-performing web apps continues to rise.',
        },
        Qatar: {
         salary: 'QAR 270,000/year',
         shortDescription:
          'In Qatar, Next.js Specialists earn attractive salaries due to increasing demand for fast, secure, and scalable web solutions, with businesses adopting Next.js to build efficient and high-performance applications.',
         jobMarket:
          'Next.js specialists build fast, SEO-friendly, and scalable web applications using the powerful React framework, leveraging features like server-side rendering, static site generation, and API routes to deliver high-performance, search-optimized experiences; valued by businesses across e-commerce, SaaS, and marketing for merging frontend elegance with backend efficiency, they manage routing, authentication, data fetching, and deployment within one robust framework, making them essential as demand for modern, high-performing web apps continues to rise.',
        },
        'United Arab Emirates': {
         salary: 'AED 210,000/year',
         shortDescription:
          'In the UAE, Next.js Specialists enjoy competitive salary packages as demand rises for fast, secure, and scalable web solutions, with many businesses leveraging Next.js to create high-performance, efficient applications.',
         jobMarket:
          'Next.js specialists build fast, SEO-friendly, and scalable web applications using the powerful React framework, leveraging features like server-side rendering, static site generation, and API routes to deliver high-performance, search-optimized experiences; valued by businesses across e-commerce, SaaS, and marketing for merging frontend elegance with backend efficiency, they manage routing, authentication, data fetching, and deployment within one robust framework, making them essential as demand for modern, high-performing web apps continues to rise.',
        },
       };

       return {
        title: `Next.js Specialist in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Next.js Specialist',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'React Native Developer': {
      color: 'linear-gradient(-90deg, #520A09,rgb(183, 121, 120))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$130,000/year',
         shortDescription:
          'In the U.S., React Native developers earn strong salaries as demand grows for fast, secure, scalable apps, with businesses adopting React Native for high-performance mobile solutions.',
         jobMarket:
          'React Native developers build cross-platform mobile apps using a single JavaScript codebase, enabling native-quality experiences on both iOS and Android while reducing development time and cost; highly valued across startups and enterprises, they integrate native APIs, craft intuitive interfaces, and leverage tools like Redux, Expo, and Firebase to deliver scalable, feature-rich apps—making React Native an essential skill in today’s rapidly growing mobile development landscape.',
        },
        'United Kingdom': {
         salary: '£60,000/year',
         shortDescription:
          'In the UK, React Native developers earn competitive salaries as businesses increasingly adopt the framework to build fast, secure, and scalable mobile apps for high-performance user experiences.',
         jobMarket:
          'React Native developers build cross-platform mobile apps using a single JavaScript codebase, enabling native-quality experiences on both iOS and Android while reducing development time and cost; highly valued across startups and enterprises, they integrate native APIs, craft intuitive interfaces, and leverage tools like Redux, Expo, and Firebase to deliver scalable, feature-rich apps—making React Native an essential skill in today’s rapidly growing mobile development landscape.',
        },
        Qatar: {
         salary: 'QAR 270,000/year',
         shortDescription:
          'In Qatar, React Native developers receive attractive salaries as demand rises for fast, secure, and scalable mobile apps, with businesses adopting React Native for high-performance digital solutions.',
         jobMarket:
          'React Native developers build cross-platform mobile apps using a single JavaScript codebase, enabling native-quality experiences on both iOS and Android while reducing development time and cost; highly valued across startups and enterprises, they integrate native APIs, craft intuitive interfaces, and leverage tools like Redux, Expo, and Firebase to deliver scalable, feature-rich apps—making React Native an essential skill in today’s rapidly growing mobile development landscape.',
        },
        'United Arab Emirates': {
         salary: 'AED 210,000/year',
         shortDescription:
          'In the UAE, React Native developers earn competitive salaries as companies embrace the framework to build fast, secure, and scalable mobile apps tailored for high-performance user experiences.',
         jobMarket:
          'React Native developers build cross-platform mobile apps using a single JavaScript codebase, enabling native-quality experiences on both iOS and Android while reducing development time and cost; highly valued across startups and enterprises, they integrate native APIs, craft intuitive interfaces, and leverage tools like Redux, Expo, and Firebase to deliver scalable, feature-rich apps—making React Native an essential skill in today’s rapidly growing mobile development landscape.',
        },
       };

       return {
        title: `React Native Developer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About React Native Developer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'DevOps Engineer': {
      color: 'linear-gradient(-90deg, #3B7F39,rgb(144, 200, 143))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$108,892/year',
         shortDescription:
          'In the U.S., DevOps Engineers earn high salaries as organizations seek efficient, scalable, and secure infrastructure, with modern businesses adopting DevOps for faster, reliable software delivery.',
         jobMarket:
          'DevOps engineers bridge the DevOps Engineer salary in UK gap between development and operations, ensuring smooth deployment, scaling, and maintenance of applications. They automate workflows, manage cloud infrastructure, monitor system performance, and ensure continuous integration and delivery (CI/CD). Their role is critical in reducing downtime, improving system reliability, and accelerating development cycles. DevOps combines coding, scripting, system administration, and process optimization. As businesses move to cloud-native and microservices architectures, DevOps engineers become indispensable. They work with tools like Docker, Kubernetes, Jenkins, and AWS to ensure robust and secure deployments. Companies value DevOps professionals for their ability to improve team collaboration, increase deployment speed, and maintain high software quality. Whether working in a startup or a global enterprise, DevOps engineers play a central role in modern software teams, driving operational excellence and engineering efficiency.',
        },
        'United Kingdom': {
         salary: '£50,441/year',
         shortDescription:
          'In the UK, DevOps Engineers receive competitive salaries due to growing demand for efficient, scalable, and secure infrastructure, as businesses increasingly adopt DevOps practices for faster, reliable software delivery.',
         jobMarket:
          'DevOps engineers bridge the DevOps Engineer salary in UK gap between development and operations, ensuring smooth deployment, scaling, and maintenance of applications. They automate workflows, manage cloud infrastructure, monitor system performance, and ensure continuous integration and delivery (CI/CD). Their role is critical in reducing downtime, improving system reliability, and accelerating development cycles. DevOps combines coding, scripting, system administration, and process optimization. As businesses move to cloud-native and microservices architectures, DevOps engineers become indispensable. They work with tools like Docker, Kubernetes, Jenkins, and AWS to ensure robust and secure deployments. Companies value DevOps professionals for their ability to improve team collaboration, increase deployment speed, and maintain high software quality. Whether working in a startup or a global enterprise, DevOps engineers play a central role in modern software teams, driving operational excellence and engineering efficiency.',
        },
        Qatar: {
         salary: 'QAR 504,000/year',
         shortDescription:
          'In Qatar, DevOps Engineers earn attractive salaries driven by rising demand for efficient, scalable, and secure infrastructure, with businesses adopting DevOps practices to accelerate and improve software delivery.',
         jobMarket:
          'DevOps engineers bridge the DevOps Engineer salary in UK gap between development and operations, ensuring smooth deployment, scaling, and maintenance of applications. They automate workflows, manage cloud infrastructure, monitor system performance, and ensure continuous integration and delivery (CI/CD). Their role is critical in reducing downtime, improving system reliability, and accelerating development cycles. DevOps combines coding, scripting, system administration, and process optimization. As businesses move to cloud-native and microservices architectures, DevOps engineers become indispensable. They work with tools like Docker, Kubernetes, Jenkins, and AWS to ensure robust and secure deployments. Companies value DevOps professionals for their ability to improve team collaboration, increase deployment speed, and maintain high software quality. Whether working in a startup or a global enterprise, DevOps engineers play a central role in modern software teams, driving operational excellence and engineering efficiency.',
        },
        'United Arab Emirates': {
         salary: 'AED 209,614/year',
         shortDescription:
          'salaries as demand grows for efficient, scalable, and secure infrastructure, with many companies adopting DevOps practices to enhance software delivery speed and reliability.',
         jobMarket:
          'DevOps engineers bridge the DevOps Engineer salary in UK gap between development and operations, ensuring smooth deployment, scaling, and maintenance of applications. They automate workflows, manage cloud infrastructure, monitor system performance, and ensure continuous integration and delivery (CI/CD). Their role is critical in reducing downtime, improving system reliability, and accelerating development cycles. DevOps combines coding, scripting, system administration, and process optimization. As businesses move to cloud-native and microservices architectures, DevOps engineers become indispensable. They work with tools like Docker, Kubernetes, Jenkins, and AWS to ensure robust and secure deployments. Companies value DevOps professionals for their ability to improve team collaboration, increase deployment speed, and maintain high software quality. Whether working in a startup or a global enterprise, DevOps engineers play a central role in modern software teams, driving operational excellence and engineering efficiency.',
        },
       };

       return {
        title: `DevOps Engineer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About DevOps Engineer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'Salesforce Specialist': {
      color: 'linear-gradient(-90deg,rgb(107, 120, 198), #192D9D )',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$80,000/year',
         shortDescription:
          'In the U.S., Salesforce Specialists earn strong salaries due to increasing demand for efficient, scalable, and secure CRM solutions, as businesses adopt Salesforce to enhance customer management and sales processes.',
         jobMarket:
          'Salesforce specialists manage and optimize business operations through Salesforce, the world’s leading customer relationship management (CRM) platform. They configure, customize, and integrate Salesforce to streamline sales, marketing, and service processes. These professionals analyze data, automate workflows, and ensure smooth user experiences for enterprise clients. As companies invest in customer-centric solutions, Salesforce expertise becomes vital. Specialists may focus on roles such as admin, developer, or consultant, each offering unique contributions to business efficiency. They help organizations close more deals, retain customers, and analyze performance. With certifications in various Salesforce clouds, these professionals are trusted to unlock the full potential of the CRM platform. Their role is in high demand across industries like finance, retail, healthcare, and tech. As customer data and analytics take center stage in decision-making, Salesforce specialists remain key to driving business success.',
        },
        'United Kingdom': {
         salary: '£39,000/year',
         shortDescription:
          'In the UK, Salesforce Specialists receive competitive salaries driven by growing demand for efficient and scalable CRM solutions, as more businesses adopt Salesforce to improve customer management and sales efficiency.',
         jobMarket:
          'Salesforce specialists manage and optimize business operations through Salesforce, the world’s leading customer relationship management (CRM) platform. They configure, customize, and integrate Salesforce to streamline sales, marketing, and service processes. These professionals analyze data, automate workflows, and ensure smooth user experiences for enterprise clients. As companies invest in customer-centric solutions, Salesforce expertise becomes vital. Specialists may focus on roles such as admin, developer, or consultant, each offering unique contributions to business efficiency. They help organizations close more deals, retain customers, and analyze performance. With certifications in various Salesforce clouds, these professionals are trusted to unlock the full potential of the CRM platform. Their role is in high demand across industries like finance, retail, healthcare, and tech. As customer data and analytics take center stage in decision-making, Salesforce specialists remain key to driving business success.',
        },
        Qatar: {
         salary: 'QAR 235,000/year',
         shortDescription:
          'In Qatar, Salesforce Specialists earn attractive salaries as demand grows for efficient and scalable CRM solutions, with businesses increasingly adopting Salesforce to enhance customer management and boost sales performance.',
         jobMarket:
          'Salesforce specialists manage and optimize business operations through Salesforce, the world’s leading customer relationship management (CRM) platform. They configure, customize, and integrate Salesforce to streamline sales, marketing, and service processes. These professionals analyze data, automate workflows, and ensure smooth user experiences for enterprise clients. As companies invest in customer-centric solutions, Salesforce expertise becomes vital. Specialists may focus on roles such as admin, developer, or consultant, each offering unique contributions to business efficiency. They help organizations close more deals, retain customers, and analyze performance. With certifications in various Salesforce clouds, these professionals are trusted to unlock the full potential of the CRM platform. Their role is in high demand across industries like finance, retail, healthcare, and tech. As customer data and analytics take center stage in decision-making, Salesforce specialists remain key to driving business success.',
        },
        'United Arab Emirates': {
         salary: 'AED 126,000/year',
         shortDescription:
          'In the UAE, Salesforce Specialists receive competitive salaries due to rising demand for efficient, scalable CRM solutions, as many companies adopt Salesforce to improve customer management and drive sales growth.',
         jobMarket:
          'Salesforce specialists manage and optimize business operations through Salesforce, the world’s leading customer relationship management (CRM) platform. They configure, customize, and integrate Salesforce to streamline sales, marketing, and service processes. These professionals analyze data, automate workflows, and ensure smooth user experiences for enterprise clients. As companies invest in customer-centric solutions, Salesforce expertise becomes vital. Specialists may focus on roles such as admin, developer, or consultant, each offering unique contributions to business efficiency. They help organizations close more deals, retain customers, and analyze performance. With certifications in various Salesforce clouds, these professionals are trusted to unlock the full potential of the CRM platform. Their role is in high demand across industries like finance, retail, healthcare, and tech. As customer data and analytics take center stage in decision-making, Salesforce specialists remain key to driving business success.',
        },
       };

       return {
        title: `Salesforce Specialist in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Salesforce Specialist',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'Microservices Developer': {
      color: 'linear-gradient(-90deg,rgb(218, 124, 215),rgb(226, 131, 175) )',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$133,000/year',
         shortDescription:
          'In the U.S., Microservices Developers earn strong salaries driven by increasing demand for efficient, scalable, and modular software architectures, as businesses adopt microservices to enhance application performance and agility.',
         jobMarket:
          'Microservices developers design software as a collection of small, independent services that work together. Unlike traditional monolithic apps, microservices allow developers to build flexible and scalable systems where each service handles a specific function. These professionals work with Docker, Kubernetes, REST APIs, and cloud platforms to deploy services that are easy to maintain and update independently. Microservices architecture is popular among large-scale apps requiring modular growth and real-time updates. Developers in this field are known for creating resilient, loosely coupled services that can be scaled or fixed without affecting the whole system. They collaborate closely with DevOps, frontend, and backend teams to ensure seamless integration and delivery. As software complexity grows, businesses increasingly adopt microservices to remain agile. Developers who understand this architecture are valuable assets in tech-forward companies focused on scalability, uptime, and innovation.',
        },
        'United Kingdom': {
         salary: '£78,752/year',
         shortDescription:
          'In the UK, Microservices Developers receive competitive salaries due to growing demand for efficient, scalable, and modular software architectures, as businesses adopt microservices to improve application performance and flexibility.',
         jobMarket:
          'Microservices developers design software as a collection of small, independent services that work together. Unlike traditional monolithic apps, microservices allow developers to build flexible and scalable systems where each service handles a specific function. These professionals work with Docker, Kubernetes, REST APIs, and cloud platforms to deploy services that are easy to maintain and update independently. Microservices architecture is popular among large-scale apps requiring modular growth and real-time updates. Developers in this field are known for creating resilient, loosely coupled services that can be scaled or fixed without affecting the whole system. They collaborate closely with DevOps, frontend, and backend teams to ensure seamless integration and delivery. As software complexity grows, businesses increasingly adopt microservices to remain agile. Developers who understand this architecture are valuable assets in tech-forward companies focused on scalability, uptime, and innovation.',
        },
        Qatar: {
         salary: 'QAR 360,000/year',
         shortDescription:
          'In Qatar, Microservices Developers earn attractive salaries driven by rising demand for efficient, scalable, and modular software architectures, as businesses adopt microservices to enhance application agility and performance.',
         jobMarket:
          'Microservices developers design software as a collection of small, independent services that work together. Unlike traditional monolithic apps, microservices allow developers to build flexible and scalable systems where each service handles a specific function. These professionals work with Docker, Kubernetes, REST APIs, and cloud platforms to deploy services that are easy to maintain and update independently. Microservices architecture is popular among large-scale apps requiring modular growth and real-time updates. Developers in this field are known for creating resilient, loosely coupled services that can be scaled or fixed without affecting the whole system. They collaborate closely with DevOps, frontend, and backend teams to ensure seamless integration and delivery. As software complexity grows, businesses increasingly adopt microservices to remain agile. Developers who understand this architecture are valuable assets in tech-forward companies focused on scalability, uptime, and innovation.',
        },
        'United Arab Emirates': {
         salary: 'AED 142,000/year',
         shortDescription:
          'In the UAE, Microservices Developers receive competitive salaries due to increasing demand for efficient, scalable, and modular software architectures, with many businesses adopting microservices to boost application performance.',
         jobMarket:
          'Microservices developers design software as a collection of small, independent services that work together. Unlike traditional monolithic apps, microservices allow developers to build flexible and scalable systems where each service handles a specific function. These professionals work with Docker, Kubernetes, REST APIs, and cloud platforms to deploy services that are easy to maintain and update independently. Microservices architecture is popular among large-scale apps requiring modular growth and real-time updates. Developers in this field are known for creating resilient, loosely coupled services that can be scaled or fixed without affecting the whole system. They collaborate closely with DevOps, frontend, and backend teams to ensure seamless integration and delivery. As software complexity grows, businesses increasingly adopt microservices to remain agile. Developers who understand this architecture are valuable assets in tech-forward companies focused on scalability, uptime, and innovation.',
        },
       };

       return {
        title: `Microservices Developer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Microservices Developer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'Blockchain Developer': {
      color: 'linear-gradient(-90deg, #B2850D,rgb(232, 207, 139))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$127,000/year',
         shortDescription:
          'In the U.S., Blockchain Developers earn strong salaries driven by growing demand for secure, decentralized, and transparent solutions, as businesses increasingly adopt blockchain technology to enhance trust and efficiency.',
         jobMarket:
          'Blockchain developers build decentralized applications (dApps) and smart contracts using technologies like Ethereum, Solidity, Hyperledger, and Web3. These developers create secure, transparent, and tamper-proof systems that eliminate the need for intermediaries. They are critical in industries like finance, supply chain, healthcare, and gaming where data integrity and trust are paramount. As digital assets and decentralized finance (DeFi) rise in popularity, blockchain expertise becomes more valuable. Developers in this field work on public, private, and hybrid blockchain systems to solve real-world problems. Their skills are also essential in creating NFTs, secure voting systems, and identity verification platforms. Blockchain development demands strong cryptographic knowledge, problem-solving, and understanding of distributed networks. As more companies adopt decentralized solutions, demand for blockchain professionals continues to grow. This career path offers innovation, high impact, and an opportunity to shape the future of digital ecosystems.',
        },
        'United Kingdom': {
         salary: '£100,000/year',
         shortDescription:
          'In the UK, Blockchain Developers receive competitive salaries due to rising demand for secure, decentralized, and transparent solutions, as businesses increasingly adopt blockchain technology to improve trust and operational efficiency.',
         jobMarket:
          'Blockchain developers build decentralized applications (dApps) and smart contracts using technologies like Ethereum, Solidity, Hyperledger, and Web3. These developers create secure, transparent, and tamper-proof systems that eliminate the need for intermediaries. They are critical in industries like finance, supply chain, healthcare, and gaming where data integrity and trust are paramount. As digital assets and decentralized finance (DeFi) rise in popularity, blockchain expertise becomes more valuable. Developers in this field work on public, private, and hybrid blockchain systems to solve real-world problems. Their skills are also essential in creating NFTs, secure voting systems, and identity verification platforms. Blockchain development demands strong cryptographic knowledge, problem-solving, and understanding of distributed networks. As more companies adopt decentralized solutions, demand for blockchain professionals continues to grow. This career path offers innovation, high impact, and an opportunity to shape the future of digital ecosystems.',
        },
        Qatar: {
         salary: 'QAR 178,500/year',
         shortDescription:
          'In Qatar, Blockchain Developers earn attractive salaries driven by growing demand for secure, decentralized, and transparent solutions, as businesses adopt blockchain technology to enhance trust and streamline operations.',
         jobMarket:
          'Blockchain developers build decentralized applications (dApps) and smart contracts using technologies like Ethereum, Solidity, Hyperledger, and Web3. These developers create secure, transparent, and tamper-proof systems that eliminate the need for intermediaries. They are critical in industries like finance, supply chain, healthcare, and gaming where data integrity and trust are paramount. As digital assets and decentralized finance (DeFi) rise in popularity, blockchain expertise becomes more valuable. Developers in this field work on public, private, and hybrid blockchain systems to solve real-world problems. Their skills are also essential in creating NFTs, secure voting systems, and identity verification platforms. Blockchain development demands strong cryptographic knowledge, problem-solving, and understanding of distributed networks. As more companies adopt decentralized solutions, demand for blockchain professionals continues to grow. This career path offers innovation, high impact, and an opportunity to shape the future of digital ecosystems.',
        },
        'United Arab Emirates': {
         salary: 'AED 162,000/year',
         shortDescription:
          'In the UAE, Blockchain Developers receive competitive salaries due to increasing demand for secure, decentralized, and transparent solutions, with many businesses adopting blockchain technology to boost trust and operational efficiency.',
         jobMarket:
          'Blockchain developers build decentralized applications (dApps) and smart contracts using technologies like Ethereum, Solidity, Hyperledger, and Web3. These developers create secure, transparent, and tamper-proof systems that eliminate the need for intermediaries. They are critical in industries like finance, supply chain, healthcare, and gaming where data integrity and trust are paramount. As digital assets and decentralized finance (DeFi) rise in popularity, blockchain expertise becomes more valuable. Developers in this field work on public, private, and hybrid blockchain systems to solve real-world problems. Their skills are also essential in creating NFTs, secure voting systems, and identity verification platforms. Blockchain development demands strong cryptographic knowledge, problem-solving, and understanding of distributed networks. As more companies adopt decentralized solutions, demand for blockchain professionals continues to grow. This career path offers innovation, high impact, and an opportunity to shape the future of digital ecosystems.',
        },
       };

       return {
        title: `Blockchain Developer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Blockchain Developer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'Data Scientist': {
      color: 'linear-gradient(-90deg,rgb(182, 120, 93), #8A3814 )',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$101,512/year',
         shortDescription:
          'In the U.S., Data Scientists earn strong salaries driven by growing demand for advanced data analysis, predictive modeling, and insights, as businesses increasingly rely on data to make informed decisions.',
         jobMarket:
          'Data scientists turn raw data into actionable insights that drive business decisions by collecting, processing, analyzing, and interpreting large datasets using statistical methods, programming, and machine learning techniques; with tools like Python, R, SQL, and TensorFlow, they uncover patterns and predict trends, playing a vital role across industries such as finance, healthcare, marketing, and logistics—helping businesses improve efficiency and profitability through data-driven strategies while supporting product development, customer targeting, risk assessment, and strategic planning; as data generation increases globally, their unique blend of technical expertise and business acumen makes them increasingly valuable in fueling innovation and automation.',
        },
        'United Kingdom': {
         salary: '£41,577/year',
         shortDescription:
          'In the UK, Data Scientists receive competitive salaries due to rising demand for advanced data analysis and predictive insights, as businesses increasingly leverage data to drive informed decision-making and growth.',
         jobMarket:
          'Data scientists turn raw data into actionable insights that drive business decisions by collecting, processing, analyzing, and interpreting large datasets using statistical methods, programming, and machine learning techniques; with tools like Python, R, SQL, and TensorFlow, they uncover patterns and predict trends, playing a vital role across industries such as finance, healthcare, marketing, and logistics—helping businesses improve efficiency and profitability through data-driven strategies while supporting product development, customer targeting, risk assessment, and strategic planning; as data generation increases globally, their unique blend of technical expertise and business acumen makes them increasingly valuable in fueling innovation and automation.',
        },
        Qatar: {
         salary: 'QAR 190,000/year',
         shortDescription:
          'In Qatar, Data Scientists earn attractive salaries driven by growing demand for advanced data analysis and predictive insights, as businesses leverage data to enhance decision-making and optimize performance.',
         jobMarket:
          'Data scientists turn raw data into actionable insights that drive business decisions by collecting, processing, analyzing, and interpreting large datasets using statistical methods, programming, and machine learning techniques; with tools like Python, R, SQL, and TensorFlow, they uncover patterns and predict trends, playing a vital role across industries such as finance, healthcare, marketing, and logistics—helping businesses improve efficiency and profitability through data-driven strategies while supporting product development, customer targeting, risk assessment, and strategic planning; as data generation increases globally, their unique blend of technical expertise and business acumen makes them increasingly valuable in fueling innovation and automation.',
        },
        'United Arab Emirates': {
         salary: 'AED 117,659/year',
         shortDescription:
          'In the UAE, Data Scientists receive competitive salaries due to increasing demand for advanced data analysis and predictive insights, as businesses harness data to improve decision-making and drive growth.',
         jobMarket:
          'Data scientists turn raw data into actionable insights that drive business decisions by collecting, processing, analyzing, and interpreting large datasets using statistical methods, programming, and machine learning techniques; with tools like Python, R, SQL, and TensorFlow, they uncover patterns and predict trends, playing a vital role across industries such as finance, healthcare, marketing, and logistics—helping businesses improve efficiency and profitability through data-driven strategies while supporting product development, customer targeting, risk assessment, and strategic planning; as data generation increases globally, their unique blend of technical expertise and business acumen makes them increasingly valuable in fueling innovation and automation.',
        },
       };

       return {
        title: `Data Scientist in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Data Scientist',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
     'Machine Learning Engineer': {
      color: 'linear-gradient(-90deg, #A66EFF,rgb(217, 193, 255))',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$121,326/year',
         shortDescription:
          'In the U.S., Machine Learning Engineers earn strong salaries fueled by growing demand for advanced AI models and automation, as businesses increasingly adopt machine learning to enhance innovation and efficiency.',
         jobMarket:
          'Machine learning engineers build systems that learn from data and improve over time without being explicitly programmed. They develop models that power predictive analytics, recommendation engines, fraud detection, speech recognition, and more. Using tools like Python, Scikit-learn, TensorFlow, and PyTorch, they train, validate, and optimize models for accuracy and performance. These engineers are in high demand across sectors such as tech, finance, healthcare, and autonomous systems. Their work bridges software engineering and data science, requiring strong mathematical foundations and programming skills. They collaborate with data scientists to deploy models into real-world systems. As artificial intelligence becomes central to innovation, machine learning engineers drive the creation of smart, adaptive applications. Their contributions are transforming industries and enabling machines to solve problems once limited to human intuition. It’s a fast-growing field with high impact and excellent career potential.',
        },
        'United Kingdom': {
         salary: '£51,427/year',
         shortDescription:
          'In the UK, Machine Learning Engineers receive competitive salaries driven by rising demand for advanced AI solutions and automation, as businesses increasingly implement machine learning to boost innovation and operational efficiency.',
         jobMarket:
          'Machine learning engineers build systems that learn from data and improve over time without being explicitly programmed. They develop models that power predictive analytics, recommendation engines, fraud detection, speech recognition, and more. Using tools like Python, Scikit-learn, TensorFlow, and PyTorch, they train, validate, and optimize models for accuracy and performance. These engineers are in high demand across sectors such as tech, finance, healthcare, and autonomous systems. Their work bridges software engineering and data science, requiring strong mathematical foundations and programming skills. They collaborate with data scientists to deploy models into real-world systems. As artificial intelligence becomes central to innovation, machine learning engineers drive the creation of smart, adaptive applications. Their contributions are transforming industries and enabling machines to solve problems once limited to human intuition. It’s a fast-growing field with high impact and excellent career potential.',
        },
        Qatar: {
         salary: 'QAR 136,000/year',
         shortDescription:
          'In Qatar, Machine Learning Engineers earn attractive salaries due to growing demand for advanced AI solutions and automation, as businesses adopt machine learning to enhance innovation and improve operational efficiency.',
         jobMarket:
          'Machine learning engineers build systems that learn from data and improve over time without being explicitly programmed. They develop models that power predictive analytics, recommendation engines, fraud detection, speech recognition, and more. Using tools like Python, Scikit-learn, TensorFlow, and PyTorch, they train, validate, and optimize models for accuracy and performance. These engineers are in high demand across sectors such as tech, finance, healthcare, and autonomous systems. Their work bridges software engineering and data science, requiring strong mathematical foundations and programming skills. They collaborate with data scientists to deploy models into real-world systems. As artificial intelligence becomes central to innovation, machine learning engineers drive the creation of smart, adaptive applications. Their contributions are transforming industries and enabling machines to solve problems once limited to human intuition. It’s a fast-growing field with high impact and excellent career potential.',
        },
        'United Arab Emirates': {
         salary: 'AED 151,696/year',
         shortDescription:
          'In the UAE, Machine Learning Engineers receive competitive salaries driven by increasing demand for advanced AI solutions and automation, as businesses leverage machine learning to boost innovation and operational efficiency.',
         jobMarket:
          'Machine learning engineers build systems that learn from data and improve over time without being explicitly programmed. They develop models that power predictive analytics, recommendation engines, fraud detection, speech recognition, and more. Using tools like Python, Scikit-learn, TensorFlow, and PyTorch, they train, validate, and optimize models for accuracy and performance. These engineers are in high demand across sectors such as tech, finance, healthcare, and autonomous systems. Their work bridges software engineering and data science, requiring strong mathematical foundations and programming skills. They collaborate with data scientists to deploy models into real-world systems. As artificial intelligence becomes central to innovation, machine learning engineers drive the creation of smart, adaptive applications. Their contributions are transforming industries and enabling machines to solve problems once limited to human intuition. It’s a fast-growing field with high impact and excellent career potential.',
        },
       };

       return {
        title: `Machine Learning Engineer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Machine Learning Engineer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
        'AI Engineer': {
         color: 'linear-gradient(-90deg, #3B7D7A,rgb(158, 201, 199) )',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$139,000/year',
         shortDescription:
          'In the U.S., AI Engineers earn strong salaries fueled by rising demand for cutting-edge artificial intelligence solutions, as businesses increasingly adopt AI to drive innovation and improve efficiency.',
         jobMarket:
          'AI engineers design intelligent systems that perform tasks requiring human-like intelligence—such as speech recognition, decision-making, and language translation—by developing algorithms with deep learning, NLP, and computer vision; they work on chatbots, virtual assistants, robotics, and autonomous vehicles using tools like Python, TensorFlow, PyTorch, and AI platforms like OpenAI and Hugging Face, playing a key role in digital transformation as businesses increasingly adopt AI to enhance automation and user experiences, making these engineers some of the most in-demand professionals in today’s tech landscape.',
        },
        'United Kingdom': {
         salary: '£49,427/year',
         shortDescription:
          'In the UK, AI Engineers receive competitive salaries driven by growing demand for advanced artificial intelligence solutions, as businesses increasingly adopt AI to enhance innovation and boost operational efficiency.',
         jobMarket:
          'AI engineers design intelligent systems that perform tasks requiring human-like intelligence—such as speech recognition, decision-making, and language translation—by developing algorithms with deep learning, NLP, and computer vision; they work on chatbots, virtual assistants, robotics, and autonomous vehicles using tools like Python, TensorFlow, PyTorch, and AI platforms like OpenAI and Hugging Face, playing a key role in digital transformation as businesses increasingly adopt AI to enhance automation and user experiences, making these engineers some of the most in-demand professionals in today’s tech landscape.',
        },
        Qatar: {
         salary: 'QAR 353,256/year',
         shortDescription:
          'In Qatar, AI Engineers earn attractive salaries due to rising demand for advanced artificial intelligence solutions, as businesses adopt AI technologies to drive innovation and improve operational efficiency.',
         jobMarket:
          'AI engineers design intelligent systems that perform tasks requiring human-like intelligence—such as speech recognition, decision-making, and language translation—by developing algorithms with deep learning, NLP, and computer vision; they work on chatbots, virtual assistants, robotics, and autonomous vehicles using tools like Python, TensorFlow, PyTorch, and AI platforms like OpenAI and Hugging Face, playing a key role in digital transformation as businesses increasingly adopt AI to enhance automation and user experiences, making these engineers some of the most in-demand professionals in today’s tech landscape.',
        },
        'United Arab Emirates': {
         salary: 'AED 295,000/year',
         shortDescription:
          'In the UAE, AI Engineers receive competitive salaries driven by increasing demand for advanced artificial intelligence solutions, as businesses leverage AI to enhance innovation and optimize operational efficiency.',
         jobMarket:
          'AI engineers design intelligent systems that perform tasks requiring human-like intelligence—such as speech recognition, decision-making, and language translation—by developing algorithms with deep learning, NLP, and computer vision; they work on chatbots, virtual assistants, robotics, and autonomous vehicles using tools like Python, TensorFlow, PyTorch, and AI platforms like OpenAI and Hugging Face, playing a key role in digital transformation as businesses increasingly adopt AI to enhance automation and user experiences, making these engineers some of the most in-demand professionals in today’s tech landscape.',
        },
       };

       return {
        title: `AI Engineer in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About AI Engineer',
          description: countryData[country].jobMarket,
         },
        ],
       };
      },
     },
        'Certified Ethical Hacker (CEH v13)': {
         color: 'linear-gradient(-90deg,rgb(233, 185, 90),rgb(231, 156, 5) )',
      tabs: [
       'United States',
       'United Kingdom',
       'Qatar',
       'United Arab Emirates',
      ],
      content: (country) => {
       // Country-specific data
       const countryData = {
        'United States': {
         salary: '$105,000/year',
         shortDescription:
          'In the U.S., CEH v13 certified professionals earn strong salaries due to rising demand for skilled ethical hackers, as businesses prioritize cybersecurity to protect against evolving cyber threats and breaches.',
         jobMarket:
          'Certified Ethical Hackers (CEH) are cybersecurity professionals trained to think and act like malicious hackers—but use their skills to defend systems; CEH v13, the latest version of this globally respected certification, equips them to identify vulnerabilities, test networks, and protect against cyber threats using tools like Metasploit, Wireshark, and Kali Linux, helping organizations across finance, government, healthcare, and tech prevent breaches, ransomware, and digital espionage while meeting global standards and driving strong career growth in cybersecurity.',
        },
        'United Kingdom': {
         salary: '£49,132/year',
         shortDescription:
          'In the UK, CEH v13 certified professionals receive competitive salaries driven by growing demand for skilled ethical hackers, as organizations focus on strengthening cybersecurity to combat evolving cyber threats.',
         jobMarket:
          'Certified Ethical Hackers (CEH) are cybersecurity professionals trained to think and act like malicious hackers—but use their skills to defend systems; CEH v13, the latest version of this globally respected certification, equips them to identify vulnerabilities, test networks, and protect against cyber threats using tools like Metasploit, Wireshark, and Kali Linux, helping organizations across finance, government, healthcare, and tech prevent breaches, ransomware, and digital espionage while meeting global standards and driving strong career growth in cybersecurity.',
        },
        Qatar: {
         salary: 'QAR 252,000/year',
         shortDescription:
          'In Qatar, CEH v13 certified professionals earn attractive salaries due to increasing demand for skilled ethical hackers, as businesses prioritize cybersecurity to defend against sophisticated and evolving cyber threats.',
         jobMarket:
          'Certified Ethical Hackers (CEH) are cybersecurity professionals trained to think and act like malicious hackers—but use their skills to defend systems; CEH v13, the latest version of this globally respected certification, equips them to identify vulnerabilities, test networks, and protect against cyber threats using tools like Metasploit, Wireshark, and Kali Linux, helping organizations across finance, government, healthcare, and tech prevent breaches, ransomware, and digital espionage while meeting global standards and driving strong career growth in cybersecurity.',
        },
        'United Arab Emirates': {
         salary: 'AED 100,000/year',
         shortDescription:
          'In the UAE, CEH v13 certified professionals receive competitive salaries driven by growing demand for skilled ethical hackers, as organizations focus on enhancing cybersecurity to protect against advanced and evolving cyber threats.',
         jobMarket:
          'Certified Ethical Hackers (CEH) are cybersecurity professionals trained to think and act like malicious hackers—but use their skills to defend systems; CEH v13, the latest version of this globally respected certification, equips them to identify vulnerabilities, test networks, and protect against cyber threats using tools like Metasploit, Wireshark, and Kali Linux, helping organizations across finance, government, healthcare, and tech prevent breaches, ransomware, and digital espionage while meeting global standards and driving strong career growth in cybersecurity.',
        },
       };

       return {
        title: `Certified Ethical Hacker (CEH v13) in ${country}`,
        data: [
         {
          salary: 'Average Salary',
          value: countryData[country].salary,
          shortDescription: countryData[country].shortDescription,
          heading: 'About Certified Ethical Hacker (CEH v13)',
          description: countryData[country].jobMarket,
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
    <h3 className="tp-section-title">Global Pay Scale</h3>
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
         {console.log('Ttems', item.color)}
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
          //   backgroundColor: '#f5f5f5', // Light gray background
          margin: '0 4px',
          borderRadius: '8px 8px 0 0',
         },
         '& .Mui-selected': {
          background:
           sidebarItems[activeSidebarItem]?.color || sidebarItems.color, //  background for selected tab
          color: 'white !important',
         },
         '& .MuiTabs-indicator': {
            backgroundColor: '#701DF0', // Hide the default indicator
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
             <h3>
              {row.salary} - <span style={{color: 'green'}}>{row.value}</span>
             </h3>
             {row.shortDescription && (
              <Typography className="mb-4">{row.shortDescription}</Typography>
             )}
             {row.heading && <h3>{row.heading}</h3>}
             {row.description && <Typography>{row.description}</Typography>}
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






