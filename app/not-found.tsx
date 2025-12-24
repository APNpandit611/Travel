"use client"
import Link from "next/link";
import Image from "next/image";
import { Compass, Home, Map, MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#050505] flex items-center justify-center font-sans">
      {/* Background Image with heavy blur for that 'lost' feeling */}
      <div className="absolute inset-0">
        <Image
          src="/404-mountain.jpg" // Use a misty or snowy mountain image
          alt="Lost in Himalayas"
          fill
          className="object-cover opacity-40 blur-sm scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 max-w-2xl w-full mx-4">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden">
          
          {/* Animated Compass Icon */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg transform rotate-12 transition-transform hover:rotate-0 duration-500">
              <Compass className="w-12 h-12 text-white animate-[spin_10s_linear_infinite]" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-2 tracking-tighter drop-shadow-2xl">
            4<span className="text-blue-500 inline-block animate-bounce">0</span>4
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Expedition Lost!
          </h2>
          
          <p className="text-gray-300 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
            It looks like you’ve wandered off the trail. Even the best trekkers get lost in the mist sometimes.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-xl"
            >
              <Home className="w-5 h-5" />
              Base Camp (Home)
            </Link>
            
            <Link 
              href="/activities/trekking" 
              className="flex items-center gap-2 bg-white/5 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              <Map className="w-5 h-5" />
              Find a Trail
            </Link>
          </div>

          {/* Subtle Back Button */}
          <button 
            onClick={() => window.history.back()}
            className="mt-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2 mx-auto text-sm font-medium group"
          >
            <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to previous ridge
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/20 blur-[80px] rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/20 blur-[80px] rounded-full" />
      </div>
    </main>
  );
}