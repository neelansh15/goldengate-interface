import { bsc, mainnet } from "viem/chains";
import bcsTokenList from "./tokenLists/bscTokenList.json";
import ethTokenList from "./tokenLists/ethTokenList.json";

export const tokenList = {
  [bsc.id]: bcsTokenList.tokens,
  [mainnet.id]: ethTokenList.tokens,
};
