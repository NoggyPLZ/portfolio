import HeroAlchemySection from "./HeroAlchemySection";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
gsap.registerPlugin(useGSAP, SplitText);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mainLineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline();
      gsap.set(mainLineRef, { opacity: 1 });
      let split = SplitText.create(mainLineRef.current, {
        type: "words",
        aria: "hidden",
      });
      tl.fromTo(
        lineRef.current,
        { width: 0 },
        { width: "100%", duration: 1.5, ease: "power2.out" }
      ).from(
        split.words,
        { opacity: 0, duration: 2, ease: "steps.out", stagger: 0.34 },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <>
      <div className="font-bigger text-palegray-500 bg-darkgray-500 p-8 pt-40 z-10">
        <h2
          ref={containerRef}
          className="xl:text-[9.8rem]/35 text-[3.2rem]/17 md:text-[6.8rem]/15 inline-block relative md:pl-5 md:pr-5 pl-1 pr-1"
        >
          <span
            ref={lineRef}
            className="rotate-358 absolute left-0 top-1/3 md:top-1/3 xl:h-[20px] h-[9px] bg-palered-500 origin-left"
          ></span>
          COMPLEX PROBLEMS
        </h2>
        <h1
          ref={mainLineRef}
          className="2xl:text-[20rem]/75 xl:text-[12rem]/40 md:text-[12rem]/40 text-[7rem]/19 pt-1 md:pt-4 lg:pt-4 xl:pt-0 wrap-break-word"
        >
          VISUAL{" "}
          <span className="2xl:text-[20rem]/75 xl:text-[12rem]/40 md:text-[12rem]/40 text-[6.5rem]/27">
            SOLUTIONS
          </span>
        </h1>
      </div>
      <HeroAlchemySection
        head={"15 Years"}
        body={"in Web Design and Front-end"}
      />
    </>
  );
}
