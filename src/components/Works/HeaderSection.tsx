import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function HeaderSection({ title }: { title: string }) {
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
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col basis-4/12 lg:order-2 order-1"
    >
      <h3
        ref={titleRef}
        className={`font-bigger text-8xl/20 
          ${
            title === "SURLALUNE"
              ? "md:text-8xl/17 2xl:text-[10rem]/[8.5rem] 2xl:pt-3 "
              : "md:text-9xl/27 2xl:text-[11rem]/[9.5rem] 2xl:pt-3 "
          }
          text-palered-500`}
      >
        {title}
      </h3>
    </div>
  );
}
