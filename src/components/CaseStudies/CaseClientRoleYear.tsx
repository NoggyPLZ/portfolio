import { ArrowRight } from "lucide-react";
import type { CaseStudyTopFacts } from "../../data/caseStudies";

export default function CaseClientRoleYear({
  client,
  role,
  years,
}: CaseStudyTopFacts) {
  return (
    <div
      className={`flex lg:flex-row flex-col gap-2 md:gap-2 p-8 border-t-30 border-b-4 md:border-b-30 border-darkgray-500 justify-evenly`}
    >
      <div className="flex flex-col border-1 border-gray-700 text-palegray-500 p-8 gap-2 grow">
        <p className="text-2xl font-thin">Client</p>
        <h4 className="uppercase font-bigger text-5xl md:text-6xl xl:text-6xl">
          {client}
        </h4>
      </div>
      <div className="flex flex-col border-1 border-gray-700 text-palegray-500 p-8 gap-2 grow">
        <p className="text-2xl font-thin">Role</p>
        <h4 className="uppercase font-bigger text-5xl md:text-6xl xl:text-6xl">
          {role}
        </h4>
      </div>
      <div className="flex flex-col border-1 border-gray-700 text-palegray-500 p-8 gap-2 grow">
        <p className="text-2xl font-thin">Years</p>
        <h4 className="uppercase font-bigger text-5xl md:text-6xl xl:text-6xl flex gap-2">
          {years.start} <ArrowRight size={40} className="self-center" />{" "}
          {years.end}
        </h4>
      </div>
    </div>
  );
}
