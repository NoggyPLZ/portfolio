import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { Project } from "../../data/projects";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function WorksImages(props: Pick<Project, "images">) {
  const { image_1, image_2, image_3 } = props.images;
  const imageOneRef = useRef<HTMLImageElement>(null);
  const imageTwoRef = useRef<HTMLImageElement>(null);
  const imageThreeRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(
        [imageOneRef.current, imageTwoRef.current, imageThreeRef.current],
        { opacity: 1 }
      );
      gsap.from(imageOneRef.current, {
        scrollTrigger: {
          trigger: imageOneRef.current,
          toggleActions: "restart none none none",
        },
        opacity: 0,
        duration: 1,
        ease: "power1.in",
      });
      gsap.from([imageTwoRef.current, imageThreeRef.current], {
        scrollTrigger: {
          trigger: imageTwoRef.current,
          toggleActions: "restart none none none",
        },
        opacity: 0,
        duration: 1,
        ease: "power1.in",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-8 basis-8/12 lg:order-1 order-2"
    >
      <img
        ref={imageOneRef}
        src={image_1.path}
        width={image_1.width}
        height={image_1.height}
        alt={image_1.alt}
        className="rounded-4xl max-w-full"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img
          ref={imageTwoRef}
          src={image_2.path}
          width={image_2.width}
          height={image_2.height}
          alt={image_2.alt}
          className="w-full rounded-4xl"
        />
        <img
          ref={imageThreeRef}
          src={image_3.path}
          width={image_3.width}
          height={image_3.height}
          alt={image_3.alt}
          className="w-full rounded-4xl"
        />
      </div>
    </div>
  );
}
