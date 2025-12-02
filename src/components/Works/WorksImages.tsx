import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

type Images = {
  image_1: string;
  image_2: string;
  image_3: string;
};

type WorkImageProps = {
  images: Images;
};

export default function WorksImages(props: WorkImageProps) {
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
      <img ref={imageOneRef} src={image_1} className="rounded-4xl max-w-full" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img ref={imageTwoRef} src={image_2} className="w-full  rounded-4xl" />
        <img
          ref={imageThreeRef}
          src={image_3}
          className="w-full  rounded-4xl"
        />
      </div>
    </div>
  );
}
