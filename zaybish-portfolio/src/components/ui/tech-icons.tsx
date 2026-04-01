import type { ReactNode } from "react";
import {
  Binary,
  BrainCircuit,
  Cloud,
  Database,
  FileSearch,
  Globe,
  ScanSearch,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiDjango,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiGo,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiKeras,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiOpencv,
  SiPandas,
  SiPostman,
  SiPython,
  SiReact,
  SiRust,
  SiScikitlearn,
  SiSpringboot,
  SiSqlite,
  SiStreamlit,
  SiSwift,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

export type TechIconData = {
  color: string;
  glow: string;
  icon: ReactNode;
};

export function getTechIconData(skill: string): TechIconData {
  const sizeClass = "h-3.5 w-3.5";

  switch (skill) {
    case "Python":
      return { icon: <SiPython className={sizeClass} />, color: "#3776AB", glow: "rgba(55, 118, 171, 0.28)" };
    case "JavaScript":
      return { icon: <SiJavascript className={sizeClass} />, color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.28)" };
    case "TypeScript":
      return { icon: <SiTypescript className={sizeClass} />, color: "#3178C6", glow: "rgba(49, 120, 198, 0.28)" };
    case "Java":
      return { icon: <SiOpenjdk className={sizeClass} />, color: "#F89820", glow: "rgba(248, 152, 32, 0.28)" };
    case "C++":
      return { icon: <SiCplusplus className={sizeClass} />, color: "#00599C", glow: "rgba(0, 89, 156, 0.28)" };
    case "Swift":
      return { icon: <SiSwift className={sizeClass} />, color: "#F05138", glow: "rgba(240, 81, 56, 0.28)" };
    case "SQL":
      return { icon: <Database className={sizeClass} />, color: "#94A3B8", glow: "rgba(148, 163, 184, 0.24)" };
    case "Golang":
      return { icon: <SiGo className={sizeClass} />, color: "#00ADD8", glow: "rgba(0, 173, 216, 0.28)" };
    case "Rust":
      return { icon: <SiRust className={sizeClass} />, color: "#DEA584", glow: "rgba(222, 165, 132, 0.28)" };
    case "HTML":
      return { icon: <SiHtml5 className={sizeClass} />, color: "#E34F26", glow: "rgba(227, 79, 38, 0.28)" };
    case "CSS":
      return { icon: <SiCss className={sizeClass} />, color: "#1572B6", glow: "rgba(21, 114, 182, 0.28)" };
    case "React":
      return { icon: <SiReact className={sizeClass} />, color: "#61DAFB", glow: "rgba(97, 218, 251, 0.28)" };
    case "Next.js":
      return { icon: <SiNextdotjs className={sizeClass} />, color: "#F8FAFC", glow: "rgba(248, 250, 252, 0.2)" };
    case "Tailwind CSS":
      return { icon: <SiTailwindcss className={sizeClass} />, color: "#06B6D4", glow: "rgba(6, 182, 212, 0.28)" };
    case "Streamlit":
      return { icon: <SiStreamlit className={sizeClass} />, color: "#FF4B4B", glow: "rgba(255, 75, 75, 0.28)" };
    case "Gradio":
      return { icon: <Globe className={sizeClass} />, color: "#FF7A59", glow: "rgba(255, 122, 89, 0.28)" };
    case "Flask":
      return { icon: <SiFlask className={sizeClass} />, color: "#E5E7EB", glow: "rgba(229, 231, 235, 0.18)" };
    case "Node.js":
      return { icon: <SiNodedotjs className={sizeClass} />, color: "#5FA04E", glow: "rgba(95, 160, 78, 0.28)" };
    case "Django":
      return { icon: <SiDjango className={sizeClass} />, color: "#44B78B", glow: "rgba(68, 183, 139, 0.28)" };
    case "Spring Boot":
      return { icon: <SiSpringboot className={sizeClass} />, color: "#6DB33F", glow: "rgba(109, 179, 63, 0.28)" };
    case "MySQL":
      return { icon: <SiMysql className={sizeClass} />, color: "#4479A1", glow: "rgba(68, 121, 161, 0.28)" };
    case "SQLite":
      return { icon: <SiSqlite className={sizeClass} />, color: "#0F80CC", glow: "rgba(15, 128, 204, 0.28)" };
    case "Firebase":
      return { icon: <SiFirebase className={sizeClass} />, color: "#FFCA28", glow: "rgba(255, 202, 40, 0.28)" };
    case "JWT Auth":
      return { icon: <ShieldCheck className={sizeClass} />, color: "#22C55E", glow: "rgba(34, 197, 94, 0.26)" };
    case "TensorFlow":
      return { icon: <SiTensorflow className={sizeClass} />, color: "#FF6F00", glow: "rgba(255, 111, 0, 0.28)" };
    case "scikit-learn":
      return { icon: <SiScikitlearn className={sizeClass} />, color: "#F7931E", glow: "rgba(247, 147, 30, 0.28)" };
    case "Keras":
      return { icon: <SiKeras className={sizeClass} />, color: "#D00000", glow: "rgba(208, 0, 0, 0.28)" };
    case "Pandas":
      return { icon: <SiPandas className={sizeClass} />, color: "#150458", glow: "rgba(21, 4, 88, 0.28)" };
    case "LlamaIndex":
      return { icon: <Workflow className={sizeClass} />, color: "#8B5CF6", glow: "rgba(139, 92, 246, 0.28)" };
    case "FAISS":
      return { icon: <Workflow className={sizeClass} />, color: "#38BDF8", glow: "rgba(56, 189, 248, 0.28)" };
    case "Chroma":
      return { icon: <Workflow className={sizeClass} />, color: "#2DD4BF", glow: "rgba(45, 212, 191, 0.28)" };
    case "Gemini API":
      return { icon: <BrainCircuit className={sizeClass} />, color: "#8B5CF6", glow: "rgba(139, 92, 246, 0.28)" };
    case "Cohere":
      return { icon: <BrainCircuit className={sizeClass} />, color: "#4ADE80", glow: "rgba(74, 222, 128, 0.28)" };
    case "Ollama":
      return { icon: <BrainCircuit className={sizeClass} />, color: "#E5E7EB", glow: "rgba(229, 231, 235, 0.18)" };
    case "Mistral":
      return { icon: <BrainCircuit className={sizeClass} />, color: "#FF7000", glow: "rgba(255, 112, 0, 0.28)" };
    case "Phi-2":
      return { icon: <BrainCircuit className={sizeClass} />, color: "#EC4899", glow: "rgba(236, 72, 153, 0.28)" };
    case "PyMuPDF":
      return { icon: <FileSearch className={sizeClass} />, color: "#EF4444", glow: "rgba(239, 68, 68, 0.28)" };
    case "pdfplumber":
      return { icon: <FileSearch className={sizeClass} />, color: "#3B82F6", glow: "rgba(59, 130, 246, 0.28)" };
    case "OpenCV":
      return { icon: <SiOpencv className={sizeClass} />, color: "#5C3EE8", glow: "rgba(92, 62, 232, 0.28)" };
    case "PIL":
      return { icon: <ScanSearch className={sizeClass} />, color: "#F59E0B", glow: "rgba(245, 158, 11, 0.28)" };
    case "Tesseract":
      return { icon: <ScanSearch className={sizeClass} />, color: "#4A90E2", glow: "rgba(74, 144, 226, 0.28)" };
    case "PaddleOCR":
      return { icon: <ScanSearch className={sizeClass} />, color: "#F97316", glow: "rgba(249, 115, 22, 0.28)" };
    case "EasyOCR":
      return { icon: <ScanSearch className={sizeClass} />, color: "#14B8A6", glow: "rgba(20, 184, 166, 0.28)" };
    case "AWS":
      return { icon: <Cloud className={sizeClass} />, color: "#FF9900", glow: "rgba(255, 153, 0, 0.28)" };
    case "Azure":
      return { icon: <Cloud className={sizeClass} />, color: "#0078D4", glow: "rgba(0, 120, 212, 0.28)" };
    case "Docker":
      return { icon: <SiDocker className={sizeClass} />, color: "#2496ED", glow: "rgba(36, 150, 237, 0.28)" };
    case "Git":
      return { icon: <SiGit className={sizeClass} />, color: "#F05032", glow: "rgba(240, 80, 50, 0.28)" };
    case "GitHub":
      return { icon: <SiGithub className={sizeClass} />, color: "#F8FAFC", glow: "rgba(248, 250, 252, 0.18)" };
    case "Postman":
      return { icon: <SiPostman className={sizeClass} />, color: "#FF6C37", glow: "rgba(255, 108, 55, 0.28)" };
    case "Jira":
      return { icon: <SiJira className={sizeClass} />, color: "#0052CC", glow: "rgba(0, 82, 204, 0.28)" };
    case "Google Colab":
      return { icon: <SiGooglecolab className={sizeClass} />, color: "#F9AB00", glow: "rgba(249, 171, 0, 0.28)" };
    default:
      return { icon: <Binary className={sizeClass} />, color: "#CBD5E1", glow: "rgba(203, 213, 225, 0.2)" };
  }
}
