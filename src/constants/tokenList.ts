import { bsc, mainnet } from "viem/chains";
import bcsTokenList from "./tokenLists/bscTokenList.json";

export const tokenList = {
  [bsc.id]: bcsTokenList.tokens,
  [mainnet.id]: [],
};
