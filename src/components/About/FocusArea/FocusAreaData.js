import { TbNetwork } from "react-icons/tb";
import {
  FiTrendingUp,
  FiLayers,
  FiCode,
  FiSearch,
  FiGitBranch,
} from "react-icons/fi";

export const FOCUS_AREAS = [
  {
    id: 1,
    accent: "#6ee7c7",
    icon: TbNetwork,
    path: "ai/core",
    title: "Artificial Intelligence",
    desc: "Exploring intelligent systems and AI-powered solutions for real-world problems.",
  },
  {
    id: 2,
    accent: "#7c9eff",
    icon: FiTrendingUp,
    path: "ml/models",
    title: "Machine Learning",
    desc: "Designing predictive models and experimenting with modern machine learning techniques.",
  },
  {
    id: 3,
    accent: "#f0b429",
    icon: FiLayers,
    path: "web/stack",
    title: "Full Stack Development",
    desc: "Building responsive, scalable, and modern web applications using the MERN stack.",
  },
  {
    id: 4,
    accent: "#ff7a72",
    icon: FiCode,
    path: "cp/algo",
    title: "Competitive Programming",
    desc: "Strengthening algorithmic thinking and problem-solving through competitive coding.",
  },
  {
    id: 5,
    accent: "#c084fc",
    icon: FiSearch,
    path: "research/lab",
    title: "Research & Innovation",
    desc: "Conducting AI research and exploring innovative technologies with practical impact.",
  },
  {
    id: 6,
    accent: "#4ade80",
    icon: FiGitBranch,
    path: "oss/community",
    title: "Open Source Learning",
    desc: "Continuously learning from the developer community and contributing to collaborative projects.",
  },
];
