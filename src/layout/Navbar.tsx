import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-darkgray-500 text-palegray-500 transition-all duration-300 ${
        isScrolled ? "py-2 px-8" : "p-8"
      } flex flex-row justify-between fixed t-0 w-full z-100`}
    >
      <NavLink to={"/"} viewTransition>
        <div className="flex gap-3 text-2xl sm:text-3xl xl:text-4xl font-bigger uppercase justify-center place-items-center">
          <img src={"./bh-logo.png"} className="max-w-[30px] md:max-w-[40px]" />{" "}
          <span
            className={`pt-2 hidden ${
              isScrolled && "opacity-0"
            } sm:block transition-all duration-300`}
          >
            Brett Hicks
          </span>
        </div>
      </NavLink>

      <nav className="flex flex-row text-palegray-500 font-bold gap-8 text-lg justify-center place-items-center">
        <NavLink
          to={"/#works"}
          onClick={() => {
            const el = document.getElementById("works");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className={"hover:text-palered-500 h-full flex place-items-center"}
        >
          works
        </NavLink>
        <NavLink
          to="/about"
          className={({
            isActive,
          }) => `hover:text-palered-500 h-full flex place-items-center
            ${isActive ? "text-palered-500" : "text-palegray-500"}
          `}
          viewTransition
        >
          about
        </NavLink>
        <NavLink
          to="/contact"
          className={({
            isActive,
          }) => `hover:text-palered-500 h-full flex place-items-center
            ${isActive ? "text-palered-500" : "text-palegray-500"}
          `}
          viewTransition
        >
          contact
        </NavLink>
      </nav>
    </header>
  );
}
