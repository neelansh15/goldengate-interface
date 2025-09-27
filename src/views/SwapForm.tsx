import { CurrencyInput } from "@/components/CurrencyInput";
import { Field } from "@/types";
import { ArrowDownIcon } from "lucide-react";

export const SwapForm = () => {
  return (
    <>
      <div className="max-w-[480px] mx-auto bg-neutral-900 rounded-xl p-4">
        <div className="flex flex-col gap-2 relative">
          <div>
            <CurrencyInput field={Field.CURRENCY_A} label="Sell" />
          </div>
          <button className="mx-auto mt-5 absolute top-1/3 left-[46%] z-10 bg-black p-1 border border-slate-800 rounded-xl cursor-pointer hover:bg-slate-600 transition-all">
            <ArrowDownIcon />
          </button>
          <div>
            <CurrencyInput field={Field.CURRENCY_B} label="Buy" />
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full bg-slate-500 hover:bg-slate-600 border border-slate-400 rounded-xl py-3 font-bold cursor-pointer transition-all">
            Swap
          </button>
        </div>
      </div>
    </>
  );
};
