import { techSVGS } from "../../data/techIcons";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Skills() {
  const skillsText = useRef<HTMLHeadingElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const techNames: string[] = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Git",
    "React",
    "Next.js",
    "Redux",
    "Zod",
    "Prisma",
    "Express",
    "Postgresql",
    "Jest",
    "Vitest",
    "Visual Studio Code",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        skillsText.current,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.in",
          scrollTrigger: {
            trigger: container.current,
            toggleActions: "restart none none none",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div className="bg-darkgray-500">
      <div
        className="flex lg:flex-row flex-col gap-8 p-8 border-t-30 border-b-30 border-darkgray-500"
        ref={container}
      >
        <h1
          className="font-bigger text-7xl/15 md:text-9xl/27 2xl:text-[13rem]/[10.5rem] 2xl:pt-6 text-palered-500"
          ref={skillsText}
        >
          SKILLS<span className="text-palegray-500">/</span>TECH
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:pt-50 grow text-center text-darkgray-500 gap-1 font-black uppercase">
          {techNames.map((tech, i) => (
            <div
              key={i}
              className="bg-palegray-500 py-10 px-2 rounded-md flex flex-col place-items-center gap-4"
            >
              <div className="h-24 w-24">{techSVGS[tech]}</div>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
