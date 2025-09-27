import { ThemeProvider } from "@/components/theme-provider";
import { bitcount } from "@/constants/font";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "@/components/Providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Providers>
        <div className={bitcount.className}>
          <Component {...pageProps} />
        </div>
      </Providers>
    </ThemeProvider>
  );
}
