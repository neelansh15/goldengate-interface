import { inputCurrencyAtom, outputCurrencyAtom } from "@/atoms/currencyAtoms";
import {
  batchSizeAtom,
  intervalAtom,
  limitPriceAtom,
  maxIntervalAtom,
} from "@/atoms/fieldAtoms";

import { useAtomValue } from "jotai";
import { useCallback } from "react";

// Dynamic import to avoid JSON import attribute issues
import { useAccount, useChainId, useWalletClient } from "wagmi";
import { Field, Order } from "@/types";
import { formattedAmountsAtom } from "@/atoms/inputAtoms";
import { Address, parseUnits, stringify } from "viem";
import { API } from "@/constants/address";

export const usePlaceOrder = () => {
  const { data: walletClient } = useWalletClient();
  const { address, chainId } = useAccount();

  const inputCurrency = useAtomValue(inputCurrencyAtom);
  const outputCurrency = useAtomValue(outputCurrencyAtom);
  const limitPrice = useAtomValue(limitPriceAtom);
  const batchSize = useAtomValue(batchSizeAtom);
  const interval = useAtomValue(intervalAtom);
  const maxInterval = useAtomValue(maxIntervalAtom);

  const formattedAmounts = useAtomValue(formattedAmountsAtom);

  const placeOrder = useCallback(async () => {
    if (!chainId) return;

    try {
      // Dynamic import to avoid JSON import attribute issues
      const { FetchProviderConnector, MakerTraits, randBigInt, Sdk } =
        await import("@1inch/limit-order-sdk");

      // Send money to Operator
      const order: Order = {
        address: address as Address,
        chain_id: chainId as number,
        currency_0: inputCurrency.address as Address,
        currency_1: outputCurrency.address as Address,
        amount_0: parseUnits(
          formattedAmounts[Field.CURRENCY_A],
          inputCurrency.decimals
        ).toString(),
        amount_1: parseUnits(
          formattedAmounts[Field.CURRENCY_B],
          outputCurrency.decimals
        ).toString(),
        batch_size: Number(batchSize),
        interval: Number(interval),
        max_interval: Number(maxInterval),
      };

      console.log("placeOrder", order);

      const result = await fetch(API + "/order", {
        method: "POST",
        body: stringify(order),
      });

      console.log("placeOrder Result", result);

      // const expiresIn = 120n; // 2m
      // const expiration = BigInt(Math.floor(Date.now() / 1000)) + expiresIn;

      // const UINT_40_MAX = (1n << 48n) - 1n;

      // const makerTraits = MakerTraits.default()
      //   .withExpiration(expiration)
      //   // .withNonce(randBigInt(UINT_40_MAX));

      // const sdk = new Sdk({
      //   authKey: process.env.NEXT_PUBLIC_1INCH_AUTH_KEY as string,
      //   networkId: chainId as number,
      //   httpConnector: new FetchProviderConnector(),
      // });

      // const sdkOrder = await sdk.createOrder(
      //   {
      //     makerAsset: inputCurrency.address as Address,
      //     takerAsset: outputCurrency.address as Address,
      //     makingAmount: parseUnits(
      //       formattedAmounts[Field.CURRENCY_A],
      //       inputCurrency.decimals
      //     ),
      //     takingAmount: parseUnits(
      //       formattedAmounts[Field.CURRENCY_B],
      //       outputCurrency.decimals
      //     ),
      //     maker: address as Address,
      //     // salt? : bigint
      //     // receiver? : Address
      //   },
      //   makerTraits
      // );

      // const typedData = sdkOrder.getTypedData(chainId as number);
      // const signature = await walletClient?.signTypedData(
      //   typedData.domain,
      //   { Order: typedData.types.Order },
      //   typedData.message
      // );

      // await sdk.submitOrder(sdkOrder, signature);
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  }, [
    inputCurrency,
    outputCurrency,
    limitPrice,
    batchSize,
    interval,
    maxInterval,
  ]);

  return {
    placeOrder,
  };
};
