export const TRAININGS = {
  web: {
    title: 'Full Stack Web Development',
    length: '20 Weeks',
    hours: 120,
    packages: {
      basic: {
        title: 'Basic',
        price: {
          pkr: {
            code: 'PKR',
            amount: 45000,
          },
          usd: {
            code: 'USD',
            amount: 150,
          },
        },
        offerings: ['Live sessions', 'Course Materials', 'Assignments'],
      },
      standard: {
        title: 'Standard',
        price: {
          pkr: {
            code: 'PKR',
            amount: 75000,
          },
          usd: {
            code: 'USD',
            amount: 250,
          },
        },
        offerings: [
          'Live sessions',
          'Course Materials',
          'Assignments',
          'Quizzes',
          'Certificate',
        ],
      },
      premium: {
        title: 'Premium',
        price: {
          pkr: {
            code: 'PKR',
            amount: 120000,
          },
          usd: {
            code: 'USD',
            amount: 400,
          },
        },
        offerings: [
          'Live sessions',
          'Course Materials',
          'Assignments',
          'Quizzes',
          'Certificate',
          'One-on-One Mentoring',
          'Project Feedback',
          'Additional Resources',
        ],
      },
    },
    discounts: [
      {
        percentage: 20,
        audience: 'Early Bird',
      },
      {
        percentage: 50,
        audience: 'Disables',
      },
    ],
    notes: {
      scholarships: 'Scholarships are also available for deserving candidates.',
    },
    structure: {
      moduleOne: {
        title: 'Introduction to Web Development',
        duration: '1 Week',
        objective:
          'Understand the basics of web development, including how websites work and the technologies involved.',
        sessions: [
          {
            title: 'Session 1: Understanding the Web',
            segments: [
              'How websites work (Client-Server Model)',
              'Basics of web browsers and servers',
              'Introduction to domain names, hosting, and DNS',
            ],
          },
          {
            title: 'Session 2: Web Development Tools',
            segments: [
              'Overview of text editors (VS Code, Sublime Text)',
              'Introduction to version control with Git and GitHub',
              'Setting up the development environment',
            ],
          },
          {
            title: 'Session 3: Introduction to HTML',
            segments: [
              'What is HTML?',
              'Basic structure of an HTML document',
              'Creating your first webpage',
            ],
          },
        ],
      },
      moduleTwo: {
        title: 'HTML & CSS Basics',
        duration: '2-4 Week',
        objective:
          ' Learn how to structure content using HTML and style it with CSS.',
        sessions: [
          {
            title: 'Week 2: HTML Deep Dive',
            segments: [
              'Session 4: HTML Tags, Elements, and Attributes',
              'Session 5: Creating Lists, Tables, and Forms',
              'Session 6: Embedding Images, Videos, and Links',
            ],
          },
          {
            title: 'Week 3: Introduction to CSS',
            segments: [
              'Session 7: What is CSS? Internal, external, and inline styles.',
              'Session 8: CSS Selectors, Properties, and Values',
              'Session 9: CSS Box Model (Margin, Border, Padding, Content)',
            ],
          },
          {
            title: 'Week 4: Advanced CSS Techniques',
            segments: [
              'Session 10: Positioning and Layouts (Flexbox, Grid)',
              'Session 11: Responsive Design Basics (Media Queries)',
              'Session 12: Introduction to CSS Frameworks (Bootstrap)',
            ],
          },
        ],
      },
      moduleThree: {
        title: 'JavaScript Basics',
        duration: '5-7 Week',
        objective:
          'Gain a basic understanding of JavaScript and how it interacts with HTML/CSS.',
        sessions: [
          {
            title: 'Week 5: Introduction to JavaScript',
            segments: [
              'Session 13: What is JavaScript?',
              'Session 14: Variables, Data Types, and Operators',
              'Session 15: Functions and Events',
            ],
          },
          {
            title: 'Week 6: DOM Manipulation',
            segments: [
              'Session 16: Understanding the Document Object Model (DOM)',
              'Session 17: Selecting and Manipulating DOM Elements',
              'Session 18: Handling Events with JavaScript',
            ],
          },
          {
            title: 'Week 7: Advanced JavaScript Concepts',
            segments: [
              'Session 19: Loops and Conditional Statements',
              'Session 20: Arrays and Objects',
              'Session 21: Introduction to ES6+ Features (let/const, arrow functions, etc.)',
            ],
          },
        ],
      },
      moduleFour: {
        title: 'Working with APIs and AJAX',
        duration: '8th Week',
        objective:
          'Learn how to retrieve and display data using APIs and AJAX.',
        sessions: [
          {
            title: 'Session 22: What is an API?',
            segments: ['Introduction to REST APIs'],
          },
          {
            title: 'Session 23: Fetching Data with AJAX',
            segments: ['Using the Fetch API'],
          },
          {
            title: 'Session 24: Displaying API Data on the Webpage',
            segments: ['Creating a simple weather app using a public API'],
          },
        ],
      },
      moduleFive: {
        title: 'Introduction to Frontend Frameworks',
        duration: '9-10 Week',
        objective:
          'Get familiar with basic concepts of popular frontend frameworks.',
        sessions: [
          {
            title: 'Week 9: Introduction to React',
            segments: [
              'Session 25: What is React? Understanding components.',
              'Session 26: Creating a Simple React App',
              'Session 27: Working with State and Props',
            ],
          },
          {
            title: 'Week 10: Advanced React Basics',
            segments: [
              'Session 28: Handling Events in React',
              'Session 29: Using React Hooks (useState, useEffect & more)',
              'Session 30: Building a Small React Project',
            ],
          },
        ],
      },
      moduleSix: {
        title: 'Backend Development with Node.js',
        duration: '11-14 Week',
        objective:
          'Learn the fundamentals of backend development using Node.js and Express.',
        sessions: [
          {
            title: 'Week 11: Introduction to Node.js',
            segments: [
              'Session 31: What is Node.js?',
              'Session 32: Setting Up a Node.js Project',
              'Session 33: Understanding the Event Loop and Asynchronous Programming',
            ],
          },
          {
            title: 'Week 12: Express.js Basics',
            segments: [
              'Session 34: What is Express.js?',
              'Session 35: Routing in Express.js',
              'Session 36: Handling Form Data and Query Parameters',
            ],
          },
          {
            title: 'Week 13: Building RESTful APIs',
            segments: [
              'Session 37: RESTful API Design Principles',
              'Session 38: CRUD Operations with Express.js',
              'Session 39: Handling Errors and Middleware',
            ],
          },
          {
            title: 'Week 14: Authentication and Security',
            segments: [
              'Session 40: Introduction to Authentication',
              'Session 41: Implementing JWT-based Authentication',
              'Session 42: Securing APIs with Middleware',
            ],
          },
        ],
      },
      moduleSeven: {
        title: 'Database Management with MongoDB',
        duration: '15-17 Week',
        objective:
          'Understand how to work with MongoDB for data storage and retrieval.',
        sessions: [
          {
            title: 'Week 15: Introduction to MongoDB',
            segments: [
              'Session 43: What is MongoDB? Basics of NoSQL Databases.',
              'Session 44: Setting Up MongoDB and Compass',
              'Session 45: Understanding Documents, Collections, and Databases',
            ],
          },
          {
            title: 'Week 16: Working with Mongoose',
            segments: [
              'Session 46: Introduction to Mongoose',
              'Session 47: Defining Schemas and Models',
              'Session 48: Performing CRUD Operations with Mongoose',
            ],
          },
          {
            title: 'Week 17: Advanced MongoDB Concepts',
            segments: [
              'Session 49: Data Validation and Middleware in Mongoose',
              'Session 50: Aggregation Framework and Indexing',
              'Session 51: Database Security and Indexing',
            ],
          },
        ],
      },
      moduleEight: {
        title: 'Full Stack Project Development',
        duration: '18-19 Week',
        objective:
          'Apply front-end and back-end skills to build a full stack web application.',
        sessions: [
          {
            title: 'Week 18: Project Planning and Setup',
            segments: [
              'Session 52: Project Planning and Requirements Gathering',
              'Session 53: Setting Up the Frontend and Backend Environments',
              'Session 54: Database Schema Design and API Development',
            ],
          },
          {
            title: 'Week 19: Project Development',
            segments: [
              'Session 55: Frontend Integration with Backend APIs',
              'Session 56: Implementing Authentication and User Management',
              'Session 57: Finalizing the Project and Preparing for Deployment',
            ],
          },
        ],
      },
      moduleNine: {
        title: 'Version Control and Deployment',
        duration: '20 Week',
        objective:
          'Learn to use Git for version control and how to deploy a full stack application.',
        sessions: [
          {
            title: 'Session 58: Advanced Git and GitHub Collaboration',
            segments: ['Branching, merging, and resolving conflicts'],
          },
          {
            title: 'Session 59: Deploying the Full Stack Application',
            segments: ['Deployment using platforms like Heroku or Vercel'],
          },
          {
            title: 'Session 60: Project Presentation and Final Review',
            segments: ['Presenting the final project and receiving feedback'],
          },
        ],
      },
    },
  },
  mobile: {
    title: 'Mobile App Development',
    length: '16 Weeks',
    hours: 96,
    packages: {
      basic: {
        title: 'Basic',
        price: {
          pkr: {
            code: 'PKR',
            amount: 40000,
          },
          usd: {
            code: 'USD',
            amount: 130,
          },
        },
        offerings: ['Live sessions', 'Course Materials', 'Assignments'],
      },
      standard: {
        title: 'Standard',
        price: {
          pkr: {
            code: 'PKR',
            amount: 65000,
          },
          usd: {
            code: 'USD',
            amount: 215,
          },
        },
        offerings: [
          'Live sessions',
          'Course Materials',
          'Assignments',
          'Quizzes',
          'Certificate',
        ],
      },
      premium: {
        title: 'Premium',
        price: {
          pkr: {
            code: 'PKR',
            amount: 100000,
          },
          usd: {
            code: 'USD',
            amount: 330,
          },
        },
        offerings: [
          'Live sessions',
          'Course Materials',
          'Assignments',
          'Quizzes',
          'Certificate',
          'One-on-One Mentoring',
          'Project Feedback',
          'Additional Resources',
        ],
      },
    },
    discounts: [
      {
        percentage: 20,
        audience: 'Early Bird',
      },
      {
        percentage: 50,
        audience: 'Disables',
      },
    ],
    notes: {
      scholarships: 'Scholarships are also available for deserving candidates.',
    },
    structure: {
      moduleOne: {
        title: 'Introduction to Mobile App Development',
        duration: '1 Week',
        objective:
          'Understand the basics of mobile app development, including the mobile ecosystem, and set up the development environment for React Native.',
        sessions: [
          {
            title: 'Session 1: Overview of Mobile App Development',
            segments: [
              'Mobile platforms: Android, iOS',
              'Native vs. Cross-platform development',
              'Introduction to React Native and its advantages',
            ],
          },
          {
            title: 'Session 2: Setting Up the Development Environment',
            segments: [
              'Installing Node.js, npm, and React Native CLI',
              'Setting up Android Studio and Xcode for Android and iOS development',
              'Running your first React Native app (Hello World)',
            ],
          },
          {
            title: 'Session 3: Understanding React Native Architecture',
            segments: [
              'Overview of React Native’s architecture',
              'The role of JavaScript and native code',
              'Components, Views, and the Virtual DOM',
            ],
          },
        ],
      },
      moduleTwo: {
        title: 'JavaScript and React Basics',
        duration: '2-3 Week',
        objective:
          ' Learn the fundamentals of JavaScript and React, which form the foundation of React Native development.',
        sessions: [
          {
            title: 'Week 2: Introduction to JavaScript',
            segments: [
              'Session 4: JavaScript Basics: Variables, Data Types, and Operators',
              'Session 5: Functions, Loops, and Conditionals',
              'Session 6: Objects, Arrays, and ES6+ Features (arrow functions, let/const)',
            ],
          },
          {
            title: 'Week 3: Introduction to React',
            segments: [
              'Session 7: Understanding React Components',
              'Session 8: JSX, Props, and State in React',
              'Session 9: Handling Events and Rendering Lists',
            ],
          },
        ],
      },
      moduleThree: {
        title: 'React Native UI Development',
        duration: '4-7 Week',
        objective:
          'Gain proficiency in building user interfaces using React Native’s components and styling.',
        sessions: [
          {
            title: 'Week 4: Core Components of React Native',
            segments: [
              'Session 10: Working with Core Components (Text, View, Image, ScrollView)',
              'Session 11: Handling User Input with TextInput',
              'Session 12: Buttons, Touchable, and Gestures in React Native',
            ],
          },
          {
            title: 'Week 5: Styling in React Native',
            segments: [
              'Session 13: Introduction to Flexbox for Layout',
              'Session 14: Styling Components with StyleSheet',
              'Session 15: Responsive Design with Dimensions and PixelRatio',
            ],
          },
          {
            title: 'Week 6: Navigation in React Native',
            segments: [
              'Session 16: Introduction to React Navigation',
              'Session 17: Stack Navigator and Tab Navigator',
              'Session 18: Passing Data Between Screens and Navigating',
            ],
          },
          {
            title: 'Week 7: Advanced UI Components',
            segments: [
              'Session 19: Working with FlatList and SectionList',
              'Session 20: Modals, Alerts, and Action Sheets',
              'Session 21: Animations in React Native using the Animated API',
            ],
          },
        ],
      },
      moduleFour: {
        title: 'Working with APIs and Backend Integration',
        duration: '8-10 Week',
        objective:
          'Learn how to integrate backend services and APIs into your React Native apps.',
        sessions: [
          {
            title: 'Week 8: Fetching Data from APIs',
            segments: [
              'Session 22: Introduction to RESTful APIs',
              'Session 23: Making HTTP Requests with fetch and axios',
              'Session 24: Handling Asynchronous Data with Promises and Async/Await',
            ],
          },
          {
            title: 'Week 9: Backend Integration',
            segments: [
              'Session 25: Setting up a Simple Backend with Node.js/Express or Firebase',
              'Session 26: Fetching and Displaying Data from the Backend',
              'Session 27: Data Persistence with AsyncStorage and Redux',
            ],
          },
          {
            title: 'Week 10: Authentication and Security',
            segments: [
              'Session 28: Implementing Authentication with Firebase/Auth0',
              'Session 29: Managing User Sessions and Tokens',
              'Session 30: Securing API Requests and Sensitive Data',
            ],
          },
        ],
      },
      moduleFive: {
        title: 'State Management and App Architecture',
        duration: '11-12 Week',
        objective:
          'Understand advanced state management techniques and how to structure a React Native app.',
        sessions: [
          {
            title: 'Week 11: State Management with Context API',
            segments: [
              'Session 31: Introduction to Context API',
              'Session 32: Managing Global State with Context',
              'Session 33: Building a Simple App with Context API',
            ],
          },
          {
            title: 'Week 12: Advanced State Management with Redux',
            segments: [
              'Session 34: Introduction to Redux and its Principles',
              'Session 35: Setting Up Redux in a React Native App',
              'Session 36: Handling Actions, Reducers, and Middleware',
            ],
          },
        ],
      },
      moduleSix: {
        title: 'Testing and Debugging',
        duration: '13 Week',
        objective:
          'Learn how to test and debug React Native apps to ensure quality and performance.',
        sessions: [
          {
            title: 'Session 37: Introduction to Testing in React Native',
            segments: [
              'Unit Testing, Integration Testing, and End-to-End Testing',
            ],
          },
          {
            title: 'Session 38: Writing and Running Tests with Jest and Enzyme',
            segments: ['Setting up test cases and mocking data'],
          },
          {
            title: 'Session 39: Debugging React Native Apps',
            segments: [
              'Using React Native Debugger, Flipper, and console logs',
            ],
          },
        ],
      },
      moduleSeven: {
        title: 'Deployment and Distribution',
        duration: '14 Week',
        objective:
          'Learn how to prepare and deploy your React Native app to the Google Play Store and Apple App Store.',
        sessions: [
          {
            title: 'Session 40: Preparing Your App for Release',
            segments: [
              'Configuring app settings, icons, splash screens, and permissions',
            ],
          },
          {
            title: 'Session 41: Building and Signing APKs/Apps',
            segments: [
              'Generating signed APKs for Android and .ipa files for iOS',
            ],
          },
          {
            title:
              'Session 42: Publishing Your App to the Play Store and App Store',
            segments: [
              'Step-by-step guide to app submission and handling reviews',
            ],
          },
        ],
      },
      moduleEight: {
        title: 'Final Project',
        duration: '15-16 Week',
        objective:
          'Apply all the knowledge and skills learned throughout the course to develop a complete React Native mobile application.',
        sessions: [
          {
            title: 'Week 15: Project Planning and Setup',
            segments: [
              'Session 43: Project Idea Selection and Planning',
              'Session 44: Setting Up the Project and Initial Development',
              'Session 45: Implementing Core Features and UI',
            ],
          },
          {
            title: 'Week 16: Project Development and Presentation',
            segments: [
              'Session 46: Finalizing the App Development',
              'Session 47: Testing and Debugging the Final Project',
              'Session 48: Project Presentation and Review',
            ],
          },
        ],
      },
    },
  },
};
