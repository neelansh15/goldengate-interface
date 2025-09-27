import { useAtom } from "jotai";
import { limitPriceAtom } from "@/atoms/fieldAtoms";

interface LimitPriceInputProps {}
export const LimitPriceInput = ({}: LimitPriceInputProps) => {
  const [limitPrice, setLimitPrice] = useAtom(limitPriceAtom);

  return (
    <div className="relative">
      <input
        value={limitPrice}
        onInput={(e) => {
          const value = Number(e.currentTarget.value);
          if (isNaN(value) || value === 0) {
            setLimitPrice("");
            return;
          }

          setLimitPrice(value.toString());
        }}
        className="col-span-3 bg-neutral-950 border border-neutral-800 rounded-xl w-full text-left font-bold text-5xl pt-12 pb-3 pr-44 pl-4 font-mono transition-all"
        placeholder="0"
      />
      <div className="absolute top-3 left-3">Limit Price</div>
    </div>
  );
};
