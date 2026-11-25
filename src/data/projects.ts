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
  spotify?: string;
  bandcamp?: string;
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
    title: "TECH TRAP",
    client: "FGC Community",
    skills:
      "Design, Branding, UI Design, Logo Design, Full-Stack Development, Next.js, PrismaORM, PostgreSQL, Tailwind CSS",
    body: "A community notes app for fighting game players. Character knowledge is scattered across Discord servers, videos and spreadsheets, so I designed and built one place to share it: players post notes for each character, the community votes the best ones up, and liking a note saves it to your own collection.",
    images: {
      image_1: {
        path: "/techtrap/techtrap-site01.webp",
        height: "1468",
        width: "1892",
        alt: "Image of the TECH TRAP app",
      },
      image_2: {
        path: "/techtrap/techtrap-site02n.webp",
        height: "1468",
        width: "1892",
        alt: "Image of the TECH TRAP app",
      },
      image_3: {
        path: "/techtrap/techtrap-site03n.webp",
        height: "1468",
        width: "1892",
        alt: "Image of the TECH TRAP app",
      },
    },
    case: "/case/techtrap",
    link: "https://www.techtrap.app/",
    git: "https://github.com/NoggyPLZ/fgc-notes",
    quote: {
      body: "Just signed up! This is awesome!!",
      author: 'Thomas "TITO", FGC Member',
    },
  },
  {
    title: "RYMAN CAREERS",
    client: "Ryman Hospitality Properties",
    skills: "Art Direction, Design, Branding, Front-End Development",
    body: "A careers site for the company behind the Grand Ole Opry, Ryman Auditorium and Ole Red, recruiting across six brands in Tennessee and Florida. The design borrows from Nashville's letterpress poster tradition, so searching for a job feels like part of the show instead of an HR portal. As art director at BlueTractor, I led the design and built the front-end.",
    images: {
      image_1: {
        path: "/ryman/ryman01.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the Ryman Careers site",
      },
      image_2: {
        path: "/ryman/ryman02n.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the Ryman Careers site",
      },
      image_3: {
        path: "/ryman/ryman03n.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the Ryman Careers site",
      },
    },
    case: "/case/ryman",
    link: "/sites/ryman/index.html",
    stats: {
      statNum: "16 years",
      statName: "Professional Web Design and Front-End Development",
    },
  },
  {
    title: "NJAM",
    client: "Chris 'N. Justice' Brown",
    skills: "Art Direction, Illustration, Packaging Design, Logo Design,",
    body: "Album packaging for NJAM by award-winning Nashville rapper Chris “N. Justice” Brown. I illustrated it as a tribute to 16-bit Sega Genesis box art and NBA Jam: the dunk on the front finishes through the hoop on the back, built around the game's iconic “on fire” streak. The flaming ball returns on the disc, because the tracks are fire too.",
    images: {
      image_1: {
        path: "/njam/njam01.webp",
        height: "1550",
        width: "1892",
        alt: "Image of the NJAM album cover",
      },
      image_2: {
        path: "/njam/njam02n.webp",
        height: "1550",
        width: "1892",
        alt: "Image of the NJAM album back",
      },
      image_3: {
        path: "/njam/njam03n.webp",
        height: "1550",
        width: "1892",
        alt: "Image of the NJAM album logo",
      },
    },
    case: "case/njam",
    spotify: "https://open.spotify.com/album/2QS1H1kzzQppbHZzDLCpDP",
    bandcamp:
      "https://njustice.bandcamp.com/album/njam-negro-justice-appreciation-month",
    quote: {
      body: "True alchemy lies in this formula: Your memory and your senses are but the nourishment of your creative impulse",
      author: "Arthur Rimbaud",
    },
  },
  {
    title: "RITE AID CAREERS",
    client: "Rite Aid",
    skills: "Art Direction, Design System, UI Design, Front-End Development",
    body: "A careers site for Rite Aid and its family of brands (Bartell Drugs, Elixir, Health Dialog), covering pharmacy, store, corporate and distribution roles across 2,400 locations. As the sole designer, with no style guide to work from, I built the site's design system from Rite Aid's logo and colors, designed the pages, and wrote the front-end code our developer integrated into the back end. \n\nRite Aid closed in 2025; the site is no longer live.",
    images: {
      image_1: {
        path: "/riteaid/rite-aid-site01n.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the Rite Aid Career site",
      },
      image_2: {
        path: "/riteaid/rite-aid-site02n.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the Rite Aid Career site",
      },
      image_3: {
        path: "/riteaid/rite-aid-site03n.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the Rite Aid Career site",
      },
    },
    case: "/case/riteaid",

    stats: {
      statNum: "Over 250+",
      statName: "Sites + Projects Solved",
    },
  },
  {
    title: "SURLALUNE",
    client: "Heidi Thomas",
    skills:
      "Art Direction, Information Architecture, Design, Front-End Development",
    body: "A redesign of SurLaLune Fairy Tales, a reference site for fairy tale scholars, students and fans since 1998. The challenge was scale: 49 annotated tales, each with eight sections (the tale, annotations, history, illustrations, modern interpretations and more), plus a database of 5,000+ folktales. I led the design and set the visual direction, designing alongside the team and building the front end so readers could move through hundreds of pages without getting lost.",
    images: {
      image_1: {
        path: "/surlalune/sur-la-lune01.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the SurLaLune site",
      },
      image_2: {
        path: "/surlalune/sur-la-lune02.webp",
        height: "745",
        width: "916",
        alt: "Image from the SurLaLune site",
      },
      image_3: {
        path: "/surlalune/sur-la-lune03.webp",
        height: "745",
        width: "916",
        alt: "Image from the SurLaLune site",
      },
    },
    // title: "COGNITION STORE",
    // client: "Cognition",
    // skills:
    //   "Design, Branding, React, TypeScript, Tailwind CSS, Express, PostgreSQL, SQL, Tanstack Router, Tanstack Query, Jest, JWT/Authentication, CI/CD, Zod, Docker",
    // body: "Cognition a full-stack e-commerce application for a fictional parody company selling AI-generated products. A React frontend, an Express API backend, and a PostgreSQL database, structured as a monorepo and deployed across three separate hosting services (Netlify, Render, and Supabase). \n\nThe project was built to demonstrate constructing a storefront from the ground up with minimal library assistance: raw SQL with no ORM, and session authentication built directly on JWTs in httpOnly cookies rather than an auth provider like Auth0 or Clerk. Money is handled as integer cents to avoid floating-point errors, and order history uses a snapshot pattern so past orders survive product changes. \n\nIntegration tested with Jest against an ephemeral PostgreSQL database, with tables truncated between tests so each test stands on its own. It has no payment processing by design the point was to build the hard parts, not to wire up Stripe. Deploying across three services surfaced the genuinely fiddly problems a single-host tutorial never exposes you to: cross-site session cookies, database connection pooling, and TLS certificate verification.",
    // images: {
    //   image_1: {
    //     path: "/cognition/cognition01.webp",
    //     height: "1225",
    //     width: "1892",
    //     alt: "Image of the Cognition store app",
    //   },
    //   image_2: {
    //     path: "/cognition/cognition02.webp",
    //     height: "1225",
    //     width: "1892",
    //     alt: "Image of the Cognition store app",
    //   },
    //   image_3: {
    //     path: "/cognition/cognition03.webp",
    //     height: "1225",
    //     width: "1892",
    //     alt: "Image of the Cognition store app",
    //   },
    // },
    case: "case/surlalune",
    quote: {
      body: "As always, this looks awesome ... Thanks for the quick turnaround!",
      author: "TSC",
    },
  },
  // {
  //   title: "BACK.LOG",
  //   client: "Gaming Community",
  //   skills:
  //     "Design, Branding, React, Redux Toolkit, TypeScript, Tailwind CSS, Netlify Serverless Functions, Steam API",
  //   body: "Back.log is an SPA that helps Steam users rediscover unplayed games in their library. This app uses a player’s Steam ID to fetch their library and randomly surface up to three games under a chosen playtime threshold. With one click, users can launch or install a game directly from the app, turning backlog browsing into an interactive experience. \n\nThe project was built with React, Redux Toolkit, though Redux was admittedly overkill for the app’s scope, it was a great exercise in structuring API-driven state. Because the Steam API has vague and inconsistent rate limits, I implemented a custom rate-limiting hook to protect users from hitting request caps client-side.",
  //   images: {
  //     image_1: {
  //       path: "/backlog/backlog-site01.webp",
  //       height: "1225",
  //       width: "1892",
  //       alt: "Image of the BACK.LOG app",
  //     },
  //     image_2: {
  //       path: "/backlog/backlog-site02.webp",
  //       height: "1225",
  //       width: "1892",
  //       alt: "Image of the BACK.LOG app",
  //     },
  //     image_3: {
  //       path: "/backlog/backlog-site03.webp",
  //       height: "1225",
  //       width: "1892",
  //       alt: "Image of the BACK.LOG app",
  //     },
  //   },
  //   link: "https://steam-backlog.netlify.app/",
  //   git: "https://github.com/NoggyPLZ/steam-roulette",
  //   quote: {
  //     body: "Just signed up! This is awesome!!",
  //     author: 'Thomas "TITO", FGC Member',
  //   },
  // },
  {
    title: "TSC CAREERS",
    client: "Tractor Supply Co.",
    skills: "Art Direction, Design, Branding, Front-End Development",
    body: "A careers site recruiting for Tractor Supply's 54,000+ team members across 2,100+ stores in 49 states. As art director at BlueTractor, I led the design and set the visual direction, designing alongside the team and building the front end. Instead of sending applicants to a generic vendor job board, I designed and built a job search that pulls listings from TSC's hiring platform via API, so browsing jobs felt like part of the brand. Store, distribution center and HQ roles each got their own color, so applicants always knew which path they were on.",
    images: {
      image_1: {
        path: "/tsc-careers/tsc-careers01.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the TSC Careers site",
      },
      image_2: {
        path: "/tsc-careers/tsc-careers02.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the TSC Careers site",
      },
      image_3: {
        path: "/tsc-careers/tsc-careers03.webp",
        height: "1550",
        width: "1892",
        alt: "Image from the TSC Careers site",
      },
    },
    case: "case/tsccareers",
    link: "/sites/tsc/index.html",
  },
];

export default projects;
