import { brandLogos } from "../../data/brandLogos";

export default function Brands() {
  return (
    <div className="bg-darkgray-500 py-15 flex flex-col">
      <h2 className="text-6xl font-bigger text-palegray-500 uppercase text-center pb-10">
        Brands I've Worked With
      </h2>
      <div className="flex justify-evenly place-items-center w-full flex-wrap">
        {brandLogos.map((brand, i) => (
          <div
            key={i}
            className="w-[50%] md:w-[250px] p-2 bg-neutral-900 rounded-2xl  place-items-center justify-center flex h-[180px]"
          >
            {brand.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
