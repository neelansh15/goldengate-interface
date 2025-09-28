import { bsc, mainnet, polygon } from "viem/chains";
import bcsTokenList from "./tokenLists/bscTokenList.json";
import ethTokenList from "./tokenLists/ethTokenList.json";
import polygonTokenList from "./tokenLists/polygonTokenList.json";

export const tokenList = {
  [bsc.id]: bcsTokenList.tokens,
  [mainnet.id]: ethTokenList.tokens,
  [polygon.id]: polygonTokenList.tokens,
};
