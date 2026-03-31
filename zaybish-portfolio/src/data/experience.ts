export type Experience = {
  company: string;
  role: string;
  location: string;
  date: string;
  type: "internship" | "fellowship" | "education";
  tech?: string[];
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "SEO (Sponsors for Educational Opportunity)",
    role: "Software Engineering Intern",
    location: "New York, NY",
    date: "May 2025 – August 2025",
    type: "internship",
    tech: ["Python", "Flask", "SQL", "React", "Next.js", "Tailwind CSS", "TensorFlow", "scikit-learn"],
    bullets: [
      "Built award-winning ML solutions — collaborative filtering, NLP semantic search, rule-based optimization — boosting recommendation precision ~20% and winning Best Overall Project among 28 teams",
      "Engineered three end-to-end full-stack applications using Flask, MySQL, React, Next.js, and Tailwind CSS",
      "Led Agile SCRUM ceremonies in 3–4 person teams, consistently closing 5–6 tickets per day",
      "Designed wireframes and system architecture; optimized backend logic and SQL queries for 15% performance gain",
    ],
  },
  {
    company: "Management Leadership for Tomorrow (MLT)",
    role: "Fellow",
    location: "Washington, DC",
    date: "2025 – Present",
    type: "fellowship",
    bullets: [
      "Accepted into selective 18-month professional development program",
      "Complete business case studies and leadership assignments for technical and management growth",
    ],
  },
  {
    company: "Virginia Tech",
    role: "B.S. Computer Science",
    location: "Blacksburg, VA",
    date: "Expected May 2028",
    type: "education",
    bullets: [
      "GPA: 3.33",
      "Relevant coursework: Data Structures & Algorithms, Computer Organization, Software Engineering, Discrete Mathematics",
    ],
  },
];
