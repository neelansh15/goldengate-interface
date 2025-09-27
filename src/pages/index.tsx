import { Navbar } from "@/components/Navbar";
import { SwapForm } from "@/views/SwapForm";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg-light dark:gradient-bg-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-3xl dark:from-pink-500/8 dark:to-purple-600/8" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl dark:from-blue-500/8 dark:to-cyan-500/8" />
      
      {/* Additional subtle glow for dark mode */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl dark:block hidden" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-12 flex justify-center">
          <SwapForm />
        </main>
      </div>
    </div>
  );
}
