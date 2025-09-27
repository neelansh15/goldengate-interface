import { Navbar } from "@/components/Navbar";
import { bitcount } from "@/constants/font";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bitcount_Prop_Single } from "next/font/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={bitcount.className}>
      <Component {...pageProps} />
    </div>
  );
}
