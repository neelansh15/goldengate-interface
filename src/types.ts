import { Address } from "viem";
import { tokenList } from "./constants/tokenList";

export enum Field {
  CURRENCY_A = "CURRENCY_A",
  CURRENCY_B = "CURRENCY_B",
}

export type Currency = (typeof tokenList)[keyof typeof tokenList][0];

export type Order = {
  chain_id: number;
  address: Address;
  currency_0: Address;
  currency_1: Address;
  amount_0: string;
  amount_1: string;
  batch_size: number | undefined;
  interval: number | undefined;
  max_interval: number | undefined;
};
