import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

type HeroAlchemySectionProps = {
  head?: string;
  body?: string;
};

export default function HeroAlchemySection({
  head,
  body,
}: HeroAlchemySectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const outerCircle = useRef<SVGCircleElement>(null);
  const secondCircle = useRef<SVGCircleElement>(null);
  const centerCircle = useRef<SVGCircleElement>(null);
  const bodyCopy = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      gsap.to(secondCircle.current, {
        repeat: -1,
        duration: 16,
        rotation: 360,
        transformOrigin: "center center",
        ease: "linear",
      });

      gsap.fromTo(
        bodyCopy.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 1.8 }
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-palered-500 h-80 md:h-120 relative overflow-hidden"
    >
      <div className="flex h-full w-[80%] md:w-[60%] xl:w-[50%] gap-2 pl-8 flex-col items-start">
        {head && (
          <h4 className="text-palegray-500 font-bigger text-8xl/[40px]">
            {head.toUpperCase()}
          </h4>
        )}
        {body && (
          <p
            className="text-palegray-500 font-normal lg:font-light text-xl/7 md:text-3xl/10 xl:text-5xl/12 relative d:p-5 lg:pt-10 bg-palered-500 z-50 pt-5"
            ref={bodyCopy}
          >
            {body}
          </p>
        )}
      </div>
      <svg
        viewBox="0 0 1010.296 1010.296"
        xmlns="http://www.w3.org/2000/svg"
        className="left-10/12 xl:left-9/12 -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12 xl:w-1/2 absolute"
      >
        <circle
          ref={outerCircle}
          cx="505.556"
          cy="505.259"
          r="455.556"
          stroke="#DCDCDC"
          strokeWidth={4}
          fill="none"
          strokeMiterlimit={10}
        />

        <circle
          ref={centerCircle}
          cx="505.556"
          cy="505.259"
          r="178.998"
          stroke="#DCDCDC"
          strokeWidth={4}
          fill="none"
          strokeMiterlimit={10}
        />

        <g ref={secondCircle}>
          <circle
            cx="505.556"
            cy="366.98"
            r="317.277"
            stroke="#DCDCDC"
            fill="none"
            strokeMiterlimit={10}
          />
          <circle
            cx="505.556"
            cy="643.538"
            r="317.277"
            stroke="#DCDCDC"
            fill="none"
            strokeMiterlimit={10}
          />
        </g>
      </svg>
    </div>
  );
}
