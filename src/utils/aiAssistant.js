import { personalInfo, skillCategories, projects, experienceTimeline, certifications, education, achievements } from '../data/portfolioData';

export const QUICK_PROMPTS = [
  "Tell me about DocuMind AI & Groq LLM API",
  "What is Nihal's academic score and CGPA?",
  "What are Nihal's featured projects like Splen OS & Air Writing?",
  "How many LeetCode DSA problems has Nihal solved?",
  "What certifications does Nihal hold from Oracle, MongoDB & Deloitte?",
  "How can I contact Nihal for a job or internship?"
];

export function generateAIResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();

  // 1. Projects & DocuMind AI
  if (query.includes('project') || query.includes('documind') || query.includes('groq') || query.includes('splen') || query.includes('air writing') || query.includes('spam') || query.includes('shortest') || query.includes('dijkstra') || query.includes('portfolio')) {
    if (query.includes('documind') || query.includes('groq') || query.includes('rag') || query.includes('pdf')) {
      return `🧠 **DocuMind AI – RAG-Based Document Q&A Assistant**: A Retrieval-Augmented Generation application allowing users to upload PDFs and ask natural language questions.
• Features: Configurable text chunking (size/overlap) & vector index similarity scoring.
• LLM Engine: Groq LLM API (\`gpt-oss-120b\`) with grounded answers and source citations (file, page, relevance score).
• Tech: Python, RAG, Vector Search, Groq API, Prompt Engineering. GitHub: [github.com/nihalray01/documind-ai](https://github.com/nihalray01/documind-ai).`;
    }
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
1. **DocuMind AI – RAG-Based Document Q&A**: PDF Q&A system using Groq LLM API (\`gpt-oss-120b\`), configurable chunking, and similarity citations.
2. **Splen OS – AI-Powered Web Application** ([Live Demo](https://splen-ai.vercel.app)): Full-stack MERN & GenAI application deployed on Vercel.
3. **Personal Portfolio Website** ([Live Demo](https://portfolio-nihalray.vercel.app)): Developer portfolio with dark/light theme, AI chatbot & admin inbox.
4. **Air Writing Recognition Using Webcam**: Real-time finger tracking & ML digit recognition via OpenCV & MediaPipe.
5. **Email Spam Detection System**: ML text classifier evaluating precision/recall/confusion matrix.
6. **Shortest Distance Finder**: Dijkstra's algorithm for weighted graph traversal.`;
  }

  // 2. Academic CGPA & Marks
  if (query.includes('cgpa') || query.includes('mark') || query.includes('percentage') || query.includes('score') || query.includes('grade') || query.includes('academic') || query.includes('12th') || query.includes('10th') || query.includes('class')) {
    return `🎓 **Academic Performance & Marks:**

• **B.Tech CSE (AI & ML) — Uttaranchal University (2024–2028):** CGPA **7.84 / 10** (Currently Pursuing)
• **Senior Secondary (Class XII) — BSEB (2024):** **60%** (Science Stream)
• **Secondary (Class X) — R.L.S Public School CBSE (2022):** **75.4%**`;
  }

  // 3. LeetCode & DSA / Skills
  if (query.includes('dsa') || query.includes('leetcode') || query.includes('skill') || query.includes('python') || query.includes('mern') || query.includes('stack') || query.includes('know')) {
    return `🛠️ **Technical Skills & DSA Profile:**

- **DSA:** Solved **100+ DSA problems on LeetCode in Python** (Arrays, Strings, Hashing, Recursion, Sorting, Graphs).
- **Generative AI & LLMs:** Groq LLM API (\`gpt-oss-120b\`), RAG, Vector Search, Oracle AI Agent Studio, Prompt Engineering.
- **Languages:** Python, JavaScript, SQL
- **AI / ML / Vision:** Supervised Learning, Regression, Classification, NLP, OpenCV, MediaPipe, Scikit-Learn, Pandas, NumPy, TensorFlow.
- **Web & Databases:** MERN Stack (MongoDB, Express, React, Node.js), REST APIs, MongoDB Atlas, Vercel, Git/GitHub.`;
  }

  // 4. Education
  if (query.includes('education') || query.includes('degree') || query.includes('university') || query.includes('school') || query.includes('bseb') || query.includes('cbse')) {
    return `🎓 **Educational Background:**

1. **Uttaranchal University, Dehradun (2024 – 2028)**
   - B.Tech in Computer Science & Engineering (AI & ML) — **7.84 / 10 CGPA**
2. **Bihar School Examination Board - BSEB (2024)**
   - Senior Secondary (Class XII) Science – **60%**
3. **R.L.S Public School - CBSE (2022)**
   - Secondary (Class X) – **75.4%**`;
  }

  // 5. Experience & Internship
  if (query.includes('experience') || query.includes('intern') || query.includes('codec') || query.includes('work')) {
    return `💼 **Professional Experience:**

- **Artificial Intelligence Intern** – Codec Technologies India (Jul 2026)
  • Completed an AI internship with hands-on exposure to applied AI/ML workflows, data preprocessing, and model evaluation tasks.
  • Credential officially issued by Codec Technologies India.`;
  }

  // 6. Certifications (15+ Credentials)
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

  // 7. Leadership & Activities
  if (query.includes('leader') || query.includes('cultural') || query.includes('representative') || query.includes('class') || query.includes('uit')) {
    return `🌟 **Leadership & Extracurricular Activities:**

- **Student Coordinator, Cultural Committee, UIT:** Planned and executed university events with cross-functional teams.
- **Class Representative:** Coordinated effectively between students and faculty and organized academic activities.`;
  }

  // 8. Contact Info
  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('call') || query.includes('hire') || query.includes('reach') || query.includes('linkedin') || query.includes('github') || query.includes('live')) {
    return `📬 **Contact Information:**

- 📧 **Email:** [nihalray03@gmail.com](mailto:nihalray03@gmail.com)
- 📞 **Phone:** [+91 91222 24552](tel:+919122224552)
- 📍 **Location:** Dehradun, Uttarakhand, India
- 💼 **LinkedIn:** [linkedin.com/in/nihal-ray-80b270323](https://www.linkedin.com/in/nihal-ray-80b270323)
- 💻 **GitHub:** [github.com/nihalray01](https://github.com/nihalray01)
- 🚀 **Splen OS Live App:** [splen-ai.vercel.app](https://splen-ai.vercel.app)
- 🌐 **Portfolio:** [portfolio-nihalray.vercel.app](https://portfolio-nihalray.vercel.app)`;
  }

  // Default Greeting / Fallback
  return `👋 Hi! I am **Nihal Ray's Portfolio Assistant**.

Nihal is a B.Tech CSE (AI & ML) student at Uttaranchal University (CGPA: 7.84/10) with 100+ LeetCode DSA solved, DocuMind AI (Groq LLM API), 15+ industry certifications (Oracle, MongoDB, Deloitte), and an AI Internship at Codec Technologies.

Ask me about his:
• **DocuMind AI, Splen OS & Air Writing Projects**
• **Academic CGPA (7.84/10) & Education**
• **100+ LeetCode DSA & Groq API Skills**
• **15+ Certifications from Oracle & MongoDB**
• **Contact & Hiring Information**`;
}
