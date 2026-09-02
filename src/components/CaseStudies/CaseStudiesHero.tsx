import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { CaseStudyHero } from "../../data/caseStudies";
gsap.registerPlugin(useGSAP);

export default function CaseStudiesHero({
  minorName,
  name,
  image,
  alt,
  width,
  height,
  mobile,
}: CaseStudyHero & { name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({});
      tl.fromTo(
        ".title-copy",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      ).fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2 }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="px-8 pt-20 bg-palered-500 justify-between flex flex-col md:flex-row"
    >
      <div className="flex flex-col justify-end md:pb-10 xl:min-w-[500px]">
        {minorName && (
          <h3 className="title-copy text-white font-bigger uppercase text-[8vw]/[10vw] md:text-[5vw]/[8vw] 2xl:text-[5vw]/[8vw] pb-1 md:pb-0 -mb-[0.2em] ">
            {minorName}
          </h3>
        )}
        <h3
          ref={titleRef}
          className={`title-copy 
            ${
              name === "SURLALUNE"
                ? "md:text-[11.5vw]/[9vw]"
                : "md:text-[15vw]/[12vw]"
            }
            text-[22vw]/[19vw]  font-bigger text-white -mb-[0.2em] uppercase`}
        >
          {name}
        </h3>
      </div>
      <div className="max-w-[1000px]">
        <picture>
          <source
            media="(max-width:800px)"
            srcSet={`/casestudies/${mobile.image}`}
            width={mobile.width}
            height={mobile.height}
          />
          <img
            ref={imageRef}
            className="max-w-full"
            src={`/casestudies/${image}`}
            width={width}
            height={height}
            alt={alt}
          />
        </picture>
      </div>
    </div>
  );
}
