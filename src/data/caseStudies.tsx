export type CaseImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type CaseStudyRowType = {
  header?: string;
  image?: CaseImageType[];
  copy?: string[];
  beforeAndAfter?: boolean;
};

export type CaseStudyTopFacts = {
  client: string;
  role: string;
  years: {
    start: string;
    end: string;
  };
};

export type CaseStudyBottomFactsType = {
  metric: string;
  description: string;
};

export type CaseStudyHero = {
  name: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  mobile: CaseStudyHeroMobile;
};

export type CaseStudyHeroMobile = {
  image: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudyType = {
  slug: string;
  topFacts: CaseStudyTopFacts;
  hero: CaseStudyHero;
  rows: CaseStudyRowType[];
  bottomFacts: CaseStudyBottomFactsType[];
};

export const caseStudiesArr: CaseStudyType[] = [
  {
    slug: "riteaid",
    hero: {
      name: "Rite Aid Careers",
      image: "riteaid/rite-aid-hero.webp",
      alt: "rite aid hero image",
      width: 1691,
      height: 1092,
      mobile: {
        image: "riteaid/rite-aid-hero-mobile.webp",
        alt: "rite aid hero image",
        width: 600,
        height: 387,
      },
    },
    topFacts: {
      client: "Rite Aid",
      role: "Art Director",
      years: {
        start: "2022",
        end: "2024",
      },
    },
    rows: [
      {
        header: "Four brands, one frame",
        copy: [
          "Rite Aid, Elixir, Health Dialog and Bartell were four companies hiring on four separate sites with nothing tying them together. A candidate had no way to tell they were looking at one employer.",
          "The previous Rite Aid career site had the color somewhat, but it was being replaced by a slate off brand blue on various CTA boxes on pages. On top of that the structure of the site components was a mess. Logo way too large, a bloated navigation, banners with type lacking any sort of hierarchy or composition, and severely lacking in photography.",
          "However, the worst offender, the search bar was below the fold. This was a lesson hard come by through TSC Careers and the Ryman, but thoroughly learned.",
        ],
        image: [
          {
            src: "riteaid/riteaid-inherited.webp",
            alt: "The original Rite Aid Careers Site",
            width: 1892,
            height: 983,
            caption: "Inherited career site, hiding the search below the fold.",
          },
        ],
      },
      {
        header: "Restoring Structure",
        copy: [
          "I took the various elements of the site and rebuilt them as structured components. Bringing the logo to heel, separating the secondary nav with Rite Aid brand blue, and creating hierarchy in the navigation reclaimed a lot of wasted real estate.",
          "The banner had no composition, just stacked blocks of type. I gave it hierarchy and made it a cohesive unit.",
        ],
        image: [
          {
            src: "riteaid/rite-aid-problem.webp",
            alt: "The original Rite Aid Careers Site",
            width: 1892,
            height: 1550,
          },
          {
            src: "riteaid/rite-aid-after.webp",
            alt: "The original Rite Aid Careers Site",
            width: 1892,
            height: 1550,
          },
        ],
        beforeAndAfter: true,
      },
      {
        header: "One page per brand",
        copy: [
          "Each brand got its own page with the banner carrying that brand's identity, an approach I brought over from Ryman Careers. Bartell was the exception, keeping its red at the client's request.",
        ],
        image: [
          {
            src: "riteaid/health-dialog-example.webp",
            alt: "The original Rite Aid Careers Site",
            width: 1892,
            height: 1550,
          },
          {
            src: "riteaid/elixir-example.webp",
            alt: "The original Rite Aid Careers Site",
            width: 1892,
            height: 1550,
          },
          {
            src: "riteaid/bartell-example.webp",
            alt: "The original Rite Aid Careers Site",
            width: 1892,
            height: 1550,
          },
        ],
      },
      {
        header: "Recognizably Rite Aid",
        copy: [
          "A fully responsive platform where four companies finally share a front door with renewed structure, hierarchy, and a search bar that's never more than a glance away. Consistent enough across brands that an applicant can tell at a glance they're on a real Rite Aid property, which matters more than it sounds when recruitment scams are as common as they are.",
        ],
        image: [
          {
            src: "riteaid/riteaid-bottom01.webp",
            alt: "Image of the finished design for Rite Aid",
            width: 1892,
            height: 1550,
          },
          {
            src: "riteaid/riteaid-bottom02.webp",
            alt: "Image of the finished mobile design for Rite Aid",
            width: 1892,
            height: 1550,
          },
        ],
      },
    ],
    bottomFacts: [
      { metric: "1,250", description: "locations" },
      { metric: "15", description: "states" },
      { metric: "1,500", description: "open roles" },
    ],
  },
  {
    slug: "tsccareers",
    hero: {
      name: "TSC Careers",
      image: "tsccareers/tsccareers-hero.webp",
      alt: "tsc careers hero image",
      width: 1691,
      height: 1092,
      mobile: {
        image: "tsccareers/tsccareers-hero-mobile.webp",
        alt: "tsc careers hero image",
        width: 600,
        height: 387,
      },
    },
    topFacts: {
      client: "Tractor Supply Co.",
      role: "Art Director",
      years: {
        start: "2017",
        end: "2023",
      },
    },
    rows: [
      {
        header: "A new dawn for TSC",
        copy: [
          "Tractor Supply's careers site was built before the company's branding was, and it showed. The colors that define TSC today were simply absent. Navigation ran down the left side instead of across the top, with no collapse on mobile, and the whole thing was capped at 1170px. Combined with a dark theme, the effect was claustrophobic: a company built around open land and outdoor work, presenting itself through a narrow dark column.",
          "Underneath the aesthetic problem was a structural one. TSC hires into three genuinely different worlds. Store, Store Support, and Distribution are different jobs, different environments, and different candidates, and the site treated them as one undifferentiated audience.",
        ],
        image: [
          {
            src: "tsccareers/tsccareers-inherited.webp",
            alt: "The original TSC Careers Site",
            width: 1892,
            height: 983,
            caption:
              "A must darker and dated design we were tasked with redesigning.",
          },
        ],
      },
      {
        header: "New Day, New Tractor",
        copy: [
          "I directed the redesign as TSC's new branding was taking shape, which meant designing against a standard that was still being written and staying in step with it as it developed over six years.",
          "We dropped the dark theme for a clean white base, with off-white textures holding the rugged outdoor feel at low volume rather than shouting it.",
        ],
        image: [
          {
            src: "tsccareers/tsccareers-problem.webp",
            alt: "The original TSC Careers Site",
            width: 1892,
            height: 1550,
          },
          {
            src: "tsccareers/tsccareers-after.webp",
            alt: "The new TSC Careers design",
            width: 1892,
            height: 1550,
          },
        ],
        beforeAndAfter: true,
      },
      {
        header: "Identity By Color",
        copy: [
          "The new palette did structural work: red, blue, and green each assigned to one of the three employment branches, so a candidate knew which world they were in before reading a word. Photographic banners showed more than just actual team members, it showed the culture of the area of employment. This give candidates something concrete to picture themselves inside of.",
        ],
        image: [
          {
            src: "tsccareers/distro-example.webp",
            alt: "Example of the distribution section of TSC Careers",
            width: 1892,
            height: 1550,
          },
          {
            src: "tsccareers/store-support-example.webp",
            alt: "Example of the store support section of TSC Careers",
            width: 1892,
            height: 1550,
          },
          {
            src: "tsccareers/store-example.webp",
            alt: "Example of the store section of TSC Careers",
            width: 1892,
            height: 1550,
          },
        ],
      },
      {
        header: "Wide, Bright, and Mobile",
        copy: [
          "Mobile drove most of the decisions. Banners had to hold up at small sizes without pushing content off the screen, and navigation became collapsible and modern instead of a desktop pattern crammed into a phone. I designed the mobile pages almost exclusively, directed and reviewed another designer's work to keep it consistent with the system, and wrote the HTML and CSS.",
          "The site went from a fixed narrow column to a layout that filled a desktop screen and fit a phone. It stayed in service for six years while the company grew from roughly 1,685 to 2,216 stores, and we kept it current with TSC's branding as that standard matured around it.",
        ],
        image: [
          {
            src: "tsccareers/tsccareers-bottom01.webp",
            alt: "Image of the finished design for TSC Careers",
            width: 1892,
            height: 1030,
          },
          {
            src: "tsccareers/tsccareers-bottom02.webp",
            alt: "Image of the finished mobile design for TSC Careers",
            width: 828,
            height: 1030,
          },
        ],
      },
    ],
    bottomFacts: [
      { metric: "2,100+", description: "stores" },
      { metric: "49", description: "states" },
      { metric: "4,500", description: "positions at any given time" },
    ],
  },
  {
    slug: "ryman",
    hero: {
      name: "Ryman Careers",
      image: "ryman/ryman-hero.webp",
      alt: "ryman hero image",
      width: 1691,
      height: 1092,
      mobile: {
        image: "ryman/ryman-hero-mobile.webp",
        alt: "ryman hero image",
        width: 600,
        height: 387,
      },
    },
    topFacts: {
      client: "Ryman Hospitality Properties",
      role: "Art Director",
      years: {
        start: "2018",
        end: "2022",
      },
    },
    rows: [
      {
        header: "Round 'em up!",
        copy: [
          "Ryman Hospitality Properties owns some of the most recognizable names in American music: WSM 650 AM, the Grand Ole Opry, the Ryman Auditorium, Ole Red, Cafe Lula. Every one of them ran its own hiring portal. A candidate looking at the Opry had no way of knowing the Ryman was the same employer, and the company had no unified way to recruit across any of it.",
          "The brief was harder than consolidation. They wanted one platform with a genuine Nashville character, where each property kept an identity of its own without any of them breaking away from the whole. Flatten these brands into a corporate template and you destroy the thing that makes them worth working for. Leave them fully separate and you have the same problem you started with.",
          "This project was the perfect opportunity to let a junior designer I was mentoring, test his mettle with creating key assets for the design. Using supplied inspiration, they were able to create a really intersting Hatch Show Print influenced type treatment that would be the center of most of the banners.",
        ],
        image: [
          {
            src: "ryman/ryman-inspiration.webp",
            alt: "Ryman inspiration collage",
            width: 1892,
            height: 982,
            caption:
              "Hatch Show Print type treatment and subtle grunge textures we used as inspiration.",
          },
        ],
      },
      {
        header: "Less is often More",
        copy: [
          "My Team and I first created a design that was almost there. Some of the assets were a little less subtle than needed. The logos still retained whatever color they brought, textures had images of figures that were visible enough to compete with real content, and banners were almost ethereal in color.",
          "We tightened the design after feedback from the client. Images of people replaced with low opacity building renders that didn't compete, the banners were now filled with real photopgraphy from each venue, the logos were replaced with a version that placed them all in equal importance of color on the grunge texture background.",
        ],
        image: [
          {
            src: "ryman/ryman-firstcomp.webp",
            alt: "First comp for the ryman",
            width: 1892,
            height: 1550,
          },
          {
            src: "ryman/ryman-accepted.webp",
            alt: "The client accepted comp of the Ryman site",
            width: 1892,
            height: 1550,
          },
        ],
        beforeAndAfter: true,
      },
      {
        header: "Preserving Identity",
        copy: [
          "Each property expressed itself through its banner and photography while the frame stayed constant underneath. Each venue got the chance to express it's unique identity, while being a part of a greater Ryman culture through the structure of their pages and the overarching theme of color and HTML elements.",
        ],
        image: [
          {
            src: "ryman/lula-example.webp",
            alt: "xample of the Lula Cafe page",
            width: 1892,
            height: 1550,
          },
          {
            src: "ryman/old-red-example.webp",
            alt: "Example of the Ole Red page",
            width: 1892,
            height: 1550,
          },
          {
            src: "ryman/opry-example.webp",
            alt: "xample of the Opry page",
            width: 1892,
            height: 1550,
          },
        ],
      },
      {
        header: "All together now, Ryman",
        copy: [
          "I directed the design and reviewed another designer's work to keep it aligned to the system, while designing the mobile experience myself and writing the HTML and CSS. The result was a fully responsive platform that gathered six entertainment properties under one identity and let each one keep its character, with the texture and section work carrying the culture of the place without ever getting loud enough to fight the content.",
        ],
        image: [
          {
            src: "ryman/ryman-bottom01.webp",
            alt: "Image of the finished design for Rite Aid",
            width: 1892,
            height: 1030,
          },
          {
            src: "ryman/ryman-bottom02.webp",
            alt: "Image of the finished mobile design for Rite Aid",
            width: 828,
            height: 1030,
          },
        ],
      },
    ],
    bottomFacts: [
      { metric: "9", description: "entertainment properties" },
      { metric: "4", description: "years in service" },
      { metric: "1,500", description: "open roles at any given time" },
    ],
  },
];
