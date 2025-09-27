import { Navbar } from "@/components/Navbar";
import { SwapForm } from "@/views/SwapForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-slate-950 backdrop-blur-2xl">
      <Navbar />
      <div>
        <SwapForm />
      </div>
    </div>
  );
}
