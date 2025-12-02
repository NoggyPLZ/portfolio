import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/src/DrawSVGPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);

export function AlchemyShape1() {
  const container = useRef<SVGSVGElement>(null);
  const innerTriangle = useRef<SVGPathElement>(null);
  const downTriangle = useRef<SVGPathElement>(null);
  const upTriangle = useRef<SVGPathElement>(null);
  const captureLines = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            toggleActions: "restart none none none",
          },
        })
        .to(downTriangle.current, {
          opacity: 1,
          duration: 1.5,
          ease: "power2.in",
        })
        .to(
          upTriangle.current,
          { opacity: 1, duration: 0.5, ease: "power2.in" },
          "<"
        )
        .to(
          innerTriangle.current,
          { opacity: 1, duration: 0.5, ease: "power2.in" },
          "<"
        )
        .to(
          innerTriangle.current,
          { fill: "#1c1e22", strokeWidth: 0, duration: 1, ease: "power2.in" },
          "<"
        )
        .to(captureLines.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.in",
        });
    },
    { scope: container, dependencies: [], revertOnUpdate: true }
  );

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 445.04 485.49"
        className="top-1/3 md:top-1/2 left-10/12 xl:left-8/12 2xl:left-8/12 -translate-x-1/2 -translate-y-1/2 w-[130%] md:w-8/12 xl:w-7/12 2xl:w-1/3 absolute will-change-transform"
        ref={container}
      >
        <path
          d="M222.52 484.86.55 100.73H444.5L222.52 484.86z"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={0.63}
          ref={downTriangle}
          className="opacity-0"
        />
        <path
          d="M222.52.63 444.5 384.76H.55L222.52.63z"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={0.63}
          ref={upTriangle}
          className="opacity-0"
        />
        <path
          d="m222.52 115.12 118.92 205.79H103.6l118.92-205.79z"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={2.53}
          ref={innerTriangle}
          className="opacity-0"
        />
        <path
          d="M444.5 384.76 222.52 248.25.55 384.76M222.52 248.25V.63"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={0.63}
          ref={captureLines}
          className="opacity-0"
        />
      </svg>
    </>
  );
}

export function AlchemyShape2() {
  const container = useRef<SVGSVGElement>(null);
  const blackTriangle1 = useRef<SVGPolygonElement>(null);
  const blackTriangle2 = useRef<SVGPolygonElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            toggleActions: "restart none none none",
          },
        })
        .fromTo(
          blackTriangle1.current,
          { y: -100 },
          { y: 0, duration: 1, ease: "power2.out" },
          "<"
        )
        .fromTo(
          blackTriangle2.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.in" }
        )
        .from(".white-line", {
          drawSVG: "0%",
          duration: 0.5,
          ease: "power2.in",
          stagger: 0.2,
        });
    },
    { scope: container, dependencies: [], revertOnUpdate: true }
  );

  return (
    <>
      <svg
        ref={container}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 477.57 414.79"
        className="absolute -top-5 left-4/6 -translate-x-1/2 w-full md:w-8/12 xl:w-8/12 2xl:w-1/2 will-change-transform"
      >
        <polygon
          points="159.44 2.45 318.13 277.05 .76 277.05 159.44 2.45"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={0.88}
          className="white-line"
        />
        <polygon
          points="318.13 2.45 476.81 277.05 159.44 277.05 318.13 2.45"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={0.88}
          className="white-line"
        />
        <polygon
          points="238.88 160.94 301.91 270.01 175.85 270.01 238.88 160.94"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={3.52}
          ref={blackTriangle2}
        />
        <polygon
          points="238.88 110.83 175.85 1.76 301.91 1.76 238.88 110.83"
          fill="#1c1e22"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={0}
          ref={blackTriangle1}
        />
        <polygon
          points="238.56 139.75 397.24 414.35 79.88 414.35 238.56 139.75"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={0.88}
          className="white-line"
        />
      </svg>
    </>
  );
}

