import {
  IoMailOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoPhonePortraitOutline, 
} from "react-icons/io5";
import { FaReact, FaNodeJs, FaGithub, FaGit, FaJava, FaAngular  } from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiExpress,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiC,
  SiFirebase,
  SiSmartthings,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { TbBrandLeetcode } from "react-icons/tb";
import Idcard from "../assets/Project/Idcard.png";
import MovieHub from "../assets/Project/MovieHub.png";
import apps from "../assets/Project/30apps.png";
import VaultNotes from "../assets/Project/VaultNotes.png";

export const profile = {
  name: "SANJAY D",
  age: 20,
  domain: "MERN DEVELOPER",
  summary:
    "MERN Developer skilled in React.js, Node.js, and building seamless web experiences",
  location: "Chennai, India",
  phone: "+919342000437",
  email: "josephofficial.sanjay@gmail.com",
  cvLink:"https://resume-xsmi.onrender.com/get-resume",
  contact: [
    { id: 1, name: "+91 9342000437", link: "", icon: IoPhonePortraitOutline },
    {
      id: 2,
      name: "josephofficial.sanjay@gmail.com",
      link: "gmail.com",
      icon: IoMailOutline,
    },
  ],
  social: [
    {
      id: 1,
      name: "GitHub",
      link: "github.com/sanjaydeveloper-001",
      icon: IoLogoGithub,
      color: "#ffff",
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "linkedin.com/in/josanweb",
      icon: IoLogoLinkedin,
      color: "#2196F3",
    },
    {
      id: 3,
      name: "LeetCode",
      link: "leetcode.com/u/Sanjay_dev_001",
      icon: TbBrandLeetcode,
      color: "#f89820",
    },
  ],
};

export const education = [
  {
    id: 1,
    institution: "St. Joseph’s Institute of Technology, OMR, Chennai",
    course: "B.Tech Information Technology",
    duration: "2023 - 2027",
    cgpa: "7.93",
  },
  {
    id: 2,
    institution: "Government Boys Higher Secondary School, Vembakkam",
    course: "HSC",
    duration: "2016 - 2023",
    percentage: "67.5%",
  },
];






// Experience 
export const experience = [
  {
    id: 1,
    company: "RETECH Solutions Pvt Ltd",
    role: "AI Developer",
    duration: "Dec 2024",
    description:
      "Explored fundamentals of Artificial Intelligence and Machine Learning, including practical real-world applications.",
    type: "Internship",
  },
];

// Projects

export const projects = [
  {
    id: 1,
    title: "Vault Notes",
    tech: ["MERN Stack", "JWT Authentication", "Captcha Verification"],
    description:
      "Store resumes, notes, and files with permanent links that never change – no email, no 2FA, just your username and password.",
    image: VaultNotes,
    demo: "https://vaultnotesclient.vercel.app",
    repo: "https://github.com/sanjaydeveloper-001/Personal-Vault",
  },
  {
    id: 2,
    title: "ID Card Generator",
    tech: ["MERN Stack", "SerpAPI", "Google OAuth"],
    description:
      "Built a dynamic web application to generate ID cards with logos fetched automatically from the internet. Implemented authentication, trash/restore features, and user-friendly design.",
    image: Idcard,
    demo: "https://idcardfree.netlify.app",
    repo: "https://github.com/sanjaydeveloper-001/ID-Card-Generator-Free",
  },
  {
    id: 3,
    title: "Movie Hub",
    tech: ["Mern Stack", "TMDB API", "Google OAuth", "JWT"],
    description:
      "Developed a movie platform with Google Authentication for secure login and JWT-based session management. Integrated REST APIs for real-time movie data, added search, watchlist, and responsive UI features.",
    image: MovieHub,
    demo: "https://moviehub-sanjay.vercel.app/",
    repo: "https://github.com/sanjaydeveloper-001/The-Movie-Hub",
  },
  {
    id: 4,
    title: "30 Days – 30 Apps Challenge",
    tech: ["MERN Stack"],
    description:
      "Completed a personal challenge to build 30 full-stack apps in 30 days, covering AI, e-commerce, and productivity apps.",
    image: apps,
    demo: "https://30appsgallery.vercel.app",
    repo: "https://github.com/sanjaydeveloper-001/Vanilla-to-Vision-30-Apps",
  },
];



