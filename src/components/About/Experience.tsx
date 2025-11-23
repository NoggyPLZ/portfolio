import Education from "./Education";
import Work from "./Work";

export default function Experience() {
  return (
    <div className="bg-palegray-500 ">
      <div className="flex lg:flex-row flex-col gap-8 p-8 border-t-30 border-b-30 border-darkgray-500">
        <h1 className="font-bigger text-7xl/15 md:text-9xl/27 2xl:text-[13rem]/[10.5rem] 2xl:pt-6 text-palered-500">
          EXPERIENCE
        </h1>

        <div className="flex-col flex pb-10 grow lg:pt-50 gap-5">
          <Education />

          <Work />

          {/* <div className="flex flex-col lg:flex-row lg:gap-8 justify-end bg-darkgray-500 p-8 mt-3">
            <h3 className="text-3xl text-darkgray-500 font-black">Design</h3>
            <ul className="text-palegray-500 lg:border-r-1 lg:border-r-darkgray-500 pb-8 lg:pb-0 lg:pr-8 font-bold">
              <li>Site Design</li>
              <li>Banner Design</li>
              <li>Illustration</li>
              <li>Logo Design</li>
              <li>Branding</li>
            </ul>

            <h3 className="text-3xl text-darkgray-500 font-black">
              Development
            </h3>
            <ul className="text-palegray-500 font-bold">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Git</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
