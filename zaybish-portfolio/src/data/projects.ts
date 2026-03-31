export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  date: string;
  github?: string;
  live?: string;
  highlights: string[];
  accentColor: string;
  metricLabel?: string;
  metricValue?: string;
};

export const projects: Project[] = [
  {
    slug: "nutrifit",
    number: "01",
    category: "Full-Stack · ML-Powered",
    title: "NutriFit",
    shortDescription:
      "Award-winning AI fitness platform with collaborative filtering, NLP food search, and social gamification.",
    fullDescription:
      "Built at SEO NYC with a team of engineers, NutriFit is a full-stack AI fitness platform that won Best Overall Project among 28 competing teams. It features a personalized recommendation engine using collaborative filtering, NLP-powered semantic search over 80,000+ nutrition items, real-time progress tracking, a social system with friend challenges and leaderboards, and a full gamification layer with badges, streaks, and achievements.",
    tech: ["Python", "TensorFlow", "scikit-learn", "Flask", "React", "Next.js", "SQLite", "Firebase Auth"],
    date: "June – August 2025",
    highlights: [
      "Won Best Overall Project among 28 competing teams at SEO NYC",
      "60+ RESTful API endpoints with <100ms average response time",
      "Collaborative filtering recommendation engine improving precision ~20%",
      "NLP semantic search over 80,000+ USDA nutrition items",
      "Social system: friends, challenges, messaging, leaderboards",
      "Gamification: badges, streaks, achievement system",
    ],
    accentColor: "from-emerald-500 to-teal-600",
    metricLabel: "Teams Beaten",
    metricValue: "27/28",
  },
  {
    slug: "medisend",
    number: "02",
    category: "Full-Stack · AI/NLP",
    title: "MediSend",
    shortDescription:
      "AI-powered medical document platform using AWS Textract, Cohere embeddings, and Ollama LLM validation.",
    fullDescription:
      "A progressive web app for secure upload, OCR, and AI-powered validation of medical documents. Integrates AWS Textract for OCR, Cohere embeddings for semantic understanding, and an Ollama LLM with few-shot prompting to improve accuracy. Enterprise-grade security with JWT auth, encrypted storage, and HIPAA-compliant ETL pipelines.",
    tech: ["React", "Next.js", "AWS Textract", "Cohere", "Ollama LLM", "Flask", "SQL", "JWT Auth"],
    date: "January 2025",
    highlights: [
      "Improved semantic accuracy by 25% with few-shot LLM prompting",
      "Reduced manual document review time by 40%",
      "Multi-model AI pipeline: Textract + Cohere + Ollama",
      "HIPAA-compliant ETL pipelines with encrypted storage",
      "JWT auth with 99.9% uptime SLA",
    ],
    accentColor: "from-blue-500 to-indigo-600",
    metricLabel: "Time Saved",
    metricValue: "40%",
  },
  {
    slug: "stocktrack",
    number: "03",
    category: "ML · Full-Stack",
    title: "StockTrack",
    shortDescription:
      "LSTM-based stock forecasting model trained on 14 years of market data achieving 98–99% accuracy.",
    fullDescription:
      "An LSTM-based stock forecasting system trained on 14 years of historical market data using a 60-day look-back window. Achieves 98–99% forecast accuracy validated by MAE and MSE metrics. Includes a full-stack web app with real-time ticker search, interactive prediction charts, and automated data pipelines for ingestion, preprocessing, and feature scaling.",
    tech: ["Python", "TensorFlow", "Keras", "Flask", "React", "Next.js", "yfinance"],
    date: "April 2025",
    highlights: [
      "98–99% forecast accuracy validated by MAE/MSE",
      "LSTM model trained on 14 years of market data",
      "60-day sliding look-back window for sequence modeling",
      "Automated data pipelines: ingestion, preprocessing, scaling",
      "Interactive prediction charts with real-time ticker search",
    ],
    accentColor: "from-violet-500 to-purple-600",
    metricLabel: "Accuracy",
    metricValue: "98-99%",
  },
  {
    slug: "techknow",
    number: "04",
    category: "CLI Tool · Education",
    title: "TechKnow",
    shortDescription:
      "Terminal-based LeetCode prep tool covering 71 DSA topics with AI-powered feedback via Google Gemini.",
    fullDescription:
      "A terminal-based interview preparation tool covering 71 DSA topic categories sourced from a Kaggle question database. Features AI-powered feedback via Google Gemini that explains why answers are incorrect, a difficulty filter, hint system, and a similar-question recommendation engine to guide focused practice sessions.",
    tech: ["Python", "SQLite", "Google Gemini API"],
    date: "2024",
    github: "https://github.com/kingzayzoom/TechKnow",
    highlights: [
      "71 LeetCode DSA topic categories",
      "AI-powered answer feedback via Google Gemini",
      "Difficulty filtering and hint system",
      "Similar-question linking for focused practice",
      "Kaggle-sourced question database",
    ],
    accentColor: "from-orange-500 to-amber-600",
    metricLabel: "DSA Topics",
    metricValue: "71",
  },
];
