import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-blue-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-blue-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: <SiTailwindcss className="h-16 w-16 text-blue-500" />,
    text: "Proficient in Tailwind CSS, leveraging its utility-first design approach to rapidly build responsive and visually appealing user interfaces with consistent styling.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: "Extensive experience with React, adept at creating dynamic and reusable components for scalable, high-performance user interfaces.",
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: <SiRedux className="h-16 w-16 text-blue-500" />,
    text: "Skilled in Redux for effective global state management, ensuring predictable data flow and stability in complex web applications.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-blue-500" />,
    text: "Experienced in MongoDB, specializing in designing and implementing scalable NoSQL databases for efficient backend data storage solutions.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNode className="h-16 w-16 text-blue-500" />,
    text: "Expertise in Node.js, building high-performance server-side applications with a focus on non-blocking, event-driven architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://unsplash-images-app-demo.netlify.app/",
    github: "https://github.com/LeonChin/unsplash-images",
    title: "Unsplash Images",
    text: "A image searching web app",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-vite-projects-14-cart.netlify.app/",
    github: "https://github.com/LeonChin/cart-demo",
    title: "redux cart demo",
    text: "A shopping cart demo using redux to manage states.",
  },
  // {
  //   id: nanoid(),
  //   img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   url: "https://react-projects.netlify.app/",
  //   github: "https://github.com/john-smilga",
  //   title: "third project",
  //   text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  // },
];
