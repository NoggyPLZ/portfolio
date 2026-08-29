import type { CaseStudyRowType } from "../../data/caseStudies";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function CaseIntroSection({
  header,
  copy,
  image,
}: CaseStudyRowType) {
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let split = SplitText.create(titleRef.current, { type: "words, chars" });
      gsap.from(split.words, {
        duration: 0.6,
        stagger: 0.05,
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: titleRef.current,
          toggleActions: "restart none none none",
        },
        ease: "power1.in",
      });

      const images = gsap.utils.toArray<HTMLElement>(".case-image");
      if (images.length) {
        gsap.set(images, { opacity: 1 });
        gsap.from(images, {
          scrollTrigger: {
            trigger: images[0],
            toggleActions: "restart none none none",
          },
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power1.in",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`flex lg:flex-row flex-col gap-8 p-8 border-t-4 md:border-t-30 border-b-30 border-darkgray-500`}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="basis-6/12">
          <h4 className="pb-4 flex gap-4 text-gray-500 uppercase">
            <span className="text-palered-500">01</span>The Problem
          </h4>
          <h3
            ref={titleRef}
            className="uppercase font-bigger text-7xl/15 md:text-9xl/27 2xl:text-[7rem]/[5.8rem] 2xl:pt-3 text-palered-500"
          >
            {header}
          </h3>
          <div className="flex flex-col gap-4">
            {copy?.map((el) => (
              <p
                key={el}
                className={`text-base md:text-xl whitespace-pre-wrap text-palegray-500`}
              >
                {el}
              </p>
            ))}
          </div>
        </div>
        {image && (
          <div className="basis-6/12">
            <img
              src={`/casestudies/${image[0].src}`}
              alt={image[0].alt}
              height={image[0].height}
              width={image[0].width}
              className="case-image"
            />
            <p className="text-neutral-400 border-x-1 border-b-1 border-gray-700 p-2">
              {image[0].caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
