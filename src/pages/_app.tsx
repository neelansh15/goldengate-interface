import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { bitcount } from "@/constants/font";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bitcount_Prop_Single } from "next/font/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={bitcount.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
