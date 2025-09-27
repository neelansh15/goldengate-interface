import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ThemeButton } from "./ThemeButton";

export const Navbar = () => {
  return (
    <nav className="relative z-20 flex justify-between items-center p-6 md:p-8">
      <div className="flex items-center gap-3">
        {/* Some Logo here */}
        <h1 className="text-2xl md:text-3xl font-semibold">Golden Whales</h1>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <ThemeButton />
        <div className="connect-button-wrapper">
          <ConnectButton
            showBalance={false}
            chainStatus="icon"
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          />
        </div>
      </div>
    </nav>
  );
};
