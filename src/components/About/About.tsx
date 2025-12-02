import Experience from "./Experience";
import Skills from "./Skills";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import AboutCopy from "./AboutCopy";
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
      <AboutCopy />
      <Experience />
      <Skills />
    </>
  );
}
