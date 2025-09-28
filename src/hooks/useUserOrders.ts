import { API } from "@/constants/address";
import { HistoryOrder } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

export const useUserOrders = () => {
  const { chainId, address } = useAccount();
  return useQuery({
    queryKey: ["orders", chainId, address],
    queryFn: () => {
      return fetch(API + `/order/user/${chainId}/${address}/false`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json() as Promise<HistoryOrder[]>);
    },
    enabled: !!chainId && !!address,
    refetchInterval: 3000,
  });
};
