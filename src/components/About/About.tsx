import Experience from "./Experience";
import Skills from "./Skills";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function About() {
  const helloText = useRef<HTMLHeadingElement>(null);
  const nameText = useRef<HTMLHeadingElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({});
      tl.fromTo(
        helloText.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      ).fromTo(
        nameText.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      );
    },
    { scope: textContainer }
  );

  return (
    <>
      <div ref={textContainer}>
        <div className="px-8 pt-30 md:pt-40 bg-palered-500">
          <h3
            className="text-palegray-500 font-bigger uppercase text-[8vw] md:text-[5vw] 2xl:text-[4vw] pb-1 md:pb-0 -mb-[0.2em] leading-none"
            ref={helloText}
          >
            Hello, my name is
          </h3>
        </div>
        <div className="bg-palered-500 px-8 pt-2 pb-5">
          <div className="flex items-center">
            <h2
              className="text-[22vw]/[19vw] md:text-[15vw] font-bigger text-palegray-500 -mb-[0.2em] md:leading-none"
              ref={nameText}
            >
              BRETT HICKS
            </h2>
          </div>
        </div>
      </div>
      <div className="p-8 flex lg:flex-row flex-col gap-8 md:py-30 pt-15 bg-darkgray-500">
        <div className="lg:basis-1/2 text-right basis-full order-2 lg:order-1">
          <div className="lg:max-w-[800px] ml-auto text-xl/10">
            <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 md:mb-5">
              I have 15 years of professional <strong>web design</strong> and{" "}
              {""}
              <strong>front-end web development</strong> experience focusing on
              HTML/CSS, UI, and static/marketing sites. Over the last year, I've
              transitioned into modern JavaScript and TypeScript, building full
              React applications and learning modern tooling.
            </p>
            <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 md:mb-5">
              When I'm not coding and designing, I enjoy reading scifi novels,
              playing competitive fighting games, and watching horror movies.
            </p>
          </div>
        </div>
        <div className="lg:basis-1/2 basis-full order-1 lg:order-2 ">
          <div className="lg:h-full lg:w-200 w-80 mx-auto md:ml-0">
            <img
              src="images/picture-of-brett.webp"
              className="mx-auto rounded-2xl"
              width="600"
              height="634"
              alt="picture of me, Brett Hicks"
            />
          </div>
        </div>
      </div>

      <Experience />
      <Skills />
    </>
  );
}
