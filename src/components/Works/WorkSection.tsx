import projects from "../../data/projects";
import CopySection from "./CopySection";
import WorksImages from "./WorksImages";
import AlchemySection from "./AlchemySection";
import HeaderSection from "./HeaderSection";

export default function WorkSection() {
  return (
    <div className="bg-darkgray-500" id="works">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`${
            index % 2 !== 0 ? "bg-darkgray-500" : "bg-palegray-500"
          }`}
        >
          <div className="grid lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] gap-4 lg:gap-x-8 lg:gap-y-0 p-8 border-t-30 border-b-30 border-darkgray-500">
            <HeaderSection title={project.title} />
            <WorksImages images={project.images} />
            <CopySection
              copy={{
                title: project.title,
                client: project.client,
                skills: project.skills,
                body: project.body,
                even: index % 2 === 0,
                link: project.link,
                git: project.git,
                caseLink: project.case,
                spotify: project.spotify,
                bandcamp: project.bandcamp,
              }}
            />
          </div>
          <AlchemySection
            head={`Dummy Copy`}
            body={"for now please fix"}
            section={index}
            quote={project.quote}
            stats={project.stats}
          />
        </div>
      ))}
    </div>
  );
}
