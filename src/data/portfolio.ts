export interface Project {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  tech: string[];
  highlights?: string[];
  annotations?: string[];
  pipeline?: string[];
  models?: string[];
  linkText: string;
  linkUrl: string;
  theme: 'hero-dark' | 'light-security' | 'yellow-ml' | 'paper-minimal';
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  duration?: string;
  description: string;
  points: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  graduationYear: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  highlight?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "AYUSH KUMAR",
    firstName: "AYUSH",
    lastName: "KUMAR",
    eyebrow: "COMPUTER SCIENCE × AI / ML",
    title: "AI / ML BUILDER & FOUNDER",
    location: "Faridabad, India",
    tagline: "Computer Science student building real products with AI, data & code.",
    subtagline: "I like turning ideas into things people can actually use.",
    aboutShort: "Computer Science (AI & ML) undergraduate who enjoys turning ideas into real, working products. I like learning new tools, solving problems and shipping what I build.",
    email: "ayushskumar212@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    heroLabels: [
      "AI / ML",
      "PRODUCT BUILDER",
      "FOUNDER @ REVIEWLOOP",
      "FARIDABAD, INDIA"
    ],
    marquee: [
      "AI / ML",
      "DATA PIPELINES",
      "PRODUCTS",
      "STARTUPS",
      "PYTHON",
      "SQL & RLS",
      "LLM AGENTS",
      "FASTAPI",
      "SUPABASE",
      "RESEARCH",
      "BUILDING"
    ]
  },

  projects: [
    {
      id: "reviewloop",
      tag: "01 — STARTUP",
      title: "ReviewLoop",
      subtitle: "WhatsApp-based review-funnel SaaS product built for Indian small service businesses.",
      description: "Full-stack WhatsApp review funnel designed to streamline customer feedback, manage multi-tenant database rules, and run conversational workflows.",
      badge: "2 PAYING CLIENTS",
      tech: ["React", "Vite", "Supabase", "PostgreSQL", "RLS", "Vercel", "Groq", "Docker"],
      highlights: [
        "Designed PostgreSQL data model in Supabase with SQL/RLS multi-tenant isolation.",
        "Built full-stack product end-to-end, from schema and API design to deployment.",
        "Used subscription and usage data to iterate pricing and core features.",
        "Integrated Groq-powered conversational automation workflows."
      ],
      annotations: ["built from scratch", "real users → real feedback"],
      linkText: "VIEW PROJECT",
      linkUrl: "#reviewloop",
      theme: "hero-dark"
    },
    {
      id: "safe-hai",
      tag: "02 — PRIVACY / AI",
      title: "Safe Hai",
      subtitle: "AI-powered confidential data leak prevention extension.",
      description: "A privacy-focused browser extension designed to prevent users from accidentally sharing sensitive information with online platforms, messaging apps and AI tools.",
      badge: "LOCAL FIRST",
      tech: ["JavaScript", "AI/NLP", "Pattern Recognition", "Local Processing", "DLP"],
      highlights: [
        "API key detection",
        "Phone number detection",
        "Aadhaar detection",
        "PAN detection",
        "Bank / account detail detection",
        "100% Local processing (No external LLM APIs, no 3rd party servers)"
      ],
      annotations: ["zero data leaks", "100% browser-side"],
      linkText: "EXPLORE PRIVACY TOOL",
      linkUrl: "#safe-hai",
      theme: "light-security"
    },
    {
      id: "forecasting",
      tag: "03 — MACHINE LEARNING",
      title: "AI Demand Forecasting System",
      subtitle: "End-to-end analytics pipeline for predicting product demand for hyperlocal delivery platforms.",
      description: "Data processing, feature engineering, and model validation pipeline designed to predict demand spikes for fast-delivery logistics.",
      badge: "ML PIPELINE",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI", "Docker"],
      pipeline: ["RAW DATA", "CLEANING", "EDA", "FEATURE ENG", "ML", "FASTAPI"],
      models: ["Logistic Regression", "Decision Tree", "Random Forest", "K-Means", "PCA"],
      linkText: "EXPLORE PIPELINE",
      linkUrl: "#forecasting",
      theme: "yellow-ml"
    },
    {
      id: "stock-analyzer",
      tag: "04 — DATA",
      title: "Stock Market Data Analyzer",
      subtitle: "Historical stock market analysis using Python and Pandas.",
      description: "Historical stock market analysis using Python and Pandas, with visualizations designed to communicate trends clearly to non-technical audiences.",
      badge: "DATA VISUALIZATION",
      tech: ["Python", "Pandas", "Matplotlib"],
      linkText: "VIEW ANALYSIS",
      linkUrl: "#stock-analyzer",
      theme: "paper-minimal"
    }
  ] as Project[],

  experience: [
    {
      period: "2026 — PRESENT",
      role: "Founder & Developer",
      company: "ReviewLoop",
      description: "WhatsApp-based review-funnel SaaS product for Indian small service businesses.",
      points: [
        "Architected multi-tenant PostgreSQL/Supabase database schema with strict RLS policies.",
        "Built full-stack React/Vite/Supabase web client deployed on Vercel.",
        "Analyzed real subscription and usage telemetry to refine feature roadmap.",
        "Integrated Groq LLM API for automated intelligent message parsing.",
        "Containerized core microservices using Docker for consistent local and production environments."
      ],
      tech: ["React", "Vite", "Supabase", "PostgreSQL", "RLS", "Vercel", "Groq", "Docker"]
    },
    {
      period: "INTERNSHIP",
      duration: "2 Months",
      role: "AI/ML Intern",
      company: "3Skill Training",
      description: "Built an end-to-end binary classification pipeline for wine quality prediction.",
      points: [
        "Processed 1,599 samples across 11 chemical features for GOOD / BAD binary classification.",
        "Engineered features and conducted Exploratory Data Analysis (EDA) to resolve data distribution skew.",
        "Trained and evaluated Logistic Regression, KNN, and Decision Tree classifiers.",
        "Optimized hyper-parameters using GridSearchCV to maximize precision and recall metrics."
      ],
      tech: ["Python", "Pandas", "Scikit-learn", "GridSearchCV", "EDA", "KNN", "Decision Trees"]
    }
  ] as Experience[],

  education: {
    degree: "B.Tech",
    field: "Computer Science & Engineering (AI & ML)",
    institution: "Echelon Institute of Technology and Management",
    location: "Faridabad, India",
    graduationYear: "2028"
  } as Education,

  skills: [
    {
      category: "DATA",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "PostgreSQL", "EDA", "Feature Engineering"],
      highlight: true
    },
    {
      category: "MACHINE LEARNING",
      skills: ["Scikit-learn", "Logistic Regression", "Decision Trees", "Random Forest", "K-Means", "PCA", "GridSearchCV"],
      highlight: true
    },
    {
      category: "BACKEND",
      skills: ["FastAPI", "REST APIs", "Supabase", "PostgreSQL", "RLS"]
    },
    {
      category: "AI / LLM",
      skills: ["Generative AI", "Claude", "GPT", "Mistral", "Groq", "RAG concepts", "Prompt Engineering", "MCP"],
      highlight: true
    },
    {
      category: "AI-ASSISTED DEV",
      skills: ["Claude Code", "GitHub Copilot", "Cursor", "Antigravity"]
    },
    {
      category: "TOOLS",
      skills: ["Git", "GitHub", "Docker", "Vercel", "Jupyter", "VS Code"]
    },
    {
      category: "LANGUAGES",
      skills: ["Python", "C", "C++"]
    }
  ] as SkillCategory[],

  buildProcess: [
    {
      step: "01",
      name: "QUESTION",
      desc: "Find the problem.",
      detail: "Identify real user pain points or data bottlenecks before writing code."
    },
    {
      step: "02",
      name: "BUILD",
      desc: "Prototype quickly.",
      detail: "Ship a functional schema, API, or ML baseline in days, not months."
    },
    {
      step: "03",
      name: "MEASURE",
      desc: "Look at real usage.",
      detail: "Analyze user feedback, accuracy metrics, and subscription telemetry."
    },
    {
      step: "04",
      name: "SHIP",
      desc: "Turn into something real.",
      detail: "Deploy scalable code with isolation, security, and continuous iteration."
    }
  ],

  certifications: [
    {
      title: "Machine Learning with Python Professional Certificate",
      issuer: "Anaconda"
    },
    {
      title: "Introduction to Model Context Protocol (MCP)",
      issuer: "Anthropic"
    },
    {
      title: "Generative AI: Introduction to Large Language Models",
      issuer: "LinkedIn Learning"
    }
  ] as Certification[],

  personalInterest: {
    sport: "Basketball",
    highlights: [
      "Winner — Rawal Institute of Technology",
      "Semi-finalist — IIT Ropar",
      "Inter-college tournaments competitor"
    ],
    note: "Competitive mindset on the court and at the terminal."
  }
};
