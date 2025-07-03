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
       title: 'Jamstack Developer – Appwrite + React',
       location: 'Peshawar, Pakistan',
       postedDate: '2025-06-29',
       salary: '₨100,000/Month',
       description:
        'Looking for a Jamstack developer experienced in working with Appwrite, React, and Next.js. Build secure, scalable apps with BaaS features like file storage, user auth, and serverless functions.',
       responsibilities: [
        'Develop UI components integrated with Appwrite backend.',
        'Set up user auth, databases, and file storage systems.',
        'Work with REST APIs and Appwrite SDKs.',
        'Collaborate on project planning and responsive layout design.',
       ],
       requirements: [
        '2 years of frontend or Jamstack development.',
        'Experience with Appwrite services and SDK usage.',
        'Good understanding of frontend and backend handshakes.',
        'Capable of deploying serverless and secure features.',
       ],
       skills: [
        'appwrite',
        'html',
        'react',
        'next.js',
        'tailwind',
        'javascript',
        'authentication',
        'OOP',
        'css',
        'api integration',
       ],
       softwareHouse: 'ArhamSoft',
      },
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
        'Write scalable API interactions and database queries.',
       ],
       requirements: [
        '2 years of experience in frontend or Jamstack architecture.',
        'Experience with Supabase, React, and SSR/ISR logic.',
        'Familiarity with SQL-based BaaS and RESTful endpoints.',
        'Ability to design responsive and clean layouts.',
       ],
       skills: [
        'html',
        'tailwind',
        'react',
        'supabase',
        'next.js',
        'css',
        'javascript',
        'api integration',
        'authentication',
        'OOP',
       ],
       softwareHouse: 'Techverx',
      },
      {
       title: 'Firebase Developer – Realtime Apps & SSR',
       location: 'Islamabad, Pakistan',
       postedDate: '2025-07-01',
       salary: '₨108,000/Month',
       description:
        'Looking for a frontend-focused Firebase developer to build real-time applications with Next.js and Firestore. If you enjoy BaaS services and want to build scalable products—this is your role.',
       responsibilities: [
        'Develop dynamic views with Next.js and Firebase.',
        'Use Firestore for real-time updates and auth.',
        'Write server-side logic using Firebase Functions.',
        'Design pixel-perfect UI using Tailwind CSS.',
       ],
       requirements: [
        '1 year experience working with Firebase and frontend tools.',
        'Understanding of real-time syncing and serverless triggers.',
        'Experience building auth flows and role-based dashboards.',
        'Solid grasp of frontend component structure.',
       ],
       skills: [
        'firebase',
        'tailwind',
        'react',
        'next.js',
        'javascript',
        'html',
        'css',
        'functions behind the scene',
        'SSR',
        'authentication',
       ],
       softwareHouse: 'Tkxel',
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
        'Maintain admin interface and structured content.',
       ],
       requirements: [
        '1 year of experience with Strapi or any headless CMS.',
        'Basic understanding of GraphQL and REST API integration.',
        'Ability to build mobile-first interfaces.',
        'Good command of frontend styling and logic.',
       ],
       skills: [
        'strapi',
        'next.js',
        'react',
        'html',
        'css',
        'tailwind',
        'graphql',
        'api integration',
        'javascript',
        'responsive websites',
       ],
       softwareHouse: 'Soft Pyramid',
      },
      {
       title: 'Sanity.io Developer – Content API Integrations',
       location: 'Karachi, Pakistan',
       postedDate: '2025-07-01',
       salary: '₨110,000/Month',
       description:
        'Join our CMS-driven team to build content-rich applications using Sanity.io, React, and Next.js. Perfect for a developer who loves structured content, live previews, and scalable UI.',
       responsibilities: [
        'Integrate Sanity APIs with Next.js frontends.',
        'Create reusable components to display dynamic content.',
        'Implement live preview and client-side routing.',
        'Collaborate with content creators and designers.',
       ],
       requirements: [
        '2 years frontend experience, preferably with CMS integration.',
        'Hands-on with GROQ queries and Sanity schemas.',
        'Experience building blog, portfolio, or content sites.',
        'Familiarity with Tailwind and structured content models.',
       ],
       skills: [
        'sanity.io',
        'next.js',
        'react',
        'javascript',
        'html',
        'tailwind',
        'webhooks',
        'api integration',
        'css',
       ],
       softwareHouse: 'NorthBay Solutions',
      },
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
        'Work with UI/UX designers on pixel-perfect delivery.',
       ],
       requirements: [
        '2 years experience with frontend or Jamstack.',
        'Working knowledge of Supabase services.',
        'Experience building authenticated dashboards.',
        'Proficient in Tailwind and dynamic rendering.',
       ],
       skills: [
        'supabase',
        'react',
        'next.js',
        'tailwind',
        'html',
        'css',
        'javascript',
        'authentication',
        'api integration',
       ],
       softwareHouse: 'Vercel',
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
        'Write Tailwind-based responsive design.',
       ],
       requirements: [
        '1 year frontend experience with Firebase.',
        'Comfortable working with Realtime Database & Functions.',
        'Experience integrating dynamic content.',
        'Strong CSS and component logic knowledge.',
       ],
       skills: [
        'firebase',
        'javascript',
        'react',
        'tailwind',
        'next.js',
        'html',
        'css',
        'functions behind the scene',
        'authentication',
       ],
       softwareHouse: 'Google Cloud',
      },
      {
       title: 'Sanity.io Developer – Headless CMS Interfaces',
       location: 'New York, NY',
       postedDate: '2025-07-01',
       salary: '$288.00/Month',
       description:
        'Help us build structured content interfaces using Sanity.io and Next.js. This role involves close coordination with content teams and seamless rendering across devices.',
       responsibilities: [
        'Integrate Sanity APIs into React UI.',
        'Use Tailwind and component libraries.',
        'Implement dynamic GROQ queries.',
        'Handle SEO and image optimization logic.',
       ],
       requirements: [
        '2 years experience with headless CMS platforms.',
        'Familiar with GROQ, structure builder, and live preview.',
        'Strong understanding of component data flows.',
        'Solid skills in HTML/CSS and SSR setup.',
       ],
       skills: [
        'sanity.io',
        'html',
        'css',
        'javascript',
        'tailwind',
        'next.js',
        'react',
        'webhooks',
        'api integration',
       ],
       softwareHouse: 'Contentful Inc.',
      },
      {
       title: 'Appwrite Developer – Serverless Web Apps',
       location: 'Seattle, WA',
       postedDate: '2025-07-01',
       salary: '$285.00/Month',
       description:
        'Join our cloud-native development team building Jamstack sites with Appwrite. Work on frontend security, user authentication, and file management modules.',
       responsibilities: [
        'Create secure frontend modules using Appwrite APIs.',
        'Build responsive React components with Tailwind.',
        'Use Appwrite Functions for serverless workflows.',
        'Deploy apps with ISR and build caching in Next.js.',
       ],
       requirements: [
        '1–2 years of experience using Appwrite or Firebase.',
        'Knowledge of auth, database, and functions setup.',
        'Skilled in React, Tailwind, and HTML/CSS.',
        'Confident with frontend deployments and webhooks.',
       ],
       skills: [
        'appwrite',
        'tailwind',
        'next.js',
        'react',
        'html',
        'css',
        'javascript',
        'authentication',
        'OOP',
       ],
       softwareHouse: 'Netlify',
      },
      {
       title: 'Strapi Developer – API-first Frontends',
       location: 'Miami, FL',
       postedDate: '2025-06-30',
       salary: '$289.00/Month',
       description:
        'Work with our Strapi-powered CMS to build frontend apps with clean APIs and modern architecture. Ideal for developers who love structured content and GraphQL endpoints.',
       responsibilities: [
        'Build Next.js components with Strapi data.',
        'Integrate APIs using REST and GraphQL.',
        'Write styled UI using Tailwind CSS.',
        'Implement SSR/ISR strategies as needed.',
       ],
       requirements: [
        '2 years frontend or CMS experience.',
        'Hands-on with Strapi schemas and GraphQL.',
        'Proficient with Tailwind, React, and routing systems.',
        'Experience deploying JAMstack products.',
       ],
       skills: [
        'strapi',
        'graphql',
        'react',
        'tailwind',
        'next.js',
        'html',
        'css',
        'javascript',
        'api integration',
       ],
       softwareHouse: 'Hashnode Inc.',
      },
     ],
     'SIMPLYHIRED.com': [
      {
       title: 'Jamstack Developer – Supabase Focused',
       location: 'Berlin, Germany',
       postedDate: '2025-07-02',
       salary: '$290.00/Month',
       description:
        'Collaborate on developing high-speed marketing pages and admin dashboards with Supabase and Next.js. Ideal for devs who value speed and secure data integration.',
       responsibilities: [
        'Connect Supabase APIs with SSR-powered Next.js.',
        'Create tailwind-powered design systems.',
        'Build authentication and protected routes.',
        'Write modular UI components in React.',
       ],
       requirements: [
        '1 year of experience with Supabase or similar stack.',
        'Familiarity with auth and live query patterns.',
        'Strong command over modern JS and Tailwind.',
        'Experience deploying JAMstack apps.',
       ],
       skills: [
        'supabase',
        'html',
        'react',
        'next.js',
        'javascript',
        'tailwind',
        'authentication',
        'api integration',
       ],
       softwareHouse: 'TIER Mobility',
      },
      {
       title: 'Firebase Developer – Real-time Projects',
       location: 'Dubai, UAE',
       postedDate: '2025-07-02',
       salary: '$295.00/Month',
       description:
        'Create lightning-fast interfaces using Firebase and React. Be part of our innovation team building realtime messaging tools and dashboards.',
       responsibilities: [
        'Use Firebase Firestore and Auth with Next.js.',
        'Implement live updates and serverless functions.',
        'Develop with Tailwind and modular React logic.',
        'Maintain security rules and scalable backend.',
       ],
       requirements: [
        '2 years of frontend + Firebase experience.',
        'Comfortable with auth, rules, and Firestore triggers.',
        'Proficiency in responsive UI and clean code.',
        'Basic CI/CD and deployment knowledge.',
       ],
       skills: [
        'firebase',
        'html',
        'css',
        'javascript',
        'react',
        'next.js',
        'tailwind',
        'functions behind the scene',
       ],
       softwareHouse: 'Careem',
      },
      {
       title: 'Sanity.io Developer – Dynamic Web Projects',
       location: 'London, UK',
       postedDate: '2025-07-01',
       salary: '$288.00/Month',
       description:
        'Build high-performance websites and content platforms with Sanity.io and Next.js. Join a growing content-tech team focused on speed and maintainability.',
       responsibilities: [
        'Use GROQ queries to fetch structured data.',
        'Build dynamic UIs using Tailwind + Sanity.',
        'Integrate live previews and SEO metadata.',
        'Work with content and design teams on UI quality.',
       ],
       requirements: [
        '1–2 years of frontend/CMS experience.',
        'Fluent with Sanity Studio and structure.',
        'Strong HTML/CSS foundations.',
        'Confident in SSR and content syncing.',
       ],
       skills: [
        'sanity.io',
        'react',
        'next.js',
        'tailwind',
        'javascript',
        'html',
        'css',
        'api integration',
       ],
       softwareHouse: 'BBC Design & Engineering',
      },
      {
       title: 'Strapi Developer – API-driven Interfaces',
       location: 'Tokyo, Japan',
       postedDate: '2025-07-01',
       salary: '$289.00/Month',
       description:
        'Work with Strapi as your CMS and build modern Next.js applications for a global media agency. Apply REST/GraphQL principles for optimized UI performance.',
       responsibilities: [
        'Integrate Strapi API with frontend modules.',
        'Use GraphQL for optimized content rendering.',
        'Write Tailwind-first responsive designs.',
        'Handle routing, auth, and SSR pages.',
       ],
       requirements: [
        '2 years of frontend/CMS integration experience.',
        'Understanding of content types and data models.',
        'Strong API consumption and frontend logic.',
        'Experience in REST, GraphQL, and auth.',
       ],
       skills: [
        'strapi',
        'graphql',
        'react',
        'tailwind',
        'next.js',
        'html',
        'css',
        'javascript',
       ],
       softwareHouse: 'Rakuten',
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
        'Optimize client-server interactions with functions.',
       ],
       requirements: [
        '1–2 years of experience in Jamstack or Appwrite.',
        'Good understanding of auth flows and backend triggers.',
        'UI-focused mindset with clean state management.',
        'Experience deploying on Vercel or Netlify.',
       ],
       skills: [
        'appwrite',
        'react',
        'tailwind',
        'next.js',
        'javascript',
        'html',
        'css',
        'authentication',
        'api integration',
       ],
       softwareHouse: 'Shopify',
      },
     ],
     'GLASSDOOR.com': [
      {
       title: 'Jamstack Developer – Fullstack with Supabase',
       location: 'Barcelona, Spain',
       postedDate: '2025-07-02',
       salary: '$293.00/Month',
       description:
        'Join our remote-first team developing interactive dashboards and marketing websites powered by Supabase and React. Ideal for developers passionate about clean UI and fast APIs.',
       responsibilities: [
        'Use Supabase for authentication and data management.',
        'Design and develop with Tailwind and Next.js.',
        'Implement secure data fetch with API optimization.',
        'Ensure high performance across all breakpoints.',
       ],
       requirements: [
        '1 year of experience in Jamstack or Supabase.',
        'Proficiency in building responsive React apps.',
        'Experience with SSR and authentication logic.',
        'Good communication and collaboration skills.',
       ],
       skills: [
        'supabase',
        'react',
        'tailwind',
        'next.js',
        'html',
        'css',
        'javascript',
        'api integration',
       ],
       softwareHouse: 'Typeform',
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
        'Implement SEO features and responsive templates.',
       ],
       requirements: [
        '1–2 years experience with Strapi or similar headless CMS.',
        'Understanding of GraphQL and static generation.',
        'Strong grasp of frontend and content modeling.',
        'Clean, scalable coding practices.',
       ],
       skills: [
        'strapi',
        'graphql',
        'react',
        'next.js',
        'html',
        'tailwind',
        'css',
        'javascript',
       ],
       softwareHouse: 'Qonto',
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
        'Integrate serverless functions for workflows.',
       ],
       requirements: [
        '2 years frontend experience with Firebase.',
        'Knowledge of auth, security rules, and cloud functions.',
        'Ability to build maintainable UI systems.',
        'Strong command of React and CSS utility frameworks.',
       ],
       skills: [
        'firebase',
        'next.js',
        'tailwind',
        'javascript',
        'html',
        'css',
        'functions behind the scene',
        'authentication',
       ],
       softwareHouse: 'Grab Holdings',
      },
      {
       title: 'Sanity.io Developer – Content-first Web Apps',
       location: 'Amsterdam, Netherlands',
       postedDate: '2025-06-30',
       salary: '$291.00/Month',
       description:
        'Join a content-led development team focused on scalable websites. Your role will focus on Sanity.io integration, structured data rendering, and CMS-powered frontends.',
       responsibilities: [
        'Integrate Sanity.io APIs with dynamic UI components.',
        'Design user flows with Tailwind and React.',
        'Collaborate with marketing teams on CMS structure.',
        'Ensure cross-device performance and SEO.',
       ],
       requirements: [
        '2 years working with CMS integrations.',
        'Strong experience in GROQ and Sanity schema logic.',
        'Able to build dynamic pages and layouts.',
        'Fluent in React component-based architecture.',
       ],
       skills: [
        'sanity.io',
        'react',
        'html',
        'css',
        'next.js',
        'tailwind',
        'javascript',
        'webhooks',
       ],
       softwareHouse: 'MessageBird',
      },
      {
       title: 'Appwrite Developer – Secure SaaS UI Developer',
       location: 'Zurich, Switzerland',
       postedDate: '2025-06-29',
       salary: '$289.00/Month',
       description:
        'We are building SaaS dashboards using Appwrite as backend infrastructure. If you can build fast, secure, and functional UIs, we’d love to talk.',
       responsibilities: [
        'Implement Appwrite auth, storage, and databases.',
        'Develop UI logic with React and Tailwind.',
        'Build reusable Next.js components.',
        'Optimize frontend performance and loading.',
       ],
       requirements: [
        '1–2 years of frontend or Jamstack experience.',
        'Deep understanding of Appwrite services.',
        'Strong skills in authentication and SSR.',
        'Fluent in responsive and component-based development.',
       ],
       skills: [
        'appwrite',
        'react',
        'tailwind',
        'next.js',
        'html',
        'css',
        'javascript',
        'authentication',
        'api integration',
       ],
       softwareHouse: 'Proton AG',
      },
     ],
     'INDEED.com': [
      {
       title: 'Strapi Developer – Jamstack CMS Sites',
       location: 'Warsaw, Poland',
       postedDate: '2025-07-01',
       salary: '$286.00/Month',
       description:
        'Join our remote-first team building client websites and internal dashboards using Strapi CMS and React-based UI logic.',
       responsibilities: [
        'Connect Strapi APIs with frontend architecture.',
        'Build modular layouts using Tailwind CSS.',
        'Ensure dynamic content integration.',
        'Test API latency and reliability.',
       ],
       requirements: [
        '2 years of CMS experience with REST APIs.',
        'Expertise in React + Tailwind workflow.',
        'Ability to interpret and structure backend data.',
        'Familiarity with mobile-first development.',
       ],
       skills: [
        'strapi',
        'react',
        'tailwind',
        'next.js',
        'html',
        'css',
        'javascript',
        'api integration',
       ],
       softwareHouse: 'Netguru',
      },
      {
       title: 'Firebase Developer – Real-Time UIs',
       location: 'Sydney, Australia',
       postedDate: '2025-07-02',
       salary: '$295.00/Month',
       description:
        'Help us create scalable chat and notification systems using Firebase and React. We’re seeking frontend engineers with real-time app experience.',
       responsibilities: [
        'Integrate Firestore and Firebase Functions.',
        'Use Tailwind for UI and responsiveness.',
        'Develop reusable React logic components.',
        'Secure endpoints and protect user data.',
       ],
       requirements: [
        '1 year experience in Firebase + React.',
        'Solid understanding of auth and session handling.',
        'Strong JS and component logic.',
        'Ability to work remotely and asynchronously.',
       ],
       skills: [
        'firebase',
        'next.js',
        'tailwind',
        'react',
        'html',
        'css',
        'javascript',
        'functions behind the scene',
       ],
       softwareHouse: 'Canva',
      },
      {
       title: 'Jamstack Developer – Multi-BaaS Role',
       location: 'Oslo, Norway',
       postedDate: '2025-07-01',
       salary: '$290.00/Month',
       description:
        'Work with a hybrid BaaS stack including Firebase, Supabase, and Strapi. Perfect for a developer who enjoys switching gears across CMS and databases.',
       responsibilities: [
        'Integrate and test APIs from multiple sources.',
        'Build dynamic components with React + Tailwind.',
        'Structure CMS content and pages.',
        'Deploy globally with Vercel.',
       ],
       requirements: [
        '1.5 years frontend experience across platforms.',
        'Good grasp of REST and GraphQL workflows.',
        'Organized and test-driven approach.',
        'Cross-stack API management experience.',
       ],
       skills: [
        'firebase',
        'strapi',
        'supabase',
        'react',
        'next.js',
        'tailwind',
        'html',
        'css',
        'javascript',
       ],
       softwareHouse: 'Kahoot!',
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
        'Handle image optimization and metadata.',
       ],
       requirements: [
        '1–2 years experience using Sanity.',
        'Experience with SEO and performance optimization.',
        'Strong in HTML, Tailwind, and structured data.',
        'Fast debugging and production readiness.',
       ],
       skills: [
        'sanity.io',
        'next.js',
        'react',
        'html',
        'tailwind',
        'css',
        'javascript',
        'webhooks',
       ],
       softwareHouse: 'Runtastic (Adidas R&D)',
      },
      {
       title: 'Jamstack Developer – Firebase + CMS Integration',
       location: 'Istanbul, Türkiye',
       postedDate: '2025-06-30',
       salary: '$288.00/Month',
       description:
        'Be part of our core development team creating user-centric web apps using Firebase backend and CMS-based frontends with React.',
       responsibilities: [
        'Build features with Firebase and Strapi.',
        'Use Next.js for routing and SSR logic.',
        'Manage component-based UIs with Tailwind.',
        'Ensure security and scalability.',
       ],
       requirements: [
        '2 years experience with Firebase + React.',
        'Experience with CMS like Strapi or Sanity.',
        'Good JS and data structure knowledge.',
        'Fluent in frontend testing and clean coding.',
       ],
       skills: [
        'firebase',
        'strapi',
        'react',
        'tailwind',
        'next.js',
        'javascript',
        'html',
        'css',
        'authentication',
       ],
       softwareHouse: 'Peak Games',
      },
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
        'Implement authentication using JWT and middleware.',
       ],
       requirements: [
        'Minimum 3 years of experience with the MERN stack.',
        'Strong understanding of authentication and sessions.',
        'Hands-on experience with Git and deployment tools.',
        'Excellent debugging and backend API integration skills.',
       ],
       skills: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'Tailwind',
        'JWT',
        'Redux',
        'REST API',
        'Git',
       ],
       softwareHouse: 'Mindstorm Studios',
      },
      {
       title: 'MERN Stack Developer – API & Component Architecture',
       location: 'Islamabad, Pakistan',
       postedDate: '2025-07-02',
       salary: '₨125,000/Month',
       description:
        'Join our dynamic engineering team working on client portals and admin panels using the MERN stack. Strong emphasis on UI performance and backend structure.',
       responsibilities: [
        'Create React components with Redux and hooks.',
        'Develop scalable APIs using Node and Express.',
        'Work with MongoDB and Mongoose for schema control.',
        'Handle UI state, routing, and form validation.',
       ],
       requirements: [
        '2+ years of MERN development experience.',
        'Comfortable working in agile environments.',
        'Strong command of JavaScript, ES6+, and REST APIs.',
        'Experience in mobile-friendly UI development.',
       ],
       skills: [
        'React',
        'Redux',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Tailwind',
        'JavaScript',
        'REST API',
       ],
       softwareHouse: 'Techlogix',
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
        'Work closely with product and design teams.',
       ],
       requirements: [
        '3 years+ experience as a full stack developer.',
        'Strong command of GraphQL and REST.',
        'Experience with GitHub Actions or similar CI/CD tools.',
        'Excellent communication and documentation habits.',
       ],
       skills: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'GraphQL',
        'Tailwind',
        'JWT',
        'CI/CD',
        'Git',
       ],
       softwareHouse: '10Pearls',
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
        'Write clean, testable code with proper typing.',
       ],
       requirements: [
        '2–3 years experience working with MERN stack.',
        'Familiar with TypeScript, testing libraries, and Git.',
        'Good sense of UI/UX performance and DOM optimization.',
        'Capable of leading small feature teams.',
       ],
       skills: [
        'TypeScript',
        'React',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Tailwind',
        'JWT',
        'Mongoose',
        'Git',
       ],
       softwareHouse: 'Techline',
      },
      {
       title: 'Full Stack Developer – MERN & Cloud Integration',
       location: 'Peshawar, Pakistan',
       postedDate: '2025-06-30',
       salary: '₨128,000/Month',
       description:
        'Join our growing team as a Full Stack MERN Developer and work on cloud-integrated web apps. Ideal for developers who love database design and frontend performance tuning.',
       responsibilities: [
        'Develop RESTful services and MongoDB models.',
        'Design responsive React UIs and dashboards.',
        'Integrate APIs with cloud functions (e.g., Firebase/Serverless).',
        'Write secure code with role-based access.',
       ],
       requirements: [
        '3 years of practical experience with MERN stack.',
        'Understanding of cloud deployment workflows.',
        'Strong command over secure data handling and async logic.',
        'Experience integrating third-party services via APIs.',
       ],
       skills: [
        'React',
        'Node.js',
        'MongoDB',
        'Express.js',
        'JWT',
        'Tailwind',
        'REST API',
        'Cloud Functions',
        'OOP',
       ],
       softwareHouse: 'Cubix',
      },
     ],
     'CAREERJET.com': [
      {
       title: 'Senior MERN Stack Developer – RESTful APIs & JWT',
       location: 'Dallas, TX',
       postedDate: '2025-07-02',
       salary: '$430.00/Month',
       description:
        'Join a fintech startup building secure, real-time dashboards using the MERN stack. We focus on scalable APIs, clean design systems, and bulletproof authentication.',
       responsibilities: [
        'Build modular React components with Redux.',
        'Create backend APIs with Node.js and Express.',
        'Secure data with JWT and session tokens.',
        'Integrate MongoDB for real-time data layers.',
       ],
       requirements: [
        'Minimum 3 years of MERN stack development.',
        'Strong REST API design and state management.',
        'Experience with Git-based workflows.',
        'Understanding of role-based access control.',
       ],
       skills: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'Redux',
        'JWT',
        'REST API',
        'Tailwind',
        'Git',
       ],
       softwareHouse: 'Capital One Tech',
      },
      {
       title: 'Full Stack MERN Developer – GraphQL & Cloud Integration',
       location: 'San Jose, CA',
       postedDate: '2025-07-02',
       salary: '$440.00/Month',
       description:
        'We’re looking for a full stack developer experienced with MERN and GraphQL to join our SaaS analytics platform team. You’ll work on cloud-native deployments and interactive dashboards.',
       responsibilities: [
        'Develop and manage GraphQL endpoints.',
        'Implement reusable frontend logic in React.',
        'Connect APIs with MongoDB/Mongoose layers.',
        'Deploy using CI/CD tools and version control.',
       ],
       requirements: [
        '2–3 years in full-stack JavaScript environments.',
        'Experience using GraphQL with MongoDB.',
        'Knowledge of CI/CD practices.',
        'Excellent problem-solving and code review skills.',
       ],
       skills: [
        'React',
        'GraphQL',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Tailwind',
        'JWT',
        'Git',
        'CI/CD',
       ],
       softwareHouse: 'Intuit Inc.',
      },
      {
       title: 'MERN Stack Engineer – TypeScript & Enterprise Apps',
       location: 'Seattle, WA',
       postedDate: '2025-07-01',
       salary: '$420.00/Month',
       description:
        'Help scale our enterprise web platform using the MERN stack with TypeScript and Tailwind CSS. Work closely with designers and product owners to deliver user-centric tools.',
       responsibilities: [
        'Develop full-stack apps with MERN and TypeScript.',
        'Design scalable UI systems with Tailwind.',
        'Implement backend services using Express.',
        'Collaborate via GitHub and Agile sprints.',
       ],
       requirements: [
        'At least 3 years working with MERN stack.',
        'Comfortable using TypeScript across the stack.',
        'Familiar with Mongoose and advanced MongoDB queries.',
        'Excellent teamwork and clean coding habits.',
       ],
       skills: [
        'TypeScript',
        'React',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Tailwind',
        'JWT',
        'Git',
        'Agile',
       ],
       softwareHouse: 'Amazon Web Services (AWS)',
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
        'Ensure accessibility and responsiveness across devices.',
       ],
       requirements: [
        '3+ years of experience with the MERN stack.',
        'Solid understanding of data modeling and query optimization.',
        'Capable of leading small agile dev teams.',
        'Good knowledge of testing frameworks.',
       ],
       skills: [
        'MongoDB',
        'React',
        'Express.js',
        'Node.js',
        'Redux',
        'Tailwind',
        'REST API',
        'Testing',
        'Git',
       ],
       softwareHouse: 'HubSpot',
      },
      {
       title: 'MERN Developer – UI Focused with Mongoose',
       location: 'Chicago, IL',
       postedDate: '2025-06-30',
       salary: '$410.00/Month',
       description:
        'Join our design-driven team to build and refine customer-facing portals using MERN technologies. Emphasis on UI/UX, backend connections, and reusable patterns.',
       responsibilities: [
        'Develop React components integrated with APIs.',
        'Write expressive data models using Mongoose.',
        'Use Tailwind to design responsive layouts.',
        'Debug across the full stack and suggest improvements.',
       ],
       requirements: [
        '2–3 years of MERN stack experience.',
        'Solid frontend fundamentals and clean CSS work.',
        'Backend knowledge using Express and Node.',
        'Strong team player and fast learner.',
       ],
       skills: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Tailwind',
        'JWT',
        'JavaScript',
        'Git',
       ],
       softwareHouse: 'Basecamp',
      },
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
        'Collaborate with product and QA teams.',
       ],
       requirements: [
        '2–3 years of experience in MERN stack projects.',
        'Familiarity with WebSockets and REST APIs.',
        'Strong communication and Git workflow usage.',
        'Good understanding of UI performance.',
       ],
       skills: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Socket.io',
        'Redux',
        'Tailwind',
        'REST API',
       ],
       softwareHouse: 'Delivery Hero',
      },
      {
       title: 'MERN Developer – SaaS CRM Builder',
       location: 'Toronto, Canada',
       postedDate: '2025-07-02',
       salary: '$440.00/Month',
       description:
        'Join our platform team to develop customer engagement tools using MERN stack with heavy emphasis on UI logic and integrations.',
       responsibilities: [
        'Work on front-to-back CRM features.',
        'Maintain modular components in React.',
        'Integrate API endpoints with role-based access.',
        'Write secure login and auth features using JWT.',
       ],
       requirements: [
        'At least 3 years in full stack JavaScript.',
        'Solid React/Redux fundamentals.',
        'Hands-on with MongoDB & Mongoose schema.',
        'Experience working in distributed teams.',
       ],
       skills: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'JWT',
        'Redux',
        'Tailwind',
        'CI/CD',
       ],
       softwareHouse: 'Shopify',
      },
      {
       title: 'Senior MERN Developer – GraphQL & Microservices',
       location: 'Copenhagen, Denmark',
       postedDate: '2025-07-01',
       salary: '$438.00/Month',
       description:
        'You’ll lead front-end and back-end feature implementation in a microservice-based architecture. Must be confident in GraphQL API consumption and modern React patterns.',
       responsibilities: [
        'Build GraphQL-integrated UIs.',
        'Work on cloud functions and deployments.',
        'Set up MongoDB models and validations.',
        'Maintain code quality and peer reviews.',
       ],
       requirements: [
        '3+ years in MERN stack with GraphQL experience.',
        'Hands-on with scalable architecture.',
        'Comfortable with CI tools and Docker.',
        'Strong communication and problem-solving.',
       ],
       skills: [
        'React',
        'Node.js',
        'MongoDB',
        'Express.js',
        'GraphQL',
        'TypeScript',
        'Docker',
        'Git',
       ],
       softwareHouse: 'Tradeshift',
      },
      {
       title: 'MERN Stack Developer – TypeScript & Mongoose Expert',
       location: 'Cape Town, South Africa',
       postedDate: '2025-07-01',
       salary: '$415.00/Month',
       description:
        'We are scaling internal tools and dashboards using the MERN stack, written in TypeScript. Looking for someone experienced in database design and schema optimization.',
       responsibilities: [
        'Work on frontend components using React & TypeScript.',
        'Design robust MongoDB schemas using Mongoose.',
        'Develop APIs with proper validation and error handling.',
        'Deploy apps via CI/CD pipelines.',
       ],
       requirements: [
        '2+ years of MERN development.',
        'Advanced skills in Mongoose and backend logic.',
        'Experience with Git and testing tools.',
        'Comfortable in agile and fast-paced teams.',
       ],
       skills: [
        'React',
        'TypeScript',
        'MongoDB',
        'Express.js',
        'Mongoose',
        'Tailwind',
        'JWT',
       ],
       softwareHouse: 'Yoco Technologies',
      },
      {
       title: 'Full Stack MERN Developer – Cloud SaaS Tools',
       location: 'Dubai, UAE',
       postedDate: '2025-07-01',
       salary: '$420.00/Month',
       description:
        'Help us build cloud-based accounting and inventory apps using full MERN stack. This is a hybrid role involving backend logic and UI/UX responsiveness.',
       responsibilities: [
        'Create dashboard features using React.',
        'Write Node-based APIs with clean structure.',
        'Secure user data using JWT and session tokens.',
        'Design responsive UI with Tailwind.',
       ],
       requirements: [
        '2–3 years of full stack experience.',
        'Knowledge of secure REST APIs and CRUD systems.',
        'Strong teamwork and GitHub familiarity.',
        'Basic cloud deployment (Netlify/Vercel).',
       ],
       skills: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Tailwind',
        'Git',
       ],
       softwareHouse: 'Careem (Uber Subsidiary)',
      },
     ],
     'GLASSDOOR.com': [
      {
       title: 'MERN Stack Developer – Admin Panel Engineering',
       location: 'Helsinki, Finland',
       postedDate: '2025-07-02',
       salary: '$410.00/Month',
       description:
        'Develop and maintain internal admin panels and analytics dashboards using MERN technologies. Work closely with backend services and product leads.',
       responsibilities: [
        'Design frontend components in React + Redux.',
        'Build secure API routes in Node/Express.',
        'Integrate MongoDB queries and validation.',
        'Maintain pixel-perfect responsive UIs.',
       ],
       requirements: [
        '2+ years in full stack JS development.',
        'Strong understanding of REST and middleware.',
        'Experience in responsive CSS frameworks.',
        'Team-oriented and organized in Git workflows.',
       ],
       skills: [
        'React',
        'Redux',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind',
        'REST API',
       ],
       softwareHouse: 'Wolt',
      },
      {
       title: 'Full Stack JavaScript Developer – MERN + DevOps Exposure',
       location: 'Tokyo, Japan',
       postedDate: '2025-07-02',
       salary: '$438.00/Month',
       description:
        'We’re scaling a video streaming platform using MERN stack and DevOps pipelines. Looking for engineers who can collaborate cross-functionally and own features end-to-end.',
       responsibilities: [
        'Work with product on feature delivery.',
        'Manage cloud functions and deployment.',
        'Write scalable backend APIs in Express.',
        'Implement reusable UI logic with Tailwind.',
       ],
       requirements: [
        'At least 3 years of JavaScript/MERN experience.',
        'Exposure to CI/CD tools like GitHub Actions.',
        'Comfortable using Docker in dev environments.',
        'Familiarity with video/image optimization a plus.',
       ],
       skills: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'Tailwind',
        'CI/CD',
        'Docker',
       ],
       softwareHouse: 'Rakuten',
      },
      {
       title: 'MERN Stack Engineer – Healthcare Web Platforms',
       location: 'Lisbon, Portugal',
       postedDate: '2025-07-02',
       salary: '$425.00/Month',
       description:
        'Join our healthcare SaaS platform and improve patient dashboards and clinic admin tools using the MERN stack. Focused on speed, clarity, and compliance.',
       responsibilities: [
        'Build role-based dashboards with React and Redux.',
        'Secure backend APIs with Express & JWT.',
        'Write flexible MongoDB schemas.',
        'Follow accessibility and GDPR best practices.',
       ],
       requirements: [
        '2–3 years with MERN technologies.',
        'Understanding of healthcare data standards (a bonus).',
        'Detail-oriented with UI precision.',
        'Able to write clean, testable code.',
       ],
       skills: [
        'React',
        'Redux',
        'Node.js',
        'MongoDB',
        'Express.js',
        'JWT',
        'Tailwind',
       ],
       softwareHouse: 'Talkdesk',
      },
      {
       title: 'MERN Developer – E-Commerce UI & Cart Logic',
       location: 'Rome, Italy',
       postedDate: '2025-07-01',
       salary: '$417.00/Month',
       description:
        'Be part of a boutique e-commerce team building responsive storefronts and smart carts using MERN technologies and session-based storage logic.',
       responsibilities: [
        'Create responsive layouts with React.',
        'Implement cart and checkout with Express APIs.',
        'Design MongoDB models for inventory.',
        'Collaborate on improving site speed and UX.',
       ],
       requirements: [
        '2+ years in MERN projects.',
        'Familiar with SSR and hydration concepts.',
        'Good grasp of sessions, auth, and cookies.',
        'Pixel perfection and layout accuracy required.',
       ],
       skills: [
        'React',
        'Express.js',
        'Node.js',
        'MongoDB',
        'Tailwind',
        'Redux',
        'JWT',
       ],
       softwareHouse: 'Yoox Net-A-Porter',
      },
      {
       title: 'MERN Stack Developer – Fintech Product Line',
       location: 'Dublin, Ireland',
       postedDate: '2025-07-01',
       salary: '$440.00/Month',
       description:
        'Work with us to develop finance dashboards, ledger systems, and account APIs using MERN. Focus on speed, accuracy, and security throughout the full stack.',
       responsibilities: [
        'Implement account and transaction UIs with React.',
        'Create API routes and auth middleware.',
        'Integrate financial reporting modules.',
        'Deploy code using versioned Git workflows.',
       ],
       requirements: [
        '3 years MERN development in production apps.',
        'Excellent JS debugging and test writing.',
        'Secure handling of sensitive data.',
        'Experience working in sprint teams.',
       ],
       skills: [
        'React',
        'Node.js',
        'MongoDB',
        'Express.js',
        'JWT',
        'Redux',
        'Tailwind',
       ],
       softwareHouse: 'Stripe',
      },
     ],
     'INDEED.com': [
      {
       title: 'Senior MERN Developer – Internal Tools & Dashboards',
       location: 'Barcelona, Spain',
       postedDate: '2025-06-30',
       salary: '$433.00/Month',
       description:
        'Join our internal tools team to build UI dashboards for managing users, metrics, and platform controls across departments. Full stack logic in MERN.',
       responsibilities: [
        'Create component-driven dashboards in React.',
        'Write backend services using Node & Express.',
        'Integrate real-time charts with database metrics.',
        'Implement user access and permission layers.',
       ],
       requirements: [
        '2–3 years in full stack engineering.',
        'Good knowledge of backend logic with role-based access.',
        'Experience building internal admin tools.',
        'Able to deliver features independently.',
       ],
       skills: [
        'React',
        'MongoDB',
        'Node.js',
        'Express.js',
        'Tailwind',
        'JWT',
        'Redux',
       ],
       softwareHouse: 'Glovo',
      },
      {
       title: 'MERN Developer – Agile Agency Projects',
       location: 'Stockholm, Sweden',
       postedDate: '2025-06-30',
       salary: '$419.00/Month',
       description:
        'Contribute to multiple short and long-term client projects using the MERN stack. You’ll work on landing pages, internal tools, and API-first applications.',
       responsibilities: [
        'Handle cross-stack feature development.',
        'Use Tailwind to implement rapid prototypes.',
        'Build Express-based backend logic.',
        'Participate in agile sprint meetings and reviews.',
       ],
       requirements: [
        'Minimum 2 years of MERN experience.',
        'Fast learner and adaptable to new client specs.',
        'Comfortable with pair programming and Jira.',
        'Clean commit history and Git etiquette.',
       ],
       skills: [
        'MongoDB',
        'React',
        'Node.js',
        'Express.js',
        'Redux',
        'Tailwind',
        'Git',
       ],
       softwareHouse: 'Tink',
      },
      {
       title: 'Full Stack MERN Developer – Startup Environment',
       location: 'Bangkok, Thailand',
       postedDate: '2025-06-30',
       salary: '$415.00/Month',
       description:
        'A fast-growing travel startup is hiring MERN developers to lead the frontend and backend of their user booking platform. This role is hands-on and impactful.',
       responsibilities: [
        'Develop user portals in React and Tailwind.',
        'Build backend APIs and Mongo models.',
        'Integrate third-party APIs (Stripe, Booking.com).',
        'Manage state with Redux and contexts.',
       ],
       requirements: [
        '2+ years in startup or fast-paced teams.',
        'Experience working with travel or booking APIs.',
        'Can debug both frontend and backend issues.',
        'Basic knowledge of DevOps tools a plus.',
       ],
       skills: [
        'React',
        'Node.js',
        'MongoDB',
        'Redux',
        'Express.js',
        'Tailwind',
        'REST API',
       ],
       softwareHouse: 'Agoda',
      },
      {
       title: 'MERN Stack Engineer – LMS & Education Tools',
       location: 'Auckland, New Zealand',
       postedDate: '2025-06-29',
       salary: '$412.00/Month',
       description:
        'Work with our edtech platform to develop interactive lessons, user management modules, and reporting dashboards — all built on MERN stack.',
       responsibilities: [
        'Design components for quizzes, results, and users.',
        'Secure backend logic with authentication middleware.',
        'Create reporting and analytics dashboards.',
        'Ensure mobile-first responsive UIs.',
       ],
       requirements: [
        '2+ years of MERN stack experience.',
        'Previous edtech or LMS platform experience preferred.',
        'Strong CSS/HTML fundamentals with Tailwind.',
        'Experience with Mongoose and nested data.',
       ],
       skills: [
        'React',
        'Express.js',
        'MongoDB',
        'Node.js',
        'JWT',
        'Tailwind',
        'Mongoose',
       ],
       softwareHouse: 'Education Perfect',
      },
      {
       title: 'MERN Developer – Mobile Web & Responsive Systems',
       location: 'Buenos Aires, Argentina',
       postedDate: '2025-06-29',
       salary: '$414.00/Month',
       description:
        'Join a design-focused mobile web team building MERN stack apps optimized for 4G/5G experiences. You’ll focus on responsiveness and speed.',
       responsibilities: [
        'Develop responsive UIs using Tailwind.',
        'Build REST APIs and handle auth tokens.',
        'Optimize performance for mobile data usage.',
        'Maintain accessibility standards.',
       ],
       requirements: [
        '2–3 years of MERN experience.',
        'Strong interest in performance optimization.',
        'Can work closely with designers.',
        'Understanding of internationalization (i18n).',
       ],
       skills: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind',
        'JWT',
        'REST API',
       ],
       softwareHouse: 'Mercado Libre',
      },
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
       title: 'Next.js Developer – Full Stack Integration with BaaS',
       location: 'Islamabad, Pakistan',
       postedDate: '2025-07-02',
       salary: '₨155,000/Month',
       description:
        'Join our dynamic product team to build web applications using Next.js, integrated with BaaS platforms like Firebase and Supabase. Work across frontend and serverless APIs with scalable architecture.',
       responsibilities: [
        'Develop SSR and ISR-based applications in Next.js.',
        'Integrate backend services using Supabase and Firebase.',
        'Build responsive and reusable React components.',
        'Optimize performance for critical rendering and SEO.',
       ],
       requirements: [
        '3.5+ years of experience in React/Next.js stack.',
        'Strong understanding of server-side rendering.',
        'Experience with BaaS tools and GraphQL/REST APIs.',
        'Solid grasp on DOM, SEO, and accessibility.',
       ],
       skills: [
        'next.js',
        'react',
        'tailwind',
        'html',
        'css',
        'javascript',
        'dom',
        'google app script',
        'MVC',
        'OOP',
        'responsive websites',
        'prototype',
       ],
       softwareHouse: 'Systems Limited',
      },
      {
       title: 'Next.js Specialist – MERN + BaaS Developer',
       location: 'Karachi, Pakistan',
       postedDate: '2025-07-02',
       salary: '₨150,000/Month',
       description:
        'We’re looking for a Next.js expert with full stack experience in MERN and BaaS technologies. You’ll deliver powerful UIs and optimize backend interactions using serverless tools.',
       responsibilities: [
        'Develop high-performance UIs using React and Next.js.',
        'Connect APIs using Firebase and Strapi.',
        'Implement secure login/auth flows with JWT.',
        'Collaborate on full-stack features using MongoDB & Node.',
       ],
       requirements: [
        '3+ years in MERN and Next.js ecosystem.',
        'Hands-on with responsive design and modular CSS.',
        'Familiar with RESTful APIs and cloud-based services.',
        'Ability to build accessible, performant apps.',
       ],
       skills: [
        'react',
        'next.js',
        'tailwind',
        'javascript',
        'html',
        'css',
        'bootstrap',
        'data structures',
        'functions behind the scene',
        'OOP',
        'MVC',
       ],
       softwareHouse: '10Pearls',
      },
      {
       title: 'Senior Next.js Developer – Real-Time Apps & UI Optimization',
       location: 'Lahore, Pakistan',
       postedDate: '2025-07-02',
       salary: '₨152,000/Month',
       description:
        'We’re hiring a Next.js developer to work on real-time dashboards and highly interactive UIs. Your role will involve frontend performance, socket integration, and SSR strategies.',
       responsibilities: [
        'Build scalable UI using React + Tailwind.',
        'Integrate real-time features using socket.io.',
        'Apply SEO best practices in Next.js routing.',
        'Work on API integration and server-side logic.',
       ],
       requirements: [
        '3.5 years of full stack JS experience.',
        'Must be comfortable with socket programming.',
        'Experience with critical rendering path optimization.',
        'Solid knowledge of MVC structure and responsive layouts.',
       ],
       skills: [
        'tailwind',
        'next.js',
        'html',
        'react',
        'css',
        'javascript',
        'socket.io',
        'ajax',
        'critical rendering',
        'responsive websites',
        'OOP',
        'prototype',
       ],
       softwareHouse: 'Tkxel',
      },
      {
       title: 'Next.js & Firebase Developer – Serverless Application Stack',
       location: 'Rawalpindi, Pakistan',
       postedDate: '2025-07-01',
       salary: '₨153,000/Month',
       description:
        'Join our cloud-first team building serverless applications using Next.js, Firebase, and Tailwind CSS. A great opportunity to scale modern web apps across regions.',
       responsibilities: [
        'Develop apps with Next.js and Firestore as backend.',
        'Design UI layouts with Tailwind and MUI.',
        'Implement real-time updates and secure auth.',
        'Build scalable and reusable code architecture.',
       ],
       requirements: [
        '3+ years of experience with Next.js and Firebase.',
        'Familiar with modern JS patterns and React hooks.',
        'Good understanding of cloud functions and deployments.',
        'Ability to work across both frontend and backend logic.',
       ],
       skills: [
        'html',
        'css',
        'next.js',
        'react',
        'javascript',
        'tailwind',
        'MUI',
        'machine learning',
        'tensorflow.js',
        'functions behind the scene',
       ],
       softwareHouse: 'DevCrew',
      },
      {
       title: 'Full Stack Next.js Developer – Integrated BaaS Platform',
       location: 'Faisalabad, Pakistan',
       postedDate: '2025-07-01',
       salary: '₨150,000/Month',
       description:
        "We're building a full-stack analytics dashboard powered by Next.js and Supabase. If you're passionate about clean UI, server-rendered content, and real-time sync, this role is for you.",
       responsibilities: [
        'Implement frontend in React/Next.js with Tailwind.',
        'Integrate authentication and backend using Supabase.',
        'Optimize performance through code splitting and caching.',
        'Work with designers on seamless responsive design.',
       ],
       requirements: [
        '3–3.5 years of experience with modern JavaScript frameworks.',
        'In-depth experience with Next.js and server-side rendering.',
        'Skilled in responsive layout and design systems.',
        'Comfortable working with backendless platforms like Appwrite or Supabase.',
       ],
       skills: [
        'next.js',
        'react',
        'tailwind',
        'javascript',
        'html',
        'css',
        'dom',
        'OOP',
        'google app script',
        'responsive websites',
        'bootstraps',
       ],
       softwareHouse: 'InvoZone',
      },
     ],
     'CAREERJET.com': [
      {
       title: 'Next.js Specialist – Full Stack Web Interfaces',
       location: 'Chicago, IL',
       postedDate: '2025-07-01',
       salary: '$525.00/Month',
       description:
        'Join a cross-functional team developing advanced user interfaces for cloud platforms. Your role will focus on Next.js development along with scalable backend and API design.',
       responsibilities: [
        'Craft user flows in React and Next.js with clean routing.',
        'Develop backend endpoints in Node and Express.',
        'Ensure SEO, performance, and accessibility standards.',
        'Collaborate with UI/UX and backend engineers.',
       ],
       requirements: [
        '3+ years of experience in MERN and Next.js.',
        'Solid experience in component architecture and testing.',
        'Must be comfortable with async APIs and auth middleware.',
        'Portfolio of clean, mobile-first work is a bonus.',
       ],
       skills: [
        'react',
        'next.js',
        'html',
        'javascript',
        'tailwind',
        'css',
        'node.js',
        'express',
        'mongoDB',
        'ajax',
        'OOP',
        'tensorflow.js',
       ],
       softwareHouse: 'Basecamp',
      },
      {
       title: 'Next.js Developer – Firebase + MERN Integration',
       location: 'Miami, FL',
       postedDate: '2025-07-01',
       salary: '$530.00/Month',
       description:
        "Looking for a talented developer to join our Firebase-powered web application team. If you're an expert in Next.js with backend familiarity and love fast-paced development, let’s talk.",
       responsibilities: [
        'Build dynamic routes and views in Next.js.',
        'Use Firebase for auth, functions, and DB.',
        'Connect Node.js backend APIs as fallbacks.',
        'Design responsive layouts with Tailwind and MUI.',
       ],
       requirements: [
        '3–3.5 years of experience in React + Next.js.',
        'Experience with backendless or BaaS platforms.',
        'Understanding of DOM behavior and rendering lifecycle.',
        'Ability to create highly optimized interfaces.',
       ],
       skills: [
        'next.js',
        'firebase',
        'html',
        'css',
        'javascript',
        'react',
        'node.js',
        'mongoDB',
        'express',
        'MUI',
        'dom',
        'data structures',
       ],
       softwareHouse: 'Slack (Salesforce)',
      },
      {
       title: 'Senior Next.js + MERN Engineer – SaaS Product Team',
       location: 'New York, NY',
       postedDate: '2025-07-01',
       salary: '$545.00/Month',
       description:
        'We’re scaling our SaaS platform with cutting-edge Next.js, MongoDB, and serverless integrations. This role requires high-level frontend performance understanding and hands-on backend fluency.',
       responsibilities: [
        'Lead frontend builds in Next.js and React.',
        'Integrate APIs using Express and MongoDB.',
        'Work on custom authentication and user roles.',
        'Maintain pixel-perfect UIs and Tailwind themes.',
       ],
       requirements: [
        '3.5 years of experience in JavaScript stacks.',
        'Confident in full-stack app architecture.',
        'Understanding of BaaS and token-based auth.',
        'Strong communication and code review habits.',
       ],
       skills: [
        'javascript',
        'next.js',
        'tailwind',
        'css',
        'html',
        'react',
        'node.js',
        'mongoDB',
        'express',
        'google app script',
        'functions behind the scene',
        'prototype',
       ],
       softwareHouse: 'Squarespace',
      },
      {
       title: 'Next.js Full Stack Developer – API-First Platforms',
       location: 'San Francisco, CA',
       postedDate: '2025-07-02',
       salary: '$540.00/Month',
       description:
        'Join our development team building enterprise-grade applications using the MERN stack with a Next.js frontend. Focus on SSR performance, API integration, and elegant design systems.',
       responsibilities: [
        'Develop feature-rich interfaces in React and Next.js.',
        'Implement secure backend logic using Express.',
        'Optimize apps using critical rendering techniques.',
        'Deploy serverless routes via Vercel/Cloud Functions.',
       ],
       requirements: [
        '3+ years experience in React/Next.js ecosystem.',
        'Good understanding of MVC architecture and async data fetching.',
        'Comfortable with NoSQL and GraphQL APIs.',
        'Must write clean, scalable, and testable code.',
       ],
       skills: [
        'next.js',
        'react',
        'node.js',
        'html',
        'css',
        'javascript',
        'mongoDB',
        'express',
        'tailwind',
        'critical rendering',
        'MVC',
        'responsive websites',
       ],
       softwareHouse: 'Twilio',
      },
      {
       title: 'Next.js Engineer – Full Stack with Express & MongoDB',
       location: 'Austin, TX',
       postedDate: '2025-07-02',
       salary: '$550.00/Month',
       description:
        'Work with our US-based engineering team to build blazing-fast web apps using Next.js with backend support in Node and MongoDB. Join us in delivering dynamic SSR experiences and secure API layers.',
       responsibilities: [
        'Develop user-focused features in Next.js and React.',
        'Create RESTful services with Express and MongoDB.',
        'Implement Tailwind-based responsive designs.',
        'Maintain reusable, scalable component architecture.',
       ],
       requirements: [
        '3.5+ years in full-stack JavaScript environments.',
        'Deep understanding of SSR/ISR and frontend routing.',
        'Comfortable with authentication, caching, and real-time data.',
        'Collaborate effectively within agile teams.',
       ],
       skills: [
        'html',
        'next.js',
        'react',
        'tailwind',
        'css',
        'javascript',
        'node.js',
        'express',
        'mongoDB',
        'ajax',
        'OOP',
        'socket.io',
       ],
       softwareHouse: 'Zapier',
      },
     ],
     'SIMPLYHIRED.com': [
      {
       title: 'Next.js Specialist – Full Stack with BaaS Integration',
       location: 'Barcelona, Spain',
       postedDate: '2025-07-02',
       salary: '$550.00/Month',
       description:
        'Join our digital platform team as a Next.js specialist with backend exposure. Work on SSR, API integrations, and Firebase functions with a modern stack.',
       responsibilities: [
        'Build and deploy SSR apps using Next.js.',
        'Integrate with Firebase and RESTful APIs.',
        'Write clean Express.js backend endpoints.',
        'Contribute to scalable architecture discussions.',
       ],
       requirements: [
        '3.5+ years experience in JavaScript and MERN stacks.',
        'Solid grasp on SEO, routing, and SSR/ISR.',
        'Good command over responsive UI frameworks.',
        'Experience with Firebase or Supabase is a plus.',
       ],
       skills: [
        'next.js',
        'react',
        'tailwind',
        'javascript',
        'html',
        'css',
        'node.js',
        'express',
        'mongoDB',
        'ajax',
        'OOP',
        'responsive websites',
       ],
       softwareHouse: 'Typeform',
      },
      {
       title: 'Full Stack Next.js Developer – Serverless + SSR Apps',
       location: 'Dubai, UAE',
       postedDate: '2025-07-02',
       salary: '$540.00/Month',
       description:
        'We’re building high-traffic apps for fintech clients and need a senior Next.js developer to lead SSR integration and cloud function workflows.',
       responsibilities: [
        'Manage frontend modules using React and Tailwind.',
        'Build scalable backend APIs with Express.',
        'Connect MongoDB operations to client interfaces.',
        'Implement routing strategies using Next.js features.',
       ],
       requirements: [
        '3–3.5 years of experience with React + Next.js.',
        'Comfortable working with serverless tools.',
        'Strong problem-solving and optimization techniques.',
        'Proficiency with Git and deployment pipelines.',
       ],
       skills: [
        'javascript',
        'node.js',
        'express',
        'tailwind',
        'next.js',
        'react',
        'css',
        'html',
        'data structures',
        'MVC',
        'OOP',
        'functions behind the scene',
       ],
       softwareHouse: 'Fetchr',
      },
      {
       title: 'Next.js Frontend Engineer – Ecommerce Interface Build',
       location: 'Amsterdam, Netherlands',
       postedDate: '2025-07-02',
       salary: '$530.00/Month',
       description:
        'Looking for a skilled frontend engineer with mastery in React and Next.js to build fast, SEO-ready eCommerce frontends and integrations with backend APIs.',
       responsibilities: [
        'Develop responsive UIs using Tailwind and React.',
        'Use Next.js routing and API pages efficiently.',
        'Collaborate with backend team for API needs.',
        'Ensure accessibility and responsive compliance.',
       ],
       requirements: [
        '3+ years of frontend dev experience.',
        'Experience with REST, GraphQL, and third-party APIs.',
        'Ability to write reusable UI components.',
        'Strong eye for UX/UI detail.',
       ],
       skills: [
        'html',
        'next.js',
        'tailwind',
        'react',
        'css',
        'javascript',
        'node.js',
        'mongoDB',
        'express',
        'dom',
        'responsive websites',
       ],
       softwareHouse: 'Booking.com',
      },
      {
       title: 'Next.js + Express Developer – Cloud CMS Platforms',
       location: 'Cairo, Egypt',
       postedDate: '2025-07-02',
       salary: '$545.00/Month',
       description:
        "Help us integrate CMS platforms like Sanity with custom Next.js UIs. If you're great at frontend and backend logic, this role is for you.",
       responsibilities: [
        'Implement CMS-driven routes in Next.js.',
        'Write custom API handlers with Express.',
        'Integrate data via GROQ or REST queries.',
        'Deploy to Vercel and monitor build pipelines.',
       ],
       requirements: [
        'Minimum 3 years full stack experience.',
        'Familiarity with headless CMS systems.',
        'Solid frontend fundamentals and backend APIs.',
        'Understanding of ISR and content caching.',
       ],
       skills: [
        'next.js',
        'react',
        'node.js',
        'mongoDB',
        'express',
        'javascript',
        'html',
        'css',
        'dom',
        'tailwind',
        'OOP',
        'MUI',
       ],
       softwareHouse: 'Instabug',
      },
      {
       title: 'Senior Next.js + MERN Developer – Real-Time Dashboards',
       location: 'Singapore',
       postedDate: '2025-07-02',
       salary: '$525.00/Month',
       description:
        "We're seeking a full stack Next.js developer experienced in building dashboard interfaces, socket connections, and data streaming with MongoDB.",
       responsibilities: [
        'Build feature-rich dashboards in React + Next.js.',
        'Manage state with Redux or Context.',
        'Work with real-time sockets for live updates.',
        'Collaborate on backend Express API design.',
       ],
       requirements: [
        '3–3.5 years in modern full stack stacks.',
        'Experience in WebSocket-based apps.',
        'Hands-on with Next.js data fetching (SSR, ISR).',
        'Strong understanding of SPA and PWA.',
       ],
       skills: [
        'socket.io',
        'node.js',
        'express',
        'mongoDB',
        'html',
        'tailwind',
        'react',
        'next.js',
        'javascript',
        'css',
        'prototype',
        'google app script',
       ],
       softwareHouse: 'Shopee',
      },
     ],
     'GLASSDOOR.com': [
      {
       title: 'Full Stack Developer – Next.js & Cloud API Ecosystem',
       location: 'Toronto, Canada',
       postedDate: '2025-07-02',
       salary: '$540.00/Month',
       description:
        'Looking for a developer with mastery in Next.js and REST APIs to build server-rendered apps integrated with modern BaaS solutions.',
       responsibilities: [
        'Design SSR apps with custom hooks and pages.',
        'Manage cloud database connections via MongoDB.',
        'Use Node.js and Express for backend workflows.',
        'Collaborate with design team for pixel-perfect UIs.',
       ],
       requirements: [
        '3–3.5 years of experience in full stack JS.',
        'Strong frontend skills with Tailwind and MUI.',
        'Experience in building and consuming APIs.',
        'Good problem-solving and documentation practices.',
       ],
       skills: [
        'javascript',
        'next.js',
        'tailwind',
        'react',
        'node.js',
        'express',
        'mongoDB',
        'html',
        'css',
        'data structures',
        'functions behind the scene',
       ],
       softwareHouse: 'Shopify',
      },
      {
       title: 'Senior Next.js Developer – Advanced Web Interfaces',
       location: 'Berlin, Germany',
       postedDate: '2025-07-02',
       salary: '$525.00/Month',
       description:
        'Join our innovative product team to develop interactive web platforms using Next.js, Express, and MongoDB. Collaborate on UI/UX, data fetching, and performance optimizations.',
       responsibilities: [
        'Build responsive UIs with React, Tailwind, and Next.js.',
        'Work on dynamic API routes and integrations.',
        'Optimize code for SSR/CSR transitions.',
        'Collaborate with QA and backend teams.',
       ],
       requirements: [
        '3.5+ years of experience in full stack JS.',
        'Strong knowledge of REST and API patterns.',
        'Deep understanding of React lifecycles and SSR.',
        'Strong communication and debugging skills.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'react',
        'next.js',
        'tailwind',
        'node.js',
        'express',
        'mongoDB',
        'OOP',
        'ajax',
        'prototype',
       ],
       softwareHouse: 'SoundCloud',
      },
      {
       title: 'Senior Developer – Next.js + Firebase Realtime Apps',
       location: 'Melbourne, Australia',
       postedDate: '2025-07-02',
       salary: '$545.00/Month',
       description:
        "Join our collaborative team to build real-time apps using Next.js and Firebase. You'll lead frontend state management and backend cloud functions.",
       responsibilities: [
        'Implement real-time UI updates with Firebase.',
        'Write and deploy secure backend functions.',
        'Develop rich frontend flows using React + Tailwind.',
        'Support Next.js deployments and SEO strategies.',
       ],
       requirements: [
        '3–3.5 years of experience in full stack development.',
        'Firebase Auth, Firestore, and Functions proficiency.',
        'Strong control over component rendering logic.',
        'Excellent communication and Git practices.',
       ],
       skills: [
        'firebase',
        'next.js',
        'react',
        'javascript',
        'tailwind',
        'html',
        'css',
        'node.js',
        'express',
        'dom',
        'OOP',
        'socket.io',
       ],
       softwareHouse: 'Envato',
      },
      {
       title: 'Lead Next.js Engineer – AI-Driven Applications',
       location: 'Tokyo, Japan',
       postedDate: '2025-07-02',
       salary: '$530.00/Month',
       description:
        'We are developing AI-first user interfaces using Tensorflow.js, Next.js, and Express. Ideal role for someone passionate about blending ML and web UI.',
       responsibilities: [
        'Develop AI-focused frontend apps in Next.js.',
        'Integrate ML models into the frontend logic.',
        'Build API endpoints to serve ML responses.',
        'Optimize rendering performance for predictions.',
       ],
       requirements: [
        '3+ years of frontend development experience.',
        'Knowledge of machine learning and Tensorflow.js.',
        'Strong JavaScript/React foundation.',
        'Experience with SSR performance tuning.',
       ],
       skills: [
        'tensorflow.js',
        'next.js',
        'html',
        'css',
        'javascript',
        'tailwind',
        'node.js',
        'express',
        'react',
        'google app script',
        'data structures',
       ],
       softwareHouse: 'LINE Corporation',
      },
      {
       title: 'Next.js + MERN Specialist – Microservices Architecture',
       location: 'Nairobi, Kenya',
       postedDate: '2025-07-02',
       salary: '$550.00/Month',
       description:
        'Join a fast-growing fintech company building microservices with Next.js as the frontend layer and Node/Express in the backend.',
       responsibilities: [
        'Lead Next.js frontend architecture with modular pages.',
        'Design secure API endpoints with Express.',
        'Integrate MongoDB aggregations with real-time rendering.',
        'Participate in sprint planning and reviews.',
       ],
       requirements: [
        '3.5+ years in full stack product development.',
        'Hands-on experience with scalable microservices.',
        'Strong command of TypeScript and modular JS.',
        'Ability to collaborate across distributed teams.',
       ],
       skills: [
        'html',
        'css',
        'react',
        'next.js',
        'node.js',
        'mongoDB',
        'express',
        'tailwind',
        'MUI',
        'responsive websites',
        'OOP',
       ],
       softwareHouse: 'Twiga Tech',
      },
     ],
     'INDEED.com': [
      {
       title: 'Next.js Stack Engineer – SaaS and UI Performance',
       location: 'Oslo, Norway',
       postedDate: '2025-07-02',
       salary: '$525.00/Month',
       description:
        'Work in a SaaS product team to build high-performance UI using React/Next.js stack. Collaborate on backend Express logic and PWA development.',
       responsibilities: [
        'Develop SSR web apps with dynamic content.',
        'Manage backend connections using MongoDB.',
        'Improve code performance and UI responsiveness.',
        'Implement SEO-friendly Next.js routes.',
       ],
       requirements: [
        '3.5+ years in React/Node development.',
        'Strong in client-server communication and performance.',
        'Good UI/UX sense and accessibility knowledge.',
        'Experience with database optimization preferred.',
       ],
       skills: [
        'javascript',
        'node.js',
        'next.js',
        'react',
        'tailwind',
        'html',
        'css',
        'express',
        'mongoDB',
        'MVC',
        'functions behind the scene',
       ],
       softwareHouse: 'Telenor Digital',
      },
      {
       title: 'Full Stack Engineer – Next.js + Socket.io Integration',
       location: 'Seoul, South Korea',
       postedDate: '2025-07-02',
       salary: '$535.00/Month',
       description:
        'Develop real-time multiplayer applications using the MERN stack. Use Next.js and Socket.io to sync frontend with backend game logic.',
       responsibilities: [
        'Build responsive game UIs using React + Tailwind.',
        'Integrate Socket.io events for real-time updates.',
        'Handle API logic using Node/Express.',
        'Collaborate with backend for DB sync.',
       ],
       requirements: [
        '3+ years in real-time app development.',
        'Experience with multiplayer architecture.',
        'Strong frontend and backend debugging.',
        'Version control and Git flow experience.',
       ],
       skills: [
        'socket.io',
        'next.js',
        'react',
        'javascript',
        'html',
        'css',
        'node.js',
        'mongoDB',
        'express',
        'dom',
        'bootstraps',
       ],
       softwareHouse: 'NCSoft',
      },
      {
       title: 'Next.js + Strapi Developer – Full Stack CMS Experience',
       location: 'Lisbon, Portugal',
       postedDate: '2025-07-02',
       salary: '$540.00/Month',
       description:
        'We’re hiring a full stack dev to build CMS-integrated platforms using Next.js and Strapi. Focus on user dashboards, backend APIs, and clean UX.',
       responsibilities: [
        'Use Next.js with Tailwind for frontend UI.',
        'Integrate Strapi and custom backend endpoints.',
        'Deploy to Vercel with serverless functions.',
        'Ensure accessibility and design system consistency.',
       ],
       requirements: [
        '3–3.5 years of experience in React/Next.js.',
        'Good understanding of CMS data models.',
        'Solid backend skills in Node/Express.',
        'Experience with PWA and SSR apps.',
       ],
       skills: [
        'next.js',
        'react',
        'tailwind',
        'html',
        'css',
        'node.js',
        'express',
        'javascript',
        'google app script',
        'ajax',
        'OOP',
       ],
       softwareHouse: 'Unbabel',
      },
      {
       title: 'Next.js + Express Full Stack Developer',
       location: 'Warsaw, Poland',
       postedDate: '2025-07-02',
       salary: '$525.00/Month',
       description:
        'Build fast and scalable tools for enterprise teams using modern full stack technologies. Focus on clean UI and backend logic in Express.',
       responsibilities: [
        'Code frontend with Next.js and Tailwind.',
        'Write backend APIs in Node/Express.',
        'Optimize SEO and Lighthouse performance.',
        'Contribute to CI/CD deployments.',
       ],
       requirements: [
        '3.5 years of experience in full stack dev.',
        'Solid knowledge of JavaScript ES6+.',
        'Strong attention to code readability.',
        'Good grip on frontend testing and responsiveness.',
       ],
       skills: [
        'html',
        'css',
        'tailwind',
        'javascript',
        'next.js',
        'react',
        'node.js',
        'express',
        'mongoDB',
        'OOP',
        'ajax',
        'critical rendering',
       ],
       softwareHouse: 'Allegro',
      },
      {
       title: 'Next.js UI Engineer – Performance Optimization Focus',
       location: 'Zurich, Switzerland',
       postedDate: '2025-07-02',
       salary: '$550.00/Month',
       description:
        'Join a fintech company building highly optimized interfaces with Next.js, React, and dynamic routing. Prioritize performance, SEO, and user journeys.',
       responsibilities: [
        'Lead frontend performance initiatives.',
        'Optimize rendering for mobile and web.',
        'Work on GraphQL + REST API integration.',
        'Push UI/UX boundaries through Tailwind and MUI.',
       ],
       requirements: [
        '3–3.5 years frontend experience.',
        'Mastery of responsive CSS and SEO practices.',
        'Experience in financial dashboards a plus.',
        'Strong Next.js lifecycle understanding.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'tailwind',
        'react',
        'next.js',
        'node.js',
        'express',
        'mongoDB',
        'MUI',
        'responsive websites',
        'data structures',
       ],
       softwareHouse: 'Credit Suisse',
      },
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
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
       title: 'React Native Developer – Full Stack Mobile Engineer',
       location: 'Lahore, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 185,000/Month',
       description:
        'Join our mobile app division as a React Native developer. Build and deploy full stack mobile applications using modern backend and cloud-native services.',
       responsibilities: [
        'Develop cross-platform mobile apps using React Native.',
        'Integrate REST APIs built with Node.js and Express.',
        'Implement scalable state and navigation systems.',
        'Ensure responsive, accessible mobile UIs.',
       ],
       requirements: [
        '3+ years in mobile app development with React Native.',
        'Understanding of backend integration and storage.',
        'Hands-on with responsive layout frameworks.',
        'Strong debugging and performance tuning skills.',
       ],
       skills: [
        'react native',
        'mobile apps',
        'javascript',
        'node.js',
        'html',
        'tailwind',
        'css',
        'express',
        'OOP',
        'functions behind the scene',
        'ajax',
        'MUI',
        'responsive websites',
        'protoype',
       ],
       softwareHouse: 'Systems Limited',
      },
      {
       title: 'Senior React Native Engineer – Cross-Platform Mobile',
       location: 'Islamabad, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 179,000/Month',
       description:
        "We're hiring a senior React Native engineer to lead cross-platform mobile development for business automation apps. Experience with REST APIs and design systems is required.",
       responsibilities: [
        'Lead development of mobile apps in React Native.',
        'Work closely with backend teams on Express-based APIs.',
        'Implement consistent UI using MUI and Tailwind.',
        'Optimize performance and handle device-level integrations.',
       ],
       requirements: [
        '4+ years of relevant experience in React Native.',
        'Strong skills in JavaScript, CSS, and responsive layout.',
        'Solid command on cross-platform deployment.',
        'Experience with Google Maps, Notifications, and Sockets.',
       ],
       skills: [
        'html',
        'css',
        'react native',
        'mobile apps',
        'javascript',
        'node.js',
        'tailwind',
        'MUI',
        'data structures',
        'express',
        'socket.io',
        'dom',
        'ajax',
        'google app script',
       ],
       softwareHouse: '10Pearls',
      },
      {
       title: 'React Native Specialist – Backend Integrated Mobile Apps',
       location: 'Karachi, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 178,000/Month',
       description:
        'Build scalable and offline-first mobile apps in React Native. This role is perfect for developers who enjoy building full-featured apps with integrated backend logic.',
       responsibilities: [
        'Create reusable components and modules for mobile apps.',
        'Integrate real-time data and APIs into app interfaces.',
        'Ensure smooth performance on Android and iOS.',
        'Participate in agile development and testing cycles.',
       ],
       requirements: [
        '3.5+ years of React Native experience.',
        'Deep understanding of the mobile development lifecycle.',
        'Familiarity with NoSQL/MongoDB and Express APIs.',
        'Experience with offline storage and app updates.',
       ],
       skills: [
        'mobile apps',
        'javascript',
        'html',
        'css',
        'react native',
        'node.js',
        'tailwind',
        'ajax',
        'MVC',
        'responsive websites',
        'machine learning',
        'bootstraps',
        'OOP',
       ],
       softwareHouse: 'Techlogix',
      },
      {
       title: 'Full Stack React Native Developer – Node & Express Integration',
       location: 'Faisalabad, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 182,000/Month',
       description:
        "Looking for a full stack React Native developer to lead mobile-first solutions powered by robust Express-based backends. You'll be working across the stack with a UX-first mindset.",
       responsibilities: [
        'Develop frontend and backend logic for mobile apps.',
        'Implement Tailwind-based UI for mobile.',
        'Design and test REST APIs in Express.',
        'Build scalable mobile apps using React Native.',
       ],
       requirements: [
        '4+ years full stack experience with React Native.',
        'Proficiency in frontend + backend coordination.',
        'Experience with Git, Agile, and cloud deployment.',
        'Strong sense of mobile UX/UI patterns.',
       ],
       skills: [
        'html',
        'css',
        'tailwind',
        'javascript',
        'react native',
        'mobile apps',
        'node.js',
        'express',
        'critical rendering',
        'functions behind the scene',
        'OOP',
        'google app script',
       ],
       softwareHouse: 'VentureDive',
      },
      {
       title: 'React Native App Developer – Secure Fintech Mobile Solutions',
       location: 'Peshawar, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 189,000/Month',
       description:
        'Join a fast-growing fintech company and help us build secure, efficient, and user-friendly mobile applications using React Native. Strong backend and mobile logic required.',
       responsibilities: [
        'Create mobile interfaces for finance-based workflows.',
        'Develop offline-first and secure login features.',
        'Write and connect Express/MongoDB endpoints.',
        'Handle push notifications and deep linking.',
       ],
       requirements: [
        '3+ years of production-grade React Native development.',
        'Ability to work on complex flows and integrations.',
        'Strong database and API handling skills.',
        'Solid performance profiling and testing experience.',
       ],
       skills: [
        'react native',
        'mobile apps',
        'javascript',
        'html',
        'tailwind',
        'css',
        'node.js',
        'express',
        'protoype',
        'responsive websites',
        'tensorflow.js',
        'ajax',
        'bootstraps',
        'OOP',
       ],
       softwareHouse: 'CureMD',
      },
     ],
     'CAREERJET.com': [
      {
       title:
        'Senior React Native Developer – Backend-Integrated Mobile Platforms',
       location: 'Seattle, WA, USA',
       postedDate: '2025-07-02',
       salary: '$620.00/Month',
       description:
        'We’re building a next-gen mobile solution in the education space. Looking for a React Native specialist with backend Node.js skills to own mobile architecture.',
       responsibilities: [
        'Build mobile applications from concept to deployment.',
        'Manage app state, storage, and offline syncing.',
        'Integrate MongoDB and Express APIs with frontend.',
        'Test across devices and platforms for performance.',
       ],
       requirements: [
        '4+ years of React Native and Node.js experience.',
        'Strong command of cross-platform navigation libraries.',
        'Hands-on experience with Express and MongoDB.',
        'Experience with Redux or Context preferred.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'react native',
        'node.js',
        'mobile apps',
        'tailwind',
        'express',
        'data structures',
        'bootstraps',
        'ajax',
        'MUI',
        'OOP',
       ],
       softwareHouse: 'Duolingo',
      },
      {
       title: 'React Native Engineer – Cross-Platform Mobile App Specialist',
       location: 'Austin, TX, USA',
       postedDate: '2025-07-02',
       salary: '$635.00/Month',
       description:
        'Join our mobile development team and lead cross-platform solutions using React Native. Help us build high-performance apps with integrated APIs and cloud functions.',
       responsibilities: [
        'Develop hybrid mobile applications using React Native.',
        'Write reusable UI components with Tailwind.',
        'Integrate APIs using Node.js and Express.',
        'Collaborate with designers for smooth UX flows.',
       ],
       requirements: [
        '3+ years of mobile development experience.',
        'Strong understanding of app lifecycle and data storage.',
        'Experience with backend API handling.',
        'Familiarity with cross-platform performance issues.',
       ],
       skills: [
        'react native',
        'mobile apps',
        'tailwind',
        'javascript',
        'html',
        'css',
        'node.js',
        'express',
        'socket.io',
        'functions behind the scene',
        'OOP',
        'responsive websites',
       ],
       softwareHouse: 'BigCommerce',
      },
      {
       title: 'React Native Developer – Scalable Mobile Solutions',
       location: 'Boston, MA, USA',
       postedDate: '2025-07-02',
       salary: '$630.00/Month',
       description:
        'We are expanding our mobile product line and need a dedicated React Native developer to help architect and scale our existing apps. Backend integration experience is critical.',
       responsibilities: [
        'Develop mobile interfaces using React Native and Tailwind.',
        'Integrate Express APIs and MongoDB operations.',
        'Contribute to CI/CD pipelines and release cycles.',
        'Work with QA to test across devices.',
       ],
       requirements: [
        '3+ years of mobile development experience.',
        'Experience working with cloud functions or Firebase is a bonus.',
        'Must have deployed production-grade apps.',
        'Strong familiarity with testing tools and Git workflows.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'express',
        'critical rendering',
        'responsive websites',
        'socket.io',
        'OOP',
        'google app script',
       ],
       softwareHouse: 'HubSpot',
      },
      {
       title:
        'React Native Architect – Performance-Oriented Mobile Development',
       location: 'Chicago, IL, USA',
       postedDate: '2025-07-02',
       salary: '$615.00/Month',
       description:
        'Looking for a React Native engineer to lead development on scalable mobile apps with clean code and rapid UI rendering. Backend knowledge of Express is essential.',
       responsibilities: [
        'Own mobile app development pipeline.',
        'Lead frontend development using React Native.',
        'Connect backend with APIs via Node.js.',
        'Optimize rendering and ensure high FPS performance.',
       ],
       requirements: [
        '4+ years in cross-platform mobile development.',
        'Deep understanding of performance bottlenecks.',
        'Hands-on with animations and device APIs.',
        'Experience with security and data encryption is a plus.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'ajax',
        'machine learning',
        'functions behind the scene',
        'OOP',
        'bootstraps',
        'tensorflow.js',
       ],
       softwareHouse: 'Groupon',
      },
      {
       title: 'Full Stack Mobile App Developer – React Native + Node.js',
       location: 'San Diego, CA, USA',
       postedDate: '2025-07-02',
       salary: '$600.00/Month',
       description:
        'Work with our product team to build and maintain mobile-first applications using React Native and a robust Node.js backend. Experience with MongoDB is a big plus.',
       responsibilities: [
        'Develop and maintain scalable React Native apps.',
        'Design backend APIs with Node.js and Express.',
        'Implement mobile UI using Tailwind and MUI.',
        'Ensure mobile app testing and deployment.',
       ],
       requirements: [
        '3.5+ years of experience with React Native and Express.',
        'Ability to handle full app lifecycle.',
        'Familiar with REST API structures.',
        'Working knowledge of mobile-first UX design.',
       ],
       skills: [
        'mobile apps',
        'react native',
        'tailwind',
        'javascript',
        'css',
        'html',
        'node.js',
        'mongoDB',
        'dom',
        'MVC',
        'google app script',
        'prototype',
        'responsive websites',
       ],
       softwareHouse: 'Intuit',
      },
     ],
     'SIMPLYHIRED.com': [
      {
       title: 'React Native Specialist – Full Stack Mobile Systems',
       location: 'Singapore',
       postedDate: '2025-07-02',
       salary: '$620.00/Month',
       description:
        'Looking for an experienced React Native developer to build hybrid mobile apps with real-time backend connectivity and high performance rendering.',
       responsibilities: [
        'Architect full stack mobile apps from UI to backend.',
        'Use Express.js and MongoDB for scalable APIs.',
        'Design responsive UIs with Tailwind and MUI.',
        'Ensure data sync and performance on mobile devices.',
       ],
       requirements: [
        '4+ years in full stack mobile development.',
        'Strong understanding of mobile-first logic.',
        'Ability to write modular, testable code.',
        'Experience with cross-platform challenges.',
       ],
       skills: [
        'react native',
        'mobile apps',
        'tailwind',
        'javascript',
        'html',
        'css',
        'node.js',
        'express',
        'socket.io',
        'google app script',
        'data structures',
        'bootstraps',
       ],
       softwareHouse: 'Grab Holdings',
      },
      {
       title: 'React Native Developer – Global Mobile Platforms',
       location: 'Barcelona, Spain',
       postedDate: '2025-07-02',
       salary: '$610.00/Month',
       description:
        'Help us redefine mobile experiences across continents with powerful apps built in React Native. You’ll lead scalable UI logic and backend API integration.',
       responsibilities: [
        'Develop high-quality mobile interfaces using React Native.',
        'Integrate Express APIs with frontend mobile layers.',
        'Optimize mobile performance and responsiveness.',
        'Deploy to Android and iOS platforms with CI/CD tools.',
       ],
       requirements: [
        '3+ years experience with React Native and Node.js.',
        'Strong mobile architecture and design knowledge.',
        'Familiarity with backend data workflows.',
        'Passionate about UI performance and accessibility.',
       ],
       skills: [
        'react native',
        'mobile apps',
        'html',
        'css',
        'tailwind',
        'node.js',
        'javascript',
        'ajax',
        'MUI',
        'express',
        'OOP',
        'responsive websites',
       ],
       softwareHouse: 'Glovo',
      },
      {
       title: 'Full Stack React Native Developer – Realtime Apps',
       location: 'Dubai, UAE',
       postedDate: '2025-07-02',
       salary: '$600.00/Month',
       description:
        'Build real-time financial apps using React Native and scalable Express backends. Strong database and state management experience preferred.',
       responsibilities: [
        'Develop interactive mobile dashboards.',
        'Work on MongoDB queries and API endpoints.',
        'Integrate socket streams for real-time data.',
        'Ensure responsiveness and test automation.',
       ],
       requirements: [
        '4 years React Native experience with Node/Express.',
        'Ability to write clean and modular code.',
        'Understand serverless and state management.',
        'Collaborate in cross-functional teams.',
       ],
       skills: [
        'javascript',
        'tailwind',
        'html',
        'css',
        'react native',
        'mobile apps',
        'node.js',
        'express',
        'mongoDB',
        'OOP',
        'socket.io',
        'dom',
       ],
       softwareHouse: 'Careem',
      },
      {
       title: 'Senior React Native Engineer – Cloud Connected Apps',
       location: 'Dublin, Ireland',
       postedDate: '2025-07-02',
       salary: '$630.00/Month',
       description:
        'Join our digital health platform to build secure, cloud-enabled mobile apps using React Native. Ensure HIPAA-compliant, real-time experiences.',
       responsibilities: [
        'Build mobile health dashboards in React Native.',
        'Work with backend APIs and socket-based communication.',
        'Optimize app lifecycle performance.',
        'Ensure compliance with data handling regulations.',
       ],
       requirements: [
        '3.5+ years mobile development experience.',
        'Strong Express and cloud database understanding.',
        'Familiarity with secure user sessions.',
        'Experience working in agile environments.',
       ],
       skills: [
        'react native',
        'mobile apps',
        'tailwind',
        'javascript',
        'node.js',
        'css',
        'html',
        'OOP',
        'critical rendering',
        'ajax',
        'MVC',
        'responsive websites',
       ],
       softwareHouse: 'LetsGetChecked',
      },
      {
       title: 'React Native App Developer – AI-Enabled Interfaces',
       location: 'Amsterdam, Netherlands',
       postedDate: '2025-07-02',
       salary: '$635.00/Month',
       description:
        'We are developing mobile interfaces powered by machine learning. React Native experience paired with Tensorflow.js is a huge plus.',
       responsibilities: [
        'Build UI with React Native and Tailwind.',
        'Integrate ML models with Tensorflow.js.',
        'Optimize frontend rendering and animations.',
        'Deploy to production with backend integrations.',
       ],
       requirements: [
        '3+ years in mobile/AI-based app development.',
        'Strong JavaScript fundamentals.',
        'Hands-on with animations and UI transitions.',
        'Understanding of REST API and state handling.',
       ],
       skills: [
        'react native',
        'mobile apps',
        'tailwind',
        'javascript',
        'html',
        'css',
        'tensorflow.js',
        'machine learning',
        'ajax',
        'functions behind the scene',
        'prototype',
        'node.js',
       ],
       softwareHouse: 'Booking.com',
      },
     ],
     'GLASSDOOR.com': [
      {
       title: 'React Native Mobile Engineer – Full Stack App Development',
       location: 'Cape Town, South Africa',
       postedDate: '2025-07-02',
       salary: '$635.00/Month',
       description:
        'Build robust and scalable mobile applications using React Native. Collaborate with backend teams to deliver end-to-end user experiences in emerging markets.',
       responsibilities: [
        'Develop cross-platform mobile apps with clean UI/UX.',
        'Integrate APIs and manage local data storage.',
        'Work closely with backend team on Express & MongoDB.',
        'Handle device-level features and deployments.',
       ],
       requirements: [
        '4+ years of hands-on experience in React Native.',
        'Comfort with Node.js/Express and mobile debugging.',
        'Experience working in agile and remote teams.',
        'Strong grasp on responsive and performant UI design.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'express',
        'OOP',
        'MUI',
        'ajax',
        'responsive websites',
       ],
      },
      {
       title: 'React Native Developer – AI & Mobility Projects',
       location: 'Amsterdam, Netherlands',
       postedDate: '2025-07-02',
       salary: '$615.00/Month',
       description:
        'Join a smart mobility startup using AI-powered logic within React Native apps. Work with Tensorflow.js, RESTful APIs, and clean component architecture.',
       responsibilities: [
        'Build advanced mobile features with React Native.',
        'Embed machine learning models using JS libraries.',
        'Design smooth user experiences with Tailwind CSS.',
        'Collaborate with frontend/backend teams globally.',
       ],
       requirements: [
        '3+ years of mobile app dev experience.',
        'Familiar with ML integration and JS performance.',
        'Experience with push notifications and device APIs.',
        'Knowledge of version control and testing libraries.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'tensorflow.js',
        'functions behind the scene',
        'bootstraps',
        'prototype',
        'google app script',
       ],
      },
      {
       title: 'React Native App Developer – SaaS & Real-Time Integrations',
       location: 'Helsinki, Finland',
       postedDate: '2025-07-02',
       salary: '$600.00/Month',
       description:
        'Join our SaaS team to build mobile apps integrated with real-time data streams. Use React Native, sockets, and clean backend integrations.',
       responsibilities: [
        'Develop mobile UIs with live data syncing.',
        'Build Express-based API bridges.',
        'Ensure scalability across Android and iOS.',
        'Participate in full development cycle from design to deployment.',
       ],
       requirements: [
        '3.5+ years of experience in React Native.',
        'Understanding of real-time events and sockets.',
        'Strong problem-solving and team collaboration.',
        'Past experience in SaaS or analytics projects.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'socket.io',
        'data structures',
        'dom',
        'MVC',
        'OOP',
       ],
      },
      {
       title: 'Lead React Native Developer – Global E-Commerce Mobile Apps',
       location: 'Dubai, UAE',
       postedDate: '2025-07-02',
       salary: '$630.00/Month',
       description:
        'Drive development of mobile applications for global e-commerce platforms. Lead the mobile strategy and ensure smooth backend connectivity and UI design.',
       responsibilities: [
        'Lead React Native app structure and architecture.',
        'Ensure responsive UIs for international users.',
        'Build API logic with Express + MongoDB.',
        'Guide junior mobile developers across modules.',
       ],
       requirements: [
        '4+ years of mobile and full stack experience.',
        'Strong React Native & Node.js integration skills.',
        'Familiar with cart, checkout, and payment flows.',
        'Clear documentation and Git workflows are must.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'express',
        'mongoDB',
        'critical rendering',
        'OOP',
        'ajax',
       ],
      },
      {
       title: 'React Native Engineer – HealthTech Cross-Platform Solutions',
       location: 'Copenhagen, Denmark',
       postedDate: '2025-07-02',
       salary: '$620.00/Month',
       description:
        "Help revolutionize mobile health apps with React Native. You'll work on scalable UI, secure API integration, and user-first features.",
       responsibilities: [
        'Build HIPAA-compliant mobile interfaces.',
        'Integrate encrypted endpoints using Express.',
        'Manage local data securely with async storage.',
        'Deliver pixel-perfect UI across screen sizes.',
       ],
       requirements: [
        '3+ years in healthcare or secure mobile apps.',
        'React Native experience with real-world launches.',
        'Understanding of secure data flows.',
        'Attention to UI, accessibility, and navigation.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'ajax',
        'responsive websites',
        'functions behind the scene',
        'MUI',
        'OOP',
        'google app script',
       ],
      },
     ],
     'INDEED.com': [
      {
       title: 'React Native App Engineer – TravelTech Platform',
       location: 'Kuala Lumpur, Malaysia',
       postedDate: '2025-07-02',
       salary: '$620.00/Month',
       description:
        "Join our TravelTech platform and deliver high-end mobile solutions using React Native. You'll work on booking interfaces, location services, and offline maps.",
       responsibilities: [
        'Build mobile interfaces for trip planning.',
        'Handle offline map storage and local caching.',
        'Work with Express/MongoDB for booking APIs.',
        'Ensure fast load time and smooth animations.',
       ],
       requirements: [
        '3+ years of React Native development.',
        'Experience with geolocation and map libraries.',
        'Strong backend API understanding.',
        'Familiar with CI/CD pipelines and Git.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'mongoDB',
        'ajax',
        'bootstraps',
        'MVC',
        'socket.io',
       ],
      },
      {
       title: 'Lead React Native Developer – Remote Health Monitoring Apps',
       location: 'Stockholm, Sweden',
       postedDate: '2025-07-02',
       salary: '$630.00/Month',
       description:
        "Lead the development of mobile apps focused on remote health tracking. You'll integrate sensor data, design interactive dashboards, and secure patient data flows.",
       responsibilities: [
        'Build healthcare-focused mobile solutions.',
        'Integrate with APIs and IoT health sensors.',
        'Implement biometric login and encryption.',
        'Design mobile dashboards with graphs and charts.',
       ],
       requirements: [
        '4+ years of mobile and security-focused experience.',
        'React Native proficiency in production apps.',
        'Solid UI and database knowledge.',
        'Comfortable with HIPAA/GDPR compliant flows.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'OOP',
        'MUI',
        'functions behind the scene',
        'google app script',
        'ajax',
       ],
      },
      {
       title: 'React Native Full Stack Mobile Developer',
       location: 'Wellington, New Zealand',
       postedDate: '2025-07-02',
       salary: '$615.00/Month',
       description:
        'Be part of a fast-paced fintech startup building a high-performance mobile app using React Native and Express. Help scale our architecture and performance.',
       responsibilities: [
        'Build and optimize mobile app components.',
        'Design RESTful services in Express.',
        'Collaborate on CI/CD and testing pipelines.',
        'Implement mobile-first secure experiences.',
       ],
       requirements: [
        '3.5+ years of React Native and Node.js experience.',
        'Strong UI skills and backend API knowledge.',
        'Solid grasp on data flow and authentication.',
        'Experience with mobile testing frameworks.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'express',
        'dom',
        'data structures',
        'responsive websites',
        'prototype',
       ],
      },
      {
       title: 'Senior React Native Developer – AI-Focused Apps',
       location: 'Toronto, Canada',
       postedDate: '2025-07-02',
       salary: '$635.00/Month',
       description:
        'Join our AI startup and develop intelligent mobile apps using React Native. Integrate ML features and real-time analytics through scalable components.',
       responsibilities: [
        'Develop AI-powered mobile app interfaces.',
        'Integrate TensorFlow.js for on-device predictions.',
        'Work with Node.js backend for real-time metrics.',
        'Ensure responsive and animated UI delivery.',
       ],
       requirements: [
        '4+ years of mobile development experience.',
        'Strong background in ML integrations in React Native.',
        'Experience with cloud deployment and CI/CD.',
        'Excellent problem-solving skills.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'tensorflow.js',
        'functions behind the scene',
        'OOP',
        'critical rendering',
        'socket.io',
       ],
      },
      {
       title: 'React Native Developer – Logistics & Fleet Management Apps',
       location: 'Berlin, Germany',
       postedDate: '2025-07-02',
       salary: '$625.00/Month',
       description:
        'Join our logistics product team to develop React Native apps for fleet tracking and delivery automation. Work with backend teams to handle location and event data.',
       responsibilities: [
        'Develop cross-platform mobile interfaces.',
        'Integrate real-time location APIs.',
        'Ensure scalability and offline support.',
        'Collaborate with backend for fleet operations.',
       ],
       requirements: [
        '3+ years of React Native experience.',
        'Good understanding of real-time data handling.',
        'Strong skills in state management and storage.',
        'Experience with Git and Agile workflow.',
       ],
       skills: [
        'html',
        'css',
        'javascript',
        'node.js',
        'tailwind',
        'react native',
        'mobile apps',
        'ajax',
        'express',
        'google app script',
        'responsive websites',
        'MUI',
       ],
      },
     ],
    };

    return {
     title: `React Native Developer Jobs in ${country}`,
     data: countryData[country],
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
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
       title: 'DevOps & Infrastructure Engineer – Secure Cloud Deployments',
       location: 'Multan, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 420,000/Month',
       description:
        "Join a dynamic team building cloud-native apps with secure infrastructure. As a DevOps engineer, you'll automate environments and improve system stability across the stack.",
       responsibilities: [
        'Implement and maintain secure cloud environments.',
        'Automate deployments for web and API layers.',
        'Enhance DevOps lifecycle with testing & rollback strategies.',
        'Manage CI/CD pipelines integrated with full stack workflows.',
       ],
       requirements: [
        '4+ years in DevOps or backend infrastructure roles.',
        'Strong scripting and pipeline automation skills.',
        'Cloud security practices familiarity is a plus.',
        'Understanding of agile workflows and DevSecOps.',
       ],
       skills: [
        'html',
        'css',
        'JavaScript',
        'react',
        'next.js',
        'node.js',
        'tailwind',
        'DevOps',
        'ajax',
        'MVC',
        'machine learning',
        'google app script',
        'prototype',
        'responsive websites',
       ],
      },
      {
       title: 'DevOps Engineer – Kubernetes, GitOps & CI/CD Management',
       location: 'Peshawar, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 450,000/Month',
       description:
        "We are looking for a skilled DevOps professional to build and scale our Kubernetes deployments. You'll ensure that our frontend and backend delivery is seamless and automated.",
       responsibilities: [
        'Lead Kubernetes cluster setup and maintenance.',
        'Develop CI/CD workflows integrated with Git.',
        'Support React, Node, and API deployments.',
        'Maintain observability across infrastructure.',
       ],
       requirements: [
        '5 years in DevOps engineering or site reliability.',
        'Hands-on experience with GitOps methodologies.',
        'Knowledge of Helm, Docker, and cloud services.',
        'Team-first attitude and scripting capability.',
       ],
       skills: [
        'html',
        'css',
        'JavaScript',
        'react',
        'next.js',
        'node.js',
        'tailwind',
        'DevOps',
        'tensorflow.js',
        'OOP',
        'responsive websites',
        'express',
        'bootstraps',
        'socket.io',
       ],
      },
      {
       title: 'Full Stack DevOps Engineer – Cloud Native Application Delivery',
       location: 'Lahore, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 400,000/Month',
       description:
        "We're hiring a DevOps engineer with full stack awareness to lead container orchestration and microservices deployments. You will work in a hybrid cloud and on-prem environment.",
       responsibilities: [
        'Develop and maintain CI/CD pipelines for microservices.',
        'Optimize application deployment with Docker/Kubernetes.',
        'Collaborate with frontend teams on app delivery.',
        'Implement system monitoring and logs centralization.',
       ],
       requirements: [
        '4+ years of professional DevOps experience.',
        'Strong foundation in backend service delivery.',
        'Experience with MongoDB, Node.js, and container tech.',
        'Good communication and documentation skills.',
       ],
       skills: [
        'html',
        'css',
        'JavaScript',
        'react',
        'next.js',
        'node.js',
        'tailwind',
        'DevOps',
        'data structures',
        'MUI',
        'express',
        'google app script',
        'OOP',
       ],
      },
      {
       title: 'DevOps Specialist – Automation, Monitoring & Full Stack Ops',
       location: 'Karachi, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 445,000/Month',
       description:
        'Join our DevOps team to build deployment automation and improve development lifecycle processes. Collaborate with frontend and backend teams on operational efficiency.',
       responsibilities: [
        'Manage infrastructure setup and deployment workflows.',
        'Monitor applications and implement alerting strategies.',
        'Automate releases for React and Node.js apps.',
        'Ensure high availability and secure deployments.',
       ],
       requirements: [
        '5 years of DevOps experience.',
        'Hands-on with containers, Docker, and version control.',
        'Knowledge of backend service monitoring tools.',
        'Experience deploying full stack apps in production.',
       ],
       skills: [
        'html',
        'css',
        'JavaScript',
        'react',
        'next.js',
        'node.js',
        'tailwind',
        'DevOps',
        'bootstraps',
        'MVC',
        'critical rendering',
        'responsive websites',
        'ajax',
        'prototype',
       ],
      },
      {
       title: 'Senior DevOps Engineer – CI/CD & Full Stack Integration',
       location: 'Islamabad, Pakistan',
       postedDate: '2025-07-02',
       salary: 'PKR 430,000/Month',
       description:
        "We’re seeking a seasoned DevOps Engineer to manage our CI/CD pipelines and cloud infrastructure. You'll collaborate with developers to streamline full stack operations using modern tools.",
       responsibilities: [
        'Design, build, and manage CI/CD automation.',
        'Ensure cloud infrastructure reliability and scalability.',
        'Integrate backend deployment pipelines with React/Next.js apps.',
        'Collaborate on infrastructure as code (IaC) practices.',
       ],
       requirements: [
        '4+ years of DevOps experience.',
        'Strong scripting and automation knowledge.',
        'Cloud services like AWS or GCP experience preferred.',
        'Solid understanding of full stack development workflows.',
       ],
       skills: [
        'html',
        'css',
        'JavaScript',
        'react',
        'next.js',
        'node.js',
        'tailwind',
        'DevOps',
        'mongoDB',
        'OOP',
        'express',
        'socket.io',
        'google app script',
       ],
      },
     ],
     'CAREERJET.com': [
      {
       title: 'DevOps Engineer – Cloud Automation & CI/CD Systems',
       location: 'Austin, TX, USA',
       postedDate: '2025-07-02',
       salary: '$1,500/Month',
       description:
        'Join our DevOps team to lead scalable cloud automation and CI/CD orchestration. You’ll collaborate with full stack teams for seamless delivery of React/Next.js applications.',
       responsibilities: [
        'Design and implement cloud infrastructure using IaC.',
        'Develop and manage GitHub Actions and CI/CD pipelines.',
        'Integrate React and Node.js apps into automated deployment.',
        'Monitor logs, uptime, and system health dashboards.',
       ],
       requirements: [
        '5+ years of DevOps or cloud infrastructure experience.',
        'Proficient with containerization, CI tools, and version control.',
        'Solid understanding of JavaScript-based full stack delivery.',
        'Experience with AWS, GCP, or Azure.',
       ],
       skills: [
        'html',
        'css',
        'JavaScript',
        'react',
        'next.js',
        'node.js',
        'tailwind',
        'DevOps',
        'ajax',
        'express',
        'google app script',
        'MVC',
        'responsive websites',
       ],
       },
       {
        title: 'Full Stack DevOps Specialist – Secure Web Deployment',
        location: 'San Diego, CA, USA',
        postedDate: '2025-07-02',
        salary: '$1,520/Month',
        description:
          "We're hiring a Full Stack DevOps expert to build automated deployment pipelines, enforce security standards, and support React and Node.js production rollouts.",
        responsibilities: [
          'Automate application deployment and rollback pipelines.',
          'Collaborate with frontend and backend teams on delivery.',
          'Monitor production services and system load.',
          'Document infrastructure and system changes.'
        ],
        requirements: [
          '4+ years of experience in DevOps and backend services.',
          'Proficient in container orchestration and CI/CD pipelines.',
          'Knowledge of infrastructure monitoring tools.',
          'Strong scripting, Git, and versioning experience.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'machine learning', 'socket.io', 'OOP', 'bootstraps', 'critical rendering']
       },
       {
        title: 'Senior DevOps Engineer – Infrastructure as Code & Monitoring',
        location: 'Seattle, WA, USA',
        postedDate: '2025-07-02',
        salary: '$1,530/Month',
        description:
          "Drive DevOps excellence by implementing IaC, automated workflows, and scalable deployment systems. Support robust React/Next.js delivery pipelines and backend APIs.",
        responsibilities: [
          'Manage IaC deployment using Terraform or Pulumi.',
          'Build observability tools with Grafana and Prometheus.',
          'Ensure secure deployment of full stack JavaScript apps.',
          'Collaborate with SRE and engineering teams.'
        ],
        requirements: [
          '5 years of DevOps and infrastructure experience.',
          'Deep knowledge of Node.js stack and containerization.',
          'Comfortable managing complex distributed systems.',
          'Excellent troubleshooting and system design skills.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'google app script', 'express', 'MVC', 'MUI', 'OOP', 'responsive websites']
       },
       {
        title: 'DevOps Engineer – Cloud-Native Applications & Pipelines',
        location: 'Chicago, IL, USA',
        postedDate: '2025-07-02',
        salary: '$1,490/Month',
        description:
          "We are looking for a DevOps engineer to support cloud-native apps, streamline release pipelines, and collaborate with frontend engineers building Next.js applications.",
        responsibilities: [
          'Set up and optimize deployment workflows for production.',
          'Ensure CI/CD best practices across services.',
          'Handle environment provisioning and resource scaling.',
          'Integrate system logging and audit controls.'
        ],
        requirements: [
          '4+ years of DevOps and CI/CD pipeline experience.',
          'Experience working with Next.js and backend APIs.',
          'Comfortable with containers and orchestration tools.',
          'Understanding of secure deployment practices.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'ajax', 'tensorflow.js', 'OOP', 'critical rendering', 'socket.io']
       },
       {
        title: 'DevOps & Infrastructure Engineer – Full Stack Systems',
        location: 'Boston, MA, USA',
        postedDate: '2025-07-02',
        salary: '$1,485/Month',
        description:
          "Join our engineering ops team to build highly available DevOps pipelines. Help deliver performant Next.js and Node.js apps backed by scalable infrastructure.",
        responsibilities: [
          'Maintain Docker-based CI/CD deployments.',
          'Implement logging, error tracking, and health checks.',
          'Provision infrastructure using IaC frameworks.',
          'Optimize system cost and performance.'
        ],
        requirements: [
          '4–5 years of DevOps and full stack integration experience.',
          'Familiarity with frontend build processes (React/Next).',
          'Working knowledge of security best practices.',
          'Efficient in cloud-native tools and monitoring dashboards.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'dom', 'data structures', 'mongoDB', 'bootstraps', 'prototype']
      }
     ],
      'SIMPLYHIRED.com': [
     
        {
          title: 'Platform DevOps Engineer – Hybrid Cloud Apps',
          location: 'Oslo, Norway',
          postedDate: '2025-07-02',
          salary: '$1,495/Month',
          description:
            "Build and manage hybrid cloud platforms supporting frontend and backend services. Ensure reliability and security for distributed microservices pipelines.",
          responsibilities: [
            'Deploy React/Next.js platforms in hybrid environments.',
            'Manage CI/CD with GitLab and Jenkins.',
            'Maintain infrastructure and secret management.',
            'Establish logging and recovery automation.'
          ],
          requirements: [
            '4–5 years in DevOps with hybrid cloud exposure.',
            'Fluency with GitOps and Infrastructure as Code.',
            'Experience supporting Node.js, MongoDB, and React stacks.',
            'Comfortable working in ISO-compliant environments.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'bootstraps', 'socket.io', 'MVC', 'google app script']
        },
        {
          title: 'DevOps & CI/CD Engineer – Microservices & Full Stack',
          location: 'Dubai, UAE',
          postedDate: '2025-07-02',
          salary: '$1,525/Month',
          description:
            "Deliver scalable DevOps solutions for a high-traffic media platform. Work with frontend and backend devs to automate microservices across environments.",
          responsibilities: [
            'Orchestrate deployments using Kubernetes.',
            'Maintain build/release automation pipelines.',
            'Enable high availability and rollback capabilities.',
            'Monitor systems and address real-time failures.'
          ],
          requirements: [
            '5+ years DevOps or cloud engineering experience.',
            'Hands-on with containers, load balancers, and CI tools.',
            'Agile workflow and sprint planning familiarity.',
            'Strong full stack integration awareness.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'OOP', 'responsive websites', 'data structures', 'prototype']
        },
        {
          title: 'Senior DevOps Engineer – ML Pipelines & WebOps',
          location: 'Sydney, Australia',
          postedDate: '2025-07-02',
          salary: '$1,510/Month',
          description:
            "Work with ML engineers and frontend devs to deploy machine learning models inside React-based web apps. Build pipelines that automate and optimize release processes.",
          responsibilities: [
            'Deploy containerized ML services to production.',
            'Collaborate with web teams for integration.',
            'Set up observability tools (Prometheus, Grafana).',
            'Manage high-load infrastructure environments.'
          ],
          requirements: [
            '4+ years in DevOps with ML/AI exposure.',
            'Experience with Python APIs and Node.js microservices.',
            'Infrastructure knowledge for model delivery.',
            'Kubernetes and workflow orchestration required.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'tensorflow.js', 'google app script', 'OOP', 'critical rendering']
        },
        {
          title: 'Full Stack DevOps Specialist – SaaS Systems Delivery',
          location: 'Toronto, Canada',
          postedDate: '2025-07-02',
          salary: '$1,485/Month',
          description:
            "Be part of a product-focused SaaS company. Automate builds and deployments while ensuring resilient infrastructure supporting full stack JavaScript environments.",
          responsibilities: [
            'Automate builds and zero-downtime deployments.',
            'Configure staging and production CI/CD.',
            'Implement alerting and disaster recovery processes.',
            'Optimize backend release workflows.'
          ],
          requirements: [
            '5+ years DevOps/Infrastructure experience.',
            'Docker, Kubernetes, and Helm expertise.',
            'Experience deploying Node.js and Next.js apps.',
            'Solid Linux, Git, and scripting background.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'ajax', 'express', 'google app script', 'MVC']
        },
      {
        title: 'DevOps Engineer – Infrastructure Automation & CI/CD',
        location: 'Berlin, Germany',
        postedDate: '2025-07-02',
        salary: '$1,500/Month',
        description:
          "Join our European cloud ops team to streamline deployments using GitHub Actions, Terraform, and container orchestration. Deliver scalable React/Next.js systems globally.",
        responsibilities: [
          'Design, automate, and manage cloud infrastructure.',
          'Implement scalable CI/CD workflows.',
          'Optimize deployment strategies for full stack apps.',
          'Collaborate with frontend/backend teams for smooth releases.'
        ],
        requirements: [
          '4+ years in DevOps with CI/CD experience.',
          'Strong command of cloud platforms like AWS or GCP.',
          'Experience with microservices and Docker.',
          'Proficient in scripting, Git, and monitoring tools.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'data structures', 'MUI', 'responsive websites', 'socket.io']
      }
     ],
     'GLASSDOOR.com': [
      {
        title: 'Cloud DevOps Engineer – Full Stack Delivery & Automation',
        location: 'Barcelona, Spain',
        postedDate: '2025-07-02',
        salary: '$1,505/Month',
        description:
          "We're hiring a DevOps engineer to manage scalable deployments and CI pipelines for our React, Next.js, and Node.js stack across European clients.",
        responsibilities: [
          'Create and maintain GitOps deployment pipelines.',
          'Automate provisioning using Terraform.',
          'Integrate DevOps with full stack teams.',
          'Ensure monitoring, logging, and backup plans.'
        ],
        requirements: [
          '4+ years DevOps experience with JavaScript stacks.',
          'Experience with IaC, CI/CD tools, and GitHub Actions.',
          'Comfort with multi-region cloud environments.',
          'Strong scripting and system-level debugging skills.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'express', 'OOP', 'critical rendering', 'data structures']
      },
      {
        title: 'DevOps & Site Reliability Engineer – High Uptime Environments',
        location: 'Tokyo, Japan',
        postedDate: '2025-07-02',
        salary: '$1,530/Month',
        description:
          "Seeking an SRE-focused DevOps engineer to support high uptime React and Node.js deployments. You'll optimize systems for performance, redundancy, and reliability.",
        responsibilities: [
          'Deploy scalable containerized apps via Kubernetes.',
          'Implement performance monitoring and auto-healing systems.',
          'Support uptime for production services.',
          'Enable blue/green and canary deployments.'
        ],
        requirements: [
          '5+ years of SRE/DevOps experience.',
          'Knowledge of uptime metrics, load balancing, and rollback.',
          'Proficient in React/Node.js DevOps support.',
          'Strong command over Unix/Linux systems.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'machine learning', 'ajax', 'google app script', 'socket.io']
      },
      {
        title: 'Full Stack DevOps Engineer – Product Pipeline Optimization',
        location: 'Amsterdam, Netherlands',
        postedDate: '2025-07-02',
        salary: '$1,485/Month',
        description:
          "You’ll work across cloud deployments and developer tooling to improve code-to-cloud pipelines for a high-growth software product used by global retailers.",
        responsibilities: [
          'Automate CI/CD pipelines for product release.',
          'Build and deploy frontend/backend services.',
          'Set up dynamic infrastructure using IaC.',
          'Collaborate on performance benchmarking.'
        ],
        requirements: [
          '4+ years DevOps experience in full stack environment.',
          'Comfortable with AWS, Docker, and GitHub Workflows.',
          'Proficiency in JS-based app stack deployments.',
          'Familiar with monitoring dashboards.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'responsive websites', 'OOP', 'bootstraps', 'MVC']
      },
      {
        title: 'Lead DevOps Engineer – Kubernetes & CI/CD Systems',
        location: 'Auckland, New Zealand',
        postedDate: '2025-07-02',
        salary: '$1,500/Month',
        description:
          "We’re seeking a senior DevOps professional to lead pipeline, container, and deployment processes across modern React and API-based web apps.",
        responsibilities: [
          'Architect deployment systems for frontend/backend codebases.',
          'Implement IaC and GitOps workflows.',
          'Oversee CI/CD process design and testing.',
          'Collaborate with full stack engineers to optimize delivery.'
        ],
        requirements: [
          '5+ years DevOps or cloud automation experience.',
          'Expertise in container orchestration (Docker, K8s).',
          'Able to manage complex release environments.',
          'Strong Node.js pipeline integration.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'ajax', 'express', 'socket.io', 'data structures', 'MVC']
      },
      {
        title: 'Cloud Infrastructure & DevOps Engineer – Distributed Systems',
        location: 'Zurich, Switzerland',
        postedDate: '2025-07-02',
        salary: '$1,490/Month',
        description:
          "Join our infrastructure division managing cloud-based deployment systems, monitoring layers, and JavaScript stack performance improvements across platforms.",
        responsibilities: [
          'Develop cross-region deployment pipelines.',
          'Establish scalable, fault-tolerant cloud solutions.',
          'Support React/Next.js app rollouts globally.',
          'Implement custom automation scripts.'
        ],
        requirements: [
          '5 years DevOps/cloud operations experience.',
          'Fluency in infrastructure tooling (Terraform, Ansible).',
          'Strong experience with JavaScript-based deployments.',
          'Comfortable in regulated, multi-tenant environments.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'data structures', 'MUI', 'OOP', 'prototype']
      }
     ],
      'INDEED.com': [
        {
          title: 'DevOps Engineer – Full Stack Platform Orchestration',
          location: 'Copenhagen, Denmark',
          postedDate: '2025-07-02',
          salary: '$1,495/Month',
          description:
            "Join a distributed engineering team to manage containerized deployment, CI/CD automation, and end-to-end DevOps for Node and React-based applications.",
          responsibilities: [
            'Work with developers to streamline builds.',
            'Build secure pipelines for microservices.',
            'Deploy infrastructure via IaC and CI.',
            'Monitor production systems and perform tuning.'
          ],
          requirements: [
            '4+ years in cloud ops and DevOps roles.',
            'Familiarity with React + Node.js stack automation.',
            'Experience building pipelines in enterprise environments.',
            'Scripting in Bash, Python, or Node required.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'OOP', 'bootstraps', 'data structures', 'MVC']
        },
        {
          title: 'DevOps Engineer – High-Speed Deployment Systems',
          location: 'Warsaw, Poland',
          postedDate: '2025-07-02',
          salary: '$1,520/Month',
          description:
            "Join a fintech product team where you'll own pipeline architecture for our critical deployments. Ensure React and Node updates are shipped fast and reliably.",
          responsibilities: [
            'Maintain automated test and release systems.',
            'Monitor system health and load under pressure.',
            'Coordinate regional and global deployment pipelines.',
            'Optimize rollback and patching procedures.'
          ],
          requirements: [
            '4–5 years DevOps with JS app deployment.',
            'Hands-on with CI/CD platforms like CircleCI or GitHub Actions.',
            'Experience with React/Next.js builds and CDN routing.',
            'Capable in performance stress testing.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'ajax', 'MUI', 'socket.io', 'google app script']
        },
        {
          title: 'Global DevOps Specialist – Full Stack Automation',
          location: 'Cape Town, South Africa',
          postedDate: '2025-07-02',
          salary: '$1,485/Month',
          description:
            "Help us scale our multi-country frontend/backend stack with robust automation pipelines and efficient delivery practices using modern DevOps workflows.",
          responsibilities: [
            'Automate staging-to-production flow.',
            'Work closely with backend API and frontend teams.',
            'Implement rollout control and rollback logic.',
            'Maintain secure access and permissions.'
          ],
          requirements: [
            '4+ years in automation/devops roles.',
            'Full stack JS deployment knowledge essential.',
            'Versioning and rollback experience.',
            'Cloud services and Git expertise required.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'google app script', 'data structures', 'prototype', 'bootstraps']
        },
        {
          title: 'Next.js DevOps Architect – Performance & Pipeline Engineer',
          location: 'Singapore',
          postedDate: '2025-07-02',
          salary: '$1,525/Month',
          description:
            "Lead full stack delivery ops and performance pipelines for our enterprise-grade Next.js applications across finance and healthcare clients.",
          responsibilities: [
            'Monitor app performance across deployments.',
            'Maintain infrastructure compliance and audits.',
            'Support server-side rendering workflows (Next.js).',
            'Build secure deployment environments with CI tools.'
          ],
          requirements: [
            '5+ years DevOps/infra experience.',
            'Comfort with performance engineering tools.',
            'Experience integrating full stack JS deployments.',
            'Security-focused DevOps mindset.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'socket.io', 'MVC', 'ajax', 'OOP']
        },
      {
        title: 'DevOps Engineer – SaaS Platform & Scalable Architecture',
        location: 'Lisbon, Portugal',
        postedDate: '2025-07-02',
        salary: '$1,515/Month',
        description:
          "Work on high-availability SaaS delivery using Next.js frontend and Node.js backend stacks. Help scale infrastructure to support growing customer base.",
        responsibilities: [
          'Build Docker-based release pipelines.',
          'Ensure 99.99% uptime for web services.',
          'Collaborate with engineers on feature rollouts.',
          'Manage cost-efficient deployment strategies.'
        ],
        requirements: [
          '4+ years in DevOps and cloud deployments.',
          'Knowledge of frontend and backend ops processes.',
          'Understanding of cost optimization tools.',
          'Comfortable in fast-paced product environments.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'critical rendering', 'express', 'google app script', 'responsive websites']
      }
     ],
    };

    return {
     title: `DevOps Engineer Jobs in ${country}`,
     data: countryData[country],
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
   content: (country) => {
    const countryData = {
     'ROZEE.pk': [
      {
        title: 'Salesforce Consultant – Enterprise Cloud Solutions & Customization',
        location: 'Karachi, Pakistan',
        postedDate: '2025-07-02',
        salary: 'PKR 595,000/Month',
        description:
          "We are hiring a Salesforce Consultant to lead high-scale CRM customizations, drive cloud transitions, and work alongside full stack and DevOps teams for B2B clients.",
        responsibilities: [
          'Design and configure Salesforce Sales and Service Cloud environments.',
          'Implement scalable CI/CD for automated updates.',
          'Integrate custom Apex solutions with third-party APIs.',
          'Mentor internal teams on Lightning development best practices.'
        ],
        requirements: [
          '6+ years of Salesforce consulting and platform optimization.',
          'Previously built GitOps CI/CD workflows for cloud-based products.',
          'Led full stack Next.js and backend integration with CRM tools.',
          'Worked closely with DevOps to deploy automated Salesforce updates.'
        ],
        skills: [
          'html', 'css', 'ajax', 'Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Business Analysis', 'Project Management',
          'Client Relationship Management', 'MVC', 'data structures', 'tailwind', 'MUI', 'google app script', 'Customization',
          'Apex Programming', 'Lightning', 'OOP', 'responsive websites'
        ]
      },
      {
        title: 'Salesforce Consultant – Full Stack CRM Integration Specialist',
        location: 'Islamabad, Pakistan',
        postedDate: '2025-07-02',
        salary: 'PKR 550,000/Month',
        description:
          "Join a growing cloud tech firm delivering custom Salesforce modules and full-stack integrations with Next.js and Node.js apps for global retailers.",
        responsibilities: [
          'Integrate CRM with React/Next.js-based frontend portals.',
          'Configure Lightning components and Apex triggers.',
          'Collaborate with DevOps for staging deployments.',
          'Implement advanced automation in Service Cloud flows.'
        ],
        requirements: [
          '6+ years in Salesforce custom platform development.',
          'Built scalable APIs with Node.js and Express.',
          'Previously optimized CI/CD pipelines in DevOps role.',
          'Experience with full stack JavaScript applications.'
        ],
        skills: [
          'html', 'css', 'Business analysis', 'Marketing Cloud', 'Service Cloud', 'data structures',
          'flexibility', 'MVC', 'Customizations', 'ajax', 'tensorflow.js', 'google app script',
          'MUI', 'OOP', 'Apex Programming', 'Lightning', 'Client Relationship Management', 'responsive websites', 'tailwind'
        ]
      },
      {
        title: 'Senior Salesforce Consultant – Cloud Strategy & Technical Delivery',
        location: 'Faisalabad, Pakistan',
        postedDate: '2025-07-02',
        salary: 'PKR 585,000/Month',
        description:
          "Seeking a Salesforce Consultant to lead complex CRM migrations, advise on cloud-first architecture, and integrate DevOps automation into Salesforce workflows.",
        responsibilities: [
          'Lead Salesforce to Marketing Cloud transition projects.',
          'Develop custom workflows and automation in Apex.',
          'Align Salesforce roadmap with business and IT objectives.',
          'Partner with full stack and DevOps engineers for deployment support.'
        ],
        requirements: [
          '6+ years in CRM solutions and platform architecture.',
          'Deployed frontend components in Next.js alongside CRM integration.',
          'Experience with DevOps CI/CD tools and backend data pipelines.',
          'Built dynamic user journeys in Salesforce Marketing Cloud.'
        ],
        skills: [
          'html', 'css', 'JavaScript', 'Sales Cloud', 'Service Cloud', 'ajax', 'MVC',
          'Project Management', 'Business Analysis', 'machine learning', 'tailwind', 'Customization',
          'google app script', 'socket.io', 'Apex Programming', 'Lightning', 'responsive websites',
          'data analysis', 'bootstraps', 'express'
        ]
      },
      {
        title: 'Salesforce CRM Consultant – Custom Development & Deployment',
        location: 'Rawalpindi, Pakistan',
        postedDate: '2025-07-02',
        salary: 'PKR 560,000/Month',
        description:
          "Deliver Salesforce solutions across Sales, Service, and Marketing Cloud platforms. You'll collaborate with product, DevOps, and frontend teams for smooth releases.",
        responsibilities: [
          'Configure and maintain custom Salesforce Lightning apps.',
          'Implement CI/CD deployment strategies with DevOps.',
          'Collaborate with Next.js and Node.js developers.',
          'Manage change sets, metadata migration, and release cycles.'
        ],
        requirements: [
          '6+ years in Salesforce configuration and customization.',
          'Experience integrating full stack web platforms with CRM.',
          'Deployed via GitHub Actions and cloud infra tools.',
          'Handled performance monitoring and testing in previous DevOps projects.'
        ],
        skills: [
          'html', 'css', 'Marketing Cloud', 'Service Cloud', 'Client Relationship Management', 'ajax', 'Configuration', 'Customization',
          'google app script', 'flexibility', 'tailwind', 'OOP', 'Apex Programming', 'Lightning', 'MVC', 'data structures', 'MUI',
          'dom', 'data management', 'socket.io'
        ]
      },
      {
        title: 'Salesforce Consultant – Enterprise Solutions & Lightning Expertise',
        location: 'Multan, Pakistan',
        postedDate: '2025-07-02',
        salary: 'PKR 600,000/Month',
        description:
          "We're hiring an experienced Salesforce Consultant to manage end-to-end CRM development, Lightning UI, and DevOps-integrated deployment processes for enterprise accounts.",
        responsibilities: [
          'Develop reusable Apex classes and Lightning Web Components.',
          'Lead CRM migration and data governance strategy.',
          'Integrate Node.js APIs with Salesforce for real-time sync.',
          'Manage CI/CD pipelines and version control.'
        ],
        requirements: [
          '6+ years in Salesforce customization and integration.',
          'Previously worked on DevOps-driven CI/CD pipelines.',
          'Handled CRM rollout for full stack app with Express/React.',
          'Conducted training on Lightning and Salesforce best practices.'
        ],
        skills: [
          'html', 'css', 'Business Analysis', 'ajax', 'Sales Cloud', 'Service Cloud', 'data management',
          'Data analysis', 'MUI', 'google app script', 'OOP', 'MVC', 'bootstrap', 'Customization', 'express',
          'Apex Programming', 'Lightning', 'responsive websites', 'prototype', 'critical rendering'
        ]
      }
     ],
      'CAREERJET.com' :[   
        {
          title: 'Salesforce Consultant – Full Stack CRM Ops & Cloud Integration',
          location: 'Chicago, IL, USA',
          postedDate: '2025-07-02',
          salary: '$2,045/Month',
          description:
            "Deliver high-performance Salesforce configurations, Lightning UI enhancements, and API integrations in a modern CI/CD environment with full stack collaboration.",
          responsibilities: [
            'Architect and implement scalable Salesforce solutions.',
            'Build bridges between frontend apps and Salesforce APIs.',
            'Deploy Lightning components with automated testing.',
            'Implement DevOps workflows for metadata and release cycles.'
          ],
          requirements: [
            '6+ years of experience in Salesforce customization.',
            'Built release workflows using Git, Bitbucket, or GitHub.',
            'Integrated data services with MongoDB and Service Cloud.',
            'Supported hybrid stacks involving Node.js and CRM.'
          ],
          skills: [
            'html', 'css', 'dom', 'Marketing Cloud', 'Sales Cloud', 'Project Management', 'data analysis', 'tailwind', 'Business Analysis',
            'express', 'Customization', 'Data management', 'MUI', 'ajax', 'OOP', 'responsive websites', 'Apex Programming', 'Lightning',
            'google app script', 'Configuration'
          ]
        },
        {
          title: 'Salesforce Platform Consultant – Marketing Automation & Cloud Scaling',
          location: 'Seattle, WA, USA',
          postedDate: '2025-07-02',
          salary: '$2,020/Month',
          description:
            "Join a digital product team transforming multi-region Salesforce operations with full stack application interfaces and continuous DevOps integration.",
          responsibilities: [
            'Develop advanced Lightning Components with reusable logic.',
            'Coordinate with backend Express teams for CRM-linked APIs.',
            'Maintain version-controlled DevOps pipelines with GitHub Actions.',
            'Design user-centric Salesforce UIs integrated with external services.'
          ],
          requirements: [
            '6+ years in Salesforce development and Lightning UI.',
            'Managed Salesforce/Next.js integration at scale.',
            'Supported multiple sandbox environments in CI/CD pipelines.',
            'Collaborated with frontend engineers and QA for performance testing.'
          ],
          skills: [
            'html', 'css', 'Sales Cloud', 'Service Cloud', 'data analysis', 'ajax', 'Business Analysis', 'Project Management',
            'Marketing Cloud', 'Customization', 'tensorflow.js', 'express', 'OOP', 'Configuration', 'Client Relationship Management',
            'Apex Programming', 'Lightning', 'prototype', 'critical rendering', 'responsive websites'
          ]
        },
        {
          title: 'Salesforce Cloud Consultant – Data-Driven CRM Transformation',
          location: 'New York, NY, USA',
          postedDate: '2025-07-02',
          salary: '$2,060/Month',
          description:
            "We are hiring a Salesforce Cloud Consultant to lead cross-departmental CRM transformation strategies with deep integration into DevOps and full stack web services.",
          responsibilities: [
            'Develop Apex classes for scalable workflows.',
            'Integrate Salesforce with frontend portals using REST APIs.',
            'Streamline business processes with Lightning flows.',
            'Participate in DevOps automation and Git-based deployments.'
          ],
          requirements: [
            '6+ years of experience in Salesforce CRM customization.',
            'Worked in full stack projects involving MongoDB and Express.',
            'Supported CI/CD rollouts in cloud-based ecosystems.',
            'Led Salesforce migration from legacy tools.'
          ],
          skills: [
            'html', 'css', 'tailwind', 'Sales Cloud', 'Service Cloud', 'Business analysis', 'MVC', 'Data management', 'Continuous Learning',
            'Marketing Cloud', 'google app script', 'ajax', 'data structures', 'Customization', 'OOP', 'Apex Programming',
            'Lightning', 'socket.io', 'prototype', 'bootstraps'
          ]
        },
        {
          title: 'Senior Salesforce Consultant – Lightning UX & Custom CRM Solutions',
          location: 'San Francisco, CA, USA',
          postedDate: '2025-07-02',
          salary: '$2,100/Month',
          description:
            "Join a Fortune 500 tech firm as a Salesforce Consultant focused on delivering enterprise CRM solutions integrated with complex front and backend services.",
          responsibilities: [
            'Lead full Salesforce solution lifecycle: discovery, configuration, testing.',
            'Work with Node.js teams to sync API-based data flows.',
            'Customize Sales Cloud and Marketing Cloud with business logic.',
            'Implement DevOps-driven change sets and metadata migration.'
          ],
          requirements: [
            '6+ years in Salesforce implementation.',
            'Previously contributed to DevOps-first environments.',
            'Built CI/CD workflows for Node/React/CRM hybrid stacks.',
            'Managed complex metadata and security controls.'
          ],
          skills: [
            'html', 'css', 'Business Analysis', 'javascript', 'MVC', 'ajax', 'tailwind', 'google app script', 'Client Relationship Management',
            'Customization', 'Sales Cloud', 'Service Cloud', 'data analysis', 'MUI', 'OOP', 'Apex Programming', 'Lightning',
            'Configuration', 'critical rendering', 'machine learning'
          ]
        },
      {
        title: 'Salesforce Consultant – Enterprise CRM & Integration Specialist',
        location: 'Austin, TX, USA',
        postedDate: '2025-07-02',
        salary: '$2,090/Month',
        description:
          "We’re seeking a seasoned Salesforce Consultant to lead integrations with full stack platforms, automate workflows, and enhance customer lifecycle visibility through CRM intelligence.",
        responsibilities: [
          'Design and implement Salesforce architecture across cloud platforms.',
          'Collaborate with DevOps to establish CI/CD pipelines for custom Apex modules.',
          'Integrate React-based frontend portals with CRM logic.',
          'Manage Lightning components and drive Marketing Cloud adoption.'
        ],
        requirements: [
          '6+ years of Salesforce customization and automation.',
          'Experience with GitOps and infrastructure automation in DevOps roles.',
          'Hands-on involvement in full stack deployments using Next.js.',
          'Built CRM dashboards and configured dynamic workflows.'
        ],
        skills: [
          'html', 'css', 'dom', 'ajax', 'Business Analysis', 'Sales Cloud', 'Service Cloud', 'tailwind', 'Project Management',
          'Marketing Cloud', 'data structures', 'OOP', 'responsive websites', 'Customization', 'express', 'google app script',
          'Apex Programming', 'Lightning', 'Data management', 'prototype'
        ]
      },
     ],
      'SIMPLYHIRED.com': [
     
        {
          title: 'Platform DevOps Engineer – Hybrid Cloud Apps',
          location: 'Oslo, Norway',
          postedDate: '2025-07-02',
          salary: '$1,495/Month',
          description:
            "Build and manage hybrid cloud platforms supporting frontend and backend services. Ensure reliability and security for distributed microservices pipelines.",
          responsibilities: [
            'Deploy React/Next.js platforms in hybrid environments.',
            'Manage CI/CD with GitLab and Jenkins.',
            'Maintain infrastructure and secret management.',
            'Establish logging and recovery automation.'
          ],
          requirements: [
            '4–5 years in DevOps with hybrid cloud exposure.',
            'Fluency with GitOps and Infrastructure as Code.',
            'Experience supporting Node.js, MongoDB, and React stacks.',
            'Comfortable working in ISO-compliant environments.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'bootstraps', 'socket.io', 'MVC', 'google app script']
        },
        {
          title: 'DevOps & CI/CD Engineer – Microservices & Full Stack',
          location: 'Dubai, UAE',
          postedDate: '2025-07-02',
          salary: '$1,525/Month',
          description:
            "Deliver scalable DevOps solutions for a high-traffic media platform. Work with frontend and backend devs to automate microservices across environments.",
          responsibilities: [
            'Orchestrate deployments using Kubernetes.',
            'Maintain build/release automation pipelines.',
            'Enable high availability and rollback capabilities.',
            'Monitor systems and address real-time failures.'
          ],
          requirements: [
            '5+ years DevOps or cloud engineering experience.',
            'Hands-on with containers, load balancers, and CI tools.',
            'Agile workflow and sprint planning familiarity.',
            'Strong full stack integration awareness.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'OOP', 'responsive websites', 'data structures', 'prototype']
        },
        {
          title: 'Senior DevOps Engineer – ML Pipelines & WebOps',
          location: 'Sydney, Australia',
          postedDate: '2025-07-02',
          salary: '$1,510/Month',
          description:
            "Work with ML engineers and frontend devs to deploy machine learning models inside React-based web apps. Build pipelines that automate and optimize release processes.",
          responsibilities: [
            'Deploy containerized ML services to production.',
            'Collaborate with web teams for integration.',
            'Set up observability tools (Prometheus, Grafana).',
            'Manage high-load infrastructure environments.'
          ],
          requirements: [
            '4+ years in DevOps with ML/AI exposure.',
            'Experience with Python APIs and Node.js microservices.',
            'Infrastructure knowledge for model delivery.',
            'Kubernetes and workflow orchestration required.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'tensorflow.js', 'google app script', 'OOP', 'critical rendering']
        },
        {
          title: 'Full Stack DevOps Specialist – SaaS Systems Delivery',
          location: 'Toronto, Canada',
          postedDate: '2025-07-02',
          salary: '$1,485/Month',
          description:
            "Be part of a product-focused SaaS company. Automate builds and deployments while ensuring resilient infrastructure supporting full stack JavaScript environments.",
          responsibilities: [
            'Automate builds and zero-downtime deployments.',
            'Configure staging and production CI/CD.',
            'Implement alerting and disaster recovery processes.',
            'Optimize backend release workflows.'
          ],
          requirements: [
            '5+ years DevOps/Infrastructure experience.',
            'Docker, Kubernetes, and Helm expertise.',
            'Experience deploying Node.js and Next.js apps.',
            'Solid Linux, Git, and scripting background.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'ajax', 'express', 'google app script', 'MVC']
        },
      {
        title: 'DevOps Engineer – Infrastructure Automation & CI/CD',
        location: 'Berlin, Germany',
        postedDate: '2025-07-02',
        salary: '$1,500/Month',
        description:
          "Join our European cloud ops team to streamline deployments using GitHub Actions, Terraform, and container orchestration. Deliver scalable React/Next.js systems globally.",
        responsibilities: [
          'Design, automate, and manage cloud infrastructure.',
          'Implement scalable CI/CD workflows.',
          'Optimize deployment strategies for full stack apps.',
          'Collaborate with frontend/backend teams for smooth releases.'
        ],
        requirements: [
          '4+ years in DevOps with CI/CD experience.',
          'Strong command of cloud platforms like AWS or GCP.',
          'Experience with microservices and Docker.',
          'Proficient in scripting, Git, and monitoring tools.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'data structures', 'MUI', 'responsive websites', 'socket.io']
      }
     ],
     'GLASSDOOR.com': [
      {
        title: 'Cloud DevOps Engineer – Full Stack Delivery & Automation',
        location: 'Barcelona, Spain',
        postedDate: '2025-07-02',
        salary: '$1,505/Month',
        description:
          "We're hiring a DevOps engineer to manage scalable deployments and CI pipelines for our React, Next.js, and Node.js stack across European clients.",
        responsibilities: [
          'Create and maintain GitOps deployment pipelines.',
          'Automate provisioning using Terraform.',
          'Integrate DevOps with full stack teams.',
          'Ensure monitoring, logging, and backup plans.'
        ],
        requirements: [
          '4+ years DevOps experience with JavaScript stacks.',
          'Experience with IaC, CI/CD tools, and GitHub Actions.',
          'Comfort with multi-region cloud environments.',
          'Strong scripting and system-level debugging skills.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'express', 'OOP', 'critical rendering', 'data structures']
      },
      {
        title: 'DevOps & Site Reliability Engineer – High Uptime Environments',
        location: 'Tokyo, Japan',
        postedDate: '2025-07-02',
        salary: '$1,530/Month',
        description:
          "Seeking an SRE-focused DevOps engineer to support high uptime React and Node.js deployments. You'll optimize systems for performance, redundancy, and reliability.",
        responsibilities: [
          'Deploy scalable containerized apps via Kubernetes.',
          'Implement performance monitoring and auto-healing systems.',
          'Support uptime for production services.',
          'Enable blue/green and canary deployments.'
        ],
        requirements: [
          '5+ years of SRE/DevOps experience.',
          'Knowledge of uptime metrics, load balancing, and rollback.',
          'Proficient in React/Node.js DevOps support.',
          'Strong command over Unix/Linux systems.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'machine learning', 'ajax', 'google app script', 'socket.io']
      },
      {
        title: 'Full Stack DevOps Engineer – Product Pipeline Optimization',
        location: 'Amsterdam, Netherlands',
        postedDate: '2025-07-02',
        salary: '$1,485/Month',
        description:
          "You’ll work across cloud deployments and developer tooling to improve code-to-cloud pipelines for a high-growth software product used by global retailers.",
        responsibilities: [
          'Automate CI/CD pipelines for product release.',
          'Build and deploy frontend/backend services.',
          'Set up dynamic infrastructure using IaC.',
          'Collaborate on performance benchmarking.'
        ],
        requirements: [
          '4+ years DevOps experience in full stack environment.',
          'Comfortable with AWS, Docker, and GitHub Workflows.',
          'Proficiency in JS-based app stack deployments.',
          'Familiar with monitoring dashboards.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'responsive websites', 'OOP', 'bootstraps', 'MVC']
      },
      {
        title: 'Lead DevOps Engineer – Kubernetes & CI/CD Systems',
        location: 'Auckland, New Zealand',
        postedDate: '2025-07-02',
        salary: '$1,500/Month',
        description:
          "We’re seeking a senior DevOps professional to lead pipeline, container, and deployment processes across modern React and API-based web apps.",
        responsibilities: [
          'Architect deployment systems for frontend/backend codebases.',
          'Implement IaC and GitOps workflows.',
          'Oversee CI/CD process design and testing.',
          'Collaborate with full stack engineers to optimize delivery.'
        ],
        requirements: [
          '5+ years DevOps or cloud automation experience.',
          'Expertise in container orchestration (Docker, K8s).',
          'Able to manage complex release environments.',
          'Strong Node.js pipeline integration.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'ajax', 'express', 'socket.io', 'data structures', 'MVC']
      },
      {
        title: 'Cloud Infrastructure & DevOps Engineer – Distributed Systems',
        location: 'Zurich, Switzerland',
        postedDate: '2025-07-02',
        salary: '$1,490/Month',
        description:
          "Join our infrastructure division managing cloud-based deployment systems, monitoring layers, and JavaScript stack performance improvements across platforms.",
        responsibilities: [
          'Develop cross-region deployment pipelines.',
          'Establish scalable, fault-tolerant cloud solutions.',
          'Support React/Next.js app rollouts globally.',
          'Implement custom automation scripts.'
        ],
        requirements: [
          '5 years DevOps/cloud operations experience.',
          'Fluency in infrastructure tooling (Terraform, Ansible).',
          'Strong experience with JavaScript-based deployments.',
          'Comfortable in regulated, multi-tenant environments.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'data structures', 'MUI', 'OOP', 'prototype']
      }
     ],
      'INDEED.com': [
        {
          title: 'DevOps Engineer – Full Stack Platform Orchestration',
          location: 'Copenhagen, Denmark',
          postedDate: '2025-07-02',
          salary: '$1,495/Month',
          description:
            "Join a distributed engineering team to manage containerized deployment, CI/CD automation, and end-to-end DevOps for Node and React-based applications.",
          responsibilities: [
            'Work with developers to streamline builds.',
            'Build secure pipelines for microservices.',
            'Deploy infrastructure via IaC and CI.',
            'Monitor production systems and perform tuning.'
          ],
          requirements: [
            '4+ years in cloud ops and DevOps roles.',
            'Familiarity with React + Node.js stack automation.',
            'Experience building pipelines in enterprise environments.',
            'Scripting in Bash, Python, or Node required.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'OOP', 'bootstraps', 'data structures', 'MVC']
        },
        {
          title: 'DevOps Engineer – High-Speed Deployment Systems',
          location: 'Warsaw, Poland',
          postedDate: '2025-07-02',
          salary: '$1,520/Month',
          description:
            "Join a fintech product team where you'll own pipeline architecture for our critical deployments. Ensure React and Node updates are shipped fast and reliably.",
          responsibilities: [
            'Maintain automated test and release systems.',
            'Monitor system health and load under pressure.',
            'Coordinate regional and global deployment pipelines.',
            'Optimize rollback and patching procedures.'
          ],
          requirements: [
            '4–5 years DevOps with JS app deployment.',
            'Hands-on with CI/CD platforms like CircleCI or GitHub Actions.',
            'Experience with React/Next.js builds and CDN routing.',
            'Capable in performance stress testing.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'ajax', 'MUI', 'socket.io', 'google app script']
        },
        {
          title: 'Global DevOps Specialist – Full Stack Automation',
          location: 'Cape Town, South Africa',
          postedDate: '2025-07-02',
          salary: '$1,485/Month',
          description:
            "Help us scale our multi-country frontend/backend stack with robust automation pipelines and efficient delivery practices using modern DevOps workflows.",
          responsibilities: [
            'Automate staging-to-production flow.',
            'Work closely with backend API and frontend teams.',
            'Implement rollout control and rollback logic.',
            'Maintain secure access and permissions.'
          ],
          requirements: [
            '4+ years in automation/devops roles.',
            'Full stack JS deployment knowledge essential.',
            'Versioning and rollback experience.',
            'Cloud services and Git expertise required.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'google app script', 'data structures', 'prototype', 'bootstraps']
        },
        {
          title: 'Next.js DevOps Architect – Performance & Pipeline Engineer',
          location: 'Singapore',
          postedDate: '2025-07-02',
          salary: '$1,525/Month',
          description:
            "Lead full stack delivery ops and performance pipelines for our enterprise-grade Next.js applications across finance and healthcare clients.",
          responsibilities: [
            'Monitor app performance across deployments.',
            'Maintain infrastructure compliance and audits.',
            'Support server-side rendering workflows (Next.js).',
            'Build secure deployment environments with CI tools.'
          ],
          requirements: [
            '5+ years DevOps/infra experience.',
            'Comfort with performance engineering tools.',
            'Experience integrating full stack JS deployments.',
            'Security-focused DevOps mindset.'
          ],
          skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'socket.io', 'MVC', 'ajax', 'OOP']
        },
      {
        title: 'DevOps Engineer – SaaS Platform & Scalable Architecture',
        location: 'Lisbon, Portugal',
        postedDate: '2025-07-02',
        salary: '$1,515/Month',
        description:
          "Work on high-availability SaaS delivery using Next.js frontend and Node.js backend stacks. Help scale infrastructure to support growing customer base.",
        responsibilities: [
          'Build Docker-based release pipelines.',
          'Ensure 99.99% uptime for web services.',
          'Collaborate with engineers on feature rollouts.',
          'Manage cost-efficient deployment strategies.'
        ],
        requirements: [
          '4+ years in DevOps and cloud deployments.',
          'Knowledge of frontend and backend ops processes.',
          'Understanding of cost optimization tools.',
          'Comfortable in fast-paced product environments.'
        ],
        skills: ['html', 'css', 'JavaScript', 'react', 'next.js', 'node.js', 'tailwind', 'DevOps', 'critical rendering', 'express', 'google app script', 'responsive websites']
      }
     ],
    };

    return {
     title: `Salesforce Specialist Jobs in ${country}`,
     data: countryData[country],
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
