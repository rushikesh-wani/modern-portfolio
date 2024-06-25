import Project1 from "../asset/project/Project01.png";
import Project2 from "../asset/project/Project02.png";
import Project3 from "../asset/project/Project03.png";
import Project4 from "../asset/project/Project04.png";
import {
  C,
  CSS,
  GitHub,
  HTML,
  Java,
  JavaScript,
  MYSQL,
  MongoDB,
  R,
  ReactJs,
  ReduxJs,
  Tailwind,
  VSCode,
} from "../Constants/Svg";

export const NavLinks = [
  { label: "#Home", name: "Home", href: "/home" },
  { label: "#About-Us", name: "About Us", href: "/about-us" },
  { label: "#Product", name: "Product", href: "/product" },
  { label: "#Contact", name: "Contact Us", href: "/contact-us" },
];

export const ProjectList = [
  {
    no: "01",
    ProjectTitle: "MERN CRUD APPLICATION",
    Img: Project1,
    ProjectDescrp:
      "Developed a full-stack CRUD MERN application using the MERN stack for efficient data management and user interaction. Features include a user-friendly interface, robust backend, scalable database, responsive design, and deployment on Render.",
    Tags: ["MERN Stack"],
    LiveLink: "",
    GithubLink: "",
  },
  {
    no: "02",
    ProjectTitle: "FOOD-VILLA FOOD APP",
    Img: Project2,
    ProjectDescrp:
      "Utilized Swiggy’s API for real-time restaurant data and menus. Implemented Redux for efficient cart management, developed a Shimmer UI for seamless transitions, integrated react-router-dom for navigation, and enabled easy cart modifications.",
    Tags: ["React JS", "Tailwind CSS"],
    LiveLink: "",
    GithubLink: "",
  },
  {
    no: "03",
    ProjectTitle: "YOUTUBE CLONE",
    Img: Project3,
    ProjectDescrp:
      "Integrated the YouTube Public Video API to fetch the top 50 videos. Implemented a Watch Page with real-time metrics, a debounced Search Bar, caching for optimized searching, and a Live Chat component with API polling for realtime user interaction.",
    Tags: ["React JS", "Tailwind CSS"],
    LiveLink: "",
    GithubLink: "",
  },
  {
    no: "04",
    ProjectTitle: "MY PORTFOLIO WEBSITE",
    Img: Project4,
    ProjectDescrp:
      "Built a personal portfolio website using React and Tailwind CSS. Features include a clean and modern design, responsive layout, smooth navigation, and optimized performance for showcasing projects and skills effectively.",
    Tags: ["React JS", "Tailwind CSS"],
    LiveLink: "",
    GithubLink: "",
  },
];

export const SkillList = [
  {
    id: 1,
    component: <ReactJs />,
    category: "Frontend",
    label: "React JS",
    bgClass: "bg-sky-200/50 dark:bg-sky-700/50",
  },
  {
    id: 2,
    component: <ReduxJs />,
    category: "Frontend",
    label: "Redux JS",
    bgClass: "bg-violet-200/50 dark:bg-violet-900/50",
  },
  {
    id: 3,
    component: <Tailwind />,
    category: "Frontend",
    label: "Tailwind",
    bgClass: "bg-sky-200/50 dark:bg-sky-800/50",
  },
  {
    id: 4,
    component: <HTML />,
    category: "Frontend",
    label: "HTML",
    bgClass: "bg-orange-200/50 dark:bg-orange-800/50",
  },
  {
    id: 5,
    component: <CSS />,
    category: "Frontend",
    label: "CSS",
    bgClass: "bg-blue-200/50 dark:bg-blue-800/50",
  },
  {
    id: 6,
    component: <JavaScript />,
    category: "Frontend",
    label: "JavaScript",
    bgClass: "bg-yellow-200/50 dark:bg-yellow-800/50",
  },
  {
    id: 7,
    component: <Java />,
    category: "Other",
    label: "Java",
    bgClass: "bg-blue-200/50 dark:bg-blue-800/50",
  },
  {
    id: 8,
    component: <C />,
    category: "Other",
    label: "C",
    bgClass: "bg-indigo-200/50 dark:bg-indigo-800/50",
  },
  {
    id: 9,
    component: <R />,
    category: "Other",
    label: "R",
    bgClass: "bg-blue-200/50 dark:bg-blue-800/50",
  },
  {
    id: 10,
    component: <VSCode />,
    category: "Other",
    label: "VS Code",
    bgClass: "bg-sky-200/50 dark:bg-sky-800/50",
  },
  {
    id: 11,
    component: <GitHub />,
    category: "Other",
    label: "GitHub",
    bgClass: "bg-stone-200/50 dark:bg-stone-800/50",
  },
  {
    id: 12,
    component: <MongoDB />,
    category: "Backend",
    label: "MongoDB",
    bgClass: "bg-green-200/50 dark:bg-green-800/50",
  },
  {
    id: 13,
    component: <MYSQL />,
    category: "Backend",
    label: "MySQL",
    bgClass: "bg-neutral-200/50 dark:bg-neutral-800/50",
  },
];
