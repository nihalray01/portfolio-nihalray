export const personalInfo = {
  name: "NIHAL RAY",
  title: "B.Tech CSE (AI & ML) | Python | Generative AI & RAG | Computer Vision | DSA | MERN Stack",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  university: "Uttaranchal University, Dehradun",
  location: "Dehradun, Uttarakhand, India",
  phone: "+91 91222 24552",
  graduationYear: "2024 – 2028",
  status: "Currently Pursuing B.Tech CSE (AI & ML)",
  email: "nihalray03@gmail.com",
  github: "https://github.com/nihalray01",
  githubUsername: "nihalray01",
  linkedin: "https://www.linkedin.com/in/nihal-ray-80b270323",
  linkedinUsername: "nihal-ray-80b270323",
  liveProject: "https://splen-ai.vercel.app",
  portfolioUrl: "https://portfolio-nihalray.vercel.app",
  summary: "B.Tech student specializing in AI & Machine Learning with hands-on experience in Computer Vision, NLP, Generative AI (RAG) and full-stack (MERN) development. Solved 100+ DSA problems on LeetCode in Python. Built and deployed ML and web projects, completed an AI internship, and earned 15+ industry certifications from Oracle, MongoDB, Deloitte, JPMorgan Chase, Infosys and Pregrad. Seeking an AI/ML, Data Science or Software Development role to build practical, impactful AI solutions.",
  bio: "B.Tech student specializing in AI & Machine Learning with hands-on experience in Computer Vision, NLP, Generative AI (RAG) and full-stack (MERN) development. Solved 100+ DSA problems on LeetCode in Python.",
  roles: [
    "B.Tech CSE (AI & ML)",
    "Generative AI & RAG Developer",
    "Groq API & LLM Engineer",
    "Computer Vision & NLP Specialist",
    "DSA Practitioner (100+ LeetCode)",
    "Full-Stack MERN Developer"
  ]
};

export const stats = [
  { label: "AI & ML Projects", value: "6+ Projects", icon: "Sparkles", color: "from-sky-500 to-blue-600" },
  { label: "LeetCode Solved", value: "100+ DSA Problems", icon: "Code2", color: "from-emerald-500 to-teal-600" },
  { label: "Industry Credentials", value: "15+ Certifications", icon: "Award", color: "from-indigo-500 to-purple-600" },
  { label: "AI Internship", value: "Codec Technologies", icon: "Briefcase", color: "from-purple-500 to-pink-600" },
];

export const skillCategories = [
  {
    category: "Languages & DSA",
    icon: "Code",
    description: "Core programming languages and algorithmic problem solving",
    skills: [
      { name: "Python", level: 92, tag: "Primary" },
      { name: "JavaScript", level: 88, tag: "Full-Stack" },
      { name: "SQL", level: 80, tag: "Databases" },
      { name: "Data Structures & Algorithms", level: 90, tag: "100+ LeetCode Solved" },
    ]
  },
  {
    category: "Generative AI & LLMs",
    icon: "Brain",
    description: "RAG architectures, Groq LLM API, AI Agents, and Vector Search",
    skills: [
      { name: "RAG & Vector Search", level: 92, tag: "FAISS & Indexing" },
      { name: "Groq LLM API (gpt-oss-120b)", level: 90, tag: "High-Speed LLMs" },
      { name: "AI Agents & Agent Studio", level: 88, tag: "Oracle & LangChain" },
      { name: "Prompt Engineering & Grounded Q&A", level: 92, tag: "Citations & Scores" },
      { name: "LLMs & Model Evaluation", level: 85, tag: "Generative Models" },
    ]
  },
  {
    category: "AI, ML & Computer Vision",
    icon: "Eye",
    description: "Computer Vision tracking, NLP, and Predictive Analytics",
    skills: [
      { name: "OpenCV & MediaPipe", level: 90, tag: "Webcam Hand Tracking" },
      { name: "NLP & Text Classification", level: 88, tag: "Tokenization & TF-IDF" },
      { name: "Scikit-Learn & Machine Learning", level: 88, tag: "Supervised & Regression" },
      { name: "Pandas & NumPy", level: 92, tag: "EDA & Data Viz" },
      { name: "TensorFlow (Fundamentals)", level: 75, tag: "Deep Learning" },
    ]
  },
  {
    category: "Web, Databases & Deployment",
    icon: "Globe",
    description: "Full-Stack MERN web development and Vercel cloud deployment",
    skills: [
      { name: "MERN Stack (MongoDB, Express, React, Node.js)", level: 88, tag: "Full-Stack" },
      { name: "MongoDB Atlas & REST APIs", level: 88, tag: "Cloud Databases" },
      { name: "Vercel & Git/GitHub", level: 92, tag: "CI/CD & Live Apps" },
      { name: "Responsive Web Design", level: 90, tag: "Dark/Light UI" },
    ]
  }
];

