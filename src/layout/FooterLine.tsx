import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function FooterLine() {
  const questionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(questionRef, { opacity: 1 });
      let split = SplitText.create(questionRef.current, {
        type: "chars, words",
      });
      gsap.from(split.chars, {
        opacity: 0,
        duration: 2,
        ease: "steps.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: questionRef.current,
          toggleActions: "restart none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="px-8 pt-16 pb-1 flex flex-col text-palegray-500 gap-8"
    >
      <h1
        ref={questionRef}
        className=" uppercase font-bigger 2xl:text-[14rem]/50 xl:text-[12rem]/40 md:text-[12rem]/40 text-[5.5rem]/19 "
      >
        Ready to solve some <span className="text-palered-500">problems</span>?
      </h1>
    </div>
  );
}
