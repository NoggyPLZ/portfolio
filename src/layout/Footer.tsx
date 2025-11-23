export default function Footer() {
  const date: string = new Date().getFullYear().toString();
  return (
    <footer className="px-8 pb-8 flex flex-col text-palegray-500 gap-8">
      <div className="pt-8 font-bold flex flex-row justify-between items-center border-t-neutral-500 border-t-1">
        <div className="flex flex-row gap-2 items-center">
          <img src={"./bh-logo.png"} className="max-w-[30px]" />
          &copy; {date}
        </div>
        <div className="flex flex-row gap-8 text-xl">
          <p className="uppercase">Contact</p>
          <a className="cursor-pointer" href="mailto:bhicksdesigndev@gmail.com">
            email
          </a>
          <p className="text-xl">
            <a
              href="https://www.linkedin.com/in/brett-hicks-78740885/"
              target="_blank"
            >
              in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
