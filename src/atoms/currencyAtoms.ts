import { tokenList } from "@/constants/tokenList";
import { atom } from "jotai";

export const inputCurrencyAtom = atom<any>(tokenList[0]);
export const outputCurrencyAtom = atom<any>(tokenList[1]);
