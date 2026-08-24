import { ArrowUpRight, Mail } from "lucide-react";

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
          <a
            href="mailto:bhicksdesigndev@gmail.com"
            target="_blank"
            className="flex place-items-end font-black text-9xl group"
          >
            <Mail size={30} strokeWidth={3} aria-hidden="true" />{" "}
            <ArrowUpRight
              size={25}
              strokeWidth={3}
              aria-hidden="true"
              className="group-hover:text-palered-500"
            />
            <span className="sr-only">Email me</span>
          </a>
          <p className="text-xl">
            <a
              href="https://www.linkedin.com/in/brett-hicks-78740885/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex place-items-end font-black text-[30px] group leading-none"
            >
              <span aria-hidden="true">in</span>{" "}
              <ArrowUpRight
                size={25}
                strokeWidth={3}
                aria-hidden="true"
                className="group-hover:text-palered-500"
              />
              <span className="sr-only">LinkedIn profile</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
