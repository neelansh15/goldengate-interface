import { useAtom, useAtomValue } from "jotai";
import { limitPriceAtom } from "@/atoms/fieldAtoms";
import { inputCurrencyAtom, outputCurrencyAtom } from "@/atoms/currencyAtoms";
import { TrendingUpIcon } from "lucide-react";

interface LimitPriceInputProps {}
export const LimitPriceInput = ({}: LimitPriceInputProps) => {
  const [limitPrice, setLimitPrice] = useAtom(limitPriceAtom);
  const inputCurrency = useAtomValue(inputCurrencyAtom);
  const outputCurrency = useAtomValue(outputCurrencyAtom);

  return (
    <div className="relative group">
      {/* Price Indicator */}
      <div className="absolute top-4 right-4 z-10 bg-muted/80 border border-border/50 rounded-full py-2 px-3 flex items-center gap-2 backdrop-blur-sm">
        <TrendingUpIcon className="w-4 h-4 text-primary" />
        <span className="font-semibold text-sm">
          {outputCurrency.symbol} per {inputCurrency.symbol}
        </span>
      </div>

      {/* Input Container */}
      <div className="bg-input/50 hover:bg-input/70 dark:bg-input/30 dark:hover:bg-input/50 border border-border/30 dark:border-border/40 rounded-2xl transition-all duration-200 group-hover:border-border/60 dark:group-hover:border-border/70 backdrop-blur-sm">
        <input
          value={limitPrice}
          onInput={(e) => {
            const value = e.currentTarget.value;
            if (value === "0") {
              setLimitPrice("");
              return;
            }

            setLimitPrice(value);
          }}
          className="w-full bg-transparent text-2xl sm:text-3xl font-bold pt-14 pb-4 pr-24 sm:pr-32 pl-4 sm:pl-6 outline-none placeholder:text-muted-foreground/50 text-foreground"
          placeholder="0.00"
        />

        {/* Label */}
        <div className="absolute top-4 left-4 sm:left-6 text-sm font-medium text-muted-foreground">
          Limit Price
        </div>
      </div>
    </div>
  );
};
