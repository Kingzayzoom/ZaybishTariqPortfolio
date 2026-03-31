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
    skills: ["React", "Next.js", "Tailwind CSS", "Streamlit", "Gradio"],
  },
  {
    label: "Backend & Databases",
    skills: ["Flask", "Node.js", "Django", "Spring Boot", "MySQL", "SQLite", "Firebase", "JWT Auth"],
  },
  {
    label: "AI / ML",
    skills: [
      "TensorFlow",
      "scikit-learn",
      "Keras",
      "Pandas",
      "LlamaIndex",
      "FAISS",
      "Chroma",
      "Gemini API",
      "Cohere",
      "Ollama",
      "Mistral",
      "Phi-2",
    ],
  },
  {
    label: "Document & OCR",
    skills: ["PyMuPDF", "pdfplumber", "OpenCV", "PIL", "Tesseract", "PaddleOCR", "EasyOCR"],
  },
  {
    label: "Cloud & Tools",
    skills: ["AWS", "Azure", "Docker", "Git", "GitHub", "Postman", "Jira", "Google Colab"],
  },
];
