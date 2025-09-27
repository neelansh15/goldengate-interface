import { inputCurrencyAtom, outputCurrencyAtom } from "@/atoms/currencyAtoms";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { bitcount } from "@/constants/font";
import { tokenList } from "@/constants/tokenList";
import { Field } from "@/types";
import { useSetAtom } from "jotai";
import { PropsWithChildren } from "react";

interface TokenSelectModalProps extends PropsWithChildren {
  field: Field;
}
export function TokenSelectModal({ children, field }: TokenSelectModalProps) {
  const setInputCurrency = useSetAtom(inputCurrencyAtom);
  const setOutputCurrency = useSetAtom(outputCurrencyAtom);

  return (
    <Dialog>
      <form className={bitcount.className}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <h1 className={bitcount.className + " text-2xl"}>Select a token</h1>
          </DialogHeader>
          {tokenList.map((token) => (
            <DialogClose>
              <div
                className={
                  bitcount.className +
                  " flex justify-between items-center hover:bg-slate-900 p-2 rounded-full transition-all cursor-pointer"
                }
                onClick={() => {
                  field === Field.CURRENCY_A
                    ? setInputCurrency(token)
                    : setOutputCurrency(token);
                }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={token.image}
                    alt={token.symbol}
                    width="24px"
                    height="24px"
                  />
                  <p className="font-bold mt-1">{token.symbol}</p>
                </div>
                <div>{/* balance here perhaps */}</div>
              </div>
            </DialogClose>
          ))}
        </DialogContent>
      </form>
    </Dialog>
  );
}
