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
  total_trades: number | undefined;
  interval: number | undefined;
  max_interval: number | undefined;
};

export interface HistoryOrder {
  id: number
  created_at: string
  chain_id: number
  amount_0: string
  amount_1: string
  total_trades: number
  interval: number
  address: string
  currency_0: string
  currency_1: string
  status: string
  signature: any
  max_interval: number
  executions: Executions
}

export interface Executions {
  error: any
  data: Daum[]
  count: any
  status: number
  statusText: string
}

export interface Daum {
  id: number
  created_at: string
  order_id: number
  chain_id: number
  amount_0: string
  amount_1: string
  start_time: string
  address: string
  currency_0: string
  currency_1: string
  signature: any
  status: string
}

