import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ThemeButton } from "./ThemeButton";
import { Zap } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="relative z-20 flex justify-between items-center p-6 md:p-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 uniswap-gradient rounded-xl blur-sm opacity-75"></div>
          <div className="relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl p-2">
            <Zap className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold uniswap-gradient-text">
          GoldenGate
        </h1>
      </div>


      {/* Controls */}
      <div className="flex items-center gap-3">
        <ThemeButton />
        <div className="connect-button-wrapper">
          <ConnectButton 
            showBalance={false}
            chainStatus="icon"
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }}
          />
        </div>
      </div>
    </nav>
  );
};
