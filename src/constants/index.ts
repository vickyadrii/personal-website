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
    logo: "/icons/ic_pegadaian.png",
    company_name: "Pegadaian",
    company_url: "https://pegadaian.co.id",
    title: "Fullstack Engineer",
    period: "Aug 2024 - Present",
    tech_stacks: ["TypeScript", "VueJS", "NestJS", "React Native", "Laravel", "Redis", "PostgreSQL"],
    responsibilities: [
      "Implemented unit testing from 0% to 82.1% coverage, reducing regression issues, and minimizing existing bugs for a stable and maintainable codebase.",
      "Migrated JavaScript codebases to TypeScript in an employee attendance app, minimizing errors to simplify debugging and resulting in a reliable development experience.",
      "Created detailed project documentation, improving onboarding efficiency and ensuring smoother knowledge transfer within the team, making role transitions easier when team members switch positions.",
      "Integrated Firebase Cloud Mess aging (FCM) to deliver real-time push notifications, helping employees instantly know whether their leave request was approved or rejected. ",
    ],
  },
  {
    id: 1,
    logo: "/icons/ic_eduqat.svg",
    company_name: "Eduqat",
    company_url: "https://eduqat.com",
    title: "Frontend Engineer",
    period: "Jan 2023 - Jul 2024",
    tech_stacks: ["TypeScript", "React", "NextJS", "Redux", "GraphQL", "Ant Design", "Styled-Components", "Tailwind"],
    responsibilities: [
      "Migrated styling from Ant Design to Tailwind, reducing bundle size and improving rendering performance.",
      "Developed an AI-powered assignment feature, enabling teachers to automatically assess submissions, provide instant feedback, and assign grades efficiently.",
      "Built and implemented custom components, reducing code duplication and enabling reusable components with multiple variants for better maintainability.",
      "Developed a drip course feature, allowing teachers to schedule and release course content by sections, providing a quick and easy way to deliver materials.",
    ],
  },
  {
    id: 2,
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
  //   id: 3,
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
  // {
  //   id: 0,
  //   logo: "/icons/ic_bearmentor.png",
  //   company_name: "Bearmentor",
  //   title: "Frontend Mentor",
  //   period: "Jun 2024 - Present",
  // },
  {
    id: 1,
    logo: "/icons/ic_hammercode.svg",
    company_name: "Hammercode",
    title: "Mentor/Facilitator",
    period: "May 2023 - Present",
  },
  {
    id: 2,
    logo: "/icons/ic_gdsc-untad.png",
    company_name: "GDSC Untad",
    title: "Curriculum Core Team",
    period: "Oct 2022 - Oct 2023",
  },
  {
    id: 3,
    logo: "/icons/ic_bangkit.png",
    company_name: "Bangkit Academy",
    title: "Cloud Computing Path",
    period: "Feb 2022 - Jul 2022",
  },
  {
    id: 4,
    logo: "/icons/ic_programming-tadulako.png",
    company_name: "Programming Tadulako",
    title: "Web Development Mentor",
    period: "Nov 2021 - Nov 2022",
  },
];

export const projects: Project[] = [
  {
    id: 0,
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
    id: 1,
    thumbnail: "/images/village-web.png",
    name: "Website Desa",
    summary: "A platform designed for villages to create and customize their landing page websites.",
    tech_stacks: ["React", "Laravel", "Tailwind", "Ant Design", "Zustand", "MySQL", "VPS"],
  },
  {
    id: 2,
    thumbnail: "/images/impact-palu.png",
    name: "Impact Palu",
    summary: "Impact Palu is a social entrepreneurship incubator based in Palu.",
    tech_stacks: ["TypeScript", "Vite", "React", "Tailwind", "Shadcn UI"],
  },
  {
    id: 3,
    thumbnail: "/images/hrev.png",
    name: "HREV",
    summary: "HREV is a software house specializing in software development and IT services",
    tech_stacks: ["Typescript", "React", "Vite", "Tailwind"],
  },
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
