type Project = {
  title: string;
  client: string;
  skills: string;
  body: string;
  images: {
    image_1: string;
    image_2: string;
    image_3: string;
  };
  link?: string;
  quote?: {
    body: string;
    author: string;
  };
};

const projects: Project[] = [
  {
    title: "BACK.LOG",
    client: "Gaming Community",
    skills:
      "Design, Branding, React, Redux Toolkit, Async Thunks, TypeScript, Tailwind CSS, Netlify Serverless Functions, Steam API",
    body: "Back.log is a single-page app that helps Steam users rediscover unplayed games in their library. In a time when new releases keep getting pricier, many players already own hidden gems they’ve never touched. This app uses a player’s Steam ID to fetch their library and randomly surface up to three games under a chosen playtime threshold—perfect for finding something new to play. \n\nWith one click, users can launch or install a game directly from the app, turning backlog browsing into an interactive experience. \n\nThe project was built with React, Redux Toolkit, and Async Thunks for state and async management. While Redux was admittedly overkill for the app’s scope, it was a great exercise in structuring API-driven state. Because the Steam API has vague and inconsistent rate limits, I implemented a custom rate-limiting hook to protect users from hitting request caps client-side.",
    images: {
      image_1: "./backlog/backlog-site01.webp",
      image_2: "./backlog/backlog-site02.webp",
      image_3: "./backlog/backlog-site03.webp",
    },
    link: "https://steam-backlog.netlify.app/",
  },
  {
    title: "TECH TRAP",
    client: "FGC Community",
    skills:
      "Design, Branding, HTML, CSS, TS, Next.js, Zod, RHF, Prisma, Postgres, Tailwind CSS",
    body: "TechTrap is a user-centric community notes application built for the fighting game community. Using Next.js, I developed a multi-page app that supports user authentication, note creation, and community sharing.\n\nEach character has a collective pool of notes contributed by users. When someone likes a note, it’s saved to their personal collection—making it easy to curate useful information. Authentication is handled with JWT session tokens, while all user input is validated on the backend with Zod before being persisted via Prisma to a PostgreSQL database. \n\nThe goal was to create a pseudo-social platform that encourages the organic exchange of strategies and insights—an evolving marketplace of ideas where accuracy and authenticity directly impact competitive performance.",
    images: {
      image_1: "./techtrap/techtrap-site01.webp",
      image_2: "./techtrap/techtrap-site02.webp",
      image_3: "./techtrap/techtrap-site03.webp",
    },
    link: "https://www.techtrap.app/",
  },
  {
    title: "RITE AID CAREERS",
    client: "Rite Aid",
    skills: "Design, Branding, Front-End using HTML & CSS",
    body: "Through my team at BlueTractor and in communication with the client Rite-Aid, we used the branding standard of Rite-Aid to bring their careers site into a more modern design. Keeping a clean aesthetic, I was able to accent items using their green brand color while letting the blue act as a more dominant color. Included on pages was an input field to search for Jobs using job title and search location as params.",
    images: {
      image_1: "./riteaid/rite-aid-site01.webp",
      image_2: "./riteaid/rite-aid-site02.webp",
      image_3: "./riteaid/rite-aid-site03.webp",
    },
  },
  {
    title: "SUR LA LUNE",
    client: "Heidi Thomas",
    skills: "Design, Branding, Front-End using HTML/CSS/JS",
    body: "The redesign of the Sur La Lune site was an enormous challenge, but my team at BlueTractor was able to create a beautiful fairy tale themed site. The site featured a sprawling library of around 50 fairy tales each having 8 pages of annotations, illustrations, and more pages of related tales.",
    images: {
      image_1: "./surlalune/sur-la-lune01.webp",
      image_2: "./surlalune/sur-la-lune02.webp",
      image_3: "./surlalune/sur-la-lune03.webp",
    },
    quote: {
      body: "True alchemy lies in this formula: Your memory and your senses are but the nourishment of your creative impulse",
      author: "Arthur Rimbaud",
    },
  },
  {
    title: "RYMAN CAREERS",
    client: "Ryman Hospitality Properties",
    skills: "Design, Branding, Front-End using HTML/CSS/JS",
    body: "Capturing the rustic typesetting theme of a Nashville printing press, my team at BlueTractor created a careers site for the Ryman properties. Covering around 6 different properties in locations all over Tennessee and even Florida, the site helped RHP reach potential employees in properties such as Ole Red, Grand Ole Opry, Ryman Auditorium, and more.",
    images: {
      image_1: "./ryman/ryman01.webp",
      image_2: "./ryman/ryman02.webp",
      image_3: "./ryman/ryman03.webp",
    },
    quote: {
      body: "As always, this looks awesome ... Thanks for the quick turnaround!",
      author: "Dennis Borchers, TSC",
    },
  },
  {
    title: "TSC CAREERS",
    client: "Tractor Supply Co.",
    skills: "Design, Branding, Front-End using HTML/CSS/JS",
    body: "Write some body copy here please if you would please.",
    images: {
      image_1: "./tsc-careers/tsc-careers01.webp",
      image_2: "./tsc-careers/tsc-careers02.webp",
      image_3: "./tsc-careers/tsc-careers03.webp",
    },
  },
];

export default projects;
