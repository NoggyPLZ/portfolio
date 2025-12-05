import {
  AlchemyShape1,
  AlchemyShape2,
  AlchemyShape3,
  AlchemyShape4,
  AlchemyShape5,
  AlchemyShape6,
} from "./AlchemyShapes";

type AlchemyProps = {
  section: number;
  head: string;
  body: string;
  quote?: {
    body: string;
    author: string;
  };
  stats?: {
    statNum: string;
    statName: string;
  };
};

const shapes = [
  AlchemyShape1,
  AlchemyShape2,
  AlchemyShape3,
  AlchemyShape5,
  AlchemyShape6,
  AlchemyShape4,
];

export default function AlchemySection(props: AlchemyProps) {
  const { section, quote, stats } = props;

  const copyCheck = quote || stats;

  const Shape = shapes[section];
  return (
    <div
      className={`bg-palered-500 ${!copyCheck && "h-100"} ${quote && "h-175"} ${
        stats && "h-120"
      }  md:h-150 relative overflow-hidden`}
    >
      <div className="flex h-full gap-2 p-8 md:pl-8 justify-end md:justify-center flex-col md:items-start md:max-w-[50%]">
        {quote && (
          <h4 className="text-palegray-500 font-bold italic text-3xl/7 relative md:text-center p-5 quote-section mx-auto">
            {quote.body.toUpperCase()}
          </h4>
        )}
        {quote && (
          <p className="text-palegray-500 font-light capitalize text-xl text-center mx-auto author">
            {quote?.author}
          </p>
        )}
        {stats && (
          <>
            <h4 className="text-palegray-500 z-10 bg-palered-500 font-black uppercase text-5xl leading-none mb-0 md:text-8xl/20 lg:text-8xl/20 relative md:text-center md:p-5 mx-auto">
              {stats?.statNum}
            </h4>
            <p className="text-palegray-500 z-10 bg-palered-500 font-light capitalize text-2xl md:text-4xl text-center mx-auto">
              {stats?.statName}
            </p>
          </>
        )}
      </div>
      <Shape />
    </div>
  );
}