export function AlchemyShape3() {
  const container = useRef<SVGSVGElement>(null);
  const cube = useRef<SVGPolygonElement>(null);
  const leftAngle = useRef<SVGPolylineElement>(null);
  const rightAngle = useRef<SVGPolylineElement>(null);
  const bottomAngle = useRef<SVGPolylineElement>(null);
  const centerTriangle = useRef<SVGPolygonElement>(null);

  useGSAP(
    () => {
      if (leftAngle.current && rightAngle.current) {
        const leftBBox = leftAngle.current.getBBox();
        const originX = 249.82 - leftBBox.x;
        const originY = 70.97 - leftBBox.y;

        const rightBBox = rightAngle.current.getBBox();
        const rightOriginX = 249.82 - rightBBox.x;
        const rightOriginY = 70.97 - rightBBox.y;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current,
              toggleActions: "restart none none none",
            },
          })
          .fromTo(
            centerTriangle.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power2.in" },
            "<"
          )
          .fromTo(
            leftAngle.current,
            {
              rotation: -10,
              opacity: 0,
              transformOrigin: `${originX}px ${originY}px`,
            },
            { rotation: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
            "1"
          )
          .fromTo(
            rightAngle.current,
            {
              rotation: 30,
              opacity: 0,
              transformOrigin: `${rightOriginX}px ${rightOriginY}px`,
            },
            { rotation: 0, opacity: 1, duration: 0.5, ease: "power4.out" },
            "1"
          )
          .fromTo(
            bottomAngle.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power4.Out" }
          );
      }
    },
    { scope: container, dependencies: [], revertOnUpdate: true }
  );

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 478.82 444.85"
        className="top-1/3 md:top-1/2 left-10/12 xl:left-8/12 2xl:left-8/12 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-8/12 lg:w-6/12 xl:w-12/24 2xl:w-7/24 absolute will-change-transform"
        ref={container}
      >
        <polygon
          points="478.18 399.2 239.25 444.52 .32 399.2 .32 45.65 239.25 .33 478.18 45.65 478.18 399.2"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={2}
          ref={cube}
        />
        <line
          x1={0.32}
          y1={399.2}
          x2={239.25}
          y2={353.97}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
        />

        <polyline
          points="249.82 70.97 99.69 186.18 97.62 243.5"
          fill="#1c1e22"
          stroke="#db2f2f"
          strokeMiterlimit={10}
          strokeWidth={0}
          ref={leftAngle}
        />
        <polyline
          points="249.82 70.97 380.89 220.25 323.81 304.81"
          fill="#1c1e22"
          stroke="#db2f2f"
          strokeMiterlimit={10}
          strokeWidth={0}
          ref={rightAngle}
        />
        <polyline
          points="323.81 304.81 201.2 366.11 97.62 243.5"
          fill="#1c1e22"
          stroke="#db2f2f"
          strokeMiterlimit={10}
          strokeWidth={0}
          ref={bottomAngle}
        />
        <polygon
          points="323.81,304.81 249.82,70.97 97.62,243.82"
          fill="#1c1e22"
          stroke="#db2f2f"
          strokeMiterlimit={10}
          strokeWidth={3}
          ref={centerTriangle}
        />

        <line
          x1={478.19}
          y1={399.2}
          x2={239.26}
          y2={353.97}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <line
          x1={0.32}
          y1={46.42}
          x2={239.25}
          y2={91.65}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <line
          x1={478.76}
          y1={46.42}
          x2={239.83}
          y2={91.65}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
        />

        <line
          x1={239.83}
          y1={91.65}
          x2={239.83}
          y2={444.52}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
      </svg>
    </>
  );
}

