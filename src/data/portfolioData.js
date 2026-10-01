export const personalInfo = {
  name: "NIHAL RAY",
  title: "B.Tech CSE (AI & ML) | Python | Generative AI | Computer Vision | DSA | MERN Stack",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  university: "Uttaranchal University, Dehradun",
  location: "Dehradun, Uttarakhand, India",
  phone: "+91 91222 24552",
  graduationYear: "2024 – 2028",
  status: "Currently Pursuing",
  email: "nihalray03@gmail.com",
  github: "https://github.com/nihalray01",
  githubUsername: "nihalray01",
  linkedin: "https://www.linkedin.com/in/nihalray-80b270323",
  linkedinUsername: "nihalray-80b270323",
  liveProject: "https://splen-ai.vercel.app",
  summary: "B.Tech student specializing in AI & Machine Learning with hands-on experience in Computer Vision, NLP, Generative AI and full-stack (MERN) development. Solved 100+ DSA problems on LeetCode in Python. Built and deployed ML and web projects, completed an AI internship, and earned 15+ industry certifications from Oracle, MongoDB, Deloitte, JPMorgan Chase, Infosys and Pregrad. Seeking an AI/ML, Data Science or Software Development role to build practical, impactful AI solutions.",
  bio: "B.Tech student specializing in AI & Machine Learning with hands-on experience in Computer Vision, NLP, Generative AI and full-stack (MERN) development. Solved 100+ DSA problems on LeetCode in Python. Built and deployed ML and web projects, completed an AI internship, and earned 15+ industry certifications.",
  roles: [
    "B.Tech CSE (AI & ML) Student",
    "Generative AI & RAG Developer",
    "Computer Vision & NLP Enthusiast",
    "DSA Practitioner (100+ LeetCode)",
    "Full-Stack MERN Developer"
  ]
};

export const stats = [
  { label: "LeetCode Solved", value: "100+ DSA Problems", icon: "Code2", color: "from-sky-500 to-blue-600" },
  { label: "Industry Credentials", value: "15+ Certifications", icon: "Award", color: "from-indigo-500 to-purple-600" },
  { label: "AI Internship", value: "Codec Technologies", icon: "Briefcase", color: "from-emerald-500 to-teal-600" },
  { label: "Degree Program", value: "B.Tech CSE (AI & ML)", icon: "GraduationCap", color: "from-purple-500 to-pink-600" },
];

export const skillCategories = [
  {
    category: "Languages & DSA",
    icon: "Code",
    description: "Core programming languages and algorithmic problem solving",
    skills: [
      { name: "Python", level: 92, tag: "Primary" },
      { name: "JavaScript", level: 85, tag: "Full-Stack" },
      { name: "SQL", level: 80, tag: "Databases" },
      { name: "Data Structures & Algorithms", level: 88, tag: "100+ LeetCode" },
    ]
  },
  {
    category: "AI, Machine Learning & Generative AI",
    icon: "Brain",
    description: "Model building, NLP, RAG, AI Agents, and Neural Networks",
    skills: [
      { name: "Generative AI & RAG", level: 90, tag: "LLMs & Vector Search" },
      { name: "AI Agents & Agent Studio", level: 85, tag: "Oracle & LangChain" },
      { name: "Machine Learning (Supervised/Regression)", level: 88, tag: "Scikit-Learn" },
      { name: "NLP & Classification", level: 85, tag: "Text Preprocessing" },
      { name: "Deep Learning (Fundamentals)", level: 75, tag: "TensorFlow" },
    ]
  },
  {
    category: "Computer Vision & Data Science",
    icon: "Eye",
    description: "Webcam tracking, landmark detection, EDA, and analytics",
    skills: [
      { name: "OpenCV & MediaPipe", level: 90, tag: "Webcam & Tracking" },
      { name: "Pandas & NumPy", level: 92, tag: "Data Processing" },
      { name: "EDA & Data Visualization", level: 88, tag: "Analytics" },
      { name: "Scikit-Learn", level: 88, tag: "Model Evaluation" },
    ]
  },
  {
    category: "Web, Databases & Tools",
    icon: "Globe",
    description: "MERN Stack full-stack web development and cloud tools",
    skills: [
      { name: "MERN Stack (MongoDB, Express, React, Node.js)", level: 85, tag: "Full-Stack" },
      { name: "REST APIs & MongoDB Atlas", level: 88, tag: "Backend & Cloud" },
      { name: "Git, GitHub & Vercel", level: 90, tag: "CI/CD & Deployment" },
      { name: "VS Code & Jupyter Notebook", level: 95, tag: "Development" },
    ]
  }
];

