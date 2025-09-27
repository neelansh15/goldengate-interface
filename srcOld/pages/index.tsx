import { Navbar } from "@/components/Navbar";
import { SwapForm } from "@/views/SwapForm";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-black dark:via-gray-900 dark:to-black" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-3xl dark:from-pink-500/3 dark:to-purple-600/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl dark:from-blue-500/3 dark:to-cyan-500/3" />
      
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
