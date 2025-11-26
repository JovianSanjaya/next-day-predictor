'use client';

import { useState, useEffect } from 'react';

const LOADING_MESSAGES = [
  'Fetching data from NASA...',
  'Hacking government servers...',
  'Consulting ancient prophecies...',
  'Asking the Magic 8-Ball...',
  'Processing quantum fluctuations...',
  'Decoding the matrix...',
  'Communicating with aliens...',
  'Analyzing cosmic rays...',
  'Recalculating the space-time continuum...',
  'Bribing the weather gods...',
  'Reading tea leaves...',
  'Consulting fortune cookies...',
];

export default function LoadingScreen() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 px-4">
      {/* Animated spinner */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32">
        <div className="absolute inset-0 rounded-full border-4 border-slate-700/50"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-400 animate-spin"></div>
        <div className="absolute inset-4 rounded-full border-2 border-transparent border-b-indigo-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
      </div>

      {/* Loading text */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Predicting...</h2>
        <div className="h-6 sm:h-8 flex items-center justify-center">
          <p className="text-base sm:text-lg text-cyan-300 animate-pulse font-medium min-w-[280px] sm:min-w-[320px] px-4">
            {LOADING_MESSAGES[currentMessageIndex]}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 sm:w-80 h-1.5 bg-slate-700/40 rounded-full overflow-hidden border border-slate-600/30">
        <div className="h-full bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 animate-pulse shadow-lg shadow-cyan-500/50"></div>
      </div>
    </div>
  );
}
