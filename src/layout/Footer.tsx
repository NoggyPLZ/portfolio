export default function Footer() {
  const date: string = new Date().getFullYear().toString();
  return (
    <footer className="px-8 pb-8 flex flex-col text-palegray-500 gap-8">
      <div className="pt-8 font-bold flex flex-col md:flex-row justify-between items-center border-t-neutral-500 border-t-1 gap-5">
        <div className="flex flex-col gap-2 items-center text-xs order-2 sm:order-1">
          <img src={"./bh-logo.png"} className="max-w-[50px]" />
          &copy; {date}
        </div>
        <div className="flex flex-row gap-8 text-xl order-1 sm:order-2">
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
