import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { Link } from "react-router";
import { caseStudiesArr } from "../../data/caseStudies";

export default function BottomButtons({ csIndex }: { csIndex: number }) {
  const previous =
    csIndex - 1 < 0
      ? caseStudiesArr[caseStudiesArr.length - 1]
      : caseStudiesArr[csIndex - 1];
  const next =
    csIndex + 1 >= caseStudiesArr.length
      ? caseStudiesArr[0]
      : caseStudiesArr[csIndex + 1];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 px-8 gap-2">
      <Link
        to={`/case/${previous.slug}`}
        className="flex flex-col md:flex-row justify-center items-center p-12 font-bold hover:text-palegray-500 gap-2 bg-palegray-500 text-darkgray-500 hover:bg-palered-500 rounded-2xl order-2 md:order-1"
      >
        <ArrowLeft strokeWidth={3} className="order-1" />
        <p className="order-2">Previous Case Study</p>
      </Link>
      <button
        className="flex justify-center items-center p-12 font-bold hover:text-palegray-500 gap-2 bg-palegray-500 text-darkgray-500 hover:bg-palered-500 rounded-2xl order-1 md:order-2 col-span-2 md:col-span-1 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to Top
        <ArrowUp strokeWidth={3} />
      </button>
      <Link
        to={`/case/${next.slug}`}
        className="flex flex-col md:flex-row justify-center items-center p-12 font-bold hover:text-palegray-500 gap-2 bg-palegray-500 text-darkgray-500 hover:bg-palered-500 rounded-2xl order-3"
      >
        <p
          className="
        md:order-1 order-2"
        >
          Next Case Study
        </p>
        <ArrowRight strokeWidth={3} className="md:order-2 order-1" />
      </Link>
    </div>
  );
}
