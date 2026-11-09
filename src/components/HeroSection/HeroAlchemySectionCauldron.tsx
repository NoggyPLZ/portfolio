import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

type HeroAlchemySectionProps = {
  head?: string;
  body?: string;
};

const INK = "#1C1E22";

// The centre circle: the vessel that fills up.
const CX = 505.556;
const CY = 505.259;
const R = 178.998;

// Timing, in seconds.
const FALL = 0.55;
const FILL = 2.7;
const HOLD = 0.25; // beat on the full circle before it morphs
const MORPH = 1.2;

// Pairs N points on the circle with N points on an inverted triangle. Three of
// them land exactly on the corners, so the morph ends perfectly sharp.
const MORPH_POINTS = 120; // keep divisible by 3
const buildMorphPairs = () => {
  const halfSide = (2 * R) / Math.sqrt(3);
  const corners = [
    [CX, CY + R],
    [CX - halfSide, CY - R],
    [CX + halfSide, CY - R],
  ];
  const perEdge = MORPH_POINTS / 3;

  return Array.from({ length: MORPH_POINTS }, (_, i) => {
    const angle = Math.PI / 2 + (i / MORPH_POINTS) * Math.PI * 2;
    const edge = Math.floor(i / perEdge);
    const t = (i % perEdge) / perEdge;
    const [ax, ay] = corners[edge];
    const [bx, by] = corners[(edge + 1) % 3];
    return {
      circleX: CX + Math.cos(angle) * R,
      circleY: CY + Math.sin(angle) * R,
      triangleX: ax + (bx - ax) * t,
      triangleY: ay + (by - ay) * t,
    };
  });
};

export default function HeroAlchemySectionCauldron({
  head,
  body,
}: HeroAlchemySectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const outerCircle = useRef<SVGCircleElement>(null);
  const secondCircle = useRef<SVGCircleElement>(null);
  const centerCircle = useRef<SVGCircleElement>(null);
  const stream = useRef<SVGPathElement>(null);
  const liquid = useRef<SVGPathElement>(null);
  const morphShape = useRef<SVGPathElement>(null);
  const bodyCopy = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
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

      // GSAP animates these numbers; draw() turns them into path data.
      const state = {
        head: 0, // leading end of the falling stream
        tail: 0, // trailing end of the stream
        topWidth: 42,
        bottomWidth: 42,
        surface: CY + R, // liquid level
        wave: 0, // wave height
        phase: 0, // wave travel
        morph: 0, // 0 = circle, 1 = triangle
      };

      const morphPairs = buildMorphPairs();

      const surfaceAt = (x: number) => {
        const u = (x - CX) / R;
        return (
          state.surface +
          state.wave *
            (0.7 * Math.sin(u * 2.4 + state.phase) +
              0.3 * Math.sin(u * 4.1 - state.phase * 1.4))
        );
      };

      const drawStream = () => {
        const bottom = Math.min(
          state.head,
          Math.max(surfaceAt(CX) + 1, CY - R + 2),
        );
        if (state.tail >= bottom) return "";

        const top = state.topWidth / 2;
        const base = state.bottomWidth / 2;
        const tip = Math.min(state.bottomWidth * 0.6, CY + R - bottom);
        return `M${CX - top} ${state.tail}L${CX + top} ${state.tail}L${CX + base} ${bottom}Q${CX} ${bottom + tip * 2} ${CX - base} ${bottom}Z`;
      };

      const drawLiquid = () => {
        const floor = CY + R + 4;
        let d = `M${CX - R - 4} ${floor}`;
        for (let x = CX - R - 4; x <= CX + R + 4; x += 6) {
          d += `L${x} ${surfaceAt(x)}`;
        }
        return `${d}L${CX + R + 4} ${floor}Z`;
      };

      const drawMorph = () => {
        const m = state.morph;
        const points = morphPairs.map(
          (p) =>
            `${p.circleX + (p.triangleX - p.circleX) * m} ${p.circleY + (p.triangleY - p.circleY) * m}`,
        );
        return `M${points.join("L")}Z`;
      };

      const draw = () => {
        const morphing = state.morph > 0;
        stream.current?.setAttribute("d", morphing ? "" : drawStream());
        liquid.current?.setAttribute("d", morphing ? "" : drawLiquid());
        morphShape.current?.setAttribute("d", morphing ? drawMorph() : "");
      };

      draw();

      gsap
        .timeline({ onUpdate: draw })
        .to(state, { head: CY + R, duration: FALL, ease: "power2.in" })
        .addLabel("fill")
        .to(
          state,
          { surface: CY - R - 8, duration: FILL, ease: "sine.inOut" },
          "fill",
        )
        .to(state, { phase: 11, duration: FILL, ease: "none" }, "fill")
        .to(
          state,
          { bottomWidth: 32, duration: FILL * 0.75, ease: "none" },
          "fill",
        )
        .to(state, { topWidth: 32, duration: FILL * 0.5, ease: "none" }, "fill")
        .to(state, { wave: 32, duration: 0.9, ease: "sine.out" }, "fill")
        .to(
          state,
          { wave: 0, duration: 1.1, ease: "sine.inOut" },
          `fill+=${FILL - 1.1}`,
        )
        .to(
          state,
          { topWidth: 0, duration: 0.5, ease: "power1.in" },
          `fill+=${FILL - 1.2}`,
        )
        .to(
          state,
          { tail: CY - R + 2, duration: 0.8, ease: "power2.in" },
          `fill+=${FILL - 0.8}`,
        )
        .to(
          centerCircle.current,
          { opacity: 0, duration: 0.3 },
          `fill+=${FILL - 0.2}`,
        )
        .to(
          state,
          { morph: 1, duration: MORPH, ease: "power3.inOut" },
          `fill+=${FILL + HOLD}`,
        );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="bg-palered-500 h-80 md:h-110 relative overflow-hidden"
    >
      <div className="flex h-full w-[80%] md:w-[60%] xl:w-[50%] gap-2 pl-8 flex-col items-start">
        {head && (
          <h4 className="text-white font-bigger text-8xl/[40px]">
            {head.toUpperCase()}
          </h4>
        )}
        {body && (
          <p
            className="text-white font-normal lg:font-light text-2xl md:text-3xl/10 xl:text-5xl/12 relative lg:pt-10 bg-palered-500 z-50 pt-5 lg:w-full w-2/3"
            ref={bodyCopy}
          >
            {body}
          </p>
        )}
      </div>
      <svg
        viewBox="0 0 1010.296 1010.296"
        xmlns="http://www.w3.org/2000/svg"
        className="top-3/5 md:top-1/2 left-[78%] md:left-10/12 xl:left-9/12 -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12 xl:w-1/2 absolute"
      >
        <defs>
          <clipPath id="alchemy-vessel">
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>
        </defs>

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

        <path ref={stream} fill={INK} />
        <path ref={liquid} fill={INK} clipPath="url(#alchemy-vessel)" />
        <path ref={morphShape} fill={INK} />
      </svg>
    </div>
  );
}
