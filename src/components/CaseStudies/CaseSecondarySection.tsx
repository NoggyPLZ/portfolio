import type { CaseStudyRowType } from "../../data/caseStudies";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function CaseSecondarySection({
  header,
  copy,
  image,
  beforeAndAfter,
  light = false,
}: CaseStudyRowType & { light?: boolean }) {
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
      className={light ? "bg-palegray-500" : "bg-darkgray-500"}
    >
      <div
        className={`flex lg:flex-row flex-col gap-8 p-8 border-t-30  border-darkgray-500 border-b-30`}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h4 className="pb-4 flex gap-4 text-gray-500 uppercase">
              <span className="text-palered-500">{light ? "02" : "03"}</span>
              {light ? "The Solution" : "The System"}
            </h4>
            <div className="flex flex-col md:flex-row gap-4">
              <h3
                ref={titleRef}
                className="uppercase font-bigger text-7xl/15 md:text-9xl/27 2xl:text-[7rem]/[5.8rem] 2xl:pt-3 text-palered-500 basis-1/2"
              >
                {header}
              </h3>
              <div className="flex flex-col gap-4 md:basis-1/2">
                {copy?.map((el) => (
                  <p
                    key={el}
                    className={`text-base md:text-xl whitespace-pre-wrap
                    ${light ? "text-darkgray-500" : "text-palegray-500"} `}
                  >
                    {el}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            {image?.map((el, i) => (
              <div key={el.src} className="basis-1/2">
                {beforeAndAfter && (
                  <p
                    className={`
                  border-x-1 border-t-1 border-x-gray-700 border-t-gray-700 p-2
                  ${light ? "bg-darkgray-500" : ""}
                  ${i % 2 === 0 ? "text-neutral-400" : "text-white"}`}
                  >
                    {i % 2 === 0 ? "Before" : "After"}
                  </p>
                )}

                <img
                  src={`/casestudies/${el.src}`}
                  alt={el.alt}
                  width={el.width}
                  height={el.height}
                  className="case-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
