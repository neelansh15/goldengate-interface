import { Field } from "@/types";
import { atom } from "jotai";

export const independentFieldAtom = atom(Field.CURRENCY_A);
export const typedValueAtom = atom("");
export const limitPriceAtom = atom("")
export const batchSizeAtom = atom("")
export const intervalAtom = atom("")
export const maxIntervalAtom = atom("")
