import { ThemeProvider } from "@/components/theme-provider";
import { bitcount } from "@/constants/font";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import TickerTape from "@/components/TickerTape";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <Providers>
        <div
          className={
            "min-h-screen relative overflow-hidden " + bitcount.className
          }
        >
          <Navbar />
          <TickerTape />
          <Component {...pageProps} />
          <Toaster />
        </div>
      </Providers>
    </ThemeProvider>
  );
}
