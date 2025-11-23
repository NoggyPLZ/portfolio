import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="bg-darkgray-500 text-palegray-500 p-8 flex flex-row justify-between">
      <NavLink to={"/"}>
        <div className="flex gap-3 text-3xl xl:text-4xl font-bigger uppercase justify-center place-items-center">
          <img src={"./bh-logo.png"} className="max-w-[30px] md:max-w-[40px]" />{" "}
          <span className="pt-2">Brett Hicks</span>
        </div>
      </NavLink>
      <nav className="flex flex-row text-palegray-500 font-bold gap-8 text-lg justify-center place-items-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-palered-500" : "text-palegray-500"
          }
        >
          about
        </NavLink>
        <p>contact</p>
      </nav>
    </header>
  );
}
