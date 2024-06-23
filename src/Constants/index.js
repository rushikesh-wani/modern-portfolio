import Project1 from "../asset/project/Project01.png";
import Project2 from "../asset/project/Project02.png";
import Project3 from "../asset/project/Project03.png";
import Project4 from "../asset/project/Project04.png";

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
    no: "01",
    ProjectTitle: "MY PORTFOLIO WEBSITE",
    Img: Project4,
    ProjectDescrp:
      "Built a personal portfolio website using React and Tailwind CSS. Features include a clean and modern design, responsive layout, smooth navigation, and optimized performance for showcasing projects and skills effectively.",
    Tags: ["React JS", "Tailwind CSS"],
    LiveLink: "",
    GithubLink: "",
  },
];
