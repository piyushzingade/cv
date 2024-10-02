// import {
//   AmbitLogo,
//   BarepapersLogo,
//   BimLogo,
//   CDGOLogo,
//   ClevertechLogo,
//   ConsultlyLogo,
//   EvercastLogo,
//   Howdy,
//   JarockiMeLogo,
//   JojoMobileLogo,
//   Minimal,
//   MobileVikingsLogo,
//   MonitoLogo,
//   NSNLogo,
//   ParabolLogo,
//   TastyCloudLogo,
//   YearProgressLogo,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Piyush Zingade",
  initials: "PZ",
  location: "Mumbai, India",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "piyushzingade@gmail.com",
    tel: "+91 8169224788",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/piyushzingade",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/piyush-zingade-306575252/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ZingadePiyush",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: " University of Mumbai",
      degree: "Bachelor's Degree in Information Technology",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "MVLU COLLEGE",
      link: "https://",
      badges: ["Remote"],
      title: "Frontend Developer",
      // logo: ParabolLogo,
      start: "July 2024",
      end: " Dec 2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, Docker",
    },
  
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      // logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      // logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      // logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    
  ],
} as const;