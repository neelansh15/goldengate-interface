import { tokenList } from "@/constants/tokenList";
import { atom } from "jotai";

export const inputCurrencyAtom = atom<typeof tokenList[56][0]>(tokenList[56][0]);
export const outputCurrencyAtom = atom<typeof tokenList[56][1]>(tokenList[56][1]);
