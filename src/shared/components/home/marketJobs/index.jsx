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

export default function TechStackJobsMarket() {
 const [activeSidebarItem, setActiveSidebarItem] = useState(
  'Junior Frontend Developer'
 );
 const [activeTab, setActiveTab] = useState(0);

 // Data structure for sidebar items and their associated tab content
 const sidebarItems = {
  'Junior Frontend Developer': {
   color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
       title: 'Junior Frontend Developer (React.js)',
       location: 'Lahore, Pakistan',
       postedDate: 'Posted May 20, 2025',
       salary: 'PKR. 55,000/Month',
       description:
        'Teraception is looking for a Talented Frontend developer (React.js).js (Minimum)This is a full-time on-site role for a Junior Software Engineer - React JS Developer located in Lahore. As a Junior Software Engineer, you will be responsible for designing, developing, and maintaining efficient, reusable, and reliable React JS applications, following best practices and coding standards. You will also work in collaboration with cross-functional teams to optimize customer .Responsibilities:Develop and maintain user-friendly web applications using React.js.Implement modern UI components using Tailwind CSS for responsive design.Optimize applications for maximum speed and scalability.Ensure the technical feasibility of UI/UX designs.Collaborate with designers and backend developers to integrate APIs and ensure smooth functionality.Write clean, reusable, and maintainable code following best practices.Debug and troubleshoot issues to enhance performance and user experience.Stay up to date with emerging frontend technologies and trends.Requirements:Bachelor degree in Computer ScienceMinimum 2 years of .js with typescript (not compulsory but preferred)...but most importantly, We offer an environment that is supportive, transparent and fun to work in..00 - Rs130,000.00 per monthApplication Question(s):How many years of hands-on .js?What is your Current and Expected',

       requirements: [
        "Bachelor's degree in Computer Science",
        'Minimum 1 years of experience with React.js',
        'Experience with JavaScript (preferred)',
        'Knowledge of responsive design principles',
       ],
       skills: [
        'REACT.JS',
        'JavaScript',
        'Tailwind CSS',
        'Typescript (preferred)',
        'Responsive Design',
        'API Integration',
        'Performance Optimization',
        'Debugging and Troubleshooting',
        'Clean & Maintainable Code',
       ],
      },
      {
       title: 'Junior Frontend Engineer (Component-Based Styling & UI )',
       location: 'Karachi, Pakistan',
       postedDate: 'Posted June 1, 2025',
       salary: 'PKR. 50,000/Month',
       description:
        'We are currently hiring a Junior Frontend Engineer who has foundational experience with HTML, CSS, SCSS, and JavaScript and a strong interest in developing modern, user-friendly web applications. As part of our frontend development team, you will be involved in turning creative UI/UX designs into pixel-perfect, accessible interfaces using semantic HTML5 and responsive SCSS styling. You should have a basic understanding of CSS architecture, BEM methodology, and modular design systems to ensure maintainability. Your JavaScript knowledge will be used to enhance interactivity and functionality, enabling features like animations, real-time updates, and dynamic content handling. This is an excellent opportunity for individuals who are eager to grow technically, work with current frontend technologies, and contribute to exciting, real-world products.',

       requirements: [
        '2+ years of web development experience',
        'Strong leadership skills',
        'Expertise in modern web technologies',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'BEM',
        'SCSS',
        'DOM',
        'BootStrap',
        'Flexbox ',
        'CSS (grid system) ',
       ],
      },
      {
       title: 'Junior UI Developer (Responsive Web Design & JavaScript)',
       location: 'Karachi, Pakistan',
       postedDate: 'Posted June 1, 2025',
       salary: 'PKR. 55,000/Month',
       description:
        'We are seeking a passionate and motivated Junior Frontend Developer with hands-on experience in HTML, CSS, SCSS, and JavaScript. The ideal candidate should possess a solid understanding of semantic HTML5 for building structured and accessible layouts, along with strong skills in CSS3 for styling and layout techniques such as Flexbox and Grid. You will be expected to write clean, modular styles using SCSS to ensure maintainability across larger projects. Your JavaScript skills will be essential in building interactive and dynamic user experiences, including form validation, DOM manipulation, and asynchronous data handling. Working closely with UI/UX designers and backend developers, you will transform design mockups into fully functional, responsive web interfaces while following best practices in code structure, performance optimization, and cross-browser compatibility.',
       requirements: [
        '1 years of web development experience',
        'Strong leadership camunication skills',
        'Focuses on converting designs into responsive web interfaces.',
        'SCSS and JavaScript for interactivity.',
       ],
       skills: [
        'SCSS',
        'DOM',
        'BootStrap',
        'CSS3',
        'BEM',
        'HTML5',
        'JavaScript',
       ],
      },
      {
       title: 'Junior Web Interface Developer (HTML5, SCSS, and JavaScript)',
       location: 'Karachi, Pakistan',
       postedDate: 'Posted June 1, 2025',
       salary: 'PKR. 60,000/Month',
       description:
        'We are seeking a passionate and motivated Junior Frontend Developer with hands-on experience in HTML, CSS, SCSS, and JavaScript. The ideal candidate should possess a solid understanding of semantic HTML5 for building structured and accessible layouts, along with strong skills in CSS3 for styling and layout techniques such as Flexbox and Grid. You will be expected to write clean, modular styles using SCSS to ensure maintainability across larger projects. Your JavaScript skills will be essential in building interactive and dynamic user experiences, including form validation, DOM manipulation, and asynchronous data handling. Working closely with UI/UX designers and backend developers, you will transform design mockups into fully functional, responsive web interfaces while following best practices in code structure, performance optimization, and cross-browser compatibility.',

       requirements: [
        '1 years of web development experience',
        'Strong leadership camunication skills',
        'Strong capabilty on performance inhanced',
        'Focuses on converting designs into responsive web interfaces.',
        'SCSS and JavaScript for interactivity.',
       ],
       skills: [
        'SCSS',
        'DOM',
        'Emphasizes',
        'performance',
        'accessibility',
        'HTML',
        'CSS',
        'Code cleaning',
       ],
      },
      {
       title: 'Junior Frontend Application Developer (UI + DOM )',
       location: 'Lahore, Pakistan',
       postedDate: 'Posted June 19, 2025',
       salary: 'PKR. 57,000/Month',
       description:
        'We are seeking a creative and technically capable Junior Frontend Developer who can effectively work with HTML, CSS, SCSS, and JavaScript to develop and enhance web applications. You will be responsible for creating well-structured HTML layouts, styling them with both CSS and SCSS while maintaining a clean and modular codebase. A major part of your work will involve using JavaScript to implement user interactivity, such as modals, sliders, dynamic forms, and API data rendering. You should be comfortable debugging code, optimizing load times, and ensuring that the UI remains consistent and responsive across different screen sizes and browsers. This role offers the opportunity to work in a collaborative environment where innovation and attention to detail are highly valued.',

       requirements: [
        '1+ years of web development experience',
        'Strong leadership camunication skills',
        'Strong capabilty on performance inhanced',
        'Focuses on converting designs into responsive web interfaces.',
        'SCSS and JavaScript for interactivity.',
       ],
       skills: [
        'SCSS',
        'DOM',
        'Browser api',
        'Web APIs',
        'XML',
        'HTML',
        'CSS',
        'HTMX',
       ],
      },
     ],
     'CAREERJET.com': [
      {
       title: 'Junior Frontend Developer (HTML/CSS/JavaScript/SCSS)',
       location: 'Austin, TX',
       postedDate: '2025-06-10',
       salary: '$180.00/Month',
       description:
        'BluePixel Technologies is hiring a Junior Frontend Developer for a 12-month W2 contract position in Austin. The ideal candidate will be responsible for creating clean, responsive, and user-friendly web applications using HTML, SCSS, and vanilla JavaScript.',
       responsibilities: [
        'Build and maintain interactive web pages and UI components.',
        'Collaborate with UX/UI designers to implement pixel-perfect designs.',
        'Use SCSS to create modular and reusable style components.',
        'Optimize code for performance and responsiveness.',
        'Assist senior developers with feature enhancements and bug fixes.',
        'Write unit-tested JavaScript for interactivity and DOM manipulation.',
        'Participate in code reviews and team stand-ups.',
       ],
       requirements: [
        '1–2 years of frontend development experience.',
        'Proficiency in HTML5, CSS3, SCSS, and JavaScript (ES6+).',
        'Familiarity with Git and modern frontend tooling.',
        'Basic understanding of responsive web design and browser compatibility.',
        'Eagerness to learn and contribute in a collaborative team environment.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'SCSS',
        'Git',
        'REST',
        'Responsive Web Design',
        'Figma',
        'Microsoft Office',
        'No experience needed',
       ],
      },
      {
       title: 'Junior UI Developer (Responsive Web Design & JavaScript)',
       location: 'Remote (USA)',
       postedDate: '2025-06-12',
       salary: '$200.00/Month',
       description:
        'Codemind Labs is seeking a Remote Junior Frontend Developer with a strong foundation in modern web development. This is a full-time, remote role with flexible hours and mentorship opportunities.',
       responsibilities: [
        'Develop responsive UI using HTML, CSS, SCSS, and JavaScript.',
        'Convert Figma or Adobe XD designs into functional layouts.',
        'Implement web components and reusable sections.',
        'Troubleshoot frontend bugs and optimize performance.',
        'Collaborate with backend developers to connect APIs.',
        'Contribute to frontend testing and documentation.',
       ],
       requirements: [
        '6 months – 1 year of relevant experience or internship.',
        'Strong grasp of core JavaScript and DOM APIs.',
        'Familiarity with SCSS and BEM naming conventions.',
        'Understanding of accessibility and web standards.',
        'Willingness to grow with a small but agile team.',
       ],
       skills: [
        'JavaScript',
        'SCSS',
        'DOM API',
        'Web Design',
        'Microsoft Excel',
        'Bash',
        'Git',
        'Debugging Tools',
        'Visual Studio Code',
        'Jira',
       ],
      },
      {
       title: 'Junior Frontend Engineer (Component-Based Styling & UI)',
       location: 'San Diego, CA',
       postedDate: '2025-06-09',
       salary: '$150.00/Month',
       description:
        "NovaEdge Solutions is looking to onboard a Junior Frontend Developer for an on-site role in San Diego. You'll work closely with senior engineers and designers on enterprise applications in the healthcare sector.",
       responsibilities: [
        'Build and enhance UI modules using HTML, CSS, and JavaScript.',
        'Maintain SCSS stylesheets and optimize for maintainability.',
        'Ensure UI accessibility and compliance with WCAG standards.',
        'Write JavaScript logic for UI behaviors and form validations.',
        'Integrate frontend code with REST APIs and backend services.',
        'Assist in functional testing and bug tracking.',
       ],
       requirements: [
        '1+ years of professional or academic frontend development.',
        'Familiarity with version control (Git).',
        'Experience with developer tools and browser debugging.',
        'Strong communication and teamwork skills.',
        'Bonus: Experience with frontend frameworks like Vue or React.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'Responsive Layouts',
        'Visio',
        'System Design',
        'Figma',
        'Adobe XD',
        'UI Prototyping',
        'SharePoint',
        'JavaScript',
       ],
      },
      {
       title: 'Junior Web Interface Developer (HTML5, SCSS, and JavaScript)',
       location: 'Boston, MA',
       postedDate: '2025-06-11',
       salary: '$190.00/Month',
       description:
        'ElevateX Technologies is hiring a Junior Frontend Developer for a full-time hybrid position in Boston. The role offers hands-on training and exposure to enterprise-level applications.',
       responsibilities: [
        'Develop clean, maintainable code using HTML5, SCSS, and JavaScript.',
        'Work with product teams to refine UI interactions and flows.',
        'Participate in Agile sprints and planning sessions.',
        'Optimize frontend components for SEO and page performance.',
        'Conduct user testing and gather feedback.',
        'Maintain code consistency and style guides.',
       ],
       requirements: [
        '1–2 years of frontend experience (commercial or academic).',
        'Good understanding of SCSS structure and file organization.',
        'Proficiency with browser dev tools and code debugging.',
        'Strong eye for detail and user experience.',
        'Knowledge of cross-browser and mobile responsiveness.',
       ],
       skills: [
        'JSP',
        'Git',
        'SVN',
        'SQL',
        'Tomcat',
        'Perl',
        'TS/SCI with Polygraph',
       ],
      },
      {
       title: 'Junior Frontend Application Developer (UI + DOM)',
       location: 'Chicago, IL',
       postedDate: '2025-06-08',
       salary: '$160.00/Month',
       description:
        'OrbitIQ is looking for a Junior Frontend Developer to support their internal tools team. This is a contract-to-hire opportunity for candidates based in or near Chicago.',
       responsibilities: [
        'Create reusable frontend components using HTML, CSS, SCSS.',
        'Build UI interactivity with JavaScript (no frameworks required).',
        'Ensure adherence to branding and UI guidelines.',
        'Work in an agile environment with frequent code reviews.',
        'Identify and fix UI/UX bugs across web applications.',
        'Collaborate with backend developers on integration tasks.',
       ],
       requirements: [
        'Minimum 1 year of JavaScript and styling experience.',
        'Experience using SCSS with utility-first or BEM structure.',
        'Familiar with Git workflows and project collaboration tools (Jira, Trello).',
        'Ability to understand design specifications and replicate them accurately.',
        'Passion for clean code and continuous learning.',
       ],
       skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'SCSS',
        'Git',
        "Bachelor's degree",
        'Microsoft Office',
        'Cybersecurity (basic)',
        'Oracle',
        '1 year experience',
       ],
      },
     ],
     'SIMPLYHIRED.com': [
      {
       title: 'Junior Web Developer',
       location: 'Remote / Hybrid (Tues–Thurs On-site)',
       postedDate: '2025-06-17',
       salary: '$190.00/Month',
       description:
        "Join our digital team as a Junior Web Developer. You'll contribute to the design, development, and maintenance of ministry websites while collaborating closely with marketing and IT teams.",
       responsibilities: [
        'Collaborate with Digital Communications and Marketing teams to shape website layout and functionality.',
        'Develop and maintain web applications using HTML, CSS (TailwindCSS), and JavaScript.',
        'Integrate multimedia content including graphics, audio, and video.',
        'Test websites for usability, performance, and accessibility across platforms.',
        'Resolve bugs and enhance existing site features.',
       ],
       requirements: [
        "Associate's degree required; Bachelor's degree preferred.",
        'Experience in front-end development using HTML, CSS, and JavaScript.',
        'Basic familiarity with PHP and Laravel is a plus.',
        'Strong attention to detail and problem-solving skills.',
        'Willingness to attend industry conferences and training.',
       ],
       skills: [
        'HTML',
        'CSS',
        'TailwindCSS',
        'JavaScript',
        'PHP',
        'Laravel',
        'Cross-platform Compatibility',
        'Web Accessibility',
        'Content Integration',
        'Bug Fixing',
       ],
      },
      {
       title: 'Junior Frontend Web Developer',
       location: 'Hybrid (On-site 3 Days/Week)',
       postedDate: '2025-06-17',
       salary: '$180.00/Month',
       description:
        'We are hiring a Junior Frontend Developer to support internal ministry websites and user tools. This role blends frontend styling  logic for optimized user experience.',
       responsibilities: [
        'Develop UI with HTML, CSS, and TailwindCSS.',
        'Coordinate with external vendors for third-party integration.',
        'Optimize performance and security of web applications.',
        'Ensure consistency across browsers and devices.',
       ],
       requirements: [
        'Entry-level role with foundational knowledge in web technologies.',
        'Bachelor’s degree preferred, Associate’s acceptable.',
        'Ability to learn and grow under senior supervision.',
        'Interest in ministry-focused digital outreach.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Version Control',
        'Accessibility Standards',
        'Web Testing',
        'Responsive Design',
        'Agile Workflow',
       ],
      },
      {
       title: 'Entry-Level Frontend Developer',
       location: 'Lahore / Hybrid',
       postedDate: '2025-06-17',
       salary: '$150.00/Month',
       description:
        'As an Entry-Level Frontend Developer, you will be responsible for developing visual web components and collaborating with other developers to build functional and attractive websites for ministry use.',
       responsibilities: [
        'Translate designs into clean, scalable UI using HTML and TailwindCSS.',
        'Implement JavaScript-based interactive features.',
        'Collaborate on integrating audio and video assets.',
        'Perform QA testing to detect bugs and usability issues.',
        'Follow coding standards and design guidelines.',
       ],
       requirements: [
        '1 year of HTML/CSS/JS experience, internships count.',
        'Understanding of accessibility best practices.',
        'Comfort working in hybrid teams.',
        'Eagerness to learn and contribute to Christian mission work.',
       ],
       skills: [
        'HTML',
        'CSS',
        'TailwindCSS',
        'JavaScript',
        'Multimedia Integration',
        'Testing & QA',
        'Cross-Browser Compatibility',
        'Team Collaboration',
        'Basic CMS Knowledge',
        'Problem Solving',
       ],
      },
      {
       title: 'Junior Frontend Software Developer (Web)',
       location: 'Texas, USA (Hybrid)',
       postedDate: '2025-06-17',
       salary: '$150.00/Month',
       description:
        'We are seeking a Frontend-savvy junior developer with strong fundamentals in HTML/CSS/JS. The position is ideal for someone passionate about mission-driven development and modern web practices.',
       responsibilities: [
        'Enhance frontend UI with modern HTML and CSS techniques.',
        'Fix bugs and performance issues across digital platforms.',
        'Ensure sites load quickly and meet mobile standards.',
        'Contribute to weekly sprints and code reviews.',
       ],
       requirements: [
        'Understanding of Laravel MVC structure.',
        'Comfortable using both frontend and backend tools.',
        'Good communication and willingness to work with external partners.',
        'Flexible with hybrid/remote schedule.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Agile Collaboration',
        'Debugging',
        'Mobile Responsiveness',
        'Version Control (Git)',
       ],
      },
      {
       title: 'Junior UI/UX Web Developer',
       location: 'Remote / US Time Zones Preferred',
       postedDate: '2025-06-17',
       salary: '$155.00/Month',
       description:
        'Looking for a Junior UI/UX Web Developer to create and enhance visually appealing and interactive ministry web portals. If you love crafting responsive layouts and working with mission-driven teams, apply now!',
       responsibilities: [
        'Build and maintain web interfaces with HTML/CSS/JS.',
        'Test for usability, accessibility, and speed.',
        'Fix bugs and iterate on user feedback.',
        'Collaborate with design and marketing for branding consistency.',
        'Attend digital team meetings and external training sessions.',
       ],
       requirements: [
        'Knowledge of UI/UX design principles.',
        'Degree in Computer Science or equivalent experience.',
        'Strong interest in ministry-related digital engagement.',
        'Self-starter and proactive communicator.',
       ],
       skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TailwindCSS',
        'UI/UX Principles',
        'Browser Testing',
        'Performance Optimization',
       ],
      },
     ],
     'GLASSDOOR.com': [
      {
       title: 'Front-End R&D Engineer - Entry Level',
       location: 'Bothell, WA, USA',
       postedDate: '2025-06-17',
       salary: '$165.00/Month',
       description:
        'Join as a Front-End R&D Engineer to prototype, design, and validate technologies for consumer health devices. Collaborate with cross-functional teams to turn scientific concepts into practical frontend solutions.',
       responsibilities: [
        'Work with R&D team to conceptualize and prototype new features.',
        'Apply engineering principles to build frontend functions for health products.',
        'Collaborate with UX, clinical, and systems engineering experts.',
        'Build and test functional concepts using modern tooling.',
        'Support the design, verification, and validation of new ideas.',
       ],
       requirements: [
        'Bachelor’s degree or 4+ years vocational experience in technical domains.',
        'Background in physics, engineering, or materials science preferred.',
        'Strong curiosity, creativity, and desire to innovate.',
        'Located in or willing to commute to Bothell, WA.',
        'US work authorization required.',
       ],
       skills: [
        'Prototyping',
        'CAD',
        'MATLAB',
        'Python',
        'Simulation & Modeling',
        'Signal Interpretation',
        'System-Level Thinking',
        'Lab Instrumentation',
        'Health Sensor Application',
       ],
      },
      {
       title: 'Junior Frontend Developer',
       location: 'Bothell, WA, USA',
       postedDate: '2025-06-17',
       salary: '$170.00/Month',
       description:
        'As a Junior Frontend Systems Developer, you will help design user-focused features and interfaces by combining engineering insight with frontend development tools for consumer oral healthcare innovation.',
       responsibilities: [
        'Collaborate on UI features informed by research and data.',
        'Prototype user-centered interfaces and experiences.',
        'Integrate engineering concepts into interactive components.',
        'Run usability testing and refine based on feedback.',
        'Support system thinking in multi-disciplinary environments.',
       ],
       requirements: [
        'Entry-level position, ideal for recent graduates.',
        'Background in sensor technology, optics, or biomedical engineering a plus.',
        'Passion for real-world impact through frontend development.',
        'Ability to work on-site 3+ days/week.',
       ],
       skills: [
        'Frontend Prototyping',
        'User Interface Concepts',
        'UX Collaboration',
        'CAD Tools',
        'HTML/CSS Fundamentals',
        'Cross-Disciplinary Communication',
        'Health-Oriented Engineering',
       ],
      },
      {
       title: 'Entry-Level Innovation Frontend Engineer',
       location: 'Bothell, WA, USA',
       postedDate: '2025-06-17',
       salary: '$150.00/Month',
       description:
        'Join a hands-on innovation team building real-life applications using frontend technologies in a scientific and consumer health setting. Work with physics, sensors, and intelligent devices.',
       responsibilities: [
        'Develop frontend components based on consumer and clinical feedback.',
        'Visualize and interpret sensor data for users through the interface.',
        'Support feature ideation with creative technical solutions.',
        'Participate in brainstorming and prototyping workshops.',
        'Work closely with researchers and designers for iteration cycles.',
       ],
       requirements: [
        'No prior experience required but hands-on mindset is essential.',
        'Understanding of frontend logic, component behavior, and data visualization.',
        'Excited about science + design intersections.',
        'Eager to work in a lab-heavy, product-driven environment.',
       ],
       skills: [
        'Data Visualization',
        'Frontend Prototyping',
        'Sensor Data Interpretation',
        'Rapid Testing',
        'Creative Engineering',
        'Scientific UI Design',
        'Python or MATLAB',
       ],
      },
      {
       title: 'Frontend Engineer',
       location: 'Bothell, WA, USA',
       postedDate: '2025-06-17',
       salary: '$195.00/Month',
       description:
        'Work on the front lines of product innovation by creating functional, scalable, and user-friendly prototypes in collaboration with product teams. Use your frontend skills to improve health tech solutions.',
       responsibilities: [
        'Build functional frontend prototypes for testing product concepts.',
        'Explore UX solutions based on consumer pain points.',
        'Apply system-level design thinking to the interface.',
        'Integrate signals from hardware into user-facing layers.',
        'Work in sprints and participate in product review cycles.',
       ],
       requirements: [
        'BS in Engineering, Physics, or Design-Technology domain.',
        'Strong analytical and prototyping skills.',
        'Clear communicator and self-driven learner.',
        'Collaborative in lab + team settings.',
       ],
       skills: [
        'UX-Focused Development',
        'Cross-Functional Prototyping',
        'Sensor-to-UI Flow',
        'HTML/CSS/JS Understanding',
        'Team Collaboration',
        'Interface Validation',
        'Human Factors Awareness',
       ],
      },
      {
       title: 'Frontend Developer Intern ',
       location: 'Bothell, WA, USA',
       postedDate: '2025-06-17',
       salary: '$150.00/Month',
       description:
        'A great opportunity for new grads interested in frontend technologies and hands-on innovation. Join a collaborative team working on health-focused devices and learn how to bridge UX with engineering logic.',
       responsibilities: [
        'Support senior developers in frontend feature experiments.',
        'Assist in usability testing and design iteration.',
        'Visualize physical feedback through digital UI components.',
        'Learn to integrate multi-disciplinary feedback into builds.',
        'Document development and testing processes.',
       ],
       requirements: [
        'Bachelor’s or equivalent training.',
        'Quick learner and team collaborator.',
        'Basic familiarity with UI tools and frontend tech.',
        'Passion for health innovation and devices.',
       ],
       skills: [
        'Frontend Concepts',
        'Usability Testing',
        'Digital Visualization',
        'UI Testing',
        'Engineering Support',
        'HTML/CSS/JS Basics',
        'Creative Thinking',
       ],
      },
     ],
     'INDEED.com': [
      {
       title: 'Junior Frontend Web Developer',
       location: 'Lahore, DHA 6',
       postedDate: '2025-06-17',
       salary: 'PKR. 55,000/Month',
       description:
        'Join our creative team as a Junior Frontend Developer and contribute to building engaging websites for a variety of industries. Ideal for recent graduates eager to start their career in a creative agency environment.',
       responsibilities: [
        'Assist in creating and maintaining responsive websites.',
        'Implement web layouts using HTML5, CSS3, and JavaScript.',
        'Work with version control systems and task runners.',
        'Support team with CMS content integration.',
       ],
       requirements: [
        'Bachelor’s degree or equivalent in Computer Science or related field.',
        'Strong foundational knowledge of frontend development.',
        'Basic experience with Git, jQuery, and task runners.',
        'Understanding of how CMS platforms work.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'jQuery',
        'Git',
        'Grunt/Gulp',
        'CMS',
        'Responsive Design',
       ],
      },
      {
       title: 'Frontend Developer (Mid-Level)',
       location: 'Lahore, Model Town',
       postedDate: '2025-06-17',
       salary: 'PKR. 50,000/Month',
       description:
        "We're looking for a Mid-Level Frontend Developer who can help deliver high-quality frontend solutions across various client projects. This role is perfect for a developer with agency experience looking to grow in a fast-paced studio.",
       responsibilities: [
        'Lead frontend development tasks within the creative team.',
        'Build interactive UI using modern HTML, CSS, and JavaScript.',
        'Collaborate with designers and backend developers.',
        'Optimize websites for performance and accessibility.',
       ],
       requirements: [
        'At least 1 year experience in a studio or creative agency.',
        'Solid understanding of JavaScript and frontend tooling.',
        'Comfortable using Git, Gulp, and SCSS.',
        'Ability to manage multiple projects simultaneously.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'SCSS',
        'Git',
        'CMS Experience',
        'jQuery',
        'Responsive Layouts',
       ],
      },
      {
       title: 'Creative Frontend Intern Developer',
       location: 'Middlesbrough, TS2 1RT, UK',
       postedDate: '2025-06-17',
       salary: 'PKR. 65,000/Month',
       description:
        'We offer internship opportunities for passionate aspiring frontend developers looking to gain hands-on experience in a dynamic creative environment.',
       responsibilities: [
        'Assist in frontend development and design tasks.',
        'Support senior developers in layout and styling work.',
        'Learn to integrate and test frontend changes.',
        'Attend internal workshops and training sessions.',
       ],
       requirements: [
        'Enrolled in or recently completed a web development course or degree.',
        'Basic understanding of HTML, CSS, and JavaScript.',
        'Eagerness to learn and grow in a real project environment.',
        'Portfolio or GitHub profile showcasing past work.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript (Basics)',
        'Git (Basics)',
        'jQuery (Basics)',
       ],
      },
      {
       title: 'Junior Frontend Engineer',
       location: 'Lahoare, Joher Town',
       postedDate: '2025-06-17',
       salary: 'PKR. 55,000/Month',
       description:
        'This role combines frontend development with Laravel templating and offers a chance to work on dynamic, PHP-driven web projects in a studio environment.',
       responsibilities: [
        'Develop and maintain frontend interfaces using Laravel Blade templates.',
        'Style pages using SCSS and follow design specs.',
        'Collaborate with backend team for smooth UI integration.',
        'Implement modern UX and animation libraries.',
       ],
       requirements: [
        '1+ years working with Laravel or similar MVC framework.',
        'Comfortable with SCSS and frontend build tools.',
        'Solid HTML5 and JavaScript knowledge.',
        'Experience integrating frontend components with APIs.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Laravel',
        'SCSS',
        'Git',
        'Blade Templating',
        'API Integration',
       ],
      },
      {
       title: 'Junior Creative',
       location: 'Lahore, Town Shhip',
       postedDate: '2025-06-17',
       salary: 'PKR. 60,000/Month',
       description:
        'We are seeking a frontend developer with an interest in digital marketing and SEO. This hybrid role supports both development and optimization of web experiences for client sites.',
       responsibilities: [
        'Develop websites and landing pages using HTML/CSS/JS.',
        'Collaborate with marketing team on SEO-friendly builds.',
        'Implement responsive design and optimize page speed.',
        'Maintain Git repositories and task automation flows.',
       ],
       requirements: [
        'Frontend experience (agency or freelance).',
        'Interest in SEO and digital marketing strategies.',
        'Ability to write semantic and accessible markup.',
        'Understanding of technical SEO basics is a plus.',
       ],
       skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'SEO Knowledge',
        'Responsive Design',
        'Git',
        'SCSS',
        'CMS Tools',
       ],
      },
     ],
    };

    return {
     title: `Junior Frontend Developer Jobs in ${country}`,
     data: countryData[country],
    };
   },
  },

  'JavaScript Developer': {
   color: 'linear-gradient(-90deg, #6929C5,rgb(194, 173, 223))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
       title: 'Junior JavaScript Developer',
       location: 'Lahore, Pakistan',
       postedDate: '2025-07-02',
       salary: '₨65,000/Month',
       description:
        "We’re hiring a junior developer ready to sharpen their frontend skills in a collaborative product team. You'll work on production-grade interfaces and build features users love. If you're confident in JavaScript basics and want to grow with guidance—this is your chance.",
       responsibilities: [
        'Assist in building interactive UIs using HTML, CSS, and JS.',
        'Write modular frontend logic with reusable code blocks.',
        'Help debug layout issues across multiple screen sizes.',
        'Work with designers to fine-tune UI components.',
       ],
       requirements: [
        '1 year of experience writing client-side JavaScript.',
        'Good understanding of event handling and DOM updates.',
        'Basic exposure to responsive design techniques.',
        'Strong motivation to improve and learn from peers.',
       ],
       skills: [
        'JavaScript',
        'HTML',
        'CSS',
        'DOM',
        'Responsive Websites',
        'Bootstrap',
       ],
       softwareHouse: 'Systems Limited',
      },
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Karachi, Pakistan',
       postedDate: '2025-07-01',
       salary: '₨67,000/Month',
       description:
        'If you’re just starting your dev journey and love creating smooth web experiences, join our growing team. We work on cross-platform projects that impact thousands of users daily. Learn by doing, and contribute to real projects from your first week.',
       responsibilities: [
        'Build clean and reusable UI components.',
        'Implement logic with JavaScript and Tailwind.',
        'Collaborate with backend teams for API integration.',
        'Fix bugs and perform code cleanup on legacy scripts.',
       ],
       requirements: [
        '1 year hands-on with JavaScript, HTML & CSS.',
        'Comfortable using Tailwind or Bootstrap.',
        'Understanding of frontend performance basics.',
        'Knowledge of Git and version control tools.',
       ],
       skills: [
        'JavaScript',
        'Tailwind',
        'HTML',
        'Git',
        'Functions Behind the Scene',
        'CSS',
       ],
       softwareHouse: '10Pearls',
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'Islamabad, Pakistan',
       postedDate: '2025-06-30',
       salary: '₨60,000/Month',
       description:
        "We're on the lookout for an entry-level frontend developer with a passion for problem-solving. You’ll be working on real-world applications that demand clean code and creative thinking. Bring your ideas, learn rapidly, and help us build smarter software.",
       responsibilities: [
        'Write efficient frontend logic for data-driven pages.',
        'Develop form-based interfaces using AJAX.',
        'Participate in planning and daily standups.',
        'Assist senior developers in improving code readability.',
       ],
       requirements: [
        '1 year of JavaScript development experience.',
        'Ability to use asynchronous patterns like AJAX.',
        'Understanding of DOM structure and lifecycle.',
        'Clear communication and teamwork mindset.',
       ],
       skills: ['JavaScript', 'AJAX', 'DOM', 'OOP', 'HTML', 'Data Structures'],
       softwareHouse: 'Ovex Technologies',
      },
      {
       title: 'Junior Frontend JavaScript Developer',
       location: 'Faisalabad, Pakistan',
       postedDate: '2025-06-29',
       salary: '₨70,000/Month',
       description:
        'Excited to bring your frontend ideas to life? We’re looking for a junior JavaScript developer to help design fast, functional, and mobile-first interfaces. Gain real-time project exposure and grow with a team focused on code quality and UI excellence.',
       responsibilities: [
        'Convert designs into responsive web layouts.',
        'Use MUI and JS logic to create interactive components.',
        'Test components for performance and accessibility.',
        'Fix bugs in cross-browser rendering.',
       ],
       requirements: [
        'Experience with JS libraries like MUI or Bootstrap.',
        '1 year of coding JavaScript projects.',
        'Good grip on critical rendering techniques.',
        'Understanding of browser compatibility issues.',
       ],
       skills: [
        'JavaScript',
        'MUI',
        'Critical Rendering',
        'Responsive Websites',
        'Prototype',
        'CSS',
       ],
       softwareHouse: 'Techlogix',
      },
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Multan, Pakistan',
       postedDate: '2025-06-28',
       salary: '₨62,000/Month',
       description:
        'Step into real-world frontend development with our energetic team. We build progressive web apps for multiple clients and want someone eager to learn and contribute. You’ll write JavaScript that powers meaningful digital interactions.',
       responsibilities: [
        'Build UI functionality for PWAs using JS and HTML.',
        'Manage DOM elements and data rendering logic.',
        'Apply MVC structure in building features.',
        'Update and document reusable code blocks.',
       ],
       requirements: [
        '1 year of JavaScript experience including DOM & MVC concepts.',
        'Understanding of structured design flow.',
        'Comfortable debugging UI in browser tools.',
        'Positive attitude toward learning and experimenting.',
       ],
       skills: ['JavaScript', 'MVC', 'HTML', 'DOM', 'PWA', 'Prototype'],
       softwareHouse: 'Arbisoft',
      },
     ],
     'CAREERJET.com': [
      {
       title: 'Junior JavaScript Developer',
       location: 'Helsinki, Finland',
       postedDate: '2025-06-30',
       salary: '$238.00/Month',
       description:
        "We're looking for a curious JavaScript enthusiast eager to grow in a fast-paced development environment. You'll contribute to scalable web interfaces and dynamic components. Work closely with senior devs to bring ideas to life. This is your chance to build real-world features used by thousands.",
       responsibilities: [
        'Assist in building responsive layouts using HTML, CSS, and JS.',
        'Support AJAX-based data flows between client and server.',
        'Contribute to UI fixes and prototype enhancements.',
        'Collaborate with designers to ensure smooth rendering across devices.',
       ],
       requirements: [
        '1 year of JavaScript experience in frontend projects.',
        'Understanding of DOM manipulation and AJAX requests.',
        'Comfortable working in component-based environments.',
        'Willingness to adapt quickly and learn new tools.',
       ],
       skills: [
        'JavaScript',
        'HTML',
        'CSS',
        'AJAX',
        'DOM',
        'Responsive Websites',
       ],
       softwareHouse: 'Reaktor',
      },
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Warsaw, Poland',
       postedDate: '2025-07-01',
       salary: '$245.00/Month',
       description:
        'Join a growing frontend team building accessible, user-friendly web applications. This role focuses on translating UI designs into real code. Learn by doing, grow through mentorship, and contribute to live production apps from day one. Perfect for a developer with a strong foundation.',
       responsibilities: [
        'Convert UI wireframes into reusable HTML/CSS components.',
        'Use Tailwind CSS for fast and responsive styling.',
        'Debug and improve frontend functionality across devices.',
        'Participate in daily standups and code reviews.',
       ],
       requirements: [
        '1 year of hands-on coding in JavaScript.',
        'Familiar with Tailwind or Bootstrap frameworks.',
        'Good understanding of responsive web principles.',
        'Basic knowledge of Git and version control workflows.',
       ],
       skills: [
        'JavaScript',
        'Tailwind',
        'HTML',
        'CSS',
        'Git',
        'Responsive Websites',
       ],
       softwareHouse: 'Netguru',
      },
      {
       title: 'Junior Frontend JavaScript Developer',
       location: 'Barcelona, Spain',
       postedDate: '2025-06-29',
       salary: '$259.00/Month',
       description:
        "We're seeking a junior frontend developer who enjoys coding delightful user experiences. You'll help build UI features in a collaborative environment. Explore modern frontend practices while working with real product teams. Get ready to bring creative interfaces to life.",
       responsibilities: [
        'Implement dynamic frontend features using JavaScript and CSS.',
        'Work on optimizing UI rendering and page performance.',
        'Participate in feature planning and sprint estimations.',
        'Test UI components across browsers and screen sizes.',
       ],
       requirements: [
        'Strong understanding of JavaScript fundamentals.',
        'Experience with frontend architecture (MVC pattern preferred).',
        'Basic exposure to rendering performance techniques.',
        'Comfort working with browser developer tools.',
       ],
       skills: [
        'JavaScript',
        'CSS',
        'Critical Rendering',
        'MVC',
        'DOM',
        'Prototype',
       ],
       softwareHouse: 'Codurance Spain',
      },
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Seoul, South Korea',
       postedDate: '2025-06-27',
       salary: '$240.00/Month',
       description:
        'Start your development career with a team that values learning and clean code. You’ll contribute to the frontend logic of interactive applications. This position is ideal for junior developers ready to go beyond tutorials. Your code will reach real users across the globe.',
       responsibilities: [
        'Write and maintain modular JavaScript functions.',
        'Connect frontend components using Google Apps Script.',
        'Enhance interactivity using event listeners and DOM events.',
        'Apply best practices in writing readable, scalable code.',
       ],
       requirements: [
        '1 year of experience in JavaScript coding environments.',
        'Comfortable with functions and browser APIs.',
        'Basic experience with Google Apps Script is a plus.',
        'Motivated to learn and improve daily.',
       ],
       skills: [
        'JavaScript',
        'Google App Script',
        'DOM',
        'Functions Behind the Scene',
        'HTML',
        'CSS',
       ],
       softwareHouse: 'Crescom',
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'Brussels, Belgium',
       postedDate: '2025-07-02',
       salary: '$263.00/Month',
       description:
        'Looking to make your mark as a developer? Join our product engineering team as a junior JavaScript developer and contribute to rich UI experiences. Learn from industry veterans, work with real frameworks, and build skills that last. Every task helps you grow.',
       responsibilities: [
        'Create functional UI using MUI and React components.',
        'Build logic-driven layouts powered by JavaScript.',
        'Work on AJAX-based data fetching and display.',
        'Refactor existing JS code for readability and speed.',
       ],
       requirements: [
        'Strong JS fundamentals with 1 year of coding practice.',
        'Familiar with modern UI libraries like MUI.',
        'Comfortable with async patterns (e.g. AJAX).',
        'Eager to take feedback and apply improvements.',
       ],
       skills: [
        'JavaScript',
        'MUI',
        'AJAX',
        'Data Structures',
        'Functions Behind the Scene',
        'CSS',
       ],
       softwareHouse: 'Emakina Belgium',
      },
     ],
     'SIMPLYHIRED.com': [
      {
       title: 'Junior JavaScript Developer',
       location: 'Austin, TX',
       postedDate: '2025-07-02',
       salary: '$245.00/Month',
       description:
        "Join our dynamic frontend team in Austin to build responsive, user-focused web features. From prototypes to production, you'll write functional JavaScript that improves user experience. Work with modern frameworks and stay in sync with design and QA teams.",
       responsibilities: [
        'Code and test dynamic UI features using HTML, CSS, and JavaScript.',
        'Collaborate on frontend structure and layout enhancements.',
        'Support responsive design updates across devices.',
        'Fix bugs and optimize client-side performance.',
       ],
       requirements: [
        '1 year experience writing JavaScript for the browser.',
        'Understanding of responsive layouts and DOM updates.',
        'Basic grasp of cross-browser compatibility.',
        'Familiarity with Git version control.',
       ],
       skills: [
        'JavaScript',
        'CSS',
        'HTML',
        'DOM',
        'Responsive Websites',
        'Bootstrap',
       ],
       softwareHouse: 'Cognizant Softvision',
      },
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Seattle, WA',
       postedDate: '2025-06-30',
       salary: '$260.00/Month',
       description:
        'Work with a team building interactive dashboards and user tools in a fast-paced environment. Your JavaScript code will handle both visuals and logic as part of our client-side product suite. Grow your skills while helping create clean, scalable interfaces.',
       responsibilities: [
        'Develop interface elements with JavaScript and component libraries.',
        'Maintain interactive views using AJAX and data-binding.',
        'Coordinate with QA teams to resolve bugs.',
        'Apply accessibility and UX standards into the workflow.',
       ],
       requirements: [
        '1 year of JavaScript experience in web apps.',
        'Comfortable working with DOM, events, and component trees.',
        'Experience with API integration using AJAX.',
        'Positive attitude toward learning and iteration.',
       ],
       skills: [
        'JavaScript',
        'AJAX',
        'DOM',
        'Tailwind',
        'Functions Behind the Scene',
        'OOP',
       ],
       softwareHouse: 'Smartsheet',
      },
      {
       title: 'Junior Frontend JavaScript Developer',
       location: 'San Diego, CA',
       postedDate: '2025-06-29',
       salary: '$250.00/Month',
       description:
        'Join a creative team focused on building intuitive frontend experiences. From landing pages to dashboard views, you’ll help bring designs to life with code. A great opportunity to level up your JavaScript expertise in a supportive and innovative setting.',
       responsibilities: [
        'Convert design mockups into responsive HTML/CSS/JS interfaces.',
        'Write structured frontend logic using reusable JavaScript.',
        'Enhance UX through interactive component behaviors.',
        'Fix layout inconsistencies and browser compatibility issues.',
       ],
       requirements: [
        '1 year experience in JavaScript-based development.',
        'Proficiency in HTML and styling with Tailwind or MUI.',
        'Good understanding of user behavior and rendering flow.',
        'Willingness to experiment with new JS methods and tools.',
       ],
       skills: [
        'JavaScript',
        'Tailwind',
        'MUI',
        'Critical Rendering',
        'Prototype',
        'Responsive Websites',
       ],
       softwareHouse: 'Seismic Software',
      },
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Boston, MA',
       postedDate: '2025-07-01',
       salary: '$235.00/Month',
       description:
        'Start your career with a role focused on UI functionality and clean code practices. You’ll support the frontend team in building components for web-based tools. Learn through real projects, code reviews, and hands-on problem solving alongside mentors.',
       responsibilities: [
        'Assist in writing frontend logic for dashboards and user flows.',
        'Work with DOM APIs to control dynamic elements.',
        'Integrate data into views using Google Apps Script.',
        'Contribute to UI enhancements and testing.',
       ],
       requirements: [
        '1 year JavaScript experience, including object-oriented patterns.',
        'Basic familiarity with Google Apps Script or similar tools.',
        'Understanding of event-driven JS execution.',
        'Team player mindset and attention to detail.',
       ],
       skills: [
        'JavaScript',
        'Google App Script',
        'OOP',
        'DOM',
        'Responsive Websites',
        'MVC',
       ],
       softwareHouse: 'Acquia',
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'Chicago, IL',
       postedDate: '2025-06-28',
       salary: '$255.00/Month',
       description:
        'Help us build user-facing features for enterprise web platforms. As a junior JavaScript developer, you’ll be responsible for enhancing UI behaviors, maintaining performance, and delivering value through quality code. A perfect fit for coders who love solving puzzles.',
       responsibilities: [
        'Create and maintain interactive frontend components.',
        'Implement rendering logic and real-time updates via socket.io.',
        'Test and refine JS modules for stability and performance.',
        'Support integration of frontend with backend APIs.',
       ],
       requirements: [
        'Strong foundation in JavaScript with 1 year of experience.',
        'Comfort using real-time data tools like socket.io.',
        'Experience working with modular JS codebases.',
        'Ability to learn and adapt to team workflows quickly.',
       ],
       skills: [
        'JavaScript',
        'Socket.io',
        'Data Structures',
        'Responsive Websites',
        'HTML',
        'CSS',
       ],
       softwareHouse: 'Bounteous',
      },
     ],
     'GLASSDOOR.com': [
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Denver, CO',
       postedDate: '2025-07-02',
       salary: '$258.00/Month',
       description:
        "We're looking for a motivated junior developer who’s eager to dive into real-world coding challenges. You'll work closely with senior engineers to build interactive web elements and clean frontend logic. If you're passionate about sleek UI and readable code, we want to hear from you.",
       responsibilities: [
        'Develop user-facing features with JavaScript and HTML.',
        'Write reusable UI components following design guidelines.',
        'Use AJAX to retrieve and display data dynamically.',
        'Work with QA to resolve UI bugs and rendering issues.',
       ],
       requirements: [
        '1 year of experience with frontend development.',
        'Understanding of DOM structure and JS event handling.',
        'Familiar with AJAX and asynchronous code.',
        'Good grasp of browser behavior and CSS layout.',
       ],
       skills: [
        'JavaScript',
        'HTML',
        'CSS',
        'AJAX',
        'DOM',
        'Responsive Websites',
       ],
       softwareHouse: 'Ibotta',
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'Atlanta, GA',
       postedDate: '2025-07-01',
       salary: '$240.00/Month',
       description:
        'Join a fast-growing digital team focused on developing accessible, performant web apps. You’ll work on UI features that scale with real data and user input. Perfect for someone ready to move beyond bootcamps and into live product development.',
       responsibilities: [
        'Implement responsive layouts using Tailwind CSS.',
        'Manage DOM updates and conditional rendering.',
        'Write and maintain JavaScript-based utilities.',
        'Participate in weekly planning and sprint reviews.',
       ],
       requirements: [
        'Solid understanding of JavaScript fundamentals.',
        'Experience with Tailwind or Bootstrap preferred.',
        'Basic Git knowledge for version control.',
        '1 year of real-world or internship-level experience.',
       ],
       skills: [
        'JavaScript',
        'Tailwind',
        'DOM',
        'Bootstrap',
        'Git',
        'Responsive Websites',
       ],
       softwareHouse: 'Mailchimp',
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'Portland, OR',
       postedDate: '2025-06-30',
       salary: '$235.00/Month',
       description:
        'We’re hiring an entry-level developer to help us build frontend components for e-commerce and analytics dashboards. This is a learning-heavy role with real impact, ideal for someone ready to grow into a full-stack or frontend specialist over time.',
       responsibilities: [
        'Write dynamic JavaScript modules and utilities.',
        'Use MVC pattern to organize frontend code.',
        'Ensure pixel-perfect integration with design teams.',
        'Collaborate on rendering optimization techniques.',
       ],
       requirements: [
        '1 year of JavaScript experience in personal or client projects.',
        'Familiarity with MVC and modular code structure.',
        'Comfortable working in multi-disciplinary teams.',
        'Strong attention to UI detail and browser testing.',
       ],
       skills: [
        'JavaScript',
        'MVC',
        'CSS',
        'Critical Rendering',
        'DOM',
        'Prototype',
       ],
       softwareHouse: 'New Relic',
      },
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Philadelphia, PA',
       postedDate: '2025-06-29',
       salary: '$260.00/Month',
       description:
        'We’re on the hunt for a junior developer with sharp problem-solving skills and a passion for clean, efficient code. Work alongside experienced engineers to design features, fix bugs, and learn the inner workings of high-traffic websites.',
       responsibilities: [
        'Develop interactive web elements using JavaScript.',
        'Work with API responses to populate dynamic UIs.',
        'Fix layout issues and test cross-browser compatibility.',
        'Maintain code documentation and best practices.',
       ],
       requirements: [
        '1 year of JS experience in projects or internships.',
        'Comfortable working with APIs and JSON data.',
        'Knowledge of responsive design principles.',
        'Basic debugging and dev tools familiarity.',
       ],
       skills: [
        'JavaScript',
        'Responsive Websites',
        'API Integration',
        'AJAX',
        'HTML',
        'CSS',
       ],
       softwareHouse: 'Guru Technologies',
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'Phoenix, AZ',
       postedDate: '2025-06-28',
       salary: '$250.00/Month',
       description:
        "If you're ready to take your JavaScript skills to the next level, we’ve got a place for you. Join our engineering team to help build web tools and frontend features used across enterprise systems. Expect a learning curve—and lots of support.",
       responsibilities: [
        'Create logic-driven UI using vanilla JS and reusable components.',
        'Participate in team code reviews and pair programming sessions.',
        'Debug and improve performance of core modules.',
        'Adapt interfaces for different screen sizes and user roles.',
       ],
       requirements: [
        'Minimum 1 year experience working with JavaScript.',
        'Understanding of reusable component structure.',
        'Basic exposure to event-driven architecture.',
        'Strong interest in scaling and optimization.',
       ],
       skills: [
        'JavaScript',
        'OOP',
        'Responsive Websites',
        'Data Structures',
        'HTML',
        'Socket.io',
       ],
       softwareHouse: 'Axway',
      },
     ],
     'INDEED.com': [
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Berlin, Germany',
       postedDate: '2025-07-01',
       salary: '$250.00/Month',
       description:
        'We’re hiring entry-level developers ready to jump into real-world projects with a fast-moving European product team. Work on modern JavaScript applications, refine your logic, and learn how scalable frontends are made.',
       responsibilities: [
        'Assist in building UI logic and dynamic content features.',
        'Optimize frontend performance and load times.',
        'Apply critical rendering concepts to improve UX.',
        'Collaborate on debugging tasks and layout fixes.',
       ],
       requirements: [
        'Basic understanding of JS optimization and rendering flow.',
        '1 year of JavaScript programming experience.',
        'Hands-on experience with responsive design.',
        'Comfort using browser dev tools for debugging.',
       ],
       skills: [
        'JavaScript',
        'Critical Rendering',
        'CSS',
        'HTML',
        'Prototype',
        'Responsive Websites',
       ],
       softwareHouse: 'Zalando Tech',
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'Paris, France',
       postedDate: '2025-06-30',
       salary: '$240.00/Month',
       description:
        'Join our Paris-based tech team to work on elegant, fast, and functional interfaces. Ideal for someone who’s explored the basics and is now ready to apply their skills in a real production environment. We build apps with both style and structure.',
       responsibilities: [
        'Write JS logic for dynamic sections of the app.',
        'Manage and update reusable components using MVC architecture.',
        'Enhance user experience through clean, interactive code.',
        'Debug and test layout behavior across screen sizes.',
       ],
       requirements: [
        'Good understanding of JavaScript structure and design patterns.',
        '1 year working with frontend interfaces and MVC logic.',
        'Willingness to adapt to new tools and processes.',
        'Basic knowledge of frontend testing.',
       ],
       skills: ['JavaScript', 'MVC', 'DOM', 'CSS', 'HTML', 'OOP'],
       softwareHouse: 'Capgemini France',
      },
      {
       title: 'Entry-Level JavaScript Developer',
       location: 'Sydney, Australia',
       postedDate: '2025-06-29',
       salary: '$235.00/Month',
       description:
        'Looking to grow your frontend career down under? Join an experienced software team in Sydney to contribute to client-facing interfaces and performance optimization. We prioritize clean code, great design, and developer growth.',
       responsibilities: [
        'Build and test UI elements using JavaScript and Tailwind CSS.',
        'Apply functions behind the scene for dynamic behavior.',
        'Integrate APIs into live components using AJAX.',
        'Fix styling and behavior issues across viewports.',
       ],
       requirements: [
        '1 year JavaScript experience in real or mock projects.',
        'Understanding of frontend workflows and user interaction.',
        'Basic command of AJAX and dynamic content rendering.',
        'Team player attitude with attention to detail.',
       ],
       skills: [
        'JavaScript',
        'Tailwind',
        'AJAX',
        'Functions Behind the Scene',
        'HTML',
        'CSS',
       ],
       softwareHouse: 'Atlassian',
      },
      {
       title: 'Junior Frontend JavaScript Developer',
       location: 'Dubai, UAE',
       postedDate: '2025-06-28',
       salary: '$255.00/Month',
       description:
        'Join a growing tech hub in Dubai and build your future with our modern frontend team. Work on scalable, mobile-friendly web interfaces for finance and enterprise applications. A role with strong mentorship and exposure to real products.',
       responsibilities: [
        'Develop scalable UI logic using vanilla JS and modern CSS.',
        'Build cross-platform web layouts using best practices.',
        'Use real-time data handling with socket.io and APIs.',
        'Collaborate with product and QA teams regularly.',
       ],
       requirements: [
        '1 year experience in web development using JavaScript.',
        'Familiar with real-time communication tools.',
        'Understanding of user-centric design principles.',
        'Ability to debug and optimize frontends efficiently.',
       ],
       skills: [
        'JavaScript',
        'Socket.io',
        'CSS',
        'HTML',
        'Responsive Websites',
        'Data Structures',
       ],
       softwareHouse: 'InstaShop Tech',
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'Toronto, Canada',
       postedDate: '2025-07-02',
       salary: '$260.00/Month',
       description:
        'Kickstart your frontend development career at a top-tier Canadian software house. Work closely with a team of designers and developers to bring intuitive UI experiences to life. Your work will impact real users and products from the first day.',
       responsibilities: [
        'Build UI features using JavaScript and responsive frameworks.',
        'Fix rendering bugs and cross-browser issues.',
        'Participate in design implementation and sprint planning.',
        'Write clean, reusable JavaScript code for components.',
       ],
       requirements: [
        '1 year of frontend development experience.',
        'Understanding of HTML, CSS, and DOM manipulation.',
        'Basic Git and workflow familiarity.',
        'Strong problem-solving and collaboration skills.',
       ],
       skills: [
        'JavaScript',
        'Responsive Websites',
        'Bootstrap',
        'DOM',
        'HTML',
        'Git',
       ],
       softwareHouse: 'Shopify',
      },
     ],
    };
    return {
     title: `JavaScript Developer Jobs in ${country}`,
     data: countryData[country],
    };
   },
  },

  'Front-End Developer': {
   color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
       title: 'Frontend Developer – React Ecosystem',
       location: 'Lahore, Pakistan',
       postedDate: '2025-07-02',
       salary: '₨85,000/Month',
       description:
        "We're looking for a frontend developer to craft dynamic UIs using React and Tailwind in our fast-paced startup environment. You'll work on performance optimization and interactive real-time modules.",
       responsibilities: [
        'Develop reusable UI components with Next.js.',
        'Work with REST APIs and implement AJAX-based data loading.',
        'Collaborate with UI/UX designers to maintain design consistency.',
        'Improve rendering performance and responsiveness across platforms.',
       ],
       requirements: [
        '1.5 years experience in frontend development.',
        'Familiar with Tailwind and component-based architecture.',
        'Strong skills in JS rendering and layout troubleshooting.',
        'Knowledge of asynchronous data flow and lifecycle methods.',
       ],
       skills: [
        'react',
        'html',
        'javascript',
        'next.js',
        'css',
        'tailwind',
        'ajax',
        'data structures',
        'responsive websites',
        'MUI',
       ],
       softwareHouse: 'Systems Limited',
      },
      {
       title: 'Frontend React Developer',
       location: 'Islamabad, Pakistan',
       postedDate: '2025-07-01',
       salary: '₨88,000/Month',
       description:
        'Join our Islamabad-based software house and help shape enterprise-grade dashboards using React and Tailwind. You’ll contribute to UI systems that interact with real-time services.',
       responsibilities: [
        'Build modern UI using Next.js and Tailwind.',
        'Integrate with backend APIs using AJAX and fetch.',
        'Ensure mobile-first responsive design across components.',
        'Optimize DOM performance and component rendering.',
       ],
       requirements: [
        '1 year of experience in frontend web development.',
        'Clear understanding of modern JS and component states.',
        'Comfortable using Tailwind, Bootstrap, or MUI.',
        'Familiar with REST API consumption and UI testing.',
       ],
       skills: [
        'html',
        'tailwind',
        'css',
        'next.js',
        'javascript',
        'react',
        'ajax',
        'dom',
        'functions behind the scene',
        'OOP',
       ],
       softwareHouse: 'Techlogix',
      },
      {
       title: 'Frontend Developer – UI with ML Features',
       location: 'Karachi, Pakistan',
       postedDate: '2025-06-30',
       salary: '₨90,000/Month',
       description:
        "We're hiring a frontend developer excited to integrate machine learning models directly into web UIs. You'll be developing intuitive interfaces with Tailwind, React, and TensorFlow.js.",
       responsibilities: [
        'Create React components and integrate ML-driven logic.',
        'Use Tailwind and MUI to style scalable interfaces.',
        'Implement dynamic views with data from TensorFlow.js.',
        'Write clean, modular code and follow MVC structure.',
       ],
       requirements: [
        '1.5 years of experience with modern JS tools.',
        'Basic understanding of machine learning frontend usage.',
        'Familiar with MUI and advanced Tailwind utilities.',
        'Experience working with design systems and wireframes.',
       ],
       skills: [
        'javascript',
        'react',
        'html',
        'css',
        'tailwind',
        'next.js',
        'tensorflow.js',
        'machine learning',
        'MVC',
        'critical rendering',
       ],
       softwareHouse: '10Pearls',
      },
      {
       title: 'React Frontend Developer – Real-Time UI',
       location: 'Multan, Pakistan',
       postedDate: '2025-06-29',
       salary: '₨82,000/Month',
       description:
        'We’re hiring a frontend developer with strong JavaScript skills and a flair for real-time UI. You’ll build interactive platforms using React, socket.io, and Google App Script integrations.',
       responsibilities: [
        'Develop UI with React and Next.js for data-driven dashboards.',
        'Apply Tailwind and styled-components for scalable design.',
        'Use socket.io and AJAX to display live content.',
        'Optimize DOM performance for low-latency environments.',
       ],
       requirements: [
        '1 year of frontend experience with dynamic UI development.',
        'Experience with real-time data rendering and sync.',
        'Basic understanding of Google App Script integration.',
        'Strong grasp of JS events, prototype chaining, and OOP.',
       ],
       skills: [
        'html',
        'javascript',
        'tailwind',
        'react',
        'next.js',
        'css',
        'socket.io',
        'google app script',
        'OOP',
        'prototype',
       ],
       softwareHouse: 'Arbisoft',
      },
      {
       title: 'Frontend Developer – Modular UI & Components',
       location: 'Peshawar, Pakistan',
       postedDate: '2025-06-28',
       salary: '₨80,000/Month',
       description:
        "Join our Peshawar team to help build scalable web components with Tailwind and React. You'll work across responsive layouts, reusable modules, and logic-based interface flows.",
       responsibilities: [
        'Design pixel-perfect UIs using Tailwind and React.',
        'Manage state with hooks and component props.',
        'Connect with API endpoints and render interactive elements.',
        'Collaborate on reusable UI logic and pattern libraries.',
       ],
       requirements: [
        '1 to 1.5 years of experience in frontend web apps.',
        'Strong CSS architecture and layout structuring skills.',
        'Comfortable using component libraries like MUI or Bootstrap.',
        'Knowledge of performance bottlenecks and rendering optimization.',
       ],
       skills: [
        'tailwind',
        'react',
        'html',
        'css',
        'javascript',
        'next.js',
        'bootstraps',
        'dom',
        'responsive websites',
        'functions behind the scene',
       ],
       softwareHouse: 'VentureDive',
      },
     ],
     'CAREERJET.com': [
      {
       title: 'Frontend Developer – React Ecosystem',
       location: 'Austin, TX',
       postedDate: '2025-07-02',
       salary: '$285.00/Month',
       description:
        "Looking for a React developer to build clean and scalable interfaces for web applications. You'll be integrating real-time data and working closely with designers on highly responsive UIs.",
       responsibilities: [
        'Develop React components using Tailwind and Next.js.',
        'Work with real-time updates via socket.io and AJAX.',
        'Maintain UI consistency across all devices.',
        'Contribute to performance optimization and page rendering.',
       ],
       requirements: [
        '1.5 years of React/Next.js experience.',
        'Strong command over frontend state and structure.',
        'Able to work on dynamic data and rendering flow.',
        'Comfortable working in cross-functional agile teams.',
       ],
       skills: [
        'tailwind',
        'html',
        'react',
        'css',
        'javascript',
        'next.js',
        'socket.io',
        'ajax',
        'responsive websites',
        'OOP',
       ],
       softwareHouse: 'Indeed',
      },
      {
       title: 'React Frontend Developer',
       location: 'San Jose, CA',
       postedDate: '2025-07-01',
       salary: '$288.00/Month',
       description:
        'Join a growing team that builds data-driven dashboards and progressive interfaces using React and Next.js. Help us scale up our user experience with modular and efficient code.',
       responsibilities: [
        'Write reusable components using React and Next.js.',
        'Apply CSS methodologies and Tailwind for styling.',
        'Integrate APIs via AJAX and manage DOM updates.',
        'Optimize apps for mobile and desktop platforms.',
       ],
       requirements: [
        '1 year of experience in React-based frontend roles.',
        'Familiarity with DOM manipulation and rendering cycles.',
        'Strong foundational HTML, JS, and CSS skills.',
        'Knowledge of API integration and SPA structure.',
       ],
       skills: [
        'javascript',
        'css',
        'html',
        'next.js',
        'react',
        'tailwind',
        'ajax',
        'dom',
        'bootstraps',
       ],
       softwareHouse: 'eBay Inc.',
      },
      {
       title: 'Frontend Engineer – UI with ML Integration',
       location: 'Seattle, WA',
       postedDate: '2025-06-30',
       salary: '$290.00/Month',
       description:
        'We’re hiring a frontend engineer excited to work with ML-powered dashboards and modern JS stacks. This role blends user interaction, visual design, and smart data workflows using React and TensorFlow.js.',
       responsibilities: [
        'Design and implement interfaces using React and Tailwind.',
        'Integrate machine learning models with TensorFlow.js.',
        'Build reusable components and manage state with Redux.',
        'Ensure responsiveness and cross-browser compatibility.',
       ],
       requirements: [
        '1.5 years experience in frontend or full-stack apps.',
        'Experience with ML libraries and frontend logic.',
        'Good understanding of JS architecture and component flow.',
        'Able to debug and improve interactive data views.',
       ],
       skills: [
        'react',
        'tailwind',
        'javascript',
        'next.js',
        'css',
        'html',
        'tensorflow.js',
        'machine learning',
        'functions behind the scene',
        'prototype',
       ],
       softwareHouse: 'Microsoft',
      },
      {
       title: 'Frontend Developer – Component-based UI',
       location: 'Denver, CO',
       postedDate: '2025-06-29',
       salary: '$280.00/Month',
       description:
        "Help us scale our design system with React and Tailwind. You'll be working on modular components for a SaaS platform with clean code standards and a deep focus on UI consistency.",
       responsibilities: [
        'Build and maintain React components in Next.js.',
        'Use Tailwind and MUI for styling reusable layouts.',
        'Apply MVC patterns for large-scale architecture.',
        'Integrate user data via AJAX requests.',
       ],
       requirements: [
        '1 year of frontend development experience.',
        'Understanding of MVC and design structure.',
        'Good styling and component reusability practices.',
        'Experience with structured folder hierarchies.',
       ],
       skills: [
        'next.js',
        'html',
        'css',
        'react',
        'javascript',
        'tailwind',
        'MUI',
        'MVC',
        'ajax',
        'data structures',
       ],
       softwareHouse: 'Slack (Salesforce)',
      },
      {
       title: 'Frontend Developer – Interactive UI & Real-Time Apps',
       location: 'Phoenix, AZ',
       postedDate: '2025-06-28',
       salary: '$287.00/Month',
       description:
        'Join our fast-moving UI team to create dynamic real-time interfaces using React, socket.io, and advanced JS logic. This role focuses on building scalable apps for collaboration and analytics.',
       responsibilities: [
        'Create and manage real-time UI components.',
        'Build features using React, Tailwind, and Socket.io.',
        'Ensure pixel-perfect responsiveness across devices.',
        'Work closely with backend teams to consume APIs.',
       ],
       requirements: [
        '1 to 1.5 years of frontend experience.',
        'Good understanding of JS-based live app architecture.',
        'Familiar with real-time sockets and data sync.',
        'Capable of writing testable, modular frontend code.',
       ],
       skills: [
        'html',
        'javascript',
        'tailwind',
        'css',
        'next.js',
        'react',
        'socket.io',
        'responsive websites',
        'google app script',
        'critical rendering',
       ],
       softwareHouse: 'GoDaddy',
      },
     ],
     'SIMPLYHIRED.com': [
      {
       title: 'Frontend Developer – Dynamic UI Systems',
       location: 'Berlin, Germany',
       postedDate: '2025-07-02',
       salary: '$285.00/Month',
       description:
        'Join our Berlin-based product team to create seamless web experiences with React and Next.js. You’ll contribute to modular UI systems that support multilingual enterprise tools and dashboards.',
       responsibilities: [
        'Develop reusable Next.js components with Tailwind CSS.',
        'Use DOM manipulation and AJAX for interactive views.',
        'Ensure component compatibility across screen sizes.',
        'Optimize rendering time and layout shifts for better performance.',
       ],
       requirements: [
        '1.5 years experience in frontend frameworks.',
        'Proficiency in layout architecture and component reuse.',
        'Knowledge of responsive design patterns.',
        'Comfortable debugging using DevTools and browser profilers.',
       ],
       skills: [
        'react',
        'javascript',
        'html',
        'css',
        'next.js',
        'tailwind',
        'ajax',
        'dom',
        'responsive websites',
        'MUI',
       ],
       softwareHouse: 'Zalando SE',
      },
      {
       title: 'Frontend Engineer – Real-Time UI',
       location: 'Tokyo, Japan',
       postedDate: '2025-07-01',
       salary: '$290.00/Month',
       description:
        "Work with our Tokyo-based innovation team to build real-time, low-latency dashboards using socket.io, React, and advanced JavaScript logic. You'll help push UX boundaries in data-intensive web apps.",
       responsibilities: [
        'Build real-time dashboards using React and Tailwind.',
        'Integrate socket-based data and custom hooks.',
        'Apply styled components and responsive layout principles.',
        'Collaborate with QA to test mobile-first breakpoints.',
       ],
       requirements: [
        '1 year experience with frontend architecture.',
        'Understanding of real-time sync and socket events.',
        'Good command of JS event flow and async calls.',
        'Experience with modern CSS frameworks like MUI or Bootstrap.',
       ],
       skills: [
        'tailwind',
        'html',
        'next.js',
        'react',
        'css',
        'javascript',
        'socket.io',
        'OOP',
        'critical rendering',
        'google app script',
       ],
       softwareHouse: 'Rakuten',
      },
      {
       title: 'Frontend Developer – Responsive Systems',
       location: 'Toronto, Canada',
       postedDate: '2025-06-30',
       salary: '$280.00/Month',
       description:
        'We’re hiring a frontend developer in Toronto to create scalable responsive components for ecommerce and analytics platforms. You’ll work on global-scale apps with Next.js and advanced rendering tools.',
       responsibilities: [
        'Develop mobile-first interfaces using Tailwind and React.',
        'Use AJAX and APIs to fetch and display dynamic content.',
        'Structure scalable components with reusability in mind.',
        'Ensure cross-browser and device compatibility.',
       ],
       requirements: [
        '1.5 years experience with React-based projects.',
        'Familiarity with API integration and layout responsiveness.',
        'Basic JS structure knowledge including OOP and functions.',
        'Hands-on experience with Bootstrap or MUI.',
       ],
       skills: [
        'javascript',
        'css',
        'react',
        'next.js',
        'html',
        'tailwind',
        'ajax',
        'data structures',
        'bootstraps',
        'functions behind the scene',
       ],
       softwareHouse: 'Shopify',
      },
      {
       title: 'Frontend Developer – Smart Component Builder',
       location: 'Dubai, UAE',
       postedDate: '2025-06-29',
       salary: '$287.00/Month',
       description:
        'Join a fast-scaling Dubai-based software company building AI-powered dashboards and smart UI. Work with Tailwind, React, and Next.js to deliver impactful interfaces across devices.',
       responsibilities: [
        'Create modular components and pages using React.',
        'Utilize Tailwind and MUI for visually consistent layouts.',
        'Connect to APIs using AJAX for live updates.',
        'Optimize frontend render paths and layout shifts.',
       ],
       requirements: [
        '1 year of professional frontend experience.',
        'Proficient in CSS frameworks and layout design.',
        'Ability to debug cross-browser UI issues.',
        'Familiar with JS-based architecture and rendering pipelines.',
       ],
       skills: [
        'next.js',
        'tailwind',
        'javascript',
        'html',
        'css',
        'react',
        'ajax',
        'prototype',
        'MVC',
        'tensorflow.js',
       ],
       softwareHouse: 'Bayt.com',
      },
      {
       title: 'Frontend Developer – Modular Dashboards',
       location: 'Sydney, Australia',
       postedDate: '2025-06-28',
       salary: '$289.00/Month',
       description:
        'We’re expanding our engineering team in Sydney and seeking a frontend developer with a passion for clean design systems and performance. Build dynamic dashboards using Tailwind, Next.js, and modern JS libraries.',
       responsibilities: [
        'Work with designers to implement UI with React and Tailwind.',
        'Develop dashboard components and connect APIs.',
        'Manage rendering lifecycle and optimize load time.',
        'Write modular, maintainable frontend code.',
       ],
       requirements: [
        '1 to 1.5 years of frontend development experience.',
        'Familiar with DOM structures and CSS logic.',
        'Good understanding of component state and reusability.',
        'Experience with rendering performance and visual hierarchy.',
       ],
       skills: [
        'html',
        'react',
        'tailwind',
        'css',
        'next.js',
        'javascript',
        'dom',
        'responsive websites',
        'OOP',
        'machine learning',
       ],
       softwareHouse: 'Atlassian',
      },
     ],
     'GLASSDOOR.com': [
      {
       title: 'Frontend Developer – Smart Web Interfaces',
       location: 'Amsterdam, Netherlands',
       postedDate: '2025-07-02',
       salary: '$285.00/Month',
       description:
        "We're hiring a frontend developer passionate about clean architecture and reusable components. Work on user-centric dashboards and contribute to a robust frontend ecosystem.",
       responsibilities: [
        'Build reusable UI components using React and Next.js.',
        'Design layouts with Tailwind and MUI.',
        'Integrate APIs for real-time data rendering.',
        'Ensure cross-browser and mobile responsiveness.',
       ],
       requirements: [
        '1.5 years of frontend development experience.',
        'Familiarity with component logic and state management.',
        'Strong debugging skills and DOM understanding.',
        'Experience with visual and UX consistency.',
       ],
       skills: [
        'html',
        'tailwind',
        'css',
        'react',
        'javascript',
        'next.js',
        'dom',
        'responsive websites',
        'MUI',
        'functions behind the scene',
       ],
       softwareHouse: 'Booking.com',
      },
      {
       title: 'Frontend Engineer – Modular UI Development',
       location: 'Barcelona, Spain',
       postedDate: '2025-07-02',
       salary: '$287.00/Month',
       description:
        "Be part of a growing team working on scalable web interfaces and global product dashboards. You'll help shape frontend systems using modern JavaScript frameworks.",
       responsibilities: [
        'Translate Figma designs into production React components.',
        'Apply Tailwind and Bootstrap styling logic.',
        'Implement real-time data updates via AJAX.',
        'Ensure pixel-perfect accuracy across devices.',
       ],
       requirements: [
        '1 year of frontend development experience.',
        'Good grasp on component structure and reuse.',
        'Able to troubleshoot rendering issues effectively.',
        'Comfortable using Next.js routing and structure.',
       ],
       skills: [
        'css',
        'html',
        'next.js',
        'tailwind',
        'javascript',
        'react',
        'ajax',
        'bootstraps',
        'MVC',
        'OOP',
       ],
       softwareHouse: 'Glovo',
      },
      {
       title: 'Frontend Developer – ML Enabled UI',
       location: 'Singapore',
       postedDate: '2025-07-01',
       salary: '$288.00/Month',
       description:
        "Help us develop a new generation of AI-driven frontend tools using TensorFlow.js and dynamic data visualizations. You'll build highly interactive and intelligent dashboards.",
       responsibilities: [
        'Integrate ML features into frontend views.',
        'Build UI with React, Tailwind, and styled-components.',
        'Consume APIs for live rendering updates.',
        'Write scalable components with good performance.',
       ],
       requirements: [
        '1.5 years of experience in frontend development.',
        'Exposure to TensorFlow.js or frontend ML.',
        'Understanding of responsive and semantic design.',
        'Strong JavaScript logic and async experience.',
       ],
       skills: [
        'react',
        'next.js',
        'tailwind',
        'html',
        'css',
        'javascript',
        'tensorflow.js',
        'machine learning',
        'ajax',
        'critical rendering',
       ],
       softwareHouse: 'Grab Holdings',
      },
      {
       title: 'Frontend Engineer – Real-Time Dashboards',
       location: 'Zurich, Switzerland',
       postedDate: '2025-07-01',
       salary: '$289.00/Month',
       description:
        "Join our Zurich team in building high-performance dashboards for real-time analytics. If you're excited about speed, interactivity, and clean UI—this is your role.",
       responsibilities: [
        'Develop dashboards using React and Tailwind.',
        'Use socket.io for live updates.',
        'Maintain codebase consistency and reusable components.',
        'Collaborate on global layout and styling guidelines.',
       ],
       requirements: [
        '1 year experience in modern JS-based frontend.',
        'Strong knowledge of event-driven data flows.',
        'Experience with sockets and real-time rendering.',
        'Familiarity with OOP and functional patterns.',
       ],
       skills: [
        'javascript',
        'css',
        'tailwind',
        'html',
        'react',
        'next.js',
        'socket.io',
        'prototype',
        'functions behind the scene',
        'data structures',
       ],
       softwareHouse: 'Swisscom',
      },
      {
       title: 'Frontend Developer – Cloud-Based Platforms',
       location: 'Dublin, Ireland',
       postedDate: '2025-06-30',
       salary: '$280.00/Month',
       description:
        'Join a cloud-first product company as a frontend engineer. We’re building serverless dashboards with live metrics, smart rendering, and beautifully consistent UI.',
       responsibilities: [
        'Work in React + Next.js to build scalable interfaces.',
        'Use MUI and Tailwind for component theming.',
        'Manage state across views and handle async data.',
        'Collaborate with backend for optimized API responses.',
       ],
       requirements: [
        '1.5 years frontend experience.',
        'Proficient in JS fundamentals and UI logic.',
        'Strong understanding of component-based development.',
        'Experience integrating with dynamic APIs.',
       ],
       skills: [
        'tailwind',
        'react',
        'css',
        'javascript',
        'html',
        'next.js',
        'MUI',
        'google app script',
        'OOP',
        'responsive websites',
       ],
       softwareHouse: 'Intercom',
      },
     ],
     'INDEED.com': [
      {
       title: 'Frontend Developer – Component-Driven Design',
       location: 'Paris, France',
       postedDate: '2025-06-30',
       salary: '$286.00/Month',
       description:
        "We're building a design system and reusable library for a global e-learning platform. Help us create pixel-perfect and semantically strong components.",
       responsibilities: [
        'Build reusable React components.',
        'Style using Tailwind, Bootstrap, and MUI.',
        'Ensure WCAG compliance in markup and color use.',
        'Write unit tests and document components properly.',
       ],
       requirements: [
        '1 year of frontend experience with React.',
        'Good command of accessibility and best practices.',
        'Strong CSS methodology understanding.',
        'Experience with layout systems like Flex and Grid.',
       ],
       skills: [
        'react',
        'javascript',
        'next.js',
        'tailwind',
        'html',
        'css',
        'bootstraps',
        'MUI',
        'responsive websites',
        'dom',
       ],
       softwareHouse: 'OpenClassrooms',
      },
      {
       title: 'Frontend Developer – Data Interfaces',
       location: 'Stockholm, Sweden',
       postedDate: '2025-06-29',
       salary: '$289.00/Month',
       description:
        'We’re looking for a frontend developer to work on BI tools and reporting dashboards. Help our clients visualize data with performance-optimized React views.',
       responsibilities: [
        'Build charts and visual widgets using React and D3.',
        'Use Tailwind for layout and consistency.',
        'Integrate API endpoints with pagination and search.',
        'Enhance performance through rendering best practices.',
       ],
       requirements: [
        '1.5 years working with component libraries.',
        'Experience with dynamic charting or data rendering.',
        'Understanding of performance tuning in React.',
        'Knowledge of DOM and visual hierarchy.',
       ],
       skills: [
        'html',
        'tailwind',
        'next.js',
        'css',
        'react',
        'javascript',
        'dom',
        'ajax',
        'MVC',
        'critical rendering',
       ],
       softwareHouse: 'Klarna',
      },
      {
       title: 'Frontend Developer – AI-Driven Web Tools',
       location: 'Seoul, South Korea',
       postedDate: '2025-06-29',
       salary: '$280.00/Month',
       description:
        'Join a dynamic team building AI-powered user interfaces using React and custom design systems. Work with ML APIs and build dashboards tailored for human-in-the-loop automation.',
       responsibilities: [
        'Develop interfaces powered by AI suggestions.',
        'Work with React, Next.js, and Tailwind.',
        'Implement modular UI states and user feedback components.',
        'Ensure performance with rendering and code-splitting.',
       ],
       requirements: [
        '1 year frontend experience.',
        'Knowledge of frontend-side AI libraries.',
        'Good understanding of modular and scoped CSS.',
        'Experience working with multilingual UIs.',
       ],
       skills: [
        'javascript',
        'html',
        'react',
        'tailwind',
        'css',
        'next.js',
        'tensorflow.js',
        'machine learning',
        'responsive websites',
        'functions behind the scene',
       ],
       softwareHouse: 'Naver Corp.',
      },
      {
       title: 'Frontend Developer – Interactive Interfaces',
       location: 'Oslo, Norway',
       postedDate: '2025-06-28',
       salary: '$282.00/Month',
       description:
        "We're building tools for the future of collaboration and data control. Work with real-time systems, modern CSS logic, and event-driven UI patterns.",
       responsibilities: [
        'Code UI with React, Tailwind, and AJAX calls.',
        'Use WebSockets and events to manage real-time actions.',
        'Handle routing and server-side rendering using Next.js.',
        'Collaborate with backend and QA teams in agile sprints.',
       ],
       requirements: [
        '1.5 years experience using frontend libraries.',
        'Comfort with event loops and JS timing mechanisms.',
        'Good eye for detail and UX practices.',
        'Strong communication with multi-team environments.',
       ],
       skills: [
        'css',
        'tailwind',
        'html',
        'next.js',
        'react',
        'javascript',
        'socket.io',
        'ajax',
        'prototype',
        'OOP',
       ],
       softwareHouse: 'Telenor Group',
      },
      {
       title: 'Frontend Developer – Educational Platforms',
       location: 'Wellington, New Zealand',
       postedDate: '2025-06-28',
       salary: '$284.00/Month',
       description:
        "Join our frontend team developing education software for remote learning. We're focused on performance, accessibility, and modularity using React and Next.js.",
       responsibilities: [
        'Design scalable UI elements in React.',
        'Apply Tailwind and component libraries like MUI.',
        'Consume APIs and apply async logic with error states.',
        'Ensure apps are mobile-optimized and fast loading.',
       ],
       requirements: [
        '1 year experience with frontend tools.',
        'Familiar with routing, state, and form validation.',
        'Clear understanding of UI performance bottlenecks.',
        'Can work on time-sensitive product releases.',
       ],
       skills: [
        'next.js',
        'react',
        'tailwind',
        'html',
        'css',
        'javascript',
        'MUI',
        'OOP',
        'google app script',
        'responsive websites',
       ],
       softwareHouse: 'Education Perfect',
      },
     ],
    };

    return {
     title: `Front-End Developer Jobs in ${country}`,
     data: countryData[country],
    };
   },
  },

  'JAM-stack Developer': {
   color: 'linear-gradient(-90deg, #e10d19,rgb(232, 145, 149))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
        title: 'Jamstack Developer – Supabase & Next.js',
        location: 'Lahore, Pakistan',
        postedDate: '2025-07-02',
        salary: '₨105,000/Month',
        description:
          "Join our frontend-first engineering team to create Jamstack web apps powered by Supabase and React. You'll work on rapid prototyping, dynamic APIs, and frontend logic tied to real-time databases.",
        responsibilities: [
          'Build modern Jamstack apps with Next.js and Supabase.',
          'Design frontend UI with Tailwind and dynamic components.',
          'Integrate auth and real-time data sync from Supabase.',
          'Write scalable API interactions and database queries.'
        ],
        requirements: [
          '2 years of experience in frontend or Jamstack architecture.',
          'Experience with Supabase, React, and SSR/ISR logic.',
          'Familiarity with SQL-based BaaS and RESTful endpoints.',
          'Ability to design responsive and clean layouts.'
        ],
        skills: ['html', 'tailwind', 'react', 'supabase', 'next.js', 'css', 'javascript', 'api integration', 'authentication', 'OOP'],
        softwareHouse: 'Techverx'
      },
      {
        title: 'Firebase Developer – Realtime Apps & SSR',
        location: 'Islamabad, Pakistan',
        postedDate: '2025-07-01',
        salary: '₨108,000/Month',
        description:
          "Looking for a frontend-focused Firebase developer to build real-time applications with Next.js and Firestore. If you enjoy BaaS services and want to build scalable products—this is your role.",
        responsibilities: [
          'Develop dynamic views with Next.js and Firebase.',
          'Use Firestore for real-time updates and auth.',
          'Write server-side logic using Firebase Functions.',
          'Design pixel-perfect UI using Tailwind CSS.'
        ],
        requirements: [
          '1 year experience working with Firebase and frontend tools.',
          'Understanding of real-time syncing and serverless triggers.',
          'Experience building auth flows and role-based dashboards.',
          'Solid grasp of frontend component structure.'
        ],
        skills: ['firebase', 'tailwind', 'react', 'next.js', 'javascript', 'html', 'css', 'functions behind the scene', 'SSR', 'authentication'],
        softwareHouse: 'Tkxel'
      },
      {
        title: 'Sanity.io Developer – Content API Integrations',
        location: 'Karachi, Pakistan',
        postedDate: '2025-07-01',
        salary: '₨110,000/Month',
        description:
          "Join our CMS-driven team to build content-rich applications using Sanity.io, React, and Next.js. Perfect for a developer who loves structured content, live previews, and scalable UI.",
        responsibilities: [
          'Integrate Sanity APIs with Next.js frontends.',
          'Create reusable components to display dynamic content.',
          'Implement live preview and client-side routing.',
          'Collaborate with content creators and designers.'
        ],
        requirements: [
          '2 years frontend experience, preferably with CMS integration.',
          'Hands-on with GROQ queries and Sanity schemas.',
          'Experience building blog, portfolio, or content sites.',
          'Familiarity with Tailwind and structured content models.'
        ],
        skills: ['sanity.io', 'next.js', 'react', 'javascript', 'html', 'tailwind', 'webhooks', 'api integration', 'css'],
        softwareHouse: 'NorthBay Solutions'
      },
      {
        title: 'Strapi + React Developer – Headless CMS Apps',
        location: 'Faisalabad, Pakistan',
        postedDate: '2025-06-30',
        salary: '₨102,000/Month',
        description:
          "We're building modern headless CMS experiences using Strapi and React. Join us to work on e-commerce frontends, product catalogs, and backend API integration via REST & GraphQL.",
        responsibilities: [
          'Connect React-based UIs with Strapi APIs.',
          'Design reusable layouts with Next.js and Tailwind.',
          'Use GraphQL and REST for dynamic content loading.',
          'Maintain admin interface and structured content.'
        ],
        requirements: [
          '1 year of experience with Strapi or any headless CMS.',
          'Basic understanding of GraphQL and REST API integration.',
          'Ability to build mobile-first interfaces.',
          'Good command of frontend styling and logic.'
        ],
        skills: ['strapi', 'next.js', 'react', 'html', 'css', 'tailwind', 'graphql', 'api integration', 'javascript', 'responsive websites'],
        softwareHouse: 'Soft Pyramid'
      },
      {
        title: 'Jamstack Developer – Appwrite + React',
        location: 'Peshawar, Pakistan',
        postedDate: '2025-06-29',
        salary: '₨100,000/Month',
        description:
          "Looking for a Jamstack developer experienced in working with Appwrite, React, and Next.js. Build secure, scalable apps with BaaS features like file storage, user auth, and serverless functions.",
        responsibilities: [
          'Develop UI components integrated with Appwrite backend.',
          'Set up user auth, databases, and file storage systems.',
          'Work with REST APIs and Appwrite SDKs.',
          'Collaborate on project planning and responsive layout design.'
        ],
        requirements: [
          '2 years of frontend or Jamstack development.',
          'Experience with Appwrite services and SDK usage.',
          'Good understanding of frontend and backend handshakes.',
          'Capable of deploying serverless and secure features.'
        ],
        skills: ['appwrite', 'html', 'react', 'next.js', 'tailwind', 'javascript', 'authentication', 'OOP', 'css', 'api integration'],
        softwareHouse: 'ArhamSoft'
      }
     ],
     'CAREERJET.com': [
      {
        title: 'Jamstack Developer – Supabase & Next.js',
        location: 'Austin, TX',
        postedDate: '2025-07-02',
        salary: '$290.00/Month',
        description:
          "Join our US-based Jamstack team working on product analytics dashboards. You'll build blazing-fast web apps using Supabase, React, and Tailwind, integrating live data with clean design.",
        responsibilities: [
          'Create reusable components using React and Tailwind.',
          'Integrate Supabase APIs for auth and data layers.',
          'Build dynamic Next.js pages and route logic.',
          'Work with UI/UX designers on pixel-perfect delivery.'
        ],
        requirements: [
          '2 years experience with frontend or Jamstack.',
          'Working knowledge of Supabase services.',
          'Experience building authenticated dashboards.',
          'Proficient in Tailwind and dynamic rendering.'
        ],
        skills: ['supabase', 'react', 'next.js', 'tailwind', 'html', 'css', 'javascript', 'authentication', 'api integration'],
        softwareHouse: 'Vercel'
      },
      {
        title: 'Firebase + React Developer – Real-time Interfaces',
        location: 'San Francisco, CA',
        postedDate: '2025-07-02',
        salary: '$295.00/Month',
        description:
          "Looking for a frontend developer to create real-time dashboards using Firebase and React. You'll build fast, reliable apps that sync instantly and scale globally.",
        responsibilities: [
          'Develop UI with React and Firebase Realtime DB.',
          'Implement Next.js routes and layouts.',
          'Integrate user auth and Firestore security rules.',
          'Write Tailwind-based responsive design.'
        ],
        requirements: [
          '1 year frontend experience with Firebase.',
          'Comfortable working with Realtime Database & Functions.',
          'Experience integrating dynamic content.',
          'Strong CSS and component logic knowledge.'
        ],
        skills: ['firebase', 'javascript', 'react', 'tailwind', 'next.js', 'html', 'css', 'functions behind the scene', 'authentication'],
        softwareHouse: 'Google Cloud'
      },
      {
        title: 'Sanity.io Developer – Headless CMS Interfaces',
        location: 'New York, NY',
        postedDate: '2025-07-01',
        salary: '$288.00/Month',
        description:
          "Help us build structured content interfaces using Sanity.io and Next.js. This role involves close coordination with content teams and seamless rendering across devices.",
        responsibilities: [
          'Integrate Sanity APIs into React UI.',
          'Use Tailwind and component libraries.',
          'Implement dynamic GROQ queries.',
          'Handle SEO and image optimization logic.'
        ],
        requirements: [
          '2 years experience with headless CMS platforms.',
          'Familiar with GROQ, structure builder, and live preview.',
          'Strong understanding of component data flows.',
          'Solid skills in HTML/CSS and SSR setup.'
        ],
        skills: ['sanity.io', 'html', 'css', 'javascript', 'tailwind', 'next.js', 'react', 'webhooks', 'api integration'],
        softwareHouse: 'Contentful Inc.'
      },
      {
        title: 'Appwrite Developer – Serverless Web Apps',
        location: 'Seattle, WA',
        postedDate: '2025-07-01',
        salary: '$285.00/Month',
        description:
          "Join our cloud-native development team building Jamstack sites with Appwrite. Work on frontend security, user authentication, and file management modules.",
        responsibilities: [
          'Create secure frontend modules using Appwrite APIs.',
          'Build responsive React components with Tailwind.',
          'Use Appwrite Functions for serverless workflows.',
          'Deploy apps with ISR and build caching in Next.js.'
        ],
        requirements: [
          '1–2 years of experience using Appwrite or Firebase.',
          'Knowledge of auth, database, and functions setup.',
          'Skilled in React, Tailwind, and HTML/CSS.',
          'Confident with frontend deployments and webhooks.'
        ],
        skills: ['appwrite', 'tailwind', 'next.js', 'react', 'html', 'css', 'javascript', 'authentication', 'OOP'],
        softwareHouse: 'Netlify'
      },
      {
        title: 'Strapi Developer – API-first Frontends',
        location: 'Miami, FL',
        postedDate: '2025-06-30',
        salary: '$289.00/Month',
        description:
          "Work with our Strapi-powered CMS to build frontend apps with clean APIs and modern architecture. Ideal for developers who love structured content and GraphQL endpoints.",
        responsibilities: [
          'Build Next.js components with Strapi data.',
          'Integrate APIs using REST and GraphQL.',
          'Write styled UI using Tailwind CSS.',
          'Implement SSR/ISR strategies as needed.'
        ],
        requirements: [
          '2 years frontend or CMS experience.',
          'Hands-on with Strapi schemas and GraphQL.',
          'Proficient with Tailwind, React, and routing systems.',
          'Experience deploying JAMstack products.'
        ],
        skills: ['strapi', 'graphql', 'react', 'tailwind', 'next.js', 'html', 'css', 'javascript', 'api integration'],
        softwareHouse: 'Hashnode Inc.'
      }
     ],
     'SIMPLYHIRED.com': [
      {
        title: 'Jamstack Developer – Supabase Focused',
        location: 'Berlin, Germany',
        postedDate: '2025-07-02',
        salary: '$290.00/Month',
        description:
          "Collaborate on developing high-speed marketing pages and admin dashboards with Supabase and Next.js. Ideal for devs who value speed and secure data integration.",
        responsibilities: [
          'Connect Supabase APIs with SSR-powered Next.js.',
          'Create tailwind-powered design systems.',
          'Build authentication and protected routes.',
          'Write modular UI components in React.'
        ],
        requirements: [
          '1 year of experience with Supabase or similar stack.',
          'Familiarity with auth and live query patterns.',
          'Strong command over modern JS and Tailwind.',
          'Experience deploying JAMstack apps.'
        ],
        skills: ['supabase', 'html', 'react', 'next.js', 'javascript', 'tailwind', 'authentication', 'api integration'],
        softwareHouse: 'TIER Mobility'
      },
      {
        title: 'Firebase Developer – Real-time Projects',
        location: 'Dubai, UAE',
        postedDate: '2025-07-02',
        salary: '$295.00/Month',
        description:
          "Create lightning-fast interfaces using Firebase and React. Be part of our innovation team building realtime messaging tools and dashboards.",
        responsibilities: [
          'Use Firebase Firestore and Auth with Next.js.',
          'Implement live updates and serverless functions.',
          'Develop with Tailwind and modular React logic.',
          'Maintain security rules and scalable backend.'
        ],
        requirements: [
          '2 years of frontend + Firebase experience.',
          'Comfortable with auth, rules, and Firestore triggers.',
          'Proficiency in responsive UI and clean code.',
          'Basic CI/CD and deployment knowledge.'
        ],
        skills: ['firebase', 'html', 'css', 'javascript', 'react', 'next.js', 'tailwind', 'functions behind the scene'],
        softwareHouse: 'Careem'
      },
      {
        title: 'Sanity.io Developer – Dynamic Web Projects',
        location: 'London, UK',
        postedDate: '2025-07-01',
        salary: '$288.00/Month',
        description:
          "Build high-performance websites and content platforms with Sanity.io and Next.js. Join a growing content-tech team focused on speed and maintainability.",
        responsibilities: [
          'Use GROQ queries to fetch structured data.',
          'Build dynamic UIs using Tailwind + Sanity.',
          'Integrate live previews and SEO metadata.',
          'Work with content and design teams on UI quality.'
        ],
        requirements: [
          '1–2 years of frontend/CMS experience.',
          'Fluent with Sanity Studio and structure.',
          'Strong HTML/CSS foundations.',
          'Confident in SSR and content syncing.'
        ],
        skills: ['sanity.io', 'react', 'next.js', 'tailwind', 'javascript', 'html', 'css', 'api integration'],
        softwareHouse: 'BBC Design & Engineering'
      },
      {
        title: 'Strapi Developer – API-driven Interfaces',
        location: 'Tokyo, Japan',
        postedDate: '2025-07-01',
        salary: '$289.00/Month',
        description:
          "Work with Strapi as your CMS and build modern Next.js applications for a global media agency. Apply REST/GraphQL principles for optimized UI performance.",
        responsibilities: [
          'Integrate Strapi API with frontend modules.',
          'Use GraphQL for optimized content rendering.',
          'Write Tailwind-first responsive designs.',
          'Handle routing, auth, and SSR pages.'
        ],
        requirements: [
          '2 years of frontend/CMS integration experience.',
          'Understanding of content types and data models.',
          'Strong API consumption and frontend logic.',
          'Experience in REST, GraphQL, and auth.'
        ],
        skills: ['strapi', 'graphql', 'react', 'tailwind', 'next.js', 'html', 'css', 'javascript'],
        softwareHouse: 'Rakuten'
      },
      {
        title: 'Appwrite Developer – Secure SaaS Apps',
        location: 'Toronto, Canada',
        postedDate: '2025-06-30',
        salary: '$285.00/Month',
        description:
          "Join our security-first SaaS platform team. You'll build frontend layers over Appwrite services with Next.js, and manage auth, databases, and protected routes.",
        responsibilities: [
          'Integrate Appwrite’s SDK with React interfaces.',
          'Design protected views with Tailwind UI.',
          'Create login, registration, and session handlers.',
          'Optimize client-server interactions with functions.'
        ],
        requirements: [
          '1–2 years of experience in Jamstack or Appwrite.',
          'Good understanding of auth flows and backend triggers.',
          'UI-focused mindset with clean state management.',
          'Experience deploying on Vercel or Netlify.'
        ],
        skills: ['appwrite', 'react', 'tailwind', 'next.js', 'javascript', 'html', 'css', 'authentication', 'api integration'],
        softwareHouse: 'Shopify'
      }
     ],
     'GLASSDOOR.com': [
      {
        title: 'Jamstack Developer – Fullstack with Supabase',
        location: 'Barcelona, Spain',
        postedDate: '2025-07-02',
        salary: '$293.00/Month',
        description:
          "Join our remote-first team developing interactive dashboards and marketing websites powered by Supabase and React. Ideal for developers passionate about clean UI and fast APIs.",
        responsibilities: [
          'Use Supabase for authentication and data management.',
          'Design and develop with Tailwind and Next.js.',
          'Implement secure data fetch with API optimization.',
          'Ensure high performance across all breakpoints.'
        ],
        requirements: [
          '1 year of experience in Jamstack or Supabase.',
          'Proficiency in building responsive React apps.',
          'Experience with SSR and authentication logic.',
          'Good communication and collaboration skills.'
        ],
        skills: ['supabase', 'react', 'tailwind', 'next.js', 'html', 'css', 'javascript', 'api integration'],
        softwareHouse: 'Typeform'
      },
      {
        title: 'Firebase + Next.js Developer',
        location: 'Singapore',
        postedDate: '2025-07-01',
        salary: '$290.00/Month',
        description:
          "We're building live financial tools powered by Firebase and modern frontend frameworks. Join our product squad and develop fast, secure user experiences.",
        responsibilities: [
          'Create client-facing features with Firebase and React.',
          'Handle real-time updates with Firestore.',
          'Build clean component architecture with Tailwind.',
          'Integrate serverless functions for workflows.'
        ],
        requirements: [
          '2 years frontend experience with Firebase.',
          'Knowledge of auth, security rules, and cloud functions.',
          'Ability to build maintainable UI systems.',
          'Strong command of React and CSS utility frameworks.'
        ],
        skills: ['firebase', 'next.js', 'tailwind', 'javascript', 'html', 'css', 'functions behind the scene', 'authentication'],
        softwareHouse: 'Grab Holdings'
      },
      {
        title: 'Strapi Developer – API-first JAMStack Apps',
        location: 'Paris, France',
        postedDate: '2025-07-01',
        salary: '$288.00/Month',
        description:
          "Build visually elegant sites with a headless CMS backend. If you're passionate about decoupled architectures and love React, this is for you.",
        responsibilities: [
          'Develop Next.js pages connected to Strapi API.',
          'Use REST/GraphQL for content integration.',
          'Maintain reusable design systems with Tailwind.',
          'Implement SEO features and responsive templates.'
        ],
        requirements: [
          '1–2 years experience with Strapi or similar headless CMS.',
          'Understanding of GraphQL and static generation.',
          'Strong grasp of frontend and content modeling.',
          'Clean, scalable coding practices.'
        ],
        skills: ['strapi', 'graphql', 'react', 'next.js', 'html', 'tailwind', 'css', 'javascript'],
        softwareHouse: 'Qonto'
      },
      {
        title: 'Sanity.io Developer – Content-first Web Apps',
        location: 'Amsterdam, Netherlands',
        postedDate: '2025-06-30',
        salary: '$291.00/Month',
        description:
          "Join a content-led development team focused on scalable websites. Your role will focus on Sanity.io integration, structured data rendering, and CMS-powered frontends.",
        responsibilities: [
          'Integrate Sanity.io APIs with dynamic UI components.',
          'Design user flows with Tailwind and React.',
          'Collaborate with marketing teams on CMS structure.',
          'Ensure cross-device performance and SEO.'
        ],
        requirements: [
          '2 years working with CMS integrations.',
          'Strong experience in GROQ and Sanity schema logic.',
          'Able to build dynamic pages and layouts.',
          'Fluent in React component-based architecture.'
        ],
        skills: ['sanity.io', 'react', 'html', 'css', 'next.js', 'tailwind', 'javascript', 'webhooks'],
        softwareHouse: 'MessageBird'
      },
      {
        title: 'Appwrite Developer – Secure SaaS UI Developer',
        location: 'Zurich, Switzerland',
        postedDate: '2025-06-29',
        salary: '$289.00/Month',
        description:
          "We are building SaaS dashboards using Appwrite as backend infrastructure. If you can build fast, secure, and functional UIs, we’d love to talk.",
        responsibilities: [
          'Implement Appwrite auth, storage, and databases.',
          'Develop UI logic with React and Tailwind.',
          'Build reusable Next.js components.',
          'Optimize frontend performance and loading.'
        ],
        requirements: [
          '1–2 years of frontend or Jamstack experience.',
          'Deep understanding of Appwrite services.',
          'Strong skills in authentication and SSR.',
          'Fluent in responsive and component-based development.'
        ],
        skills: ['appwrite', 'react', 'tailwind', 'next.js', 'html', 'css', 'javascript', 'authentication', 'api integration'],
        softwareHouse: 'Proton AG'
      },
     ],
     'INDEED.com': [
      {
        title: 'Firebase Developer – Real-Time UIs',
        location: 'Sydney, Australia',
        postedDate: '2025-07-02',
        salary: '$295.00/Month',
        description:
          "Help us create scalable chat and notification systems using Firebase and React. We’re seeking frontend engineers with real-time app experience.",
        responsibilities: [
          'Integrate Firestore and Firebase Functions.',
          'Use Tailwind for UI and responsiveness.',
          'Develop reusable React logic components.',
          'Secure endpoints and protect user data.'
        ],
        requirements: [
          '1 year experience in Firebase + React.',
          'Solid understanding of auth and session handling.',
          'Strong JS and component logic.',
          'Ability to work remotely and asynchronously.'
        ],
        skills: ['firebase', 'next.js', 'tailwind', 'react', 'html', 'css', 'javascript', 'functions behind the scene'],
        softwareHouse: 'Canva'
      },
      {
        title: 'Jamstack Developer – Multi-BaaS Role',
        location: 'Oslo, Norway',
        postedDate: '2025-07-01',
        salary: '$290.00/Month',
        description:
          "Work with a hybrid BaaS stack including Firebase, Supabase, and Strapi. Perfect for a developer who enjoys switching gears across CMS and databases.",
        responsibilities: [
          'Integrate and test APIs from multiple sources.',
          'Build dynamic components with React + Tailwind.',
          'Structure CMS content and pages.',
          'Deploy globally with Vercel.'
        ],
        requirements: [
          '1.5 years frontend experience across platforms.',
          'Good grasp of REST and GraphQL workflows.',
          'Organized and test-driven approach.',
          'Cross-stack API management experience.'
        ],
        skills: ['firebase', 'strapi', 'supabase', 'react', 'next.js', 'tailwind', 'html', 'css', 'javascript'],
        softwareHouse: 'Kahoot!'
      },
      {
        title: 'Strapi Developer – Jamstack CMS Sites',
        location: 'Warsaw, Poland',
        postedDate: '2025-07-01',
        salary: '$286.00/Month',
        description:
          "Join our remote-first team building client websites and internal dashboards using Strapi CMS and React-based UI logic.",
        responsibilities: [
          'Connect Strapi APIs with frontend architecture.',
          'Build modular layouts using Tailwind CSS.',
          'Ensure dynamic content integration.',
          'Test API latency and reliability.'
        ],
        requirements: [
          '2 years of CMS experience with REST APIs.',
          'Expertise in React + Tailwind workflow.',
          'Ability to interpret and structure backend data.',
          'Familiarity with mobile-first development.'
        ],
        skills: ['strapi', 'react', 'tailwind', 'next.js', 'html', 'css', 'javascript', 'api integration'],
        softwareHouse: 'Netguru'
      },
      {
        title: 'Sanity.io Developer – Content API Specialist',
        location: 'Vienna, Austria',
        postedDate: '2025-06-30',
        salary: '$287.00/Month',
        description:
          "We're building custom publishing platforms with Sanity.io and headless architectures. You'll manage structured data, SEO features, and preview environments.",
        responsibilities: [
          'Use GROQ queries to power React components.',
          'Collaborate on schema building and UIs.',
          'Optimize frontend loading and dynamic layouts.',
          'Handle image optimization and metadata.'
        ],
        requirements: [
          '1–2 years experience using Sanity.',
          'Experience with SEO and performance optimization.',
          'Strong in HTML, Tailwind, and structured data.',
          'Fast debugging and production readiness.'
        ],
        skills: ['sanity.io', 'next.js', 'react', 'html', 'tailwind', 'css', 'javascript', 'webhooks'],
        softwareHouse: 'Runtastic (Adidas R&D)'
      },
      {
        title: 'Jamstack Developer – Firebase + CMS Integration',
        location: 'Istanbul, Türkiye',
        postedDate: '2025-06-30',
        salary: '$288.00/Month',
        description:
          "Be part of our core development team creating user-centric web apps using Firebase backend and CMS-based frontends with React.",
        responsibilities: [
          'Build features with Firebase and Strapi.',
          'Use Next.js for routing and SSR logic.',
          'Manage component-based UIs with Tailwind.',
          'Ensure security and scalability.'
        ],
        requirements: [
          '2 years experience with Firebase + React.',
          'Experience with CMS like Strapi or Sanity.',
          'Good JS and data structure knowledge.',
          'Fluent in frontend testing and clean coding.'
        ],
        skills: ['firebase', 'strapi', 'react', 'tailwind', 'next.js', 'javascript', 'html', 'css', 'authentication'],
        softwareHouse: 'Peak Games'
      }
     ],
    };

    return {
     title: `JAM Stack Developer Jobs in ${country}`,
     data: countryData[country],
    };
   },
  },

  'MERN-Stack Developer': {
   color: 'linear-gradient(-90deg, #9F1D53,rgb(206, 122, 157))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
        title: 'Full Stack MERN Developer – REST & JWT Expertise',
        location: 'Lahore, Pakistan',
        postedDate: '2025-07-02',
        salary: '₨130,000/Month',
        description:
          "We're hiring an experienced MERN stack developer to build secure, full-stack applications using modern architecture. You'll work on scalable dashboards and internal tools.",
        responsibilities: [
          'Design RESTful APIs with Express and Node.js.',
          'Build frontend with React, Redux, and Tailwind.',
          'Integrate MongoDB with complex query logic.',
          'Implement authentication using JWT and middleware.'
        ],
        requirements: [
          'Minimum 3 years of experience with the MERN stack.',
          'Strong understanding of authentication and sessions.',
          'Hands-on experience with Git and deployment tools.',
          'Excellent debugging and backend API integration skills.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'JWT', 'Redux', 'REST API', 'Git'],
        softwareHouse: 'Mindstorm Studios'
      },
      {
        title: 'MERN Stack Developer – API & Component Architecture',
        location: 'Islamabad, Pakistan',
        postedDate: '2025-07-02',
        salary: '₨125,000/Month',
        description:
          "Join our dynamic engineering team working on client portals and admin panels using the MERN stack. Strong emphasis on UI performance and backend structure.",
        responsibilities: [
          'Create React components with Redux and hooks.',
          'Develop scalable APIs using Node and Express.',
          'Work with MongoDB and Mongoose for schema control.',
          'Handle UI state, routing, and form validation.'
        ],
        requirements: [
          '2+ years of MERN development experience.',
          'Comfortable working in agile environments.',
          'Strong command of JavaScript, ES6+, and REST APIs.',
          'Experience in mobile-friendly UI development.'
        ],
        skills: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind', 'JavaScript', 'REST API'],
        softwareHouse: 'Techlogix'
      },
      {
        title: 'Senior MERN Developer – GraphQL & CI/CD',
        location: 'Karachi, Pakistan',
        postedDate: '2025-07-01',
        salary: '₨135,000/Month',
        description:
          "We're seeking a senior MERN developer who thrives on GraphQL APIs and DevOps integration. You'll help architect reusable backend and frontend logic for long-term products.",
        responsibilities: [
          'Build full-stack features using MERN + GraphQL.',
          'Design CI/CD pipelines for automatic deployments.',
          'Ensure secure authentication and route guarding.',
          'Work closely with product and design teams.'
        ],
        requirements: [
          '3 years+ experience as a full stack developer.',
          'Strong command of GraphQL and REST.',
          'Experience with GitHub Actions or similar CI/CD tools.',
          'Excellent communication and documentation habits.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GraphQL', 'Tailwind', 'JWT', 'CI/CD', 'Git'],
        softwareHouse: '10Pearls'
      },
      {
        title: 'MERN Stack Engineer – TypeScript & Modular Codebases',
        location: 'Multan, Pakistan',
        postedDate: '2025-07-01',
        salary: '₨120,000/Month',
        description:
          "We're hiring a MERN stack engineer experienced in TypeScript and modular code structures. You'll lead feature development on microservices and modern frontend components.",
        responsibilities: [
          'Develop robust React components using TypeScript.',
          'Build Node APIs with Express and middleware layers.',
          'Work on schema optimization in MongoDB.',
          'Write clean, testable code with proper typing.'
        ],
        requirements: [
          '2–3 years experience working with MERN stack.',
          'Familiar with TypeScript, testing libraries, and Git.',
          'Good sense of UI/UX performance and DOM optimization.',
          'Capable of leading small feature teams.'
        ],
        skills: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'JWT', 'Mongoose', 'Git'],
        softwareHouse: 'Techline'
      },
      {
        title: 'Full Stack Developer – MERN & Cloud Integration',
        location: 'Peshawar, Pakistan',
        postedDate: '2025-06-30',
        salary: '₨128,000/Month',
        description:
          "Join our growing team as a Full Stack MERN Developer and work on cloud-integrated web apps. Ideal for developers who love database design and frontend performance tuning.",
        responsibilities: [
          'Develop RESTful services and MongoDB models.',
          'Design responsive React UIs and dashboards.',
          'Integrate APIs with cloud functions (e.g., Firebase/Serverless).',
          'Write secure code with role-based access.'
        ],
        requirements: [
          '3 years of practical experience with MERN stack.',
          'Understanding of cloud deployment workflows.',
          'Strong command over secure data handling and async logic.',
          'Experience integrating third-party services via APIs.'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Tailwind', 'REST API', 'Cloud Functions', 'OOP'],
        softwareHouse: 'Cubix'
      }
     ],
     'CAREERJET.com': [
      {
        title: 'Senior MERN Stack Developer – RESTful APIs & JWT',
        location: 'Dallas, TX',
        postedDate: '2025-07-02',
        salary: '$430.00/Month',
        description:
          "Join a fintech startup building secure, real-time dashboards using the MERN stack. We focus on scalable APIs, clean design systems, and bulletproof authentication.",
        responsibilities: [
          'Build modular React components with Redux.',
          'Create backend APIs with Node.js and Express.',
          'Secure data with JWT and session tokens.',
          'Integrate MongoDB for real-time data layers.'
        ],
        requirements: [
          'Minimum 3 years of MERN stack development.',
          'Strong REST API design and state management.',
          'Experience with Git-based workflows.',
          'Understanding of role-based access control.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT', 'REST API', 'Tailwind', 'Git'],
        softwareHouse: 'Capital One Tech'
      },
      {
        title: 'Full Stack MERN Developer – GraphQL & Cloud Integration',
        location: 'San Jose, CA',
        postedDate: '2025-07-02',
        salary: '$440.00/Month',
        description:
          "We’re looking for a full stack developer experienced with MERN and GraphQL to join our SaaS analytics platform team. You’ll work on cloud-native deployments and interactive dashboards.",
        responsibilities: [
          'Develop and manage GraphQL endpoints.',
          'Implement reusable frontend logic in React.',
          'Connect APIs with MongoDB/Mongoose layers.',
          'Deploy using CI/CD tools and version control.'
        ],
        requirements: [
          '2–3 years in full-stack JavaScript environments.',
          'Experience using GraphQL with MongoDB.',
          'Knowledge of CI/CD practices.',
          'Excellent problem-solving and code review skills.'
        ],
        skills: ['React', 'GraphQL', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'JWT', 'Git', 'CI/CD'],
        softwareHouse: 'Intuit Inc.'
      },
      {
        title: 'MERN Stack Engineer – TypeScript & Enterprise Apps',
        location: 'Seattle, WA',
        postedDate: '2025-07-01',
        salary: '$420.00/Month',
        description:
          "Help scale our enterprise web platform using the MERN stack with TypeScript and Tailwind CSS. Work closely with designers and product owners to deliver user-centric tools.",
        responsibilities: [
          'Develop full-stack apps with MERN and TypeScript.',
          'Design scalable UI systems with Tailwind.',
          'Implement backend services using Express.',
          'Collaborate via GitHub and Agile sprints.'
        ],
        requirements: [
          'At least 3 years working with MERN stack.',
          'Comfortable using TypeScript across the stack.',
          'Familiar with Mongoose and advanced MongoDB queries.',
          'Excellent teamwork and clean coding habits.'
        ],
        skills: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'JWT', 'Git', 'Agile'],
        softwareHouse: 'Amazon Web Services (AWS)'
      },
      {
        title: 'Lead MERN Developer – SaaS Product Team',
        location: 'Boston, MA',
        postedDate: '2025-07-01',
        salary: '$435.00/Month',
        description:
          "We're seeking a lead-level MERN developer to help architect and maintain key modules of our growing SaaS platform. Work with scalable APIs, complex schemas, and real-time user interfaces.",
        responsibilities: [
          'Build complex backend logic using Node & Express.',
          'Optimize MongoDB performance and schema design.',
          'Manage frontend state using Redux and Context API.',
          'Ensure accessibility and responsiveness across devices.'
        ],
        requirements: [
          '3+ years of experience with the MERN stack.',
          'Solid understanding of data modeling and query optimization.',
          'Capable of leading small agile dev teams.',
          'Good knowledge of testing frameworks.'
        ],
        skills: ['MongoDB', 'React', 'Express.js', 'Node.js', 'Redux', 'Tailwind', 'REST API', 'Testing', 'Git'],
        softwareHouse: 'HubSpot'
      },
      {
        title: 'MERN Developer – UI Focused with Mongoose',
        location: 'Chicago, IL',
        postedDate: '2025-06-30',
        salary: '$410.00/Month',
        description:
          "Join our design-driven team to build and refine customer-facing portals using MERN technologies. Emphasis on UI/UX, backend connections, and reusable patterns.",
        responsibilities: [
          'Develop React components integrated with APIs.',
          'Write expressive data models using Mongoose.',
          'Use Tailwind to design responsive layouts.',
          'Debug across the full stack and suggest improvements.'
        ],
        requirements: [
          '2–3 years of MERN stack experience.',
          'Solid frontend fundamentals and clean CSS work.',
          'Backend knowledge using Express and Node.',
          'Strong team player and fast learner.'
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind', 'JWT', 'JavaScript', 'Git'],
        softwareHouse: 'Basecamp'
      }
     ],
     'SIMPLYHIRED.com': [
      {
        title: 'Full Stack MERN Developer – Real-time Dashboard Projects',
        location: 'Berlin, Germany',
        postedDate: '2025-07-02',
        salary: '$430.00/Month',
        description:
          "We're developing real-time dashboards for logistics and supply chain analytics using the MERN stack. Be part of an agile product team with fast releases and international clients.",
        responsibilities: [
          'Build scalable APIs with Node.js & Express.',
          'Design and develop responsive UIs in React.',
          'Integrate real-time sockets and data streams.',
          'Collaborate with product and QA teams.'
        ],
        requirements: [
          '2–3 years of experience in MERN stack projects.',
          'Familiarity with WebSockets and REST APIs.',
          'Strong communication and Git workflow usage.',
          'Good understanding of UI performance.'
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redux', 'Tailwind', 'REST API'],
        softwareHouse: 'Delivery Hero'
      },
      {
        title: 'MERN Developer – SaaS CRM Builder',
        location: 'Toronto, Canada',
        postedDate: '2025-07-02',
        salary: '$440.00/Month',
        description:
          "Join our platform team to develop customer engagement tools using MERN stack with heavy emphasis on UI logic and integrations.",
        responsibilities: [
          'Work on front-to-back CRM features.',
          'Maintain modular components in React.',
          'Integrate API endpoints with role-based access.',
          'Write secure login and auth features using JWT.'
        ],
        requirements: [
          'At least 3 years in full stack JavaScript.',
          'Solid React/Redux fundamentals.',
          'Hands-on with MongoDB & Mongoose schema.',
          'Experience working in distributed teams.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Redux', 'Tailwind', 'CI/CD'],
        softwareHouse: 'Shopify'
      },
      {
        title: 'Senior MERN Developer – GraphQL & Microservices',
        location: 'Copenhagen, Denmark',
        postedDate: '2025-07-01',
        salary: '$438.00/Month',
        description:
          "You’ll lead front-end and back-end feature implementation in a microservice-based architecture. Must be confident in GraphQL API consumption and modern React patterns.",
        responsibilities: [
          'Build GraphQL-integrated UIs.',
          'Work on cloud functions and deployments.',
          'Set up MongoDB models and validations.',
          'Maintain code quality and peer reviews.'
        ],
        requirements: [
          '3+ years in MERN stack with GraphQL experience.',
          'Hands-on with scalable architecture.',
          'Comfortable with CI tools and Docker.',
          'Strong communication and problem-solving.'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'GraphQL', 'TypeScript', 'Docker', 'Git'],
        softwareHouse: 'Tradeshift'
      },
      {
        title: 'MERN Stack Developer – TypeScript & Mongoose Expert',
        location: 'Cape Town, South Africa',
        postedDate: '2025-07-01',
        salary: '$415.00/Month',
        description:
          "We are scaling internal tools and dashboards using the MERN stack, written in TypeScript. Looking for someone experienced in database design and schema optimization.",
        responsibilities: [
          'Work on frontend components using React & TypeScript.',
          'Design robust MongoDB schemas using Mongoose.',
          'Develop APIs with proper validation and error handling.',
          'Deploy apps via CI/CD pipelines.'
        ],
        requirements: [
          '2+ years of MERN development.',
          'Advanced skills in Mongoose and backend logic.',
          'Experience with Git and testing tools.',
          'Comfortable in agile and fast-paced teams.'
        ],
        skills: ['React', 'TypeScript', 'MongoDB', 'Express.js', 'Mongoose', 'Tailwind', 'JWT'],
        softwareHouse: 'Yoco Technologies'
      },
      {
        title: 'Full Stack MERN Developer – Cloud SaaS Tools',
        location: 'Dubai, UAE',
        postedDate: '2025-07-01',
        salary: '$420.00/Month',
        description:
          "Help us build cloud-based accounting and inventory apps using full MERN stack. This is a hybrid role involving backend logic and UI/UX responsiveness.",
        responsibilities: [
          'Create dashboard features using React.',
          'Write Node-based APIs with clean structure.',
          'Secure user data using JWT and session tokens.',
          'Design responsive UI with Tailwind.'
        ],
        requirements: [
          '2–3 years of full stack experience.',
          'Knowledge of secure REST APIs and CRUD systems.',
          'Strong teamwork and GitHub familiarity.',
          'Basic cloud deployment (Netlify/Vercel).'
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind', 'Git'],
        softwareHouse: 'Careem (Uber Subsidiary)'
      }
     ],
     'GLASSDOOR.com': [
      {
        title: 'MERN Stack Developer – Admin Panel Engineering',
        location: 'Helsinki, Finland',
        postedDate: '2025-07-02',
        salary: '$410.00/Month',
        description:
          "Develop and maintain internal admin panels and analytics dashboards using MERN technologies. Work closely with backend services and product leads.",
        responsibilities: [
          'Design frontend components in React + Redux.',
          'Build secure API routes in Node/Express.',
          'Integrate MongoDB queries and validation.',
          'Maintain pixel-perfect responsive UIs.'
        ],
        requirements: [
          '2+ years in full stack JS development.',
          'Strong understanding of REST and middleware.',
          'Experience in responsive CSS frameworks.',
          'Team-oriented and organized in Git workflows.'
        ],
        skills: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'REST API'],
        softwareHouse: 'Wolt'
      },
      {
        title: 'Full Stack JavaScript Developer – MERN + DevOps Exposure',
        location: 'Tokyo, Japan',
        postedDate: '2025-07-02',
        salary: '$438.00/Month',
        description:
          "We’re scaling a video streaming platform using MERN stack and DevOps pipelines. Looking for engineers who can collaborate cross-functionally and own features end-to-end.",
        responsibilities: [
          'Work with product on feature delivery.',
          'Manage cloud functions and deployment.',
          'Write scalable backend APIs in Express.',
          'Implement reusable UI logic with Tailwind.'
        ],
        requirements: [
          'At least 3 years of JavaScript/MERN experience.',
          'Exposure to CI/CD tools like GitHub Actions.',
          'Comfortable using Docker in dev environments.',
          'Familiarity with video/image optimization a plus.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'CI/CD', 'Docker'],
        softwareHouse: 'Rakuten'
      },
      {
        title: 'MERN Stack Engineer – Healthcare Web Platforms',
        location: 'Lisbon, Portugal',
        postedDate: '2025-07-02',
        salary: '$425.00/Month',
        description:
          "Join our healthcare SaaS platform and improve patient dashboards and clinic admin tools using the MERN stack. Focused on speed, clarity, and compliance.",
        responsibilities: [
          'Build role-based dashboards with React and Redux.',
          'Secure backend APIs with Express & JWT.',
          'Write flexible MongoDB schemas.',
          'Follow accessibility and GDPR best practices.'
        ],
        requirements: [
          '2–3 years with MERN technologies.',
          'Understanding of healthcare data standards (a bonus).',
          'Detail-oriented with UI precision.',
          'Able to write clean, testable code.'
        ],
        skills: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Tailwind'],
        softwareHouse: 'Talkdesk'
      },
      {
        title: 'MERN Developer – E-Commerce UI & Cart Logic',
        location: 'Rome, Italy',
        postedDate: '2025-07-01',
        salary: '$417.00/Month',
        description:
          "Be part of a boutique e-commerce team building responsive storefronts and smart carts using MERN technologies and session-based storage logic.",
        responsibilities: [
          'Create responsive layouts with React.',
          'Implement cart and checkout with Express APIs.',
          'Design MongoDB models for inventory.',
          'Collaborate on improving site speed and UX.'
        ],
        requirements: [
          '2+ years in MERN projects.',
          'Familiar with SSR and hydration concepts.',
          'Good grasp of sessions, auth, and cookies.',
          'Pixel perfection and layout accuracy required.'
        ],
        skills: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind', 'Redux', 'JWT'],
        softwareHouse: 'Yoox Net-A-Porter'
      },
      {
        title: 'MERN Stack Developer – Fintech Product Line',
        location: 'Dublin, Ireland',
        postedDate: '2025-07-01',
        salary: '$440.00/Month',
        description:
          "Work with us to develop finance dashboards, ledger systems, and account APIs using MERN. Focus on speed, accuracy, and security throughout the full stack.",
        responsibilities: [
          'Implement account and transaction UIs with React.',
          'Create API routes and auth middleware.',
          'Integrate financial reporting modules.',
          'Deploy code using versioned Git workflows.'
        ],
        requirements: [
          '3 years MERN development in production apps.',
          'Excellent JS debugging and test writing.',
          'Secure handling of sensitive data.',
          'Experience working in sprint teams.'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Redux', 'Tailwind'],
        softwareHouse: 'Stripe'
      }
     ],
     'INDEED.com': [
      {
        title: 'Senior MERN Developer – Internal Tools & Dashboards',
        location: 'Barcelona, Spain',
        postedDate: '2025-06-30',
        salary: '$433.00/Month',
        description:
          "Join our internal tools team to build UI dashboards for managing users, metrics, and platform controls across departments. Full stack logic in MERN.",
        responsibilities: [
          'Create component-driven dashboards in React.',
          'Write backend services using Node & Express.',
          'Integrate real-time charts with database metrics.',
          'Implement user access and permission layers.'
        ],
        requirements: [
          '2–3 years in full stack engineering.',
          'Good knowledge of backend logic with role-based access.',
          'Experience building internal admin tools.',
          'Able to deliver features independently.'
        ],
        skills: ['React', 'MongoDB', 'Node.js', 'Express.js', 'Tailwind', 'JWT', 'Redux'],
        softwareHouse: 'Glovo'
      },
      {
        title: 'MERN Developer – Agile Agency Projects',
        location: 'Stockholm, Sweden',
        postedDate: '2025-06-30',
        salary: '$419.00/Month',
        description:
          "Contribute to multiple short and long-term client projects using the MERN stack. You’ll work on landing pages, internal tools, and API-first applications.",
        responsibilities: [
          'Handle cross-stack feature development.',
          'Use Tailwind to implement rapid prototypes.',
          'Build Express-based backend logic.',
          'Participate in agile sprint meetings and reviews.'
        ],
        requirements: [
          'Minimum 2 years of MERN experience.',
          'Fast learner and adaptable to new client specs.',
          'Comfortable with pair programming and Jira.',
          'Clean commit history and Git etiquette.'
        ],
        skills: ['MongoDB', 'React', 'Node.js', 'Express.js', 'Redux', 'Tailwind', 'Git'],
        softwareHouse: 'Tink'
      },
      {
        title: 'Full Stack MERN Developer – Startup Environment',
        location: 'Bangkok, Thailand',
        postedDate: '2025-06-30',
        salary: '$415.00/Month',
        description:
          "A fast-growing travel startup is hiring MERN developers to lead the frontend and backend of their user booking platform. This role is hands-on and impactful.",
        responsibilities: [
          'Develop user portals in React and Tailwind.',
          'Build backend APIs and Mongo models.',
          'Integrate third-party APIs (Stripe, Booking.com).',
          'Manage state with Redux and contexts.'
        ],
        requirements: [
          '2+ years in startup or fast-paced teams.',
          'Experience working with travel or booking APIs.',
          'Can debug both frontend and backend issues.',
          'Basic knowledge of DevOps tools a plus.'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Redux', 'Express.js', 'Tailwind', 'REST API'],
        softwareHouse: 'Agoda'
      },
      {
        title: 'MERN Stack Engineer – LMS & Education Tools',
        location: 'Auckland, New Zealand',
        postedDate: '2025-06-29',
        salary: '$412.00/Month',
        description:
          "Work with our edtech platform to develop interactive lessons, user management modules, and reporting dashboards — all built on MERN stack.",
        responsibilities: [
          'Design components for quizzes, results, and users.',
          'Secure backend logic with authentication middleware.',
          'Create reporting and analytics dashboards.',
          'Ensure mobile-first responsive UIs.'
        ],
        requirements: [
          '2+ years of MERN stack experience.',
          'Previous edtech or LMS platform experience preferred.',
          'Strong CSS/HTML fundamentals with Tailwind.',
          'Experience with Mongoose and nested data.'
        ],
        skills: ['React', 'Express.js', 'MongoDB', 'Node.js', 'JWT', 'Tailwind', 'Mongoose'],
        softwareHouse: 'Education Perfect'
      },
      {
        title: 'MERN Developer – Mobile Web & Responsive Systems',
        location: 'Buenos Aires, Argentina',
        postedDate: '2025-06-29',
        salary: '$414.00/Month',
        description:
          "Join a design-focused mobile web team building MERN stack apps optimized for 4G/5G experiences. You’ll focus on responsiveness and speed.",
        responsibilities: [
          'Develop responsive UIs using Tailwind.',
          'Build REST APIs and handle auth tokens.',
          'Optimize performance for mobile data usage.',
          'Maintain accessibility standards.'
        ],
        requirements: [
          '2–3 years of MERN experience.',
          'Strong interest in performance optimization.',
          'Can work closely with designers.',
          'Understanding of internationalization (i18n).'
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'JWT', 'REST API'],
        softwareHouse: 'Mercado Libre'
      }
     ],
    };

    return {
     title: `MERN-Stack Developer Jobs in ${country}`,
     data: countryData[country],
    };
   },
  },

  'Next.js Specialist': {
   color: 'linear-gradient(-90deg, #E74B54,rgb(225, 173, 176))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
        title: 'Full Stack MERN Developer – REST & JWT Expertise',
        location: 'Lahore, Pakistan',
        postedDate: '2025-07-02',
        salary: '₨130,000/Month',
        description:
          "We're hiring an experienced MERN stack developer to build secure, full-stack applications using modern architecture. You'll work on scalable dashboards and internal tools.",
        responsibilities: [
          'Design RESTful APIs with Express and Node.js.',
          'Build frontend with React, Redux, and Tailwind.',
          'Integrate MongoDB with complex query logic.',
          'Implement authentication using JWT and middleware.'
        ],
        requirements: [
          'Minimum 3 years of experience with the MERN stack.',
          'Strong understanding of authentication and sessions.',
          'Hands-on experience with Git and deployment tools.',
          'Excellent debugging and backend API integration skills.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'JWT', 'Redux', 'REST API', 'Git'],
        softwareHouse: 'Mindstorm Studios'
      },
      {
        title: 'MERN Stack Developer – API & Component Architecture',
        location: 'Islamabad, Pakistan',
        postedDate: '2025-07-02',
        salary: '₨125,000/Month',
        description:
          "Join our dynamic engineering team working on client portals and admin panels using the MERN stack. Strong emphasis on UI performance and backend structure.",
        responsibilities: [
          'Create React components with Redux and hooks.',
          'Develop scalable APIs using Node and Express.',
          'Work with MongoDB and Mongoose for schema control.',
          'Handle UI state, routing, and form validation.'
        ],
        requirements: [
          '2+ years of MERN development experience.',
          'Comfortable working in agile environments.',
          'Strong command of JavaScript, ES6+, and REST APIs.',
          'Experience in mobile-friendly UI development.'
        ],
        skills: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind', 'JavaScript', 'REST API'],
        softwareHouse: 'Techlogix'
      },
      {
        title: 'Senior MERN Developer – GraphQL & CI/CD',
        location: 'Karachi, Pakistan',
        postedDate: '2025-07-01',
        salary: '₨135,000/Month',
        description:
          "We're seeking a senior MERN developer who thrives on GraphQL APIs and DevOps integration. You'll help architect reusable backend and frontend logic for long-term products.",
        responsibilities: [
          'Build full-stack features using MERN + GraphQL.',
          'Design CI/CD pipelines for automatic deployments.',
          'Ensure secure authentication and route guarding.',
          'Work closely with product and design teams.'
        ],
        requirements: [
          '3 years+ experience as a full stack developer.',
          'Strong command of GraphQL and REST.',
          'Experience with GitHub Actions or similar CI/CD tools.',
          'Excellent communication and documentation habits.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GraphQL', 'Tailwind', 'JWT', 'CI/CD', 'Git'],
        softwareHouse: '10Pearls'
      },
      {
        title: 'MERN Stack Engineer – TypeScript & Modular Codebases',
        location: 'Multan, Pakistan',
        postedDate: '2025-07-01',
        salary: '₨120,000/Month',
        description:
          "We're hiring a MERN stack engineer experienced in TypeScript and modular code structures. You'll lead feature development on microservices and modern frontend components.",
        responsibilities: [
          'Develop robust React components using TypeScript.',
          'Build Node APIs with Express and middleware layers.',
          'Work on schema optimization in MongoDB.',
          'Write clean, testable code with proper typing.'
        ],
        requirements: [
          '2–3 years experience working with MERN stack.',
          'Familiar with TypeScript, testing libraries, and Git.',
          'Good sense of UI/UX performance and DOM optimization.',
          'Capable of leading small feature teams.'
        ],
        skills: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'JWT', 'Mongoose', 'Git'],
        softwareHouse: 'Techline'
      },
      {
        title: 'Full Stack Developer – MERN & Cloud Integration',
        location: 'Peshawar, Pakistan',
        postedDate: '2025-06-30',
        salary: '₨128,000/Month',
        description:
          "Join our growing team as a Full Stack MERN Developer and work on cloud-integrated web apps. Ideal for developers who love database design and frontend performance tuning.",
        responsibilities: [
          'Develop RESTful services and MongoDB models.',
          'Design responsive React UIs and dashboards.',
          'Integrate APIs with cloud functions (e.g., Firebase/Serverless).',
          'Write secure code with role-based access.'
        ],
        requirements: [
          '3 years of practical experience with MERN stack.',
          'Understanding of cloud deployment workflows.',
          'Strong command over secure data handling and async logic.',
          'Experience integrating third-party services via APIs.'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Tailwind', 'REST API', 'Cloud Functions', 'OOP'],
        softwareHouse: 'Cubix'
      }
     ],
     'CAREERJET.com': [
      {
        title: 'Senior MERN Stack Developer – RESTful APIs & JWT',
        location: 'Dallas, TX',
        postedDate: '2025-07-02',
        salary: '$430.00/Month',
        description:
          "Join a fintech startup building secure, real-time dashboards using the MERN stack. We focus on scalable APIs, clean design systems, and bulletproof authentication.",
        responsibilities: [
          'Build modular React components with Redux.',
          'Create backend APIs with Node.js and Express.',
          'Secure data with JWT and session tokens.',
          'Integrate MongoDB for real-time data layers.'
        ],
        requirements: [
          'Minimum 3 years of MERN stack development.',
          'Strong REST API design and state management.',
          'Experience with Git-based workflows.',
          'Understanding of role-based access control.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT', 'REST API', 'Tailwind', 'Git'],
        softwareHouse: 'Capital One Tech'
      },
      {
        title: 'Full Stack MERN Developer – GraphQL & Cloud Integration',
        location: 'San Jose, CA',
        postedDate: '2025-07-02',
        salary: '$440.00/Month',
        description:
          "We’re looking for a full stack developer experienced with MERN and GraphQL to join our SaaS analytics platform team. You’ll work on cloud-native deployments and interactive dashboards.",
        responsibilities: [
          'Develop and manage GraphQL endpoints.',
          'Implement reusable frontend logic in React.',
          'Connect APIs with MongoDB/Mongoose layers.',
          'Deploy using CI/CD tools and version control.'
        ],
        requirements: [
          '2–3 years in full-stack JavaScript environments.',
          'Experience using GraphQL with MongoDB.',
          'Knowledge of CI/CD practices.',
          'Excellent problem-solving and code review skills.'
        ],
        skills: ['React', 'GraphQL', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'JWT', 'Git', 'CI/CD'],
        softwareHouse: 'Intuit Inc.'
      },
      {
        title: 'MERN Stack Engineer – TypeScript & Enterprise Apps',
        location: 'Seattle, WA',
        postedDate: '2025-07-01',
        salary: '$420.00/Month',
        description:
          "Help scale our enterprise web platform using the MERN stack with TypeScript and Tailwind CSS. Work closely with designers and product owners to deliver user-centric tools.",
        responsibilities: [
          'Develop full-stack apps with MERN and TypeScript.',
          'Design scalable UI systems with Tailwind.',
          'Implement backend services using Express.',
          'Collaborate via GitHub and Agile sprints.'
        ],
        requirements: [
          'At least 3 years working with MERN stack.',
          'Comfortable using TypeScript across the stack.',
          'Familiar with Mongoose and advanced MongoDB queries.',
          'Excellent teamwork and clean coding habits.'
        ],
        skills: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'JWT', 'Git', 'Agile'],
        softwareHouse: 'Amazon Web Services (AWS)'
      },
      {
        title: 'Lead MERN Developer – SaaS Product Team',
        location: 'Boston, MA',
        postedDate: '2025-07-01',
        salary: '$435.00/Month',
        description:
          "We're seeking a lead-level MERN developer to help architect and maintain key modules of our growing SaaS platform. Work with scalable APIs, complex schemas, and real-time user interfaces.",
        responsibilities: [
          'Build complex backend logic using Node & Express.',
          'Optimize MongoDB performance and schema design.',
          'Manage frontend state using Redux and Context API.',
          'Ensure accessibility and responsiveness across devices.'
        ],
        requirements: [
          '3+ years of experience with the MERN stack.',
          'Solid understanding of data modeling and query optimization.',
          'Capable of leading small agile dev teams.',
          'Good knowledge of testing frameworks.'
        ],
        skills: ['MongoDB', 'React', 'Express.js', 'Node.js', 'Redux', 'Tailwind', 'REST API', 'Testing', 'Git'],
        softwareHouse: 'HubSpot'
      },
      {
        title: 'MERN Developer – UI Focused with Mongoose',
        location: 'Chicago, IL',
        postedDate: '2025-06-30',
        salary: '$410.00/Month',
        description:
          "Join our design-driven team to build and refine customer-facing portals using MERN technologies. Emphasis on UI/UX, backend connections, and reusable patterns.",
        responsibilities: [
          'Develop React components integrated with APIs.',
          'Write expressive data models using Mongoose.',
          'Use Tailwind to design responsive layouts.',
          'Debug across the full stack and suggest improvements.'
        ],
        requirements: [
          '2–3 years of MERN stack experience.',
          'Solid frontend fundamentals and clean CSS work.',
          'Backend knowledge using Express and Node.',
          'Strong team player and fast learner.'
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind', 'JWT', 'JavaScript', 'Git'],
        softwareHouse: 'Basecamp'
      }
     ],
     'SIMPLYHIRED.com': [
      {
        title: 'Full Stack MERN Developer – Real-time Dashboard Projects',
        location: 'Berlin, Germany',
        postedDate: '2025-07-02',
        salary: '$430.00/Month',
        description:
          "We're developing real-time dashboards for logistics and supply chain analytics using the MERN stack. Be part of an agile product team with fast releases and international clients.",
        responsibilities: [
          'Build scalable APIs with Node.js & Express.',
          'Design and develop responsive UIs in React.',
          'Integrate real-time sockets and data streams.',
          'Collaborate with product and QA teams.'
        ],
        requirements: [
          '2–3 years of experience in MERN stack projects.',
          'Familiarity with WebSockets and REST APIs.',
          'Strong communication and Git workflow usage.',
          'Good understanding of UI performance.'
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redux', 'Tailwind', 'REST API'],
        softwareHouse: 'Delivery Hero'
      },
      {
        title: 'MERN Developer – SaaS CRM Builder',
        location: 'Toronto, Canada',
        postedDate: '2025-07-02',
        salary: '$440.00/Month',
        description:
          "Join our platform team to develop customer engagement tools using MERN stack with heavy emphasis on UI logic and integrations.",
        responsibilities: [
          'Work on front-to-back CRM features.',
          'Maintain modular components in React.',
          'Integrate API endpoints with role-based access.',
          'Write secure login and auth features using JWT.'
        ],
        requirements: [
          'At least 3 years in full stack JavaScript.',
          'Solid React/Redux fundamentals.',
          'Hands-on with MongoDB & Mongoose schema.',
          'Experience working in distributed teams.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Redux', 'Tailwind', 'CI/CD'],
        softwareHouse: 'Shopify'
      },
      {
        title: 'Senior MERN Developer – GraphQL & Microservices',
        location: 'Copenhagen, Denmark',
        postedDate: '2025-07-01',
        salary: '$438.00/Month',
        description:
          "You’ll lead front-end and back-end feature implementation in a microservice-based architecture. Must be confident in GraphQL API consumption and modern React patterns.",
        responsibilities: [
          'Build GraphQL-integrated UIs.',
          'Work on cloud functions and deployments.',
          'Set up MongoDB models and validations.',
          'Maintain code quality and peer reviews.'
        ],
        requirements: [
          '3+ years in MERN stack with GraphQL experience.',
          'Hands-on with scalable architecture.',
          'Comfortable with CI tools and Docker.',
          'Strong communication and problem-solving.'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'GraphQL', 'TypeScript', 'Docker', 'Git'],
        softwareHouse: 'Tradeshift'
      },
      {
        title: 'MERN Stack Developer – TypeScript & Mongoose Expert',
        location: 'Cape Town, South Africa',
        postedDate: '2025-07-01',
        salary: '$415.00/Month',
        description:
          "We are scaling internal tools and dashboards using the MERN stack, written in TypeScript. Looking for someone experienced in database design and schema optimization.",
        responsibilities: [
          'Work on frontend components using React & TypeScript.',
          'Design robust MongoDB schemas using Mongoose.',
          'Develop APIs with proper validation and error handling.',
          'Deploy apps via CI/CD pipelines.'
        ],
        requirements: [
          '2+ years of MERN development.',
          'Advanced skills in Mongoose and backend logic.',
          'Experience with Git and testing tools.',
          'Comfortable in agile and fast-paced teams.'
        ],
        skills: ['React', 'TypeScript', 'MongoDB', 'Express.js', 'Mongoose', 'Tailwind', 'JWT'],
        softwareHouse: 'Yoco Technologies'
      },
      {
        title: 'Full Stack MERN Developer – Cloud SaaS Tools',
        location: 'Dubai, UAE',
        postedDate: '2025-07-01',
        salary: '$420.00/Month',
        description:
          "Help us build cloud-based accounting and inventory apps using full MERN stack. This is a hybrid role involving backend logic and UI/UX responsiveness.",
        responsibilities: [
          'Create dashboard features using React.',
          'Write Node-based APIs with clean structure.',
          'Secure user data using JWT and session tokens.',
          'Design responsive UI with Tailwind.'
        ],
        requirements: [
          '2–3 years of full stack experience.',
          'Knowledge of secure REST APIs and CRUD systems.',
          'Strong teamwork and GitHub familiarity.',
          'Basic cloud deployment (Netlify/Vercel).'
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind', 'Git'],
        softwareHouse: 'Careem (Uber Subsidiary)'
      }
     ],
     'GLASSDOOR.com': [
      {
        title: 'MERN Stack Developer – Admin Panel Engineering',
        location: 'Helsinki, Finland',
        postedDate: '2025-07-02',
        salary: '$410.00/Month',
        description:
          "Develop and maintain internal admin panels and analytics dashboards using MERN technologies. Work closely with backend services and product leads.",
        responsibilities: [
          'Design frontend components in React + Redux.',
          'Build secure API routes in Node/Express.',
          'Integrate MongoDB queries and validation.',
          'Maintain pixel-perfect responsive UIs.'
        ],
        requirements: [
          '2+ years in full stack JS development.',
          'Strong understanding of REST and middleware.',
          'Experience in responsive CSS frameworks.',
          'Team-oriented and organized in Git workflows.'
        ],
        skills: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'REST API'],
        softwareHouse: 'Wolt'
      },
      {
        title: 'Full Stack JavaScript Developer – MERN + DevOps Exposure',
        location: 'Tokyo, Japan',
        postedDate: '2025-07-02',
        salary: '$438.00/Month',
        description:
          "We’re scaling a video streaming platform using MERN stack and DevOps pipelines. Looking for engineers who can collaborate cross-functionally and own features end-to-end.",
        responsibilities: [
          'Work with product on feature delivery.',
          'Manage cloud functions and deployment.',
          'Write scalable backend APIs in Express.',
          'Implement reusable UI logic with Tailwind.'
        ],
        requirements: [
          'At least 3 years of JavaScript/MERN experience.',
          'Exposure to CI/CD tools like GitHub Actions.',
          'Comfortable using Docker in dev environments.',
          'Familiarity with video/image optimization a plus.'
        ],
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind', 'CI/CD', 'Docker'],
        softwareHouse: 'Rakuten'
      },
      {
        title: 'MERN Stack Engineer – Healthcare Web Platforms',
        location: 'Lisbon, Portugal',
        postedDate: '2025-07-02',
        salary: '$425.00/Month',
        description:
          "Join our healthcare SaaS platform and improve patient dashboards and clinic admin tools using the MERN stack. Focused on speed, clarity, and compliance.",
        responsibilities: [
          'Build role-based dashboards with React and Redux.',
          'Secure backend APIs with Express & JWT.',
          'Write flexible MongoDB schemas.',
          'Follow accessibility and GDPR best practices.'
        ],
        requirements: [
          '2–3 years with MERN technologies.',
          'Understanding of healthcare data standards (a bonus).',
          'Detail-oriented with UI precision.',
          'Able to write clean, testable code.'
        ],
        skills: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Tailwind'],
        softwareHouse: 'Talkdesk'
      },
      {
        title: 'MERN Developer – E-Commerce UI & Cart Logic',
        location: 'Rome, Italy',
        postedDate: '2025-07-01',
        salary: '$417.00/Month',
        description:
          "Be part of a boutique e-commerce team building responsive storefronts and smart carts using MERN technologies and session-based storage logic.",
        responsibilities: [
          'Create responsive layouts with React.',
          'Implement cart and checkout with Express APIs.',
          'Design MongoDB models for inventory.',
          'Collaborate on improving site speed and UX.'
        ],
        requirements: [
          '2+ years in MERN projects.',
          'Familiar with SSR and hydration concepts.',
          'Good grasp of sessions, auth, and cookies.',
          'Pixel perfection and layout accuracy required.'
        ],
        skills: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind', 'Redux', 'JWT'],
        softwareHouse: 'Yoox Net-A-Porter'
      },
      {
        title: 'MERN Stack Developer – Fintech Product Line',
        location: 'Dublin, Ireland',
        postedDate: '2025-07-01',
        salary: '$440.00/Month',
        description:
          "Work with us to develop finance dashboards, ledger systems, and account APIs using MERN. Focus on speed, accuracy, and security throughout the full stack.",
        responsibilities: [
          'Implement account and transaction UIs with React.',
          'Create API routes and auth middleware.',
          'Integrate financial reporting modules.',
          'Deploy code using versioned Git workflows.'
        ],
        requirements: [
          '3 years MERN development in production apps.',
          'Excellent JS debugging and test writing.',
          'Secure handling of sensitive data.',
          'Experience working in sprint teams.'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Redux', 'Tailwind'],
        softwareHouse: 'Stripe'
      }
     ],
     'INDEED.com': [
      {
        title: 'Senior MERN Developer – Internal Tools & Dashboards',
        location: 'Barcelona, Spain',
        postedDate: '2025-06-30',
        salary: '$433.00/Month',
        description:
          "Join our internal tools team to build UI dashboards for managing users, metrics, and platform controls across departments. Full stack logic in MERN.",
        responsibilities: [
          'Create component-driven dashboards in React.',
          'Write backend services using Node & Express.',
          'Integrate real-time charts with database metrics.',
          'Implement user access and permission layers.'
        ],
        requirements: [
          '2–3 years in full stack engineering.',
          'Good knowledge of backend logic with role-based access.',
          'Experience building internal admin tools.',
          'Able to deliver features independently.'
        ],
        skills: ['React', 'MongoDB', 'Node.js', 'Express.js', 'Tailwind', 'JWT', 'Redux'],
        softwareHouse: 'Glovo'
      },
      {
        title: 'MERN Developer – Agile Agency Projects',
        location: 'Stockholm, Sweden',
        postedDate: '2025-06-30',
        salary: '$419.00/Month',
        description:
          "Contribute to multiple short and long-term client projects using the MERN stack. You’ll work on landing pages, internal tools, and API-first applications.",
        responsibilities: [
          'Handle cross-stack feature development.',
          'Use Tailwind to implement rapid prototypes.',
          'Build Express-based backend logic.',
          'Participate in agile sprint meetings and reviews.'
        ],
        requirements: [
          'Minimum 2 years of MERN experience.',
          'Fast learner and adaptable to new client specs.',
          'Comfortable with pair programming and Jira.',
          'Clean commit history and Git etiquette.'
        ],
        skills: ['MongoDB', 'React', 'Node.js', 'Express.js', 'Redux', 'Tailwind', 'Git'],
        softwareHouse: 'Tink'
      },
      {
        title: 'Full Stack MERN Developer – Startup Environment',
        location: 'Bangkok, Thailand',
        postedDate: '2025-06-30',
        salary: '$415.00/Month',
        description:
          "A fast-growing travel startup is hiring MERN developers to lead the frontend and backend of their user booking platform. This role is hands-on and impactful.",
        responsibilities: [
          'Develop user portals in React and Tailwind.',
          'Build backend APIs and Mongo models.',
          'Integrate third-party APIs (Stripe, Booking.com).',
          'Manage state with Redux and contexts.'
        ],
        requirements: [
          '2+ years in startup or fast-paced teams.',
          'Experience working with travel or booking APIs.',
          'Can debug both frontend and backend issues.',
          'Basic knowledge of DevOps tools a plus.'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'Redux', 'Express.js', 'Tailwind', 'REST API'],
        softwareHouse: 'Agoda'
      },
      {
        title: 'MERN Stack Engineer – LMS & Education Tools',
        location: 'Auckland, New Zealand',
        postedDate: '2025-06-29',
        salary: '$412.00/Month',
        description:
          "Work with our edtech platform to develop interactive lessons, user management modules, and reporting dashboards — all built on MERN stack.",
        responsibilities: [
          'Design components for quizzes, results, and users.',
          'Secure backend logic with authentication middleware.',
          'Create reporting and analytics dashboards.',
          'Ensure mobile-first responsive UIs.'
        ],
        requirements: [
          '2+ years of MERN stack experience.',
          'Previous edtech or LMS platform experience preferred.',
          'Strong CSS/HTML fundamentals with Tailwind.',
          'Experience with Mongoose and nested data.'
        ],
        skills: ['React', 'Express.js', 'MongoDB', 'Node.js', 'JWT', 'Tailwind', 'Mongoose'],
        softwareHouse: 'Education Perfect'
      },
      {
        title: 'MERN Developer – Mobile Web & Responsive Systems',
        location: 'Buenos Aires, Argentina',
        postedDate: '2025-06-29',
        salary: '$414.00/Month',
        description:
          "Join a design-focused mobile web team building MERN stack apps optimized for 4G/5G experiences. You’ll focus on responsiveness and speed.",
        responsibilities: [
          'Develop responsive UIs using Tailwind.',
          'Build REST APIs and handle auth tokens.',
          'Optimize performance for mobile data usage.',
          'Maintain accessibility standards.'
        ],
        requirements: [
          '2–3 years of MERN experience.',
          'Strong interest in performance optimization.',
          'Can work closely with designers.',
          'Understanding of internationalization (i18n).'
        ],
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'JWT', 'REST API'],
        softwareHouse: 'Mercado Libre'
      }
     ],
    };

    return {
     title: `Next.js Specialist Jobs in ${country}`,
     data: countryData[country],
    };
   },
  },

  'React Native Developer': {
   color: 'linear-gradient(-90deg, #520A09,rgb(183, 121, 120))',
   tabs: [
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/reactN-rozee-1.png',
      imagePath2: '/assets/image/jobs/reactN-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/reactN-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/reactN-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/reactN-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/reactN-indeed-1.png',
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
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/devOps-rozee-1.png',
      imagePath2: '/assets/image/jobs/devOps-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/devOps-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/devOps-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/devOps-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/devOps-indeed-1.png',
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
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/salesforce-rozee-1.png',
      imagePath2: '/assets/image/jobs/salesforce-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/salesforce-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/salesforce-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/salesforce-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/salesforce-indeed-1.png',
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
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/microservices-rozee-1.png',
      imagePath2: '/assets/image/jobs/microservices-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/microservices-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/microservices-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/microservices-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/microservices-indeed-1.png',
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
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/blockchain-rozee-1.png',
      imagePath2: '/assets/image/jobs/blockchain-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/blockchain-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/blockchain-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/blockchain-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/blockchain-indeed-1.png',
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
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/dataScientist-rozee-1.png',
      imagePath2: '/assets/image/jobs/dataScientist-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/dataScientist-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/dataScientist-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/dataScientist-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/dataScientist-indeed-1.png',
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
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/ml-rozee-1.png',
      imagePath2: '/assets/image/jobs/ml-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/ml-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/ml-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/ml-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/ml-indeed-1.png',
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
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/ai-rozee-1.png',
      imagePath2: '/assets/image/jobs/ai-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/ai-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/ai-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/ai-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/ai-indeed-1.png',
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
    'ROZEE.pk',
    'CAREERJET.com',
    'SIMPLYHIRED.com',
    'GLASSDOOR.com',
    'INDEED.com',
   ],
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/ceh-rozee-1.png',
      imagePath2: '/assets/image/jobs/ceh-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/ceh-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/ceh-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/ceh-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/ceh-indeed-1.png',
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
    <h3 className="tp-section-title">Jobs Posting platforms</h3>
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
      <Box sx={{borderBottom: 1, borderColor: 'divider'}} className="mb-3">
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

       <TableContainer component={Paper} elevation={2}>
        <Table aria-label="job listings">
         <Box className="p-4">
          {sidebarItems[activeSidebarItem]
           .content(sidebarItems[activeSidebarItem].tabs[activeTab])
           .data.map((job, index) => (
            <TableRow
             key={index}
             sx={{
              display: 'block',
              mb: 4,
              p: 2,
              borderBottom: '1px solid #eee',
             }}
            >
             <div className="row">
              <div className="col-md-9">
               <Typography variant="h6" className="fw-bold">
                {job.title}
               </Typography>
               <Typography variant="subtitle1" color="text.secondary">
                {job.softwareHouse}
               </Typography>
               <Typography variant="caption" display="block" gutterBottom>
                {job.location}
               </Typography>
               <Typography variant="caption" display="block" gutterBottom>
                {job.postedDate}
               </Typography>
              </div>
              <div className="col-md-3 d-flex justify-content-end">
               <Typography variant="subtitle1" className="mt-2 fw-bold">
                {job.salary}
               </Typography>
              </div>
             </div>

             <Typography variant="body1" className="mt-3">
              {job.description}
             </Typography>

             {job.responsibilities && (
              <>
               <Typography variant="subtitle2" className="mt-3 fw-bold">
                Responsibilities:
               </Typography>
               <ul>
                {job.responsibilities.map((item, i) => (
                 <li key={i}>
                  <Typography variant="body2">{item}</Typography>
                 </li>
                ))}
               </ul>
              </>
             )}

             {job.requirements && (
              <>
               <Typography variant="subtitle2" className="mt-3 fw-bold">
                Requirements:
               </Typography>
               <ul>
                {job.requirements.map((item, i) => (
                 <li key={i}>
                  <Typography variant="body2">{item}</Typography>
                 </li>
                ))}
               </ul>
              </>
             )}

             {job.skills && (
              <>
               <Typography variant="subtitle2" className="mt-3 fw-bold">
                Skills:
               </Typography>
               <div className="d-flex flex-wrap gap-2 mt-2">
                {job.skills.map((skill, i) => (
                 <span
                  key={i}
                  className="badge p-2"
                  style={{
                   borderRadius: '50px',
                   background: '#CEE3FF',
                   color: '#666666',
                   fontSize: '12px',
                  }}
                 >
                  {skill}
                 </span>
                ))}
               </div>
              </>
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
