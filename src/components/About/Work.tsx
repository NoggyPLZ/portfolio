export default function Work() {
  return (
    <div className="pt-20">
      <h2 className="text-darkgray-500 text-4xl font-bigger uppercase">Work</h2>
      <h3 className="text-palered-500 text-7xl md:text-8xl font-bigger">
        2010 - 2025
      </h3>
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 text-darkgray-500">
        <p className="font-bold lg:text-left lg:self-center-safe text-2xl">
          BlueTractor Digital Design Co.
        </p>
        <div className="grow w-full h-[1px] bg-palered-500 self-end lg:self-center-safe"></div>
        <p className="lg:self-center-safe text-xl font-black">
          Web Designer and Front-End Developer
        </p>
      </div>
    </div>
  );
}
