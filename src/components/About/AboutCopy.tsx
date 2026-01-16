import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export default function AboutCopy() {
  return (
    <div className="p-8 flex lg:flex-row flex-col gap-8 md:py-30 pt-15 bg-darkgray-500">
      <div className="lg:basis-1/2 text-right basis-full order-2 lg:order-1">
        <div className="lg:max-w-[800px] ml-auto text-xl/10">
          <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 md:mb-5">
            I have 15 years of professional <strong>web design</strong> and {""}
            <strong>front-end web development</strong> experience focusing on
            HTML/CSS, UI, and static/marketing sites. Over the last year, I've
            transitioned into modern JavaScript and TypeScript, building full
            React applications and learning modern tooling.
          </p>
          <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 md:mb-5">
            When I'm not coding and designing, I enjoy reading scifi novels,
            playing competitive fighting games, and watching horror movies.
          </p>
          <Link
            to={"https://github.com/NoggyPLZ"}
            target="_blank"
            className={`text-xl font-bold uppercase flex flex-row gap-2 max-w-[300px] h-40 bg-palegray-500 text-darkgray-500 p-10 rounded-2xl hover:bg-palered-500 hover:text-palegray-500 ml-auto`}
          >
            Visit My Github <ArrowUpRight size={30} strokeWidth={3} />
          </Link>
        </div>
      </div>
      <div className="lg:basis-1/2 basis-full order-1 lg:order-2 ">
        <div className="lg:h-full lg:w-200 w-80 mx-auto md:ml-0">
          <img
            src="images/picture-of-brett.webp"
            className="mx-auto rounded-2xl"
            width="600"
            height="634"
            alt="picture of me, Brett Hicks"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
