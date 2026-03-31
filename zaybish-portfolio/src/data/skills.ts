export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Swift", "SQL", "Golang", "Rust", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Databases",
    skills: ["Flask", "Node.js", "Django", "Spring Boot", "MySQL", "SQLite"],
  },
  {
    label: "ML & Data",
    skills: ["TensorFlow", "scikit-learn", "Keras", "Pandas"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Microsoft Azure", "AWS", "Docker"],
  },
  {
    label: "Tools",
    skills: ["Git", "Jira", "Postman", "Firebase"],
  },
];
