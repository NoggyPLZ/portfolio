import ContactInfo from "./ContactInfo";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Contact() {
  const contactMeText = useRef<HTMLHeadingElement>(null);
  const solveText = useRef<HTMLHeadingElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({});
      tl.fromTo(
        contactMeText.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      ).fromTo(
        solveText.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2 }
      );
    },
    { scope: textContainer }
  );
  return (
    <>
      <div className="px-8 pt-30 md:pt-40 bg-palered-500" ref={textContainer}>
        <h3
          className="text-palegray-500 font-bigger uppercase text-[8vw] md:text-[5vw] xl:text-[4vw] pb-1 md:pb-0 -mb-[0.2em] leading-none"
          ref={contactMeText}
        >
          CONTACT ME
        </h3>
      </div>
      <div className="bg-palered-500 px-8 pt-2 pb-5">
        <div className="flex items-center">
          <h2
            className="text-[22vw]/[19vw] md:text-[12vw] font-bigger text-palegray-500 -mb-[0.2em] md:leading-none uppercase"
            ref={solveText}
          >
            LET'S SOLVE PROBLEMS
          </h2>
        </div>
      </div>
      <ContactInfo />
    </>
  );
}
