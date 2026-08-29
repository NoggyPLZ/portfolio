export type Project = {
  title: string;
  client: string;
  skills: string;
  body: string;
  images: {
    image_1: {
      path: string;
      height: string;
      width: string;
      alt: string;
    };
    image_2: {
      path: string;
      height: string;
      width: string;
      alt: string;
    };
    image_3: {
      path: string;
      height: string;
      width: string;
      alt: string;
    };
  };
  case?: string;
  link?: string;
  git?: string;
  quote?: {
    body: string;
    author: string;
  };
  stats?: {
    statNum: string;
    statName: string;
  };
};

const projects: Project[] = [
  {
    title: "RITE AID CAREERS",
    client: "Rite Aid",
    skills: "Design, Branding, Front-End using HTML & CSS",
    body: "Through my team at BlueTractor and in communication with the client Rite-Aid, we used the branding standard of Rite-Aid to bring their careers site into a more modern design. Keeping a clean aesthetic, I was able to accent items using their green brand color while letting the blue act as a more dominant color. Included on pages was an input field to search for Jobs using job title and search location as params.",
    images: {
      image_1: {
        path: "/riteaid/rite-aid-site01.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the Rite Aid Career site",
      },
      image_2: {
        path: "/riteaid/rite-aid-site02.webp",
        height: "745",
        width: "916",
        alt: "Image from the Rite Aid Career site",
      },
      image_3: {
        path: "/riteaid/rite-aid-site03.webp",
        height: "745",
        width: "916",
        alt: "Image from the Rite Aid Career site",
      },
    },
    case: "/case/riteaid",
    stats: {
      statNum: "15 Years",
      statName: "Professional Web Design and Front-End Development",
    },
  },
  {
    title: "RYMAN CAREERS",
    client: "Ryman Hospitality Properties",
    skills: "Design, Branding, Front-End using HTML/CSS/JS",
    body: "Capturing the rustic typesetting theme of a Nashville printing press, my team at BlueTractor created a careers site for the Ryman properties. Covering around 6 different brands in locations all over Tennessee and even Florida, the site helped Ryman Hospitality Properties reach potential employees in properties such as Ole Red, Grand Ole Opry, Ryman Auditorium, and more.",
    images: {
      image_1: {
        path: "/ryman/ryman01.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the Ryman Careers site",
      },
      image_2: {
        path: "/ryman/ryman02.webp",
        height: "745",
        width: "916",
        alt: "Image from the Ryman Careers site",
      },
      image_3: {
        path: "/ryman/ryman03.webp",
        height: "745",
        width: "916",
        alt: "Image from the Ryman Careers site",
      },
    },
    case: '/case/ryman',
    link: "/sites/ryman/index.html",
    quote: {
      body: "As always, this looks awesome ... Thanks for the quick turnaround!",
      author: "Dennis B., TSC",
    },
  },
  {
    title: "TSC CAREERS",
    client: "Tractor Supply Co.",
    skills: "Design, Branding, Front-End using HTML/CSS/JS",
    body: "Starting with the day in the life of a Tractor Supply Team Member, the TSC Careers site introduces prospective applicants to the company and its culture. The comprehensive job search function matches the site's design, using API feeds from TSC's third party vendor to offer a cohesive site experience.",
    images: {
      image_1: {
        path: "/tsc-careers/tsc-careers01.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the TSC Careers site",
      },
      image_2: {
        path: "/tsc-careers/tsc-careers02.webp",
        height: "745",
        width: "916",
        alt: "Image from the TSC Careers site",
      },
      image_3: {
        path: "/tsc-careers/tsc-careers03.webp",
        height: "745",
        width: "916",
        alt: "Image from the TSC Careers site",
      },
    },
    case: 'case/tsccareers',
    link: "/sites/tsc/index.html",
    stats: {
      statNum: "Over 250+",
      statName: "Sites + Projects Solved",
    },
  },
  {
    title: "COGNITION STORE",
    client: "Cognition",
    skills:
      "Design, Branding, React, TypeScript, Tailwind CSS, Express, PostgreSQL, SQL, Tanstack Router, Tanstack Query, Jest, JWT/Authentication, CI/CD, Zod, Docker",
    body: "Cognition a full-stack e-commerce application for a fictional parody company selling AI-generated products. A React frontend, an Express API backend, and a PostgreSQL database, structured as a monorepo and deployed across three separate hosting services (Netlify, Render, and Supabase). \n\nThe project was built to demonstrate constructing a storefront from the ground up with minimal library assistance: raw SQL with no ORM, and session authentication built directly on JWTs in httpOnly cookies rather than an auth provider like Auth0 or Clerk. Money is handled as integer cents to avoid floating-point errors, and order history uses a snapshot pattern so past orders survive product changes. \n\nIntegration tested with Jest against an ephemeral PostgreSQL database, with tables truncated between tests so each test stands on its own. It has no payment processing by design the point was to build the hard parts, not to wire up Stripe. Deploying across three services surfaced the genuinely fiddly problems a single-host tutorial never exposes you to: cross-site session cookies, database connection pooling, and TLS certificate verification.",
    images: {
      image_1: {
        path: "/cognition/cognition01.webp",
        height: "1225",
        width: "1892",
        alt: "Image of the Cognition store app",
      },
      image_2: {
        path: "/cognition/cognition02.webp",
        height: "1225",
        width: "1892",
        alt: "Image of the Cognition store app",
      },
      image_3: {
        path: "/cognition/cognition03.webp",
        height: "1225",
        width: "1892",
        alt: "Image of the Cognition store app",
      },
    },
    link: "https://cognition-store.netlify.app",
    git: "https://github.com/NoggyPLZ/ca-ecommerce",
    quote: {
      body: "True alchemy lies in this formula: Your memory and your senses are but the nourishment of your creative impulse",
      author: "Arthur Rimbaud",
    },
  },
  {
    title: "BACK.LOG",
    client: "Gaming Community",
    skills:
      "Design, Branding, React, Redux Toolkit, TypeScript, Tailwind CSS, Netlify Serverless Functions, Steam API",
    body: "Back.log is an SPA that helps Steam users rediscover unplayed games in their library. This app uses a player’s Steam ID to fetch their library and randomly surface up to three games under a chosen playtime threshold. With one click, users can launch or install a game directly from the app, turning backlog browsing into an interactive experience. \n\nThe project was built with React, Redux Toolkit, though Redux was admittedly overkill for the app’s scope, it was a great exercise in structuring API-driven state. Because the Steam API has vague and inconsistent rate limits, I implemented a custom rate-limiting hook to protect users from hitting request caps client-side.",
    images: {
      image_1: {
        path: "/backlog/backlog-site01.webp",
        height: "1225",
        width: "1892",
        alt: "Image of the BACK.LOG app",
      },
      image_2: {
        path: "/backlog/backlog-site02.webp",
        height: "1225",
        width: "1892",
        alt: "Image of the BACK.LOG app",
      },
      image_3: {
        path: "/backlog/backlog-site03.webp",
        height: "1225",
        width: "1892",
        alt: "Image of the BACK.LOG app",
      },
    },
    link: "https://steam-backlog.netlify.app/",
    git: "https://github.com/NoggyPLZ/steam-roulette",
    quote: {
      body: "Just signed up! This is awesome!!",
      author: 'Thomas "TITO", FGC Member',
    },
  },
  {
    title: "TECH TRAP",
    client: "FGC Community",
    skills:
      "Design, Branding, UI, Next.js, Typescript, Zod, React Hook Form, Server Actions, Prisma, PostgreSQL, Tailwind CSS",
    body: "TechTrap is a user-centric community notes application built for the fighting game community. Using Next.js, I developed an MPA that supports user authentication, note creation, and community sharing.\n\nEach character has a collective pool of notes contributed by users. When someone likes a note, it’s saved to their personal collection making it easy to curate useful information. Authentication is handled with JWT session tokens, while all user input is validated on the backend with Zod before being persisted via Prisma to a PostgreSQL database. \n\nThe goal was to create a pseudo-social platform that encourages the organic exchange of strategies and insights where accuracy and authenticity directly impact competitive performance.",
    images: {
      image_1: {
        path: "/techtrap/techtrap-site01.webp",
        height: "1468",
        width: "1892",
        alt: "Image of the TECH TRAP app",
      },
      image_2: {
        path: "/techtrap/techtrap-site02.webp",
        height: "979",
        width: "1892",
        alt: "Image of the TECH TRAP app",
      },
      image_3: {
        path: "/techtrap/techtrap-site03.webp",
        height: "979",
        width: "1892",
        alt: "Image of the TECH TRAP app",
      },
    },
    link: "https://www.techtrap.app/",
    git: "https://github.com/NoggyPLZ/fgc-notes",
  },
  
  // {
  //   title: "SUR LA LUNE",
  //   client: "Heidi Thomas",
  //   skills: "Design, Branding, Front-End using HTML/CSS/JS",
  //   body: "The redesign of the SurLaLune site was an enormous challenge, but my team at BlueTractor was able to create a beautiful fairy tale themed site. The site featured a sprawling library of around 50 fairy tales each having 8 pages of annotations, illustrations, and more pages of related tales.",
  //   images: {
  //     image_1: {
  //       path: "/surlalune/sur-la-lune01.webp",
  //       height: "1550",
  //       width: "1892",
  //       alt: "Image from the SurLaLune site",
  //     },
  //     image_2: {
  //       path: "/surlalune/sur-la-lune02.webp",
  //       height: "745",
  //       width: "916",
  //       alt: "Image from the SurLaLune site",
  //     },
  //     image_3: {
  //       path: "/surlalune/sur-la-lune03.webp",
  //       height: "745",
  //       width: "916",
  //       alt: "Image from the SurLaLune site",
  //     },
  //   },
  //   quote: {
  //     body: "True alchemy lies in this formula: Your memory and your senses are but the nourishment of your creative impulse",
  //     author: "Arthur Rimbaud",
  //   },
  // },
  
];

export default projects;