/* === icon map for common frameworks/tools === */
export const TECH_ICON_MAP = {
  mern: { Icon: FaReact, color: "#61DBFB" },
  react: { Icon: FaReact, color: "#61DBFB" },
  node: { Icon: FaNodeJs, color: "#3C873A" },
  express: { Icon: SiExpress, color: "#000000" },
  tailwindcss: { Icon: SiTailwindcss, color: "#38BDF8" },
  bootstrap: { Icon: SiBootstrap, color: "#7A2B8F" },
  git: { Icon: FaGit, color: "#F05032" },
  github: { Icon: FaGithub, color: "#181717" },
  vscode: { Icon: VscVscode, color: "#007ACC" },
  flutter: { Icon: SiFlutter, color: "#02569B" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  firebase: { Icon: SiFirebase, color: "#FFCA28" },
  redux: { Icon: SiRedux, color: "#764ABC" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss3, color: "#264DE4" },
  python: { Icon: SiPython, color: "#3776AB" },
  c: { Icon: SiC, color: "#283593" },
  java: { Icon: FaJava, color: "#f89820" },
  angular:{Icon:FaAngular, color:"#c71585"},
  thingsboard:{Icon:SiSmartthings, color:"47A248"}
};





// Skills
export const skills = {
  languages: [
    {
      name: "Java",
      level: 75,
    },
    {
      name: "C",
      level: 50,
    },
    {
      name: "Python",
      level: 35,
    },
    {
      name: "HTML",
      level: 90,
    },
    {
      name: "CSS",
      level: 85,
    },
    {
      name: "Js",
      level: 70,
    },
    {
      name: "React",
      level: 80,
    },
    {
      name: "Angular",
      level: 60,
    },
    {
      name: "Node",
      level: 50,
    },
  ],
  frameworks_tools: [
    "MERN",
    "TailwindCSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "VS Code",
    "Angular",
    "ThingsBoard",
    "Flutter",
    "MongoDB",
    "Firebase",
    "Redux",
  ],
  softSkills: [
    "Quick Learning",
    "Leadership",
    "Problem Solving",
    "Critical Thinking",
    "Teamwork",
    "Communication",
  ],
};

export const interests = [
  "Artificial Intelligence",
  "IoT & Smart Systems",
  "Machine Learning",
  "Cloud Computing",
  "UI / UX Design",
  "App Development",
  "Open Source Contribution",
  "Backend Engineering",
  "Software Testing & QA",
  "Database Management Systems",
  "Big Data Analytics",
  "Blockchain & Web3",
];

// Certification
// Certification Images
import frontend from "../assets/Certificates/Frontend.png";
import graphics from "../assets/Certificates/Graphics.png";
import javaB from "../assets/Certificates/JavaB.png";
import pythonB from "../assets/Certificates/PythonB.png";
import pythonDs from "../assets/Certificates/PythonDs.png";
import reactB from "../assets/Certificates/ReactB.png";
import reactJs from "../assets/Certificates/ReactJs.png";
import gitgithub from "../assets/Certificates/GitGithub.png";

export const certifications = [
  {
    id: 1,
    name: "Git , GitHub",
    issuer: "Google",
    image: gitgithub,
    link: "https://www.coursera.org/account/accomplishments/verify/Y75H3HS3Z5O5",
  },
  {
    id: 2,
    name: "Graphics Design (Elite)",
    issuer: "NPTEL",
    image: graphics,
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/107/noc25-de12/Course/NPTEL25DE12S54320122404502505.pdf",
  },
  {
    id: 3,
    name: "Frontend Developer Certification",
    issuer: "HackerRank",
    image: frontend,
    link: "https://www.hackerrank.com/certificates/60d3d0677c76",
  },
  {
    id: 4,
    name: "Python for Data Science (Elite)",
    issuer: "NPTEL",
    image: pythonDs,
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs104/Course/NPTEL25CS104S13320337209133964.pdf",
  },
  {
    id: 5,
    name: "React JS",
    issuer: "Scaler",
    image: reactJs,
    link: "https://moonshot.scaler.com/s/sl/uvPp1lYf3g?_gl=1*zh3azi*_gcl_au*MTMxNzk1OTk4Mi4xNzUyOTI5NjUy*FPAU*MTMxNzk1OTk4Mi4xNzUyOTI5NjUy*_ga*MTE3OTk3OTUzMy4xNzUyOTI5NjUz*_ga_53S71ZZG1X*czE3NTc1OTQ3NzUkbzIkZzEkdDE3NTc1OTQ4MzQkajEkbDAkaDE0NDYyNDc4MTQ.",
  },
  {
    id: 6,
    name: "React (Basic)",
    issuer: "HackerRank",
    image: reactB,
    link: "https://www.hackerrank.com/certificates/f39393f134bc",
  },
  {
    id: 7,
    name: "Python (Basic)",
    issuer: "HackerRank",
    image: pythonB,
    link: "https://www.hackerrank.com/certificates/177fae15eadc",
  },
  {
    id: 8,
    name: "Java Programming",
    issuer: "HackerRank",
    image: javaB,
    link: "https://www.hackerrank.com/certificates/d875789a81d5",
  },
];

