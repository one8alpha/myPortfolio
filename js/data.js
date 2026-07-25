/**
 * Portfolio Data Store - Mayur Vitekar (Aspiring Java & Frontend Developer)
 * Single Source of Truth for portfolio content based on Mayur's Resume & GitHub (one8alpha).
 */

export const portfolioData = {
  profile: {
    name: "Mayur Vitekar",
    title: "Aspiring Java Full-Stack & Frontend Developer",
    roles: [
      "Aspiring Java Full-Stack Developer",
      "React & Next.js Enthusiast",
      "Spring Boot & Microservices",
      "Open-Source Contributor (@one8alpha)"
    ],
    bio: "Computer Software Engineering student at CSMSS Chh. Shahu College (Expected 2028). Passionate about hands-on coding in Java, Spring Boot, Python, React, and Next.js. Active contributor to EaseMotion CSS and open-source projects.",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    email: "vitekarmayur76@gmail.com",
    cvLink: "/assets/Mayur_Vitekar_Resume.html",
    githubUsername: "one8alpha",
    socials: [
      { name: "LinkedIn", icon: "ri-linkedin-box-fill", url: "https://www.linkedin.com/in/vitekarmayur/" },
      { name: "GitHub", icon: "ri-github-fill", url: "https://github.com/one8alpha" },
      { name: "Email", icon: "ri-mail-fill", url: "mailto:vitekarmayur76@gmail.com" }
    ]
  },

  stats: [
    { number: "B.Tech '28", label: "Software Engineering" },
    { number: "7+", label: "GitHub Repositories" },
    { number: "92.8%", label: "SSC Academic Distinction" },
    { number: "GSSoC", label: "Open Source Contributor" }
  ],

  skillCategories: [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend Development" },
    { id: "backend", label: "Backend & Systems" },
    { id: "core", label: "Core CS & Tools" }
  ],

  skills: [
    { name: "Java & OOP", category: "backend", level: 90, icon: "ri-code-box-line" },
    { name: "Spring Boot", category: "backend", level: 85, icon: "ri-leaf-line" },
    { name: "JavaScript (ES6+) & TypeScript", category: "frontend", level: 90, icon: "ri-code-s-slash-line" },
    { name: "React.js & Next.js", category: "frontend", level: 88, icon: "ri-reactjs-line" },
    { name: "HTML5, CSS3 & Tailwind CSS", category: "frontend", level: 95, icon: "ri-html5-line" },
    { name: "EaseMotion CSS", category: "frontend", level: 92, icon: "ri-sparkling-line" },

    { name: "Python & OpenCV", category: "core", level: 84, icon: "ri-python-line" },
    { name: "Apache Kafka", category: "backend", level: 78, icon: "ri-loop-right-line" },
    { name: "H2 SQL & Firebase", category: "backend", level: 82, icon: "ri-database-2-line" },
    { name: "REST APIs & Microservices", category: "backend", level: 86, icon: "ri-git-branch-line" },

    { name: "Data Structures & Algorithms (DSA)", category: "core", level: 85, icon: "ri-node-tree" },
    { name: "C Programming", category: "core", level: 80, icon: "ri-terminal-box-line" },
    { name: "Git & GitHub Workflow", category: "core", level: 90, icon: "ri-github-line" },
    { name: "Maven & VS Code", category: "core", level: 85, icon: "ri-tools-line" }
  ],

  projectCategories: [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Applications" },
    { id: "python", label: "Python & AI" },
    { id: "simulation", label: "Simulations & Backend" },
    { id: "opensource", label: "Open Source" }
  ],

  projects: [
    {
      id: "taskwise-app",
      title: "Taskwise Management System",
      subtitle: "Next.js Task Management Platform • TypeScript & Firebase",
      category: "web",
      icon: "ri-task-line",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      shortDesc: "Built a Next.js task management app with Firebase hosting and backend integration for seamless task tracking.",
      longDesc: "Taskwise is a responsive, modern task management application built with Next.js and TypeScript. Features modular component architecture, real-time Firebase database data sync, and Tailwind CSS styling for high usability across all devices.",
      features: [
        "Developed modular, reusable UI components using TypeScript for strong type safety and scalability",
        "Integrated Firebase Authentication and Firestore database for real-time task state synchronization",
        "Designed a sleek, responsive user interface using Tailwind CSS improving usability across desktop and mobile devices",
        "Hosted on Firebase with fast load times and client-side routing optimization"
      ],
      techStack: ["Next.js", "TypeScript", "React", "Firebase", "Tailwind CSS"],
      liveLink: "https://github.com/one8alpha/taskwise",
      repoLink: "https://github.com/one8alpha/taskwise"
    },
    {
      id: "face-detection-system",
      title: "Real-time Face Detection System",
      subtitle: "Computer Vision & Python OpenCV Project",
      category: "python",
      icon: "ri-scan-fill",
      tags: ["Python", "OpenCV", "Computer Vision", "AI"],
      shortDesc: "Real-time face detection application built in Python utilizing OpenCV haar cascades for fast frame processing.",
      longDesc: "A computer vision project implementing real-time facial feature tracking and boundary box rendering over live camera feeds and image streams using Python and OpenCV.",
      features: [
        "Real-time video stream processing and face boundary box localization",
        "Integrated OpenCV classifiers for fast detection under variable lighting conditions",
        "Clean Python project structure designed for easy integration into security workflows"
      ],
      techStack: ["Python 3", "OpenCV", "Computer Vision", "Git"],
      liveLink: "https://github.com/one8alpha/FaceDetectionSystem",
      repoLink: "https://github.com/one8alpha/FaceDetectionSystem"
    },
    {
      id: "easemotion-css",
      title: "EaseMotion CSS",
      subtitle: "Animation-first Open Source CSS Framework",
      category: "opensource",
      icon: "ri-sparkling-fill",
      tags: ["CSS3", "Open Source", "GSSoC", "Animations"],
      shortDesc: "Contributed key CSS keyframe animations and utility classes to the open-source EaseMotion CSS framework.",
      longDesc: "Active participant in GirlScript Summer of Code (GSSoC). Contributed clean, reusable CSS animation presets and transition utilities to the EaseMotion CSS framework repository.",
      features: [
        "Authored lightweight, zero-dependency CSS `@keyframes` transitions for smooth web interactions",
        "Collaborated with open-source maintainers through GitHub Pull Requests and peer code reviews",
        "Ensured cross-browser CSS property compatibility and responsive component behavior"
      ],
      techStack: ["CSS3", "HTML5", "Git", "GitHub", "GSSoC"],
      liveLink: "https://github.com/one8alpha/EaseMotion-css",
      repoLink: "https://github.com/one8alpha/EaseMotion-css"
    },
    {
      id: "jpmorgan-chase-sim",
      title: "JPMorgan Chase Software Engineering Simulation",
      subtitle: "Forage Simulation • Microservices & Transaction Processing",
      category: "simulation",
      icon: "ri-bank-line",
      tags: ["Spring Boot", "Kafka", "H2 SQL", "REST API", "Maven"],
      shortDesc: "Integrated Apache Kafka into Spring Boot microservices for high-volume transaction processing and balance querying.",
      longDesc: "Software engineering job simulation completed through Forage for JPMorgan Chase. Developed robust Spring Data JPA models with H2 SQL database for validation and transaction persistence.",
      features: [
        "Integrated Apache Kafka messaging into Spring Boot microservices for high-throughput transaction processing",
        "Designed Spring Data JPA entity models with H2 SQL database persistence and validation rules",
        "Connected external REST Incentive API to enhance transactional workflows",
        "Developed clean REST endpoints for querying account balances with strict architectural boundaries",
        "Ensured software reliability via Maven unit test suites and debugger-driven code inspection"
      ],
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "Apache Kafka", "H2 SQL", "Maven", "REST API"],
      liveLink: "https://github.com/one8alpha",
      repoLink: "https://github.com/one8alpha"
    }
  ],

  experience: [
    {
      role: "B.Tech in Computer Software Engineering",
      company: "CSMSS Chh. Shahu College",
      period: "Expected June 2028",
      location: "Chhatrapati Sambhajinagar, MH, India",
      description: "Pursuing undergraduate degree in Computer Science & Engineering with focus on Java, Spring Boot, React, Next.js, and Software Engineering.",
      achievements: [
        "Building strong foundation in Computer Science principles, algorithms, and web software engineering",
        "Active member of Microsoft Student Developer Community"
      ]
    },
    {
      role: "Team Lead",
      company: "Farmigo Project",
      period: "Project Leadership",
      location: "Chhatrapati Sambhajinagar, MH, India",
      description: "Led a cross-functional team of student developers to build the Farmigo agricultural platform.",
      achievements: [
        "Directed cross-functional team members, ensuring timely project delivery and milestone tracking",
        "Mentored peers in technical workflows, code structure, and Git/GitHub collaboration",
        "Streamlined development workflows and boosted efficiency across deliverables"
      ]
    },
    {
      role: "Open-Source Contributor",
      company: "GirlScript Summer of Code (GSSoC) / EaseMotion CSS",
      period: "Open Source Initiative",
      location: "GitHub (@one8alpha)",
      description: "Engaged in open-source software development, contributing modular CSS animation features.",
      achievements: [
        "Authored CSS keyframes and utility components for EaseMotion CSS framework",
        "Submitted pull requests, resolved open issues, and adhered to community coding standards",
        "Collaborated with global developers through open-source GitHub workflows"
      ]
    },
    {
      role: "HSC & SSC Academic Record",
      company: "Chhatrapati School & Junior College",
      period: "Completed",
      location: "Chhatrapati Sambhajinagar, MH, India",
      description: "High academic distinction in Secondary and Higher Secondary Education.",
      achievements: [
        "SSC Distinction: 92.8%",
        "HSC First Class: 69%"
      ]
    }
  ],

  testimonials: [
    {
      quote: "Mayur demonstrated exceptional technical discipline during the JPMorgan Chase Software Engineering simulation on Forage, building clean REST microservices and integrating Spring Boot with Kafka.",
      author: "Forage Simulation Evaluation",
      role: "JPMorgan Chase Engineering Simulation"
    },
    {
      quote: "As Team Lead on Farmigo, Mayur showed strong technical leadership, guiding peers effectively, maintaining team momentum, and driving project delivery on time.",
      author: "Farmigo Project Review",
      role: "Academic Leadership Feedback"
    },
    {
      quote: "Mayur is a proactive open-source contributor (@one8alpha) with impressive foundations in Java, Spring Boot, React, Next.js, and Python. He consistently writes clean, structured code.",
      author: "Open Source Community",
      role: "GSSoC & GitHub Review"
    }
  ]
};
