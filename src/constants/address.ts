import { bsc } from "viem/chains";

// need to set approvals to this address
export const ONE_INCH_AGGREGATOR_ADDRESS = {
  [bsc.id]: "",
};

export const OPERATOR_ADDRESS = "0x3230B799d1E7dDE6cF1B97Cd8AE991EfAe705e41";

export const API =
  process.env.NODE_ENV == "development"
    ? "http://localhost:8008"
    : "https://goldengate-service.onrender.com";
