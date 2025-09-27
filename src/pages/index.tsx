import TradingViewChart from "@/components/TradingViewChart";
import { SwapForm } from "@/views/SwapForm";

export default function Home() {
  return (
    <div className="md:mx-8 pt-6 grid md:grid-cols-2">
      <TradingViewChart />
      <div className="flex justify-center">
        <SwapForm />
      </div>
    </div>
  );
}
