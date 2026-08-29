import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function CaseStudiesHero({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({});
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="px-8 pt-30 md:pt-20 bg-palered-500 flex flex-col md:flex-row"
    >
      <div className="flex flex-col justify-end md:pb-10">
        <h3
          ref={titleRef}
          className="text-[22vw]/[19vw] md:text-[15vw]/[12vw] font-bigger text-white -mb-[0.2em] uppercase"
        >
          {title}
        </h3>
      </div>
      <div className="max-w-[1000px]">
        <img
          ref={imageRef}
          className="w-full"
          src={`/casestudies/${image}`}
          width={1875}
          height={1190}
        />
      </div>
    </div>
  );
}
