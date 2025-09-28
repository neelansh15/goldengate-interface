import { tokenList } from "@/constants/tokenList";
import { useUserOrders } from "@/hooks/useUserOrders";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

export const UserOrders = () => {
  const { chainId } = useAccount();
  const { data: orders } = useUserOrders();
  const currentTokenList = tokenList[chainId as keyof typeof tokenList];

  return (
    <div>
      <table className="table w-full max-w-[90%] mx-16 bg-gray-800 rounded-xl">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Sell</th>
            <th>Buy</th>
            <th>Total Orders</th>
            <th>Status</th>
            <th>Interval</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => {
            const currency0 = currentTokenList.find(
              (token) => token.address === order.currency_0
            );
            const currency1 = currentTokenList.find(
              (token) => token.address === order.currency_1
            );
            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td className=" items-center gap-2">
                  <span>
                    {formatUnits(
                      BigInt(order.amount_0),
                      currency0?.decimals ?? 18
                    )}
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      src={currency0?.logoURI}
                      alt={currency0?.symbol}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>{currency0?.symbol}</span>
                  </div>
                </td>
                <td className=" items-center gap-2">
                  <span>
                    {formatUnits(
                      BigInt(order.amount_1),
                      currency1?.decimals ?? 18
                    )}
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      src={currency1?.logoURI}
                      alt={currency1?.symbol}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>{currency1?.symbol}</span>
                  </div>
                </td>
                <td>{order.total_trades}</td>
                <td>{order.status}</td>
                <td>{order.interval} min(s)</td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
