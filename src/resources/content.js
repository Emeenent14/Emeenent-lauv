import { Logo } from "@once-ui-system/core";


const person = {
  firstName: "Emeenent",
  lastName: "(Chukwuemeka)",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "emeenent14@gmail.com",
  location: "Africa/Lagos", // IANA time zone format
  languages: ["English", "Igbo"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I write about web development, AI, and engineering insights—sharing deep dives, breakdowns, and forward-thinking tech trends.
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
    link: "https://wa.me/2347069273822",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/og-image.jpg?v=2",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building the future with code and bold ideas</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">SafeSwap</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m Emeenent — a full stack dev engineering modern apps from front to back.  
      <br /> React in the morning, Python at night. Coffee in between.
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
        Emeenent is a full stack developer passionate about crafting seamless user experiences,
        scalable systems, and pushing the edges of modern web and AI technologies.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "EMT Ng",
        timeframe: "2022 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>Built and maintained a scalable platform serving over 10,000 users daily.</>,
          <>Increased backend performance by 30% through deep optimization and refactoring.</>,
        ],
        images: [],
      },
      {
        company: "VVT Technologies",
        timeframe: "2018 – 2022",
        role: "Frontend Developer",
        achievements: [
          <>Created a unified design system across products, boosting UI/UX consistency by 40%.</>,
          <>Led cross-functional dev efforts, contributing to a 15% revenue uplift.</>,
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
        name: "University of Nigeria Nsukka",
        description: <>B.Eng. in Electronic and Computer Engineering (ECE)</>,
      },
      {
        name: "YouTube High",
        description: <>Self-taught full stack development across modern stacks</>,
      },
      {
        name: "ALX Africa",
        description: <>Completed hands-on Python engineering track</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Languages & Technologies",
    skills: [
      {
        title: "Languages",
        description: <>Proficient in full stack development with strong frontend-backend fluency</>,
        images: [
          { src: "/images/projects/project-01/HTML.svg", width: 3, height: 3, alt: "HTML" },
          { src: "/images/projects/project-01/css.svg", width: 3, height: 3, alt: "CSS" },
          { src: "/images/projects/project-01/javascript.svg", width: 3, height: 3, alt: "JavaScript" },
          { src: "/images/projects/project-01/python.svg", width: 3, height: 3, alt: "Python" },
          { src: "/images/projects/project-01/typescript.svg", width: 3, height: 3, alt: "TypeScript" },
        ],
      },
      {
        title: "Frontend",
        description: <>Building rich, reactive UIs with React,Next.js,Tailwind, Once UI, and modern tools</>,
        images: [
          { src: "/images/projects/project-01/react.svg", width: 3, height: 3, alt: "React" },
          { src: "/images/projects/project-01/next.svg", width: 3, height: 3, alt: "Next.js" },
          { src: "/images/projects/project-01/redux.svg", width: 3, height: 3, alt: "Redux" },
          { src: "/images/projects/project-01/react-native.svg", width: 3, height: 3, alt: "React Native" },
          { src: "/images/projects/project-01/tailwind-css-2.svg", width: 3, height: 3, alt: "Tailwind CSS" },
        ],
      },
      {
        title: "Backend",
        description: <>Efficient APIs and systems built with Django, DRF, and Node.js</>,
        images: [
          { src: "/images/projects/project-01/django.png", width: 3, height: 3, alt: "Django" },
          { src: "/images/projects/project-01/nodejs-icon.svg", width: 3, height: 3, alt: "Node.js" },
          { src: "/images/projects/project-01/next.svg", width: 3, height: 3, alt: "Next.js" },
          { src: "/images/projects/project-01/drf.png", width: 3, height: 3, alt: "DRF" },
        ],
      },
      {
        title: "Databases",
        description: <>Structured and scalable data modeling with SQL and NoSQL tools</>,
        images: [
          { src: "/images/projects/project-01/sql.svg", width: 3, height: 3, alt: "SQL" },
          { src: "/images/projects/project-01/poostgresql.png", width: 3, height: 3, alt: "PostgreSQL" },
          { src: "/images/projects/project-01/firebase.svg", width: 3, height: 3, alt: "Firebase" },
        ],
      },
      {
        title: "Tools & Deployment",
        description: <>Version control, testing, and smooth deployment pipelines</>,
        images: [
          { src: "/images/projects/project-01/github.svg", width: 3, height: 3, alt: "GitHub" },
          { src: "/images/projects/project-01/postman.svg", width: 3, height: 3, alt: "Postman" },
          { src: "/images/projects/project-01/visual-studio-code.svg", width: 3, height: 3, alt: "VS Code" },
          { src: "/images/projects/project-01/css.svg", width: 3, height: 3, alt: "CSS" },
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

export { person, social, newsletter, home, about, blog, work, gallery };
