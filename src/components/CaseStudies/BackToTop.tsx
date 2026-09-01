import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <div className="fixed bottom-50 right-4 z-50">
      <button
        role="button"
        className="p-8 text-palegray-500 flex flex-col max-w-[120px] border-1 rounded-md border-gray-700 bg-darkgray-500 hover:bg-palered-500 hover:text-palegray-500"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowUp />
        Return to Top
      </button>
    </div>
  );
}
