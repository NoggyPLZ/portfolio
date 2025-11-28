import { brandLogos } from "../../data/brandLogos";

export default function Brands() {
  return (
    <div className="bg-darkgray-500 py-15 flex flex-col">
      <h2 className="text-4xl md:text-6xl font-bigger text-palegray-500 uppercase text-center pt-5 pb-2">
        Brands I've Worked With
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 justify-evenly place-items-center w-full flex-wrap p-8 gap-1">
        {brandLogos.map((brand, i) => (
          <div
            key={i}
            className="p-5 border-1 border-gray-700 rounded-md  place-items-center justify-center flex h-[180px] w-full"
          >
            {brand.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
