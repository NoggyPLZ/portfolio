import { techNames } from "../../data/techIcons";

export default function Icons({ tech }: { tech: string }) {
  return (
    <>
      <svg
        role="img"
        viewBox="0 0 24 24"
        width="70px"
        height="70px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={techNames[tech]} />
      </svg>
    </>
  );
}
