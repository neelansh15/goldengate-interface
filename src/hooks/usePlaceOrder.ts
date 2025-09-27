import { inputCurrencyAtom, outputCurrencyAtom } from "@/atoms/currencyAtoms";
import { limitPriceAtom } from "@/atoms/fieldAtoms";

import { useAtomValue, useSetAtom } from "jotai";

export const usePlaceOrder = () => {
  const inputCurrency = useAtomValue(inputCurrencyAtom);
  const outputCurrency = useAtomValue(outputCurrencyAtom);
  const limitPrice = useAtomValue(limitPriceAtom);
};
