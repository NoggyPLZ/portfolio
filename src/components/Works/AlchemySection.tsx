import {
  AlchemyShape1,
  AlchemyShape2,
  AlchemyShape3,
  AlchemyShape4,
} from "./AlchemyShapes";

type AlchemyProps = {
  section: number;
  head: string;
  body: string;
};

const shapes = [
  AlchemyShape1,
  AlchemyShape2,
  AlchemyShape3,
  AlchemyShape4,
  AlchemyShape4,
  AlchemyShape4,
];

export default function AlchemySection(props: AlchemyProps) {
  const { section, head, body } = props;

  const Shape = shapes[section];
  return (
    <div className="bg-palered-500 h-150 relative overflow-hidden">
      <div className="flex h-full gap-2 pl-8 justify-center flex-col items-start">
        {head && (
          <h4 className="text-palegray-500 font-bigger text-8xl/[40px]">
            {head.toUpperCase()}
          </h4>
        )}
        {body && <p className="text-palegray-500 text-xl">{body}</p>}
      </div>
      <Shape />
    </div>
  );
}