export const projects = [
  {
    id: "splen-os",
    title: "Splen OS – AI-Powered Web Application",
    subtitle: "Full-Stack MERN Application with Generative AI Features",
    category: "Generative AI & MERN",
    filterTag: "web",
    description: "Developed and deployed a full-stack web application integrating Generative AI features, built during the AI Fusion 2026 MERN Stack with GenAI workshop. Deployed live on Vercel with GitHub version control and continuous deployment.",
    highlights: [
      "Full-stack MERN web application incorporating GenAI workflows",
      "Built during AI Fusion 2026 workshop with Splen Technologies & Uttaranchal University",
      "Deployed live on Vercel with continuous integration"
    ],
    tech: ["JavaScript", "MERN Stack", "Generative AI", "Vercel", "GitHub"],
    github: "https://github.com/nihalray01",
    demo: "https://splen-ai.vercel.app",
    featured: true,
    badge: "Live Web App"
  },
  {
    id: "air-writing-recognition",
    title: "Air Writing Recognition Using Webcam",
    subtitle: "Real-Time Touchless Digit Capture & Recognition",
    category: "Computer Vision",
    filterTag: "vision",
    description: "Built a real-time touchless system that tracks hand landmarks via webcam and captures finger movements as air-drawn digits. Converted air-drawn strokes into images and recognized digits using machine learning models.",
    highlights: [
      "Real-time webcam hand landmark tracking via OpenCV & MediaPipe",
      "Finger movement stroke capture rendered to digit images",
      "ML classifier for high-accuracy handwritten digit recognition"
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "Machine Learning"],
    github: "https://github.com/nihalray01/air-writing-recognition",
    demo: "#",
    featured: true,
    badge: "Computer Vision"
  },
  {
    id: "email-spam-detection",
    title: "Email Spam Detection System",
    subtitle: "Machine Learning Classifier with NLP Text Preprocessing",
    category: "AI & ML",
    filterTag: "ai",
    description: "Built an ML classifier to detect spam emails using text preprocessing, tokenization, and feature extraction. Evaluated models using accuracy, precision, recall, and confusion matrix.",
    highlights: [
      "Text preprocessing, tokenization, and TF-IDF feature extraction",
      "Comprehensive evaluation via accuracy, precision, recall, and confusion matrix",
      "Deployed machine learning model interface"
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP"],
    github: "https://github.com/nihalray01/email-spam-detection",
    demo: "#",
    featured: true,
    badge: "NLP & ML"
  },
  {
    id: "shortest-distance-finder",
    title: "Shortest Distance Finder",
    subtitle: "Graph Algorithm & DAA Pathfinding Implementation",
    category: "Algorithms & DSA",
    filterTag: "web",
    description: "Implemented Dijkstra's algorithm to find shortest paths in weighted graphs; analyzed time complexity and efficiency.",
    highlights: [
      "Dijkstra's shortest path graph traversal implementation",
      "Weighted graph node exploration and distance calculation",
      "Time complexity and algorithmic efficiency analysis"
    ],
    tech: ["Python", "Dijkstra's Algorithm", "Graph Theory", "DAA"],
    github: "https://github.com/nihalray01/shortest-distance-finder",
    demo: "#",
    featured: false,
    badge: "DSA & Algorithms"
  }
];

export const experienceTimeline = [
  {
    period: "Jul 2026",
    role: "Artificial Intelligence Intern",
    organization: "Codec Technologies India",
    location: "India",
    type: "AI Internship",
    description: "Completed an AI internship with hands-on exposure to applied AI/ML workflows and project tasks.",
    outcomes: [
      "Worked on applied AI/ML workflows and model evaluation tasks.",
      "Gained hands-on experience in practical machine learning problem solving.",
      "Earned official internship credential issued by Codec Technologies India."
    ]
  }
];

export const certifications = [
  {
    title: "Oracle Fusion AI Agent Studio Certified Foundations Associate (Rel 1)",
    issuer: "Oracle",
    date: "Jun 2026",
    category: "Oracle AI",
    credentialId: "Oracle Certified Associate",
    skillsCovered: ["Oracle AI Agent Studio", "AI Agents", "Prompt Engineering"],
    link: "#"
  },
  {
    title: "MongoDB Credentials (5 Industry Badges)",
    issuer: "MongoDB",
    date: "Jul 2026",
    category: "Generative AI & Databases",
    credentialId: "5 MongoDB Badges",
    skillsCovered: ["Building RAG Apps", "Building AI Agents", "AI Data Strategy", "AI-Powered Search with Vector Search", "MongoDB Basics"],
    link: "#"
  },
  {
    title: "AI & ML Mentorship Program (3 Months)",
    issuer: "Pregrad",
    date: "Aug 2026",
    category: "Mentorship & Projects",
    credentialId: "Pregrad AI/ML Mentorship",
    skillsCovered: ["Skill Development", "Real-Time Projects", "Applied ML"],
    link: "#"
  },
  {
    title: "Industry Job Simulations (Forage)",
    issuer: "Deloitte Australia, JPMorgan Chase, Tata Group",
    date: "2026",
    category: "Job Simulations",
    credentialId: "Forage Virtual Experience",
    skillsCovered: ["Deloitte Technology (Jun 2026)", "JPMorgan Chase Software Engineering (Jan 2026)", "Tata GenAI Powered Data Analytics"],
    link: "#"
  },
  {
    title: "MERN Stack with Generative AI – AI Fusion 2026",
    issuer: "Splen Technologies & Uttaranchal University",
    date: "Sep 2026",
    category: "Full-Stack & GenAI",
    credentialId: "AI Fusion 2026 Certificate",
    skillsCovered: ["MERN Stack", "Generative AI Integration", "Splen OS"],
    link: "#"
  },
  {
    title: "Infosys Springboard & FutureSkills Prime",
    issuer: "Infosys & FutureSkills Prime",
    date: "2026",
    category: "GenAI & Python",
    credentialId: "Infosys / FutureSkills",
    skillsCovered: ["Generative AI Landscape (Mar 2026)", "Python / NumPy", "Prompt Engineering & GenAI (Aug 2026)"],
    link: "#"
  },
  {
    title: "Programming with Python (95% Top Performer)",
    issuer: "Internshala Trainings",
    date: "Jul 2025",
    category: "Python Core",
    credentialId: "Top Performer 95%",
    skillsCovered: ["Python Core Syntax", "Data Analysis", "Functions & OOP"],
    link: "#"
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Uttaranchal University",
    location: "Dehradun, Uttarakhand, India",
    period: "2024 – 2028",
    status: "Currently Pursuing",
    details: [
      "Specialized curriculum focusing on Artificial Intelligence, Machine Learning, Computer Vision, NLP, and Data Structures.",
      "Solved 100+ DSA problems on LeetCode in Python.",
      "Active participant in university AI workshops, hackathons, and student committees."
    ]
  },
  {
    degree: "Senior Secondary (Class XII) – Science",
    specialization: "Science Stream (Physics, Chemistry, Mathematics)",
    institution: "Bihar School Examination Board (BSEB)",
    location: "Bihar, India",
    period: "2024",
    status: "Completed",
    details: [
      "Completed Class 12 Science stream with strong fundamentals in Mathematics and Computer Science."
    ]
  },
  {
    degree: "Secondary (Class X)",
    specialization: "General CBSE Curriculum",
    institution: "R.L.S Public School (CBSE)",
    location: "India",
    period: "2022",
    status: "Completed",
    details: [
      "Completed Class 10 secondary board education under CBSE curriculum."
    ]
  }
];

export const achievements = [
  {
    title: "Student Coordinator",
    organization: "Cultural Committee, UIT - Uttaranchal University",
    period: "2024 – Present",
    description: "Planned and executed university events with cross-functional teams, managing stage setup, logistics, and hospitality.",
    icon: "Users"
  },
  {
    title: "Class Representative",
    organization: "Uttaranchal University",
    period: "2024 – Present",
    description: "Coordinated effectively between students and faculty, helping organize academic activities and departmental schedules.",
    icon: "Award"
  },
  {
    title: "100+ LeetCode DSA Problems Solved",
    organization: "LeetCode (Python)",
    period: "2024 – Present",
    description: "Demonstrated strong algorithmic problem-solving skills across Arrays, Strings, Hashing, Recursion, Sorting, and Graphs.",
    icon: "Code2"
  },
  {
    title: "15+ Industry Certifications Earned",
    organization: "Oracle, MongoDB, Deloitte, JPMorgan Chase, Infosys, Pregrad",
    period: "2025 – 2026",
    description: "Earned professional credentials in AI Agent Studio, RAG applications, vector search, software engineering, and GenAI data analytics.",
    icon: "Sparkles"
  }
];
