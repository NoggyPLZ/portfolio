import Education from "./Education";
import Work from "./Work";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Experience() {
  const expText = useRef<HTMLHeadingElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        expText.current,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.in",
          scrollTrigger: {
            trigger: container.current,
            toggleActions: "restart none none none",
          },
        }
      );
    },
    { scope: container }
  );
  return (
    <div className="bg-palegray-500 ">
      <div
        className="flex lg:flex-row flex-col gap-8 p-8 border-t-30 border-b-darkgray-500 border-t-palegray-500"
        ref={container}
      >
        <h1
          className="font-bigger text-7xl/15 md:text-9xl/27 2xl:text-[13rem]/[10.5rem] 2xl:pt-6 text-palered-500"
          ref={expText}
        >
          EXPERIENCE
        </h1>

        <div className="flex-col flex pb-10 grow lg:pt-50 gap-5">
          <Work />
          <Education />
        </div>
      </div>
    </div>
  );
}
