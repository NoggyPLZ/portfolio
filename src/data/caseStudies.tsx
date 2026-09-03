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
  years?: {
    start: string;
    end: string;
  };
  year?: string;
};

export type CaseStudyBottomFactsType = {
  metric: string;
  description: string;
};

export type CaseStudyHero = {
  minorName?: string;
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
            width: 1641,
            height: 1030,
          },
          {
            src: "riteaid/riteaid-bottom02.webp",
            alt: "Image of the finished mobile design for Rite Aid",
            width: 828,
            height: 1030,
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
        header: "Welcome to Life Out Here",
        copy: [
          "Mobile drove most of the decisions. Banners had to hold up at small sizes without pushing content off the screen, and navigation became collapsible and modern instead of a desktop pattern crammed into a phone. I designed the mobile pages almost exclusively, directed and reviewed another designer's work to keep it consistent with the system, and wrote the HTML and CSS.",
          "The site went from a fixed narrow column to a layout that filled a desktop screen and fit a phone. It stayed in service for six years while the company grew from roughly 1,685 to 2,216 stores, and we kept it current with TSC's branding as that standard matured around it.",
        ],
        image: [
          {
            src: "tsccareers/tsccareers-bottom01.webp",
            alt: "Image of the finished design for TSC Careers",
            width: 1892,
            height: 1550,
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
            alt: "Example of the Lula Cafe page",
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
            alt: "Example of the Opry page",
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
            alt: "Image of the finished design for Ryman",
            width: 1892,
            height: 1550,
          },
          {
            src: "ryman/ryman-bottom02.webp",
            alt: "Image of the finished mobile design for Ryman",
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
  {
    slug: "njam",
    hero: {
      minorName: "N. Justice's",
      name: "NJAM",
      image: "njam/njam-hero.webp",
      alt: "njam hero image",
      width: 1691,
      height: 1092,
      mobile: {
        image: "njam/njam-hero-mobile.webp",
        alt: "njam hero image",
        width: 600,
        height: 387,
      },
    },
    topFacts: {
      client: "Chris 'N. Justice' Brown",
      role: "Art Director",
      year: "2025",
    },
    rows: [
      {
        header: "He's on FIRE!",
        copy: [
          "Chris 'N.Justice' Brown was releasing a new album and wanted cover art that felt like Sega Genesis box art, specifically NBA Jam. Not a parody of it and not a filtered photo, but the real thing: that particular flavor of 16-bit era packaging where the illustration is loud, the motion is exaggerated, and the whole composition is engineered to grab you from across a store aisle.",
          "The trap with nostalgia work is that it collapses into pastiche. Reproduce the reference too faithfully and you have a costume rather than a cover, something about NBA Jam instead of something about his record.",
          "So, the problem became, how do I pay homage to the package design of that 90's era, while weaving a custom thread all through out? I set out to make something at first glance would spark that memory with a dose of nostalgia and the hint of something new.",
        ],
        image: [
          {
            src: "njam/njam-inspiration.webp",
            alt: "Njam inspiration collage",
            width: 1892,
            height: 982,
            caption:
              "Inspiration was 90's era sega box art and burning basketball, and rim.",
          },
        ],
      },
      {
        header: "Drawing from inspiration",
        copy: [
          "Chris and I had already worked together on multiple albums at this point, and he knew my illustration style, allowing the design to be familiar and distinct. I used the illustrated version of Chris I'd developed for his collaboration with KiT, Kumite in Tennessee, a regional fighting game tournament, so the figure at the center of that in-your-face motion was already his visual identity rather than a generic player dropped into a template.",
          "I used similar fonts to the genesis box art without taking exactly. The 'N' in his name was a creation of mine based off the Sega font, and NJAM brand was inspired by one of the 'NBA JAM' brands. I gave the NJAM a unique type treatment while borrowing the red and blue from NBA JAM.",
          "I used a few illustrator tricks to create a few characters of a single color and group them all together to form a crowd of descending dark to simulate depth, and then set out illustrating a dynamically posed version of the KiT collab illustration of Chris. Lastly, an image of a burning rim to be the after-scene on the back cover.",
        ],
        image: [
          {
            src: "njam/njam-assets01.webp",
            alt: "First collection of created assets for NJAM",
            width: 1892,
            height: 1550,
          },
          {
            src: "njam/njam-assets02.webp",
            alt: "Second collection of created assets for NJAM",
            width: 1892,
            height: 1550,
          },
        ],
        beforeAndAfter: false,
      },
      {
        header: "From Concept to Concept Album",
        copy: [
          "The left side with striped red and Genesis style of type treatment, replacing the 'Sega' at the top with an enlarged 'N' at the bottom. To the right, a scene depicting Chris soaring through the air with the iconic NBA JAM mechanic of the basketball on fire.",
          "The back cover extends the front into a single moment across two panels: the same scene a beat later, rim still burning, crowd behind it, track list below. Separating the burning rim from the background crowd echoed how box art of that era staged action in discrete panels, which meant the format decision and the reference were doing the same job at once.",
          "Last was the disc. The burning basketball works alone there, and it needed to. The disc being fire was a pretty apt description and visual design.",
        ],
        image: [
          {
            src: "njam/front-example.webp",
            alt: "Example of the front of NJAM",
            width: 1892,
            height: 1550,
          },
          {
            src: "njam/back-example.webp",
            alt: "Example of the back of NJAM",
            width: 1892,
            height: 1550,
          },
          {
            src: "njam/disc-example.webp",
            alt: "Example of the disc cover for NJAM",
            width: 1892,
            height: 1550,
          },
        ],
      },
      {
        header: "A rim that's still burning",
        copy: [
          "The cover landed with his audience and generated real response on release, and the record contributed to the 500,000+ streams across his catalog. The result was an exciting design to match a record of NJAM's caliber, and that would work to snare in eyes of new listeners to one of Nashville's best award winning underground rappers.",
          "Since the release, Chris and I have collaborated on more albums, ensuring a artistic partnership bringing bars to ears, and design to eyes.",
        ],
        image: [
          {
            src: "njam/njam-bottom01.webp",
            alt: "Image of the finished design for NJAM",
            width: 1892,
            height: 1550,
          },
          {
            src: "njam/njam-bottom02.webp",
            alt: "Image of the finished mobile design for NJAM",
            width: 828,
            height: 1030,
          },
        ],
      },
    ],
    bottomFacts: [
      { metric: "500,000+", description: "streams across the catalog" },
      { metric: "6", description: "years of collaboration" },
    ],
  },

  {
    slug: "surlalune",
    hero: {
      name: "SURLALUNE",
      image: "surlalune/surlalune-hero.webp",
      alt: "surlalune hero image",
      width: 1691,
      height: 1092,
      mobile: {
        image: "surlalune/surlalune-hero-mobile.webp",
        alt: "njam hero image",
        width: 600,
        height: 387,
      },
    },
    topFacts: {
      client: "Heidi Anne Heiner",
      role: "Art Director",
      year: "2016",
    },
    rows: [
      {
        header: "Once upon a time...",
        copy: [
          "SurLaLune is one of the oldest fairy tale reference sites on the internet, and it looked it. The design was eighteen years old, built when the web was tables and background tiles, and the content had long outgrown it. Forty-nine annotated tales, each with its own history, annotations, illustration gallery, related tales, bibliography, and modern interpretations. Thousands more folktales in a searchable database. A blog, a bookstore, a discussion board.",

          "All of it lived in a narrow center column flanked by link lists and ad blocks, which is how you end up with a scholarly resource that reads like a directory.",

          "The ads were not optional. They pay the hosting bill and return something to Heidi for two decades of work, so any redesign that treated them as an afterthought would either break her revenue or get overridden later. Most redesigns push ads to the outer columns and let them squeeze the content inward. On a text-heavy reference site, that is exactly the wrong trade.",
        ],
        image: [
          {
            src: "surlalune/surlalune-inherited.webp",
            alt: "SurLaLune inherited site",
            width: 1892,
            height: 983,
            caption:
              "Original SurLaLune site built before mobile responsiveness and small screens.",
          },
        ],
      },
      {
        header: "Pumpkins become coaches",
        copy: [
          "I set the direction toward clarity: charcoal headers to anchor hierarchy, an off-white page against white content areas so the body copy sits forward instead of floating, and a wider container that gave the tales room to breathe.",

          "The ad decision drove the layout. Rather than letting advertising compress the content from the outside, I widened the main content area and brought the ad column inside it, on the right. The reading column stays generous, the ads stay visible and profitable, and the page never narrows to accommodate them. Revenue became a layout input rather than a layout casualty.",

          "For character, we let the containers break uniformity. A strict grid would have been correct and lifeless, and this is a site about fairy tales. The looser structure gives the pages a whimsy that matches the material without undermining the scholarship.",
        ],
        image: [
          {
            src: "surlalune/surlalune-adspace01.webp",
            alt: "First comp for the SurLaLune",
            width: 1892,
            height: 1550,
          },
          {
            src: "surlalune/surlalune-adspace02.webp",
            alt: "The client accepted comp of the SurLaLune",
            width: 1892,
            height: 1550,
          },
        ],
        beforeAndAfter: true,
      },
      {
        header: "Spinning Straw into Gold",
        copy: [
          "The site already held a deep archive of public domain fairy tale art from Rackham, Dulac, and others, all of it living in each tale's illustration gallery. Rather than pull from that for the page banners, which would have duplicated content already on the page, I tapped Aaron to stretch into original illustration and build a unique banner for every tale.",

          "He had shown a distinctive flat, graphic style on earlier projects, and this was a far better use of it than production assets. The result is the strongest visual layer on the site: the five ghost wives flanking Bluebeard with the key held between them, Red small against a forest of red pines, Cinderella's carriage under a canopy of pink. Each tale gets its own image while the system holds them together.",

          "The technical reality was forty-nine tales at eight pages each, plus the introduction section, the folklore database, the bookstore, and everything around them. Several hundred pages, all static. I was learning Handlebars at the time and brought Heidi a case for moving the site onto a template library with a database behind it, which is what a site that size should be. The budget could not carry database and backend hosting, so the answer was no.",

          "So we built it by hand, and I taught Aaron to write HTML and CSS so there were two of us doing it.",
        ],
        image: [
          {
            src: "surlalune/surlalune-example01.webp",
            alt: "Example of the surlalune tale, Sleeping Beauty",
            width: 1892,
            height: 1550,
          },
          {
            src: "surlalune/surlalune-example02.webp",
            alt: "Example of the illustration Modal",
            width: 1892,
            height: 1550,
          },
          {
            src: "surlalune/surlalune-example03.webp",
            alt: "Example of the surlalune tale, The Gingerbread Man",
            width: 1892,
            height: 1550,
          },
        ],
      },
      {
        header: "They lived happily ever after",
        copy: [
          "A reference site that reads like one. Decades of fairy tale scholarship restructured into a clear hierarchy, with original illustration on every tale, and an ad layout that funds the site without taking the page apart to do it.",

          "Aaron came out of it with front-end skills he did not have going in, and a body of illustration work that is the best thing on the site.",
        ],
        image: [
          {
            src: "surlalune/surlalune-bottom01.webp",
            alt: "Image of the finished design for SurLaLune",
            width: 1892,
            height: 1550,
          },
          {
            src: "surlalune/surlalune-bottom02.webp",
            alt: "Image of the finished mobile design for SurLaLune",
            width: 828,
            height: 1030,
          },
        ],
      },
    ],
    bottomFacts: [
      { metric: "48", description: "catalogued fairy tales" },
      { metric: "1,500", description: "fairy tale illustrations" },
      { metric: "5,000+", description: "folktales in the database" },
    ],
  },
];
