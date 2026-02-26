import { NavbarItem, SocialMedia, Activity, Project } from "@/types/types";

export const navbarItems: NavbarItem[] = [
  {
    label: "Work Experience",
    href: "#experiences",
  },
  {
    label: "Activities",
    href: "#activities",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
];

export const socialMedia: SocialMedia[] = [
  {
    icon: "/icons/ic_github.svg",
    href: "https://github.com/vickyadrii",
  },
  {
    icon: "/icons/ic_linkedin.svg",
    href: "https://linkedin.com/in/vickyadrii",
  },
  {
    icon: "/icons/ic_medium.svg",
    href: "https://medium.com/@vickyadri29",
  },
  {
    icon: "/icons/ic_x.svg",
    href: "https://x.com/viiiikk_",
  },
];

export const workExperience: Activity[] = [
  {
    id: 0,
    logo: "/icons/ic_brms.webp",
    company_name: "Bumi Resource Minerals",
    company_url: "https://www.bumiresourcesminerals.com",
    title: "Software Engineer",
    period: "Dec 2025 - Present",
    tech_stacks: ["TypeScript", "Express.js", "Nest.js", "React", "AWS", "PostgreSQL", "Docker"],
    responsibilities: [
      "Designed and implemented a CI/CD pipeline to replace manual EC2 deployments, automating build and release processes, reducing human error, and improving deployment speed and reliability.",
      "Migrated JavaScript codebase to TypeScript, improving codebases, type safety, and long-term maintainability.",
    ],
  },
  {
    id: 1,
    logo: "/icons/ic_pegadaian.png",
    company_name: "Pegadaian",
    company_url: "https://pegadaian.co.id",
    title: "Fullstack Engineer",
    period: "Jul 2024 - Dec 2025",
    tech_stacks: ["TypeScript", "Vue.js", "Nest.js", "React Native", "PostgreSQL", "GCP", "Redis", "Docker"],

    responsibilities: [
      "Led a team of 5 engineers to develop an attendance app, migrating codebases from monolith to microservices architecture for better maintainability and fault isolation, restructuring database schema and queries to improve API performance, and building reusable UI components to reduce development time.",
      "Optimized API performance and database queries, reducing response time from 3 seconds to 249ms (~91%) and significantly improving overall system performance and user experience.",
      "Enhanced codebase stability by implementing unit testing from 0% to 82.1%, reducing production bugs by 40%, accelerating debugging, and improving application stability.",
      "Created detailed project documentation, improving onboarding efficiency and ensuring smoother knowledge transfer within the team, making role transitions easier when team members switch positions.",
    ],
  },
  {
    id: 2,
    logo: "/icons/ic_eduqat.svg",
    company_name: "Eduqat",
    company_url: "https://eduqat.com",
    title: "Frontend Engineer",
    period: "Jan 2023 - Jul 2024",
    tech_stacks: ["TypeScript", "React", "NextJS", "Redux", "GraphQL", "Ant Design", "Styled-Components", "Tailwind"],
    responsibilities: [
      "Developed an AI-powered assignment feature, enabling teachers to evaluate student submissions, generate instant feedback, and assign grades, improving assessment accuracy and reducing review time by over 80%.",
      "Migrated styling from Ant Design to Tailwind, reducing bundle size and improving rendering performance.",
      "Built and implemented custom components, reducing code duplication and enabling reusable components with multiple variants for better maintainability.",
      "Developed a drip course feature, allowing teachers to schedule and release course content by sections, providing a quick and easy way to deliver materials.",
    ],
  },
  {
    id: 3,
    logo: "/icons/ic_kalla.svg",
    company_name: "Kalla Group",
    company_url: "https://kalla.co.id",
    title: "Web Developer Intern",
    period: "Aug 2022 - Dec 2022",
    tech_stacks: ["JavaScript", "React", "NextJS", "NodeJS", "ExpressJS", "MySQL", "Tailwind"],
    responsibilities: [
      "Migrated a broadcast message feature from SMS to WhatsApp, allowing admins to send bulk messages more efficiently and improve communication with customers.",
      "Developed a chatbot feature, making interacting with customers and responding to their inquiries easier.",
    ],
  },
  // {
  //   id: 4,
  //   logo: "/icons/ic_kodingna.png",
  //   company_name: "Kodingna",
  //   title: "Frontend Web Developer",
  //   period: "Aug 2022 - Dec 2022",
  //   tech_stacks: ["JavaScript", "React", "Tailwind", "Figma", "Agile Methodology"],
  //   responsibilities: [
  //     "Designed and Developed a company profile website.",
  //     "Wrote clean and maintainable code following best practices and coding standards.",
  //   ],
  // },
];

export const activities: Activity[] = [
  {
    id: 0,
    logo: "/icons/ic_bearmentor.png",
    company_name: "Bearmentor",
    title: "Frontend Mentor",
    period: "Jun 2024 - Dec 2025",
  },
  {
    id: 1,
    logo: "/icons/ic_hammercode.svg",
    company_name: "Hammercode",
    title: "Mentor/Facilitator",
    period: "May 2023 - Dec 2024",
  },
  // {
  //   id: 2,
  //   logo: "/icons/ic_gdsc-untad.png",
  //   company_name: "GDSC Untad",
  //   title: "Curriculum Core Team",
  //   period: "Oct 2022 - Oct 2023",
  // },
  {
    id: 2,
    logo: "/icons/ic_bangkit.png",
    company_name: "Bangkit Academy",
    title: "Cloud Computing Path",
    period: "Feb 2022 - Jul 2022",
  },
  {
    id: 3,
    logo: "/icons/ic_programming-tadulako.png",
    company_name: "Programming Tadulako",
    title: "Web Development Mentor",
    period: "Nov 2021 - Nov 2022",
  },
];

export const projects: Project[] = [
  {
    id: 0,
    thumbnail: "/images/aralia.webp",
    name: "Aralia",
    summary: "Aralia is an employee management application used to manage employees.",
    tech_stacks: ["TypeScript", "Microservices", "Vue.js", "Nest.js", "Express.js", "Redis", "Tailwind", "PostgreSQL"],
  },
  {
    id: 1,
    thumbnail: "/images/daily-course.png",
    name: "Daily Course",
    summary:
      "Daily Course is a learning platform for those who want to learn about technologies in a fun and chill way.",
    tech_stacks: [
      "TypeScript",
      "Go",
      "Echo",
      "NextJS",
      "Cloud Build",
      "Cloud Run",
      "CI/CD",
      "Docker",
      "Tailwind",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    thumbnail: "/images/village-web.png",
    name: "Website Desa",
    summary: "A platform designed for villages to create and customize their landing page websites.",
    tech_stacks: ["React", "Laravel", "Tailwind", "Ant Design", "Zustand", "MySQL", "VPS"],
  },
  {
    id: 3,
    thumbnail: "/images/impact-palu.png",
    name: "Impact Palu",
    summary: "Impact Palu is a social entrepreneurship incubator based in Palu.",
    tech_stacks: ["TypeScript", "Vite", "React", "Tailwind", "Shadcn UI"],
  },
  // {
  //   id: 4,
  //   thumbnail: "/images/hrev.png",
  //   name: "HREV",
  //   summary: "HREV is a software house specializing in software development and IT services",
  //   tech_stacks: ["Typescript", "React", "Vite", "Tailwind"],
  // },
  // {
  //   id: 4,
  //   thumbnail: "/images/badonordarah.png",
  //   name: "Badonordarah",
  //   summary: "Facilitate blood donation and assist those in need of blood in Palu city.",
  //   tech_stacks: ["React", "Vite", "Tailwind", "ExpressJS", "MySQL"],
  // },
  // {
  //   id: 5,
  //   thumbnail: "/images/sn-residence.png",
  //   name: "SN Residence",
  //   summary:
  //     "SN Residence is a subsidized housing development with a unique concept and the highest quality standards and ensuring it is flood-free.",
  //   tech_stacks: ["React", "Vite", "Tailwind"],
  // },
];
