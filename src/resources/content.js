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
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
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
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">SafeSwap</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Emeenent, a full stack developer, I dream JavaScript and i have 
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
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
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
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
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
            src: "/images/projects/project-01/cover-04.jpg",
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
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
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
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
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
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 3,
            height: 3,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
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
