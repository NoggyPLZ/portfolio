import { Link } from "react-router";
import ArrowUpRight from "lucide-react/icons/arrow-up-right";

type Copy = {
  title: string;
  client: string;
  skills: string;
  body: string;
  even: boolean;
  link?: string;
  git?: string;
  caseLink?: string;
  spotify?: string;
  bandcamp?: string;
};

type CopyProps = {
  copy: Copy;
};

export default function CopySection(props: CopyProps) {
  const {
    title,
    client,
    skills,
    body,
    even,
    link,
    git,
    caseLink,
    bandcamp,
    spotify,
  } = props.copy;

  return (
    <div className="flex flex-col basis-4/12 gap-2 order-3 lg:order-2">
      <p
        className={`text-lg md:text-xl ${
          even ? `text-darkgray-500` : `text-palegray-500`
        }`}
      >
        <span className="font-bold">Client:</span> {client}
      </p>
      <p
        className={`text-lg md:text-xl ${
          even ? `text-darkgray-500` : `text-palegray-500`
        }`}
      >
        <span className="font-bold">Skills:</span> {skills}
      </p>
      <p
        className={`text-base md:text-xl whitespace-pre-wrap ${
          even ? `text-darkgray-500` : `text-palegray-500`
        }`}
      >
        {body}
      </p>

      {caseLink && (
        <div className="pt-5">
          <Link
            to={caseLink}
            className={`text-xl font-bold uppercase flex flex-row gap-2 max-w-[300px]  h-40 ${
              even
                ? "bg-darkgray-500 text-palegray-500"
                : "bg-palegray-500 text-darkgray-500"
            }  p-10 rounded-2xl hover:bg-palered-500 hover:text-palegray-500`}
          >
            <span>
              Read the <span className="sr-only">{title}</span> Case Study
            </span>
            <ArrowUpRight size={30} strokeWidth={3} aria-hidden="true" />
          </Link>
        </div>
      )}
      {spotify && (
        <div className="pt-5">
          <Link
            to={spotify}
            target="_blank"
            className={`text-xl font-bold uppercase flex flex-row gap-2 max-w-[300px]  h-40 ${
              even
                ? "bg-darkgray-500 text-palegray-500"
                : "bg-palegray-500 text-darkgray-500"
            }  p-10 rounded-2xl hover:bg-palered-500 hover:text-palegray-500`}
            rel="noopener noreferrer"
          >
            <span>
              Listen <span className="sr-only">to {title}</span> on Spotify
            </span>
            <ArrowUpRight size={30} strokeWidth={3} aria-hidden="true" />
          </Link>
        </div>
      )}
      {bandcamp && (
        <div className="pt-5">
          <Link
            to={bandcamp}
            target="_blank"
            className={`text-xl font-bold uppercase flex flex-row gap-2 max-w-[300px]  h-40 ${
              even
                ? "bg-darkgray-500 text-palegray-500"
                : "bg-palegray-500 text-darkgray-500"
            }  p-10 rounded-2xl hover:bg-palered-500 hover:text-palegray-500`}
            rel="noopener noreferrer"
          >
            <span>
              Listen <span className="sr-only">to {title}</span> on Bandcamp
            </span>
            <ArrowUpRight size={30} strokeWidth={3} aria-hidden="true" />
          </Link>
        </div>
      )}
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
            rel="noopener noreferrer"
          >
            Visit <span className="sr-only"> the {title}</span> Site{" "}
            <ArrowUpRight size={30} strokeWidth={3} />
          </Link>
        </div>
      )}
      {git && (
        <div className="pt-5">
          <Link
            to={git}
            target="_blank"
            className={`text-xl font-bold uppercase flex flex-row gap-2 max-w-[300px]  h-40 ${
              even
                ? "bg-darkgray-500 text-palegray-500"
                : "bg-palegray-500 text-darkgray-500"
            }  p-10 rounded-2xl hover:bg-palered-500 hover:text-palegray-500`}
          >
            Visit <span className="sr-only"> the {title}</span> Git Repo{" "}
            <ArrowUpRight size={30} strokeWidth={3} />
          </Link>
        </div>
      )}
    </div>
  );
}
