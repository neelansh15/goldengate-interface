import { tokenList } from "./constants/tokenList";

export enum Field {
  CURRENCY_A = "CURRENCY_A",
  CURRENCY_B = "CURRENCY_B",
}

export type Currency = typeof tokenList[keyof typeof tokenList][0];
