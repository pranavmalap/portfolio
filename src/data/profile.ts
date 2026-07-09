// Central content source for the portfolio — edit this file to update
// the site copy, projects, experience, and education in one place.
// This same data also powers the "Ask AI about Pranav" chatbot's
// knowledge base (see src/app/api/chat/route.ts).

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface Activity {
  role: string;
  org: string;
  bullets: string[];
}

export interface Language {
  name: string;
  level: string;
}

export const profile = {
  name: "Pranav Malap",
  role: "Frontend Developer / AI Enthusiast",
  tagline:
    "Building impactful software through innovation, clean code, and continuous learning.",
  location: "Chemnitz, Germany",
  email: "pranavmalap.de@gmail.com",
  phone: "+49 15510669453",

  github: "https://github.com/pranavmalap",
  linkedin: "https://linkedin.com/in/pranavmalap",
  resumeUrl: "/resume/Pranav_Malap_Lebenslauf.pdf",
  about:
    "I'm a software developer currently pursuing an M.Sc. in Web Engineering at TU Chemnitz. With experience developing real-world business applications, I enjoy building clean, scalable, and user-focused software while continuously learning and embracing new technologies to solve meaningful problems.",
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Java", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "GSAP",
      "Redux",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Laravel", "CodeIgniter", "REST APIs"],
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code"],
  },
];

export const experience: Experience[] = [
  {
    role: "Web Developer Intern",
    company: "Ace 360 Degree",
    location: "Mumbai, India",
    period: "Dec 2024 – Aug 2025",
    bullets: [
      "Revived a legacy CRM system by resolving long-standing issues and shipping new features on CodeIgniter 3",
      "Improved UI/UX and added new functionality to streamline the sales workflow",
      "Built responsive interfaces with HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Innosteelix — Company Website",
    description:
      "Production company website built during the internship to showcase services and project portfolio. Built the backend architecture with Laravel MVC and implemented dynamic content management; improved performance, maintainability, and UX with Tailwind CSS.",
    stack: ["Laravel", "MVC", "Tailwind CSS"],
    link: "https://innosteelix.com",
    featured: true,
  },
  {
    title: "Kuwalsan Architects — Company Website",
    description:
      "Ongoing maintenance of a company website, shipping content and functional updates on demand. Fixed bugs and adapted existing components to keep performance and content current; maintained UI/UX with Tailwind CSS and global state with Redux.",
    stack: ["Next.js", "Node.js", "MySQL", "Redux", "Tailwind CSS"],
    link: "https://kuwalsanamarchitekts.com",
    featured: true,
  },
  {
    title: "Foodie Connect",
    description:
      "Full-stack recipe-sharing platform with authentication, likes, and comments. Built REST APIs and handled dynamic data with MongoDB and Express.js.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/pranavmalap/foodieconnect",
    featured: true,
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.Sc. Web Engineering",
    institution: "Technische Universität Chemnitz",
    period: "Since 2025 — currently in 2nd semester (SoSe 2026)",
  },
  {
    degree: "B.Sc. Information Technology",
    institution: "University of Mumbai",
    period: "2021 – 2024",
  },
  {
    degree: "Java Full Stack Development",
    institution: "DVOC Institute",
    period: "2023 – 2024",
  },
];

export const activities: Activity[] = [
  {
    role: "Director of Digital Communications",
    org: "Rotaract Club of Hinduja College",
    bullets: [
      "Led digital initiatives, including website management and event promotion",
      "Organized and hosted events to boost community engagement",
    ],
  },
];

export const languages: Language[] = [
  { name: "English", level: "B2" },
  { name: "German", level: "A2" },
];
