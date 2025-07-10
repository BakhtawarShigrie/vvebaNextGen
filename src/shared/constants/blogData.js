export const blogListing = {
 courses: [
  {
   id: 1,
   title: 'HTML 5',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/01html.png',
   description:
    'HTML (HyperText Markup Language) is the backbone of every webpage. It structures content by using elements like headings, paragraphs, links, images, and lists. Each HTML document starts with a <!DOCTYPE html> declaration and is made up of elements enclosed in angle brackets, such as <p> for paragraphs or <a> for links. HTML uses a nested structure where elements can be placed inside others to create complex layouts. Attributes like href, src, and alt add more functionality and context. As a beginner, learning how to properly structure your content with HTML ensures your page is readable, accessible, and ready for styling and scripting. Its important to understand semantic elements like <header>, <main>, and <footer> to improve SEO and accessibility. Mastering HTML gives you full control over how content is displayed and prepares you for advanced front-end technologies that build on this foundation.',
  },
  {
   id: 2,
   title: 'CSS 3',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/02css3.png',
   description:
    'CSS (Cascading Style Sheets) controls the look and layout of your website. It styles HTML elements by defining colors, fonts, spacing, and positions. CSS can be written in three ways: inline (inside an element), internal (in a <style> tag in the HTML head), or external (in a separate .css file). CSS works using selectors and declarations, such as p { color: red; }, which turns all paragraph text red. Beginners learn key concepts like the box model, which includes content, padding, border, and margin, and layout systems like Flexbox and Grid, which allow for precise arrangement of content. Responsive design is achieved using media queries, which adjust styling for different screen sizes. CSS3 introduced animations and transitions to add visual effects. Mastering CSS is essential to make your web pages user-friendly, visually attractive, and mobile-friendly.',
  },
  {
   id: 3,
   title: 'JavaScript',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/03js.png',
   description:
    'JavaScript adds interactivity and logic to web pages. It allows developers to create dynamic features like dropdown menus, sliders, form validation, and content updates without reloading the page. JavaScript runs directly in the browser and can manipulate HTML and CSS through the Document Object Model (DOM). Beginners start with understanding variables, data types, functions, conditionals, loops, and events. JavaScript also interacts with APIs to fetch and display data from servers using fetch() or older methods like AJAX. Learning DOM manipulation helps developers dynamically change the structure and content of web pages based on user actions. JavaScript is a core technology in frontend development and is also used on the backend with environments like Node.js. It is vital for any web developer who wants to build interactive, engaging, and real-time web experiences.',
  },
  {
   id: 4,
   title: 'Bootstrap',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/04bootstraps.png',
   description:
    'Bootstrap is a popular CSS framework that helps beginners quickly build responsive and modern websites. It provides pre-styled components like buttons, forms, navigation bars, modals, and cards, which reduce the need to write custom CSS. Bootstrap uses a grid system (based on 12 columns) that makes it easy to create flexible layouts for different screen sizes. Developers include Bootstrap in a project by linking its CDN or downloading the files locally. It also offers utility classes like text-center, mt-3, or bg-primary to apply common styles quickly. JavaScript plugins included with Bootstrap add interactivity, like carousels and dropdowns, without writing custom JavaScript. For beginners, Bootstrap is a time-saving tool that allows them to focus on layout and functionality without being overwhelmed by CSS complexity. It’s also useful for building prototypes and learning responsive design.',
  },
  {
   id: 5,
   title: 'Tailwind CSS',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/05tailwind.png',
   description:
    'Tailwind CSS is a utility-first CSS framework that offers low-level utility classes to build custom designs directly in your HTML. Unlike traditional frameworks like Bootstrap, which come with pre-designed components, Tailwind encourages you to create your own components using utility classes like p-4, text-center, bg-blue-500, etc. This makes styling more consistent and faster once you’re familiar with it. Tailwind supports responsive design out of the box using classes like md:w-1/2 or lg:flex. It also includes dark mode, theming, and easy customization via configuration files. Beginners find Tailwind powerful once they get past the initial learning curve because they can style directly in markup without switching between CSS and HTML. It promotes design consistency and is loved for speeding up UI development, especially in modern frontend frameworks like React or Vue.',
  },
  {
   id: 6,
   title: 'Git',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/06git.png',
   description:
    'Git is a version control system that allows developers to track and manage changes in their code over time. It lets you create checkpoints (called commits) so you can go back to previous versions if something breaks. Beginners learn to initialize a repository with git init, track changes with git add, save them using git commit, and view history using git log. Git also enables collaboration through branching, where different features or bug fixes are developed separately and later merged. Platforms like GitHub use Git to host repositories online, enabling team collaboration, code reviews, and portfolio building. Learning Git early is essential, as its used in almost all professional development environments. It not only prevents code loss but also allows you to work efficiently in teams or contribute to open-source projects.',
  },
  {
   id: 7,
   title: 'Git Hub',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/07github.png',
   description:
    'GitHub is a cloud-based platform that hosts Git repositories, making it easier to share code and collaborate with others. Beginners learn to push their local code to GitHub using git remote add and git push, making their work accessible from anywhere. GitHub also offers features like pull requests for collaboration, issue tracking for bug reporting, and GitHub Pages for hosting static websites for free. It acts like a portfolio for developers, allowing them to showcase their projects and contributions. You can follow other developers, fork repositories, and even contribute to open-source projects. GitHub is widely used in the industry, so mastering it helps beginners not only back up their work but also prepare for real-world development workflows. Its also a key part of CI/CD (continuous integration/deployment) pipelines used in advanced projects.',
  },
  {
   id: 8,
   title: 'Responsive Design',
   image:
    'https://vveba.s3.eu-north-1.amazonaws.com/blogs/08.responsiveDesign.png',
   description:
    'Responsive design ensures that websites work well on all screen sizes—mobile, tablet, laptop, and desktop. It uses flexible layouts, images, and CSS media queries to adjust elements based on the device’s width and height. Beginners learn to use percentages and relative units like em, rem, and vw/vh instead of fixed pixels. Media queries are used to apply different styles at various breakpoints, like @media (max-width: 768px). Frameworks like Bootstrap or tools like Flexbox and Grid simplify responsive design by providing flexible structures. Designing mobile-first is a common strategy where the site is designed for smaller screens first and then enhanced for larger devices. With more people browsing on mobile, responsive design is a must-have skill for frontend developers to create user-friendly, accessible experiences across all devices.',
  },
  {
   id: 9,
   title: 'DOM (Document Object Model)',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/09DOM.png',
   description:
    'The DOM represents the structure of an HTML document as a tree of objects that JavaScript can access and manipulate. Each HTML element is a node in this tree. With JavaScript, developers can select elements using document.querySelector() or getElementById(), and then change content, attributes, or styles dynamically. For example, clicking a button can trigger a function that updates text or hides an image. Events like click, submit, and keydown are tied to DOM elements to make web pages interactive. Understanding the DOM is essential for creating dynamic user interfaces, handling user input, and building applications that respond in real time. Beginners must get comfortable navigating and modifying the DOM because its the foundation of frontend interactivity and a crucial step before learning frameworks like React or Vue.',
  },
  {
   id: 10,
   title: 'APIs (Fetch/AJAX)',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/10fetch-AJAX.png',
   description:
    'APIs (Application Programming Interfaces) allow websites to communicate with external services or databases. Frontend developers use APIs to fetch data (like weather, news, or user info) and display it dynamically on a web page. The fetch() method in JavaScript is a modern way to make HTTP requests. AJAX (Asynchronous JavaScript and XML) is the older approach, often using XMLHttpRequest. Both allow the page to update content without reloading, enhancing the user experience. For example, when a user types in a search bar and results appear immediately, that’s often powered by an API call. Beginners learn how to use fetch(), handle responses with .then() and .catch(), and work with JSON data. Understanding APIs is crucial for integrating real-world data into your apps, connecting to backend systems, or building full-stack applications.',
  },
  {
   id: 11,
   title: 'jQuery',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/11Jquery.png',
   description:
    'jQuery is a fast, lightweight JavaScript library that simplifies HTML DOM manipulation, event handling, animations, and AJAX calls. It was created to make writing JavaScript easier and to ensure cross-browser compatibility during the early days of web development. With syntax like $("#element").hide() or $(".btn").click(function(){ ... }), jQuery allows beginners to perform common tasks with less code compared to vanilla JavaScript. Although its usage has declined with the rise of modern frameworks like React, Vue, and native JavaScript improvements, jQuery still appears in many older codebases and legacy systems. Learning it helps beginners understand how abstraction libraries work and gain quick access to DOM interactions and animations. However, it’s generally considered optional for modern frontend development, and developers are encouraged to eventually move towards pure JavaScript or newer frameworks for long-term projects.',
  },
  {
   id: 12,
   title: 'React (Optional Intro)',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/12React.png',
   description:
    'React is a powerful JavaScript library developed by Facebook for building dynamic, component-based user interfaces. It allows developers to break down the UI into small, reusable pieces called components. React uses a virtual DOM to efficiently update only the parts of the page that change, which improves performance. Beginners start with functional components, JSX (HTML-like syntax in JavaScript), and the concept of props and state to manage data. React also introduces the use of hooks like useState and useEffect to handle logic and lifecycle behavior in components. Though more advanced than HTML/CSS/JS basics, React is beginner-friendly due to its modular nature and massive community support. It’s widely used in industry and is often the next step after mastering core frontend skills. Knowing React greatly increases your job opportunities in modern web development.',
  },
  {
   id: 13,
   title: 'Web Performance Optimization Techniques',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/12React.png',
   description:
    'Discover proven strategies to make your websites load faster and deliver better user experiences. Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.',
  },
  {
   id: 14,
   title: 'Web Performance Optimization Techniques',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/12React.png',
   description:
    'Discover proven strategies to make your websites load faster and deliver better user experiences. Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.',
  },
  {
   id: 15,
   title: 'Web Performance Optimization Techniques',
   image: 'https://vveba.s3.eu-north-1.amazonaws.com/blogs/12React.png',
   description:
    'Discover proven strategies to make your websites load faster and deliver better user experiences. Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.Transition from JavaScript to TypeScript with this practical guide covering types, interfaces, and more.',
  },
 ],
};
