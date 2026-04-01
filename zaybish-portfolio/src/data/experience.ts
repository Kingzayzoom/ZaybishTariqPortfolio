export type ExperienceMedia = {
  src: string;
  alt: string;
  caption: string;
};

export type ExperienceLogo = {
  src: string;
  alt: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  date: string;
  type: "internship" | "fellowship" | "education" | "open-source" | "research" | "externship";
  tech?: string[];
  bullets: string[];
  status?: "active" | "planned";
  media?: ExperienceMedia[];
  logo?: ExperienceLogo;
};

export const experiences: Experience[] = [
  {
    company: "Outamation Advanced",
    role: "AI Engineer Extern",
    location: "Remote",
    date: "March 2026 - Present",
    type: "externship",
    status: "active",
    tech: ["Python", "OCR", "LlamaIndex", "FAISS", "Chroma", "Gemini", "OpenCV", "PyMuPDF"],
    bullets: [
      "Building an AI document-processing pipeline for large mortgage PDFs using Python, OCR, and RAG.",
      "Extracting structured data from unstructured files to turn messy documents into searchable outputs.",
      "Evaluating OCR engines and LLM workflows to improve retrieval quality and document understanding.",
    ],
    logo: {
      src: "/images/outamation-logo.jpg",
      alt: "Outamation logo",
    },
  },
  {
    company: "SEO (Sponsors for Educational Opportunity)",
    role: "Software Engineering Intern",
    location: "New York, NY",
    date: "May 2025 - August 2025",
    type: "internship",
    status: "active",
    tech: ["Python", "Flask", "SQL", "React", "Next.js", "Tailwind CSS", "TensorFlow", "scikit-learn"],
    bullets: [
      "Built award-winning ML solutions and helped the team win Best Overall Project among 28 teams.",
      "Engineered three end-to-end full-stack applications using Flask, React, Next.js, SQL, and Tailwind CSS.",
      "Improved recommendation precision by roughly 20% and optimized backend logic for a 15% performance gain.",
    ],
    media: [
      {
        src: "/images/seo-team-photo.jpg",
        alt: "SEO internship team group photo",
        caption: "Team photo from the SEO Tech Developer program in New York.",
      },
      {
        src: "/images/seo-best-overall-certificate.jpg",
        alt: "Best Overall Project certificate for NutriFit at SEO",
        caption: "Best Overall Project certificate for NutriFit at the SEO Tech Developer Innovation Showcase.",
      },
    ],
    logo: {
      src: "/images/seo-logo.jpg",
      alt: "SEO logo",
    },
  },
  {
    company: "Management Leadership for Tomorrow (MLT)",
    role: "Fellow",
    location: "Washington, DC",
    date: "2025 - Present",
    type: "fellowship",
    status: "active",
    bullets: [
      "Accepted into a selective 18-month professional development program.",
      "Complete business case studies and leadership assignments focused on technical and management growth.",
    ],
    logo: {
      src: "/images/mlt-logo.jpg",
      alt: "MLT logo",
    },
  },
  {
    company: "ColorStack",
    role: "Fellow",
    location: "Remote",
    date: "2025 - Present",
    type: "fellowship",
    status: "active",
    bullets: [
      "Participate in a national community supporting the academic, technical, and career growth of Black and Latinx computer science students.",
      "Build community with peers and engage in programming designed to strengthen career readiness and long-term growth in tech.",
    ],
    logo: {
      src: "/images/colorstack-logo.jpg",
      alt: "ColorStack logo",
    },
  },
  {
    company: "Virginia Tech",
    role: "B.S. Computer Science",
    location: "Blacksburg, VA",
    date: "Expected May 2028",
    type: "education",
    status: "active",
    tech: [
      "Data Structures & Algorithms",
      "Computer Systems",
      "Computer Organization I & II",
      "Discrete Math",
      "Software & Data Structures",
    ],
    bullets: [
      "Maintaining a 3.33 GPA while building a strong foundation in software engineering, systems, and problem solving.",
      "Pairing coursework with hands-on full-stack and AI project work outside the classroom to accelerate practical depth.",
    ],
    logo: {
      src: "/images/virginia-tech-logo.png",
      alt: "Virginia Tech logo",
    },
  },
];

export const futureExperiences: Experience[] = [
  {
    company: "Open Source Organization",
    role: "Open Source Developer",
    location: "Remote",
    date: "Coming soon",
    type: "open-source",
    status: "planned",
    bullets: [
      "Add the project or organization name here.",
      "Describe the main repository, product area, or contribution scope.",
      "Highlight measurable contributions, shipped features, or maintainer collaboration.",
    ],
    tech: ["TBD", "TBD", "TBD"],
  },
  {
    company: "Research Lab or University Group",
    role: "Research Assistant",
    location: "TBD",
    date: "Coming soon",
    type: "research",
    status: "planned",
    bullets: [
      "Add the lab, professor, or research group here.",
      "Summarize the problem space and what you investigated or built.",
      "Include papers, experiments, datasets, or outcomes once available.",
    ],
    tech: ["TBD", "TBD", "TBD"],
  },
  {
    company: "Externship Program",
    role: "Software Engineering Extern",
    location: "TBD",
    date: "Coming soon",
    type: "externship",
    status: "planned",
    bullets: [
      "Add the company or program name here.",
      "Outline the team, project, or challenge you worked on.",
      "Include concrete outcomes, deliverables, and technologies used.",
    ],
    tech: ["TBD", "TBD", "TBD"],
  },
];
