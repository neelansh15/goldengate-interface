import { ChevronDownIcon } from "lucide-react";
import { TokenSelectModal } from "./TokenSelectModal";
import { inputCurrencyAtom, outputCurrencyAtom } from "@/atoms/currencyAtoms";
import { useAtomValue, useSetAtom } from "jotai";
import { formattedAmountsAtom, setTypedValueAtom } from "@/atoms/inputAtoms";
import { Field } from "@/types";

interface CurrencyInputProps {
  field: Field;
  label?: any;
}
export const CurrencyInput = ({ field, label }: CurrencyInputProps) => {
  const currency = useAtomValue(
    field === Field.CURRENCY_A ? inputCurrencyAtom : outputCurrencyAtom
  );

  const formattedAmounts = useAtomValue(formattedAmountsAtom);
  const value = formattedAmounts[field];

  const setValue = useSetAtom(setTypedValueAtom);

  return (
    <div className="relative group">
      {/* Token Select Button */}
      <TokenSelectModal field={field}>
        <button className="absolute top-4 right-4 z-10 bg-muted/80 hover:bg-muted border border-border/50 rounded-full py-2 px-4 flex items-center gap-2 cursor-pointer transition-colors duration-200 backdrop-blur-sm">
          <span className="font-semibold text-sm">{currency.symbol}</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </TokenSelectModal>

      {/* Input Container */}
      <div className="bg-input/50 hover:bg-input/70 dark:bg-input/30 dark:hover:bg-input/50 border border-border/30 dark:border-border/40 rounded-2xl transition-all duration-200 group-hover:border-border/60 dark:group-hover:border-border/70 backdrop-blur-sm">
        <input
          value={value}
          onInput={(e) => {
            const value = Number(e.currentTarget.value);
            if (isNaN(value)) return;

            setValue({
              value: value.toString(),
              field,
            });
          }}
          className="w-full bg-transparent text-2xl sm:text-3xl font-bold pt-14 pb-4 pr-24 sm:pr-32 pl-4 sm:pl-6 outline-none placeholder:text-muted-foreground/50 text-foreground"
          placeholder="0.00"
        />
        
        {/* Label */}
        {label && (
          <div className="absolute top-4 left-4 sm:left-6 text-sm font-medium text-muted-foreground">
            {label}
          </div>
        )}
        
        {/* Balance (placeholder) */}
        <div className="absolute bottom-4 left-4 sm:left-6 text-xs text-muted-foreground">
          Balance: 0.00
        </div>
      </div>
    </div>
  );
};
