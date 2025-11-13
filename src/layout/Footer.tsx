import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function Footer() {
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

  const date: string = new Date().getFullYear().toString();
  return (
    <footer
      ref={containerRef}
      className="p-8 pt-16 pb-16 flex flex-col text-palegray-500 gap-8"
    >
      <h1
        ref={questionRef}
        className="pb-5 uppercase font-bigger 2xl:text-[14rem]/50 xl:text-[12rem]/40 md:text-[12rem]/40 text-[5.5rem]/19 border-b-palegray-500 border-b-1"
      >
        Ready to solve some <span className="text-palered-500">problems</span>?
      </h1>
      {/* <img src={'./bh-logo.png'} className="max-w-[100px]" /> */}
      <div className="font-bold flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={"./bh-logo.png"} className="max-w-[30px]" />
          &copy; {date}
        </div>
        <div className="flex flex-row gap-8 text-xl">
          <p className="uppercase">Contact</p>
          <a className="cursor-pointer" href="mailto:bhicksdesigndev@gmail.com">
            email
          </a>
          <p className="text-xl">
            <a href="https://www.linkedin.com/in/brett-hicks-78740885/">in</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
