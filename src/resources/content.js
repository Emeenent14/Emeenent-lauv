import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Emeenent",
  lastName: "Ck",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "emeenent14@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Igbo"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I write about web development and AI, sharing insights, tutorials, and the latest trends in the tech world.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
    icon: "x", // or "twitter" if your icon set doesn't have "x"
    link: "https://x.com/yourusername",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/2347069273822", // ✅ Replace with your phone number in intl format
  },
  
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building the future of technology with code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">SafeSwap</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m Emeenent, a full stack developer, I dream JavaScript and i have 
      <br /> React for breakfast. Into the night, I write Python + Django.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        Emeenent is a full stack developer with a passion for creating seamless user experiences, building
        scalable applications, and exploring the latest technologies. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "EMT Ng",
        timeframe: "2022 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed and maintained a scalable web application that serves over 10,000 users daily,
          </>,
          <>
            Improved application performance by 30% through code optimization and refactoring.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        
        ],
      },
      {
        company: "VVT Technologies",
        timeframe: "2018 - 2022",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Nigeria Nsukka",
        description: <>Electronic and Computer Engineering (ECE).</>,
      },
      {
        name: "YouTube High",
        description: <>Studied Software Development</>,
      },
      {
        name: "Alx Africa",
        description: <>Python Course for babies</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Languages & Technologies",
    skills: [
      {
        title: "Languages",
        description: <>Able to create stunning user centered </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/HTML.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/css.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/javascript.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/python.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/typescript.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          
        ],
      },
      {
        title: "Frontend",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/react.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/next.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        
          {
            src: "/images/projects/project-01/redux.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/react-native.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/tailwind-css-2.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        ],
      },
      {
        title: "Backend",
        description: <>Able to create stunning user centered </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/django.png",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/nodejs-icon.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/next.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/drf.png",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        ],
      },
      {
        title: "Databases",
        description: <>Able to create stunning user centered </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/sql.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/poostgresql.png",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/firebase.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
      
        ],
      },
      {
        title: "Tools & Deployment",
        description: <>Able to create stunning user centered </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/github.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/postman.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/visual-studio-code.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/css.svg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
        ],
      },

    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Code, AI, and the Future",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full Stack & AI Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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
