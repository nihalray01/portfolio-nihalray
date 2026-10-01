import { personalInfo, skillCategories, projects, experienceTimeline, certifications, education, achievements } from '../data/portfolioData';

export const QUICK_PROMPTS = [
  "What are Nihal's featured projects like Splen OS & Air Writing?",
  "How many LeetCode DSA problems has Nihal solved?",
  "What certifications does Nihal hold from Oracle, MongoDB & Deloitte?",
  "Tell me about his AI internship at Codec Technologies.",
  "How can I contact Nihal for a job or internship?",
  "What is his educational background at Uttaranchal University?"
];

export function generateAIResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();

  // 1. Projects
  if (query.includes('project') || query.includes('splen') || query.includes('air writing') || query.includes('spam') || query.includes('shortest') || query.includes('dijkstra')) {
    if (query.includes('splen')) {
      return `🚀 **Splen OS – AI-Powered Web Application**: A full-stack MERN web app integrating Generative AI features built during the AI Fusion 2026 workshop with Splen Technologies & Uttaranchal University. Live Demo: [splen-ai.vercel.app](https://splen-ai.vercel.app). Tech: JavaScript, MERN Stack, GenAI, Vercel.`;
    }
    if (query.includes('air writing') || query.includes('gesture') || query.includes('vision') || query.includes('webcam')) {
      return `✍️ **Air Writing Recognition Using Webcam**: Real-time touchless system tracking hand landmarks via webcam using OpenCV & MediaPipe. Converts air-drawn strokes into images and recognizes handwritten digits using ML models. Tech: Python, OpenCV, MediaPipe, NumPy, Machine Learning.`;
    }
    if (query.includes('spam') || query.includes('email')) {
      return `📧 **Email Spam Detection System**: Machine Learning text classifier detecting spam emails using text preprocessing, tokenization, and TF-IDF feature extraction with accuracy/precision/recall evaluation. Tech: Python, Scikit-learn, Pandas, NLP.`;
    }
    if (query.includes('shortest') || query.includes('dijkstra') || query.includes('graph')) {
      return `🗺️ **Shortest Distance Finder**: Implementation of Dijkstra's algorithm to find shortest paths in weighted graphs with time complexity and efficiency analysis. Tech: Python, Dijkstra's Algorithm, Graph Theory, DAA.`;
    }
    
    return `⚡ **Nihal Ray's Featured Projects:**
1. **Splen OS – AI-Powered Web Application** ([Live Demo](https://splen-ai.vercel.app)): Full-stack MERN & GenAI application deployed on Vercel.
2. **Air Writing Recognition Using Webcam**: Real-time finger tracking & ML digit recognition via OpenCV & MediaPipe.
3. **Email Spam Detection System**: ML text classifier evaluating precision/recall/confusion matrix.
4. **Shortest Distance Finder**: Dijkstra's algorithm for weighted graph traversal & time complexity analysis.`;
  }

  // 2. LeetCode & DSA / Skills
  if (query.includes('dsa') || query.includes('leetcode') || query.includes('skill') || query.includes('python') || query.includes('mern') || query.includes('stack') || query.includes('know')) {
    return `🛠️ **Technical Skills & DSA Profile:**

- **DSA:** Solved **100+ DSA problems on LeetCode in Python** (Arrays, Strings, Hashing, Recursion, Sorting, Graphs).
- **Languages:** Python, JavaScript, SQL
- **AI / ML:** Supervised Learning, Regression, Classification, NLP, Model Evaluation, Deep Learning (fundamentals), TensorFlow
- **Generative AI:** LLMs, Prompt Engineering, RAG, AI Agents, Vector Search, Oracle AI Agent Studio
- **Data & Computer Vision:** Pandas, NumPy, Scikit-learn, EDA, Data Visualization, OpenCV, MediaPipe
- **Web & Databases:** MERN Stack (MongoDB, Express, React, Node.js), REST APIs, MongoDB Atlas
- **Tools:** Git, GitHub, VS Code, Jupyter Notebook, Vercel`;
  }

  // 3. Education
  if (query.includes('education') || query.includes('degree') || query.includes('university') || query.includes('school') || query.includes('class') || query.includes('bseb') || query.includes('cbse')) {
    return `🎓 **Educational Timeline:**

1. **Uttaranchal University, Dehradun (2024 – 2028)**
   - B.Tech in Computer Science & Engineering (AI & ML) — Currently Pursuing
2. **Bihar School Examination Board - BSEB (2024)**
   - Senior Secondary (Class XII) – Science
3. **R.L.S Public School - CBSE (2022)**
   - Secondary (Class X)`;
  }

  // 4. Experience & Internship
  if (query.includes('experience') || query.includes('intern') || query.includes('codec') || query.includes('work')) {
    return `💼 **Professional Experience:**

- **Artificial Intelligence Intern** – Codec Technologies India (Jul 2026)
  • Completed an AI internship with hands-on exposure to applied AI/ML workflows and project tasks.
  • Credential officially issued by Codec Technologies India.`;
  }

  // 5. Certifications (15+ Credentials)
  if (query.includes('certif') || query.includes('oracle') || query.includes('mongodb') || query.includes('deloitte') || query.includes('jpmorgan') || query.includes('forage') || query.includes('infosys') || query.includes('internshala')) {
    return `🏆 **15+ Industry Certifications & Credentials:**

1. **Oracle Fusion AI Agent Studio Certified Foundations Associate (Rel 1)** – Oracle (Jun 2026)
2. **MongoDB (5 Credentials):** Building RAG Apps, Building AI Agents, AI Data Strategy, AI-Powered Search with Vector Search, MongoDB Basics (Jul 2026)
3. **AI & ML Mentorship Program (3 Months):** Skill Development + Real-time Projects – Pregrad (Aug 2026)
4. **Virtual Job Simulations (Forage):** Deloitte Australia (Technology, Jun 2026), JPMorgan Chase (Software Engineering, Jan 2026), Tata Group (GenAI Data Analytics)
5. **MERN Stack with Generative AI – AI Fusion 2026:** Splen Technologies & Uttaranchal University (Sep 2026)
6. **Infosys Springboard & FutureSkills Prime:** Generative AI Landscape, Python / NumPy, Prompt Engineering & GenAI (Aug 2026)
7. **Programming with Python (95% Top Performer):** Internshala Trainings (Jul 2025)`;
  }

  // 6. Leadership & Activities
  if (query.includes('leader') || query.includes('cultural') || query.includes('representative') || query.includes('class') || query.includes('uit')) {
    return `🌟 **Leadership & Extracurricular Activities:**

- **Student Coordinator, Cultural Committee, UIT:** Planned and executed university events with cross-functional teams.
- **Class Representative:** Coordinated effectively between students and faculty and organized academic activities.`;
  }

  // 7. Contact Info
  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('call') || query.includes('hire') || query.includes('reach') || query.includes('linkedin') || query.includes('github') || query.includes('live')) {
    return `📬 **Contact Information:**

- 📧 **Email:** [nihalray03@gmail.com](mailto:nihalray03@gmail.com)
- 📞 **Phone:** [+91 91222 24552](tel:+919122224552)
- 📍 **Location:** Dehradun, Uttarakhand, India
- 💼 **LinkedIn:** [linkedin.com/in/nihalray-80b270323](https://www.linkedin.com/in/nihalray-80b270323)
- 💻 **GitHub:** [github.com/nihalray01](https://github.com/nihalray01)
- 🚀 **Live Project:** [splen-ai.vercel.app](https://splen-ai.vercel.app)`;
  }

  // Default Greeting / Fallback
  return `👋 Hi! I am **Nihal Ray's Portfolio Assistant**.

Nihal is a B.Tech CSE (AI & ML) student at Uttaranchal University with 100+ LeetCode DSA solved, 15+ industry certifications (Oracle, MongoDB, Deloitte), and an AI Internship at Codec Technologies.

Ask me about his:
• **Splen OS & Air Writing Projects**
• **100+ LeetCode DSA & Tech Skills**
• **15+ Certifications from Oracle & MongoDB**
• **Contact & Hiring Information**`;
}
