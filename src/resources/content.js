import { Logo } from "@once-ui-system/core";


const person = {
  firstName: "Franklin",
  lastName: "Oguejiofor",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/me.jpg",
  email: "foguejiofor14@gmail.com",
  location: "Africa/Lagos", // IANA time zone format
  languages: ["English", "Igbo"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I write about full stack development, DevOps, and building production systems—sharing deep dives and real-world engineering insights.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Emeenent14",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chukwuemeka-franklin-54a02334b/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Emeenent14",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/2349066507858",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "document",
    link: "/resume.html",
  },
];

const home = {
  path: "/",
  image: "/images/og/og-image.jpg?v=2",
  label: "Home",
  title: `Franklin Oguejiofor (Emeenent) | Full Stack Developer`,
  description: `Portfolio of Franklin Oguejiofor (Emeenent, Chukwuemeka Oguejiofor) - Full Stack Developer specializing in React, Next.js, Django, NestJS, and DevOps. Building production-grade fintech, SaaS, and automation systems.`,
  keywords: [
    "Franklin Oguejiofor",
    "Emeenent",
    "Emeenent14",
    "Franklin O.",
    "Chukwuemeka Oguejiofor",
    "Chukwuemeka Franklin Oguejiofor",
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
    "Django Developer",
    "NestJS Developer",
    "DevOps Engineer",
    "Nigerian Developer",
    "Software Engineer"
  ],
  headline: <>Building end-to-end systems that just work</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">E-Tax Platform</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m Franklin — a full stack dev building fintech, SaaS, and automation systems end-to-end.
      <br /> React in the morning, Django/NestJS at night. Deploying in between.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Franklin is a Full Stack Developer with 3+ years of experience building and deploying
        production-grade fintech, SaaS, and automation systems. Equally comfortable crafting
        polished React interfaces and architecting robust backend services, with a strong foundation
        in cloud infrastructure and DevOps.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "OH-Res",
        timeframe: "Nov 2025 – Present",
        role: "Backend & DevOps Engineer",
        achievements: [
          <>Principal engineer across EDI Solution (www.oh-res.com) and E-Tax Platform (etax.oh-res.com).</>,
          <>Designed and deployed complete AWS EC2 production infrastructure serving 100+ active users.</>,
          <>Built backend services with Django, NestJS, and Express handling authentication, payments, and tax automation.</>,
          <>Containerized services with Docker and implemented CI/CD pipelines, reducing deployment time by ~60%.</>,
        ],
        images: [],
      },
      {
        company: "SafeSwap",
        timeframe: "Oct 2024 – Jul 2025",
        role: "Founder / Full Stack Developer",
        achievements: [
          <>Built and launched an escrow-based fintech platform using Next.js, Django, Celery, and PostgreSQL.</>,
          <>Integrated Flutterwave for payments and Dojah for identity verification.</>,
          <>Acquired 25+ real users and processed live transactions before shutdown due to regulatory constraints.</>,
        ],
        images: [],
      },
      {
        company: "Upwork",
        timeframe: "Dec 2021 – Aug 2023",
        role: "Freelance Frontend Developer",
        achievements: [
          <>Built responsive web interfaces for small businesses using React and Tailwind CSS.</>,
          <>Developed landing pages, dashboards, and e-commerce interfaces optimized for performance.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Nigeria, Nsukka",
        description: <>B.Eng. Electronics & Computer Engineering (2024 – 2029)</>,
      },
      {
        name: "Self-Taught Engineering",
        description: <>Full stack development, DevOps, and cloud infrastructure across modern stacks</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Languages & Technologies",
    skills: [
      {
        title: "Languages",
        description: <>TypeScript, JavaScript, Python, and Rust for systems-level programming</>,
        images: [
          { src: "/images/projects/project-01/typescript.svg", width: 3, height: 3, alt: "TypeScript" },
          { src: "/images/projects/project-01/javascript.svg", width: 3, height: 3, alt: "JavaScript" },
          { src: "/images/projects/project-01/python.svg", width: 3, height: 3, alt: "Python" },
        ],
      },
      {
        title: "Backend Frameworks",
        description: <>Building robust APIs and services with Django, DRF, NestJS, and Express</>,
        images: [
          { src: "/images/projects/project-01/django.png", width: 3, height: 3, alt: "Django" },
          { src: "/images/projects/project-01/drf.png", width: 3, height: 3, alt: "DRF" },
          { src: "/images/projects/project-01/nodejs-icon.svg", width: 3, height: 3, alt: "Node.js" },
        ],
      },
      {
        title: "Frontend",
        description: <>React and Next.js for building complete, user-facing systems</>,
        images: [
          { src: "/images/projects/project-01/react.svg", width: 3, height: 3, alt: "React" },
          { src: "/images/projects/project-01/next.svg", width: 3, height: 3, alt: "Next.js" },
          { src: "/images/projects/project-01/tailwind-css-2.svg", width: 3, height: 3, alt: "Tailwind CSS" },
        ],
      },
      {
        title: "Databases",
        description: <>PostgreSQL, MongoDB, SQLite, and cloud storage with AWS S3</>,
        images: [
          { src: "/images/projects/project-01/poostgresql.png", width: 3, height: 3, alt: "PostgreSQL" },
          { src: "/images/projects/project-01/firebase.svg", width: 3, height: 3, alt: "Firebase" },
        ],
      },
      {
        title: "DevOps & Cloud",
        description: <>AWS (EC2, ECS), Docker, GitHub Actions, Nginx, and CI/CD pipelines</>,
        images: [
          { src: "/images/projects/project-01/github.svg", width: 3, height: 3, alt: "GitHub" },
          { src: "/images/projects/project-01/postman.svg", width: 3, height: 3, alt: "Postman" },
          { src: "/images/projects/project-01/visual-studio-code.svg", width: 3, height: 3, alt: "VS Code" },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Code, AI, and the Future",
  description: `Thoughts, breakdowns, and deep dives by ${person.name}`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `A showcase of full stack and AI-driven projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `A visual collection of moments and projects by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const resume = {
  path: "/resume",
  label: "Resume",
  title: `Resume – ${person.name}`,
  description: `View and download ${person.name}'s resume`,
};

export { person, social, newsletter, home, about, blog, work, gallery, resume };
