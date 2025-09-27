import { ChevronDownIcon } from "lucide-react";
import { TokenSelectModal } from "./TokenSelectModal";
import { inputCurrencyAtom, outputCurrencyAtom } from "@/atoms/currencyAtoms";
import { useAtomValue, useSetAtom } from "jotai";
import { formattedAmountsAtom, setTypedValueAtom } from "@/atoms/inputAtoms";
import { Field } from "@/types";
import { useAccount } from "wagmi";
import { useCurrencyBalance } from "@/hooks/useCurrencyBalance";
import { formatUnits, parseUnits } from "viem";

interface CurrencyInputProps {
  field: Field;
  label?: any;
}
export const CurrencyInput = ({ field, label }: CurrencyInputProps) => {
  const { isConnected } = useAccount();

  // Use 1inch api to fetch balance
  const currency = useAtomValue(
    field === Field.CURRENCY_A ? inputCurrencyAtom : outputCurrencyAtom
  );

  const formattedAmounts = useAtomValue(formattedAmountsAtom);
  const value = formattedAmounts[field];

  const { data: balance } = useCurrencyBalance(currency);

  const setValue = useSetAtom(setTypedValueAtom);

  return (
    <div className="relative group">
      {/* Token Select Button */}
      <TokenSelectModal field={field}>
        <button className="absolute top-4 right-4 z-10 bg-muted/80 hover:bg-muted border border-border/50 rounded-full py-2 px-4 flex items-center gap-2 cursor-pointer transition-colors duration-200 backdrop-blur-sm">
          <img
            src={currency?.logoURI}
            alt={currency?.symbol}
            width="20px"
            height="20px"
            className="rounded-full"
          />
          <span className="font-semibold text-sm mt-0.5">
            {currency?.symbol}
          </span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </TokenSelectModal>

      {/* Input Container */}
      <div className="bg-input/50 hover:bg-input/70 dark:bg-input/30 dark:hover:bg-input/50 border border-border/30 dark:border-border/40 rounded-2xl transition-all duration-200 group-hover:border-border/60 dark:group-hover:border-border/70 backdrop-blur-sm">
        <input
          value={value}
          onInput={(e) => {
            const typedValue = e.currentTarget.value;
            if (typedValue === "0") return;

            setValue({
              value: typedValue,
              field,
            });
          }}
          className="w-full bg-transparent text-2xl sm:text-3xl font-bold pt-14 pb-8 pr-24 sm:pr-32 pl-4 sm:pl-6 outline-none placeholder:text-muted-foreground/50 text-foreground"
          placeholder="0.00"
        />

        {/* Label */}
        {label && (
          <div className="absolute top-4 left-4 sm:left-6 text-sm font-medium text-muted-foreground">
            {label}
          </div>
        )}

        {isConnected && (
          <div className="absolute bottom-3 left-4 sm:left-6 text-xs text-muted-foreground">
            Balance: {formatUnits(balance ?? 0n, currency.decimals)}
          </div>
        )}
      </div>
    </div>
  );
};
