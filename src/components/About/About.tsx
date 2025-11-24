import Experience from "./Experience";
import Skills from "./Skills";

export default function About() {
  return (
    <>
      <div className="px-8 pt-30 md:pt-40 bg-palered-500">
        <h3 className="text-palegray-500 font-bigger uppercase text-[8vw] md:text-[3vw] pb-1 md:pb-5 -mb-[0.2em] leading-none">
          Hello, my name is
        </h3>
      </div>
      <div className="bg-palered-500 px-8 pt-2 pb-5">
        <div className="flex items-center">
          <h2 className="text-[22vw] md:text-[16vw] font-bigger text-palegray-500 -mb-[0.2em] leading-none">
            BRETT HICKS
          </h2>
        </div>
      </div>
      {/* <div className="px-8 md:px-20 text-right text-palegray-500 italic text-[5vw]/[8vw] md:text-[3vw]/[3vw] place-items-center flex justify-end font-light">
        <h3>
          <span className="">designer</span>{" "}
          <span className="text-[4vw]/[4vw] font-black text-palered-500">
            &amp;
          </span>{" "}
          <span className="">developer</span>
        </h3>
      </div> */}
      <div className="p-8 flex lg:flex-row flex-col gap-8 py-30 bg-darkgray-500">
        <div className="lg:basis-1/2 text-right basis-full">
          <div className="lg:max-w-[800px] ml-auto text-xl/10">
            <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 mb-5">
              I have 15 years of professional <strong>web design</strong> and{" "}
              {""}
              <strong>web development</strong> experience focusing on HTML/CSS,
              UI, and static/marketing sites. Over the last year, I've
              transitioned into modern JavaScript and TypeScript, building full
              React applications and learning modern tooling.
            </p>
            <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 mb-5">
              When I'm not coding and designing, I enjoy reading scifi novels,
              playing competitive fighting games, and watching horror movies.
            </p>
          </div>
        </div>
        <div className="lg:basis-1/2 basis-full">
          <div className="lg:h-full lg:w-200">
            <img
              src="images/picture-of-brett.webp"
              className="mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      <Experience />
      <Skills />
    </>
  );
}
