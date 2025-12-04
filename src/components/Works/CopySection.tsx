import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router";
import ArrowUpRight from "lucide-react/icons/arrow-up-right";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

type Copy = {
  title: string;
  client: string;
  skills: string;
  body: string;
  even: boolean;
  link?: string;
};

type CopyProps = {
  copy: Copy;
};

export default function CopySection(props: CopyProps) {
  const { title, client, skills, body, even, link } = props.copy;
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
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col basis-4/12 gap-3 lg:order-2 order-1"
    >
      <h3
        ref={titleRef}
        className="font-bigger text-7xl/15 md:text-9xl/27 2xl:text-[13rem]/[10.5rem] 2xl:pt-6 text-palered-500"
      >
        {title}
      </h3>
      <h4
        className={`text-lg md:text-xl ${
          even ? `text-darkgray-500` : `text-palegray-500`
        }`}
      >
        <span className="font-bold">Client:</span> {client}
      </h4>
      <h4
        className={`text-lg md:text-xl ${
          even ? `text-darkgray-500` : `text-palegray-500`
        }`}
      >
        <span className="font-bold">Skills:</span> {skills}
      </h4>
      <p
        className={`text-base md:text-xl whitespace-pre-wrap ${
          even ? `text-darkgray-500` : `text-palegray-500`
        }`}
      >
        {body}
      </p>
      {link && (
        <div className="pt-5">
          <Link
            to={link}
            target="_blank"
            className={`text-xl font-bold uppercase flex flex-row gap-2 max-w-[300px]  h-40 ${
              even
                ? "bg-darkgray-500 text-palegray-500"
                : "bg-palegray-500 text-darkgray-500"
            }  p-10 rounded-2xl hover:bg-palered-500 hover:text-palegray-500`}
          >
            Visit Site <ArrowUpRight size={30} strokeWidth={3} />
          </Link>
        </div>
      )}
    </div>
  );
}
