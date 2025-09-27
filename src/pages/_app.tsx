import { ThemeProvider } from "@/components/theme-provider";
import { bitcount } from "@/constants/font";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Providers>
        <div
          className={
            "min-h-screen relative overflow-hidden " + bitcount.className
          }
        >
          <Navbar />
          <Component {...pageProps} />
        </div>
      </Providers>
    </ThemeProvider>
  );
}
