import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  const date: string = new Date().getFullYear().toString();
  return (
    <footer
      className="px-8 pb-8 flex flex-col text-palegray-500 gap-8"
      role="contentinfo"
    >
      <div className="pt-8 font-bold flex flex-col md:flex-row justify-between items-center border-t-neutral-500 border-t-1 gap-5">
        <div className="flex flex-col gap-2 items-center text-xs order-2 sm:order-1">
          <img
            src={"./bh-logo.png"}
            className="max-w-[50px]"
            alt="Brett Hicks logo/mark"
          />
          &copy; {date}
        </div>
        <div className="flex flex-row gap-8 text-xl order-1 sm:order-2">
          <p className="uppercase">Contact ME</p>
          <Link
            to="mailto:bhicksdesigndev@gmail.com"
            target="_blank"
            className="flex place-items-end font-black text-9xl group"
          >
            <Mail size={30} strokeWidth={3} />{" "}
            <ArrowUpRight
              size={25}
              strokeWidth={3}
              className="group-hover:text-palered-500"
            />
          </Link>
          <p className="text-xl">
            <Link
              to="https://www.linkedin.com/in/brett-hicks-78740885/"
              target="_blank"
              className="flex place-items-end font-black text-[30px] group leading-none"
            >
              in{" "}
              <ArrowUpRight
                size={25}
                strokeWidth={3}
                className="group-hover:text-palered-500"
              />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
