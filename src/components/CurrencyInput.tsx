import { ChevronDownIcon } from "lucide-react";
import { TokenSelectModal } from "./TokenSelectModal";
import { inputCurrencyAtom, outputCurrencyAtom } from "@/atoms/currencyAtoms";
import { useAtomValue } from "jotai";

interface CurrencyInputProps {
  type: "input" | "output";
  value?: any;
  onInput?: any;
  label?: any;
}
export const CurrencyInput = ({
  type,
  value,
  onInput,
  label,
}: CurrencyInputProps) => {
  const currency = useAtomValue(
    type === "input" ? inputCurrencyAtom : outputCurrencyAtom
  );

  return (
    <div className="relative">
      <TokenSelectModal type={type}>
        <button className="font-bold col-span-1 text-left bg-slate-500 hover:bg-slate-600 border border-slate-400 rounded-full py-1 px-4 absolute top-1/3 right-4 flex items-center gap-1 cursor-pointer transition-all">
          <span className="mt-0.5">{currency.symbol}</span>
          <ChevronDownIcon />
        </button>
      </TokenSelectModal>
      <input
        value={value}
        onInput={onInput}
        className="col-span-3 bg-neutral-950 border border-neutral-800 rounded-xl w-full text-left font-bold text-5xl pt-12 pb-3 pr-44 pl-4 font-mono transition-all"
        placeholder="0"
      />
      {label && <div className="absolute top-3 left-3">{label}</div>}
    </div>
  );
};
