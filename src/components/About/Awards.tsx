export default function Awards() {
  return (
    <div className="flex flex-col gap-8 pt-20">
      <div>
        <h2 className="text-darkgray-500 text-4xl font-bigger uppercase">
          Awards
        </h2>
        <h3 className="text-palered-500 text-7xl md:text-8xl font-bigger">
          2011
        </h3>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 text-darkgray-500 pb-8">
          <p className="font-bold lg:text-left lg:self-center-safe text-2xl whitespace-nowrap">
            AIGA Case Award
          </p>
          <div className="grow w-full h-[1px] bg-palered-500 self-end lg:self-center-safe"></div>
          <p className="lg:self-center-safe text-xl font-black whitespace-nowrap">
            "ContestApps" branding
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 text-darkgray-500">
          <p className="font-bold lg:text-left lg:self-center-safe text-2xl whitespace-nowrap">
            AIGA Case Award
          </p>
          <div className="grow w-full h-[1px] bg-palered-500 self-end lg:self-center-safe"></div>
          <p className="lg:self-center-safe text-xl font-black whitespace-nowrap">
            "Walk100" website
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-palered-500 text-7xl md:text-8xl font-bigger">
          2018
        </h3>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 text-darkgray-500">
          <p className="font-bold lg:text-left lg:self-center-safe text-2xl whitespace-nowrap">
            ADDY Professional Gold
          </p>
          <div className="grow w-full h-[1px] bg-palered-500 self-end lg:self-center-safe"></div>
          <p className="lg:self-center-safe text-xl font-black whitespace-nowrap">
            "Porte Italia" website
          </p>
        </div>
      </div>
    </div>
  );
}
