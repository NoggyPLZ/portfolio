import type { CaseStudyBottomFactsType } from "../../data/caseStudies";

export default function CaseStudyBottomFacts({
  facts,
}: {
  facts: CaseStudyBottomFactsType[];
}) {
  return (
    <div
      className={`flex lg:flex-row flex-col gap-2 md:gap-2 p-8 border-t-30 border-b-4 md:border-b-30 border-darkgray-500 justify-evenly`}
    >
      {facts.map((el) => (
        <div
          key={el.description}
          className="flex flex-col border-1 border-gray-700 text-palegray-500 p-8 grow"
        >
          <h4 className="uppercase font-bigger text-5xl md:text-6xl xl:text-8xl">
            {el.metric}
          </h4>
          <p className="text-2xl font-thin">{el.description}</p>
        </div>
      ))}
    </div>
  );
}