export function AlchemyShape4() {
  const container = useRef<SVGSVGElement>(null);
  const blackTriangle = useRef<SVGPolygonElement>(null);
  const polyhedronOuter = useRef<SVGPolygonElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            toggleActions: "restart none none none",
          },
        })
        .fromTo(
          blackTriangle.current,
          { y: -200 },
          { y: 0, duration: 1, ease: "power2.out" }
        )
        .from(polyhedronOuter.current, { opacity: 0, ease: "power2.in" }, "<")
        .from(".white-line", {
          drawSVG: "0%",
          duration: 1,
          ease: "power2.in",
        });
    },
    { scope: container, dependencies: [], revertOnUpdate: true }
  );

  return (
    <>
      {/* md:left-10/12 xl:left-8/12 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 408.03 471.15"
        className="top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-8/12 xl:w-1/3 absolute will-change-transform"
        ref={container}
        shapeRendering="geometricPrecision"
      >
        <polygon
          points="204.02 469.57 .88 118.33 407.1 118.33 204.02 469.57"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <polygon
          points="204.02 1.26 406.87 352.7 1.16 352.7 204.02 1.26"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />

        <polygon
          points="204.02 119.51 304.45 293.93 103.12 293.93 204.02 119.51"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />

        <polygon
          points=".5 118.08 .5 353.08 204.02 470.58 407.53 353.08 407.53 118.08 204.02 .58 .5 118.08"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          ref={polyhedronOuter}
        />

        <line
          x1={0.5}
          y1={118.08}
          x2={103.12}
          y2={178.67}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <polygon
          points="204.02 351.03 103.12 178.67 301.73 178.67 204.02 351.03"
          fill="#1c1e22"
          stroke="#1c1e22"
          strokeMiterlimit={10}
          strokeWidth={4}
          ref={blackTriangle}
        />
        <line
          x1={0.5}
          y1={353.08}
          x2={103.12}
          y2={293.93}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <line
          x1={407.53}
          y1={353.08}
          x2={305.21}
          y2={293.93}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <line
          x1={407.53}
          y1={118.08}
          x2={303.86}
          y2={177.25}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <line
          x1={204.02}
          y1={119.93}
          x2={204.02}
          y2={1.26}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <line
          x1={204.02}
          y1={470.62}
          x2={204.02}
          y2={353.48}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
      </svg>
    </>
  );
}

export function AlchemyShape5() {
  const container = useRef<SVGSVGElement>(null);
  const blackTriangle = useRef<SVGPolygonElement>(null);
  const polyhedronOuter = useRef<SVGPolygonElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            toggleActions: "restart none none none",
          },
        })
        .fromTo(
          polyhedronOuter.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.in" }
        )
        .from(".white-line", {
          drawSVG: "0%",
          duration: 1.5,
          ease: "power2.in",
        })
        .from(blackTriangle.current, {
          duration: 1,
          scale: 0,
          transformOrigin: "center center",
        });
    },
    { scope: container, dependencies: [], revertOnUpdate: true }
  );
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 664.15 766.85"
        className="top-40 md:top-1/2 left-10/12 xl:left-10/12 2xl:left-8/12 -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12 xl:w-7/12 2xl:w-1/3 absolute will-change-transform"
        ref={container}
      >
        <polygon
          points="441.51 320.27 332.09 257.07 222.66 320.22 222.63
446.57 332.04 509.77 441.48 446.62 441.51 320.27"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={2}
          ref={polyhedronOuter}
        />
        <polyline
          points="441.48 446.62 390.77 609.73 .46 574.78 .54 191.92"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <polyline
          points="441.51 320.27 572.73 428.98 331.99 766.28 .46
574.78"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <polyline
          points="332.06 257.01 490.46 194.18 663.59 574.92 331.99
766.28"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <polyline
          points="222.66 320.22 273.38 135.68 663.67 192.06 663.59
574.92"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <polyline
          points="222.63 446.57 87.64 310.81 332.15 .56 663.67
192.06"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <polyline
          points="332.04 509.77 149.49 559.47 .54 191.92 332.15 .56"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <polygon
          points="331.28 501.04 434.42 325.33 230.67 323.86 331.28
501.04"
          fill="#1c1e22"
          stroke="#1c1e22"
          strokeMiterlimit={10}
          strokeWidth={4}
          ref={blackTriangle}
        />
      </svg>
    </>
  );
}

export function AlchemyShape6() {
  const container = useRef<SVGSVGElement>(null);
  const blackTriangle = useRef<SVGPolygonElement>(null);
  const threeCircles = useRef<SVGCircleElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            toggleActions: "restart none none none",
          },
        })
        .fromTo(
          blackTriangle.current,
          {
            y: -200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
          }
        )
        .fromTo(
          threeCircles.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.in" }
        )
        .from(".white-line", {
          drawSVG: "0%",
          duration: 1,
          ease: "power2.in",
        });
    },
    { scope: container, dependencies: [], revertOnUpdate: true }
  );

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 746.34 776.13"
        ref={container}
        className="top-50 lg:top-40 2xl:top-30 left-10/12 xl:left-8/12 -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12 xl:w-1/2 2xl:w-1/3 absolute will-change-transform"
      >
        <polygon
          points="368.17 698.62 668.84 177.86 67.51 177.86 368.17
698.62"
          fill="#1c1e22"
          stroke="#1c1e22"
          strokeMiterlimit={10}
          strokeWidth={4}
          ref={blackTriangle}
        />
        <g ref={threeCircles}>
          <circle
            cx="368.17"
            cy="698.62"
            r="67.07"
            fill="none"
            stroke="#dcdcdc"
            strokeMiterlimit={10}
            strokeWidth={3}
            className="white-circle"
          />
          <circle
            cx="67.51"
            cy="177.86"
            r="67.07"
            fill="none"
            stroke="#dcdcdc"
            strokeMiterlimit={10}
            strokeWidth={3}
            className="white-circle"
          />
          <circle
            cx="668.84"
            cy="177.86"
            r="67.07"
            fill="none"
            stroke="#dcdcdc"
            strokeMiterlimit={10}
            strokeWidth={3}
            className="white-circle"
          />
        </g>

        <line
          x1={368.17}
          y1={698.62}
          x2={368.17}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <line
          x1={670.14}
          y1={531.27}
          x2={67.51}
          y2={177.86}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />
        <line
          x1={66.85}
          y1={531.27}
          x2={669.49}
          y2={177.86}
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={1}
          className="white-line"
        />

        <circle
          cx="368.17"
          cy="354.56"
          r="257.17"
          fill="none"
          stroke="#dcdcdc"
          strokeMiterlimit={10}
          strokeWidth={3}
        />
      </svg>
    </>
  );
}
