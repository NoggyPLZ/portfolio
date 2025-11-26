import Education from "./Education";
import Work from "./Work";

export default function Experience() {
  return (
    <div className="bg-palegray-500 ">
      <div className="flex lg:flex-row flex-col gap-8 p-8 border-t-30 border-b-darkgray-500 border-t-palegray-500">
        <h1 className="font-bigger text-7xl/15 md:text-9xl/27 2xl:text-[13rem]/[10.5rem] 2xl:pt-6 text-palered-500">
          EXPERIENCE
        </h1>

        <div className="flex-col flex pb-10 grow lg:pt-50 gap-5">
          <Education />

          <Work />
        </div>
      </div>
    </div>
  );
}
