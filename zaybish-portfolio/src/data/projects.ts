export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  summary: string;
  tech: string[];
  date: string;
  github?: string;
  live?: string;
  accent: string;
  metric: {
    label: string;
    value: string;
  };
  problem: string;
  approach: string[];
  technicalDetails: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "nutrifit",
    number: "01",
    category: "Full-Stack · ML-Powered",
    title: "NutriFit",
    shortDescription:
      "Award-winning AI fitness platform with collaborative filtering, NLP food search, and social gamification.",
    summary:
      "Built at SEO NYC, NutriFit is a full-stack AI fitness platform that combines recommendation systems, nutrition intelligence, and social accountability into one product experience. It became the strongest portfolio lead because it blends ML depth with real product surface area.",
    tech: ["Python", "TensorFlow", "scikit-learn", "Flask", "React", "Next.js", "SQLite", "Firebase Auth"],
    date: "June - August 2025",
    github: "https://github.com/sareemmomin21/Nutri-Fit",
    accent: "from-emerald-400 via-cyan-400 to-sky-500",
    metric: {
      label: "Best Overall",
      value: "28 teams",
    },
    problem:
      "Generic fitness apps give everyone the same plans. The goal was to build something that felt more like a coach: personalized recommendations, nutritional context, and enough social motivation to keep users engaged.",
    approach: [
      "Designed a recommendation layer using collaborative filtering so workout suggestions improved as users interacted with the product.",
      "Built a nutrition experience backed by NLP semantic search to make 80K+ food items easier to find and understand.",
      "Connected progress tracking, streaks, badges, and social challenges so the product had reasons for users to return.",
    ],
    technicalDetails: [
      "Implemented 60+ REST endpoints across workouts, nutrition, vitals, friends, challenges, and achievements.",
      "Used TensorFlow and scikit-learn for recommendation workflows and supporting ML pipelines.",
      "Paired a React and Next.js front end with a Flask API, SQLite persistence, and Firebase Auth.",
    ],
    results: [
      "Won Best Overall Project among 28 teams at SEO NYC.",
      "Improved recommendation precision by roughly 20%.",
      "Kept average API responses under 100ms for core flows.",
      "Delivered meaningful product depth across social, gamification, vitals, and ML-powered personalization.",
    ],
  },
  {
    slug: "medisend",
    number: "02",
    category: "Full-Stack · AI/NLP",
    title: "MediSend",
    shortDescription:
      "AI-powered medical document platform using AWS Textract, Cohere embeddings, and Ollama LLM validation.",
    summary:
      "MediSend is a medical document workflow app built to reduce manual review time. It combines OCR, embedding-based understanding, and LLM validation to turn messy uploads into structured, useful information.",
    tech: ["React", "Next.js", "AWS Textract", "Cohere", "Ollama LLM", "Flask", "SQL", "JWT Auth"],
    date: "January 2025",
    accent: "from-sky-500 via-blue-500 to-indigo-500",
    metric: {
      label: "Manual Review Reduced",
      value: "40%",
    },
    problem:
      "Medical documentation is hard to process because data often arrives as scans, forms, and inconsistent text. The challenge was building a secure pipeline that could extract, validate, and organize that information with less human effort.",
    approach: [
      "Created a progressive web app for secure uploads and report review.",
      "Chained AWS Textract, Cohere embeddings, and Ollama validation into a multi-model document intelligence pipeline.",
      "Focused on trust and compliance by layering JWT auth, encrypted storage, and controlled ETL handling.",
    ],
    technicalDetails: [
      "Used Textract for OCR and structured extraction from uploaded medical files.",
      "Applied Cohere embeddings plus few-shot prompting to improve semantic accuracy.",
      "Served the experience through a React and Next.js front end with Flask and SQL on the backend.",
    ],
    results: [
      "Reduced manual document review time by 40%.",
      "Improved semantic accuracy by 25% with prompt and pipeline tuning.",
      "Delivered a HIPAA-conscious architecture with JWT auth and encrypted storage.",
    ],
  },
  {
    slug: "stocktrack",
    number: "03",
    category: "ML · Full-Stack",
    title: "StockTrack",
    shortDescription:
      "LSTM-based stock forecasting model trained on 14 years of market data achieving 98-99% accuracy.",
    summary:
      "StockTrack pairs a forecasting model with a lightweight product layer so predictions are explorable instead of trapped in notebooks. The project focuses on the full path from ingestion and preprocessing to an interface people can actually use.",
    tech: ["Python", "TensorFlow", "Keras", "Flask", "React", "Next.js", "yfinance"],
    date: "April 2025",
    accent: "from-fuchsia-500 via-violet-500 to-indigo-500",
    metric: {
      label: "Forecast Accuracy",
      value: "98-99%",
    },
    problem:
      "Time-series ML projects often stop at model output. I wanted to build an end-to-end system where the data pipeline, sequence model, and user-facing experience all worked together.",
    approach: [
      "Trained an LSTM model on 14 years of market data using a 60-day look-back window.",
      "Automated ingestion, preprocessing, and scaling so experiments were reproducible.",
      "Wrapped predictions in a full-stack app with search and interactive charts.",
    ],
    technicalDetails: [
      "Used TensorFlow and Keras for training and evaluation.",
      "Pulled historical data through yfinance and prepared feature pipelines for the model.",
      "Built a React and Next.js interface on top of a Flask-serving backend.",
    ],
    results: [
      "Reached 98-99% forecast accuracy based on MAE and MSE validation.",
      "Created a reusable pipeline from data collection through inference.",
      "Turned a model-first project into a product-style experience with real-time exploration.",
    ],
  },
  {
    slug: "techknow",
    number: "04",
    category: "CLI Tool · Education",
    title: "TechKnow",
    shortDescription:
      "Terminal-based LeetCode prep tool covering 71 DSA topics with AI-powered feedback via Google Gemini.",
    summary:
      "TechKnow is a terminal-first interview prep tool built for focused practice. It combines a curated question bank with AI feedback so users can move beyond right-or-wrong answers into actual understanding.",
    tech: ["Python", "SQLite", "Google Gemini API"],
    date: "2024",
    github: "https://github.com/keirannnelson/TechKnow",
    accent: "from-amber-400 via-orange-500 to-rose-500",
    metric: {
      label: "DSA Topics",
      value: "71",
    },
    problem:
      "A lot of interview prep tools feel bloated or passive. I wanted something fast, local, and interactive that still gave meaningful feedback when a user got stuck.",
    approach: [
      "Built a terminal experience that lets users browse topics, filter difficulty, and move quickly through practice sessions.",
      "Added AI-powered explanations using Google Gemini so incorrect answers become learning moments instead of dead ends.",
      "Organized a Kaggle-backed question set into topic flows with similar-question recommendations.",
    ],
    technicalDetails: [
      "Used Python for the CLI flows and SQLite for local persistence.",
      "Integrated Gemini for answer feedback and explanation generation.",
      "Structured the data so question navigation, hints, and related-problem linking stayed lightweight and fast.",
    ],
    results: [
      "Covered 71 DSA topic categories in a focused terminal interface.",
      "Added AI feedback, hints, and related-question guidance to improve practice quality.",
      "Created a polished CLI project that shows engineering range beyond web apps.",
    ],
  },
];
