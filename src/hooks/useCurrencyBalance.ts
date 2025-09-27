import { Currency } from "@/types";
import { erc20Abi } from "viem";
import { useAccount, useReadContract } from "wagmi";

export const useCurrencyBalance = (currency: Currency) => {
  const { address } = useAccount();

  return useReadContract({
    address: currency.address as `0x${string}`,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address as `0x${string}`],
  });
};
