import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router";

export default function ContactInfo() {
  return (
    <div className="p-8 w-full md:max-w-[70vw] flex flex-col gap-8 md:py-30 py-15 bg-darkgray-500 text-palegray-500">
      <div className="flex place-items-end justify-between gap-2">
        <h2 className="text-2xl font-bold">LinkedIn</h2>
        <div className="grow w-full h-[1px] bg-palered-500 self-end lg:self-end-safe mb-2"></div>
        <Link
          to="https://www.linkedin.com/in/brett-hicks-78740885/"
          target="_blank"
          className="flex place-items-end font-black text-9xl group"
        >
          in{" "}
          <ArrowUpRight
            size={50}
            strokeWidth={3}
            className="group-hover:text-palered-500"
          />
        </Link>
      </div>
      <div className="flex place-items-end justify-between gap-2">
        <h2 className="text-2xl font-bold">Email</h2>
        <div className="grow w-full h-[1px] bg-palered-500 self-end lg:self-end-safe mb-2"></div>
        <Link
          to="mailto:bhicksdesigndev@gmail.com"
          target="_blank"
          className="flex place-items-end font-black text-9xl group"
        >
          <Mail size={100} strokeWidth={3} />{" "}
          <ArrowUpRight
            size={50}
            strokeWidth={3}
            className="group-hover:text-palered-500"
          />
        </Link>
      </div>
    </div>
  );
}
