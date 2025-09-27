import { atom } from "jotai";
import {
  batchSizeAtom,
  intervalAtom,
  limitPriceAtom,
  maxIntervalAtom,
} from "./fieldAtoms";
import { formattedAmountsAtom } from "./inputAtoms";
import { Field } from "@/types";

export const fieldsValidAtom = atom((get) => {
  const formattedAmounts = get(formattedAmountsAtom);

  const limitPrice = get(limitPriceAtom);
  const batchSize = get(batchSizeAtom);
  const interval = get(intervalAtom);
  const maxInterval = get(maxIntervalAtom);

  const isIntervalValid = Number(interval) <= Number(maxInterval);

  return (
    formattedAmounts[Field.CURRENCY_A] !== "" &&
    formattedAmounts[Field.CURRENCY_B] !== "" &&
    limitPrice !== "" &&
    batchSize !== "" &&
    interval !== "" &&
    maxInterval !== "" &&
    isIntervalValid
  );
});