export const projects = [
  {
    id: "splen-os",
    title: "Splen OS – AI-Powered Web Application",
    subtitle: "Full-Stack MERN Web Application with Generative AI",
    category: "Generative AI & MERN",
    filterTag: "web",
    date: "Sep 2026",
    description: "Developed and deployed a full-stack web application integrating Generative AI features, built during the AI Fusion 2026 MERN Stack with GenAI workshop. Deployed live on Vercel with GitHub version control and continuous deployment.",
    highlights: [
      "Developed full-stack MERN web application incorporating GenAI workflows",
      "Built during AI Fusion 2026 workshop with Splen Technologies & Uttaranchal University",
      "Deployed live on Vercel with continuous integration"
    ],
    tech: ["JavaScript", "MERN Stack", "Generative AI", "Vercel", "GitHub"],
    github: "https://github.com/nihalray01/splen-os",
    demo: "https://splen-ai.vercel.app",
    featured: true,
    badge: "Live Web App"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "Responsive Developer Portfolio with Admin Inbox & AI Chatbot",
    category: "Web Development",
    filterTag: "web",
    date: "Oct 2026",
    description: "Designed and deployed a responsive portfolio with dark/light theme, downloadable resume, interactive AI Q&A assistant, and an authenticated admin inbox for visitor messages.",
    highlights: [
      "Designed and deployed responsive portfolio with dark/light theme",
      "Interactive downloadable resume generator & AI Q&A chatbot assistant",
      "Authenticated admin inbox with live local storage message sync"
    ],
    tech: ["JavaScript", "React", "Responsive Web Design", "Tailwind CSS", "Vercel"],
    github: "https://github.com/nihalray01/portfolio-nihalray",
    demo: "https://portfolio-nihalray.vercel.app",
    featured: true,
    badge: "Live Portfolio"
  },
  {
    id: "documind-ai",
    title: "DocuMind AI – RAG-Based Document Q&A Assistant",
    subtitle: "PDF Q&A System with Configurable Chunking & Groq LLM API",
    category: "Generative AI & RAG",
    filterTag: "ai",
    date: "Oct 2026",
    description: "Built a Retrieval-Augmented Generation app to upload PDFs and ask questions about them in natural language. Implemented configurable chunking (size/overlap) and a vector index to retrieve relevant passages by similarity score. Integrated a Groq-hosted LLM to give grounded answers with source citations (file, page, relevance score).",
    highlights: [
      "Uploaded PDFs with natural language conversational Q&A capability",
      "Configurable text chunking (size/overlap) & vector index similarity scoring",
      "Integrated Groq-hosted LLM (gpt-oss-120b) with source citations (file, page, relevance score)"
    ],
    tech: ["Python", "RAG", "Vector Search", "Groq API (gpt-oss-120b)", "Prompt Engineering"],
    github: "https://github.com/nihalray01/documind-ai",
    demo: "#",
    featured: true,
    badge: "RAG & Groq LLM"
  },
  {
    id: "air-writing-recognition",
    title: "Air Writing Recognition Using Webcam",
    subtitle: "Real-Time Touchless Finger Tracking & Digit Recognition",
    category: "Computer Vision",
    filterTag: "vision",
    date: "2026",
    description: "Built a real-time touchless system that tracks hand landmarks via webcam and recognizes air-drawn digits. Converted air-drawn strokes into images and recognized digits using machine learning models.",
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
    date: "2026",
    description: "Built an ML classifier to detect spam emails using text preprocessing, tokenization, and feature extraction. Evaluated models using accuracy, precision, recall, and confusion matrix.",
    highlights: [
      "Text preprocessing, tokenization, and TF-IDF feature extraction",
      "Comprehensive evaluation via accuracy, precision, recall, and confusion matrix",
      "Deployed machine learning model interface"
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP"],
    github: "https://github.com/nihalray01/email-spam-detection",
    demo: "#",
    featured: false,
    badge: "NLP & ML"
  },
  {
    id: "shortest-distance-finder",
    title: "Shortest Distance Finder",
    subtitle: "Graph Algorithm & DAA Pathfinding Implementation",
    category: "Algorithms & DSA",
    filterTag: "web",
    date: "2026",
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
    link: "https://www.linkedin.com/in/nihal-ray-80b270323/details/certifications/"
  },
  {
    title: "MongoDB Credentials (5 Industry Badges)",
    issuer: "MongoDB",
    date: "Jul 2026",
    category: "Generative AI & Databases",
    credentialId: "5 MongoDB Credentials",
    skillsCovered: ["Building RAG Apps", "Building AI Agents", "AI Data Strategy", "AI-Powered Search with Vector Search", "MongoDB Basics"],
    link: "https://www.linkedin.com/in/nihal-ray-80b270323/details/certifications/"
  },
  {
    title: "AI & ML Mentorship Program (3 Months)",
    issuer: "Pregrad",
    date: "Aug 2026",
    category: "Mentorship & Projects",
    credentialId: "Pregrad AI/ML Mentorship",
    skillsCovered: ["Skill Development", "Real-Time Projects", "Applied ML"],
    link: "https://www.linkedin.com/in/nihal-ray-80b270323/details/certifications/"
  },
  {
    title: "Industry Job Simulations (Forage)",
    issuer: "Deloitte Australia, JPMorgan Chase, Tata Group",
    date: "2026",
    category: "Job Simulations",
    credentialId: "Forage Virtual Experience",
    skillsCovered: ["Deloitte Technology (Jun 2026)", "JPMorgan Chase Software Engineering (Jan 2026)", "Tata GenAI Powered Data Analytics"],
    link: "https://www.linkedin.com/in/nihal-ray-80b270323/details/certifications/"
  },
  {
    title: "MERN Stack with Generative AI – AI Fusion 2026",
    issuer: "Splen Technologies & Uttaranchal University",
    date: "Sep 2026",
    category: "Full-Stack & GenAI",
    credentialId: "AI Fusion 2026 Certificate",
    skillsCovered: ["MERN Stack", "Generative AI Integration", "Splen OS"],
    link: "https://www.linkedin.com/in/nihal-ray-80b270323/details/certifications/"
  },
  {
    title: "Infosys Springboard & FutureSkills Prime",
    issuer: "Infosys & FutureSkills Prime",
    date: "2026",
    category: "GenAI & Python",
    credentialId: "Infosys / FutureSkills",
    skillsCovered: ["Generative AI Landscape (Mar 2026)", "Python / NumPy", "Prompt Engineering & GenAI (Aug 2026)"],
    link: "https://www.linkedin.com/in/nihal-ray-80b270323/details/certifications/"
  },
  {
    title: "Programming with Python (95% Top Performer)",
    issuer: "Internshala Trainings",
    date: "Jul 2025",
    category: "Python Core",
    credentialId: "Top Performer 95%",
    skillsCovered: ["Python Core Syntax", "Data Analysis", "Functions & OOP"],
    link: "https://www.linkedin.com/in/nihal-ray-80b270323/details/certifications/"
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Uttaranchal University, Dehradun",
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
    institution: "Bihar School Examination Board (BSEB)",
    location: "Bihar, India",
    period: "2024",
    status: "Completed",
    details: [
      "Completed Class 12 Science stream focusing on Physics, Chemistry, and Mathematics."
    ]
  },
  {
    degree: "Secondary (Class X)",
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
