import { atom } from "jotai";
import {
  independentFieldAtom,
  limitPriceAtom,
  typedValueAtom,
} from "./fieldAtoms";
import { Field } from "@/types";
import { BigNumber as BN } from "bignumber.js";
import { Atom } from "jotai";

const dependentAmountAtom = atom((get) => {
  const independentField = get(independentFieldAtom);
  const typedValue = get(typedValueAtom);
  const limitPrice = get(limitPriceAtom);

  if (!typedValue || !limitPrice) return "";

  if (independentField === Field.CURRENCY_A) {
    return BN(typedValue).multipliedBy(limitPrice).toFixed(6);
  }

  return BN(limitPrice).dividedBy(typedValue).toFixed(6);
});

export const formattedAmountsAtom: Atom<{ [key in Field]: string }> = atom(
  (get) => {
    const dependentAmount = get(dependentAmountAtom);
    const typedValue = get(typedValueAtom);
    const independentField = get(independentFieldAtom);

    if (independentField === Field.CURRENCY_A) {
      return {
        [Field.CURRENCY_A]: typedValue,
        [Field.CURRENCY_B]: dependentAmount,
      };
    }

    return {
      [Field.CURRENCY_A]: dependentAmount,
      [Field.CURRENCY_B]: typedValue,
    };
  }
);

export const setTypedValueAtom = atom(
  null,
  (_, set, { value, field }: { value: string; field: Field }) => {
    set(independentFieldAtom, field);
    set(typedValueAtom, value);
  }
);
