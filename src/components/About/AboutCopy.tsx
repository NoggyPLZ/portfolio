import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router";

export default function AboutCopy() {
  return (
    <div className="p-8 flex lg:flex-row flex-col gap-8 md:py-30 pt-15 bg-darkgray-500">
      <div className="lg:basis-1/2 text-left basis-full order-2 lg:order-1">
        <div className="lg:max-w-[800px] ml-auto text-xl/10">
          <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 md:mb-5">
            Art Director with 16 years leading creative direction and brand
            design for national brands including Tractor Supply Co., Ryman
            Hospitality Properties, Rite Aid, and Crunchyroll. Directed concept
            development, design teams, and creative execution across 250+ client
            websites and campaigns, specializing in employer brand systems and
            recruitment platforms serving workforces of 50,000+. Experienced
            leading and mentoring design teams, presenting creative direction to
            enterprise stakeholders, and building brand systems that remain in
            service for years after launch.
          </p>
          <h3 className="text-palered-500 text-5xl md:text-6xl font-bigger uppercase">
            Rare design-to-code capability
          </h3>
          <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 md:mb-5">
            I direct the work and ship it, so intent survives implementation.
            Experienced mentoring designers, presenting to enterprise
            stakeholders, and building systems that stay maintainable by
            non-designers long after launch.
          </p>
          <p className="text-palegray-500  md:text-2xl/12 border-b-1 border-b-darkgray-500 pb-10 md:mb-5">
            When I'm not designing and coding, I enjoy reading scifi novels,
            playing competitive fighting games, and watching horror movies.
          </p>
          <div className="flex gap-4 justify-start">
            <Link
              to={"https://github.com/NoggyPLZ"}
              target="_blank"
              className={`text-xl font-bold uppercase flex flex-row gap-2 max-w-[300px] h-40 bg-palegray-500 text-darkgray-500 p-10 rounded-2xl hover:bg-palered-500 hover:text-palegray-500 `}
            >
              Visit My Github <ArrowUpRight size={30} strokeWidth={3} />
            </Link>
            <a
              href={"docs/Brett_Hicks_ArtDirector_Resume.pdf"}
              target="_blank"
              className={`text-xl font-bold uppercase flex flex-row gap-2 max-w-[300px] h-40 bg-palegray-500 text-darkgray-500 p-10 rounded-2xl hover:bg-palered-500 hover:text-palegray-500 `}
              rel="noopener noreferrer"
            >
              See my Resume <Download size={30} strokeWidth={3} />
            </a>
          </div>
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
