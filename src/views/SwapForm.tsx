import { CurrencyInput } from "@/components/CurrencyInput";
import { LimitPriceInput } from "@/components/LimitPriceInput";
import { Field } from "@/types";
import { ArrowDownIcon } from "lucide-react";

export const SwapForm = () => {
  return (
    <div className="w-full max-w-[480px] px-4 sm:px-0">
      {/* Main Card */}
      <div className="bg-card/90 dark:bg-card/95 backdrop-blur-xl border border-border/50 dark:border-border/60 rounded-3xl p-4 sm:p-6 card-shadow dark:card-shadow-dark hover-scale">
        <div className="flex flex-col gap-3 relative">
          {/* Sell Input */}
          <div className="relative">
            <CurrencyInput field={Field.CURRENCY_A} label="Sell" />
          </div>

          {/* Swap Arrow Button */}
          <div className="flex justify-center relative -my-2 z-20">
            <button className="bg-card hover:bg-accent border-2 border-border/50 rounded-xl p-2 cursor-pointer transition-all duration-200 hover:scale-110 hover:border-primary/50 shadow-lg">
              <ArrowDownIcon className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Buy Input */}
          <div className="relative">
            <CurrencyInput field={Field.CURRENCY_B} label="Buy" />
          </div>

          {/* Limit Price Input */}
          <div className="relative mt-2">
            <LimitPriceInput />
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-6">
          <button className="w-full uniswap-gradient hover:shadow-lg hover:shadow-primary/20 rounded-2xl py-4 px-6 font-semibold text-white cursor-pointer transition-all duration-200 hover:scale-[1.02] text-lg">
            Place Limit Order
          </button>
        </div>

        {/* Order Info */}
        <div className="mt-4 p-4 bg-muted/30 rounded-xl border border-border/30">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Network Fee</span>
            <span className="font-medium">~$0.50</span>
          </div>
        </div>
      </div>
    </div>
  );
};
