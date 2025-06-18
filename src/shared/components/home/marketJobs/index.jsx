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
       salary: 'PKR. 70,000 - 90,000/Month',
       description:
        'Teraception is looking for a Talented Frontend developer (React.js)..js (Minimum)This is a full-time on-site role for a Junior Software Engineer - React JS Developer located in Lahore. As a Junior Software Engineer, you will be responsible for designing, developing, and maintaining efficient, reusable, and reliable React JS applications, following best practices and coding standards. You will also work in collaboration with cross-functional teams to optimize customer .Responsibilities:Develop and maintain user-friendly web applications using React.js.Implement modern UI components using Tailwind CSS for responsive design.Optimize applications for maximum speed and scalability.Ensure the technical feasibility of UI/UX designs.Collaborate with designers and backend developers to integrate APIs and ensure smooth functionality.Write clean, reusable, and maintainable code following best practices.Debug and troubleshoot issues to enhance performance and user experience.Stay up to date with emerging frontend technologies and trends.Requirements:Bachelor degree in Computer ScienceMinimum 2 years of .js with typescript (not compulsory but preferred)...but most importantly, We offer an environment that is supportive, transparent and fun to work in..00 - Rs130,000.00 per monthApplication Question(s):How many years of hands-on .js?What is your Current and Expected',

       requirements: [
        "Bachelor's degree in Computer Science",
        'Minimum 2 years of experience with React.js',
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
       title:
        'Junior Frontend Engineer (Component-Based Styling & UI Interactivity)',
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
        '2 years of web development experience',
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
       title: 'Junior Frontend Application Developer (UI + DOM Expert)',
       location: 'Lahore, Pakistan',
       postedDate: 'Posted June 19, 2025',
       salary: 'PKR. 80,000/Month',
       description:
        'We are seeking a creative and technically capable Junior Frontend Developer who can effectively work with HTML, CSS, SCSS, and JavaScript to develop and enhance web applications. You will be responsible for creating well-structured HTML layouts, styling them with both CSS and SCSS while maintaining a clean and modular codebase. A major part of your work will involve using JavaScript to implement user interactivity, such as modals, sliders, dynamic forms, and API data rendering. You should be comfortable debugging code, optimizing load times, and ensuring that the UI remains consistent and responsive across different screen sizes and browsers. This role offers the opportunity to work in a collaborative environment where innovation and attention to detail are highly valued.',

       requirements: [
        '2+ years of web development experience',
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
       title: 'Junior Frontend Developer (HTML/CSS/JavaScript/SCSS Specialist)',
       location: 'Austin, TX',
       postedDate: '2025-06-10',
       salary: '$50.00 – $65.00 per hour',
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
       salary: '$60,000 – $70,000 annually',
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
       title:
        'Junior Frontend Engineer (Component-Based Styling & UI Interactivity)',
       location: 'San Diego, CA',
       postedDate: '2025-06-09',
       salary: '$28.00 – $40.00 per hour',
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
       salary: '$62,000 – $72,000 annually',
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
        'REST APIs',
        'JSP',
        'Java',
        'Git',
        'SVN',
        'Linux',
        'SQL',
        'Tomcat',
        'Perl',
        'TS/SCI with Polygraph',
       ],
      },
      {
       title: 'Junior Frontend Application Developer (UI + DOM Expert)',
       location: 'Chicago, IL',
       postedDate: '2025-06-08',
       salary: '$30.00 – $45.00 per hour',
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
       salary: '$30,400 – $41,500 annually',
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
       salary: '$30,000 – $42,000 per year',
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
       salary: '$32,000 – $40,000 yearly',
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
       salary: '$30K – $41K / yearly',
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
       salary: '$31,000 – $42,000 annually',
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
       salary: '$79,000 to $127,000 per year',
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
       title: 'Junior Frontend Systems Developer',
       location: 'Bothell, WA, USA',
       postedDate: '2025-06-17',
       salary: '$79,000 – $127,000 (DOE)',
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
       salary: '$79K – $127K annually',
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
       title: 'Frontend Product Innovation Engineer',
       location: 'Bothell, WA, USA',
       postedDate: '2025-06-17',
       salary: '$79,000 – $127,000',
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
       title: 'Frontend Innovation Intern (Health Devices)',
       location: 'Bothell, WA, USA',
       postedDate: '2025-06-17',
       salary: '$79,000 – $127,000 (Full-time Position, Intern Equivalent)',
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
       location: 'Middlesbrough, TS2 1RT, UK',
       postedDate: '2025-06-17',
       salary: 'Based on experience',
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
       location: 'Middlesbrough, TS2 1RT, UK',
       postedDate: '2025-06-17',
       salary: 'Competitive, based on experience',
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
       salary: 'Internship (Paid or Stipend)',
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
       title: 'Junior Frontend Engineer – Laravel Focused',
       location: 'Middlesbrough, TS2 1RT, UK',
       postedDate: '2025-06-17',
       salary: '£24,000 - £30,000 per year',
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
       title: 'Junior Creative Developer (SEO/Digital Knowledge)',
       location: 'Middlesbrough, TS2 1RT, UK',
       postedDate: '2025-06-17',
       salary: 'Negotiable',
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
     title: `Web Development Jobs in ${country}`,
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
       title: 'JavaScript Developer – PWA Specialist',
       location: 'Remote / San Francisco, CA',
       postedDate: '2025-06-17',
       salary: '$100,000 - $130,000',
       description:
        'Join our frontend team to build blazing-fast, offline-first Progressive Web Apps used by thousands of daily active users.',
       responsibilities: [
        'Develop and maintain scalable PWAs with offline capabilities.',
        'Implement service workers, caching strategies, and web manifests.',
        'Work closely with UX designers to ensure smooth mobile experiences.',
        'Optimize load time and improve critical rendering path.',
       ],
       requirements: [
        '3+ years of JavaScript development experience.',
        'Hands-on experience building PWAs.',
        'Strong understanding of service workers and caching APIs.',
        'Knowledge of performance optimization and lazy loading.',
       ],
       skills: [
        'JavaScript',
        'PWA',
        'Service Workers',
        'IndexedDB',
        'Critical Rendering Path',
        'React or Vue',
       ],
      },
      {
       title: 'JavaScript Developer – Data Visualization',
       location: 'New York, NY (Hybrid)',
       postedDate: '2025-06-17',
       salary: '$90,000 - $120,000',
       description:
        "We're seeking a JavaScript developer to craft interactive data dashboards and visualizations that power executive decisions.",
       responsibilities: [
        'Develop interactive charts, graphs, and maps using D3.js or Chart.js.',
        'Collaborate with data scientists to visualize real-time analytics.',
        'Maintain design consistency and responsive behavior across devices.',
        'Optimize rendering performance for large datasets.',
       ],
       requirements: [
        'Proficiency in JavaScript and SVG-based rendering.',
        'Experience with at least one data visualization library.',
        'Understanding of DOM rendering and canvas performance.',
        'Familiarity with APIs and data transformation (e.g., JSON, CSV).',
       ],
       skills: [
        'JavaScript',
        'D3.js / Chart.js / ECharts',
        'Data Transformation',
        'SVG & Canvas',
        'Responsive Design',
        'JSON APIs',
       ],
      },
      {
       title: 'JavaScript Developer – Real-Time Web (WebRTC/WebSockets)',
       location: 'Berlin, Germany (Remote Optional)',
       postedDate: '2025-06-17',
       salary: '€80,000 - €110,000',
       description:
        'Help build the next generation of real-time collaboration tools using WebRTC and WebSocket communication protocols.',
       responsibilities: [
        'Build low-latency, real-time features such as chat, screen share, and audio/video calls.',
        'Integrate WebRTC APIs and peer-to-peer communication.',
        'Handle server push data and socket reconnections.',
        'Debug and monitor network connectivity issues.',
       ],
       requirements: [
        '2+ years with WebSockets or WebRTC.',
        'Solid understanding of asynchronous JavaScript and event loops.',
        'Experience with signaling servers and STUN/TURN protocols.',
        'Ability to optimize latency and reliability in unstable networks.',
       ],
       skills: [
        'JavaScript',
        'WebRTC',
        'WebSocket',
        'Signaling',
        'Socket.io',
        'STUN/TURN Servers',
       ],
      },
      {
       title: 'JavaScript Developer – Google Apps Script + OOP',
       location: 'Toronto, Canada (Hybrid)',
       postedDate: '2025-06-17',
       salary: '$85,000 - $100,000 CAD',
       description:
        'Work with our internal automation team to build tools and systems using Google Apps Script and object-oriented JavaScript principles.',
       responsibilities: [
        'Develop custom scripts for Google Sheets, Docs, and Forms.',
        'Implement structured, reusable OOP-based modules.',
        'Automate internal workflows and reporting pipelines.',
        'Integrate APIs like Gmail, Calendar, and Drive.',
       ],
       requirements: [
        'Strong understanding of JavaScript (ES6+), especially OOP.',
        'Experience with Google Apps Script and G Suite integration.',
        'Familiarity with triggers, events, and time-based scheduling.',
        'Excellent debugging and testing skills.',
       ],
       skills: [
        'JavaScript',
        'Google Apps Script',
        'OOP',
        'Gmail/Sheets API',
        'Triggers & Timers',
        'OAuth2',
       ],
      },
      {
       title: 'JavaScript Developer – ML-Integrated Prototypes',
       location: 'Austin, TX (On-site Preferred)',
       postedDate: '2025-06-17',
       salary: '$105,000 - $140,000',
       description:
        'Rapidly prototype UI-driven tools that integrate with machine learning models using JavaScript, TensorFlow.js, and Web APIs.',
       responsibilities: [
        'Create prototypes integrating real-time ML outputs into the UI.',
        'Collaborate with data teams to connect models via APIs.',
        'Handle input/output data pipelines securely and efficiently.',
        'Test new UI concepts based on user interaction with AI features.',
       ],
       requirements: [
        'Experience in rapid prototyping and iterative design.',
        'Familiarity with ML concepts and TensorFlow.js or similar.',
        'Solid understanding of async operations and fetch/AJAX.',
        'Strong sense of user feedback and interaction design.',
       ],
       skills: [
        'JavaScript',
        'TensorFlow.js / ML5.js',
        'Prototyping',
        'Fetch API',
        'Machine Learning Basics',
        'UX Thinking',
       ],
      },
     ],
     'CAREERJET.com': [
      {
       title: 'JavaScript Security Developer – Web Platform',
       location: 'Denver, CO',
       postedDate: '2025-05-24',
       salary: '$80,000 - $135,000 per year',
       description:
        "Join bet365's Fraud Site Defense Team and battle advanced hackers through JavaScript-based defenses and reverse engineering techniques. Play a direct role in safeguarding critical web applications.",
       responsibilities: [
        'Identify and analyze exploits and automation threats.',
        'Design anti-tamper and anti-cheat defenses across the web platform.',
        'Ensure data integrity through spoof prevention measures.',
        'Collaborate with cross-functional teams to enhance security.',
       ],
       requirements: [
        'Hands-on experience in JavaScript security and threat modeling.',
        'Strong background in obfuscation and anti-bot defense.',
        'Ability to reverse engineer malicious behaviors.',
        'Comfortable with fast-paced and evolving threat scenarios.',
       ],
       skills: [
        'JavaScript',
        'TypeScript',
        'Reverse Engineering',
        'Obfuscation',
        'Anti-bot Detection',
        'Data Integrity',
        'Threat Modeling',
       ],
      },
      {
       title: 'Frontend Security Engineer – JavaScript/TypeScript',
       location: 'Denver, CO',
       postedDate: '2025-05-24',
       salary: '$90,000 - $130,000 per year',
       description:
        'We’re hiring a JavaScript frontend engineer with a focus on web application security. Your mission: design high-assurance client-side protections that resist tampering and automation.',
       responsibilities: [
        'Build anti-cheat features and protect data integrity.',
        'Monitor suspicious client behavior using real-time scripts.',
        'Collaborate with app teams for cross-platform defenses.',
        'Implement secure key management and encryption.',
       ],
       requirements: [
        'Expertise in JavaScript and TypeScript for high-assurance systems.',
        'Knowledge of security design patterns and encryption algorithms.',
        'Ability to architect secure web flows and tamper-proof mechanisms.',
       ],
       skills: [
        'JavaScript',
        'TypeScript',
        'Encryption',
        'Web App Security',
        'Client Hardening',
        'Data Validation',
        'Bot Protection',
       ],
      },
      {
       title: 'JavaScript Software Engineer – Anti-Fraud Team',
       location: 'Denver, CO',
       postedDate: '2025-05-24',
       salary: '$80,000 - $135,000 per year',
       description:
        'Bet365 is looking for a JavaScript engineer who thrives on identifying vulnerabilities and creating anti-fraud solutions. Be the first line of defense against online threats and automation tools.',
       responsibilities: [
        'Develop detection systems for bot and macro activity.',
        'Write secure client-side scripts for real-time protection.',
        'Prototype new memory protection and obfuscation techniques.',
        'Mentor junior engineers on secure development practices.',
       ],
       requirements: [
        'Background in browser security and secure web practices.',
        'Experience with bot detection and exploit mitigation.',
        'Strong debugging and analysis skills for threat tracing.',
       ],
       skills: [
        'JavaScript',
        'Security Engineering',
        'Obfuscation',
        'Cryptography',
        'Secure Coding',
        'Exploit Analysis',
       ],
      },
      {
       title: 'Cybersecurity-Focused JavaScript Developer',
       location: 'Denver, CO',
       postedDate: '2025-05-24',
       salary: '$85,000 - $135,000 per year',
       description:
        'Protect millions of users at bet365 as a security-minded JavaScript developer. Lead the implementation of defense strategies against browser-based threats and vulnerabilities.',
       responsibilities: [
        'Architect client-side defenses including obfuscation layers.',
        'Prevent automation using detection and filtering systems.',
        'Secure sensitive interactions via encryption and tamper detection.',
        'Stay ahead of evolving fraud techniques and malware behaviors.',
       ],
       requirements: [
        'Advanced understanding of web vulnerabilities and protection methods.',
        'Proficient in designing resilient client interfaces.',
        'Capable of performing in-depth code and behavior analysis.',
       ],
       skills: [
        'JavaScript',
        'Secure Web Development',
        'Bytecode Interpretation',
        'Automation Defense',
        'Virtualization',
        'Web Threat Analysis',
       ],
      },
      {
       title: 'Full-time JavaScript Security Engineer',
       location: 'Denver, CO',
       postedDate: '2025-05-24',
       salary: '$80,000 - $135,000 per year',
       description:
        'Join bet365’s elite fraud defense team as a full-time security-focused JavaScript developer. Defend against advanced automation, spoofing, and exploitation in real-time.',
       responsibilities: [
        'Develop scripts to detect unauthorized access and bot activity.',
        'Analyze threats and reverse-engineer potential exploits.',
        'Design cross-platform security solutions with companion apps.',
        'Lead initiatives in real-time monitoring and automated response.',
       ],
       requirements: [
        'Experience with TypeScript, obfuscation, and client-side security.',
        'Comfortable analyzing exploit payloads and automation patterns.',
        'Knowledge of modern encryption and secure web architecture.',
       ],
       skills: [
        'JavaScript',
        'TypeScript',
        'Anti-Tamper Development',
        'Security Monitoring',
        'Cross-Platform Scripting',
        'Secure Key Management',
       ],
      },
     ],
     'SIMPLYHIRED.com': [
      {
       title: 'Javascript Software Engineer',
       location: 'Colorado Springs, CO (Hybrid)',
       postedDate: '2025-05-24',
       salary: '$80,187 - $119,343 per year',
       description:
        'Caliola is hiring a front-end engineer with back-end experience to build secure and resilient mission-critical solutions using TypeScript, Vue.js, Node.js, and more.',
       responsibilities: [
        'Lead agile team meetings and project planning.',
        'Contribute full-stack code with a focus on front-end development.',
        'Collaborate with UI/UX designers to deliver effective user interfaces.',
        'Maintain CI/CD pipelines and design system components.',
       ],
       requirements: [
        'BS in Computer Science, Engineering or related field.',
        '4+ years full-stack experience with emphasis on frontend.',
        'Proficiency in JavaScript, TypeScript, Vue.js or similar.',
        'US Citizenship required for security clearance.',
       ],
       skills: [
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'Node.js',
        'CI/CD',
        'GitLab',
        'PostgreSQL',
        'Docker',
        'Agile Development',
       ],
      },
      {
       title: 'Javascript/Frontend Developer',
       location: 'Colorado Springs, CO',
       postedDate: '2025-05-24',
       salary: '$80,187 - $170,080 per year',
       description:
        'Caliola is seeking a full-stack developer with a strong focus on frontend engineering to work on secure communication systems for government and defense applications.',
       responsibilities: [
        'Write production-quality code for web and desktop apps.',
        'Develop user interfaces with Vue.js and Ionic.',
        'Implement back-end logic and integrate with databases.',
        'Support agile workflows and mentor junior team members.',
       ],
       requirements: [
        'Proven experience in frontend and backend development.',
        'Expertise in TypeScript, JavaScript, Vue.js.',
        'Experience with Java, Python, and CI/CD pipelines.',
        'Strong communication and problem-solving skills.',
       ],
       skills: [
        'TypeScript',
        'Vue.js',
        'JavaScript',
        'Ionic',
        'Node.js',
        'NoSQL',
        'Git',
       ],
      },
      {
       title: 'JavaScript Engineer – Mission-Critical Applications',
       location: 'Colorado Springs, CO (Hybrid)',
       postedDate: '2025-05-24',
       salary: '$80,187 - $119,343 annually',
       description:
        'Join a high-impact team developing secure front-end applications for naval communication and VPN systems. Work across desktop, mobile, and web with modern JavaScript technologies.',
       responsibilities: [
        'Design, build, and maintain front-end GUIs.',
        'Collaborate in agile sprints with cross-functional teams.',
        'Develop CI/CD automation and end-to-end testing.',
        'Analyze and transform UX concepts into working components.',
       ],
       requirements: [
        'Bachelor’s degree in CS or Engineering.',
        '4+ years software engineering experience.',
        'Fluency in JavaScript, TypeScript, and frameworks like Angular or React.',
        'Eligible for U.S. security clearance.',
       ],
       skills: [
        'JavaScript',
        'React',
        'Angular',
        'CI/CD',
        'Tauri',
        'Vue.js',
        'Docker',
        'UX Collaboration',
        'Agile Methodology',
       ],
      },
      {
       title: 'Javascript Developer – Secure Systems',
       location: 'Colorado Springs, CO',
       postedDate: '2025-05-24',
       salary: '$80,187 - $119,343 annually',
       description:
        'Help develop user interfaces for resilient communication systems used in national defense. Work on full-stack applications using Vue.js, TypeScript, and secure backend technologies.',
       responsibilities: [
        'Implement and maintain GUI components.',
        'Write unit and integration tests.',
        'Work with backend teams to deliver end-to-end features.',
        'Apply software architecture best practices and design patterns.',
       ],
       requirements: [
        'Bachelor’s in Computer Science or equivalent.',
        'Experience in full-stack environments with frontend focus.',
        'Knowledge of databases and virtualization tools.',
        'Able to work in hybrid team setup and agile cycles.',
       ],
       skills: [
        'TypeScript',
        'Vue.js',
        'Virtualization',
        'PostgreSQL',
        'MySQL',
        'Modular Architecture',
        'GitLab CI',
       ],
      },
      {
       title: 'Mid-Level JavaScript Developer',
       location: 'Colorado Springs, CO (Hybrid)',
       postedDate: '2025-05-24',
       salary: '$80,187 - $170,080 per year',
       description:
        'Caliola is hiring a mid-level JavaScript developer to join their front-end team responsible for mission planners and mesh VPN interfaces in secure communications projects.',
       responsibilities: [
        'Contribute to frontend and backend codebases.',
        'Lead technical planning and agile execution.',
        'Create test plans and develop reusable components.',
        'Maintain a scalable and modular codebase.',
       ],
       requirements: [
        '4+ years experience in frontend frameworks and APIs.',
        'Comfortable with mobile and desktop deployments.',
        'Strong command of Git, GitLab CI/CD, and DevOps practices.',
        'Excellent communication and teamwork.',
       ],
       skills: [
        'JavaScript',
        'Vue.js',
        'Ionic',
        'Node.js',
        'Git',
        'CI/CD',
        'VPN Interfaces',
        'Software Architecture',
       ],
      },
     ],
     'GLASSDOOR.com': [
      {
       title: 'JavaScript Security Software Developer',
       location: 'Denver, CO',
       postedDate: '2025-06-17',
       salary: '$80,000 - $135,000 annually',
       description:
        'Join bet365’s fraud site defense team to combat hackers, build anti-cheat systems, and enhance website security using advanced JavaScript and TypeScript practices.',
       responsibilities: [
        'Analyze and reverse engineer exploits and automation tools.',
        'Design anti-tamper and anti-cheat systems for the web platform.',
        'Build robust mechanisms to detect and block bots and macros.',
        'Ensure data integrity by preventing spoofing and tampering.',
       ],
       requirements: [
        'Experience in JavaScript/TypeScript security and threat modeling.',
        'Skilled in obfuscation, virtualization, and low-level systems programming.',
        'Strong understanding of encryption, cryptography, and secure key practices.',
        'Cross-functional collaboration with teams for secure architecture.',
       ],
       skills: [
        'JavaScript',
        'TypeScript',
        'Virtualization',
        'Obfuscation',
        'Cryptography',
        'Security Architecture',
        'Reverse Engineering',
        'Web Security',
        'Anti-Bot Systems',
       ],
      },
      {
       title: 'Fraud Prevention JavaScript Engineer',
       location: 'Denver, CO',
       postedDate: '2025-06-17',
       salary: '$80,000 - $135,000',
       description:
        'bet365 is looking for a JavaScript developer skilled in securing web platforms, blocking automation threats, and developing innovative fraud prevention mechanisms.',
       responsibilities: [
        'Develop web security systems using JavaScript and TypeScript.',
        'Implement obfuscation flows to protect against reverse engineering.',
        'Collaborate with app teams to integrate companion security checks.',
        'Monitor and respond to emerging threats in real time.',
       ],
       requirements: [
        'Knowledge of threat modeling and secure web development.',
        'Experience with anti-cheat and tamper-proofing mechanisms.',
        'Fluent in JavaScript and TypeScript with a security mindset.',
        'Experience with virtualization and memory protection.',
       ],
       skills: [
        'JavaScript',
        'TypeScript',
        'Anti-Cheat Systems',
        'Secure Web Applications',
        'Virtualization',
        'App Security',
        'Bot Detection',
        'Security Monitoring',
        'Encryption Algorithms',
       ],
      },
      {
       title: 'Web Platform Security Developer',
       location: 'Denver, CO',
       postedDate: '2025-06-17',
       salary: '$80K - $135K per year',
       description:
        'Protect one of the world’s busiest sports platforms from cyber threats. Use your frontend skills to build secure, hardened JavaScript applications.',
       responsibilities: [
        'Architect resilient defenses across frontend systems.',
        'Continuously adapt anti-fraud strategies to new threats.',
        'Mentor junior developers in secure coding practices.',
        'Use bytecode interpreters and obfuscation techniques for protection.',
       ],
       requirements: [
        'Advanced skills in JavaScript and TypeScript.',
        'Understanding of secure coding, encryption, and bot prevention.',
        'Ability to analyze memory and interpret low-level security issues.',
        'Strong problem-solving and forward-thinking security mindset.',
       ],
       skills: [
        'JavaScript',
        'Secure Development',
        'TypeScript',
        'Bot Detection',
        'Mentoring',
        'Memory Protection',
        'Code Obfuscation',
        'Fraud Prevention',
        'Cross-Team Collaboration',
       ],
      },
      {
       title: 'JavaScript Developer – Threat & Fraud Defense',
       location: 'Denver, Colorado',
       postedDate: '2025-06-17',
       salary: '$80,000 - $135,000 annually',
       description:
        'Help shape the security landscape at bet365 by developing browser-based fraud detection and defense solutions using advanced JavaScript techniques.',
       responsibilities: [
        'Build and maintain tools for detecting suspicious user activity.',
        'Secure user interactions from spoofing and tampering.',
        'Create layered browser defense systems.',
        'Develop advanced scripts for automation resistance.',
       ],
       requirements: [
        'Experience in threat analysis, obfuscation, and anti-fraud development.',
        'Strong background in JavaScript security engineering.',
        'Understanding of secure frontend development principles.',
        'Ability to lead and guide junior team members.',
       ],
       skills: [
        'JavaScript',
        'Anti-Fraud Engineering',
        'Obfuscation',
        'Tamper Detection',
        'Automation Defense',
        'Web Application Security',
        'TypeScript',
        'Cryptographic Protocols',
        'Threat Analysis',
       ],
      },
      {
       title: 'Secure JavaScript Engineer – Web Security',
       location: 'Denver, CO',
       postedDate: '2025-06-17',
       salary: '$80,000 to $135,000',
       description:
        'Be on the frontline of web security, using JavaScript and TypeScript to defend against bots, macros, and automated threats. Build next-gen protections in a collaborative security-focused team.',
       responsibilities: [
        'Detect, reverse engineer, and mitigate fraudulent automation.',
        'Implement code hardening techniques like obfuscation.',
        'Enhance client-side integrity and anti-cheat systems.',
        'Deploy tools for real-time fraud detection and blocking.',
       ],
       requirements: [
        'Strong JavaScript/TypeScript coding ability.',
        'Experience with fraud prevention and security modeling.',
        'Deep understanding of bytecode-level protection and virtualization.',
        'Commitment to proactive and innovative security practices.',
       ],
       skills: [
        'JavaScript',
        'TypeScript',
        'Client-Side Security',
        'Real-Time Detection',
        'Code Hardening',
        'Encryption',
        'Web Threat Modeling',
        'Security Analytics',
        'Automation Blocking',
       ],
      },
     ],
     'INDEED.com': [
      {
       title: 'JavaScript Developer',
       location: 'London, UK',
       postedDate: '2025-06-17',
       salary: 'Not disclosed',
       description:
        'Join Echobox, a fast-growing AI company revolutionizing online publishing, and help build intelligent, responsive UIs for data-driven products used by top publishers worldwide.',
       responsibilities: [
        'Collaborate with product and data science teams on frontend development.',
        'Build dynamic and responsive UIs that integrate with backend services.',
        'Ensure clean, efficient, maintainable code adhering to UX and accessibility standards.',
        'Improve performance, scalability, and reliability of frontend systems.',
       ],
       requirements: [
        'Degree in Computer Science or related field, or equivalent experience.',
        '1-2 years of frontend development experience.',
        'Strong knowledge of JavaScript, HTML, and CSS.',
        'Experience integrating frontend apps with RESTful APIs.',
       ],
       skills: [
        'JavaScript',
        'HTML/CSS',
        'REST APIs',
        'Responsive Web Design',
        'Git',
        'Web Performance',
        'Cross-Browser Compatibility',
       ],
      },
      {
       title: 'Frontend JavaScript Engineer',
       location: 'London',
       postedDate: '2025-06-17',
       salary: '£45,000 - £55,000 a year',
       description:
        'Work on next-generation frontend systems powering intelligent automation for online media outlets, supporting millions of users daily.',
       responsibilities: [
        'Design and implement high-performance UIs.',
        'Write accessible and standards-compliant frontend code.',
        'Collaborate with backend and design teams to launch features.',
        'Troubleshoot frontend issues and performance bottlenecks.',
       ],
       requirements: [
        'Experience building responsive web interfaces.',
        'Good understanding of frontend build tools and package managers.',
        'Experience with Git version control.',
        'Ability to work independently in a fast-paced environment.',
       ],
       skills: [
        'JavaScript',
        'CSS Frameworks (e.g., Tailwind, Bootstrap)',
        'Build Tools (Webpack, Vite)',
        'Git',
        'UI/UX Design Awareness',
        'Debugging',
        'Code Optimization',
       ],
      },
      {
       title: 'Junior JavaScript Developer',
       location: 'London',
       postedDate: '2025-06-17',
       salary: '£55,000 - £75,000 a year',
       description:
        'Echobox is seeking a junior developer eager to build intuitive, high-quality frontend experiences that help shape the future of digital publishing.',
       responsibilities: [
        'Support senior engineers in frontend tasks and project rollouts.',
        'Implement UI components based on design guidelines.',
        'Participate in code reviews and feature planning.',
        'Stay updated with frontend trends and tools.',
       ],
       requirements: [
        'Proficiency in JavaScript, HTML, CSS.',
        'Basic understanding of frontend frameworks and libraries.',
        'Familiarity with Git and build/deploy pipelines.',
        'Eagerness to learn and take on new challenges.',
       ],
       skills: [
        'JavaScript',
        'Frontend Frameworks (React, Vue, etc.)',
        'Version Control',
        'CSS Preprocessing',
        'Accessibility Standards',
        'Team Collaboration',
       ],
      },
      {
       title: 'UI-Focused JavaScript Developer',
       location: 'London',
       postedDate: '2025-06-17',
       salary: '£30,000 - £50,000 a year',
       description:
        'Focus on building engaging and highly usable user interfaces for a global AI-powered publishing platform. Work with passionate engineers to deliver seamless UX.',
       responsibilities: [
        'Implement pixel-perfect UIs from design mockups.',
        'Optimize for performance across devices and browsers.',
        'Ensure accessibility and responsiveness of interfaces.',
        'Enhance frontend architecture with scalability in mind.',
       ],
       requirements: [
        'Strong UI/UX intuition and frontend development experience.',
        'Experience in a SaaS or startup environment is a plus.',
        'Understanding of modern JavaScript and TypeScript features.',
        'Knowledge of secure web development practices.',
       ],
       skills: [
        'JavaScript',
        'TypeScript',
        'UI/UX Design Principles',
        'Responsive Layouts',
        'Security Best Practices',
        'Cross-Team Communication',
       ],
      },
      {
       title: 'Full-Time JavaScript Developer',
       location: 'London, UK',
       postedDate: '2025-06-17',
       salary: 'Not specified',
       description:
        'Join a collaborative team building next-gen AI products for online publishers. Contribute to a frontend stack that powers tools used by brands like Vogue and The Times.',
       responsibilities: [
        'Work with product and backend teams to shape frontend workflows.',
        'Deploy and maintain frontend build systems.',
        'Continuously enhance performance, accessibility, and usability.',
        'Participate in architecture decisions and tech evaluations.',
       ],
       requirements: [
        'Solid grasp of frontend build and deployment pipelines.',
        'Experience with JavaScript ES6+ and state management libraries.',
        'Comfortable working in Agile cross-functional teams.',
        'Proven problem-solving and debugging abilities.',
       ],
       skills: [
        'JavaScript (ES6+)',
        'Frontend Architecture',
        'Build Systems (e.g., Vite, Webpack)',
        'Agile Development',
        'TypeScript (preferred)',
        'Performance Optimization',
        'SaaS Experience (preferred)',
       ],
      },
     ],
    };
    return {
     title: `JavaScript Developer Jobs in ${country}`,
     data: countryData[country],
    };
   },
    },
     // Continue with this hare......
  
  'Front-End Developer': {
   color: 'linear-gradient(-90deg, #2B5E5E,rgb(110, 187, 187))',
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
      imagePath1: '/assets/image/jobs/frontend-rozee-1.png',
      imagePath2: '/assets/image/jobs/frontend-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/frontend-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/frontend-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/frontend-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/frontend-indeed-1.png',
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
      imagePath1: '/assets/image/jobs/jamStack-rozee-1.png',
      imagePath2: '/assets/image/jobs/jamStack-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/jamStack-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/jamStack-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/jamStack-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/jamStack-indeed-1.png',
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
      imagePath1: '/assets/image/jobs/mern-rozee-1.png',
      imagePath2: '/assets/image/jobs/mern-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/mern-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/mern-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/mern-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/mern-indeed-1.png',
     },
    };

    return {
     title: `MERN-Stack Developer in ${platform}`,
     data: [
      {
       shortDescription: platformData[platform].shortDescription,
       heading: 'About MERN-Stack Developer ',
       image1: platformData[platform].imagePath1,
       image2: platformData[platform].imagePath2,
      },
     ],
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
   content: (platform) => {
    // platform-specific data
    const platformData = {
     'ROZEE.pk': {
      imagePath1: '/assets/image/jobs/next-rozee-1.png',
      imagePath2: '/assets/image/jobs/next-rozee-2.png',
     },
     'CAREERJET.com': {
      imagePath1: '/assets/image/jobs/next-career-1.png',
     },
     'SIMPLYHIRED.com': {
      imagePath1: '/assets/image/jobs/next-simplyHired-1.png',
     },
     'GLASSDOOR.com': {
      imagePath1: '/assets/image/jobs/next-glassdoor-1.png',
     },
     'INDEED.com': {
      imagePath1: '/assets/image/jobs/next-indeed-1.png',
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
    <h3 className="tp-section-title">Jobs Posting  platforms</h3>
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
        <Table aria-label="job listings">
         <Box className="p-2">
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
