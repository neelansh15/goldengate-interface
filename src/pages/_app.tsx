import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bitcount_Prop_Single } from "next/font/google";

const bitcount = Bitcount_Prop_Single({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={bitcount.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
