import { techSVGS } from "../../data/techIcons";

export default function Skills() {
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
    "Visual Studio Code",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  return (
    <div className="bg-darkgray-500 mt-20">
      <div className="flex lg:flex-row flex-col gap-8 p-8 border-t-30 border-b-30 border-darkgray-500">
        <h1 className="font-bigger text-7xl/15 md:text-9xl/27 2xl:text-[13rem]/[10.5rem] 2xl:pt-6 text-palered-500">
          SKILLS<span className="text-palegray-500">/</span>TECH
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:pt-50 grow text-center text-darkgray-500 gap-1 font-black uppercase">
          {techNames.map((tech, i) => (
            <div
              key={i}
              className="bg-palegray-500 py-10 rounded-md flex flex-col place-items-center gap-4"
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
