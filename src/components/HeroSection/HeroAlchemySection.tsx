import { gsap } from "gsap";
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
  const cauldronTriangle = useRef<SVGPolygonElement>(null);
  const drip = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(drip.current, {
        y: -1150,
        duration: 4,
        ease: "power2.inOut",
      });
      gsap.to(secondCircle.current, {
        duration: 4,
        rotation: 120,
        transformOrigin: "center center",
        ease: "power3.out",
      });

      gsap.fromTo(
        bodyCopy.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 1.8 },
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="bg-palered-500 h-80 md:h-110 xl:h-130 relative overflow-hidden"
    >
      <div className="flex h-full w-[80%] sm:w-[50%] md:w-[60%] xl:w-[50%] gap-2 pl-8 flex-col items-start">
        {head && (
          <h4 className="text-white font-bigger text-8xl/[40px]">
            {head.toUpperCase()}
          </h4>
        )}
        {body && (
          <p
            className="text-white font-normal lg:font-light text-2xl md:text-3xl/10 xl:text-5xl/12 relative md:p-5 lg:pt-10 z-50 pt-5 text-halo"
            ref={bodyCopy}
          >
            {body}
          </p>
        )}
      </div>
      <svg
        viewBox="0 0 1010.296 1010.296"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-10/12 xl:left-9/12 -translate-x-1/2 -translate-y-9/12 md:-translate-y-3/4 xl:top-1/2 xl:-translate-y-1/2 w-10/12 md:w-8/12 xl:w-1/2"
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
        <g
          transform="translate(505.556 505.259) scale(0.58632) translate(-353.45 -1297.37)"
          fill="#1c1e22"
        >
          <defs>
            <mask id="cauldron-fill">
              <path
                ref={drip}
                fill="white"
                d="M318.9,2283.5C293.5,2278.4 273.6,2258.4 268.6,2232.8C266.2,2220.2 268.5,2195.9 275.7,2159.5L277.7,2149.3L277.6,1994.0L277.4,1838.8L271.6,1842.4C255.1,1852.7 237.7,1861.6 222.2,1867.9L212.1,1871.9L211.9,1911.4L211.8,1950.9L213.5,1959.7C220.3,1994.7 222.7,2019.2 220.3,2031.5C212.9,2069.7 173.7,2092.4 136.5,2079.9C115.4,2072.9 99.1,2053.9 94.8,2031.5C92.3,2018.8 95.1,1991.0 102.4,1955.4L103.8,1948.2L103.8,1913.9L103.8,1879.7L101.4,1879.3C78.2,1875.6 40.6,1860.6 8.5,1842.1L0.0,1837.2L0.0,1284.3L0.0,731.4L355.0,731.4L710.0,731.4L710.0,1167.5L710.0,1603.5L707.5,1603.8C706.2,1604.0 701.8,1604.4 697.7,1604.8C672.0,1607.0 638.4,1613.4 614.8,1620.6L610.8,1621.8L610.8,1832.6C610.8,2042.2 610.8,2043.4 612.0,2049.1C618.9,2082.5 621.7,2111.3 619.3,2123.7C610.1,2171.2 554.1,2191.5 516.0,2161.2C504.9,2152.2 496.7,2138.4 493.8,2123.7C491.4,2111.0 494.2,2083.1 501.4,2047.6L502.9,2040.4L502.9,1855.5C502.9,1689.0 502.8,1670.6 502.0,1670.9C500.2,1671.6 483.8,1682.0 472.6,1689.6C449.0,1705.6 427.6,1721.6 395.7,1747.3L385.6,1755.4L385.6,1953.9C385.6,2151.2 385.6,2152.5 386.8,2158.2C393.7,2191.6 396.5,2220.4 394.1,2232.8C389.1,2258.6 369.1,2278.6 343.4,2283.5C337.7,2284.6 324.4,2284.6 318.9,2283.5Z"
              />
            </mask>
          </defs>

          <polygon
            id="cauldron-triangle"
            ref={cauldronTriangle}
            mask="url(#cauldron-fill)"
            points="353.45 1602.66 617.84 1144.72 89.06 1144.72"
          />
        </g>
      </svg>
    </div>
  );
}
